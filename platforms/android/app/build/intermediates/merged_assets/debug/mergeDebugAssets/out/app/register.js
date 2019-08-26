var imageModule = require("tns-core-modules/ui/image")
var camera = require("nativescript-camera")
var OCRPlugin = require("nativescript-ocr")
const imageSourceModule = require("tns-core-modules/image-source")
var Observable = require("data/observable")
// const vision = require('@google-cloud/vision')
const frameModule = require("ui/frame");
const appSettings = require("application-settings")
const Telephony = require("nativescript-telephony")

var pageData = new Observable.fromObject({
    idCard: "",
    userName: "",
})

exports.pageLoaded = function(args) {
    if(appSettings.getString("userData")){
        frameModule.topmost().navigate("map");
    }   
    page = args.object
    page.bindingContext = pageData
 
    Telephony.Telephony().then(function(resolved) {
        console.log('resolved >', resolved)
        console.dir(resolved);
    }).catch(function(error) {
        console.error('error >', error)
        console.dir(error);
    })
}
exports.takeCamera =  function() {
    camera.requestPermissions().then(
        function success() {
            camera.takePicture()   
            .then(function (imageAsset) {
                console.log("Result is an image asset instance");
                var image = new imageModule.Image();
                image.src = imageAsset;
                console.log(image.src._android)
                const imageFromLocalFile = imageSourceModule.fromFile(image.src._android);
                
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
exports.register =  function() {
    var jsonData = {}
    jsonData.idCard = pageData.idCard
    jsonData.userName = pageData.userName
    appSettings.setString("userData", JSON.stringify(jsonData))
    console.log(jsonData)
    frameModule.topmost().navigate("map");
}
async function quickstart(imgSrc) {
    console.log("quickstart")
    // Imports the Google Cloud client library
    
  
    // Creates a client
    const client = new vision.ImageAnnotatorClient();
  
    // Performs label detection on the image file
    const [result] = await client.labelDetection(imgSrc);
    const labels = result.labelAnnotations;
    console.log('Labels:');
    labels.forEach(label => console.log(label.description));
  }
