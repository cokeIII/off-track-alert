"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var application_1 = require("tns-core-modules/application");
var deviceinfo_interface_1 = require("./deviceinfo.interface");
var network_provider_1 = require("./network-provider");
var utility_1 = require("./utility");
function staticDecorator() {
    return function (constructor) { };
}
exports.staticDecorator = staticDecorator;
var ICE_CREAM_SANDWICH = 14;
var JELLY_BEAN_MR1 = 17;
var JELLY_BEAN_MR2 = 18;
var LOLLIPOP = 21;
var LOLLIPOP_MR1 = 22;
var NETWORK_TYPE_GPRS = 1;
var NETWORK_TYPE_EDGE = 2;
var NETWORK_TYPE_UMTS = 3;
var NETWORK_TYPE_CDMA = 4;
var NETWORK_TYPE_EVDO_0 = 5;
var NETWORK_TYPE_EVDO_A = 6;
var NETWORK_TYPE_HSDPA = 8;
var NETWORK_TYPE_HSUPA = 9;
var NETWORK_TYPE_HSPA = 10;
var NETWORK_TYPE_IDEN = 11;
var NETWORK_TYPE_EVDO_B = 12;
var NETWORK_TYPE_LTE = 13;
var NETWORK_TYPE_EHRPD = 14;
var NETWORK_TYPE_HSPAP = 15;
var NETWORK_TYPE_IWLAN = 18;
var Context = android.content.Context;
var StorageManager = android.os.storage.StorageManager;
var DeviceInfo = (function () {
    function DeviceInfo() {
    }
    DeviceInfo_1 = DeviceInfo;
    DeviceInfo.totalMemory = function () {
        return DeviceInfo_1.memoryInfo().totalMem;
    };
    DeviceInfo.freeMemory = function () {
        return DeviceInfo_1.memoryInfo().availMem;
    };
    DeviceInfo.totalStorageSpace = function () {
        try {
            return DeviceInfo_1.totalSpace(android.os.Environment.getDataDirectory());
        }
        catch (exception) {
        }
        return -1;
    };
    DeviceInfo.freeStorageSpace = function () {
        try {
            return DeviceInfo_1.freeSpace(android.os.Environment.getDataDirectory());
        }
        catch (exception) {
        }
        return -1;
    };
    DeviceInfo.totalExternalStorageSpace = function () {
        return null;
    };
    DeviceInfo.freeExternalStorageSpace = function () {
        return null;
    };
    DeviceInfo.deviceId = function () {
        var deviceId = android.os.Build.BOARD;
        if (deviceId) {
            if (!deviceId.toLocaleLowerCase().includes("unknown")) {
                return deviceId;
            }
        }
        return android.os.Build.SERIAL;
    };
    DeviceInfo.deviceName = function () {
        var deviceName = "Unknown";
        var ctx = application_1.android.context;
        var res = ctx.checkCallingOrSelfPermission("android.permission.BLUETOOTH");
        if (res === android.content.pm.PackageManager.PERMISSION_GRANTED) {
            try {
                var adptr = android.bluetooth.BluetoothAdapter.getDefaultAdapter();
                if (adptr) {
                    deviceName = adptr.getName();
                }
            }
            catch (exception) {
            }
        }
        return deviceName;
    };
    DeviceInfo.deviceLocale = function () {
        var ctx = application_1.android.context;
        var current = ctx.getResources().getConfiguration().locale;
        if (android.os.Build.VERSION.SDK_INT >= LOLLIPOP) {
            return current.toLanguageTag();
        }
        else {
            return String().concat(current.getLanguage(), "-", current.getCountry());
        }
    };
    DeviceInfo.deviceCountry = function () {
        var ctx = application_1.android.context;
        var current = ctx.getResources().getConfiguration().locale;
        return current.getCountry();
    };
    DeviceInfo.timezone = function () {
        return java.util.TimeZone.getDefault().getID();
    };
    DeviceInfo.userAgent = function () {
        try {
            return android.webkit.WebSettings.getDefaultUserAgent(application_1.android.context);
        }
        catch (error) {
            console.log(error.message);
        }
        return "";
    };
    DeviceInfo.appName = function () {
        var ctx = application_1.android.context;
        return ctx.getApplicationInfo().loadLabel(ctx.getPackageManager());
    };
    DeviceInfo.appVersion = function () {
        var ctx = application_1.android.context;
        var pckMgr = ctx.getPackageManager();
        var pckInfo = pckMgr.getPackageInfo(ctx.getPackageName(), 0);
        return pckInfo.versionName;
    };
    DeviceInfo.bundleId = function () {
        var ctx = application_1.android.context;
        return ctx.getPackageName();
    };
    DeviceInfo.bundleNumber = function () {
        return "";
    };
    DeviceInfo.systemManufacturer = function () {
        return android.os.Build.MANUFACTURER;
    };
    DeviceInfo.batteryLevel = function () {
        var BM = android.os.BatteryManager;
        var iFilter = new android.content.IntentFilter(android.content.Intent.ACTION_BATTERY_CHANGED);
        var ctx = application_1.android.context;
        var batteryStatus = ctx.registerReceiver(null, iFilter);
        var level = batteryStatus.getIntExtra(BM.EXTRA_LEVEL, -1);
        var scale = batteryStatus.getIntExtra(BM.EXTRA_SCALE, -1);
        return (level * 100) / scale;
    };
    DeviceInfo.cellularServiceProviders = function () {
        var carriers = [];
        var sm = DeviceInfo_1.subscriptionManager();
        if (sm) {
            var cellularProviders = sm.getActiveSubscriptionInfoList();
            if (cellularProviders) {
                for (var i = 0; i < cellularProviders.size(); i++) {
                    var carrier = DeviceInfo_1.prepareCarrier(cellularProviders.get(i));
                    if (carrier.mobileCountryCode === DeviceInfo_1.activeProviderMcc() &&
                        carrier.mobileNetworkCode === DeviceInfo_1.activeProviderMnc()) {
                        carrier.networkType = DeviceInfo_1.activeProviderRadioAccessTechnology();
                        carrier.generation = deviceinfo_interface_1.wirelessCellularGenerator(carrier.networkType);
                    }
                    carriers.push(carrier);
                }
            }
        }
        else {
            var tm_1 = DeviceInfo_1.telephonyManager();
            if (tm_1) {
                var carrier = {};
                carrier.carrierName = tm_1.getSimOperatorName();
                carrier.displayName = tm_1.getNetworkOperatorName();
                carrier.isoCountryCode = tm_1.getNetworkCountryIso();
                carrier.mobileCountryCode = DeviceInfo_1.activeProviderMcc();
                carrier.mobileNetworkCode = DeviceInfo_1.activeProviderMnc();
                var provider = network_provider_1.networkProviderByMccMnc(carrier.mobileCountryCode, carrier.mobileNetworkCode);
                if (provider == null) {
                    provider = network_provider_1.networkProviderByMcc(carrier.mobileCountryCode);
                }
                carrier.country = provider ? provider.country : "";
                carrier.countryCode = provider ? provider.country_code : "";
                carrier.carrierName = carrier.carrierName === "" && provider ?
                    provider.network : carrier.carrierName;
                carrier.isoCountryCode = carrier.isoCountryCode === "" && provider ?
                    provider.iso : carrier.isoCountryCode;
                carrier.networkType = DeviceInfo_1.activeProviderRadioAccessTechnology();
                carrier.generation = deviceinfo_interface_1.wirelessCellularGenerator(carrier.networkType);
                carriers.push(carrier);
            }
        }
        return carriers;
    };
    DeviceInfo.externalStoragePaths = function () {
        var paths = [];
        var ctx = application_1.android.context;
        var sm = ctx.getSystemService(Context.STORAGE_SERVICE);
        try {
            var method = StorageManager.class.getMethod("getVolumePaths", []);
            method.setAccessible(true);
            var externalPaths = method.invoke(sm, []);
            for (var i = 0; i < externalPaths.length; i++) {
                var path = externalPaths[i];
                if (DeviceInfo_1.checkStorageMountState(path)) {
                    paths.push(path);
                }
            }
        }
        catch (error) {
            console.log(error.message);
        }
        return paths;
    };
    DeviceInfo.storageVolumes = function () {
        var storageVolumesCollection = [];
        var ctx = application_1.android.context;
        var sm = ctx.getSystemService(Context.STORAGE_SERVICE);
        try {
            var method = StorageManager.class.getMethod("getVolumeList", []);
            var storageVolumes = method.invoke(sm, []);
            if (storageVolumes == null || storageVolumes.length <= 0) {
                return [];
            }
            for (var i = 0; i < storageVolumes.length; i++) {
                try {
                    var getStateMethod = storageVolumes[i].getClass().getMethod("getState", []);
                    var mountState = getStateMethod.invoke(storageVolumes[i], []);
                    if (android.os.Environment.MEDIA_MOUNTED === mountState) {
                        var sv = {};
                        var method_1 = storageVolumes[i].getClass().getMethod("getPath", []);
                        sv.path = method_1.invoke(storageVolumes[i], []);
                        method_1 = storageVolumes[i].getClass().getMethod("getDescription", [Context.class]);
                        sv.description = method_1.invoke(storageVolumes[i], [ctx]);
                        method_1 = storageVolumes[i].getClass().getMethod("isRemovable", []);
                        sv.isRemovableStorage = method_1.invoke(storageVolumes[i], []).booleanValue();
                        method_1 = storageVolumes[i].getClass().getMethod("allowMassStorage", []);
                        sv.isAllowMassStorage = (method_1.invoke(storageVolumes[i], []));
                        method_1 = storageVolumes[i].getClass().getMethod("isEmulated", []);
                        sv.isEmulated = method_1.invoke(storageVolumes[i], []).booleanValue();
                        method_1 = storageVolumes[i].getClass().getMethod("isPrimary", []);
                        sv.isPrimary = method_1.invoke(storageVolumes[i], []).booleanValue();
                        var file = new java.io.File(sv.path);
                        method_1 = StorageManager.class.getMethod("getStorageLowBytes", [java.io.File.class]);
                        sv.lowBytesLimit = method_1.invoke(sm, [file]).longValue();
                        method_1 = StorageManager.class.getMethod("getStorageFullBytes", [java.io.File.class]);
                        sv.fullBytesLimit = method_1.invoke(sm, [file]).longValue();
                        sv.totalSize = DeviceInfo_1.totalSpace(file);
                        sv.availableSize = DeviceInfo_1.freeSpace(file);
                        storageVolumesCollection.push(sv);
                    }
                }
                catch (error) {
                    console.log(error.message);
                }
            }
        }
        catch (error) {
            console.log(error.message);
        }
        return storageVolumesCollection;
    };
    DeviceInfo.wifiSSID = function () {
        var ctx = application_1.android.context;
        var permission = android.Manifest.permission;
        var contextCompat = android.support.v4.content.ContextCompat;
        var PackageManager = android.content.pm.PackageManager;
        var permissionCL = permission.ACCESS_COARSE_LOCATION;
        var permissionStatusCL = contextCompat.checkSelfPermission(ctx, permissionCL);
        var permissionPresentForCL = permissionStatusCL === PackageManager.PERMISSION_GRANTED;
        var permissionFL = permission.ACCESS_FINE_LOCATION;
        var permissionStatusFL = contextCompat.checkSelfPermission(ctx, permissionFL);
        var permissionPresentForFL = permissionStatusFL === PackageManager.PERMISSION_GRANTED;
        var permissionWS = permission.ACCESS_WIFI_STATE;
        var permissionStatusWS = contextCompat.checkSelfPermission(ctx, permissionWS);
        var permissionPresentForWS = permissionStatusWS === PackageManager.PERMISSION_GRANTED;
        var permissionPresent = ((permissionPresentForCL || permissionPresentForFL) && permissionPresentForWS);
        if (permissionPresent) {
            var ws = ctx.getSystemService(Context.WIFI_SERVICE);
            var wifiInfo = ws.getConnectionInfo();
            if (wifiInfo.getSupplicantState() === android.net.wifi.SupplicantState.COMPLETED) {
                return wifiInfo.getSSID();
            }
        }
        return "";
    };
    DeviceInfo.displayMetrics = function () {
        var ctx = application_1.android.context;
        var wm = ctx.getSystemService(Context.WINDOW_SERVICE);
        var point = new android.graphics.Point();
        if (android.os.Build.VERSION.SDK_INT >= JELLY_BEAN_MR1) {
            wm.getDefaultDisplay().getRealSize(point);
        }
        else if (android.os.Build.VERSION.SDK_INT >= ICE_CREAM_SANDWICH) {
            try {
                var getRawWidth = android.view.Display.class.getMethod("getRawWidth", []);
                point.x = getRawWidth.invoke(wm.getDefaultDisplay(), []);
                var getRawHeight = android.view.Display.class.getMethod("getRawHeight", []);
                point.y = getRawHeight.invoke(wm.getDefaultDisplay(), []);
            }
            catch (e) {
                wm.getDefaultDisplay().getSize(point);
            }
        }
        else {
            wm.getDefaultDisplay().getSize(point);
        }
        var displayMetrics = new android.util.DisplayMetrics();
        wm.getDefaultDisplay().getRealMetrics(displayMetrics);
        var horizontal = Math.pow(point.x / displayMetrics.xdpi, 2);
        var vertical = Math.pow(point.y / displayMetrics.ydpi, 2);
        var diagonalInInches = Math.sqrt(horizontal + vertical);
        var pixelPerInch = Math.sqrt(Math.pow(point.x, 2) + Math.pow(point.y, 2)) / diagonalInInches;
        var dm = {};
        dm.scale = utility_1.round(displayMetrics.scaledDensity, 0);
        dm.widthInPixels = point.x;
        dm.heightInPixels = point.y;
        dm.diagonalInInches = utility_1.round(diagonalInInches, 1);
        dm.pixelPerInch = utility_1.round(pixelPerInch, 0);
        return dm;
    };
    DeviceInfo.isPortrait = function () {
        var Configuration = android.content.res.Configuration;
        var ctx = application_1.android.context;
        return ctx.getResources().getConfiguration().orientation === Configuration.ORIENTATION_PORTRAIT;
    };
    DeviceInfo.isTablet = function () {
        var Configuration = android.content.res.Configuration;
        var ctx = application_1.android.context;
        var layout = ctx.getResources().getConfiguration().screenLayout & Configuration.SCREENLAYOUT_SIZE_MASK;
        if (layout !== Configuration.SCREENLAYOUT_SIZE_LARGE && layout !== Configuration.SCREENLAYOUT_SIZE_XLARGE) {
            return false;
        }
        var DisplayMetrics = android.util.DisplayMetrics;
        var metrics = ctx.getResources().getDisplayMetrics();
        if (metrics.densityDpi === DisplayMetrics.DENSITY_DEFAULT || metrics.densityDpi === DisplayMetrics.DENSITY_HIGH
            || metrics.densityDpi === DisplayMetrics.DENSITY_MEDIUM || metrics.densityDpi === DisplayMetrics.DENSITY_TV
            || metrics.densityDpi === DisplayMetrics.DENSITY_XHIGH) {
            return true;
        }
        return false;
    };
    DeviceInfo.is24Hour = function () {
        return android.text.format.DateFormat.is24HourFormat(application_1.android.context);
    };
    DeviceInfo.isEmulator = function () {
        var Build = android.os.Build;
        return Build.FINGERPRINT.startsWith("generic") || Build.FINGERPRINT.startsWith("unknown")
            || Build.MODEL.includes("google_sdk") || Build.MODEL.includes("Emulator")
            || Build.MODEL.includes("Android SDK built for x86") || Build.MANUFACTURER.includes("Genymotion")
            || (Build.BRAND.startsWith("generic") && Build.DEVICE.startsWith("generic"))
            || "google_sdk" === Build.PRODUCT;
    };
    DeviceInfo.isBatteryCharging = function () {
        var BM = android.os.BatteryManager;
        var iFilter = new android.content.IntentFilter(android.content.Intent.ACTION_BATTERY_CHANGED);
        var ctx = application_1.android.context;
        var batteryStatus = ctx.registerReceiver(null, iFilter);
        var chargingStatus = batteryStatus.getIntExtra(BM.EXTRA_STATUS, -1);
        return chargingStatus === BM.BATTERY_STATUS_CHARGING;
    };
    DeviceInfo.isLocationEnabled = function () {
        return new Promise(function (resolve, reject) {
            var ctx = application_1.android.context;
            var permission = android.Manifest.permission;
            var contextCompat = android.support.v4.content.ContextCompat;
            var PackageManager = android.content.pm.PackageManager;
            var permissionFL = permission.ACCESS_FINE_LOCATION;
            var permissionStatusFL = contextCompat.checkSelfPermission(ctx, permissionFL);
            if (permissionStatusFL === PackageManager.PERMISSION_GRANTED) {
                reject(new Error("Missing ACCESS_FINE_LOCATION permission."));
            }
            else {
                var LocationManager = android.location.LocationManager;
                var lm = ctx.getSystemService(Context.LOCATION_SERVICE);
                var gpsEnabled = false;
                try {
                    gpsEnabled = lm.isProviderEnabled(LocationManager.GPS_PROVIDER);
                }
                catch (error) {
                }
                var networkEnabled = false;
                try {
                    networkEnabled = lm.isProviderEnabled(LocationManager.NETWORK_PROVIDER);
                }
                catch (error) {
                }
                resolve(gpsEnabled && networkEnabled);
            }
        });
    };
    DeviceInfo.isBluetoothEnabled = function () {
        var Build = android.os.Build;
        var BluetoothAdapter = android.bluetooth.BluetoothAdapter;
        var ctx = application_1.android.context;
        var btAdapter = null;
        if (Build.VERSION.SDK_INT > JELLY_BEAN_MR1) {
            var btm = ctx.getSystemService(Context.BLUETOOTH_SERVICE);
            btAdapter = btm.getAdapter();
        }
        else {
            btAdapter = BluetoothAdapter.getDefaultAdapter();
        }
        return new Promise(function (resolve, reject) {
            var permission = android.Manifest.permission;
            var contextCompat = android.support.v4.content.ContextCompat;
            var PackageManager = android.content.pm.PackageManager;
            var permissionStatus = contextCompat.checkSelfPermission(ctx, permission.BLUETOOTH);
            if (permissionStatus === PackageManager.PERMISSION_GRANTED) {
                resolve(btAdapter && btAdapter.getState() === BluetoothAdapter.STATE_ON);
            }
            else {
                reject(new Error("Missing bluetooth permission."));
            }
        });
    };
    DeviceInfo.memoryInfo = function () {
        var actMgr = (application_1.getNativeApplication()
            .getSystemService(Context.ACTIVITY_SERVICE));
        var memInfo = new android.app.ActivityManager.MemoryInfo();
        actMgr.getMemoryInfo(memInfo);
        return memInfo;
    };
    DeviceInfo.totalSpace = function (file) {
        var statFs = new android.os.StatFs(file.getAbsolutePath());
        if (android.os.Build.VERSION.SDK_INT >= JELLY_BEAN_MR2) {
            return statFs.getBlockCountLong() * statFs.getBlockSizeLong();
        }
        return statFs.getBlockCount() * statFs.getBlockSize();
    };
    DeviceInfo.freeSpace = function (file) {
        var statFs = new android.os.StatFs(file.getAbsolutePath());
        if (android.os.Build.VERSION.SDK_INT >= JELLY_BEAN_MR2) {
            return statFs.getAvailableBlocksLong() * statFs.getBlockSizeLong();
        }
        return statFs.getAvailableBlocks() * statFs.getBlockSize();
    };
    DeviceInfo.prepareCarrier = function (cellularProvider) {
        var carrier = {};
        carrier.carrierName = cellularProvider.getCarrierName();
        carrier.displayName = cellularProvider.getDisplayName();
        carrier.isoCountryCode = cellularProvider.getCountryIso();
        carrier.mobileCountryCode = cellularProvider.getMcc().toString();
        var mnc = cellularProvider.getMnc().toString();
        carrier.mobileNetworkCode = mnc.length === 1 ? "0" + mnc : mnc;
        var provider = network_provider_1.networkProviderByMccMnc(carrier.mobileCountryCode, carrier.mobileNetworkCode);
        if (provider == null) {
            provider = network_provider_1.networkProviderByMcc(carrier.mobileCountryCode);
        }
        carrier.country = provider ? provider.country : "";
        carrier.countryCode = provider ? provider.country_code : "";
        carrier.carrierName = carrier.carrierName === "" && provider ?
            provider.network : carrier.carrierName;
        carrier.isoCountryCode = carrier.isoCountryCode === "" && provider ?
            provider.iso : carrier.isoCountryCode;
        return carrier;
    };
    DeviceInfo.activeProviderRadioAccessTechnology = function () {
        var tm = DeviceInfo_1.telephonyManager();
        if (tm == null) {
            return 0;
        }
        var NETWORK_TYPE_NR = 20;
        switch (tm.getNetworkType()) {
            case NETWORK_TYPE_CDMA: return 1;
            case NETWORK_TYPE_EDGE: return 5;
            case NETWORK_TYPE_EVDO_0: return 2;
            case NETWORK_TYPE_EVDO_A: return 3;
            case NETWORK_TYPE_EVDO_B: return 4;
            case NETWORK_TYPE_GPRS: return 7;
            case NETWORK_TYPE_HSDPA: return 9;
            case NETWORK_TYPE_HSPA: return 8;
            case NETWORK_TYPE_HSUPA: return 11;
            case NETWORK_TYPE_HSPAP: return 10;
            case NETWORK_TYPE_UMTS: return 15;
            case NETWORK_TYPE_EHRPD: return 6;
            case NETWORK_TYPE_IDEN: return 13;
            case NETWORK_TYPE_LTE: return 16;
            case NETWORK_TYPE_IWLAN: return 14;
            case NETWORK_TYPE_NR: return 12;
            default: return 0;
        }
    };
    DeviceInfo.activeProviderMcc = function () {
        var tm = DeviceInfo_1.telephonyManager();
        if (tm) {
            var operator = tm.getSimOperator();
            if (operator !== "") {
                return operator.substring(0, 3);
            }
        }
        return "";
    };
    DeviceInfo.activeProviderMnc = function () {
        var tm = DeviceInfo_1.telephonyManager();
        if (tm) {
            var operator = tm.getSimOperator();
            if (operator !== "") {
                return operator.substring(3);
            }
        }
        return "";
    };
    DeviceInfo.subscriptionManager = function () {
        var Build = android.os.Build;
        if (Build.VERSION.SDK_INT >= LOLLIPOP_MR1) {
            var ctx = application_1.android.context;
            var permission = android.Manifest.permission.READ_PHONE_STATE;
            var contextCompat = android.support.v4.content.ContextCompat;
            var permissionStatus = contextCompat.checkSelfPermission(ctx, permission);
            if (permissionStatus === android.content.pm.PackageManager.PERMISSION_GRANTED) {
                return android.telephony.SubscriptionManager.from(ctx);
            }
        }
        return null;
    };
    DeviceInfo.telephonyManager = function () {
        var Build = android.os.Build;
        if (Build.VERSION.SDK_INT >= JELLY_BEAN_MR1) {
            var ctx = application_1.android.context;
            var permission = android.Manifest.permission.ACCESS_COARSE_LOCATION;
            var contextCompat = android.support.v4.content.ContextCompat;
            var permissionStatus = contextCompat.checkSelfPermission(ctx, permission);
            if (permissionStatus === android.content.pm.PackageManager.PERMISSION_GRANTED) {
                return ctx.getSystemService(Context.TELEPHONY_SERVICE);
            }
        }
        return null;
    };
    DeviceInfo.checkStorageMountState = function (mountPoint) {
        if (mountPoint == null) {
            return false;
        }
        var context = application_1.android.context;
        var storageManager = context.getSystemService(Context.STORAGE_SERVICE);
        try {
            var method = StorageManager.class.getDeclaredMethod("getVolumeState", [java.lang.String.class]);
            method.setAccessible(true);
            var mountState = method.invoke(storageManager, [mountPoint]);
            return android.os.Environment.MEDIA_MOUNTED === mountState;
        }
        catch (error) {
            console.log(error.message);
        }
        return false;
    };
    var DeviceInfo_1;
    DeviceInfo = DeviceInfo_1 = __decorate([
        staticDecorator()
    ], DeviceInfo);
    return DeviceInfo;
}());
exports.DeviceInfo = DeviceInfo;
//# sourceMappingURL=deviceinfo.js.map