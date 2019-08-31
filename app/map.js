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

const util = require('./util')
var Toast = require('nativescript-toast')
let logData = {}
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
    deviceId:"",
    status:"",
    uuid:"",
    countUser:[{}],
    route:0,
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
let time_loop_log  =  null
let arrMaps = null
let dlgcountUser = null
exports.pageLoaded = function(args) {

    page = args.object
    page.bindingContext = pageData
    
    orientation.setOrientation("portrait")
    dlg = page.getViewById('user-data')
    dlgAlert = page.getViewById('user-alert')
    dlgCheckdata = page.getViewById('checkdata')
    detailMap = page.getViewById('detailMap')
    detailMapBtn = page.getViewById('detailMapBtn')
    dlgcountUser = page.getViewById('countUser')

    romoveMap()
    const arrayToObject = (array) =>
    array.reduce((obj, item) => {
        obj[item.uuid] = item
        return obj
    }, {})
    if(appSettings.getString("userData")){
        let jsonData = JSON.parse(appSettings.getString("userData"))
        pageData.idCard = jsonData.idCard
        pageData.userName = jsonData.userName
        pageData.phoneNumber = jsonData.phoneNumber
        pageData.deviceId = jsonData.deviceId
    }
    logData.deviceId = pageData.deviceId

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
    let idCardLength = []
    let userNameLength = []
    let phoneNumberLength = []

    // for(let i = 0;i<50;i++)
    //     pageData.countUser.push({userName:"temp"})

    let idCard = page.getViewById('idCard')
    let userName = page.getViewById('userName')
    let phoneNumber = page.getViewById('phoneNumber')

    idCardLength[0] = new android.text.InputFilter.LengthFilter(13)
    userNameLength[0] = new android.text.InputFilter.LengthFilter(30)
    phoneNumberLength[0] = new android.text.InputFilter.LengthFilter(10)

    idCard.android.setFilters(idCardLength)
    userName.android.setFilters(userNameLength)
    phoneNumber.android.setFilters(phoneNumberLength)
    
    bluetooth.enable().then(
        function(enabled) {
            util.loadingHide()
            check_route(function(cb){
                pageData.route = cb
                if(cb) {
                    dlgCheckdata.style.visibility = 'collapse'
                    time_loop = timerModule.setInterval(function(){ 
                    // use Bluetooth features if enabled is true 
                    bluetooth.stopScanning().then(function() {
                        BLE_scan()
                    })
                    }, 8000) 
                    updateLog(logData)
                    time_loop_log = timerModule.setInterval(function(){ 
                        //updateLog(logData)
                    }, 60000) 
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
    if(time_loop_log)
        timerModule.clearInterval(time_loop_log);
}
function romoveMap() {
    mapLayout = page.getViewById("mapLayout")
    viewMap = mapLayout.getElementsByClassName('point')
    for(let i = 0;i<viewMap.length;i++){
        mapLayout.removeChild(viewMap[i])
    }
    txtMap = mapLayout.getElementsByClassName('txt-map')
    for(let i = 0;i<viewMap.length;i++){
        mapLayout.removeChild(txtMap[i])
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
                pageData.status = "traveling"
                logData.uuid = pageData.uuid
                logData.status = pageData.status
            }
            
        },
        skipPermissionCheck: false,
    }).then(function() {
        console.log("scanning complete")
        if(!alert){
            alertUser()
        } else {
            dlgAlert.style.visibility = 'collapse'
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
                pageData.uuid = UUID   
            status = true  
            console.log("FIND  "+RSSI)
        }
    }
    return status
}
function updateLog(data) {
    console.log(data)
    fetch(API_URL+"/updateUserLog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    }).then((r) => r.json())
    .then((response) => {
        if(response.status == "Success"){
            console.log("update log Success")
        }
        else if(response.status == "Fail"){
            console.log("update log Success")
        }
    }).catch((e) => {
        console.log('***fetch error***')
    });
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
                    myLabel.style.zIndex="-1"
                    myLabel.backgroundColor = "red"
                    myLabelText.text = element.name
                    myLabelText.id = "txtMap"
                    myLabelText.class = "txt-map"
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
        pageData.deviceId = jsonData.deviceId
    }
    dlg.style.visibility = 'visible'
}

exports.setUser = function() {
    let saveData = {}
    saveData.idCard = pageData.idCard
    saveData.userName = pageData.userName
    saveData.phoneNumber = pageData.phoneNumber
    saveData.deviceId = pageData.deviceId
    let text = null
    var tester = /^[a-zA-Z0-9ก-๙ ]*$/
    if (saveData.userName.length === 0) {
      text = 'Please enter name'
    } else if (saveData.phoneNumber.length < 10) {
      text = 'Please enter your mobile phone number to complete 10 digits.'
    } else if (saveData.deviceId.length < 0) {
      text = 'NO Device ID.'
    } else if (saveData.idCard.length < 7) {
      text = 'ID Card incorrect.'
    }else if (!tester.test(pageData.userName)) {
        text = 'Please enter the first and last name in the alphabet. a-z, A-Z, 0-9, A-9'
    }
    if (text != null) {
      Toast.makeText(text).show()
      return
    }

    appSettings.setString("userData", JSON.stringify(saveData))
    fetch(API_URL+"/updateUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(saveData)
    }).then((r) => r.json())
    .then((response) => {
        if(response.status == "Success"){
            console.log("Success")
            Toast.makeText("update success","long").show()
        }
        else if(response.status == "Fail"){
            Toast.makeText("update fail").show()
        }
    }).catch((e) => {
        console.log('***fetch error***')
    });

    dlgHide()
}
exports.userCount = () => {
    console.log("userCount")
    dlgcountUser.style.visibility = 'visible'
    fetch(API_URL+"/getCountUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({route:pageData.route})
    }).then((r) => r.json())
    .then((response) => {
        pageData.countUser = response.userData
        console.log(response)

    }).catch((e) => {
        console.log('***fetch error***')
    });
}
exports.hideDialog = function() {
    dlg.style.visibility = 'collapse'
    dlgAlert.style.visibility = 'collapse'
    dlgcountUser.style.visibility = 'collapse'
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
