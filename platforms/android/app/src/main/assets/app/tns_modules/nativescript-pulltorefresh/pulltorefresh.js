"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = require("tns-core-modules/color");
var pulltorefresh_common_1 = require("./pulltorefresh-common");
__export(require("./pulltorefresh-common"));
var CarouselFriendlySwipeRefreshLayout = (function (_super) {
    __extends(CarouselFriendlySwipeRefreshLayout, _super);
    function CarouselFriendlySwipeRefreshLayout(context, attrs) {
        var _this = _super.call(this, context, attrs) || this;
        _this._touchSlop = android.view.ViewConfiguration.get(context).getScaledTouchSlop();
        return _this;
    }
    CarouselFriendlySwipeRefreshLayout.prototype.onInterceptTouchEvent = function (event) {
        switch (event.getAction()) {
            case android.view.MotionEvent.ACTION_DOWN: {
                this._previousX = android.view.MotionEvent.obtain(event).getX();
                break;
            }
            case android.view.MotionEvent.ACTION_MOVE: {
                var eventX = event.getX();
                var xDifference = Math.abs(eventX - this._previousX);
                if (xDifference > this._touchSlop) {
                    return false;
                }
                break;
            }
        }
        return _super.prototype.onInterceptTouchEvent.call(this, event);
    };
    return CarouselFriendlySwipeRefreshLayout;
}(android.support.v4.widget
    .SwipeRefreshLayout));
var PullToRefresh = (function (_super) {
    __extends(PullToRefresh, _super);
    function PullToRefresh() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(PullToRefresh.prototype, "android", {
        get: function () {
            return this.nativeView;
        },
        enumerable: true,
        configurable: true
    });
    PullToRefresh.prototype.createNativeView = function () {
        var swipeRefreshLayout = new CarouselFriendlySwipeRefreshLayout(this._context);
        if (!this._androidViewId) {
            this._androidViewId = android.view.View.generateViewId();
        }
        swipeRefreshLayout.setId(this._androidViewId);
        var refreshListener = new TNS_SwipeRefreshListener(new WeakRef(this));
        swipeRefreshLayout.setOnRefreshListener(refreshListener);
        swipeRefreshLayout.refreshListener = refreshListener;
        return swipeRefreshLayout;
    };
    PullToRefresh.prototype.initNativeView = function () {
        _super.prototype.initNativeView.call(this);
        var nativeView = this.nativeView;
        nativeView.refreshListener.owner = new WeakRef(this);
    };
    PullToRefresh.prototype.disposeNativeView = function () {
        var nativeView = this.nativeView;
        nativeView.refreshListener.owner = null;
        _super.prototype.disposeNativeView.call(this);
    };
    PullToRefresh.prototype[pulltorefresh_common_1.refreshingProperty.getDefault] = function () {
        return false;
    };
    PullToRefresh.prototype[pulltorefresh_common_1.refreshingProperty.setNative] = function (value) {
        this.nativeView.setRefreshing(value);
    };
    PullToRefresh.prototype[pulltorefresh_common_1.colorProperty.setNative] = function (value) {
        var color = value instanceof color_1.Color ? value.android : value;
        this.nativeView.setColorSchemeColors([color]);
    };
    PullToRefresh.prototype[pulltorefresh_common_1.backgroundColorProperty.setNative] = function (value) {
        var color = value instanceof color_1.Color ? value.android : value;
        this.nativeView.setProgressBackgroundColorSchemeColor(color);
    };
    return PullToRefresh;
}(pulltorefresh_common_1.PullToRefreshBase));
exports.PullToRefresh = PullToRefresh;
var TNS_SwipeRefreshListener = (function (_super) {
    __extends(TNS_SwipeRefreshListener, _super);
    function TNS_SwipeRefreshListener(owner) {
        var _this = _super.call(this) || this;
        _this.owner = owner;
        return global.__native(_this);
    }
    TNS_SwipeRefreshListener.prototype.onRefresh = function (v) {
        var owner = this.owner.get();
        if (owner) {
            owner.refreshing = true;
            owner.notify({
                eventName: pulltorefresh_common_1.PullToRefreshBase.refreshEvent,
                object: owner
            });
        }
    };
    TNS_SwipeRefreshListener = __decorate([
        Interfaces([
            android.support.v4.widget.SwipeRefreshLayout.OnRefreshListener
        ]),
        __metadata("design:paramtypes", [WeakRef])
    ], TNS_SwipeRefreshListener);
    return TNS_SwipeRefreshListener;
}(java.lang.Object));
//# sourceMappingURL=pulltorefresh.js.map