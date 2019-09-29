var imageModule = require("tns-core-modules/ui/image")
var camera = require("nativescript-camera")
var Observable = require("data/observable")
const frameModule = require("ui/frame");
const appSettings = require("application-settings")
const Telephony = require("nativescript-telephony")
var bghttp = require("nativescript-background-http");
var session = bghttp.session("image-upload");
var Toast = require('nativescript-toast')
var imageSourceModule = require("image-source");
var fs = require("tns-core-modules/file-system");

var pageData = new Observable.fromObject({
    idCard: "",
    userName: "",
    deviceId:"",
    phoneNumber:"",
})
// 192.168.43.50
const API_URL = "http://192.168.43.50:3001"
let mRegis = null
let btnCamera =null
let mRegisBtn =null

exports.pageLoaded = function(args) {
    // Removes all values.
    // appSettings.clear();
    if(appSettings.getString("userData")){
        let userData = JSON.parse(appSettings.getString("userData"))
        if(userData.phoneNumber != ""){
            frameModule.topmost().navigate("map");            
        }
    } 

    page = args.object
    page.bindingContext = pageData
    
    Telephony.Telephony().then(function(resolved) {
        // console.log('resolved >', resolved)
        // console.dir(resolved);
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
    btnCamera = page.getViewById('btnCamera')
    mRegis = page.getViewById('mRegis')
    mRegisBtn = page.getViewById('mRegisBtn')
    
    idCardLength[0] = new android.text.InputFilter.LengthFilter(13)
    userNameLength[0] = new android.text.InputFilter.LengthFilter(30)
    phoneNumberLength[0] = new android.text.InputFilter.LengthFilter(10)

    idCard.android.setFilters(idCardLength)
    userName.android.setFilters(userNameLength)
    phoneNumber.android.setFilters(phoneNumberLength)
    
}
exports.takeCamera =  function() {
    if (pageData.phoneNumber.length < 10) {
        return Toast.makeText('Please enter your mobile phone number to complete 10 digits.').show()
    } 
    camera.requestPermissions().then(
        function success() {
            var options = {keepAspectRatio: false, saveToGallery: false };
            camera.takePicture(options)   
            .then(function (imageAsset) {
                console.log("Result is an image asset instance");
                var image = new imageModule.Image();
                image.src = imageAsset;
                var file =  image.src._android;
                var url = API_URL+"/cards";
                var request = {
                    url: url,
                    method: "POST",
                    headers: {
                        "Content-Type": "application/octet-stream",
                        "File-Name": "photo"
                    },
                    description: "Uploading"
                };
                let params = [
                    { name: "idCard", value: pageData.phoneNumber },
                    { name: "deviceId", value: pageData.deviceId },
                    { "name": 'photo', "filename": file, "mimeType": "image/jpg" }
                ];
                let task = session.multipartUpload(params, request);
                task.on("progress", progressHandler);
                task.on("error", errorHandler);
                task.on("responded", respondedHandler);
                // task.on("complete", completeHandler);
                let documents = fs.knownFolders.documents();
                let path = fs.path.join(documents.path, pageData.phoneNumber+".jpg");
                console.log(path)
                imageSourceModule.fromAsset(imageAsset)
                .then(imageSource => {
                     imageSource.saveToFile(path, "jpg");
                 });

            }).catch((err) => {
            console.log('applyFilter ERROR: ' + err);
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
    jsonData.pic = ''
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
exports.showMRegis = () => {
    if(mRegis.style.visibility == 'collapse'){
        btnCamera.style.visibility = 'collapse'
        mRegis.style.visibility = 'visible'
        mRegisBtn.style.visibility = 'visible'
    } else {
        btnCamera.style.visibility = 'visible'
        mRegis.style.visibility = 'collapse'
        mRegisBtn.style.visibility = 'collapse'
    }
}
exports.noop = () => {
}

// event arguments:
// task: Task
// currentBytes: number
// totalBytes: number
function progressHandler(e) {
    console.log("uploaded " + e.currentBytes + " / " + e.totalBytes);
}
 
// event arguments:
// task: Task
// responseCode: number
// error: java.lang.Exception (Android) / NSError (iOS)
// response: net.gotev.uploadservice.ServerResponse (Android) / NSHTTPURLResponse (iOS)
function errorHandler(e) {
     console.log("received " + e.responseCode + " code.");
     toast = Toast.makeText("regiser fail")
     toast.show()

    var serverResponse = e.response;
}
 
 
// event arguments:
// task: Task
// responseCode: number
// data: string
function respondedHandler(e) {
     console.log("received " + e.responseCode + " code. Server sent: " + e.data);
     e.data = JSON.parse(e.data)
     if(e.data["status"] == "Success"){
        console.log("Success")
        let jsonData = {}
        jsonData.idCard = pageData.idCard
        jsonData.userName = pageData.userName
        jsonData.deviceId = pageData.deviceId
        jsonData.phoneNumber = pageData.phoneNumber
        jsonData.pic = pageData.phoneNumber+'.jpg'
    
        appSettings.setString("userData", JSON.stringify(jsonData))
        toast = Toast.makeText("register success","long")
        toast.show()
        frameModule.topmost().navigate("map");
    }
    else if(e.data["status"]== "Fail"){
        toast = Toast.makeText("register fail")
        toast.show()
    }
    else if(e.data["status"]== "DuplicateUser"){
        console.log("DuplicateUser")
    }

}
 
// event arguments:
// task: Task
// responseCode: number
// response: net.gotev.uploadservice.ServerResponse (Android) / NSHTTPURLResponse (iOS)
function completeHandler(e) {
     console.log("received " + e.responseCode + " code");
    var serverResponse = e.response;
}
 
// event arguments:
// task: Task
function cancelledHandler(e) {
     console.log("upload cancelled");
}