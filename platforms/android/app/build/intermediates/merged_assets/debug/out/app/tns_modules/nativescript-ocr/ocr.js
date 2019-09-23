"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("file-system");
var OCR = (function () {
    function OCR() {
    }
    OCR.prototype.retrieveText = function (options) {
        return new Promise(function (resolve, reject) {
            try {
                if (!options.image) {
                    reject("no image specified");
                    return;
                }
                var lang = options.language || "eng";
                var progressNotifier = new com.googlecode.tesseract.android.TessBaseAPI.ProgressNotifier({
                    onProgressValues: function (progressValues) {
                        if (options.onProgress) {
                            options.onProgress(progressValues.getPercent());
                        }
                        else {
                            console.log("Progress: " + progressValues.getPercent());
                        }
                    }
                });
                var tessBaseAPI = new com.googlecode.tesseract.android.TessBaseAPI(progressNotifier);
                tessBaseAPI.setDebug(false);
                var tessfolder = fs.path.join(fs.knownFolders.currentApp().path, "tesseract");
                var initSuccess = tessBaseAPI.init(tessfolder, lang, com.googlecode.tesseract.android.TessBaseAPI.OEM_TESSERACT_ONLY);
                if (!initSuccess) {
                    reject("init failed");
                    return;
                }
                if (options.whitelist) {
                    tessBaseAPI.setVariable(com.googlecode.tesseract.android.TessBaseAPI.VAR_CHAR_WHITELIST, options.whitelist);
                }
                if (options.blacklist) {
                    tessBaseAPI.setVariable(com.googlecode.tesseract.android.TessBaseAPI.VAR_CHAR_BLACKLIST, options.blacklist);
                }
                tessBaseAPI.setImage(options.image.android);
                var recognizedText = tessBaseAPI.getUTF8Text();
                tessBaseAPI.end();
                resolve({
                    text: recognizedText
                });
            }
            catch (ex) {
                console.log("Error in ocr.retrieveText: " + ex);
                reject(ex);
            }
        });
    };
    return OCR;
}());
exports.OCR = OCR;
//# sourceMappingURL=ocr.js.map