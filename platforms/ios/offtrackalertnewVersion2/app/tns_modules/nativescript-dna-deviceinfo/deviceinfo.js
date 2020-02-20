"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var deviceinfo_interface_1 = require("./deviceinfo.interface");
var network_provider_1 = require("./network-provider");
var utility_1 = require("./utility");
function staticDecorator() {
    return function (constructor) { };
}
exports.staticDecorator = staticDecorator;
var DeviceInfo = (function () {
    function DeviceInfo() {
    }
    DeviceInfo_1 = DeviceInfo;
    DeviceInfo.totalMemory = function () {
        return NSProcessInfo.processInfo.physicalMemory;
    };
    DeviceInfo.freeMemory = function () {
        var KERN_SUCCESS = 0;
        var HOST_VM_INFO = 2;
        var VM_STATISTICS_SIZE = 15 * 4;
        var hostSize = new interop.Reference(15);
        var hostPort = mach_host_self();
        var pageSize = new interop.Reference(0);
        host_page_size(hostPort, pageSize);
        var vmStat = interop.alloc(VM_STATISTICS_SIZE);
        var freeMem = -1;
        if (host_statistics(hostPort, HOST_VM_INFO, vmStat, hostSize) === KERN_SUCCESS) {
            var vmStatRef = new interop.Reference(vm_statistics, vmStat);
            freeMem = vmStatRef.value.free_count * pageSize.value;
        }
        return freeMem;
    };
    DeviceInfo.totalStorageSpace = function () {
        var totalSpace = 0;
        var storage = DeviceInfo_1.fileSystemAttributes();
        if (storage) {
            var fileSystemSizeInBytes = storage.objectForKey(NSFileSystemSize);
            totalSpace = fileSystemSizeInBytes;
        }
        return totalSpace;
    };
    DeviceInfo.freeStorageSpace = function () {
        var freeStorageSpace = -1;
        var sysVer = Number.parseInt(UIDevice.currentDevice.systemVersion);
        var sysName = UIDevice.currentDevice.systemName.toLocaleLowerCase();
        if ((sysName === "ios" && sysVer >= 11) || sysName !== "ios") {
            var fileURL = NSURL.alloc().initFileURLWithPath(NSHomeDirectory());
            var results = fileURL.resourceValuesForKeysError([NSURLVolumeAvailableCapacityForImportantUsageKey]);
            if (results) {
                freeStorageSpace = results.objectForKey(NSURLVolumeAvailableCapacityForImportantUsageKey);
            }
        }
        else {
            var storage = DeviceInfo_1.fileSystemAttributes();
            if (storage) {
                var fileSystemSizeInBytes = storage.objectForKey(NSFileSystemFreeSize);
                freeStorageSpace = fileSystemSizeInBytes;
            }
        }
        return freeStorageSpace;
    };
    DeviceInfo.totalExternalStorageSpace = function () {
        return null;
    };
    DeviceInfo.freeExternalStorageSpace = function () {
        return null;
    };
    DeviceInfo.deviceId = function () {
        var systemInfo = new interop.Reference();
        uname(systemInfo);
        return NSString.stringWithUTF8String(systemInfo.value.machine).toString();
    };
    DeviceInfo.deviceName = function () {
        var dId = DeviceInfo_1.deviceId();
        var deviceFound = dId in DeviceInfo_1.deviceNameByCode;
        if (!deviceFound) {
            if (dId.includes("iPod")) {
                return "iPod Touch";
            }
            else if (dId.includes("iPad")) {
                return "iPad";
            }
            else if (dId.includes("iPhone")) {
                return "iPhone";
            }
            else if (dId.includes("AppleTV")) {
                return "AppleTV";
            }
        }
        return DeviceInfo_1.deviceNameByCode[dId];
    };
    DeviceInfo.deviceLocale = function () {
        return NSLocale.preferredLanguages.objectAtIndex(0);
    };
    DeviceInfo.deviceCountry = function () {
        return NSLocale.currentLocale.objectForKey(NSLocaleCountryCode);
    };
    DeviceInfo.timezone = function () {
        return NSTimeZone.localTimeZone.name;
    };
    DeviceInfo.userAgent = function () {
        var webView = UIWebView.alloc().initWithFrame(CGRectZero);
        return webView.stringByEvaluatingJavaScriptFromString("navigator.userAgent");
    };
    DeviceInfo.appName = function () {
        return NSBundle.mainBundle.objectForInfoDictionaryKey("CFBundleDisplayName");
    };
    DeviceInfo.appVersion = function () {
        return NSBundle.mainBundle.objectForInfoDictionaryKey("CFBundleShortVersionString");
    };
    DeviceInfo.bundleId = function () {
        return NSBundle.mainBundle.objectForInfoDictionaryKey("CFBundleIdentifier");
    };
    DeviceInfo.bundleNumber = function () {
        return NSBundle.mainBundle.objectForInfoDictionaryKey("CFBundleVersion");
    };
    DeviceInfo.systemManufacturer = function () {
        return "Apple";
    };
    DeviceInfo.batteryLevel = function () {
        UIDevice.currentDevice.batteryMonitoringEnabled = true;
        var level = UIDevice.currentDevice.batteryLevel * 100;
        UIDevice.currentDevice.batteryMonitoringEnabled = false;
        return level;
    };
    DeviceInfo.cellularServiceProviders = function () {
        var carriers = [];
        var telephonyInfo = CTTelephonyNetworkInfo.alloc().init();
        var sysVer = Number.parseInt(UIDevice.currentDevice.systemVersion);
        var sysName = UIDevice.currentDevice.systemName.toLocaleLowerCase();
        if (sysName === "ios" && sysVer >= 12) {
            var cellularProviders = telephonyInfo.serviceSubscriberCellularProviders.allValues;
            for (var i = 0; i < cellularProviders.count; i++) {
                var carrier = DeviceInfo_1.prepareCarrier(cellularProviders[i]);
                var ratValues = telephonyInfo.serviceCurrentRadioAccessTechnology.allValues;
                if (ratValues.count) {
                    var rat = DeviceInfo_1.radioAccessTechnology.get(ratValues.objectAtIndex(0));
                    carrier.networkType = rat ? rat : 0;
                    carrier.generation = deviceinfo_interface_1.wirelessCellularGenerator(rat);
                }
                carriers.push(carrier);
            }
        }
        else {
            var cellularProvider = telephonyInfo.subscriberCellularProvider;
            if (cellularProvider) {
                var carrier = DeviceInfo_1.prepareCarrier(cellularProvider);
                var ratValues = telephonyInfo.serviceCurrentRadioAccessTechnology.allValues;
                if (ratValues.count) {
                    var rat = DeviceInfo_1.radioAccessTechnology.get(ratValues.objectAtIndex(0));
                    carrier.networkType = rat ? rat : 0;
                    carrier.generation = deviceinfo_interface_1.wirelessCellularGenerator(rat);
                }
                carriers.push(carrier);
            }
        }
        return carriers;
    };
    DeviceInfo.externalStoragePaths = function () {
        return [];
    };
    DeviceInfo.storageVolumes = function () {
        return [];
    };
    DeviceInfo.wifiSSID = function () {
        var interfaces = CNCopySupportedInterfaces();
        if (interfaces && interfaces.count) {
            var interfaceName = CFArrayGetValueAtIndex(interfaces, 0);
            var dict = CNCopyCurrentNetworkInfo(interfaceName);
            if (dict !== null && dict.count) {
                return dict.objectForKey(kCNNetworkInfoKeySSID);
            }
        }
        return "";
    };
    DeviceInfo.displayMetrics = function () {
        var nativeScale = UIScreen.mainScreen.nativeScale;
        var pixelPerInch = 0.0;
        if (UIDevice.currentDevice.userInterfaceIdiom === 0) {
            pixelPerInch = 163 * nativeScale;
        }
        else if (UIDevice.currentDevice.userInterfaceIdiom === 1) {
            pixelPerInch = 132 * nativeScale;
        }
        else {
            pixelPerInch = 160 * nativeScale;
        }
        var dm = {};
        dm.scale = nativeScale;
        dm.pixelPerInch = pixelPerInch;
        dm.widthInPixels = UIScreen.mainScreen.bounds.size.width * nativeScale;
        dm.heightInPixels = UIScreen.mainScreen.bounds.size.height * nativeScale;
        var vertical = dm.heightInPixels / pixelPerInch;
        var horizontal = dm.widthInPixels / pixelPerInch;
        var diagnoalInInches = Math.sqrt(Math.pow(horizontal, 2) + Math.pow(vertical, 2));
        dm.diagonalInInches = utility_1.round(diagnoalInInches, 1);
        return dm;
    };
    DeviceInfo.isPortrait = function () {
        return UIDevice.currentDevice.orientation === 1 ||
            UIDevice.currentDevice.orientation === 2;
    };
    DeviceInfo.isTablet = function () {
        return UIDevice.currentDevice.userInterfaceIdiom === 1;
    };
    DeviceInfo.is24Hour = function () {
        var format = NSDateFormatter.dateFormatFromTemplateOptionsLocale("j", 0, NSLocale.currentLocale);
        return format.includes("a") === false;
    };
    DeviceInfo.isEmulator = function () {
        return DeviceInfo_1.deviceId() === "i386" || DeviceInfo_1.deviceId() === "x86_64";
    };
    DeviceInfo.isBatteryCharging = function () {
        UIDevice.currentDevice.batteryMonitoringEnabled = true;
        var batteryStatus = UIDevice.currentDevice.batteryState;
        UIDevice.currentDevice.batteryMonitoringEnabled = false;
        return batteryStatus === 2;
    };
    DeviceInfo.isLocationEnabled = function () {
        return new Promise(function (resolv) {
            if (CLLocationManager.locationServicesEnabled()) {
                switch (CLLocationManager.authorizationStatus()) {
                    case 4:
                    case 3:
                    case 3:
                        return resolv(true);
                }
            }
            resolv(false);
        });
    };
    DeviceInfo.isBluetoothEnabled = function () {
        return new Promise(function (resolv) {
            var bmDelegate = BluetoothManagerDelegate.new();
            CBCentralManager.alloc().initWithDelegateQueueOptions(bmDelegate.initWithResolverCallback(resolv), null, NSDictionary.dictionaryWithObjectForKey(NSNumber.numberWithInt(0), CBCentralManagerOptionShowPowerAlertKey));
        });
    };
    DeviceInfo.fileSystemAttributes = function () {
        var path = NSSearchPathForDirectoriesInDomains(9, 1, true);
        return NSFileManager.defaultManager.
            attributesOfFileSystemForPathError(path.lastObject);
    };
    DeviceInfo.prepareCarrier = function (cellularProvider) {
        var carrier = {};
        carrier.isoCountryCode = cellularProvider.isoCountryCode;
        carrier.mobileCountryCode = cellularProvider.mobileCountryCode;
        carrier.mobileNetworkCode = cellularProvider.mobileNetworkCode;
        var provider = network_provider_1.networkProviderByMccMnc(carrier.mobileCountryCode, carrier.mobileNetworkCode);
        carrier.country = provider ? provider.country : "";
        carrier.countryCode = provider ? provider.country_code : "";
        carrier.displayName = provider ? provider.network : cellularProvider.carrierName;
        carrier.carrierName = cellularProvider.carrierName;
        return carrier;
    };
    var DeviceInfo_1;
    DeviceInfo.radioAccessTechnology = new Map([
        [CTRadioAccessTechnologyGPRS, 7],
        [CTRadioAccessTechnologyEdge, 5],
        [CTRadioAccessTechnologyWCDMA, 17],
        [CTRadioAccessTechnologyHSDPA, 9],
        [CTRadioAccessTechnologyHSUPA, 11],
        [CTRadioAccessTechnologyCDMA1x, 1],
        [CTRadioAccessTechnologyCDMAEVDORev0, 2],
        [CTRadioAccessTechnologyCDMAEVDORevA, 3],
        [CTRadioAccessTechnologyCDMAEVDORevB, 4],
        [CTRadioAccessTechnologyeHRPD, 6],
        [CTRadioAccessTechnologyLTE, 16],
    ]);
    DeviceInfo.deviceNameByCode = {
        "i386": "iPhone Simulator",
        "x86_64": "iPhone Simulator",
        "iPhone1,1": "iPhone",
        "iPhone1,2": "iPhone 3G",
        "iPhone2,1": "iPhone 3GS",
        "iPhone3,1": "iPhone 4",
        "iPhone3,2": "iPhone 4 GSM Rev A",
        "iPhone3,3": "iPhone 4 CDMA",
        "iPhone4,1": "iPhone 4S",
        "iPhone5,1": "iPhone 5 (GSM)",
        "iPhone5,2": "iPhone 5 (GSM+CDMA)",
        "iPhone5,3": "iPhone 5C (GSM)",
        "iPhone5,4": "iPhone 5C (Global)",
        "iPhone6,1": "iPhone 5S (GSM)",
        "iPhone6,2": "iPhone 5S (Global)",
        "iPhone7,1": "iPhone 6 Plus",
        "iPhone7,2": "iPhone 6",
        "iPhone8,1": "iPhone 6s",
        "iPhone8,2": "iPhone 6s Plus",
        "iPhone8,3": "iPhone SE (GSM+CDMA)",
        "iPhone8,4": "iPhone SE (GSM)",
        "iPhone9,1": "iPhone 7",
        "iPhone9,2": "iPhone 7 Plus",
        "iPhone9,3": "iPhone 7",
        "iPhone9,4": "iPhone 7 Plus",
        "iPhone10,1": "iPhone 8",
        "iPhone10,2": "iPhone 8 Plus",
        "iPhone10,3": "iPhone X Global",
        "iPhone10,4": "iPhone 8",
        "iPhone10,5": "iPhone 8 Plus",
        "iPhone10,6": "iPhone X GSM",
        "iPhone11,2": "iPhone XS",
        "iPhone11,4": "iPhone XS Max",
        "iPhone11,6": "iPhone XS Max Global",
        "iPhone11,8": "iPhone XR",
        "iPhone12,1": "iPhone 11",
        "iPhone12,3": "iPhone 11 Pro",
        "iPhone12,5": "iPhone 11 Pro Max",
        "iPod1,1": "1st Gen iPod",
        "iPod2,1": "2nd Gen iPod",
        "iPod3,1": "3rd Gen iPod",
        "iPod4,1": "4th Gen iPod",
        "iPod5,1": "5th Gen iPod",
        "iPod7,1": "6th Gen iPod",
        "iPod9,1": "7th Gen iPod",
        "iPad1,1": "iPad",
        "iPad1,2": "iPad 3G",
        "iPad2,1": "2nd Gen iPad",
        "iPad2,2": "2nd Gen iPad GSM",
        "iPad2,3": "2nd Gen iPad CDMA",
        "iPad2,4": "2nd Gen iPad New Revision",
        "iPad3,1": "3rd Gen iPad",
        "iPad3,2": "3rd Gen iPad CDMA",
        "iPad3,3": "3rd Gen iPad GSM",
        "iPad2,5": "iPad mini",
        "iPad2,6": "iPad mini GSM+LTE",
        "iPad2,7": "iPad mini CDMA+LTE",
        "iPad3,4": "4th Gen iPad",
        "iPad3,5": "4th Gen iPad GSM+LTE",
        "iPad3,6": "4th Gen iPad CDMA+LTE",
        "iPad4,1": "iPad Air (WiFi)",
        "iPad4,2": "iPad Air (GSM+CDMA)",
        "iPad4,3": "1st Gen iPad Air (China)",
        "iPad4,4": "iPad mini Retina (WiFi)",
        "iPad4,5": "iPad mini Retina (GSM+CDMA)",
        "iPad4,6": "iPad mini Retina (China)",
        "iPad4,7": "iPad mini 3 (WiFi)",
        "iPad4,8": "iPad mini 3 (GSM+CDMA)",
        "iPad4,9": "iPad Mini 3 (China)",
        "iPad5,1": "iPad mini 4 (WiFi)",
        "iPad5,2": "iPad mini 4 (WiFi+Cellular)",
        "iPad5,3": "iPad Air 2 (WiFi)",
        "iPad5,4": "iPad Air 2 (Cellular)",
        "iPad6,3": "iPad Pro (9.7 inch, WiFi)",
        "iPad6,4": "iPad Pro (9.7 inch, WiFi+LTE)",
        "iPad6,7": "iPad Pro (12.9 inch, WiFi)",
        "iPad6,8": "iPad Pro (12.9 inch, WiFi+LTE)",
        "iPad6,11": "iPad (2017)",
        "iPad6,12": "iPad (2017)",
        "iPad7,1": "iPad Pro 2nd Gen (WiFi)",
        "iPad7,2": "iPad Pro 2nd Gen (WiFi+Cellular)",
        "iPad7,3": "iPad Pro 10.5-inch",
        "iPad7,4": "iPad Pro 10.5-inch",
        "iPad7,5": "iPad 6th Gen (WiFi)",
        "iPad7,6": "iPad 6th Gen (WiFi+Cellular)",
        "iPad8,1": "iPad Pro 3rd Gen (11 inch, WiFi)",
        "iPad8,2": "iPad Pro 3rd Gen (11 inch, 1TB, WiFi)",
        "iPad8,3": "iPad Pro 3rd Gen (11 inch, WiFi+Cellular)",
        "iPad8,4": "iPad Pro 3rd Gen (11 inch, 1TB, WiFi+Cellular)",
        "iPad8,5": "iPad Pro 3rd Gen (12.9 inch, WiFi)",
        "iPad8,6": "iPad Pro 3rd Gen (12.9 inch, 1TB, WiFi)",
        "iPad8,7": "iPad Pro 3rd Gen (12.9 inch, WiFi+Cellular)",
        "iPad8,8": "iPad Pro 3rd Gen (12.9 inch, 1TB, WiFi+Cellular)",
        "iPad11,1": "iPad mini 5th Gen (WiFi)",
        "iPad11,2": "iPad mini 5th Gen",
        "iPad11,3": "iPad Air 3rd Gen (WiFi)",
        "iPad11,4": "iPad Air 3rd Gen",
        "Watch1,1": "Apple Watch 38mm case",
        "Watch1,2": "Apple Watch 38mm case",
        "Watch2,6": "Apple Watch Series 1 38mm case",
        "Watch2,7": "Apple Watch Series 1 42mm case",
        "Watch2,3": "Apple Watch Series 2 38mm case",
        "Watch2,4": "Apple Watch Series 2 42mm case",
        "Watch3,1": "Apple Watch Series 3 38mm case (GPS+Cellular)",
        "Watch3,2": "Apple Watch Series 3 42mm case (GPS+Cellular)",
        "Watch3,3": "Apple Watch Series 3 38mm case (GPS)",
        "Watch3,4": "Apple Watch Series 3 42mm case (GPS)",
        "Watch4,1": "Apple Watch Series 4 40mm case (GPS)",
        "Watch4,2": "Apple Watch Series 4 44mm case (GPS)",
        "Watch4,3": "Apple Watch Series 4 40mm case (GPS+Cellular)",
        "Watch4,4": "Apple Watch Series 4 44mm case (GPS+Cellular)",
        "Watch5,1": "Apple Watch Series 5 40mm case (GPS)",
        "Watch5,2": "Apple Watch Series 5 44mm case (GPS)",
        "Watch5,3": "Apple Watch Series 5 40mm case (GPS+Cellular)",
        "Watch5,4": "Apple Watch Series 5 44mm case (GPS+Cellular)"
    };
    DeviceInfo = DeviceInfo_1 = __decorate([
        staticDecorator()
    ], DeviceInfo);
    return DeviceInfo;
}());
exports.DeviceInfo = DeviceInfo;
var BluetoothManagerDelegate = (function (_super) {
    __extends(BluetoothManagerDelegate, _super);
    function BluetoothManagerDelegate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BluetoothManagerDelegate.new = function () {
        return _super.new.call(this);
    };
    BluetoothManagerDelegate.prototype.initWithResolverCallback = function (resolve) {
        this.resolve = resolve;
        return this;
    };
    BluetoothManagerDelegate.prototype.centralManagerDidUpdateState = function (central) {
        this.resolve(central.state === 5);
    };
    BluetoothManagerDelegate.ObjCProtocols = [CBCentralManagerDelegate];
    return BluetoothManagerDelegate;
}(NSObject));
//# sourceMappingURL=deviceinfo.js.map