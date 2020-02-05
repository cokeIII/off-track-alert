var debug = false;
export function setDebug(value) {
    debug = value;
}
export var CLogTypes;
(function (CLogTypes) {
    CLogTypes[CLogTypes["info"] = 0] = "info";
    CLogTypes[CLogTypes["warning"] = 1] = "warning";
    CLogTypes[CLogTypes["error"] = 2] = "error";
})(CLogTypes || (CLogTypes = {}));
export var CLog = function (type) {
    if (type === void 0) { type = 0; }
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (debug) {
        if (type === 0) {
            // Info
            console.log.apply(console, ['[nativescript-perms]'].concat(args));
        }
        else if (type === 1) {
            // Warning
            console.warn.apply(console, ['[nativescript-perms]'].concat(args));
        }
        else if (type === 2) {
            console.error.apply(console, ['[nativescript-perms]'].concat(args));
        }
    }
};
//# sourceMappingURL=permissions.common.js.map