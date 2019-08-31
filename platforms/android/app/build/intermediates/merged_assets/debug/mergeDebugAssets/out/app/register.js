var imageModule = require("tns-core-modules/ui/image")
var camera = require("nativescript-camera")
var OCRPlugin = require("nativescript-ocr")
const imageSourceModule = require("tns-core-modules/image-source")
var Observable = require("data/observable")
// const vision = require('@google-cloud/vision')
const frameModule = require("ui/frame");
const appSettings = require("application-settings")
const Telephony = require("nativescript-telephony")
// const utilsModule = require("tns-core-modules/utils/utils")
const util = require('util')
var Toast = require('nativescript-toast')
var pageData = new Observable.fromObject({
    idCard: "",
    userName: "",
    deviceId:"",
    phoneNumber:"",
})
const API_URL = "http://192.168.43.50:3001"

exports.pageLoaded = function(args) {
    loading()
    if(appSettings.getString("userData")){
        let userData = JSON.parse(appSettings.getString("userData"))
        if(userData.phoneNumber != ""){
            frameModule.topmost().navigate("map");
            
        }
    } else {
        loadingHide()
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
    let idCardLength = []
    let userNameLength = []
    let phoneNumberLength = []

    let idCard = page.getViewById('idCard')
    let userName = page.getViewById('userName')
    let phoneNumber = page.getViewById('phoneNumber')

    idCardLength[0] = new android.text.InputFilter.LengthFilter(13)
    userNameLength[0] = new android.text.InputFilter.LengthFilter(30)
    phoneNumberLength[0] = new android.text.InputFilter.LengthFilter(10)

    idCard.android.setFilters(idCardLength)
    userName.android.setFilters(userNameLength)
    phoneNumber.android.setFilters(phoneNumberLength)
    
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
    let text = null
    var tester = /^[a-zA-Z0-9ก-๙ ]*$/
    if (jsonData.userName.length === 0) {
      text = 'Please enter name'
    } else if (jsonData.phoneNumber.length < 10) {
      text = 'Please enter your mobile phone number to complete 10 digits.'
    } else if (jsonData.deviceId.length < 0) {
      text = 'NO Device ID.'
    } else if (jsonData.idCard.length < 7) {
      text = 'ID Card incorrect.'
    }else if (!tester.test(pageData.userName)) {
        text = 'Please enter the first and last name in the alphabet. a-z, A-Z, 0-9, A-9'
    }
    if (text != null) {
      Toast.makeText(text).show()
      return
    }
    fetch(API_URL+"/insertUser", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(jsonData)
    }).then((r) => r.json())
    .then((response) => {
        if(response.status == "Success"){
            console.log("Success")
            toast = Toast.makeText("register success","long")
            toast.show()
            frameModule.topmost().navigate("map");
        }
        else if(response.status == "Fail"){
            toast = Toast.makeText("register fail")
            toast.show()
        }
        else if(response.status == "DuplicateUser"){
            console.log("DuplicateUser")
        }
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
  async function coolDown() {
    await sleep(2000);
  }

function loading(){
    var options = {
      message: 'Loading...',
      progress: 0.65,
      android: {
        indeterminate: true,
        cancelable: false,
        max: 100,
        progressNumberFormat: '%1d/%2d',
        progressPercentFormat: 0.53,
        progressStyle: 1,
        secondaryProgress: 1,
      },
    }
    loader.show(options)
  }
function loadingHide() {
    loader.hide()
}