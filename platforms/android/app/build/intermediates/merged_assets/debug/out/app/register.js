var imageModule = require("tns-core-modules/ui/image");
var camera = require("nativescript-camera");
var OCRPlugin = require("nativescript-ocr");
exports.pageLoaded = function(args) {
    page = args.object
}
exports.takeCamera = function() {
    camera.requestPermissions().then(
        function success() {
            camera.takePicture()   
            .then(function (imageAsset) {
                console.log("Result is an image asset instance");
                var image = new imageModule.Image();
                image.src = imageAsset;
                var OCRPlugin = require("nativescript-ocr");
                var ocr = new OCRPlugin.OCR();
                console.dir(image)
                ocr.retrieveText({
                image: image
                }).then(
                    function (result) {
                    console.log("Result: " + result.text);
                    },
                    function (error) {
                    console.log("Error: " + error);
                    }
                );
            }).catch(function (err) {
                console.log("Error -> " + err.message);
            });
        }, 
        function failure() {
        // permission request rejected
        // ... tell the user ...
        }
    );
}