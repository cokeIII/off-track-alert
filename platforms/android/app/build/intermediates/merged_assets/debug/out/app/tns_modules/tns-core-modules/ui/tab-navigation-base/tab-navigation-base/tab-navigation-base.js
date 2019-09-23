Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = require("../../core/view");
var knownCollections;
(function (knownCollections) {
    knownCollections.items = "items";
})(knownCollections = exports.knownCollections || (exports.knownCollections = {}));
var TabNavigationBase = (function (_super) {
    __extends(TabNavigationBase, _super);
    function TabNavigationBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabNavigationBase.prototype._addArrayFromBuilder = function (name, value) {
        if (name === "items") {
            this.items = value;
        }
    };
    TabNavigationBase.prototype._addChildFromBuilder = function (name, value) {
        if (name === "TabContentItem") {
            if (!this.items) {
                this.items = new Array();
            }
            this.items.push(value);
            this._addView(value);
        }
        else if (name === "TabStrip") {
            this.tabStrip = value;
        }
    };
    Object.defineProperty(TabNavigationBase.prototype, "_selectedView", {
        get: function () {
            var selectedIndex = this.selectedIndex;
            return selectedIndex > -1 ? this.items[selectedIndex].content : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabNavigationBase.prototype, "_childrenCount", {
        get: function () {
            var items = this.items;
            return items ? items.length : 0;
        },
        enumerable: true,
        configurable: true
    });
    TabNavigationBase.prototype.eachChild = function (callback) {
        var items = this.items;
        if (items) {
            items.forEach(function (item, i) {
                callback(item);
            });
        }
        var tabStrip = this.tabStrip;
        if (tabStrip) {
            callback(tabStrip);
        }
    };
    TabNavigationBase.prototype.eachChildView = function (callback) {
        var items = this.items;
        if (items) {
            items.forEach(function (item, i) {
                callback(item.content);
            });
        }
    };
    TabNavigationBase.prototype.onItemsChanged = function (oldItems, newItems) {
        var _this = this;
        if (oldItems) {
            oldItems.forEach(function (item) { return _this._removeView(item); });
        }
        if (newItems) {
            newItems.forEach(function (item) {
                if (!item.content) {
                    throw new Error("TabContentItem must have a content (view).");
                }
                _this._addView(item);
            });
        }
    };
    TabNavigationBase.prototype.onTabStripChanged = function (oldTabStrip, newTabStrip) {
        if (oldTabStrip && oldTabStrip.parent) {
            this._removeView(oldTabStrip);
        }
        if (newTabStrip) {
            this._addView(newTabStrip);
        }
    };
    TabNavigationBase.prototype.onSelectedIndexChanged = function (oldIndex, newIndex) {
        this.notify({ eventName: TabNavigationBase.selectedIndexChangedEvent, object: this, oldIndex: oldIndex, newIndex: newIndex });
    };
    TabNavigationBase.prototype.getTabBarBackgroundColor = function () {
        return null;
    };
    TabNavigationBase.prototype.setTabBarBackgroundColor = function (value) {
    };
    TabNavigationBase.prototype.getTabBarFontInternal = function () {
        return null;
    };
    TabNavigationBase.prototype.setTabBarFontInternal = function (value) {
    };
    TabNavigationBase.prototype.getTabBarTextTransform = function () {
        return null;
    };
    TabNavigationBase.prototype.setTabBarTextTransform = function (value) {
    };
    TabNavigationBase.prototype.getTabBarHighlightColor = function () {
    };
    TabNavigationBase.prototype.setTabBarHighlightColor = function (value) {
    };
    TabNavigationBase.prototype.getTabBarColor = function () {
        return null;
    };
    TabNavigationBase.prototype.setTabBarColor = function (value) {
    };
    TabNavigationBase.prototype.setTabBarItemTitle = function (tabStripItem, value) {
    };
    TabNavigationBase.prototype.getTabBarItemBackgroundColor = function (tabStripItem) {
        return null;
    };
    TabNavigationBase.prototype.setTabBarItemBackgroundColor = function (tabStripItem, value) {
    };
    TabNavigationBase.prototype.getTabBarItemColor = function (tabStripItem) {
        return null;
    };
    TabNavigationBase.prototype.setTabBarItemColor = function (tabStripItem, value) {
    };
    TabNavigationBase.prototype.setTabBarIconColor = function (tabStripItem, value) {
    };
    TabNavigationBase.prototype.getTabBarItemFontSize = function (tabStripItem) {
        return null;
    };
    TabNavigationBase.prototype.setTabBarItemFontSize = function (tabStripItem, value) {
    };
    TabNavigationBase.prototype.getTabBarItemFontInternal = function (tabStripItem) {
        return null;
    };
    TabNavigationBase.prototype.setTabBarItemFontInternal = function (tabStripItem, value) {
    };
    TabNavigationBase.prototype.getTabBarItemTextTransform = function (tabStripItem) {
        return null;
    };
    TabNavigationBase.prototype.setTabBarItemTextTransform = function (tabStripItem, value) {
    };
    TabNavigationBase.selectedIndexChangedEvent = "selectedIndexChanged";
    return TabNavigationBase;
}(view_1.View));
exports.TabNavigationBase = TabNavigationBase;
var MIN_ICON_SIZE = 24;
var MAX_ICON_WIDTH = 31;
var MAX_ICON_HEIGHT = 28;
function getIconSpecSize(size) {
    var inWidth = size.width;
    var inHeight = size.height;
    var outWidth = 0;
    var outHeight = 0;
    if (inWidth < inHeight) {
        outWidth = MIN_ICON_SIZE;
        outHeight = (inHeight * MIN_ICON_SIZE) / inWidth;
        if (outHeight > MAX_ICON_HEIGHT) {
            outHeight = MAX_ICON_HEIGHT;
            outWidth = (inWidth * MAX_ICON_HEIGHT) / inHeight;
        }
    }
    else {
        outHeight = MIN_ICON_SIZE;
        outWidth = (inWidth * MIN_ICON_SIZE) / inHeight;
        if (outWidth > MAX_ICON_WIDTH) {
            outWidth = MAX_ICON_WIDTH;
            outHeight = (inHeight * MAX_ICON_WIDTH) / inWidth;
        }
    }
    return { width: outWidth, height: outHeight };
}
exports.getIconSpecSize = getIconSpecSize;
exports.selectedIndexProperty = new view_1.CoercibleProperty({
    name: "selectedIndex", defaultValue: -1, affectsLayout: view_1.isIOS,
    valueChanged: function (target, oldValue, newValue) {
        target.onSelectedIndexChanged(oldValue, newValue);
    },
    coerceValue: function (target, value) {
        var items = target.items;
        if (items) {
            var max = items.length - 1;
            if (value < 0) {
                value = 0;
            }
            if (value > max) {
                value = max;
            }
        }
        else {
            value = -1;
        }
        return value;
    },
    valueConverter: function (v) { return parseInt(v); }
});
exports.selectedIndexProperty.register(TabNavigationBase);
exports.itemsProperty = new view_1.Property({
    name: "items", valueChanged: function (target, oldValue, newValue) {
        target.onItemsChanged(oldValue, newValue);
    }
});
exports.itemsProperty.register(TabNavigationBase);
exports.tabStripProperty = new view_1.Property({
    name: "tabStrip", valueChanged: function (target, oldValue, newValue) {
        target.onTabStripChanged(oldValue, newValue);
    }
});
exports.tabStripProperty.register(TabNavigationBase);
//# sourceMappingURL=tab-navigation-base.js.map