"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils = require("tns-core-modules/utils/utils");
var application = require("tns-core-modules/application/application");
var bluetooth_common_1 = require("./bluetooth.common");
var Queue = require("p-queue");
var _bluetoothInstance;
function getBluetoothInstance() {
    if (!_bluetoothInstance) {
        _bluetoothInstance = new Bluetooth();
    }
    return _bluetoothInstance;
}
exports.getBluetoothInstance = getBluetoothInstance;
var ACCESS_COARSE_LOCATION_PERMISSION_REQUEST_CODE = 222;
var ACTION_REQUEST_ENABLE_BLUETOOTH_REQUEST_CODE = 223;
var ACTION_REQUEST_BLUETOOTH_DISCOVERABLE_REQUEST_CODE = 224;
var ANDROID_SDK = -1;
function getAndroidSDK() {
    if (ANDROID_SDK === -1) {
        ANDROID_SDK = android.os.Build.VERSION.SDK_INT;
    }
    return ANDROID_SDK;
}
var LOLLIPOP = 21;
var MARSHMALLOW = 23;
var ScanMode;
(function (ScanMode) {
    ScanMode[ScanMode["LOW_LATENCY"] = 0] = "LOW_LATENCY";
    ScanMode[ScanMode["BALANCED"] = 1] = "BALANCED";
    ScanMode[ScanMode["LOW_POWER"] = 2] = "LOW_POWER";
    ScanMode[ScanMode["OPPORTUNISTIC"] = 3] = "OPPORTUNISTIC";
})(ScanMode = exports.ScanMode || (exports.ScanMode = {}));
function androidScanMode(mode) {
    switch (mode) {
        case ScanMode.BALANCED:
            return android.bluetooth.le.ScanSettings.SCAN_MODE_BALANCED;
        case ScanMode.LOW_POWER:
            return android.bluetooth.le.ScanSettings.SCAN_MODE_LOW_POWER;
        case ScanMode.OPPORTUNISTIC:
            return android.bluetooth.le.ScanSettings.SCAN_MODE_OPPORTUNISTIC;
        case ScanMode.LOW_LATENCY:
        default:
            return android.bluetooth.le.ScanSettings.SCAN_MODE_LOW_LATENCY;
    }
}
var MatchMode;
(function (MatchMode) {
    MatchMode[MatchMode["AGGRESSIVE"] = 0] = "AGGRESSIVE";
    MatchMode[MatchMode["STICKY"] = 1] = "STICKY";
})(MatchMode = exports.MatchMode || (exports.MatchMode = {}));
function androidMatchMode(mode) {
    switch (mode) {
        case MatchMode.STICKY:
            return android.bluetooth.le.ScanSettings.MATCH_MODE_STICKY;
        default:
            return android.bluetooth.le.ScanSettings.MATCH_MODE_AGGRESSIVE;
    }
}
var MatchNum;
(function (MatchNum) {
    MatchNum[MatchNum["MAX_ADVERTISEMENT"] = 0] = "MAX_ADVERTISEMENT";
    MatchNum[MatchNum["FEW_ADVERTISEMENT"] = 1] = "FEW_ADVERTISEMENT";
    MatchNum[MatchNum["ONE_ADVERTISEMENT"] = 2] = "ONE_ADVERTISEMENT";
})(MatchNum = exports.MatchNum || (exports.MatchNum = {}));
function androidMatchNum(mode) {
    switch (mode) {
        case MatchNum.ONE_ADVERTISEMENT:
            return android.bluetooth.le.ScanSettings.MATCH_NUM_ONE_ADVERTISEMENT;
        case MatchNum.FEW_ADVERTISEMENT:
            return android.bluetooth.le.ScanSettings.MATCH_NUM_FEW_ADVERTISEMENT;
        default:
            return android.bluetooth.le.ScanSettings.MATCH_NUM_MAX_ADVERTISEMENT;
    }
}
var CallbackType;
(function (CallbackType) {
    CallbackType[CallbackType["ALL_MATCHES"] = 0] = "ALL_MATCHES";
    CallbackType[CallbackType["FIRST_MATCH"] = 1] = "FIRST_MATCH";
    CallbackType[CallbackType["MATCH_LOST"] = 2] = "MATCH_LOST";
})(CallbackType = exports.CallbackType || (exports.CallbackType = {}));
function androidCallbackType(mode) {
    switch (mode) {
        case CallbackType.MATCH_LOST:
            return android.bluetooth.le.ScanSettings.CALLBACK_TYPE_MATCH_LOST;
        case CallbackType.FIRST_MATCH:
            return android.bluetooth.le.ScanSettings.CALLBACK_TYPE_FIRST_MATCH;
        default:
            return android.bluetooth.le.ScanSettings.CALLBACK_TYPE_ALL_MATCHES;
    }
}
var Phy;
(function (Phy) {
    Phy[Phy["LE_1M"] = 0] = "LE_1M";
    Phy[Phy["LE_CODED"] = 1] = "LE_CODED";
    Phy[Phy["LE_ALL_SUPPORTED"] = 2] = "LE_ALL_SUPPORTED";
})(Phy = exports.Phy || (exports.Phy = {}));
function androidPhy(mode) {
    switch (mode) {
        case Phy.LE_1M:
            return android.bluetooth.BluetoothDevice.PHY_LE_1M;
        case Phy.LE_CODED:
            return android.bluetooth.BluetoothDevice.PHY_LE_CODED;
        default:
            return android.bluetooth.le.ScanSettings.PHY_LE_ALL_SUPPORTED;
    }
}
function uuidToString(uuid) {
    var uuidStr = uuid.toString();
    var pattern = java.util.regex.Pattern.compile('0000(.{4})-0000-1000-8000-00805f9b34fb', 2);
    var matcher = pattern.matcher(uuidStr);
    return matcher.matches() ? matcher.group(1) : uuidStr;
}
exports.uuidToString = uuidToString;
function arrayToNativeByteArray(val) {
    var result = Array.create('byte', val.length);
    for (var i = 0; i < val.length; i++) {
        result[i] = val[i];
    }
    return result;
}
exports.arrayToNativeByteArray = arrayToNativeByteArray;
function nativeEncoding(encoding) {
    var result = java.nio.charset.Charset.forName(encoding);
    return result;
}
function valueToByteArray(value, encoding) {
    if (encoding === void 0) { encoding = 'iso-8859-1'; }
    var type = typeof value;
    if (type === 'string') {
        return new java.lang.String(value).getBytes(nativeEncoding(encoding));
    }
    else if (type === 'number') {
        return arrayToNativeByteArray([value]);
    }
    else if (Array.isArray(value)) {
        return arrayToNativeByteArray(value);
    }
    else if (value instanceof ArrayBuffer) {
        return arrayToNativeByteArray(new Int8Array(value));
    }
    return null;
}
exports.valueToByteArray = valueToByteArray;
function byteArrayToBuffer(value) {
    if (!value) {
        return null;
    }
    var ret = new Uint8Array(value.length);
    var isString = typeof value === 'string';
    for (var i = 0; i < value.length; i++) {
        ret[i] = isString ? value.charCodeAt(i) : value[i];
    }
    return ret.buffer;
}
exports.byteArrayToBuffer = byteArrayToBuffer;
function printValueToString(value) {
    if (value instanceof java.lang.Object) {
        var array = [];
        var bytes = value;
        for (var i = 0; i < bytes.length; i++) {
            array.push(new Number(bytes[i]).valueOf());
        }
        return array;
    }
    return value;
}
exports.printValueToString = printValueToString;
function stringToUuid(uuidStr) {
    if (uuidStr.length === 4) {
        uuidStr = '0000' + uuidStr + '-0000-1000-8000-00805f9b34fb';
    }
    return java.util.UUID.fromString(uuidStr);
}
exports.stringToUuid = stringToUuid;
var LeScanCallbackVar;
function initLeScanCallback() {
    if (LeScanCallback) {
        return;
    }
    var ScanRecord = (function () {
        function ScanRecord(serviceUuids, manufacturerData, serviceData, advertiseFlags, txPowerLevel, localName, bytes) {
            this.serviceUuids = serviceUuids;
            this.manufacturerData = manufacturerData;
            this.serviceData = serviceData;
            this.advertiseFlags = advertiseFlags;
            this.txPowerLevel = txPowerLevel;
            this.localName = localName;
            this.bytes = bytes;
        }
        ScanRecord.prototype.getManufacturerSpecificData = function () {
            return this.manufacturerData;
        };
        ScanRecord.prototype.getBytes = function () {
            return this.bytes;
        };
        ScanRecord.prototype.getAdvertiseFlags = function () {
            return this.advertiseFlags;
        };
        ScanRecord.prototype.getServiceUuids = function () {
            return this.serviceUuids;
        };
        ScanRecord.prototype.getServiceData = function () {
            return this.serviceData;
        };
        ScanRecord.prototype.getDeviceName = function () {
            return this.localName;
        };
        ScanRecord.prototype.getTxPowerLevel = function () {
            return this.txPowerLevel;
        };
        return ScanRecord;
    }());
    var ScanAdvertisment = (function () {
        function ScanAdvertisment(scanRecord) {
            this.scanRecord = scanRecord;
        }
        Object.defineProperty(ScanAdvertisment.prototype, "manufacturerData", {
            get: function () {
                var data = this.scanRecord.getManufacturerSpecificData();
                var size = data.size();
                if (size > 0) {
                    var mKey = data.keyAt(0);
                    return byteArrayToBuffer(data.get(mKey));
                }
                return undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScanAdvertisment.prototype, "data", {
            get: function () {
                return byteArrayToBuffer(this.scanRecord.getBytes());
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScanAdvertisment.prototype, "manufacturerId", {
            get: function () {
                var data = this.scanRecord.getManufacturerSpecificData();
                var size = data.size();
                if (size > 0) {
                    return data.keyAt(0);
                }
                return -1;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScanAdvertisment.prototype, "txPowerLevel", {
            get: function () {
                return this.scanRecord.getTxPowerLevel();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScanAdvertisment.prototype, "localName", {
            get: function () {
                return this.scanRecord.getDeviceName();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScanAdvertisment.prototype, "flags", {
            get: function () {
                return this.scanRecord.getAdvertiseFlags();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScanAdvertisment.prototype, "serviceUUIDs", {
            get: function () {
                var result = [];
                var serviceUuids = this.scanRecord.getServiceUuids();
                for (var i = 0; i < serviceUuids.length; i++) {
                    result.push(uuidToString(serviceUuids[i]));
                }
                return result;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScanAdvertisment.prototype, "serviceData", {
            get: function () {
                var result = {};
                var serviceData = this.scanRecord.getServiceData();
                var keys = Object.keys(serviceData);
                var currentKey;
                for (var i = 0; i < keys.length; i++) {
                    currentKey = keys[i];
                    result[uuidToString(currentKey)] = byteArrayToBuffer(serviceData[currentKey]);
                }
                return result;
            },
            enumerable: true,
            configurable: true
        });
        return ScanAdvertisment;
    }());
    function extractBytes(scanRecord, start, length) {
        return java.util.Arrays.copyOfRange(scanRecord, start, start + length);
    }
    var BASE_UUID;
    function getBASE_UUID() {
        if (!BASE_UUID) {
            BASE_UUID = android.os.ParcelUuid.fromString('00000000-0000-1000-8000-00805F9B34FB');
        }
        return BASE_UUID;
    }
    var UUID_BYTES_16_BIT = 2;
    var UUID_BYTES_32_BIT = 4;
    var UUID_BYTES_128_BIT = 16;
    function parseUuidFrom(uuidBytes) {
        if (uuidBytes == null) {
            throw new Error('uuidBytes cannot be null');
        }
        var length = uuidBytes.length;
        if (length !== UUID_BYTES_16_BIT && length !== UUID_BYTES_32_BIT && length !== UUID_BYTES_128_BIT) {
            throw new Error('uuidBytes length invalid - ' + length);
        }
        if (length === UUID_BYTES_128_BIT) {
            var buf = java.nio.ByteBuffer.wrap(uuidBytes).order(java.nio.ByteOrder.LITTLE_ENDIAN);
            var msb_1 = buf.getLong(8);
            var lsb_1 = buf.getLong(0);
            return new java.util.UUID(msb_1, lsb_1).toString();
        }
        var shortUuid;
        if (length === UUID_BYTES_16_BIT) {
            shortUuid = uuidBytes[0] & 0xff;
            shortUuid += (uuidBytes[1] & 0xff) << 8;
        }
        else {
            shortUuid = uuidBytes[0] & 0xff;
            shortUuid += (uuidBytes[1] & 0xff) << 8;
            shortUuid += (uuidBytes[2] & 0xff) << 16;
            shortUuid += (uuidBytes[3] & 0xff) << 24;
        }
        var msb = getBASE_UUID()
            .getUuid()
            .getMostSignificantBits() +
            (shortUuid << 32);
        var lsb = getBASE_UUID()
            .getUuid()
            .getLeastSignificantBits();
        return new java.util.UUID(msb, lsb).toString();
    }
    function parseServiceUuid(scanRecord, currentPos, dataLength, uuidLength, serviceUuids) {
        while (dataLength > 0) {
            var uuidBytes = extractBytes(scanRecord, currentPos, uuidLength);
            serviceUuids.push(parseUuidFrom(uuidBytes));
            dataLength -= uuidLength;
            currentPos += uuidLength;
        }
        return currentPos;
    }
    var DATA_TYPE_FLAGS = 0x01;
    var DATA_TYPE_SERVICE_UUIDS_16_BIT_PARTIAL = 0x02;
    var DATA_TYPE_SERVICE_UUIDS_16_BIT_COMPLETE = 0x03;
    var DATA_TYPE_SERVICE_UUIDS_32_BIT_PARTIAL = 0x04;
    var DATA_TYPE_SERVICE_UUIDS_32_BIT_COMPLETE = 0x05;
    var DATA_TYPE_SERVICE_UUIDS_128_BIT_PARTIAL = 0x06;
    var DATA_TYPE_SERVICE_UUIDS_128_BIT_COMPLETE = 0x07;
    var DATA_TYPE_LOCAL_NAME_SHORT = 0x08;
    var DATA_TYPE_LOCAL_NAME_COMPLETE = 0x09;
    var DATA_TYPE_TX_POWER_LEVEL = 0x0a;
    var DATA_TYPE_SERVICE_DATA_16_BIT = 0x16;
    var DATA_TYPE_SERVICE_DATA_32_BIT = 0x20;
    var DATA_TYPE_SERVICE_DATA_128_BIT = 0x21;
    var DATA_TYPE_MANUFACTURER_SPECIFIC_DATA = 0xff;
    function parseFromBytes(scanRecord) {
        if (scanRecord == null) {
            return null;
        }
        var currentPos = 0;
        var advertiseFlag = -1;
        var serviceUuids = [];
        var localName = null;
        var txPowerLevel = Number.MIN_VALUE;
        var manufacturerData = new android.util.SparseArray();
        var serviceData = {};
        try {
            while (currentPos < scanRecord.length) {
                var length_1 = scanRecord[currentPos++] & 0xff;
                if (length_1 === 0) {
                    break;
                }
                var dataLength = length_1 - 1;
                var fieldType = scanRecord[currentPos++] & 0xff;
                switch (fieldType) {
                    case DATA_TYPE_FLAGS:
                        advertiseFlag = scanRecord[currentPos] & 0xff;
                        break;
                    case DATA_TYPE_SERVICE_UUIDS_16_BIT_PARTIAL:
                    case DATA_TYPE_SERVICE_UUIDS_16_BIT_COMPLETE:
                        parseServiceUuid(scanRecord, currentPos, dataLength, UUID_BYTES_16_BIT, serviceUuids);
                        break;
                    case DATA_TYPE_SERVICE_UUIDS_32_BIT_PARTIAL:
                    case DATA_TYPE_SERVICE_UUIDS_32_BIT_COMPLETE:
                        parseServiceUuid(scanRecord, currentPos, dataLength, UUID_BYTES_32_BIT, serviceUuids);
                        break;
                    case DATA_TYPE_SERVICE_UUIDS_128_BIT_PARTIAL:
                    case DATA_TYPE_SERVICE_UUIDS_128_BIT_COMPLETE:
                        parseServiceUuid(scanRecord, currentPos, dataLength, UUID_BYTES_128_BIT, serviceUuids);
                        break;
                    case DATA_TYPE_LOCAL_NAME_SHORT:
                    case DATA_TYPE_LOCAL_NAME_COMPLETE:
                        localName = String.fromCharCode.apply(String, extractBytes(scanRecord, currentPos, dataLength));
                        break;
                    case DATA_TYPE_TX_POWER_LEVEL:
                        txPowerLevel = scanRecord[currentPos];
                        break;
                    case DATA_TYPE_SERVICE_DATA_16_BIT:
                    case DATA_TYPE_SERVICE_DATA_32_BIT:
                    case DATA_TYPE_SERVICE_DATA_128_BIT:
                        var serviceUuidLength = UUID_BYTES_16_BIT;
                        if (fieldType === DATA_TYPE_SERVICE_DATA_32_BIT) {
                            serviceUuidLength = UUID_BYTES_32_BIT;
                        }
                        else if (fieldType === DATA_TYPE_SERVICE_DATA_128_BIT) {
                            serviceUuidLength = UUID_BYTES_128_BIT;
                        }
                        var serviceDataUuidBytes = extractBytes(scanRecord, currentPos, serviceUuidLength);
                        var serviceDataUuid = parseUuidFrom(serviceDataUuidBytes);
                        var serviceDataArray = extractBytes(scanRecord, currentPos + serviceUuidLength, dataLength - serviceUuidLength);
                        serviceData[serviceDataUuid] = serviceDataArray;
                        break;
                    case DATA_TYPE_MANUFACTURER_SPECIFIC_DATA:
                        var manufacturerId = ((scanRecord[currentPos + 1] & 0xff) << 8) + (scanRecord[currentPos] & 0xff);
                        var manufacturerDataBytes = extractBytes(scanRecord, currentPos + 2, dataLength - 2);
                        manufacturerData.put(manufacturerId, manufacturerDataBytes);
                        break;
                    default:
                        break;
                }
                currentPos += dataLength;
            }
            if (serviceUuids.length === 0) {
                serviceUuids = null;
            }
            return new ScanRecord(serviceUuids, manufacturerData, serviceData, advertiseFlag, txPowerLevel, localName, scanRecord);
        }
        catch (e) {
            return new ScanRecord(null, null, null, -1, Number.MIN_VALUE, null, scanRecord);
        }
    }
    var LeScanCallbackImpl = (function (_super) {
        __extends(LeScanCallbackImpl, _super);
        function LeScanCallbackImpl(owner) {
            var _this = _super.call(this) || this;
            _this.owner = owner;
            return global.__native(_this);
        }
        LeScanCallbackImpl.prototype.onLeScan = function (device, rssi, data) {
            bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.info, "TNS_LeScanCallback.onLeScan ---- device: " + device + ", rssi: " + rssi + ", scanRecord: " + data);
            var stateObject = this.owner.get().connections[device.getAddress()];
            if (!stateObject) {
                stateObject = this.owner.get().connections[device.getAddress()] = {
                    state: 'disconnected'
                };
                var scanRecord = parseFromBytes(data);
                var advertismentData = new ScanAdvertisment(scanRecord);
                var payload = {
                    type: 'scanResult',
                    UUID: device.getAddress(),
                    name: device.getName(),
                    localName: advertismentData.localName,
                    RSSI: rssi,
                    state: 'disconnected',
                    advertismentData: advertismentData,
                    manufacturerId: advertismentData.manufacturerId
                };
                bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.info, "TNS_LeScanCallback.onLeScan ---- payload: " + JSON.stringify(payload));
                this.onPeripheralDiscovered && this.onPeripheralDiscovered(payload);
                this.owner.get().sendEvent(Bluetooth.device_discovered_event, payload);
            }
        };
        return LeScanCallbackImpl;
    }(android.bluetooth.BluetoothAdapter.LeScanCallback));
    LeScanCallbackVar = LeScanCallbackImpl;
}
var ScanCallbackVar;
function initScanCallback() {
    if (ScanCallbackVar) {
        return;
    }
    var ScanCallBackImpl = (function (_super) {
        __extends(ScanCallBackImpl, _super);
        function ScanCallBackImpl(owner) {
            var _this = _super.call(this) || this;
            _this.owner = owner;
            return global.__native(_this);
        }
        ScanCallBackImpl.prototype.onBatchScanResults = function (results) {
            bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.info, "TNS_ScanCallback.onBatchScanResults ---- results: " + results);
        };
        ScanCallBackImpl.prototype.onScanFailed = function (errorCode) {
            bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.info, "TNS_ScanCallback.onScanFailed ---- errorCode: " + errorCode);
            var errorMessage;
            if (errorCode === android.bluetooth.le.ScanCallback.SCAN_FAILED_ALREADY_STARTED) {
                errorMessage = 'Scan already started';
            }
            else if (errorCode === android.bluetooth.le.ScanCallback.SCAN_FAILED_APPLICATION_REGISTRATION_FAILED) {
                errorMessage = 'Application registration failed';
            }
            else if (errorCode === android.bluetooth.le.ScanCallback.SCAN_FAILED_FEATURE_UNSUPPORTED) {
                errorMessage = 'Feature unsupported';
            }
            else if (errorCode === android.bluetooth.le.ScanCallback.SCAN_FAILED_INTERNAL_ERROR) {
                errorMessage = 'Internal error';
            }
            else {
                errorMessage = 'Scan failed to start';
            }
            bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.info, "TNS_ScanCallback.onScanFailed errorMessage: " + errorMessage);
        };
        ScanCallBackImpl.prototype.onScanResult = function (callbackType, result) {
            bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.info, "TNS_ScanCallback.onScanResult ---- callbackType: " + callbackType + ", result: " + result);
            var stateObject = this.owner.get().connections[result.getDevice().getAddress()];
            if (!stateObject) {
                stateObject = this.owner.get().connections[result.getDevice().getAddress()] = {
                    state: 'disconnected'
                };
            }
            var advertismentData = new ScanAdvertisment(result.getScanRecord());
            var payload = {
                type: 'scanResult',
                UUID: result.getDevice().getAddress(),
                name: result.getDevice().getName(),
                RSSI: result.getRssi(),
                localName: advertismentData.localName,
                state: 'disconnected',
                manufacturerId: advertismentData.manufacturerId,
                advertismentData: advertismentData
            };
            bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.info, "TNS_ScanCallback.onScanResult ---- payload: " + JSON.stringify(payload));
            this.onPeripheralDiscovered && this.onPeripheralDiscovered(payload);
            this.owner.get().sendEvent(Bluetooth.device_discovered_event, payload);
        };
        return ScanCallBackImpl;
    }(android.bluetooth.le.ScanCallback));
    var ScanAdvertisment = (function () {
        function ScanAdvertisment(scanRecord) {
            this.scanRecord = scanRecord;
        }
        Object.defineProperty(ScanAdvertisment.prototype, "manufacturerData", {
            get: function () {
                var data = this.scanRecord.getManufacturerSpecificData();
                var size = data.size();
                if (size > 0) {
                    var mKey = data.keyAt(0);
                    return byteArrayToBuffer(data.get(mKey));
                }
                return undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScanAdvertisment.prototype, "data", {
            get: function () {
                return byteArrayToBuffer(this.scanRecord.getBytes());
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScanAdvertisment.prototype, "manufacturerId", {
            get: function () {
                var data = this.scanRecord.getManufacturerSpecificData();
                var size = data.size();
                if (size > 0) {
                    return data.keyAt(0);
                }
                return -1;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScanAdvertisment.prototype, "txPowerLevel", {
            get: function () {
                return this.scanRecord.getTxPowerLevel();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScanAdvertisment.prototype, "localName", {
            get: function () {
                return this.scanRecord.getDeviceName();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScanAdvertisment.prototype, "flags", {
            get: function () {
                return this.scanRecord.getAdvertiseFlags();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScanAdvertisment.prototype, "serviceUUIDs", {
            get: function () {
                var result = [];
                var serviceUuids = this.scanRecord.getServiceUuids();
                for (var i = 0; i < serviceUuids.size(); i++) {
                    result.push(uuidToString(serviceUuids[i]));
                }
                return result;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScanAdvertisment.prototype, "serviceData", {
            get: function () {
                var result = {};
                var serviceData = this.scanRecord.getServiceData();
                if (serviceData.size() > 0) {
                    var entries = serviceData.entrySet().iterator();
                    while (entries.hasNext()) {
                        var entry = entries.next();
                        result[uuidToString(entry.getKey())] = byteArrayToBuffer(entry.getValue());
                    }
                }
                return result;
            },
            enumerable: true,
            configurable: true
        });
        return ScanAdvertisment;
    }());
    ScanCallbackVar = ScanCallBackImpl;
}
var BluetoothGattCallback;
function initBluetoothGattCallback() {
    if (BluetoothGattCallback) {
        return;
    }
    var BluetoothGattCallbackImpl = (function (_super) {
        __extends(BluetoothGattCallbackImpl, _super);
        function BluetoothGattCallbackImpl(owner) {
            var _this = _super.call(this) || this;
            _this.owner = owner;
            return global.__native(_this);
        }
        BluetoothGattCallbackImpl.prototype.onConnectionStateChange = function (gatt, status, newState) {
            bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.info, "TNS_BluetoothGattCallback.onConnectionStateChange ---- gatt: " + gatt + ", status: " + status + ", newState: " + newState);
            if (newState === android.bluetooth.BluetoothProfile.STATE_CONNECTED && status === android.bluetooth.BluetoothGatt.GATT_SUCCESS) {
                bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.info, 'TNS_BluetoothGattCallback.onConnectionStateChange ---- discovering services -----');
                gatt.discoverServices();
            }
            else {
                bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.info, "TNS_BluetoothGattCallback.onConnectionStateChange ---- disconnecting the gatt: " + gatt + " ----");
                this.owner.get().gattDisconnect(gatt);
            }
        };
        BluetoothGattCallbackImpl.prototype.onServicesDiscovered = function (gatt, status) {
            bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.info, "TNS_BluetoothGattCallback.onServicesDiscovered ---- gatt: " + gatt + ", status (0=success): " + status);
            if (status === android.bluetooth.BluetoothGatt.GATT_SUCCESS) {
                var services = gatt.getServices();
                var servicesJs = [];
                var btChar = android.bluetooth.BluetoothGattCharacteristic;
                for (var i = 0; i < services.size(); i++) {
                    var service = services.get(i);
                    var characteristics = service.getCharacteristics();
                    var characteristicsJs = [];
                    for (var j = 0; j < characteristics.size(); j++) {
                        var characteristic = characteristics.get(j);
                        var props = characteristic.getProperties();
                        var descriptors = characteristic.getDescriptors();
                        var descriptorsJs = [];
                        for (var k = 0; k < descriptors.size(); k++) {
                            var descriptor = descriptors.get(k);
                            var descriptorJs = {
                                UUID: uuidToString(descriptor.getUuid()),
                                value: descriptor.getValue(),
                                permissions: null
                            };
                            var descPerms = descriptor.getPermissions();
                            if (descPerms > 0) {
                                descriptorJs.permissions = {
                                    read: (descPerms & btChar.PERMISSION_READ) !== 0,
                                    readEncrypted: (descPerms & btChar.PERMISSION_READ_ENCRYPTED) !== 0,
                                    readEncryptedMitm: (descPerms & btChar.PERMISSION_READ_ENCRYPTED_MITM) !== 0,
                                    write: (descPerms & btChar.PERMISSION_WRITE) !== 0,
                                    writeEncrypted: (descPerms & btChar.PERMISSION_WRITE_ENCRYPTED) !== 0,
                                    writeEncryptedMitm: (descPerms & btChar.PERMISSION_WRITE_ENCRYPTED_MITM) !== 0,
                                    writeSigned: (descPerms & btChar.PERMISSION_WRITE_SIGNED) !== 0,
                                    writeSignedMitm: (descPerms & btChar.PERMISSION_WRITE_SIGNED_MITM) !== 0
                                };
                            }
                            bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.info, "TNS_BluetoothGattCallback.onServicesDiscovered ---- pushing descriptor: " + descriptor);
                            descriptorsJs.push(descriptorJs);
                        }
                        var characteristicJs = {
                            serviceUUID: uuidToString(service.getUuid()),
                            UUID: uuidToString(characteristic.getUuid()),
                            name: uuidToString(characteristic.getUuid()),
                            properties: {
                                read: (props & btChar.PROPERTY_READ) !== 0,
                                write: (props & btChar.PROPERTY_WRITE) !== 0,
                                writeWithoutResponse: (props & btChar.PROPERTY_WRITE_NO_RESPONSE) !== 0,
                                notify: (props & btChar.PROPERTY_NOTIFY) !== 0,
                                indicate: (props & btChar.PROPERTY_INDICATE) !== 0,
                                broadcast: (props & btChar.PROPERTY_BROADCAST) !== 0,
                                authenticatedSignedWrites: (props & btChar.PROPERTY_SIGNED_WRITE) !== 0,
                                extendedProperties: (props & btChar.PROPERTY_EXTENDED_PROPS) !== 0
                            },
                            descriptors: descriptorsJs,
                            permissions: null
                        };
                        var charPerms = characteristic.getPermissions();
                        if (charPerms > 0) {
                            characteristicJs.permissions = {
                                read: (charPerms & btChar.PERMISSION_READ) !== 0,
                                readEncrypted: (charPerms & btChar.PERMISSION_READ_ENCRYPTED) !== 0,
                                readEncryptedMitm: (charPerms & btChar.PERMISSION_READ_ENCRYPTED_MITM) !== 0,
                                write: (charPerms & btChar.PERMISSION_WRITE) !== 0,
                                writeEncrypted: (charPerms & btChar.PERMISSION_WRITE_ENCRYPTED) !== 0,
                                writeEncryptedMitm: (charPerms & btChar.PERMISSION_WRITE_ENCRYPTED_MITM) !== 0,
                                writeSigned: (charPerms & btChar.PERMISSION_WRITE_SIGNED) !== 0,
                                writeSignedMitm: (charPerms & btChar.PERMISSION_WRITE_SIGNED_MITM) !== 0
                            };
                        }
                        bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.info, "TNS_BluetoothGattCallback.onServicesDiscovered ---- pushing characteristic: " + JSON.stringify(characteristicJs));
                        characteristicsJs.push(characteristicJs);
                    }
                    servicesJs.push({
                        UUID: uuidToString(service.getUuid()),
                        characteristics: characteristicsJs
                    });
                }
                var device = gatt.getDevice();
                var address = null;
                if (device == null) {
                }
                else {
                    address = device.getAddress();
                }
                var stateObject = this.owner.get().connections[address];
                if (!stateObject) {
                    this.owner.get().gattDisconnect(gatt);
                    return;
                }
                stateObject.onConnected({
                    UUID: address,
                    name: device && device.getName(),
                    state: 'connected',
                    services: servicesJs,
                    advertismentData: stateObject.advertismentData
                });
            }
        };
        BluetoothGattCallbackImpl.prototype.onCharacteristicRead = function (gatt, characteristic, status) {
            var device = gatt.getDevice();
            var address = null;
            if (device == null) {
            }
            else {
                address = device.getAddress();
            }
            bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.info, "TNS_BluetoothGattCallback.onCharacteristicRead ---- gatt: " + gatt + ", characteristic: " + characteristic + ", status: " + status + ", device: " + address);
            var stateObject = this.owner.get().connections[address];
            if (!stateObject) {
                this.owner.get().gattDisconnect(gatt);
                return;
            }
            if (stateObject.onReadCallbacks && stateObject.onReadCallbacks.length > 0) {
                var value = characteristic.getValue();
                stateObject.onReadCallbacks.shift()({
                    ios: value,
                    value: byteArrayToBuffer(value),
                    characteristicUUID: uuidToString(characteristic.getUuid())
                });
            }
        };
        BluetoothGattCallbackImpl.prototype.onCharacteristicChanged = function (gatt, characteristic) {
            var device = gatt.getDevice();
            var address = null;
            if (device == null) {
            }
            else {
                address = device.getAddress();
            }
            bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.info, "TNS_BluetoothGattCallback.onCharacteristicChanged ---- gatt: " + gatt + ", characteristic: " + characteristic + ", device: " + address);
            var stateObject = this.owner.get().connections[address];
            if (!stateObject) {
                this.owner.get().gattDisconnect(gatt);
                return;
            }
            if (stateObject.onNotifyCallback) {
                var value = characteristic.getValue();
                stateObject.onNotifyCallback({
                    ios: value,
                    value: byteArrayToBuffer(value),
                    characteristicUUID: uuidToString(characteristic.getUuid())
                });
            }
        };
        BluetoothGattCallbackImpl.prototype.onCharacteristicWrite = function (gatt, characteristic, status) {
            var device = gatt.getDevice();
            var address = null;
            if (device == null) {
            }
            else {
                address = device.getAddress();
            }
            bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.info, "TNS_BluetoothGattCallback.onCharacteristicWrite ---- characteristic: " + characteristic + ", status: " + status + ", device: " + address);
            var stateObject = this.owner.get().connections[address];
            if (!stateObject) {
                this.owner.get().gattDisconnect(gatt);
                return;
            }
            if (stateObject.onWriteCallbacks && stateObject.onWriteCallbacks.length > 0) {
                stateObject.onWriteCallbacks.shift()({
                    characteristicUUID: uuidToString(characteristic.getUuid())
                });
            }
        };
        BluetoothGattCallbackImpl.prototype.onDescriptorRead = function (gatt, descriptor, status) {
            bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.info, "TNS_BluetoothGattCallback.onDescriptorRead ---- gatt: " + gatt + ", descriptor: " + descriptor + ", status: " + status);
        };
        BluetoothGattCallbackImpl.prototype.onDescriptorWrite = function (gatt, descriptor, status) {
            bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.info, "TNS_BluetoothGattCallback.onDescriptorWrite ---- gatt: " + gatt + ", descriptor: " + descriptor + ", status: " + status);
        };
        BluetoothGattCallbackImpl.prototype.onReadRemoteRssi = function (gatt, rssi, status) {
            bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.info, "TNS_BluetoothGattCallback.onReadRemoteRssi ---- gatt: " + gatt + " rssi: " + rssi + ", status: " + status);
        };
        BluetoothGattCallbackImpl.prototype.onMtuChanged = function (gatt, mtu, status) {
            bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.info, "TNS_BluetoothGattCallback.onMtuChanged ---- gatt: " + gatt + " mtu: " + mtu + ", status: " + status);
        };
        return BluetoothGattCallbackImpl;
    }(android.bluetooth.BluetoothGattCallback));
    BluetoothGattCallback = BluetoothGattCallbackImpl;
}
var Bluetooth = (function (_super) {
    __extends(Bluetooth, _super);
    function Bluetooth() {
        var _this = _super.call(this) || this;
        _this.gattQueue = new Queue({ concurrency: 1 });
        _this.connections = {};
        bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.info, '*** Android Bluetooth Constructor ***');
        if (android.os.Build.VERSION.SDK_INT >= LOLLIPOP) {
            initScanCallback();
            _this.scanCallback = new ScanCallbackVar(new WeakRef(_this));
        }
        else {
            initLeScanCallback();
            _this.LeScanCallback = new LeScanCallbackVar(new WeakRef(_this));
        }
        application.android.registerBroadcastReceiver(android.bluetooth.BluetoothAdapter.ACTION_STATE_CHANGED, function (context, intent) {
            var state = intent.getIntExtra(android.bluetooth.BluetoothAdapter.EXTRA_STATE, android.bluetooth.BluetoothAdapter.ERROR);
            if (state === android.bluetooth.BluetoothAdapter.STATE_ON || state === android.bluetooth.BluetoothAdapter.STATE_OFF) {
                _this.sendEvent(Bluetooth.bluetooth_status_event, {
                    state: state === android.bluetooth.BluetoothAdapter.STATE_ON ? 'on' : 'off'
                });
            }
        });
        return _this;
    }
    Object.defineProperty(Bluetooth.prototype, "adapter", {
        get: function () {
            if (!this._adapter) {
                this._adapter = this.bluetoothManager.getAdapter();
            }
            return this._adapter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bluetooth.prototype, "bluetoothManager", {
        get: function () {
            if (!this._bluetoothManager) {
                this._bluetoothManager = utils.ad.getApplicationContext().getSystemService(android.content.Context.BLUETOOTH_SERVICE);
            }
            return this._bluetoothManager;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bluetooth.prototype, "bluetoothGattCallback", {
        get: function () {
            if (!this._bluetoothGattCallback) {
                initBluetoothGattCallback();
                this._bluetoothGattCallback = new BluetoothGattCallback(new WeakRef(this));
            }
            return this._bluetoothGattCallback;
        },
        enumerable: true,
        configurable: true
    });
    Bluetooth.prototype.coarseLocationPermissionGranted = function () {
        var hasPermission = getAndroidSDK() < MARSHMALLOW;
        if (!hasPermission) {
            var ctx = this._getContext();
            bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.info, 'app context', ctx);
            hasPermission =
                android.content.pm.PackageManager.PERMISSION_GRANTED === android.support.v4.content.ContextCompat.checkSelfPermission(ctx, android.Manifest.permission.ACCESS_COARSE_LOCATION);
        }
        bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.info, 'coarseLocationPermissionGranted ---- ACCESS_COARSE_LOCATION permission granted?', hasPermission);
        return hasPermission;
    };
    Bluetooth.prototype.hasCoarseLocationPermission = function () {
        var _this = this;
        return new Promise(function (resolve) {
            resolve(_this.coarseLocationPermissionGranted());
        });
    };
    Bluetooth.prototype.requestCoarseLocationPermission = function (callback) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var permissionCb = function (args) {
                if (args.requestCode === ACCESS_COARSE_LOCATION_PERMISSION_REQUEST_CODE) {
                    application.android.off(application.AndroidApplication.activityRequestPermissionsEvent, permissionCb);
                    permissionCb = null;
                    for (var i = 0; i < args.permissions.length; i++) {
                        if (args.grantResults[i] === android.content.pm.PackageManager.PERMISSION_DENIED) {
                            reject('Permission denied');
                            return;
                        }
                    }
                    if (callback) {
                        callback();
                    }
                    resolve();
                }
            };
            application.android.on(application.AndroidApplication.activityRequestPermissionsEvent, permissionCb);
            android.support.v4.app.ActivityCompat.requestPermissions(_this._getActivity(), [android.Manifest.permission.ACCESS_COARSE_LOCATION], ACCESS_COARSE_LOCATION_PERMISSION_REQUEST_CODE);
        });
    };
    Bluetooth.prototype.getAndroidLocationManager = function () {
        return application.android.context.getSystemService(android.content.Context.LOCATION_SERVICE);
    };
    Bluetooth.prototype.isGPSEnabled = function () {
        var _this = this;
        if (!this.hasCoarseLocationPermission()) {
            return this.requestCoarseLocationPermission().then(function () { return _this.isGPSEnabled(); });
        }
        var result = this.getAndroidLocationManager().isProviderEnabled(android.location.LocationManager.GPS_PROVIDER);
        if (bluetooth_common_1.BluetoothUtil.debug) {
            var providers = this.getAndroidLocationManager().getProviders(false);
            bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.info, 'isGPSEnabled providers', providers);
            bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.info, 'isGPSEnabled: ', result);
        }
        return Promise.resolve(result);
    };
    Bluetooth.prototype.enableGPS = function () {
        var _this = this;
        bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.info, 'Bluetooth.enableGPS');
        return new Promise(function (resolve, reject) {
            var currentContext = application.android.currentContext;
            if (!_this.isGPSEnabled()) {
                var onActivityResultHandler_1 = function (data) {
                    application.android.off(application.AndroidApplication.activityResultEvent, onActivityResultHandler_1);
                    if (data.requestCode === 0) {
                        if (_this.isGPSEnabled()) {
                            resolve();
                        }
                        else {
                            reject('GPS not enabled');
                        }
                    }
                };
                application.android.on(application.AndroidApplication.activityResultEvent, onActivityResultHandler_1);
                currentContext.startActivityForResult(new android.content.Intent(android.provider.Settings.ACTION_LOCATION_SOURCE_SETTINGS), 0);
            }
            else {
                resolve();
            }
        });
    };
    Bluetooth.prototype.enable = function () {
        var _this = this;
        bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.info, 'enable:', this._isEnabled());
        return new Promise(function (resolve, reject) {
            if (_this._isEnabled()) {
                return resolve(true);
            }
            try {
                bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.info, 'enable: asking to enable bluetooth');
                var onBluetoothEnableResult_1 = function (args) {
                    bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.info, 'Bluetooth.onBluetoothEnableResult ---', "requestCode: " + args.requestCode + ", result: " + args.resultCode);
                    if (args.requestCode === ACTION_REQUEST_ENABLE_BLUETOOTH_REQUEST_CODE) {
                        try {
                            application.android.off(application.AndroidApplication.activityResultEvent, onBluetoothEnableResult_1);
                            if (args.resultCode === android.app.Activity.RESULT_OK) {
                                _this.sendEvent(Bluetooth.bluetooth_enabled_event);
                                resolve(true);
                            }
                            else {
                                resolve(false);
                            }
                        }
                        catch (ex) {
                            bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.error, ex);
                            application.android.off(application.AndroidApplication.activityResultEvent, onBluetoothEnableResult_1);
                            _this.sendEvent(Bluetooth.error_event, { error: ex }, "enable ---- error: " + ex);
                            reject(ex);
                            return;
                        }
                    }
                    else {
                        application.android.off(application.AndroidApplication.activityResultEvent, onBluetoothEnableResult_1);
                        resolve(false);
                        return;
                    }
                };
                application.android.on(application.AndroidApplication.activityResultEvent, onBluetoothEnableResult_1);
                var intent = new android.content.Intent(android.bluetooth.BluetoothAdapter.ACTION_REQUEST_ENABLE);
                var activity = application.android.foregroundActivity || application.android.startActivity;
                bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.info, 'enable: startActivityForResult');
                activity.startActivityForResult(intent, ACTION_REQUEST_ENABLE_BLUETOOTH_REQUEST_CODE);
            }
            catch (ex) {
                bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.error, 'enable:', ex);
                reject(ex);
                _this.sendEvent(Bluetooth.error_event, { error: ex }, 'Error enabling bluetooth.');
            }
        });
    };
    Bluetooth.prototype.isBluetoothEnabled = function () {
        var _this = this;
        if (!this.adapter) {
            return Promise.reject(bluetooth_common_1.BluetoothCommon.msg_not_supported);
        }
        return new Promise(function (resolve, reject) {
            try {
                resolve(_this._isEnabled());
            }
            catch (ex) {
                bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.error, 'isBluetoothEnabled ---- error:', ex);
                reject(ex);
            }
        });
    };
    Bluetooth.prototype.isConnected = function (args) {
        try {
            if (!args.UUID) {
                return Promise.reject({ msg: bluetooth_common_1.BluetoothCommon.msg_missing_parameter, type: 'UUID' });
            }
            var stateObject = this.connections[args.UUID];
            if (!stateObject) {
                return Promise.reject({ msg: bluetooth_common_1.BluetoothCommon.msg_peripheral_not_connected, args: args });
            }
            return Promise.resolve(true);
        }
        catch (ex) {
            bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.error, 'isConnected ---- error:', ex);
            return Promise.reject(ex);
        }
    };
    Bluetooth.prototype.openBluetoothSettings = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var currentContext = application.android.currentContext;
            if (!_this._isEnabled()) {
                var that_1 = _this;
                var onActivityResultHandler_2 = function (data) {
                    application.android.off(application.AndroidApplication.activityResultEvent, onActivityResultHandler_2);
                    if (data.requestCode === 0) {
                        if (that_1._isEnabled()) {
                            resolve();
                        }
                        else {
                            reject('bluetooth_not_enabled');
                        }
                    }
                };
                application.android.on(application.AndroidApplication.activityResultEvent, onActivityResultHandler_2);
                currentContext.startActivityForResult(new android.content.Intent(android.provider.Settings.ACTION_BLUETOOTH_SETTINGS), 0);
            }
            else {
                resolve();
            }
        });
    };
    Bluetooth.prototype.stopCurrentScan = function () {
        bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.info, 'stopCurrentScan:', !!this.scanningReferTimer);
        if (!this.adapter) {
            bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.error, 'stopCurrentScan: no adapter');
            return;
        }
        if (this.scanCallback) {
            var scanner = this.adapter.getBluetoothLeScanner();
            if (scanner) {
                scanner.stopScan(this.scanCallback);
            }
            this.scanCallback.onPeripheralDiscovered = null;
        }
        if (this.LeScanCallback) {
            this.adapter.stopLeScan(this.LeScanCallback);
            this.LeScanCallback.onPeripheralDiscovered = null;
        }
        if (this.scanningReferTimer) {
            clearTimeout(this.scanningReferTimer.timer);
            this.scanningReferTimer.resolve();
            this.scanningReferTimer = null;
        }
    };
    Bluetooth.prototype.startScanning = function (arg) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var onPermissionGranted = function () {
                    for (var key in _this.connections) {
                        if (_this.connections[key] && _this.connections[key].state === 'disconnected') {
                            delete _this.connections[key];
                        }
                    }
                    var filters = arg.filters || [];
                    if (_this.scanningReferTimer) {
                        _this.stopCurrentScan();
                    }
                    if (_this.LeScanCallback) {
                        var uuids_1 = [];
                        filters.forEach(function (f) {
                            if (f.serviceUUID) {
                                uuids_1.push(stringToUuid(f.serviceUUID));
                            }
                        });
                        _this.LeScanCallback.onPeripheralDiscovered = arg.onDiscovered;
                        var didStart = uuids_1.length === 0 ? _this.adapter.startLeScan(_this.LeScanCallback) : _this.adapter.startLeScan(uuids_1, _this.LeScanCallback);
                        bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.info, 'startScanning ---- PreLollipop ---- didStart scanning:', didStart, JSON.stringify(uuids_1));
                        if (!didStart) {
                            reject('couldnt_start_scanning');
                            return;
                        }
                    }
                    else {
                        var scanner = _this.adapter.getBluetoothLeScanner();
                        if (!scanner) {
                            reject('bluetooth_not_enabled');
                            return;
                        }
                        var scanFilters_1 = null;
                        if (filters.length > 0) {
                            scanFilters_1 = new java.util.ArrayList();
                            filters.forEach(function (f) {
                                var scanFilterBuilder = new android.bluetooth.le.ScanFilter.Builder();
                                if (f.serviceUUID) {
                                    scanFilterBuilder.setServiceUuid(new android.os.ParcelUuid(stringToUuid(f.serviceUUID)));
                                }
                                if (f.deviceName) {
                                    scanFilterBuilder.setDeviceName(f.deviceName);
                                }
                                if (f.deviceAddress) {
                                    scanFilterBuilder.setDeviceAddress(f.deviceAddress);
                                }
                                if (f.manufacturerData) {
                                    var manufacturerId = new DataView(f.manufacturerData, 0).getUint16(0, true);
                                    scanFilterBuilder.setManufacturerData(manufacturerId, arrayToNativeByteArray(f.manufacturerData));
                                }
                                scanFilters_1.add(scanFilterBuilder.build());
                            });
                        }
                        var scanSettings = new android.bluetooth.le.ScanSettings.Builder();
                        scanSettings.setReportDelay(0);
                        var scanMode = ((arg.android && arg.android.scanMode) || ScanMode.LOW_LATENCY);
                        scanSettings.setScanMode(androidScanMode(scanMode));
                        if (android.os.Build.VERSION.SDK_INT >= 23) {
                            var matchMode = ((arg.android && arg.android.matchMode) || MatchMode.AGGRESSIVE);
                            scanSettings.setMatchMode(androidMatchMode(matchMode));
                            var matchNum = ((arg.android && arg.android.matchNum) || MatchNum.MAX_ADVERTISEMENT);
                            scanSettings.setNumOfMatches(androidMatchNum(matchNum));
                            var callbackType = ((arg.android && arg.android.callbackType) || CallbackType.ALL_MATCHES);
                            scanSettings.setCallbackType(androidCallbackType(callbackType));
                        }
                        _this.scanCallback.onPeripheralDiscovered = arg.onDiscovered;
                        _this.adapter.getBluetoothLeScanner().startScan(scanFilters_1, scanSettings.build(), _this.scanCallback);
                        bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.info, 'startScanning ---- PostLollipop ---- didStart scanning:', JSON.stringify(filters));
                    }
                    _this.scanningReferTimer = { resolve: resolve };
                    if (arg.seconds) {
                        _this.scanningReferTimer.timer = setTimeout(function () { return _this.stopCurrentScan(); }, arg.seconds * 1000);
                    }
                    else {
                        resolve();
                    }
                };
                if (arg.skipPermissionCheck !== true && !_this.coarseLocationPermissionGranted()) {
                    bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.info, 'startScanning ---- Coarse Location Permission not granted on Android device, will request permission.');
                    _this.requestCoarseLocationPermission(onPermissionGranted);
                }
                else {
                    onPermissionGranted();
                }
            }
            catch (ex) {
                bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.error, 'startScanning ---- error:', ex);
                reject(ex);
            }
        });
    };
    Bluetooth.prototype.stopScanning = function () {
        this.stopCurrentScan();
    };
    Bluetooth.prototype.connect = function (args) {
        if (!args.UUID) {
            throw { msg: bluetooth_common_1.BluetoothCommon.msg_missing_parameter, type: 'UUID' };
        }
        var bluetoothDevice = this.adapter.getRemoteDevice(args.UUID);
        if (bluetoothDevice === null) {
            throw { msg: bluetooth_common_1.BluetoothCommon.msg_no_peripheral, args: args };
        }
        else {
            bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.info, 'connect ---- Connecting to peripheral with UUID:', args.UUID);
            var gatt = void 0;
            if (getAndroidSDK() < MARSHMALLOW) {
                gatt = bluetoothDevice.connectGatt(utils.ad.getApplicationContext(), false, this.bluetoothGattCallback);
            }
            else {
                gatt = bluetoothDevice.connectGatt(utils.ad.getApplicationContext(), false, this.bluetoothGattCallback, android.bluetooth.BluetoothDevice.TRANSPORT_LE);
            }
            this.connections[args.UUID] = {
                state: 'connecting',
                onConnected: args.onConnected,
                onDisconnected: args.onDisconnected,
                device: gatt
            };
        }
    };
    Bluetooth.prototype.disconnect = function (args) {
        if (!args.UUID) {
            throw { msg: bluetooth_common_1.BluetoothCommon.msg_missing_parameter, type: 'UUID' };
        }
        var connection = this.connections[args.UUID];
        bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.info, 'disconnect ---- connection:', args.UUID);
        if (!connection) {
            throw { msg: bluetooth_common_1.BluetoothCommon.msg_peripheral_not_connected, args: args };
        }
        this.gattDisconnect(connection.device);
    };
    Bluetooth.prototype.addToQueue = function (args, runner) {
        var _this = this;
        return this._getWrapper(args).then(function (wrapper) {
            return _this.gattQueue.add(function () { return runner(wrapper); });
        });
    };
    Bluetooth.prototype.read = function (args) {
        var _this = this;
        return this.addToQueue(args, function (wrapper) {
            return new Promise(function (resolve, reject) {
                try {
                    var gatt = wrapper.gatt;
                    var bluetoothGattService = wrapper.bluetoothGattService;
                    var characteristicUUID = stringToUuid(args.characteristicUUID);
                    bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.info, "read ---- peripheralUUID:" + args.peripheralUUID + " serviceUUID:" + args.serviceUUID + " characteristicUUID:" + args.characteristicUUID);
                    var bluetoothGattCharacteristic = _this._findCharacteristicOfType(bluetoothGattService, characteristicUUID, android.bluetooth.BluetoothGattCharacteristic.PROPERTY_READ);
                    if (!bluetoothGattCharacteristic) {
                        reject({ msg: bluetooth_common_1.BluetoothCommon.msg_no_characteristic, args: args });
                        return;
                    }
                    var stateObject = _this.connections[args.peripheralUUID];
                    stateObject.onReadCallbacks = stateObject.onReadCallbacks || [];
                    stateObject.onReadCallbacks.push(resolve);
                    if (!gatt.readCharacteristic(bluetoothGattCharacteristic)) {
                        reject({ msg: bluetooth_common_1.BluetoothCommon.msg_error_function_call, args: __assign({ method: 'readCharacteristic' }, args) });
                    }
                }
                catch (ex) {
                    bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.error, 'read ---- error:', ex);
                    reject(ex);
                }
            });
        });
    };
    Bluetooth.prototype.write = function (args) {
        var _this = this;
        if (!args.value) {
            return Promise.reject({ msg: bluetooth_common_1.BluetoothCommon.msg_missing_parameter, type: 'value' });
        }
        return this.addToQueue(args, function (wrapper) {
            return new Promise(function (resolve, reject) {
                try {
                    var characteristic = _this._findCharacteristicOfType(wrapper.bluetoothGattService, stringToUuid(args.characteristicUUID), android.bluetooth.BluetoothGattCharacteristic.PROPERTY_WRITE);
                    if (!characteristic) {
                        reject({ msg: bluetooth_common_1.BluetoothCommon.msg_no_characteristic, args: args });
                        return;
                    }
                    var val = valueToByteArray(args.value, args.encoding);
                    if (val === null) {
                        reject({ msg: bluetooth_common_1.BluetoothCommon.msg_invalid_value, value: args.value });
                        return;
                    }
                    characteristic.setValue(val);
                    characteristic.setWriteType(android.bluetooth.BluetoothGattCharacteristic.WRITE_TYPE_DEFAULT);
                    var stateObject = _this.connections[args.peripheralUUID];
                    stateObject.onWriteCallbacks = stateObject.onWriteCallbacks || [];
                    stateObject.onWriteCallbacks.push(resolve);
                    if (wrapper.gatt.writeCharacteristic(characteristic)) {
                        if (bluetooth_common_1.BluetoothUtil.debug) {
                            bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.info, 'write ---- characteristic:', args.value, printValueToString(val));
                        }
                    }
                    else {
                        reject({ msg: bluetooth_common_1.BluetoothCommon.msg_error_function_call, args: __assign({ method: 'writeCharacteristic' }, args) });
                    }
                }
                catch (ex) {
                    bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.error, 'write ---- error:', ex);
                    reject(ex);
                }
            });
        });
    };
    Bluetooth.prototype.writeWithoutResponse = function (args) {
        var _this = this;
        if (!args.value) {
            return Promise.reject({ msg: bluetooth_common_1.BluetoothCommon.msg_missing_parameter, type: 'value' });
        }
        return this.addToQueue(args, function (wrapper) {
            return new Promise(function (resolve, reject) {
                try {
                    var characteristic = _this._findCharacteristicOfType(wrapper.bluetoothGattService, stringToUuid(args.characteristicUUID), android.bluetooth.BluetoothGattCharacteristic.PROPERTY_WRITE);
                    if (!characteristic) {
                        reject({ msg: bluetooth_common_1.BluetoothCommon.msg_no_characteristic, args: args });
                        return;
                    }
                    var val = valueToByteArray(args.value, args.encoding);
                    if (!val) {
                        reject({ msg: bluetooth_common_1.BluetoothCommon.msg_invalid_value, value: args.value });
                        return;
                    }
                    characteristic.setValue(val);
                    characteristic.setWriteType(android.bluetooth.BluetoothGattCharacteristic.WRITE_TYPE_NO_RESPONSE);
                    var stateObject = _this.connections[args.peripheralUUID];
                    stateObject.onWriteCallbacks = stateObject.onWriteCallbacks || [];
                    stateObject.onWriteCallbacks.push(resolve);
                    if (wrapper.gatt.writeCharacteristic(characteristic)) {
                        if (bluetooth_common_1.BluetoothUtil.debug) {
                            bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.info, 'writeCharacteristic:', args.value, JSON.stringify(printValueToString(val)));
                        }
                        resolve();
                    }
                    else {
                        reject({ msg: bluetooth_common_1.BluetoothCommon.msg_error_function_call, args: __assign({ method: 'writeWithoutResponse' }, args) });
                    }
                }
                catch (ex) {
                    bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.error, 'writeWithoutResponse ---- error:', ex);
                    reject(ex);
                }
            });
        });
    };
    Bluetooth.prototype.startNotifying = function (args) {
        var _this = this;
        return this.addToQueue(args, function (wrapper) {
            return new Promise(function (resolve, reject) {
                try {
                    var gatt = wrapper.gatt;
                    var bluetoothGattService = wrapper.bluetoothGattService;
                    var characteristicUUID = stringToUuid(args.characteristicUUID);
                    var characteristic = _this._findNotifyCharacteristic(bluetoothGattService, characteristicUUID);
                    bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.info, 'startNotifying ---- characteristic:', characteristic);
                    if (!characteristic) {
                        reject({ msg: bluetooth_common_1.BluetoothCommon.msg_no_characteristic, args: args });
                        return;
                    }
                    if (!gatt.setCharacteristicNotification(characteristic, true)) {
                        reject({ msg: bluetooth_common_1.BluetoothCommon.msg_error_function_call, args: __assign({ method: 'setCharacteristicNotification' }, args) });
                        return;
                    }
                    var clientCharacteristicConfigId = stringToUuid('2902');
                    var bluetoothGattDescriptor = characteristic.getDescriptor(clientCharacteristicConfigId);
                    if (!bluetoothGattDescriptor) {
                        bluetoothGattDescriptor = new android.bluetooth.BluetoothGattDescriptor(clientCharacteristicConfigId, android.bluetooth.BluetoothGattDescriptor.PERMISSION_WRITE);
                        characteristic.addDescriptor(bluetoothGattDescriptor);
                        bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.info, 'startNotifying ---- descriptor:', bluetoothGattDescriptor);
                    }
                    if ((characteristic.getProperties() & android.bluetooth.BluetoothGattCharacteristic.PROPERTY_NOTIFY) !== 0) {
                        bluetoothGattDescriptor.setValue(android.bluetooth.BluetoothGattDescriptor.ENABLE_NOTIFICATION_VALUE);
                    }
                    else if ((characteristic.getProperties() & android.bluetooth.BluetoothGattCharacteristic.PROPERTY_INDICATE) !== 0) {
                        bluetoothGattDescriptor.setValue(android.bluetooth.BluetoothGattDescriptor.ENABLE_INDICATION_VALUE);
                    }
                    else {
                        reject({ msg: bluetooth_common_1.BluetoothCommon.msg_characteristic_cant_notify, args: args });
                        return;
                    }
                    if (gatt.writeDescriptor(bluetoothGattDescriptor)) {
                        var cb = args.onNotify ||
                            function (result) {
                                bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.warning, "No 'onNotify' callback function specified for 'startNotifying'");
                            };
                        var stateObject = _this.connections[args.peripheralUUID];
                        stateObject.onNotifyCallback = cb;
                        resolve();
                        bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.info, '--- startNotifying done');
                    }
                    else {
                        reject({ msg: bluetooth_common_1.BluetoothCommon.msg_error_function_call, args: __assign({ method: 'writeDescriptor' }, args) });
                    }
                }
                catch (ex) {
                    bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.error, 'startNotifying ---- error:', ex);
                    reject(ex);
                }
            });
        });
    };
    Bluetooth.prototype.stopNotifying = function (args) {
        var _this = this;
        return this.addToQueue(args, function (wrapper) {
            return new Promise(function (resolve, reject) {
                try {
                    var gatt = wrapper.gatt;
                    var gattService = wrapper.bluetoothGattService;
                    var characteristicUUID = stringToUuid(args.characteristicUUID);
                    var characteristic = _this._findNotifyCharacteristic(gattService, characteristicUUID);
                    bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.info, 'stopNotifying ---- service characteristic:', characteristic);
                    if (!characteristic) {
                        reject({ msg: bluetooth_common_1.BluetoothCommon.msg_no_characteristic, args: args });
                        return;
                    }
                    var stateObject = _this.connections[args.peripheralUUID];
                    stateObject.onNotifyCallback = null;
                    if (gatt.setCharacteristicNotification(characteristic, false)) {
                        resolve();
                    }
                    else {
                        reject({ msg: bluetooth_common_1.BluetoothCommon.msg_error_function_call, args: __assign({ method: 'setCharacteristicNotification' }, args) });
                    }
                }
                catch (ex) {
                    bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.error, 'stopNotifying:', ex);
                    reject(ex);
                }
            });
        });
    };
    Bluetooth.prototype.gattDisconnect = function (gatt) {
        if (gatt !== null) {
            var device = gatt.getDevice();
            var address = device.getAddress();
            bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.info, 'gattDisconnect ---- device:', address);
            var stateObject = this.connections[address];
            if (stateObject && stateObject.onDisconnected) {
                stateObject.onDisconnected({
                    UUID: address,
                    name: device.getName()
                });
            }
            else {
                bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.info, 'gattDisconnect ---- no disconnect callback found');
            }
            this.connections[address] = null;
            bluetooth_common_1.CLog(bluetooth_common_1.CLogTypes.info, 'gattDisconnect ---- Closing GATT client');
            gatt.close();
        }
    };
    Bluetooth.prototype._findNotifyCharacteristic = function (bluetoothGattService, characteristicUUID) {
        var characteristics = bluetoothGattService.getCharacteristics();
        for (var i = 0; i < characteristics.size(); i++) {
            var c = characteristics.get(i);
            if ((c.getProperties() & android.bluetooth.BluetoothGattCharacteristic.PROPERTY_NOTIFY) !== 0 && characteristicUUID.equals(c.getUuid())) {
                return c;
            }
        }
        for (var j = 0; j < characteristics.size(); j++) {
            var ch = characteristics.get(j);
            if ((ch.getProperties() & android.bluetooth.BluetoothGattCharacteristic.PROPERTY_INDICATE) !== 0 && characteristicUUID.equals(ch.getUuid())) {
                return ch;
            }
        }
        return bluetoothGattService.getCharacteristic(characteristicUUID);
    };
    Bluetooth.prototype._findCharacteristicOfType = function (bluetoothGattService, characteristicUUID, charType) {
        var characteristics = bluetoothGattService.getCharacteristics();
        for (var i = 0; i < characteristics.size(); i++) {
            var c = characteristics.get(i);
            if ((c.getProperties() & charType) !== 0 && characteristicUUID.equals(c.getUuid())) {
                return c;
            }
        }
        return bluetoothGattService.getCharacteristic(characteristicUUID);
    };
    Bluetooth.prototype._getWrapper = function (args) {
        if (!args.peripheralUUID) {
            return Promise.reject({ msg: bluetooth_common_1.BluetoothCommon.msg_missing_parameter, type: 'peripheralUUID' });
        }
        if (!args.serviceUUID) {
            return Promise.reject({ msg: bluetooth_common_1.BluetoothCommon.msg_missing_parameter, type: 'serviceUUID' });
        }
        if (!args.characteristicUUID) {
            return Promise.reject({ msg: bluetooth_common_1.BluetoothCommon.msg_missing_parameter, type: 'characteristicUUID' });
        }
        var serviceUUID = stringToUuid(args.serviceUUID);
        var stateObject = this.connections[args.peripheralUUID];
        if (!stateObject) {
            return Promise.reject({ msg: bluetooth_common_1.BluetoothCommon.msg_peripheral_not_connected, args: args });
        }
        var gatt = stateObject.device;
        var bluetoothGattService = gatt.getService(serviceUUID);
        if (!bluetoothGattService) {
            return Promise.reject({ msg: bluetooth_common_1.BluetoothCommon.msg_no_service, args: args });
        }
        return Promise.resolve({
            gatt: gatt,
            bluetoothGattService: bluetoothGattService
        });
    };
    Bluetooth.prototype._isEnabled = function () {
        var adapter = this.adapter;
        return adapter && adapter.isEnabled();
    };
    Bluetooth.prototype._getContext = function () {
        var ctx = java.lang.Class.forName('android.app.AppGlobals')
            .getMethod('getInitialApplication', null)
            .invoke(null, null);
        if (ctx) {
            return ctx;
        }
        return java.lang.Class.forName('android.app.ActivityThread')
            .getMethod('currentApplication', null)
            .invoke(null, null);
    };
    Bluetooth.prototype._getActivity = function () {
        var _this = this;
        var activity = application.android.foregroundActivity || application.android.startActivity;
        if (activity === null) {
            setTimeout(function () {
                _this._getActivity();
            }, 250);
            return;
        }
        else {
            return activity;
        }
    };
    Bluetooth.android = {
        ScanMode: ScanMode,
        MatchMode: MatchMode,
        MatchNum: MatchNum,
        CallbackType: CallbackType
    };
    __decorate([
        bluetooth_common_1.bluetoothEnabled,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], Bluetooth.prototype, "isConnected", null);
    __decorate([
        bluetooth_common_1.bluetoothEnabled,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], Bluetooth.prototype, "startScanning", null);
    __decorate([
        bluetooth_common_1.bluetoothEnabled,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Bluetooth.prototype, "stopScanning", null);
    __decorate([
        bluetooth_common_1.bluetoothEnabled,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], Bluetooth.prototype, "connect", null);
    __decorate([
        bluetooth_common_1.bluetoothEnabled,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], Bluetooth.prototype, "disconnect", null);
    __decorate([
        bluetooth_common_1.bluetoothEnabled,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], Bluetooth.prototype, "_getWrapper", null);
    return Bluetooth;
}(bluetooth_common_1.BluetoothCommon));
exports.Bluetooth = Bluetooth;
//# sourceMappingURL=bluetooth.js.map