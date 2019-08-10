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
let mapLayout = null
let viewMap = null

exports.pageLoaded = function(args) {
    page = args.object
    page.bindingContext = pageData
    orientation.setOrientation("portrait")
    dlg = page.getViewById('user-data')
    dlgAlert = page.getViewById('user-alert')

    romoveMap()

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
            //BLE_scan()
            check_route()
            setInterval(function(){ 
        
            // use Bluetooth features if enabled is true 
            // BLE_scan()
            
            }, 13000)
        }
    )

}
function romoveMap() {
    mapLayout = page.getViewById("mapLayout")
    viewMap = mapLayout.getElementsByClassName('point')
    for(let i = 0;i<viewMap.length;i++){
        mapLayout.removeChild(viewMap[i])
    }
}
function check_route() {
    bluetooth.startScanning({
        serviceUUIDs: [],
        seconds: 10,
        onDiscovered: function (peripheral) {
            console.log("Periperhal found with UUID: " + peripheral.UUID)
            console.log(genMap(peripheral.UUID,peripheral.RSSI,))            
        },
        skipPermissionCheck: false,
    }).then(function() {
        console.log("scanning complete")
    }, function (err) {
        console.log("error while scanning: " + err)
    })
}
function BLE_scan(){
    let genStatus = false
    let alert = false
    bluetooth.startScanning({
        serviceUUIDs: [],
        seconds: 10,
        onDiscovered: function (peripheral) {
            console.log("Periperhal found with UUID: " + peripheral.UUID)
            // genStatus = genMap(peripheral.UUID,peripheral.RSSI,)
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
function countPoint(route) {
    let count = 0
    pageData.map.maps.forEach(element => {
            
        if(route){
            if(element.route ==  route) {
                count++
            }
        }
    })
    return count
}
function genMap(UUID,RSSI){
    let route = 0
    if(pageData.map.maps){
        viewMap = mapLayout.getElementsByClassName('point')
        pageData.map.maps.forEach(element => {
            
            if(element.uuid == UUID) {
                route = element.route
                bluetooth.stopScanning().then(function() {
                    console.log("scanning stopped");
                });
            } 
        });
        if(viewMap){
            romoveMap()
        }
        
        mapLayout.height = 600+(countPoint(route)*100)
        console.log(mapLayout.height)
        mapLayout.backgroundColor = "blue"

        pageData.map.maps.forEach(element => {
            
            if(route){
                if(element.route ==  route) {
                    if(RSSI > -60)
                        pageData.roadName = element.name

                    let myLabel = new labelModule.Label()
                    let myLabelText = new labelModule.Label()

                    myLabel.className = "point"
                    myLabel.width = 28
                    myLabel.height = 28
                    myLabel.left = element.x
                    myLabel.top = element.y
                    myLabel.style.zIndex="-1";
                    myLabel.backgroundColor = "red";
                    myLabelText.text = element.name
                    myLabelText.left = element.x
                    myLabelText.top = element.y+20


                    mapLayout.addChild(myLabel)
                    mapLayout.addChild(myLabelText)
                    console.log("+++genBeacon+++"+element.x+","+element.y) 

                }
            }
        });
    }
    return route
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