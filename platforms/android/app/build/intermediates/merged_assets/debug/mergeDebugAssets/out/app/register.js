var imageModule = require("tns-core-modules/ui/image");
var camera = require("nativescript-camera");
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