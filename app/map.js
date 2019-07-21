var orientation = require('nativescript-orientation')
var Observable = require("data/observable")
var bluetooth = require("nativescript-bluetooth")
const appSettings = require("application-settings")
const labelModule = require("tns-core-modules/ui/label")
require("nativescript-dom");
var Vibrate = require("nativescript-vibrate").Vibrate;
var vibrator = new Vibrate();
const API_URL = "http://192.168.43.50:3001"
var pageData = new Observable.fromObject({
    roadName: "testName",
    map:{},
    idCard:"",
    userName:"",
})
let urlMap = API_URL + '/maps'
let dlg = null
let dlgAlert = null
let mapLayout
let viewMap

exports.pageLoaded = function(args) {
    page = args.object
    page.bindingContext = pageData
    orientation.setOrientation("portrait")
    dlg = page.getViewById('user-data')
    dlgAlert = page.getViewById('user-alert')

    mapLayout = page.getViewById("mapLayout")
    viewMap = mapLayout.getElementsByClassName('point')
    for(let i = 0;i<viewMap.length;i++){
        mapLayout.removeChild(viewMap[i])
    }

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
    
    bluetooth.enable().then(
        function(enabled) {
            BLE_scan()

            setInterval(function(){ 
        
            // use Bluetooth features if enabled is true 
            // BLE_scan()
            
            }, 11000)
        }
      )
}

function BLE_scan(){
    let genStatus = false
    let alert = false
    bluetooth.startScanning({
        serviceUUIDs: [],
        seconds: 10,
        onDiscovered: function (peripheral) {
            console.log("Periperhal found with UUID: " + peripheral.UUID)
            genStatus = genMap(peripheral.UUID,peripheral.RSSI)
            if(genStatus){
                alert = true
            }
            
        },
        skipPermissionCheck: false,
    }).then(function() {
        console.log("scanning complete")
        if(!alert){
            alertUser()
        } else {
            dlgHide()
        }

    }, function (err) {
        console.log("error while scanning: " + err)
    })
}
function alertUser(){
    vibrator.vibrate(2000);
    dlgAlert.style.visibility = 'visible'
}
function genMap(UUID,RSSI){
    let i = 0
    let genStatus = false
    if(pageData.map.maps){
        viewMap = mapLayout.getElementsByClassName('point')
        pageData.map.maps.forEach(element => {
            
            if(element.uuid == UUID) {
                if(RSSI > -50)
                    pageData.roadName = element.name
                genStatus = true
                console.log(viewMap)
                if(viewMap[i] != undefined)
                    mapLayout.removeChild(viewMap[i])
                let myLabel = new labelModule.Label()
                myLabel.className = "point"
                myLabel.width = 28
                myLabel.height = 28
                myLabel.left = element.x
                myLabel.top = element.y
                myLabel.style.zIndex="-1";
                myLabel.backgroundColor = "red";

                mapLayout.addChild(myLabel)
                console.log("+++genBeacon+++"+element.x+","+element.y+","+i) 
            } 
            i++
        });
    }
    return genStatus
} 

exports.user = function() {
    if(appSettings.getString("userData")){
        let jsonData = JSON.parse(appSettings.getString("userData"))
        pageData.idCard = jsonData.idCard
        pageData.userName = jsonData.userName
    }
    dlg.style.visibility = 'visible'
}

exports.setUser = function() {
    let svaeData = {}
    svaeData.idCard = pageData.idCard
    svaeData.userName = pageData.userName
    appSettings.setString("userData", JSON.stringify(svaeData))
    dlgHide()
}
exports.hideDialog = function() {
    dlg.style.visibility = 'collapse'
    dlgAlert.style.visibility = 'collapse'
}
function dlgHide() {
    dlg.style.visibility = 'collapse'
    dlgAlert.style.visibility = 'collapse'
}
exports.noop = () => {
}