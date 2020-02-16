var orientation = require('nativescript-orientation')
var Observable = require("data/observable")
var bluetooth = require("nativescript-bluetooth")
const appSettings = require("application-settings")
const labelModule = require("tns-core-modules/ui/label")
const timerModule = require("tns-core-modules/timer")
var insomnia = require("nativescript-insomnia")
require("nativescript-dom")
var Vibrate = require("nativescript-vibrate").Vibrate
var vibrator = new Vibrate()
const frameModule = require("ui/frame")
var fs = require("tns-core-modules/file-system")
var bghttp = require("nativescript-background-http")
var session = bghttp.session("image-upload")
var Toast = require('nativescript-toast')
var imageSourceModule = require("image-source")
var imagepicker = require("nativescript-imagepicker")
const httpModule = require("tns-core-modules/http");
var context = imagepicker.create({ mode: "single" })
let logData = {}

//192.168.43.50:3001
const API_URL = "http://202.129.16.68:7777"
var pageData = new Observable.fromObject({
    roadName: "",
    map:{},
    idCard:"",
    rssi:"",
    userName:"",
    phoneNumber:"",
    deviceId:"",
    uuid:"",
    countUser:[],
    route:0,
    km:0,
    picCard:'',
    bleId: null,
})
let urlMap = API_URL + '/maps'
let dlg = null
let dlgAlert = null
let dlgOffline = null
let mapLayout = null
let viewMap = null
let detailMap = null 
let detailMapBtn = null
let oldPoinName = null
let rssi = null
let pointWalkMap = null 
let time_loop  =  null
let time_loop_log  =  null
let arrMaps = null
let dlgcountUser = null
let pointStart = true
let pointEnd = true
let dlgStart = null
let dlgEnd = null
let roadName = null
let txtData = null
let picData = null
let pointDanger = false
let userCard = null
let imageAssetChang = {_android: null}
let tempMaps = {"maps":[{"uuid":"3D:84:E8:A8:EF:ED","uuid_ios":"505171D0-BBF9-4D74-BE62-6EDD210913F0","x":42,"y":40,"name":"point_7","route":1,"map_status":"N"},{"uuid":"43:2F:ED:5C:3C:EF","uuid_ios":"9BB645AC-EB26-B5DB-1787-BBE99F457491","x":47,"y":35,"name":"point_8","route":1,"map_status":"N"},{"uuid":"46:B2:20:8D:30:CB","uuid_ios":"BD03F4F4-45B0-00A7-EFFB-BF76C0F98B2E","x":50,"y":22,"name":"point_10_End","route":1,"map_status":"E"},{"uuid":"8F:4A:1C:93:03:D7","uuid_ios":"AEA9ED04-A9B9-2768-EA03-A9A6943FE82B","x":52,"y":29,"name":"point_9","route":1,"map_status":"N"},{"uuid":"90:D0:E9:5C:CB:CB","uuid_ios":"9B16F74B-B1A6-21E2-614F-EEA5C319933D","x":35,"y":44,"name":"point_6","route":1,"map_status":"N"},{"uuid":"B4:26:7C:71:C8:D7","uuid_ios":"505171D0-BBF9-4D74-BE62-6EDD210913F0","x":26,"y":77,"name":"point_1","route":1,"map_status":"S"},{"uuid":"B6:7D:7C:9F:A7:E2","uuid_ios":"5F2EADF2-E85B-9FAC-ED9A-9ED74BEFD946","x":35,"y":54,"name":"point_4","route":1,"map_status":"D"},{"uuid":"E1:51:83:0B:70:DE","uuid_ios":"E3FA7F93-9235-60F7-B724-8C39032D16F4","x":38,"y":59,"name":"point_3","route":1,"map_status":"N"},{"uuid":"E3:6B:F7:31:5B:FE","uuid_ios":"51398D28-A39A-CCD3-056B-8E99263EDC04","x":36,"y":68,"name":"point_2","route":1,"map_status":"N"},{"uuid":"EC:18:B9:C0:CF:C3","uuid_ios":"5303A213-E1D4-D346-0C72-E5511AA259AB","x":33,"y":49,"name":"point_5","route":1,"map_status":"N"},{"uuid":"F2:AE:DB:70:B1:B6","uuid_ios":"6E732E63-6F2E-7468-2D69-626561636F6E","x":12,"y":80,"name":"demo_point","route":1,"map_status":"D"}]}
insomnia.keepAwake().then(function() {
    console.log("Insomnia is active");
})
let documents = fs.knownFolders.documents()
let picPath = null
let tempPath = null
exports.pageLoaded = function(args) {
    if(appSettings.getString("bleId"))
        pageData.bleId = appSettings.getString("bleId")

    if(time_loop)
        timerModule.clearInterval(time_loop);
    if(time_loop_log)
        timerModule.clearInterval(time_loop_log);

    page = args.object
    page.bindingContext = pageData
    const navigationContext = page.navigationContext
    console.log(navigationContext)
    orientation.setOrientation("portrait")
    dlg = page.getViewById('user-data')
    dlgAlert = page.getViewById('user-alert')
    dlgOffline = page.getViewById('user-offline')
    dlgCheckdata = page.getViewById('checkdata')
    detailMap = page.getViewById('detailMap')
    detailMapBtn = page.getViewById('detailMapBtn')
    dlgcountUser = page.getViewById('countUser')
    dlgStart = page.getViewById('pointStart')
    dlgAboute = page.getViewById('aboute')
    dlgEnd = page.getViewById('pointEnd')
    picData = page.getViewById('picData')
    txtData = page.getViewById('txtData')
    
    if(!appSettings.getString("offline")) {
        if(navigationContext.mode == "offline") {
            dlgOffline.style.visibility = 'visible'
            appSettings.setString("maps", JSON.stringify(tempMaps))
        }
        appSettings.setString("offline", "false")
    }   

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
        pageData.picCard = jsonData.pic
    }
    
    logData.deviceId = pageData.deviceId
    getMaps()
    function getMaps(){
        fetch(urlMap).then(r => r.json())
        .then(jsonData => {
            console.log(jsonData)
        arrMaps = jsonData
        appSettings.setString("maps", JSON.stringify(jsonData))
        jsonData = arrayToObject(jsonData.maps)
        pageData.map = jsonData
        }).catch(e => {
            console.log('***fetch error***')
        })
    }
    
    if(appSettings.getString("maps")){
        arrMaps = JSON.parse(appSettings.getString("maps"))
        pageData.map = arrayToObject(arrMaps.maps)
    } else {
        dlgCheckdata.style.visibility = 'visible'
    }
    let idCardLength = []
    let userNameLength = []
    let phoneNumberLength = []

    let idCard = page.getViewById('idCard')
    let userName = page.getViewById('userName')
    let phoneNumber = page.getViewById('phoneNumber')
    userCard = page.getViewById('userCard')
    

    idCardLength[0] = new android.text.InputFilter.LengthFilter(13)
    userNameLength[0] = new android.text.InputFilter.LengthFilter(30)
    phoneNumberLength[0] = new android.text.InputFilter.LengthFilter(10)

    idCard.android.setFilters(idCardLength)
    userName.android.setFilters(userNameLength)
    phoneNumber.android.setFilters(phoneNumberLength)
    
    if(tempPath){
        picPath = tempPath
    } else {
        if(pageData.picCard != undefined)
            picPath = fs.path.join(documents.path, pageData.picCard)
    }
    
    bluetooth.enable().then(
        function(enabled) {
            check_route(function(cb){
                pageData.route = cb
                if(cb) {
                    dlgCheckdata.style.visibility = 'collapse'
                    BLE_scan()
                    time_loop = timerModule.setInterval(function(){ 
                    // use Bluetooth features if enabled is true 
                    bluetooth.stopScanning().then(function() {
                        BLE_scan()
                    })
                    }, 8000) 

                    time_loop_log = timerModule.setInterval(function(){ 
                        updateLog(logData)
                    }, 20000) 
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
    if(logData.status != "finish"){
        logData.status = "appNotWorking"
        updateLog(logData)
    }
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
            // console.log("Periperhal found with UUID: " + peripheral.UUID)
            check_status=genMap(peripheral.UUID,peripheral.RSSI)
        },
        skipPermissionCheck: false,
    }).then(function() {
        console.log("scanning complete")
        cb(check_status) 
    }, function (err) {
        console.log("error while scanning: " + err)
    })
}
function BLE_scan(){
    let alert = false
    rssi = -100
    bluetooth.startScanning({
        serviceUUIDs: [],
        seconds: 7,
        onDiscovered: function (peripheral) {
            console.log("Periperhal found with UUID: " + peripheral.UUID)
            walkMap(peripheral.UUID,peripheral.RSSI,function(cb){
                if(cb){
                    alert = true
                    mapLayout = page.getViewById("mapLayout")
                    viewMap = mapLayout.getElementsByClassName('point')
                    viewMap.backgroundColor = "red"
                    logData.status="traveling"
                } 
                if(roadName !== oldPoinName){
                    if(oldPoinName) {
                        oldPoint = page.getViewById(oldPoinName)
                        if(oldPoint){
                            oldPoint.backgroundColor = "red"
                        }
                    }
                    
                }
                if(roadName) {
                    oldPoinName = roadName
                    pageData.roadName = roadName
                    pageData.rssi = rssi
                    pointWalkMap = page.getViewById(roadName)
                    if(pointWalkMap)
                        pointWalkMap.backgroundColor = "green"
                }  
                logData.uuid = pageData.uuid
                   
            })
        },
        skipPermissionCheck: false,
    }).then(function() {
        console.log("scanning complete")
        if(pointDanger){
            if(!alert){
                alertUser()
                logData.status="detours"
                updateLog(logData)
            } else {
                logData.status="traveling"
                dlgAlert.style.visibility = 'collapse'
            }
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

function walkMap(UUID,RSSI,cb) {
    let status = false
    
    if(Object.keys(pageData.map).length !== 0){
        if(pageData.map[UUID] !== undefined) {
            status = true
            pointDanger = false
            if(RSSI >= rssi){
                rssi = RSSI
                pageData.km = calculateDistance(rssi).toFixed(2)
                
                roadName = pageData.map[UUID].name  
                                        
                pageData.uuid = UUID

                if(pageData.map[UUID].map_status == "D"){
                    pointDanger =true
                }
                
                if(pageData.map[UUID].map_status == "S"){
                    dlgPiontStart()
                    pageData.status = "traveling"
                    pointStart = false

                }  else if(pageData.map[UUID].map_status == "E") {
                    dlgPiontEnd()
                    pageData.status = "finish"
                    pointEnd = false
                } 
            } 
        } 
    }
    cb(status)
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
            pageData.roadName =  pageData.map[UUID].name
            bluetooth.stopScanning().then(function() {
                console.log("scanning stopped");
            });
        }

        if(viewMap){
            romoveMap()
        }
        mapLayout.height = countPoint(route)>8?""+(((countPoint(route)-8)*10)+100)+"%":"100%"
        let bgMaps = ""
        let img 

        httpModule.getImage("http://202.129.16.68/~offtduac/bgMaps/r"+route+".jpg").then((r) => {
            // getImage method returns ImageSource object
            img = r
            var folder = fs.knownFolders.documents();
            var path = fs.path.join(folder.path, "r"+route+".jpg");
            appSettings.setString("bgMaps", path)
            img.saveToFile(path)
            mapLayout.backgroundImage = path
        }, (e) => {
            console.log(e)
        });    

        bgMaps = appSettings.getString("bgMaps")
        mapLayout.className = "map-layout"
        mapLayout.backgroundImage = bgMaps

        arrMaps.maps.forEach(element => {
            
            if(route){
                if(element.route ==  route) {
                    let myLabel = new labelModule.Label()
                    let myLabelText = new labelModule.Label()

                    myLabel.className = "point"
                    myLabel.id = element.name
                    myLabel.marginTop = ""+element.y+"%"
                    myLabel.marginLeft = ""+element.x+"%"
                    myLabel.style.zIndex="-1"
                    myLabelText.text = element.name
                    myLabelText.id = "txtMap"
                    myLabelText.class = "txt-map"
                    myLabelText.marginLeft = ""+element.x+"%"
                    myLabelText.marginTop = ""+(element.y-2)+"%"

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
        pageData.picCard = jsonData.pic
    }
    dlg.style.visibility = 'visible'
    console.log("picCard picCard picCard = "+pageData.picCard)
    if(pageData.picCard  == undefined)
        pageData.picCard  = ''
    if(pageData.picCard != ''){
        userCard.style.backgroundImage  = picPath
        picData.style.visibility = 'visible'
        txtData.style.visibility = 'collapse'
    } else {
        picData.style.visibility = 'collapse'
        txtData.style.visibility = 'visible'
    }
}
exports.changPic = function() {
    context
    .authorize()
    .then(function() {
        return context.present();
    })
    .then(function(selection) {
        selection.forEach(function(selected) {
            console.log(selected)
            // process the selected image
            imageAssetChang = selected
            userCard.style.backgroundImage  = selected._android

        });
        list.items = selection;
    }).catch(function (e) {
        // process error
    });
}   
exports.setUser = function() {
    let saveData = {}
    saveData.idCard = pageData.idCard
    saveData.userName = pageData.userName
    saveData.phoneNumber = pageData.phoneNumber
    saveData.deviceId = pageData.deviceId
    saveData.picCard = pageData.picCard
    saveData.bleId = pageData.bleId
    let text = null
    var tester = /^[a-zA-Z0-9ก-๙ ]*$/
    if (saveData.userName.length === 0 && saveData.picCard == "") {
    text = 'Please enter name'
    } else if (saveData.phoneNumber.length < 10) {
    text = 'Please enter your mobile phone number to complete 10 digits.'
    } else if (saveData.deviceId.length < 0) {
    text = 'NO Device ID.'
    } 
    // else if (saveData.idCard.length < 7 && saveData.picCard == "") {
    // text = 'ID Card incorrect.'
    // }
    else if (!tester.test(pageData.userName) && saveData.picCard == "") {
        text = 'Please enter the first and last name in the alphabet. a-z, A-Z, 0-9, A-9'
    }
    if (text != null) {
        Toast.makeText(text).show()
        return
    }

    console.log(JSON.parse(JSON.stringify(saveData)))
    if(pageData.picCard == ''){
        fetch(API_URL+"/updateUser", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(saveData)
        }).then((r) => r.json())
        .then((response) => {
            if(response.status == "Success"){
                console.log("Success")
                appSettings.setString("userData", JSON.stringify(saveData))
                Toast.makeText("update success","long").show()
            }
            else if(response.status == "Fail"){
                Toast.makeText("update fail").show()
            }
        }).catch((e) => {
            console.log('***fetch error***')
        });
    } else {
        if(imageAssetChang._android == null){
            let documents = fs.knownFolders.documents()
            let path = fs.path.join(documents.path, pageData.picCard);
            imageAssetChang._android =path
        }
        tempPath = imageAssetChang._android
        var file =  imageAssetChang._android
        var url = API_URL+"/updateUser";
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
            { name: "phoneNumber", value: pageData.phoneNumber },
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
        imageSourceModule.fromAsset(imageAssetChang)
        .then(imageSource => {
            imageSource.saveToFile(path, "jpg");
        });
    }
    dlgHide()
}
exports.userCount = () => {
    console.log("userCount")
    fetch(API_URL+"/getCountUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({route:pageData.route})
    }).then((r) => r.json())
    .then((response) => {
        if(Object.keys(response.userData).length !== 0){
            response.userData[0].countUser = Object.keys(response.userData).length
            pageData.countUser = response.userData
        }
        console.log(pageData.countUser)
    }).catch((e) => {
        console.log('***fetch error***')
    });
    dlgcountUser.style.visibility = 'visible'
    
}
exports.hideDialog = function() {
    imageAssetChang._android = null
    dlg.style.visibility = 'collapse'
    dlgAlert.style.visibility = 'collapse'
    dlgcountUser.style.visibility = 'collapse'
    dlgEnd.style.visibility = 'collapse'
    dlgStart.style.visibility = 'collapse'
    dlgAboute.style.visibility = 'collapse'
    dlgOffline.style.visibility = 'collapse'
}

function dlgHide() {
    imageAssetChang._android = null
    dlg.style.visibility = 'collapse'
    dlgAlert.style.visibility = 'collapse'
    dlgEnd.style.visibility = 'collapse'
    dlgStart.style.visibility = 'collapse'
    dlgAboute.style.visibility = 'collapse'
}

exports.hideDetailMap = function(){
    detailMap.style.visibility = 'collapse'
    detailMapBtn.style.visibility = 'visible'
}

exports.showDetailMap = function(){
    detailMap.style.visibility = 'visible'
    detailMapBtn.style.visibility = 'collapse'
}

function dlgPiontStart() {
    if(pointStart){
        dlgStart.style.visibility = 'visible'
    } else {
        dlgStart.style.visibility = 'collapse'
    }
}

function dlgPiontEnd() {
    if(pointEnd){
        dlgEnd.style.visibility = 'visible'
    } else {
        dlgEnd.style.visibility = 'collapse'
    }
}

exports.noop = () => {
}
exports.aboute = () => {
    dlgAboute.style.visibility = 'visible'
}

exports.reMap=()=>{
    frameModule.topmost().navigate("map");
}
function errorHandler(e) {
    console.log("received " + e.responseCode + " code.");
    toast = Toast.makeText("Update fail please try again")
    toast.show()

   var serverResponse = e.response;
}

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
       picPath = tempPath
       
       appSettings.setString("userData", JSON.stringify(jsonData))
       toast = Toast.makeText("Update success","long")
       toast.show()
   }
   else if(e.data["status"]== "Fail"){
       toast = Toast.makeText("Update fail")
       toast.show()
   }
   else if(e.data["status"]== "DuplicateUser"){
       console.log("DuplicateUser")
   }

}

function progressHandler(e) {
    console.log("uploaded " + e.currentBytes + " / " + e.totalBytes);
}

function calculateDistance(rssi) {
  
    var txPower = -59 //hard coded power value. Usually ranges between -59 to -65
    
    if (rssi == 0) {
      return -1.0; 
    }
  
    var ratio = rssi*1.0/txPower;
    if (ratio < 1.0) {
      return Math.pow(ratio,10);
    }
    else {
      var distance =  (0.89976)*Math.pow(ratio,7.7095) + 0.111;    
      return distance;
    }
  } 