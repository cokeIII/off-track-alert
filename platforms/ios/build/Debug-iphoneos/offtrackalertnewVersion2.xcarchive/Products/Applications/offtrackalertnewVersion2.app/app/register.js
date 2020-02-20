var Observable = require("data/observable")
const frameModule = require("ui/frame");
const appSettings = require("application-settings")
const Telephony = require("nativescript-telephony")
var toasty = require('nativescript-toasty').Toasty;
var orientation = require('nativescript-orientation')
const nativescript_dna_deviceinfo = require("nativescript-dna-deviceinfo");
const DeviceInfo = nativescript_dna_deviceinfo.DeviceInfo;
 
 var pageData = new Observable.fromObject({
    idCard: "",
    userName: "",
    deviceId:"",
    phoneNumber:"",
    bleId:"",
})
// 192.168.43.50
//http://202.129.16.68:7777
const API_URL = "http://202.129.16.68:7777"
let mRegis = null
let btnCamera =null
let mRegisBtn =null
let btnofflineMode = null
let dlgPageMap = null
exports.pageLoaded = function(args) {
    // Removes all values.
     //appSettings.clear();
     var d = new Date();
     console.log(d.getTime());
    orientation.setOrientation("portrait")
    if(appSettings.getString("userData")){
        let userData = JSON.parse(appSettings.getString("userData"))
        if(userData.phoneNumber != ""){
            const navigationEntry = {
                moduleName: "map",
                context: { mode: "online" },
                animated: false
            };
            frameModule.topmost().navigate(navigationEntry);
        }
    } else {
        pageData.deviceId = d.getTime()
    }

    page = args.object
    page.bindingContext = pageData
    // console.log(printDeviceInfo())
    // Telephony.Telephony().then(function(resolved) {
    //     console.log(resolved)
    //     pageData.deviceId = resolved.deviceId
    // }).catch(function(error) {
    //     console.error('error >', error)
    //     console.dir(error);
    // })
    btnCamera = page.getViewById('btnCamera')
    mRegis = page.getViewById('mRegis')
    mRegisBtn = page.getViewById('mRegisBtn')
    btnofflineMode = page.getViewById('btnofflineMode')
    dlgPageMap = page.getViewById('user-pageMap')  
}

exports.register =  function() {
    var jsonData = {}
    jsonData.idCard = pageData.idCard
    jsonData.userName = pageData.userName
    jsonData.deviceId = pageData.deviceId
    jsonData.phoneNumber = pageData.phoneNumber
    jsonData.bleId = pageData.bleId
    jsonData.pic = ''

    let text = null
    var tester = /^[a-zA-Z0-9ก-๙ ]*$/
    if (jsonData.userName.length === 0) {
      text = 'Please enter name'
    } else if (jsonData.phoneNumber.length < 10) {
      text = 'Please enter your mobile phone number to complete 10 digits.'
    } else if (jsonData.deviceId.length < 0) {
      text = 'NO Device ID.'
    } 
    // else if (jsonData.idCard.length < 7) {
    //   text = 'ID Card incorrect.'
    // }
    else if (!tester.test(pageData.userName)) {
        text = 'Please enter the first and last name in the alphabet. a-z, A-Z, 0-9, A-9'
    }
    if (text != null) {
        var toast = new toasty({ text: text });
        toast.show()
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
            appSettings.setString("userData", JSON.stringify(jsonData))
            console.log(jsonData)
            var toast = new toasty({ text: 'register success' });
            toast.show();    
            const navigationEntry = {
                moduleName: "map",
                context: { mode: "online" },
                animated: false
            };
            frameModule.topmost().navigate(navigationEntry);
        }
        else if(response.status == "Fail"){
            var toast = new toasty({ text: 'register fail' });
            toast.show();    
        }
        else if(response.status == "DuplicateUser"){
            console.log("DuplicateUser")
        }
    }).catch((e) => {
        console.log('***fetch error***')
        toast = Toast.makeText("not send data to server","long")
        toast.show()

    });

}
exports.showMRegis = () => {
    if(mRegis.style.visibility == 'collapse'){
        btnCamera.style.visibility = 'collapse'
        mRegis.style.visibility = 'visible'
        mRegisBtn.style.visibility = 'visible'
    } else {
        btnCamera.style.visibility = 'visible'
        btnofflineMode.style.visibility = 'visible'
        mRegis.style.visibility = 'collapse'
        mRegisBtn.style.visibility = 'collapse'
    }
}
exports.noop = () => {
}
exports.offlineMode = () => {
    var jsonData = {}
    var toast = null
    jsonData.idCard = pageData.idCard
    jsonData.userName = pageData.userName
    jsonData.deviceId = pageData.deviceId
    jsonData.phoneNumber = pageData.phoneNumber
    jsonData.bleId = pageData.bleId
    jsonData.pic = ''

    if (pageData.phoneNumber.length < 10) {
        var toast = new toasty({ text: 'Please enter your mobile phone number to complete 10 digits.'});
        toast.show(); 
        return    
    } 
    appSettings.setString("userData", JSON.stringify(jsonData))
    console.log(jsonData)
    var toast = new toasty({ text: "offline mode success"});
    toast.show();    

    const navigationEntry = {
        moduleName: "map",
        context: { mode: "offline" },
        animated: false
    };
    frameModule.topmost().navigate(navigationEntry);
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