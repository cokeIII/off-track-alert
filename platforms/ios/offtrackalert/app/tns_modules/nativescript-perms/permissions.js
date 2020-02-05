import { CLog, CLogTypes } from './permissions.common';
export * from './permissions.common';
export var PermissionsIOS;
(function (PermissionsIOS) {
    var Status;
    (function (Status) {
        Status["Undetermined"] = "undetermined";
        Status["Denied"] = "denied";
        Status["Authorized"] = "authorized";
        Status["Restricted"] = "restricted";
    })(Status = PermissionsIOS.Status || (PermissionsIOS.Status = {}));
    var NSPLocation;
    (function (NSPLocation) {
        var status = Status.Undetermined;
        function getStatusFromCLAuthorizationStatus(lStatus, type) {
            var always = false;
            switch (lStatus) {
                case 3 /* kCLAuthorizationStatusAuthorizedAlways */:
                    always = true;
                    status = Status.Authorized;
                    break;
                case 4 /* kCLAuthorizationStatusAuthorizedWhenInUse */:
                    status = Status.Authorized;
                    break;
                case 2 /* kCLAuthorizationStatusDenied */:
                    status = Status.Denied;
                    break;
                case 1 /* kCLAuthorizationStatusRestricted */:
                    status = Status.Restricted;
                    break;
                default:
                    status = Status.Undetermined;
            }
            CLog(CLogTypes.info, 'NSPLocation getStatusFromCLAuthorizationStatus', lStatus, type, status, always);
            return [status, always];
        }
        function getStatusForType(type) {
            var status2 = CLLocationManager.authorizationStatus();
            return getStatusFromCLAuthorizationStatus(status2, type);
        }
        NSPLocation.getStatusForType = getStatusForType;
        var locationManager;
        var locationManagerDelegate;
        var CLLocationManagerDelegateImpl = /** @class */ (function (_super) {
            __extends(CLLocationManagerDelegateImpl, _super);
            function CLLocationManagerDelegateImpl() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CLLocationManagerDelegateImpl.prototype.addSubDelegate = function (delegate) {
                if (!this.subDelegates) {
                    this.subDelegates = [];
                }
                var index = this.subDelegates.indexOf(delegate);
                if (index === -1) {
                    this.subDelegates.push(delegate);
                }
            };
            CLLocationManagerDelegateImpl.prototype.removeSubDelegate = function (delegate) {
                var index = this.subDelegates.indexOf(delegate);
                if (index !== -1) {
                    this.subDelegates.splice(index, 1);
                }
            };
            CLLocationManagerDelegateImpl.new = function () {
                return _super.new.call(this);
            };
            CLLocationManagerDelegateImpl.prototype.initDelegate = function () {
                this.subDelegates = [];
                return this;
            };
            CLLocationManagerDelegateImpl.prototype.locationManagerDidChangeAuthorizationStatus = function (manager, status) {
                this.subDelegates &&
                    this.subDelegates.forEach(function (d) {
                        if (d.locationManagerDidChangeAuthorizationStatus) {
                            d.locationManagerDidChangeAuthorizationStatus(manager, status);
                        }
                    });
            };
            CLLocationManagerDelegateImpl.ObjCProtocols = [CLLocationManagerDelegate];
            return CLLocationManagerDelegateImpl;
        }(NSObject));
        NSPLocation.CLLocationManagerDelegateImpl = CLLocationManagerDelegateImpl;
        function request(type) {
            var status = getStatusForType(type);
            CLog(CLogTypes.info, 'NSPLocation request', type, status);
            if (status[0] === Status.Undetermined) {
                return new Promise(function (resolve, reject) {
                    if (!locationManager) {
                        locationManager = CLLocationManager.new();
                        locationManagerDelegate = locationManager.delegate = CLLocationManagerDelegateImpl.new().initDelegate();
                    }
                    var subD = {
                        locationManagerDidChangeAuthorizationStatus: function (manager, status) {
                            CLog(CLogTypes.info, 'locationManagerDidChangeAuthorizationStatus', status);
                            if (status !== 0 /* kCLAuthorizationStatusNotDetermined */) {
                                if (locationManager) {
                                    locationManager.delegate.removeSubDelegate(subD);
                                    locationManager.delegate = null;
                                    locationManager = null;
                                    locationManagerDelegate = null;
                                }
                                var rStatus = getStatusFromCLAuthorizationStatus(status, type);
                                resolve(rStatus);
                                // } else {
                                // reject('kCLAuthorizationStatusNotDetermined');
                            }
                        }
                    };
                    locationManager.delegate.addSubDelegate(subD);
                    try {
                        CLog(CLogTypes.info, 'NSPLocation requestAuthorization', type);
                        if (type === 'always') {
                            locationManager.requestAlwaysAuthorization();
                        }
                        else {
                            locationManager.requestWhenInUseAuthorization();
                        }
                    }
                    catch (e) {
                        reject(e);
                        if (locationManager) {
                            locationManager.delegate.removeSubDelegate(subD);
                            locationManager.delegate = null;
                            locationManager = null;
                        }
                    }
                });
            }
            else {
                // if (CLLocationManager.authorizationStatus() === CLAuthorizationStatus.kCLAuthorizationStatusAuthorizedWhenInUse && type === 'always') {
                //     return Promise.resolve(Status.Denied);
                // } else {
                return Promise.resolve(status);
                // }
            }
        }
        NSPLocation.request = request;
    })(NSPLocation || (NSPLocation = {}));
    var NSPBluetooth;
    (function (NSPBluetooth) {
        var status = Status.Undetermined;
        function getStatus() {
            var status2 = CBPeripheralManager.authorizationStatus();
            switch (status2) {
                case 3 /* Authorized */:
                    status = Status.Authorized;
                    break;
                case 2 /* Denied */:
                    status = Status.Denied;
                    break;
                case 1 /* Restricted */:
                    status = Status.Restricted;
                    break;
                default:
                    status = Status.Undetermined;
            }
            return [status, true];
        }
        NSPBluetooth.getStatus = getStatus;
        var CBPeripheralManagerDelegateImpl = /** @class */ (function (_super) {
            __extends(CBPeripheralManagerDelegateImpl, _super);
            function CBPeripheralManagerDelegateImpl() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CBPeripheralManagerDelegateImpl.prototype.addSubDelegate = function (delegate) {
                var index = this.subDelegates.indexOf(delegate);
                if (index === -1) {
                    this.subDelegates.push(delegate);
                }
            };
            CBPeripheralManagerDelegateImpl.prototype.removeSubDelegate = function (delegate) {
                var index = this.subDelegates.indexOf(delegate);
                if (index !== -1) {
                    this.subDelegates.splice(index, 1);
                }
            };
            CBPeripheralManagerDelegateImpl.new = function () {
                return _super.new.call(this);
            };
            CBPeripheralManagerDelegateImpl.prototype.initDelegate = function () {
                this.subDelegates = [];
                return this;
            };
            CBPeripheralManagerDelegateImpl.prototype.peripheralManagerDidUpdateState = function (peripheralManager) {
                this.subDelegates.forEach(function (d) {
                    if (d.peripheralManagerDidUpdateState) {
                        d.peripheralManagerDidUpdateState(peripheralManager);
                    }
                });
            };
            CBPeripheralManagerDelegateImpl.ObjCProtocols = [CBPeripheralManagerDelegate];
            return CBPeripheralManagerDelegateImpl;
        }(NSObject));
        NSPBluetooth.CBPeripheralManagerDelegateImpl = CBPeripheralManagerDelegateImpl;
        var peripheralManager;
        function request() {
            var status = getStatus();
            if (status[0] === Status.Undetermined) {
                return new Promise(function (resolve, reject) {
                    if (!peripheralManager) {
                        peripheralManager = CBPeripheralManager.new();
                        peripheralManager.delegate = CBPeripheralManagerDelegateImpl.new().initDelegate();
                    }
                    var subD = {
                        peripheralManagerDidUpdateState: function (peripheralManager) {
                            if (peripheralManager) {
                                peripheralManager.stopAdvertising();
                                peripheralManager.delegate.removeSubDelegate(subD);
                                peripheralManager.delegate = null;
                                peripheralManager = null;
                            }
                            // for some reason, checking permission right away returns denied. need to wait a tiny bit
                            setTimeout(function () {
                                resolve(getStatus());
                            }, 100);
                        }
                    };
                    peripheralManager.delegate.addSubDelegate(subD);
                    try {
                        peripheralManager.startAdvertising(null);
                    }
                    catch (e) {
                        reject(e);
                    }
                });
            }
            else {
                return Promise.resolve(status);
            }
        }
        NSPBluetooth.request = request;
    })(NSPBluetooth || (NSPBluetooth = {}));
    var NSPAudioVideo;
    (function (NSPAudioVideo) {
        var status = Status.Undetermined;
        function typeFromString(value) {
            if (value === 'audio') {
                return AVMediaTypeAudio;
            }
            else {
                return AVMediaTypeVideo;
            }
        }
        function getStatus(type) {
            var videoStatus = AVCaptureDevice.authorizationStatusForMediaType(typeFromString(type));
            switch (videoStatus) {
                case 3 /* Authorized */:
                    status = Status.Authorized;
                    break;
                case 2 /* Denied */:
                    status = Status.Denied;
                    break;
                case 1 /* Restricted */:
                    status = Status.Restricted;
                    break;
                default:
                    status = Status.Undetermined;
            }
            return [status, true];
        }
        NSPAudioVideo.getStatus = getStatus;
        function request(type) {
            return new Promise(function (resolve, reject) {
                AVCaptureDevice.requestAccessForMediaTypeCompletionHandler(type, function (granted) { return resolve(getStatus(type)); });
            });
        }
        NSPAudioVideo.request = request;
    })(NSPAudioVideo || (NSPAudioVideo = {}));
    var NSPSpeechRecognition;
    (function (NSPSpeechRecognition) {
        var status = Status.Undetermined;
        function getStatus() {
            var speechStatus = SFSpeechRecognizer.authorizationStatus();
            switch (speechStatus) {
                case 3 /* Authorized */:
                    status = Status.Authorized;
                    break;
                case 1 /* Denied */:
                    status = Status.Denied;
                    break;
                case 2 /* Restricted */:
                    status = Status.Restricted;
                    break;
                default:
                    status = Status.Undetermined;
            }
            return [status, true];
        }
        NSPSpeechRecognition.getStatus = getStatus;
        function request() {
            return new Promise(function (resolve) {
                SFSpeechRecognizer.requestAuthorization(function () { return resolve(getStatus()); });
            });
        }
        NSPSpeechRecognition.request = request;
    })(NSPSpeechRecognition || (NSPSpeechRecognition = {}));
    var NSPPhoto;
    (function (NSPPhoto) {
        var status = Status.Undetermined;
        function getStatus() {
            var photoStatus = PHPhotoLibrary.authorizationStatus();
            switch (photoStatus) {
                case 3 /* Authorized */:
                    status = Status.Authorized;
                    break;
                case 2 /* Denied */:
                    status = Status.Denied;
                    break;
                case 1 /* Restricted */:
                    status = Status.Restricted;
                    break;
                default:
                    status = Status.Undetermined;
            }
            return [status, true];
        }
        NSPPhoto.getStatus = getStatus;
        function request() {
            return new Promise(function (resolve) {
                PHPhotoLibrary.requestAuthorization(function () { return resolve(getStatus()); });
            });
        }
        NSPPhoto.request = request;
    })(NSPPhoto || (NSPPhoto = {}));
    var NSPMotion;
    (function (NSPMotion) {
        var status = Status.Undetermined;
        function getStatus() {
            if (status === Status.Undetermined) {
                var cmStatus = CMMotionActivityManager.authorizationStatus;
                switch (cmStatus) {
                    case 3 /* Authorized */:
                        status = Status.Authorized;
                        break;
                    case 2 /* Denied */:
                        status = Status.Denied;
                        break;
                    case 1 /* Restricted */:
                        status = Status.Restricted;
                        break;
                }
            }
            return [status, true];
        }
        NSPMotion.getStatus = getStatus;
        function request() {
            if (status === Status.Undetermined) {
                return new Promise(function (resolve) {
                    var activityManager = CMMotionActivityManager.new();
                    var motionActivityQueue = NSOperationQueue.new();
                    CLog(CLogTypes.info, 'NSPMotion request', status);
                    activityManager.queryActivityStartingFromDateToDateToQueueWithHandler(NSDate.distantPast, new Date(), motionActivityQueue, function (activities, error) {
                        if (error) {
                            status = Status.Denied;
                        }
                        else if (activities || !error) {
                            status = Status.Authorized;
                        }
                        CLog(CLogTypes.info, 'NSPMotion got response', activities, error, status, getStatus());
                        resolve([status, true]);
                        activityManager = null;
                        motionActivityQueue = null;
                    });
                });
            }
            else {
                return Promise.resolve([status, true]);
            }
        }
        NSPMotion.request = request;
    })(NSPMotion || (NSPMotion = {}));
    var NSPMediaLibrary;
    (function (NSPMediaLibrary) {
        var status = Status.Undetermined;
        function getStatus() {
            var mediaStatus = MPMediaLibrary.authorizationStatus();
            switch (mediaStatus) {
                case 3 /* Authorized */:
                    status = Status.Authorized;
                    break;
                case 1 /* Denied */:
                    status = Status.Denied;
                    break;
                case 2 /* Restricted */:
                    status = Status.Restricted;
                    break;
                default:
                    status = Status.Undetermined;
            }
            return [status, true];
        }
        NSPMediaLibrary.getStatus = getStatus;
        function request() {
            return new Promise(function (resolve) {
                MPMediaLibrary.requestAuthorization(function () { return resolve(getStatus()); });
            });
        }
        NSPMediaLibrary.request = request;
    })(NSPMediaLibrary || (NSPMediaLibrary = {}));
    var NSPNotification;
    (function (NSPNotification) {
        var status = Status.Undetermined;
        var NSPDidAskForNotification = 'NSPDidAskForNotification';
        function getStatus() {
            var didAskForPermission = NSUserDefaults.standardUserDefaults.boolForKey(NSPDidAskForNotification);
            var isEnabled = UIApplication.sharedApplication.currentUserNotificationSettings.types !== 0 /* None */;
            if (isEnabled) {
                status = Status.Authorized;
            }
            else {
                status = didAskForPermission ? Status.Denied : Status.Undetermined;
            }
            return [status, true];
        }
        NSPNotification.getStatus = getStatus;
        function request(types) {
            var status = getStatus();
            if (status[0] === Status.Undetermined) {
                return new Promise(function (resolve) {
                    var observer = function () {
                        resolve(getStatus());
                        NSNotificationCenter.defaultCenter.removeObserver(observer);
                    };
                    NSNotificationCenter.defaultCenter.addObserverForNameObjectQueueUsingBlock(UIApplicationDidBecomeActiveNotification, null, null, observer);
                    var settings = UIUserNotificationSettings.settingsForTypesCategories(types, null);
                    UIApplication.sharedApplication.registerUserNotificationSettings(settings);
                    UIApplication.sharedApplication.registerForRemoteNotifications();
                    NSUserDefaults.standardUserDefaults.setBoolForKey(true, NSPDidAskForNotification);
                    NSUserDefaults.standardUserDefaults.synchronize();
                });
            }
            else {
                return Promise.resolve(status);
            }
        }
        NSPNotification.request = request;
    })(NSPNotification || (NSPNotification = {}));
    var NSPContacts;
    (function (NSPContacts) {
        var status = Status.Undetermined;
        function getStatus() {
            var contactStatus = CNContactStore.authorizationStatusForEntityType(0 /* Contacts */);
            switch (contactStatus) {
                case 3 /* Authorized */:
                    status = Status.Authorized;
                    break;
                case 2 /* Denied */:
                    status = Status.Denied;
                    break;
                case 1 /* Restricted */:
                    status = Status.Restricted;
                    break;
                default:
                    status = Status.Undetermined;
            }
            return [status, true];
        }
        NSPContacts.getStatus = getStatus;
        function request() {
            return new Promise(function (resolve) {
                var contactStore = CNContactStore.new();
                contactStore.requestAccessForEntityTypeCompletionHandler(0 /* Contacts */, function () { return resolve(getStatus()); });
            });
        }
        NSPContacts.request = request;
    })(NSPContacts || (NSPContacts = {}));
    var NSPBackgroundRefresh;
    (function (NSPBackgroundRefresh) {
        var status = Status.Undetermined;
        function getStatus() {
            var refreshStatus = UIApplication.sharedApplication.backgroundRefreshStatus;
            switch (refreshStatus) {
                case 2 /* Available */:
                    status = Status.Authorized;
                    break;
                case 1 /* Denied */:
                    status = Status.Denied;
                    break;
                case 0 /* Restricted */:
                    status = Status.Restricted;
                    break;
                default:
                    status = Status.Undetermined;
            }
            return [status, true];
        }
        NSPBackgroundRefresh.getStatus = getStatus;
        function request() {
            return new Promise(function (resolve) {
                var contactStore = CNContactStore.new();
                contactStore.requestAccessForEntityTypeCompletionHandler(0 /* Contacts */, function () { return resolve(getStatus()[0]); });
            });
        }
        NSPBackgroundRefresh.request = request;
    })(NSPBackgroundRefresh || (NSPBackgroundRefresh = {}));
    var NSPEvent;
    (function (NSPEvent) {
        var status = Status.Undetermined;
        function typeFromString(value) {
            if (value === 'reminder') {
                return 1 /* Reminder */;
            }
            else {
                return 0 /* Event */;
            }
        }
        function getStatus(type) {
            var eventStatus = EKEventStore.authorizationStatusForEntityType(typeFromString(type));
            switch (eventStatus) {
                case 3 /* Authorized */:
                    status = Status.Authorized;
                    break;
                case 2 /* Denied */:
                    status = Status.Denied;
                    break;
                case 1 /* Restricted */:
                    status = Status.Restricted;
                    break;
                default:
                    status = Status.Undetermined;
            }
            return [status, true];
        }
        NSPEvent.getStatus = getStatus;
        function request(type) {
            return new Promise(function (resolve) {
                var aStore = EKEventStore.new();
                aStore.requestAccessToEntityTypeCompletion(typeFromString(type), function () { return resolve(getStatus(type)); });
            });
        }
        NSPEvent.request = request;
    })(NSPEvent || (NSPEvent = {}));
    var NSType;
    (function (NSType) {
        NSType[NSType["Unknown"] = 0] = "Unknown";
        NSType["Location"] = "location";
        NSType["Camera"] = "camera";
        NSType["Microphone"] = "microphone";
        NSType["Photo"] = "photo";
        NSType["Contacts"] = "contacts";
        NSType["Event"] = "event";
        NSType["Reminder"] = "reminder";
        NSType["Bluetooth"] = "bluetooth";
        NSType["Notification"] = "notification";
        NSType["BackgroundRefresh"] = "backgroundRefresh";
        NSType["NSPTypeSpeechRecognition"] = "speechRecognition";
        NSType["MediaLibrary"] = "mediaLibrary";
        NSType["Motion"] = "motion";
    })(NSType = PermissionsIOS.NSType || (PermissionsIOS.NSType = {}));
    function openSettings() {
        return new Promise(function (resolve, reject) {
            var center = NSNotificationCenter.defaultCenter;
            var observer = function (notif) {
                resolve(true);
                center.removeObserver(observer);
            };
            center.addObserverForNameObjectQueueUsingBlock(UIApplicationDidBecomeActiveNotification, null, null, observer);
            UIApplication.sharedApplication.openURL(NSURL.URLWithString(UIApplicationOpenSettingsURLString));
        });
    }
    PermissionsIOS.openSettings = openSettings;
    function canOpenSettings() {
        return Promise.resolve(UIApplicationOpenSettingsURLString !== null);
    }
    PermissionsIOS.canOpenSettings = canOpenSettings;
    function getPermissionStatus(type, json) {
        var status;
        CLog(CLogTypes.info, "nativescript-perms: getPermissionStatus " + type + " " + json);
        switch (type) {
            case NSType.Location: {
                // NSString *locationPermissionType = [RCTConvert NSString:json];
                status = NSPLocation.getStatusForType(json);
                break;
            }
            case NSType.Camera:
                status = NSPAudioVideo.getStatus('video');
                break;
            case NSType.Microphone:
                status = NSPAudioVideo.getStatus('audio');
                break;
            case NSType.Photo:
                status = NSPPhoto.getStatus();
                break;
            case NSType.Contacts:
                status = NSPContacts.getStatus();
                break;
            case NSType.Event:
                status = NSPEvent.getStatus('event');
                break;
            case NSType.Reminder:
                status = NSPEvent.getStatus('reminder');
                break;
            case NSType.Bluetooth:
                status = NSPBluetooth.getStatus();
                break;
            case NSType.Notification:
                status = NSPNotification.getStatus();
                break;
            case NSType.BackgroundRefresh:
                status = NSPBackgroundRefresh.getStatus();
                break;
            case NSType.NSPTypeSpeechRecognition:
                status = NSPSpeechRecognition.getStatus();
                break;
            case NSType.MediaLibrary:
                status = NSPMediaLibrary.getStatus();
                break;
            case NSType.Motion:
                status = NSPMotion.getStatus();
                break;
            default:
                break;
        }
        return Promise.resolve(status);
    }
    PermissionsIOS.getPermissionStatus = getPermissionStatus;
    function requestPermission(type, json) {
        CLog(CLogTypes.info, "nativescript-perms: requestPermission " + type + " " + json);
        switch (type) {
            case NSType.Location:
                return NSPLocation.request(json);
            case NSType.Camera:
                return NSPAudioVideo.request('video');
            case NSType.Microphone:
                return NSPAudioVideo.request('audio');
            case NSType.Photo:
                return NSPPhoto.request();
            case NSType.Contacts:
                return NSPContacts.request();
            case NSType.Event:
                return NSPEvent.request('event');
            case NSType.Reminder:
                return NSPEvent.request('reminder');
            case NSType.Bluetooth:
                return NSPBluetooth.request();
            case NSType.Notification:
                var types = void 0;
                var typeStrings = json;
                if (typeStrings.indexOf('alert') !== -1) {
                    types = types | 4 /* Alert */;
                }
                if (typeStrings.indexOf('badge') !== -1) {
                    types = types | 1 /* Badge */;
                }
                if (typeStrings.indexOf('sound') !== -1) {
                    types = types | 2 /* Sound */;
                }
                return NSPNotification.request(types);
            case NSType.NSPTypeSpeechRecognition:
                return NSPSpeechRecognition.request();
            case NSType.MediaLibrary:
                return NSPMediaLibrary.request();
            case NSType.Motion:
                return NSPMotion.request();
            default:
                return Promise.reject(NSType.Unknown);
        }
    }
    PermissionsIOS.requestPermission = requestPermission;
})(PermissionsIOS || (PermissionsIOS = {}));
var DEFAULTS = {
    location: 'whenInUse',
    notification: ['alert', 'badge', 'sound']
};
var permissionTypes = Object.keys(PermissionsIOS.NSType).map(function (k) { return PermissionsIOS.NSType[k]; });
export function canOpenSettings() {
    return PermissionsIOS.canOpenSettings();
}
export function openSettings() {
    return PermissionsIOS.openSettings();
}
export function getTypes() {
    return permissionTypes;
}
export function check(permission, options) {
    CLog(CLogTypes.info, "nativescript-perms: check " + permission + " " + options);
    if (permissionTypes.indexOf(permission) === -1) {
        // const error = new Error(`ReactNativePermissions: ${permission} is not a valid permission type on iOS`);
        // return Promise.reject(error);
        CLog(CLogTypes.warning, "nativescript-perms: " + permission + " is not a valid permission type on iOS");
        // const error = new Error(`nativescript-perms: ${permission} is not a valid permission type on Android`);
        return Promise.resolve([PermissionsIOS.Status.Authorized, true]);
    }
    var type;
    if (typeof options === 'string') {
        type = options;
    }
    else if (options && options.type) {
        type = options.type;
    }
    return PermissionsIOS.getPermissionStatus(permission, type || DEFAULTS[permission]);
}
export function request(permission, options) {
    CLog(CLogTypes.info, "nativescript-perms: request " + permission + " " + options);
    if (permissionTypes.indexOf(permission) === -1) {
        // const error = new Error(`ReactNativePermissions: ${permission} is not a valid permission type on iOS`);
        CLog(CLogTypes.warning, "nativescript-perms: " + permission + " is not a valid permission type on iOS");
        return Promise.resolve([PermissionsIOS.Status.Authorized, true]);
    }
    if (permission === 'backgroundRefresh') {
        var error = new Error('nativescript-perms: You cannot request backgroundRefresh');
        return Promise.reject(error);
    }
    var type;
    if (typeof options === 'string') {
        type = options;
    }
    else if (options && options.type) {
        type = options.type;
    }
    return PermissionsIOS.requestPermission(permission, type || DEFAULTS[permission]);
}
export function checkMultiple(permissions) {
    var _this = this;
    return Promise.all(permissions.map(function (permission) { return _this.check(permission); })).then(function (result) {
        return result.reduce(function (acc, value, index) {
            var name = permissions[index];
            acc[name] = value;
            return acc;
        }, {});
    });
}
//# sourceMappingURL=permissions.js.map