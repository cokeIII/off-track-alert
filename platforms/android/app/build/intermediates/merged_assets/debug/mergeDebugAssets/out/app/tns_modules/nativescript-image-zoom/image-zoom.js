"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var image_zoom_common_1 = require("./image-zoom.common");
var fs = require("tns-core-modules/file-system");
var utils = require("tns-core-modules/utils/utils");
var types = require("tns-core-modules/utils/types");
var view_1 = require("tns-core-modules/ui/core/view");
var ImageZoom = (function (_super) {
    __extends(ImageZoom, _super);
    function ImageZoom() {
        return _super.call(this) || this;
    }
    ImageZoom.prototype.createNativeView = function () {
        this.picasso = com.squareup.picasso.provider.PicassoProvider.get();
        return new com.github.chrisbanes.photoview.PhotoView(this._context);
    };
    ImageZoom.prototype[image_zoom_common_1.minZoomScaleProperty.setNative] = function (scale) {
        if (this.nativeView && types.isNumber(scale)) {
            this.nativeView.setMinimumScale(scale);
            this.nativeView.setScaleLevels(Number(scale), Number(0.5833333333333334 * this.maxZoom), Number(this.maxZoom));
        }
    };
    ImageZoom.prototype[image_zoom_common_1.maxZoomScaleProperty.setNative] = function (scale) {
        if (this.nativeView && types.isNumber(scale)) {
            this.nativeView.setScaleLevels(Number(this.minZoom), Number(0.5833333333333334 * scale), Number(scale));
        }
    };
    ImageZoom.prototype.initNativeView = function () {
        this.nativeView.setScaleLevels(Number(this.minZoom), Number(0.5833333333333334 * this.maxZoom), Number(this.maxZoom));
        if (this.src) {
            var image = this.getImage(this.src);
            if (this.src.startsWith('res://')) {
                if (+image > 0) {
                    this.builder = this.picasso.load(image);
                }
            }
            else {
                this.builder = this.picasso.load(image);
            }
        }
        if (this.stretch) {
            this.resetImage();
        }
        if (this.builder) {
            if (this.resize &&
                this.resize !== undefined &&
                this.resize.split(',').length > 1 &&
                this.stretch !== 'fill') {
                this.builder.resize(parseInt(this.resize.split(',')[0], 10), parseInt(this.resize.split(',')[1], 10));
            }
            this.builder.into(this.nativeView);
        }
    };
    ImageZoom.prototype.getResourceId = function (res) {
        if (res === void 0) { res = ''; }
        if (res.startsWith('res://')) {
            return utils.ad.resources.getDrawableId(res.replace('res://', ''));
        }
        return 0;
    };
    Object.defineProperty(ImageZoom.prototype, "borderRadius", {
        set: function (value) {
            this.style.borderRadius = value;
            this.setBorderAndRadius();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageZoom.prototype, "borderWidth", {
        set: function (value) {
            this.style.borderWidth = value;
            this.setBorderAndRadius();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageZoom.prototype, "borderLeftWidth", {
        set: function (value) {
            this.style.borderLeftWidth = value;
            this.setBorderAndRadius();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageZoom.prototype, "borderRightWidth", {
        set: function (value) {
            this.style.borderRightWidth = value;
            this.setBorderAndRadius();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageZoom.prototype, "borderBottomWidth", {
        set: function (value) {
            this.style.borderBottomWidth = value;
            this.setBorderAndRadius();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageZoom.prototype, "borderTopWidth", {
        set: function (value) {
            this.style.borderTopWidth = value;
            this.setBorderAndRadius();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageZoom.prototype, "borderBottomLeftRadius", {
        set: function (value) {
            this.style.borderBottomLeftRadius = value;
            this.setBorderAndRadius();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageZoom.prototype, "borderBottomRightRadius", {
        set: function (value) {
            this.style.borderBottomRightRadius = value;
            this.setBorderAndRadius();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageZoom.prototype, "borderTopLeftRadius", {
        set: function (value) {
            this.style.borderTopLeftRadius = value;
            this.setBorderAndRadius();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageZoom.prototype, "borderTopRightRadius", {
        set: function (value) {
            this.style.borderTopRightRadius = value;
            this.setBorderAndRadius();
        },
        enumerable: true,
        configurable: true
    });
    ImageZoom.prototype[image_zoom_common_1.srcProperty.getDefault] = function () {
        return undefined;
    };
    ImageZoom.prototype[image_zoom_common_1.srcProperty.setNative] = function (src) {
        if (!this.builder) {
            var image = this.getImage(src);
            if (types.isString(src) && this.src.startsWith('res://')) {
                if (+image > 0) {
                    this.builder = this.picasso.load(image);
                }
            }
            else {
                this.builder = this.picasso.load(image);
            }
        }
        if (this.stretch) {
            this.resetImage();
        }
        this.setBorderAndRadius();
        this.builder.into(this.nativeView);
        return src;
    };
    ImageZoom.prototype[image_zoom_common_1.resizeProperty.setNative] = function (resize) {
        if (!this.builder) {
            return resize;
        }
        if (resize &&
            resize !== undefined &&
            resize.split(',').length > 1 &&
            this.stretch !== 'fill') {
            this.builder.resize(parseInt(resize.split(',')[0], 10), parseInt(resize.split(',')[1], 10));
        }
        return resize;
    };
    ImageZoom.prototype.getImage = function (src) {
        var nativeImage;
        if (types.isNullOrUndefined(src)) {
            return src;
        }
        if (typeof src === 'string' && src.substr(0, 1) === '/') {
            nativeImage = new java.io.File(src);
        }
        else if (typeof src === 'string' && src.startsWith('~/')) {
            nativeImage = new java.io.File(fs.path.join(fs.knownFolders.currentApp().path, src.replace('~/', '')));
        }
        else if (typeof src === 'string' && src.startsWith('http')) {
            nativeImage = src;
        }
        else if (typeof src === 'string' && src.startsWith('res://')) {
            nativeImage = utils.ad.resources.getDrawableId(src.replace('res://', ''));
        }
        else if (typeof src === 'object') {
            var tempFile = fs.path.join(fs.knownFolders.currentApp().path, Date.now() + " + .png");
            var saved = src.saveToFile(tempFile, 'png');
            if (saved) {
                nativeImage = new java.io.File(tempFile);
            }
        }
        return nativeImage;
    };
    ImageZoom.prototype[image_zoom_common_1.stretchProperty.getDefault] = function () {
        return 'aspectFit';
    };
    ImageZoom.prototype[image_zoom_common_1.stretchProperty.setNative] = function (value) {
        if (!this.builder)
            return value;
        this.resetImage(true);
        return value;
    };
    ImageZoom.prototype.clearItem = function () {
    };
    ImageZoom.prototype.setBorderAndRadius = function () {
        if (!this.builder)
            return;
        var RoundedCornersTransformation = jp.wasabeef.picasso.transformations.RoundedCornersTransformation;
        this.builder = this.builder
            .transform(new RoundedCornersTransformation(view_1.layout.toDevicePixels(this.style.borderTopLeftRadius), view_1.layout.toDevicePixels(this.style.borderTopWidth), RoundedCornersTransformation.CornerType.TOP_LEFT))
            .transform(new RoundedCornersTransformation(view_1.layout.toDevicePixels(this.style.borderTopRightRadius), view_1.layout.toDevicePixels(this.style.borderTopWidth), RoundedCornersTransformation.CornerType.TOP_RIGHT))
            .transform(new RoundedCornersTransformation(view_1.layout.toDevicePixels(this.style.borderBottomLeftRadius), view_1.layout.toDevicePixels(this.style.borderBottomWidth), RoundedCornersTransformation.CornerType.BOTTOM_LEFT))
            .transform(new RoundedCornersTransformation(view_1.layout.toDevicePixels(this.style.borderBottomRightRadius), view_1.layout.toDevicePixels(this.style.borderBottomWidth), RoundedCornersTransformation.CornerType.BOTTOM_RIGHT));
    };
    ImageZoom.prototype.setAspectResize = function () {
        var newSize;
        if (this.resize &&
            this.resize !== undefined &&
            this.resize.split(',').length > 1) {
            newSize = {
                width: parseInt(this.resize.split(',')[0], 10),
                height: parseInt(this.resize.split(',')[1], 10)
            };
        }
        else if (this.width || this.height) {
            newSize = {
                width: parseInt(this.width.toString(), 10),
                height: parseInt(this.height.toString(), 10)
            };
        }
        else {
            newSize = {
                width: this.parent.effectiveWidth,
                height: this.parent.effectiveHeight
            };
        }
        this.builder.resize(newSize.width, newSize.height);
    };
    ImageZoom.prototype.resetImage = function (reload) {
        if (reload === void 0) { reload = false; }
        if (!this.builder)
            return;
        switch (this.stretch) {
            case 'aspectFit':
                this.builder = this.picasso.load(this.getImage(this.src));
                this.setBorderAndRadius();
                this.setAspectResize();
                this.builder.centerInside();
                if (reload) {
                    this.builder.into(this.nativeView);
                }
                break;
            case 'aspectFill':
                this.builder = this.picasso.load(this.getImage(this.src));
                this.setBorderAndRadius();
                this.setAspectResize();
                this.builder.centerCrop();
                if (reload) {
                    this.builder.into(this.nativeView);
                }
                break;
            case 'fill':
                this.builder = this.picasso.load(this.getImage(this.src));
                this.setBorderAndRadius();
                this.builder.fit();
                if (reload) {
                    this.builder.into(this.nativeView);
                }
                break;
            case 'none':
            default:
                this.builder = this.picasso.load(this.getImage(this.src));
                this.setBorderAndRadius();
                if (reload) {
                    this.builder.into(this.nativeView);
                }
                break;
        }
    };
    return ImageZoom;
}(image_zoom_common_1.ImageZoomBase));
exports.ImageZoom = ImageZoom;
//# sourceMappingURL=image-zoom.js.map