"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = require("tns-core-modules/color");
var platform_1 = require("tns-core-modules/platform");
var enums_1 = require("tns-core-modules/ui/enums");
var frameModule = require("tns-core-modules/ui/frame");
var toast_common_1 = require("./toast.common");
var types_1 = require("tns-core-modules/utils/types");
__export(require("./toast.common"));
var Toasty = (function () {
    function Toasty(opts) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        this._toastStyle = ToastStyle.new();
        this._text = (_a = opts) === null || _a === void 0 ? void 0 : _a.text;
        this._duration = (_c = (_b = opts) === null || _b === void 0 ? void 0 : _b.duration, (_c !== null && _c !== void 0 ? _c : toast_common_1.ToastDuration.SHORT));
        this._position = (_e = (_d = opts) === null || _d === void 0 ? void 0 : _d.position, (_e !== null && _e !== void 0 ? _e : toast_common_1.ToastPosition.BOTTOM));
        this._textColor = (_g = (_f = opts) === null || _f === void 0 ? void 0 : _f.textColor, (_g !== null && _g !== void 0 ? _g : 'white'));
        this._backgroundColor = ((_h = opts) === null || _h === void 0 ? void 0 : _h.backgroundColor) || 'black';
        this._iOSOpts = (_k = (_j = opts) === null || _j === void 0 ? void 0 : _j.ios, (_k !== null && _k !== void 0 ? _k : {}));
        this._x = (_l = opts) === null || _l === void 0 ? void 0 : _l.xAxisOffset;
        this._y = (_m = opts) === null || _m === void 0 ? void 0 : _m.yAxisOffset;
        this._tapToDismiss = (_p = (_o = opts) === null || _o === void 0 ? void 0 : _o.tapToDismiss, (_p !== null && _p !== void 0 ? _p : false));
        this._anchorView = (_q = opts) === null || _q === void 0 ? void 0 : _q.anchorView;
        this.setToastDuration(this._duration)
            .setToastPosition(this._position)
            .setTextColor(this._textColor)
            .setBackgroundColor(this._backgroundColor);
        if (this._iOSOpts.displayShadow) {
            this._toastStyle.displayShadow = this._iOSOpts.displayShadow;
            if (this._iOSOpts.shadowColor) {
                if (typeof this._iOSOpts.shadowColor === 'string') {
                    this._toastStyle.shadowColor = new color_1.Color(this._iOSOpts.shadowColor).ios;
                }
                else {
                    this._toastStyle.shadowColor = (_t = (_s = (_r = this._iOSOpts) === null || _r === void 0 ? void 0 : _r.shadowColor) === null || _s === void 0 ? void 0 : _s.ios, (_t !== null && _t !== void 0 ? _t : new color_1.Color('black').ios));
                }
            }
        }
        if (this._iOSOpts.cornerRadius) {
            this._toastStyle.cornerRadius = this._iOSOpts.cornerRadius;
        }
        if (this._iOSOpts.messageNumberOfLines) {
            this._toastStyle.messageNumberOfLines = this._iOSOpts.messageNumberOfLines;
        }
        ToastManager.shared.isTapToDismissEnabled = this._tapToDismiss;
        ToastManager.shared.style = this._toastStyle;
        return this;
    }
    Object.defineProperty(Toasty.prototype, "position", {
        get: function () {
            return this._position;
        },
        set: function (value) {
            if (value) {
                this._position = value;
                this.setToastPosition(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Toasty.prototype, "duration", {
        get: function () {
            return this._duration;
        },
        set: function (value) {
            if (value) {
                this._duration = value;
                this.setToastDuration(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Toasty.prototype, "textColor", {
        get: function () {
            return this._textColor;
        },
        set: function (value) {
            if (value) {
                this._textColor = value;
                this.setTextColor(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Toasty.prototype, "backgroundColor", {
        get: function () {
            return this._backgroundColor;
        },
        set: function (value) {
            if (value) {
                this._backgroundColor = value;
                this.setBackgroundColor(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Toasty.prototype, "xAxisOffset", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
            this._updateToastPosition();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Toasty.prototype, "yAxisOffset", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            this._y = value;
            this._updateToastPosition();
        },
        enumerable: true,
        configurable: true
    });
    Toasty.isLength = function (value) {
        return (value && !types_1.isNullOrUndefined(value.unit) && !types_1.isNullOrUndefined(value.value));
    };
    Object.defineProperty(Toasty.prototype, "yPixels", {
        get: function () {
            var y;
            if (typeof this._y === 'number') {
                y = this._y;
            }
            if (Toasty.isLength(this._y)) {
                if (this._y.unit === 'px') {
                    y = this._y.value / platform_1.screen.mainScreen.scale;
                }
                if (this._y.unit === 'dip') {
                    y = this._y.value;
                }
            }
            if (typeof this._y === 'string') {
                if (this._y.includes('px')) {
                    y = parseInt(this._y.replace('px', ''), 0) / platform_1.screen.mainScreen.scale;
                }
                if (this._y.includes('dip')) {
                    y = parseInt(this._y.replace('dip', ''), 0);
                }
            }
            return y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Toasty.prototype, "xPixels", {
        get: function () {
            var x;
            if (typeof this._x === 'number') {
                x = this._x;
            }
            if (Toasty.isLength(this._x)) {
                if (this._x.unit === 'px') {
                    x = this._x.value / platform_1.screen.mainScreen.scale;
                }
                if (this._x.unit === 'dip') {
                    x = this._x.value;
                }
            }
            if (typeof this._x === 'string') {
                if (this._x.includes('px')) {
                    x = parseInt(this._x.replace('px', ''), 0) / platform_1.screen.mainScreen.scale;
                }
                if (this._x.includes('dip')) {
                    x = parseInt(this._x.replace('dip', ''), 0);
                }
            }
            return x;
        },
        enumerable: true,
        configurable: true
    });
    Toasty.prototype.getOffset = function (offset) {
        var symbol;
        switch (this._position) {
            case toast_common_1.ToastPosition.TOP_LEFT:
            case toast_common_1.ToastPosition.BOTTOM_LEFT:
            case toast_common_1.ToastPosition.CENTER_LEFT:
                symbol = '-';
                break;
            case toast_common_1.ToastPosition.TOP_RIGHT:
            case toast_common_1.ToastPosition.BOTTOM_RIGHT:
            case toast_common_1.ToastPosition.CENTER_RIGHT:
                symbol = '+';
                break;
            default:
                var value = "" + offset;
                if (value.includes('-')) {
                    symbol = '';
                }
                else {
                    symbol = '-';
                }
                break;
        }
        var result = Number("" + symbol + offset);
        return Number.isNaN(result) ? undefined : result;
    };
    Toasty.prototype.show = function () {
        var _a, _b, _c;
        if (!this._text) {
            throw new Error('Text is not set');
        }
        else {
            (_a = this._getView()) === null || _a === void 0 ? void 0 : _a.makeToastWithOffset(this._text, CGPointMake((_b = this.getOffset(this.xPixels), (_b !== null && _b !== void 0 ? _b : 0)), (_c = this.getOffset(this.yPixels), (_c !== null && _c !== void 0 ? _c : 0))));
        }
    };
    Object.defineProperty(Toasty.prototype, "width", {
        get: function () {
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Toasty.prototype, "height", {
        get: function () {
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Toasty.prototype.cancel = function () {
        var _a;
        (_a = this._getView()) === null || _a === void 0 ? void 0 : _a.hideAllToastsWithIncludeActivityClearQueue(true, true);
    };
    Toasty.prototype.setTextColor = function (value) {
        if (value) {
            this._textColor = value;
            if (typeof value === 'string') {
                this._toastStyle.messageColor = new color_1.Color(value).ios;
            }
            else {
                this._toastStyle.messageColor = value.ios;
            }
            ToastManager.shared.style = this._toastStyle;
        }
        return this;
    };
    Toasty.prototype.setBackgroundColor = function (value) {
        if (value) {
            this._backgroundColor = value;
            if (typeof value === 'string') {
                this._toastStyle.backgroundColor = new color_1.Color(value).ios;
            }
            else {
                this._toastStyle.backgroundColor = value.ios;
            }
            ToastManager.shared.style = this._toastStyle;
        }
        return this;
    };
    Toasty.prototype._updateToastPosition = function () {
        switch (this._position) {
            case toast_common_1.ToastPosition.TOP:
                ToastManager.shared.position = 0;
                break;
            case toast_common_1.ToastPosition.TOP_LEFT:
                ToastManager.shared.position = 3;
                break;
            case toast_common_1.ToastPosition.TOP_RIGHT:
                ToastManager.shared.position = 4;
                break;
            case toast_common_1.ToastPosition.CENTER:
                ToastManager.shared.position = 1;
                break;
            case toast_common_1.ToastPosition.CENTER_LEFT:
                ToastManager.shared.position = 5;
                break;
            case toast_common_1.ToastPosition.CENTER_RIGHT:
                ToastManager.shared.position = 6;
                break;
            case toast_common_1.ToastPosition.BOTTOM:
                ToastManager.shared.position = 2;
                break;
            case toast_common_1.ToastPosition.BOTTOM_LEFT:
                ToastManager.shared.position = 7;
                break;
            case toast_common_1.ToastPosition.BOTTOM_RIGHT:
                ToastManager.shared.position = 8;
                break;
            default:
                break;
        }
    };
    Toasty.prototype.setToastPosition = function (value) {
        this._position = value;
        this._updateToastPosition();
        return this;
    };
    Toasty.prototype.setToastDuration = function (value) {
        switch (value) {
            case toast_common_1.ToastDuration.SHORT:
                ToastManager.shared.duration = 2.0;
                break;
            case toast_common_1.ToastDuration.LONG:
                ToastManager.shared.duration = 4.0;
                break;
            default:
                ToastManager.shared.duration = 2.0;
                break;
        }
        return this;
    };
    Toasty.prototype._getView = function () {
        if (!frameModule.topmost()) {
            var root = this.topViewController;
            if (!root) {
                throw new Error('There is no topmost');
            }
            return root.view.window;
        }
        else {
            if (this._iOSOpts && this._anchorView) {
                return this._anchorView;
            }
            else {
                var viewController = frameModule.topmost()
                    .viewController;
                if (viewController.presentedViewController) {
                    if (platform_1.device.deviceType !== enums_1.DeviceType.Tablet) {
                        while (viewController.presentedViewController) {
                            viewController = viewController.presentedViewController;
                        }
                    }
                }
                return viewController.view;
            }
        }
    };
    Object.defineProperty(Toasty, "rootViewController", {
        get: function () {
            var keyWindow = UIApplication.sharedApplication.keyWindow;
            return keyWindow != null ? keyWindow.rootViewController : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Toasty.prototype, "topViewController", {
        get: function () {
            var root = Toasty.rootViewController;
            if (root == null) {
                return undefined;
            }
            return this.findTopViewController(root);
        },
        enumerable: true,
        configurable: true
    });
    Toasty.prototype.findTopViewController = function (root) {
        var presented = root.presentedViewController;
        if (presented != null) {
            return this.findTopViewController(presented);
        }
        if (root instanceof UISplitViewController) {
            var last = root.viewControllers.lastObject;
            if (last == null) {
                return root;
            }
            return this.findTopViewController(last);
        }
        else if (root instanceof UINavigationController) {
            var top_1 = root.topViewController;
            if (top_1 == null) {
                return root;
            }
            return this.findTopViewController(top_1);
        }
        else if (root instanceof UITabBarController) {
            var selected = root.selectedViewController;
            if (selected == null) {
                return root;
            }
            return this.findTopViewController(selected);
        }
        else {
            return root;
        }
    };
    return Toasty;
}());
exports.Toasty = Toasty;
//# sourceMappingURL=toasty.js.map