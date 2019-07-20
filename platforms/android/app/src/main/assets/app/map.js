var orientation = require('nativescript-orientation');
var Observable = require("data/observable");
var bluetooth = require("nativescript-bluetooth");
const appSettings = require("application-settings");
const labelModule = require("tns-core-modules/ui/label");

const API_URL = "http://192.168.43.50:3001"
var pageData = new Observable.fromObject({
    roadName: "testName",
    map:{},
    userData:{},
})
let urlMap = API_URL + '/maps'
let dlg = null
exports.hideDialog = () => {
    dlg.style.visibility = 'collapse';
}
exports.pageLoaded = function(args) {
    page = args.object
    page.bindingContext = pageData
    orientation.setOrientation("portrait")
    dlg = page.getViewById('user-data')
    //dlg.style.visibility = 'collapse';
    if(appSettings.getString("maps")){
        pageData.map = JSON.parse(appSettings.getString("maps"))
        // console.log("Data seting"+pageData.map)
    }
    fetch(urlMap).then(r => r.json())
    .then(jsonData => {
      appSettings.setString("maps", JSON.stringify(jsonData))
      console.log(jsonData)
      pageData.map = jsonData
    }).catch(e => {
      console.log('***fetch error***')
    })
    BLE_scan()
    bluetooth.enable().then(
        function(enabled) {
            setInterval(function(){ 
        
            // use Bluetooth features if enabled is true 
            // BLE_scan()
            
            }, 11000)
        }
      )
}

function BLE_scan(){
    bluetooth.startScanning({
        serviceUUIDs: [],
        seconds: 10,
        onDiscovered: function (peripheral) {
            console.log("Periperhal found with UUID: " + peripheral.UUID)
            genMap(peripheral.UUID)
            // console.log(peripheral)
        },
        skipPermissionCheck: false,
    }).then(function() {
        console.log("scanning complete")
    }, function (err) {
        console.log("error while scanning: " + err)
    })
}

function genMap(UUID){
    if(pageData.map.maps){
        pageData.map.maps.forEach(element => {
            console.log(element)
            if(element.uuid == UUID) {
                const myLabel = new labelModule.Label();
                myLabel.className = "point"
                myLabel.width = 28
                myLabel.height = 28
                myLabel.left = element.x
                myLabel.top = element.y
                myLabel.style.zIndex="-1";
                myLabel.backgroundColor = "red";
                page.getViewById("mapLayout").addChild(myLabel)
                console.log("+++genBeacon+++")
            }
        });
    }
} 

exports.user = function() {
    pageData.userData = JSON.parse(appSettings.getString("userData"))
    dlg.style.visibility = 'visible'
    console.log(pageData.userData)
}

exports.setUser = function() {
    pageData.userData = JSON.parse(appSettings.getString("userData"))
    dlg.style.visibility = 'visible'
    console.log(pageData.userData)
}

exports.hideDialog = () => {
    dlg.style.visibility = 'collapse';
}

exports.noop = () => {
}