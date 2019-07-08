var orientation = require('nativescript-orientation');
var Observable = require("data/observable");
var bluetooth = require("nativescript-bluetooth");
const appSettings = require("application-settings");

const API_URL = "http://192.168.43.50:3001"
var pageData = new Observable.fromObject({
    roadName: "testName",
    map:{}
})
exports.pageLoaded = function(args) {
    page = args.object
    page.bindingContext = pageData
    orientation.setOrientation("portrait")

    let urlMap = API_URL + '/maps'

    fetch(urlMap).then(r => r.json())
    .then(jsonData => {
      appSettings.setString("maps", JSON.stringify(jsonData))
      pageData.map = JSON.parse(appSettings.getString("maps"))
      console.log(pageData.map.maps)
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
    pageData.map.maps.forEach(element => {
        console.log(element)
    });
}   