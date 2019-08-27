var orientation = require('nativescript-orientation')
var Observable = require("data/observable")
var bluetooth = require("nativescript-bluetooth")
const appSettings = require("application-settings")
const labelModule = require("tns-core-modules/ui/label")
const timerModule = require("tns-core-modules/timer")
require("nativescript-dom")
var Vibrate = require("nativescript-vibrate").Vibrate
var vibrator = new Vibrate()
const frameModule = require("ui/frame")
//192.168.43.50
//10.60.4.217
const API_URL = "http://192.168.43.50:3001"
var pageData = new Observable.fromObject({
    roadName: "",
    map:{},
    idCard:"",
    rssi:"",
    userName:"",
    phoneNumber:"",
})
let urlMap = API_URL + '/maps'
let dlg = null
let dlgAlert = null
let mapLayout = null
let viewMap = null
let detailMap = null 
let detailMapBtn = null
let oldPoinName = null
let pointWalkMap = null 
let time_loop  =  null
let arrMaps = null
exports.pageLoaded = function(args) {
    page = args.object
    page.bindingContext = pageData
    orientation.setOrientation("portrait")
    dlg = page.getViewById('user-data')
    dlgAlert = page.getViewById('user-alert')
    dlgCheckdata = page.getViewById('checkdata')
    detailMap = page.getViewById('detailMap')
    detailMapBtn = page.getViewById('detailMapBtn')
    romoveMap()
    const arrayToObject = (array) =>
    array.reduce((obj, item) => {
        obj[item.uuid] = item
        return obj
    }, {})
    
    if(appSettings.getString("maps")){
        arrMaps = JSON.parse(appSettings.getString("maps"))
        pageData.map = arrayToObject(arrMaps.maps)
    } else {
        dlgCheckdata.style.visibility = 'visible'
    }
    fetch(urlMap).then(r => r.json())
    .then(jsonData => {
      arrMaps = jsonData
      appSettings.setString("maps", JSON.stringify(jsonData))
      jsonData = arrayToObject(jsonData.maps)
      pageData.map = jsonData
    }).catch(e => {
      console.log('***fetch error***')
    })

    bluetooth.enable().then(
        function(enabled) {
            
            check_route(function(cb){
                if(cb) {
                    dlgCheckdata.style.visibility = 'collapse'
                    time_loop = timerModule.setInterval(function(){ 
                        console.log(time_loop)
                    // use Bluetooth features if enabled is true 
                    bluetooth.stopScanning().then(function() {
                        BLE_scan()
                    })
                    }, 8000) 
                } else {
                    dlgCheckdata.style.visibility = 'visible'
                }
            })
        }
    )    
}
exports.pageUnloaded = () =>{
    console.log("pageUnloaded")
    if(time_loop)
        timerModule.clearInterval(time_loop);
}
function romoveMap() {
    mapLayout = page.getViewById("mapLayout")
    viewMap = mapLayout.getElementsByClassName('point')
    for(let i = 0;i<viewMap.length;i++){
        mapLayout.removeChild(viewMap[i])
    }
}
function check_route(cb) {
    let check_status = null
    bluetooth.startScanning({
        serviceUUIDs: [],
        seconds: 5,
        onDiscovered: function (peripheral) {
            console.log("Periperhal found with UUID: " + peripheral.UUID)
            console.log(check_status=genMap(peripheral.UUID,peripheral.RSSI))            
        },
        skipPermissionCheck: false,
    }).then(function() {
        console.log("scanning complete")
        cb(check_status ) 
    }, function (err) {
        console.log("error while scanning: " + err)
    })
}
function BLE_scan(){
    let genStatus = false
    let alert = false
    bluetooth.startScanning({
        serviceUUIDs: [],
        seconds: 6,
        onDiscovered: function (peripheral) {
            console.log("Periperhal found with UUID: " + peripheral.UUID)
            genStatus = walkMap(peripheral.UUID,peripheral.RSSI)
            if(genStatus){
                alert = true
                mapLayout = page.getViewById("mapLayout")
                viewMap = mapLayout.getElementsByClassName('point')
                viewMap.backgroundColor = "red"
            } else {
                if(pageData.roadName !== oldPoinName){
                    if(oldPoinName) {
                        oldPoint = page.getViewById(oldPoinName)
                        if(oldPoint)
                            oldPoint.backgroundColor = "red"
                    }
                    
                }

                if(pageData.roadName) {
                    oldPoinName = pageData.roadName
                    pointWalkMap = page.getViewById(pageData.roadName)
                    if(pointWalkMap)
                        pointWalkMap.backgroundColor = "green"
                }  
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
    arrMaps.maps.forEach(element => {   
        if(route){
            if(element.route ==  route) {
                count++
            }
        }
    })
    return count
}

function walkMap(UUID,RSSI) {
    let status = false
    if(Object.keys(pageData.map).length !== 0){
        if(pageData.map[UUID] !== undefined) {
            pageData.rssi = RSSI
            if(RSSI > -80)
                pageData.roadName = pageData.map[UUID].name
                
            status = true  
            console.log("FIND  "+RSSI)
        }
    }
    return status
}
function genMap(UUID,RSSI){
    let route = 0
    if(Object.keys(pageData.map).length !== 0){

        viewMap = mapLayout.getElementsByClassName('point')
        if(pageData.map[UUID] != undefined){
            route=pageData.map[UUID].route
            bluetooth.stopScanning().then(function() {
                console.log("scanning stopped");
            });
        }

        if(viewMap){
            romoveMap()
        }
        
        mapLayout.height = countPoint(route)>8?""+(((countPoint(route)-8)*10)+100)+"%":"100%"
        console.log(mapLayout.height)
        mapLayout.backgroundColor = "blue"
        
        arrMaps.maps.forEach(element => {
            
            if(route){
                if(element.route ==  route) {
                    if(RSSI > -70)
                        pageData.roadName = element.name

                    let myLabel = new labelModule.Label()
                    let myLabelText = new labelModule.Label()

                    myLabel.className = "point"
                    myLabel.width = 28
                    myLabel.height = 28
                    myLabel.id = element.name
                    myLabel.marginTop = ""+element.y+"%"
                    myLabel.marginLeft = ""+element.x+"%"
                    myLabel.style.zIndex="-1";
                    myLabel.backgroundColor = "red";
                    myLabelText.text = element.name
                    myLabelText.marginLeft = ""+element.x+"%"
                    myLabelText.marginTop = ""+(element.y-4)+"%"

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
        pageData.phoneNumber = jsonData.phoneNumber
    }
    dlg.style.visibility = 'visible'
}

exports.setUser = function() {
    let svaeData = {}
    svaeData.idCard = pageData.idCard
    svaeData.userName = pageData.userName
    svaeData.phoneNumber = pageData.phoneNumber
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
exports.hideDetailMap = function(){
    detailMap.style.visibility = 'collapse'
    detailMapBtn.style.visibility = 'visible'
}
exports.showDetailMap = function(){
    detailMap.style.visibility = 'visible'
    detailMapBtn.style.visibility = 'collapse'
}

exports.noop = () => {
}
exports.reMap=()=>{
    console.log("reMap")
    frameModule.topmost().navigate("map");
}
