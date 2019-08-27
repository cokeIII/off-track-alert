var imageModule = require("tns-core-modules/ui/image")
var camera = require("nativescript-camera")
var OCRPlugin = require("nativescript-ocr")
const imageSourceModule = require("tns-core-modules/image-source")
var Observable = require("data/observable")
// const vision = require('@google-cloud/vision')
const frameModule = require("ui/frame");
const appSettings = require("application-settings")
const Telephony = require("nativescript-telephony")
const utilsModule = require("tns-core-modules/utils/utils");
var Toast = require('nativescript-toast')
var pageData = new Observable.fromObject({
    idCard: "",
    userName: "",
    deviceId:"",
    phoneNumber:"",
})
const API_URL = "http://192.168.43.50:3001"

exports.pageLoaded = function(args) {
    if(appSettings.getString("userData")){
        let userData = JSON.parse(appSettings.getString("userData"))
        if(userData.phoneNumber != "")
         frameModule.topmost().navigate("map");
    }   
    page = args.object
    page.bindingContext = pageData

    Telephony.Telephony().then(function(resolved) {
        console.log('resolved >', resolved)
        console.dir(resolved);
        pageData.deviceId = resolved.deviceId
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
    var toast = null
    jsonData.idCard = pageData.idCard
    jsonData.userName = pageData.userName
    jsonData.deviceId = pageData.deviceId
    jsonData.phoneNumber = pageData.phoneNumber
    appSettings.setString("userData", JSON.stringify(jsonData))
    console.log(jsonData)

    fetch(API_URL+"/insertUser", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(jsonData)
    }).then((r) => r.json())
    .then((response) => {
        if(response.status)
            frameModule.topmost().navigate("map");
        else
            toast = Toast.makeText("register fail");
            toast.show();
    }).catch((e) => {
        console.log('***fetch error***')
    });

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
