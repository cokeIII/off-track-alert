var imageModule = require("tns-core-modules/ui/image")
var camera = require("nativescript-camera")
var OCRPlugin = require("nativescript-ocr")
const imageSourceModule = require("tns-core-modules/image-source")
var Observable = require("data/observable")
const frameModule = require("ui/frame");
// const vision = require('@google-cloud/vision')
const appSettings = require("application-settings")
const Telephony = require("nativescript-telephony")
// const utilsModule = require("tns-core-modules/utils/utils")
// const util = require('./util')
// import { ImageFilters } from 'nativescript-image-filters';
// const ImageFilters = require('nativescript-image-filters')
// const filters = new ImageFilters();
var Toast = require('nativescript-toast')
var pageData = new Observable.fromObject({
    idCard: "",
    userName: "",
    deviceId:"",
    phoneNumber:"",
})
const API_URL = "http://10.60.3.112:3001"

exports.pageLoaded = function(args) {
    
    if(appSettings.getString("userData")){
        let userData = JSON.parse(appSettings.getString("userData"))
        if(userData.phoneNumber != ""){
            // frameModule.topmost().navigate("map");            
        }
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
                // filters.blackAndWhite(imageFromLocalFile).then((result) => {
                    var ocr = new OCRPlugin.OCR();
                    // set the pic imageSource equal to the new imageSource
                    // imageFromLocalFile = result;
                    ocr.retrieveText({
                        image: imageFromLocalFile,
                        whitelist: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",     // you can include only certain characters in the result
                        blacklist: "", // .. or you can exclude certain characters from the result
                        // onProgress: () => {
                        //     console.log(`Decoding progress: ${percentage}%`);
                        // }
                        }).then(
                            function (result) {
                                pageData.userName = result.text
                                console.log("Result: " + result.text);
                            },
                            function (error) {
                                console.log("Error: " + error);
                            }
                        );
                    }).catch(function (err) {
                        console.log("Error -> " + err.message);
                    });
        
                //   }).catch((err) => {
                //     console.log('applyFilter ERROR: ' + err);
                //   });

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
exports.noop = () => {
}

