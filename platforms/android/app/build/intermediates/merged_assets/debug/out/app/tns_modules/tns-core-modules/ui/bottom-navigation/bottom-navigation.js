function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var tab_strip_1 = require("../tab-navigation-base/tab-strip");
var tab_strip_item_1 = require("../tab-navigation-base/tab-strip-item");
var application = require("../../application");
var image_source_1 = require("../../image-source");
var utils_1 = require("../../utils/utils");
var view_1 = require("../core/view");
var frame_1 = require("../frame");
var tab_navigation_base_1 = require("../tab-navigation-base/tab-navigation-base");
var text_base_1 = require("../text-base");
__export(require("../tab-navigation-base/tab-content-item"));
__export(require("../tab-navigation-base/tab-navigation-base"));
__export(require("../tab-navigation-base/tab-strip"));
__export(require("../tab-navigation-base/tab-strip-item"));
var PRIMARY_COLOR = "colorPrimary";
var DEFAULT_ELEVATION = 8;
var TABID = "_tabId";
var INDEX = "_index";
var ownerSymbol = Symbol("_owner");
var TabFragment;
var BottomNavigationBar;
var AttachStateChangeListener;
function makeFragmentName(viewId, id) {
    return "android:bottomnavigation:" + viewId + ":" + id;
}
function getTabById(id) {
    var ref = exports.tabs.find(function (ref) {
        var tab = ref.get();
        return tab && tab._domId === id;
    });
    return ref && ref.get();
}
function initializeNativeClasses() {
    if (BottomNavigationBar) {
        return;
    }
    var TabFragmentImplementation = (function (_super) {
        __extends(TabFragmentImplementation, _super);
        function TabFragmentImplementation() {
            var _this = _super.call(this) || this;
            return global.__native(_this);
        }
        TabFragmentImplementation.newInstance = function (tabId, index) {
            var args = new android.os.Bundle();
            args.putInt(TABID, tabId);
            args.putInt(INDEX, index);
            var fragment = new TabFragmentImplementation();
            fragment.setArguments(args);
            return fragment;
        };
        TabFragmentImplementation.prototype.onCreate = function (savedInstanceState) {
            _super.prototype.onCreate.call(this, savedInstanceState);
            var args = this.getArguments();
            this.tab = getTabById(args.getInt(TABID));
            this.index = args.getInt(INDEX);
            if (!this.tab) {
                throw new Error("Cannot find BottomNavigation");
            }
        };
        TabFragmentImplementation.prototype.onCreateView = function (inflater, container, savedInstanceState) {
            var tabItem = this.tab.items[this.index];
            return tabItem.nativeViewProtected;
        };
        return TabFragmentImplementation;
    }(org.nativescript.widgets.FragmentBase));
    var BottomNavigationBarImplementation = (function (_super) {
        __extends(BottomNavigationBarImplementation, _super);
        function BottomNavigationBarImplementation(context, owner) {
            var _this = _super.call(this, context) || this;
            _this.owner = owner;
            return global.__native(_this);
        }
        BottomNavigationBarImplementation.prototype.onSelectedPositionChange = function (position, prevPosition) {
            var owner = this.owner;
            if (!owner) {
                return;
            }
            owner.changeTab(position);
            var tabStripItems = owner.tabStrip && owner.tabStrip.items;
            if (position >= 0 && tabStripItems && tabStripItems[position]) {
                tabStripItems[position]._emit(tab_strip_item_1.TabStripItem.selectEvent);
            }
            if (prevPosition >= 0 && tabStripItems && tabStripItems[prevPosition]) {
                tabStripItems[prevPosition]._emit(tab_strip_item_1.TabStripItem.unselectEvent);
            }
            owner.selectedIndex = position;
        };
        BottomNavigationBarImplementation.prototype.onTap = function (position) {
            var owner = this.owner;
            if (!owner) {
                return false;
            }
            var tabStrip = owner.tabStrip;
            var tabStripItems = tabStrip && tabStrip.items;
            if (position >= 0 && tabStripItems[position]) {
                tabStripItems[position]._emit(tab_strip_item_1.TabStripItem.tapEvent);
                tabStrip.notify({ eventName: tab_strip_1.TabStrip.itemTapEvent, object: tabStrip, index: position });
            }
            if (!owner.items[position]) {
                return false;
            }
            return true;
        };
        return BottomNavigationBarImplementation;
    }(org.nativescript.widgets.BottomNavigationBar));
    var AttachListener = (function (_super) {
        __extends(AttachListener, _super);
        function AttachListener() {
            var _this = _super.call(this) || this;
            return global.__native(_this);
        }
        AttachListener.prototype.onViewAttachedToWindow = function (view) {
            var owner = view[ownerSymbol];
            if (owner) {
                owner._onAttachedToWindow();
            }
        };
        AttachListener.prototype.onViewDetachedFromWindow = function (view) {
            var owner = view[ownerSymbol];
            if (owner) {
                owner._onDetachedFromWindow();
            }
        };
        AttachListener = __decorate([
            Interfaces([android.view.View.OnAttachStateChangeListener])
        ], AttachListener);
        return AttachListener;
    }(java.lang.Object));
    TabFragment = TabFragmentImplementation;
    BottomNavigationBar = BottomNavigationBarImplementation;
    AttachStateChangeListener = new AttachListener();
}
function setElevation(bottomNavigationBar) {
    var compat = androidx.core.view.ViewCompat;
    if (compat.setElevation) {
        var val = DEFAULT_ELEVATION * utils_1.layout.getDisplayDensity();
        compat.setElevation(bottomNavigationBar, val);
    }
}
exports.tabs = new Array();
function iterateIndexRange(index, eps, lastIndex, callback) {
    var rangeStart = Math.max(0, index - eps);
    var rangeEnd = Math.min(index + eps, lastIndex);
    for (var i = rangeStart; i <= rangeEnd; i++) {
        callback(i);
    }
}
var BottomNavigation = (function (_super) {
    __extends(BottomNavigation, _super);
    function BottomNavigation() {
        var _this = _super.call(this) || this;
        _this._contentViewId = -1;
        _this._attachedToWindow = false;
        exports.tabs.push(new WeakRef(_this));
        return _this;
    }
    Object.defineProperty(BottomNavigation.prototype, "_hasFragments", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    BottomNavigation.prototype.onItemsChanged = function (oldItems, newItems) {
        _super.prototype.onItemsChanged.call(this, oldItems, newItems);
        if (oldItems) {
            oldItems.forEach(function (item, i, arr) {
                item.index = 0;
                item.tabItemSpec = null;
                item.setNativeView(null);
            });
        }
    };
    BottomNavigation.prototype.createNativeView = function () {
        initializeNativeClasses();
        var context = this._context;
        var nativeView = new org.nativescript.widgets.GridLayout(context);
        nativeView.addRow(new org.nativescript.widgets.ItemSpec(1, org.nativescript.widgets.GridUnitType.star));
        nativeView.addRow(new org.nativescript.widgets.ItemSpec(1, org.nativescript.widgets.GridUnitType.auto));
        var contentView = new org.nativescript.widgets.ContentLayout(this._context);
        var contentViewLayoutParams = new org.nativescript.widgets.CommonLayoutParams();
        contentViewLayoutParams.row = 0;
        contentView.setLayoutParams(contentViewLayoutParams);
        nativeView.addView(contentView);
        nativeView.contentView = contentView;
        var bottomNavigationBar = new BottomNavigationBar(context, this);
        var bottomNavigationBarLayoutParams = new org.nativescript.widgets.CommonLayoutParams();
        bottomNavigationBarLayoutParams.row = 1;
        bottomNavigationBar.setLayoutParams(bottomNavigationBarLayoutParams);
        nativeView.addView(bottomNavigationBar);
        nativeView.bottomNavigationBar = bottomNavigationBar;
        setElevation(bottomNavigationBar);
        var primaryColor = utils_1.ad.resources.getPaletteColor(PRIMARY_COLOR, context);
        if (primaryColor) {
            bottomNavigationBar.setBackgroundColor(primaryColor);
        }
        return nativeView;
    };
    BottomNavigation.prototype.initNativeView = function () {
        _super.prototype.initNativeView.call(this);
        if (this._contentViewId < 0) {
            this._contentViewId = android.view.View.generateViewId();
        }
        var nativeView = this.nativeViewProtected;
        nativeView.addOnAttachStateChangeListener(AttachStateChangeListener);
        nativeView[ownerSymbol] = this;
        this._contentView = nativeView.contentView;
        this._contentView.setId(this._contentViewId);
        this._bottomNavigationBar = nativeView.bottomNavigationBar;
        this._bottomNavigationBar.owner = this;
        if (this.tabStrip) {
            this.tabStrip.setNativeView(this._bottomNavigationBar);
        }
    };
    BottomNavigation.prototype._loadUnloadTabItems = function (newIndex) {
        var _this = this;
        var items = this.items;
        var lastIndex = this.items.length - 1;
        var offsideItems = 0;
        var toUnload = [];
        var toLoad = [];
        iterateIndexRange(newIndex, offsideItems, lastIndex, function (i) { return toLoad.push(i); });
        items.forEach(function (item, i) {
            var indexOfI = toLoad.indexOf(i);
            if (indexOfI < 0) {
                toUnload.push(i);
            }
        });
        toUnload.forEach(function (index) {
            var item = items[index];
            if (items[index]) {
                item.unloadView(item.content);
            }
        });
        var newItem = items[newIndex];
        var selectedView = newItem && newItem.content;
        if (selectedView instanceof frame_1.Frame) {
            selectedView._pushInFrameStackRecursive();
        }
        toLoad.forEach(function (index) {
            var item = items[index];
            if (_this.isLoaded && items[index]) {
                item.loadView(item.content);
            }
        });
    };
    BottomNavigation.prototype.onLoaded = function () {
        _super.prototype.onLoaded.call(this);
        if (this.tabStrip) {
            this.setTabStripItems(this.tabStrip.items);
        }
        else {
            this._bottomNavigationBar.setVisibility(android.view.View.GONE);
        }
        if (this._attachedToWindow) {
            this.changeTab(this.selectedIndex);
        }
    };
    BottomNavigation.prototype._onAttachedToWindow = function () {
        _super.prototype._onAttachedToWindow.call(this);
        this._attachedToWindow = true;
        this.changeTab(this.selectedIndex);
    };
    BottomNavigation.prototype._onDetachedFromWindow = function () {
        _super.prototype._onDetachedFromWindow.call(this);
        this._attachedToWindow = false;
    };
    BottomNavigation.prototype.onUnloaded = function () {
        _super.prototype.onUnloaded.call(this);
        if (this.tabStrip) {
            this.setTabStripItems(null);
        }
        var fragmentToDetach = this._currentFragment;
        if (fragmentToDetach) {
            this.destroyItem(fragmentToDetach.index, fragmentToDetach);
            this.commitCurrentTransaction();
        }
    };
    BottomNavigation.prototype.disposeNativeView = function () {
        this._bottomNavigationBar.setItems(null);
        this._bottomNavigationBar = null;
        this.nativeViewProtected.removeOnAttachStateChangeListener(AttachStateChangeListener);
        this.nativeViewProtected[ownerSymbol] = null;
        _super.prototype.disposeNativeView.call(this);
    };
    BottomNavigation.prototype._onRootViewReset = function () {
        _super.prototype._onRootViewReset.call(this);
        this.disposeTabFragments();
    };
    BottomNavigation.prototype.disposeTabFragments = function () {
        var fragmentManager = this._getFragmentManager();
        var transaction = fragmentManager.beginTransaction();
        for (var _i = 0, _a = fragmentManager.getFragments().toArray(); _i < _a.length; _i++) {
            var fragment = _a[_i];
            transaction.remove(fragment);
        }
        transaction.commitNowAllowingStateLoss();
    };
    Object.defineProperty(BottomNavigation.prototype, "currentTransaction", {
        get: function () {
            if (!this._currentTransaction) {
                var fragmentManager = this._getFragmentManager();
                this._currentTransaction = fragmentManager.beginTransaction();
            }
            return this._currentTransaction;
        },
        enumerable: true,
        configurable: true
    });
    BottomNavigation.prototype.commitCurrentTransaction = function () {
        if (this._currentTransaction) {
            this._currentTransaction.commitNowAllowingStateLoss();
            this._currentTransaction = null;
        }
    };
    BottomNavigation.prototype.changeTab = function (index) {
        if (index === -1) {
            return;
        }
        var fragmentToDetach = this._currentFragment;
        if (fragmentToDetach) {
            this.destroyItem(fragmentToDetach.index, fragmentToDetach);
        }
        var fragment = this.instantiateItem(this._contentView, index);
        this.setPrimaryItem(index, fragment);
        this.commitCurrentTransaction();
    };
    BottomNavigation.prototype.instantiateItem = function (container, position) {
        var name = makeFragmentName(container.getId(), position);
        var fragmentManager = this._getFragmentManager();
        var fragment = fragmentManager.findFragmentByTag(name);
        if (fragment != null) {
            this.currentTransaction.attach(fragment);
        }
        else {
            fragment = TabFragment.newInstance(this._domId, position);
            this.currentTransaction.add(container.getId(), fragment, name);
        }
        if (fragment !== this._currentFragment) {
            fragment.setMenuVisibility(false);
            fragment.setUserVisibleHint(false);
        }
        return fragment;
    };
    BottomNavigation.prototype.setPrimaryItem = function (position, fragment) {
        if (fragment !== this._currentFragment) {
            if (this._currentFragment != null) {
                this._currentFragment.setMenuVisibility(false);
                this._currentFragment.setUserVisibleHint(false);
            }
            if (fragment != null) {
                fragment.setMenuVisibility(true);
                fragment.setUserVisibleHint(true);
            }
            this._currentFragment = fragment;
            var tabItems = this.items;
            var tabItem = tabItems ? tabItems[position] : null;
            if (tabItem) {
                tabItem.canBeLoaded = true;
                this._loadUnloadTabItems(position);
            }
        }
    };
    BottomNavigation.prototype.destroyItem = function (position, fragment) {
        if (fragment) {
            this.currentTransaction.detach(fragment);
            if (this._currentFragment === fragment) {
                this._currentFragment = null;
            }
        }
        if (this.items && this.items[position]) {
            this.items[position].canBeLoaded = false;
        }
    };
    BottomNavigation.prototype.setTabStripItems = function (items) {
        var _this = this;
        if (!this.tabStrip || !items) {
            this._bottomNavigationBar.setItems(null);
            return;
        }
        var tabItems = new Array();
        items.forEach(function (item, i, arr) {
            item.index = i;
            if (items[i]) {
                var tabItemSpec = _this.createTabItemSpec(items[i]);
                tabItems.push(tabItemSpec);
            }
        });
        this._bottomNavigationBar.setItems(tabItems);
        items.forEach(function (item, i, arr) {
            var textView = _this._bottomNavigationBar.getTextViewForItemAt(i);
            item.setNativeView(textView);
        });
    };
    BottomNavigation.prototype.createTabItemSpec = function (tabStripItem) {
        var tabItemSpec = new org.nativescript.widgets.TabItemSpec();
        if (tabStripItem.isLoaded) {
            var titleLabel = tabStripItem.label;
            var title = titleLabel.text;
            var textTransform = titleLabel.style.textTransform;
            if (textTransform) {
                title = text_base_1.getTransformedText(title, textTransform);
            }
            tabItemSpec.title = title;
            var backgroundColor = tabStripItem.style.backgroundColor;
            if (backgroundColor) {
                tabItemSpec.backgroundColor = backgroundColor.android;
            }
            var color = titleLabel.style.color;
            if (color) {
                tabItemSpec.color = color.android;
            }
            var fontInternal = titleLabel.style.fontInternal;
            if (fontInternal) {
                tabItemSpec.fontSize = fontInternal.fontSize;
                tabItemSpec.typeFace = fontInternal.getAndroidTypeface();
            }
            var iconSource = tabStripItem.image && tabStripItem.image.src;
            if (iconSource) {
                var icon = this.getIcon(tabStripItem);
                if (icon) {
                    tabItemSpec.iconDrawable = icon;
                }
                else {
                }
            }
        }
        return tabItemSpec;
    };
    BottomNavigation.prototype.getIcon = function (tabStripItem) {
        var iconSource = tabStripItem.image && tabStripItem.image.src;
        var is;
        if (utils_1.isFontIconURI(iconSource)) {
            var fontIconCode = iconSource.split("//")[1];
            var target = tabStripItem.image ? tabStripItem.image : tabStripItem;
            var font = target.style.fontInternal;
            var color = target.style.color;
            is = image_source_1.fromFontIconCode(fontIconCode, font, color);
        }
        else {
            is = image_source_1.fromFileOrResource(iconSource);
        }
        var imageDrawable;
        if (is && is.android) {
            var image = is.android;
            if (this.tabStrip && this.tabStrip.isIconSizeFixed) {
                image = this.getFixedSizeIcon(image);
            }
            imageDrawable = new android.graphics.drawable.BitmapDrawable(application.android.context.getResources(), image);
        }
        else {
        }
        return imageDrawable;
    };
    BottomNavigation.prototype.getFixedSizeIcon = function (image) {
        var inWidth = image.getWidth();
        var inHeight = image.getHeight();
        var iconSpecSize = tab_navigation_base_1.getIconSpecSize({ width: inWidth, height: inHeight });
        var widthPixels = iconSpecSize.width * utils_1.layout.getDisplayDensity();
        var heightPixels = iconSpecSize.height * utils_1.layout.getDisplayDensity();
        var scaledImage = android.graphics.Bitmap.createScaledBitmap(image, widthPixels, heightPixels, true);
        return scaledImage;
    };
    BottomNavigation.prototype.updateAndroidItemAt = function (index, spec) {
        this._bottomNavigationBar.updateItemAt(index, spec);
    };
    BottomNavigation.prototype.getTabBarBackgroundColor = function () {
        return this._bottomNavigationBar.getBackground();
    };
    BottomNavigation.prototype.setTabBarBackgroundColor = function (value) {
        if (value instanceof view_1.Color) {
            this._bottomNavigationBar.setBackgroundColor(value.android);
        }
        else {
            this._bottomNavigationBar.setBackground(tryCloneDrawable(value, this.nativeViewProtected.getResources));
        }
    };
    BottomNavigation.prototype.setTabBarItemTitle = function (tabStripItem, value) {
        var tabStripItemIndex = this.tabStrip.items.indexOf(tabStripItem);
        var tabItemSpec = this.createTabItemSpec(tabStripItem);
        this.updateAndroidItemAt(tabStripItemIndex, tabItemSpec);
    };
    BottomNavigation.prototype.setTabBarItemBackgroundColor = function (tabStripItem, value) {
        var tabStripItemIndex = this.tabStrip.items.indexOf(tabStripItem);
        var tabItemSpec = this.createTabItemSpec(tabStripItem);
        this.updateAndroidItemAt(tabStripItemIndex, tabItemSpec);
    };
    BottomNavigation.prototype.setTabBarItemColor = function (tabStripItem, value) {
        if (typeof value === "number") {
            tabStripItem.nativeViewProtected.setTextColor(value);
        }
        else {
            tabStripItem.nativeViewProtected.setTextColor(value.android);
        }
    };
    BottomNavigation.prototype.setTabBarIconColor = function (tabStripItem, value) {
        var index = tabStripItem.index;
        var tabBarItem = this._bottomNavigationBar.getViewForItemAt(index);
        var imgView = tabBarItem.getChildAt(0);
        var drawable = this.getIcon(tabStripItem);
        imgView.setImageDrawable(drawable);
    };
    BottomNavigation.prototype.setTabBarItemFontInternal = function (tabStripItem, value) {
        tabStripItem.nativeViewProtected.setTextSize(value.fontSize);
        tabStripItem.nativeViewProtected.setTypeface(value.getAndroidTypeface());
    };
    BottomNavigation.prototype.setTabBarItemTextTransform = function (tabStripItem, value) {
        var titleLabel = tabStripItem.label;
        var title = text_base_1.getTransformedText(titleLabel.text, value);
        tabStripItem.nativeViewProtected.setText(title);
    };
    BottomNavigation.prototype[tab_navigation_base_1.selectedIndexProperty.setNative] = function (value) {
        if (this.tabStrip) {
            this._bottomNavigationBar.setSelectedPosition(value);
        }
        else {
            this.changeTab(value);
        }
    };
    BottomNavigation.prototype[tab_navigation_base_1.itemsProperty.getDefault] = function () {
        return null;
    };
    BottomNavigation.prototype[tab_navigation_base_1.itemsProperty.setNative] = function (value) {
        if (value) {
            value.forEach(function (item, i) {
                item.index = i;
            });
        }
        tab_navigation_base_1.selectedIndexProperty.coerce(this);
    };
    BottomNavigation.prototype[tab_navigation_base_1.tabStripProperty.getDefault] = function () {
        return null;
    };
    BottomNavigation.prototype[tab_navigation_base_1.tabStripProperty.setNative] = function (value) {
        var items = this.tabStrip ? this.tabStrip.items : null;
        this.setTabStripItems(items);
    };
    BottomNavigation = __decorate([
        view_1.CSSType("BottomNavigation")
    ], BottomNavigation);
    return BottomNavigation;
}(tab_navigation_base_1.TabNavigationBase));
exports.BottomNavigation = BottomNavigation;
function tryCloneDrawable(value, resources) {
    if (value) {
        var constantState = value.getConstantState();
        if (constantState) {
            return constantState.newDrawable(resources);
        }
    }
    return value;
}
//# sourceMappingURL=bottom-navigation.js.map