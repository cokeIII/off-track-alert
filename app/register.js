var imageModule = require("tns-core-modules/ui/image")
var camera = require("nativescript-camera")
const imageSourceModule = require("tns-core-modules/image-source")
var Observable = require("data/observable")
const frameModule = require("ui/frame");
const appSettings = require("application-settings")
const nativescript_dna_deviceinfo = require("nativescript-dna-deviceinfo");
const DeviceInfo = nativescript_dna_deviceinfo.DeviceInfo;
const utils = require('tns-core-modules/utils/utils')
import { Bluetooth } from 'nativescript-bluetooth'; const bluetooth = new Bluetooth();
var fs = require("file-system");
var Toast = require('nativescript-toast')
var bghttp = require("nativescript-background-http")
var session = bghttp.session("image-upload")
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
        if(userData.phoneNumber != ""){
            frameModule.topmost().navigate("map");            
        }
    } 

    page = args.object
    page.bindingContext = pageData

    // console.dir(DeviceInfo)
    // printDeviceInfo()
    pageData.deviceId = DeviceInfo.deviceId();

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
                const imageFromLocalFile = imageSourceModule.fromFile(image.src._android);
                var folder = fs.knownFolders.documents();
                var path = fs.path.join(folder.path, "Test.png");
                var saved = imageFromLocalFile.saveToFile(path, "png");
                var request = {
                    url: API_URL,
                    method: "POST",
                    headers: {
                        "Content-Type": "application/octet-stream",
                        "File-Name": "Test.png"
                    },
                    description: "{ 'uploading': " + "Test.png" + " }"
                };
        
                var task = session.uploadFile(path, request);
                task.on("progress", logEvent);
                task.on("error", logEvent);
                task.on("complete", logEvent);
        
                function logEvent(e) {
                    console.log("----------------");
                    console.log('Status: ' + e.eventName);
                    // console.log(e.object);
                    if (e.totalBytes !== undefined) {
                        console.log('current bytes transfered: ' + e.currentBytes);
                        console.log('Total bytes to transfer: ' + e.totalBytes);
                    }
                }            }).catch(function (err) {
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
exports.noop = () => {
}

async function printDeviceInfo() { 
    console.log("Free memory: ", formatBytes(DeviceInfo.freeMemory()));
    console.log("Total memory: ", formatBytes(DeviceInfo.totalMemory()));
    console.log("Total storage space: ", formatBytes(DeviceInfo.totalStorageSpace()));
    console.log("Free storage space: ",formatBytes(DeviceInfo.freeStorageSpace()));
    console.log("Device id: ", DeviceInfo.deviceId());
    console.log("Device name: ",  DeviceInfo.deviceName());
    console.log("Device locale: ", DeviceInfo.deviceLocale());
    console.log("Device country: ", DeviceInfo.deviceCountry());
    console.log("Device timezone: ", DeviceInfo.timezone());
    console.log("Device user agent: ", DeviceInfo.userAgent());
    console.log("App name: ", DeviceInfo.appName());
    console.log("App version: ", DeviceInfo.appVersion());
    console.log("App bundle id: ", DeviceInfo.bundleId());
    console.log("App bundle number: ", DeviceInfo.bundleNumber());
    console.log("System manufacturer: ",  DeviceInfo.systemManufacturer());
    console.log("Battery level: ",  Math.round(DeviceInfo.batteryLevel()));
    console.log("Storage paths: ", DeviceInfo.externalStoragePaths());
    console.log("Storage volume info: ", DeviceInfo.storageVolumes());
    console.log("WiFi SSID: ", DeviceInfo.wifiSSID());
    console.log("Display metrics: ", DeviceInfo.displayMetrics());
    console.log("Is portrait orientation: ", DeviceInfo.isPortrait());
    console.log("Is tablet: ", DeviceInfo.isTablet());
    console.log("Is 24 hour: ", DeviceInfo.is24Hour());
    console.log("Is emulator: ", DeviceInfo.isEmulator());
    console.log("Is battery charing: ",  DeviceInfo.isBatteryCharging());
    console.log("Is Location service enabled: ", await DeviceInfo.isLocationEnabled()
                                                                 .catch(error => console.log(error)));
    console.log("Is Bluetooth enabled: ", await DeviceInfo.isBluetoothEnabled()
                                                          .catch(error => console.log(error)));
  }
 
  function formatBytes(bytes, decimals) {
    if (bytes === 0) return '0 GB'
    if (isNaN(parseInt(bytes))) return bytes
    if (typeof bytes === 'string') bytes = parseInt(bytes)
    if (bytes === 0) return '0';
    const k = 1000;
    const dm = decimals + 1 || 3;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`;
  }