"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable/observable");
var BluetoothUtil = (function () {
    function BluetoothUtil() {
    }
    BluetoothUtil.debug = false;
    return BluetoothUtil;
}());
exports.BluetoothUtil = BluetoothUtil;
var CLogTypes;
(function (CLogTypes) {
    CLogTypes[CLogTypes["info"] = 0] = "info";
    CLogTypes[CLogTypes["warning"] = 1] = "warning";
    CLogTypes[CLogTypes["error"] = 2] = "error";
})(CLogTypes = exports.CLogTypes || (exports.CLogTypes = {}));
exports.CLog = function (type) {
    if (type === void 0) { type = 0; }
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (BluetoothUtil.debug) {
        if (type === 0) {
            console.log.apply(console, args);
        }
        else if (type === 1) {
            console.warn.apply(console, args);
        }
        else if (type === 2) {
            console.error.apply(console, args);
        }
    }
};
function bluetoothEnabled(target, propertyKey, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.isBluetoothEnabled()
            .then(function (isEnabled) {
            if (!isEnabled) {
                exports.CLog(CLogTypes.info, originalMethod.name + " ---- Bluetooth is not enabled.");
                return Promise.reject(BluetoothCommon.msg_not_enabled);
            }
            return null;
        })
            .then(function () {
            return originalMethod.apply(_this, args);
        });
    };
    return descriptor;
}
exports.bluetoothEnabled = bluetoothEnabled;
var BluetoothCommon = (function (_super) {
    __extends(BluetoothCommon, _super);
    function BluetoothCommon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(BluetoothCommon.prototype, "debug", {
        set: function (value) {
            BluetoothUtil.debug = value;
        },
        enumerable: true,
        configurable: true
    });
    BluetoothCommon.prototype.requestCoarseLocationPermission = function () {
        return new Promise(function (resolve) {
            resolve(true);
        });
    };
    BluetoothCommon.prototype.hasCoarseLocationPermission = function () {
        return new Promise(function (resolve) {
            resolve(true);
        });
    };
    BluetoothCommon.prototype.sendEvent = function (eventName, data, msg) {
        this.notify({
            eventName: eventName,
            object: this,
            data: data,
            message: msg
        });
    };
    BluetoothCommon.msg_not_enabled = 'bluetooth_not_enabled';
    BluetoothCommon.msg_not_supported = 'bluetooth_not_supported';
    BluetoothCommon.msg_cant_open_settings = 'cant_open_settings';
    BluetoothCommon.msg_missing_parameter = 'missing_parameter';
    BluetoothCommon.msg_no_peripheral = 'peripheral_not_found';
    BluetoothCommon.msg_no_service = 'service_not_found';
    BluetoothCommon.msg_no_characteristic = 'characteristic_not_found';
    BluetoothCommon.msg_peripheral_not_connected = 'peripheral_not_connected';
    BluetoothCommon.msg_invalid_value = 'invalid_value';
    BluetoothCommon.msg_error_function_call = 'error_function_call';
    BluetoothCommon.msg_characteristic_cant_notify = 'characteristic_cant_notify';
    BluetoothCommon.error_event = 'error_event';
    BluetoothCommon.bluetooth_status_event = 'bluetooth_status_event';
    BluetoothCommon.bluetooth_enabled_event = 'bluetooth_enabled_event';
    BluetoothCommon.bluetooth_discoverable_event = 'bluetooth_discoverable_event';
    BluetoothCommon.bluetooth_advertise_success_event = 'bluetooth_advertise_success_event';
    BluetoothCommon.bluetooth_advertise_failure_event = 'bluetooth_advertise_failure_event';
    BluetoothCommon.server_connection_state_changed_event = 'server_connection_state_changed_event';
    BluetoothCommon.bond_status_change_event = 'bond_status_change_event';
    BluetoothCommon.device_discovered_event = 'device_discovered_event';
    BluetoothCommon.device_name_change_event = 'device_name_change_event';
    BluetoothCommon.device_uuid_change_event = 'device_uuid_change_event';
    BluetoothCommon.device_acl_disconnected_event = 'device_acl_disconnected_event';
    BluetoothCommon.characteristic_write_request_event = 'characteristic_write_request_event';
    BluetoothCommon.characteristic_read_request_event = 'characteristic_read_request_event';
    BluetoothCommon.descriptor_write_request_event = 'descriptor_write_request_event';
    BluetoothCommon.descriptor_read_request_event = 'descriptor_read_request_event';
    BluetoothCommon.execute_write_event = 'execute_write_event';
    return BluetoothCommon;
}(observable_1.Observable));
exports.BluetoothCommon = BluetoothCommon;
var ScanMode;
(function (ScanMode) {
    ScanMode[ScanMode["LOW_LATENCY"] = 0] = "LOW_LATENCY";
    ScanMode[ScanMode["BALANCED"] = 1] = "BALANCED";
    ScanMode[ScanMode["LOW_POWER"] = 2] = "LOW_POWER";
    ScanMode[ScanMode["OPPORTUNISTIC"] = 3] = "OPPORTUNISTIC";
})(ScanMode = exports.ScanMode || (exports.ScanMode = {}));
var MatchMode;
(function (MatchMode) {
    MatchMode[MatchMode["AGGRESSIVE"] = 0] = "AGGRESSIVE";
    MatchMode[MatchMode["STICKY"] = 1] = "STICKY";
})(MatchMode = exports.MatchMode || (exports.MatchMode = {}));
var MatchNum;
(function (MatchNum) {
    MatchNum[MatchNum["MAX_ADVERTISEMENT"] = 0] = "MAX_ADVERTISEMENT";
    MatchNum[MatchNum["FEW_ADVERTISEMENT"] = 1] = "FEW_ADVERTISEMENT";
    MatchNum[MatchNum["ONE_ADVERTISEMENT"] = 2] = "ONE_ADVERTISEMENT";
})(MatchNum = exports.MatchNum || (exports.MatchNum = {}));
var CallbackType;
(function (CallbackType) {
    CallbackType[CallbackType["ALL_MATCHES"] = 0] = "ALL_MATCHES";
    CallbackType[CallbackType["FIRST_MATCH"] = 1] = "FIRST_MATCH";
    CallbackType[CallbackType["MATCH_LOST"] = 2] = "MATCH_LOST";
})(CallbackType = exports.CallbackType || (exports.CallbackType = {}));
var Phy;
(function (Phy) {
    Phy[Phy["LE_1M"] = 0] = "LE_1M";
    Phy[Phy["LE_CODED"] = 1] = "LE_CODED";
    Phy[Phy["LE_ALL_SUPPORTED"] = 2] = "LE_ALL_SUPPORTED";
})(Phy = exports.Phy || (exports.Phy = {}));
//# sourceMappingURL=bluetooth.common.js.map