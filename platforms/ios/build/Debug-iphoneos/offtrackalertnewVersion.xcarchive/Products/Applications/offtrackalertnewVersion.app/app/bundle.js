require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (?<!\\bApp_Resources\\b.*)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css",
	"./app.js": "./app.js",
	"./main-page.js": "./main-page.js",
	"./main-page.xml": "./main-page.xml",
	"./map.css": "./map.css",
	"./map.js": "./map.js",
	"./map.xml": "./map.xml",
	"./register.css": "./register.css",
	"./register.js": "./register.js",
	"./register.xml": "./register.xml"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (?<!\\bApp_Resources\\b.*)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__("../node_modules/css-loader/dist/cjs.js?!../node_modules/nativescript-theme-core/css/core.light.css"), "");

// Module
exports.push([module.i, "/* Your CSS goes here */\n.far {\n    font-family: Font Awesome 5 Free, fa-regular-400;\n    font-weight: 400; \n}\n\n.fab {\n    font-family: Font Awesome 5 Brands, fa-brands-400;\n    font-weight: 400; \n}\n\n.fas {\n    font-family: Font Awesome 5 Free, fa-solid-900;\n    font-weight: 900; \n}\n", ""]);

; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./app.css") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "style", path: "./app.css" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__initialHmrUpdate = true;
            global.__hmrSyncBackup = global.__onLiveSync;

            global.__onLiveSync = function () {
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                if (global.__initialHmrUpdate) {
                    return;
                }

                setTimeout(() => {
                    global.__hmrSyncBackup({ type, path });
                });
            };

            hmrUpdate().then(() => {
                global.__initialHmrUpdate = false;
            })
        }
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (true) {
                module.hot.accept(context.id, () => { 
                    console.log("HMR: Accept module '" + context.id + "' from '" + module.i + "'"); 
                });
            }
            
        __webpack_require__("../node_modules/tns-core-modules/bundle-entry-points.js");
        var applicationModule = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
applicationModule.run({ moduleName: "register" });; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./app.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./app.js" });
    });
} 
    
        
        
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./main-page.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports.pageLoaded = function() {

};
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./main-page.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./main-page.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./main-page.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Page loaded=\"pageLoaded\">\n  <ActionBar title=\"My App\" class=\"action-bar\"></ActionBar>\n  <!-- Your UI components go here -->\n</Page>\n"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./main-page.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./main-page.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./map.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".map{\n    background-color:#fff; \n    /* background-image: url(\"~/images/map1.jpg\"); */\n    /* background-position: center; \n    background-repeat: no-repeat;\n    background-size: cover;  */\n    /* transform: scale(1);  */\n}\n.map-layout{\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 100% 100%;\n}\n.aboute-logo{\n    margin-left: 10%;\n    margin-top: 5%;\n}\n.aboute-txt{\n    font-size: 28px;\n    margin: 5% 2% 0% 5%;\n    \n}\n.aboute-txt-detail{\n    font-size: 16px;\n    margin: 5% 15% 0% 0%;\n    white-space: nowrap;\n}\n.map-menu {\n    background-color:white;\n}\n/* dlg */\n.lg-dialog {\n    width:100%;\n    height:100%;\n    background-color: rgba(0,0,0,0.5);\n    visibility: collapse;\n}\n.lg-dialog .dialog {\n    /* background-image: url('~/images/bg.png'); */\n    background-position: center;\n    background-size: cover;\n    border-radius: 4;\n    width: 280;\n    height: 400;\n    margin: 48 auto;\n    background-color: #fff;\n    flex-direction: column;\n}\n.dialog .title{\n    position: center;\n    width: 100%;\n    height: 40;\n    padding:0;\n    margin-bottom: 8;\n    flex-shrink: 0;   \n}\n\n.title .text {\n    font-size: 20;\n    color: black;\n    margin: 0;\n    padding: 6 8 0 8;\n    flex-grow: 1;\n}\n.close {\n    text-align: center;\n    font-size:18px;\n    color:rgba(116, 114, 114, 0.863);\n    background-color: rgba(255, 255, 255, 0.904); \n}\n\n.content {\n    flex-grow: 1;\n}\n.actions {\n    flex-shrink: 0;\n    color: rgb(78, 71, 71);\n    margin: 0 0;\n    height: 50;\n}\n\n.header{\n\n    background-image: url('~/images/bg_header.jpg');\n}\n\n.actions .action {\n    flex-grow: 1;\n}\n/* dlg */\n.map-menu Label {\n    background-color:white;\n    /* background-image: url('~/images/bg_header.jpg'); */\n    width: 33.4%;\n    font-size: 40px;\n    text-align: center;\n    border-right-width: 1px;\n    border-left-width: 1px;\n    margin-top: 7%;\n}\n.detail-map {\n    background-color:rgb(255, 255, 255);\n       border-radius: 10%;\n       margin: 10% 10% 0% 10%;\n       text-align: center;\n    }\n.detailMapBtn{\n        background-color: rgb(194, 241, 23);\n        font-size: 20px;\n        border-radius: 30%;\n        /* font-size: 28px; */\n        visibility : collapse;\n        text-align: center;\n        width: 100%;\n        height: 100%;\n    }\n    \n.location {\n        background-color: white;\n        border-radius: 10%;\n        font-size: 28px;\n        text-align: center;\n        margin: 80% 10% 10% 80%;\n    }\n\n\n.location Label {\n    margin-top: 12%;\n}\n.map-mark {\n    font-size: 32px;\n    /* color: brown; */\n    margin: 10% 0% 0% 5%;\n}\n.track-name {\n    margin: 20% 0% 0% 5%;\n    width: 100%;\n    text-align:left;\n}\n.user-RSSI {\n    font-size: 32px;\n    margin: 10% 0% 0% 5%;\n}\n.rssis {\n    font-size: 24px;\n    margin: 20% 0% 0% 5%;\n}\n.user-road {\n    font-size: 24px;\n    margin: 20% 0% 0% 15%;\n}\n.road-total {\n    width: 30%;\n    font-size: 16px;\n    margin: 20% 0% 0% 5%;\n}\n\n.m-t-10p{\n    margin-top: 10%;\n}\n.m-t-15p{\n    margin-top: 15%;\n}\n.m-t-25p{\n    margin-top: 25%;\n}\n.m-t-30p{\n    margin-top: 30%;\n\n}\n.m-t-50p{\n    margin-top: 50%;\n\n}\n.center{\n    \n    font-size: 25px;\n    margin: 0% 0% 0% 45%;\n}\n.m-t-47p{\n    margin-top: 35%;\n}\n.m-t-5p{\n    margin-top: 5%;\n}\n\n.txt-s{\n    font-size: 18;\n    margin: 5%,0,0,8%;\n}\n\n.content {\n    width: 100%;\n    height: 100%;\n}\n\n.users-selector {\n    width: 100%;\n    height: 100%;\n    /* background: grey; */\n}\n\n.item{\n    /*background: #fff;*/\n    padding: 56px;\n}\n\n.txt-count-icon {\n    /* margin-left: 10px; */\n    font-size: 28px;\n    width: 20%;\n\n}\n.txt-count-name {\n    /* margin-left: 60px; */\n    width: 40%;\n}\n.txt-count-point {\n    /* margin-left: 60px; */\n    width: 40%;\n}\n\n.user-pic{\n    margin: 5%;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: contain;\n    transform: rotate(90);\n}\n.total-users{\n    text-align: right;\n    font-size: 18px;\n    width: 100%;\n}\n.camera{\n    background-color: white;\n    margin-top: 40%;\n    margin-left: 60%;\n    font-size: 24;\n    color: black;\n    border-radius: 10;\n}\n.point{\n    width:28;\n    height: 28;\n    background-color: rgb(233, 99, 10);\n    border-width: 1;\n    border-color: black;\n    border-radius: 10px;\n}\n.txt-map{\n    font-size: 14;\n    color: black;\n}\n/*-----------------form textbox---------------------------------------------*/\n.selectbox_id{\n    width: 64%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    \n  }\n  /*------------------------end form textbox--------------------------------*/\n  /*-----------------form textbox---------------------------------------------*/\n.selectbox_user{\n    width: 68%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    \n  }\n  /*------------------------end form textbox--------------------------------*/\n  /*-----------------form textbox---------------------------------------------*/\n.selectbox_tel{\n    width: 76%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    \n  }\n  /*------------------------end form textbox--------------------------------*/\n  /*-----------------------profileleft------------------------*/\n  .left {\n    margin-left: 27%;\n    width: 15%;\n  }\n  /*-----------------------end left------------------------*/\n  /*------------------------icon color-----------------------------*/\n  .icon_wifi_color{\n    border: 2px solid rgb(8, 8, 8);\n    color: rgb(43, 26, 192);\n  }\n \n    /*-----------------------end-icon color-----------------------------*/\n      /*------------------------icon color-----------------------------*/\n  .icon_location_color{\n    border: 2px solid rgb(8, 8, 8);\n    color: rgb(151, 8, 8);\n  }\n \n    /*-----------------------end-icon color-----------------------------*/\n          /*------------------------icon color-----------------------------*/\n  .icon_road_color{\n    border: 2px solid rgb(8, 8, 8);\n    color: rgb(61, 59, 59);\n  }\n \n    /*-----------------------end-icon color-----------------------------*/\n          /*------------------------icon color-----------------------------*/\n  .icon_Km_color{\n    border: 2px solid rgb(8, 8, 8);\n    color: rgb(151, 8, 8);\n  }\n \n    /*-----------------------end-icon color-----------------------------*/\n    /*---------------------- bg dlg User------------------*/\n    .bg_dlg_User{\n        background-color: rgba(232, 240, 232, 0.774); \n        background-image: url('~/images/bg_profile.jpg');\n      }\n   /*--------------------- --bg dlg User-------------------*/\n   /*-----------btn edit----------------*/\n   .buttonsedit {\n    margin-top: 15%;\n    margin-left: 3%;\n    width: 40%;\n    height: 10%;\n    display: inline-block;\n    padding: 15px 35px;\n    font-size: 16px;\n    cursor: pointer;\n    text-align: center;\n    text-decoration: none;\n    outline: none;\n    color: rgb(0, 0, 0);\n    background-color: rgb(69, 182, 78);\n    border: 1px;\n    border-radius: 50px;\n    box-shadow: 0 9px #999;\n  }\n  .buttonsedit2 {\n    margin-top: 33%;\n    margin-left: 30%;\n    width: 40%;\n    height: 30%;\n    display: inline-block;\n    padding: 15px 35px;\n    font-size: 14px;\n    cursor: pointer;\n    text-align: center;\n    text-decoration: none;\n    outline: none;\n    color: rgb(0, 0, 0);\n    background-color: rgb(69, 182, 78);\n    border: 2px;\n    border-radius: 50px;\n    box-shadow: 0 9px #999;\n  }\n  /*-----------end btn edit-------------------*/\n  /* ----------------------------------- */\n  .lable_left{\n    margin-left: 30%;\n  }\n \n  /* -------------------------------- */\n  /*-------------------font size menu----------------------*/\n  .size_icon_menu{\n   width: 20%;\n   height: 20%;   \n  }\n  /*------------------end -font size menu----------------------*/\n\n/*----------headermenu------------------*/\n.headermenu{\n    background-image: url('~/images/bg_header.jpg');   \n}\n/*----------end headermenu-------------------*/\n/*----------bg body menu------------------*/\n.bodymenu{\n    background-image: url('~/images/2011177.png');   \n}\n/*----------end bg body menu-------------------*/\n/*----------bg bgmap------------------*/\n.bgmap{\n    background-image: url('~/images/testmap.png');   \n}\n/*----------end bgmap-------------------*/\n/* --------------------------------------- */\n\n.textAlignVer{\n    display:block;\n    filter: flipv fliph;\n    /* background-image : url('../images/close-icon.png'); */\n    -webkit-transform: rotate(-90deg); \n    -moz-transform: rotate(-90deg); \n    transform: rotate(-360deg); \n    position:relative;\n    width:20px;\n    white-space:nowrap;\n    font-size:12px;\n    margin-bottom:10px;\n}\n/* --------------------------------------- */\n/* ---------------wait data-------------------------- */\n.overlay {   \n    position: absolute;  \n    top: 0px;   \n    left: 0px;  \n    background: #ccc;   \n    width: 100%;   \n    height: 100%;   \n    opacity: .75;   \n    filter: alpha(opacity=75);   \n    -moz-opacity: .75;  \n    z-index: 999;  \n    background: #fff url(~/images/KUJoe.gif) 50% 50% no-repeat;\n}   \n.main-contain{\n    position: absolute;  \n    top: 0px;   \n    left: 0px;  \n    width: 100%;   \n    height: 100%;   \n    overflow: hidden;\n}\n/* ---------------wait data-------------------------- */\n/* ---------------------set font waitdata------------------------------ */\n.set_thai1{\n    margin-left: 6%;\n}\n/* ---------------------end set font waitdata------------------------------ */\n\n.bgtest{\n        background-color: #4CAF50; \n      }", ""]);

; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./map.css") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "style", path: "./map.css" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./map.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var orientation = __webpack_require__("../node_modules/nativescript-orientation/orientation.js")
var Observable = __webpack_require__("../node_modules/tns-core-modules/data/observable/observable.js")
var bluetooth = __webpack_require__("../node_modules/nativescript-bluetooth/bluetooth.js")
const appSettings = __webpack_require__("../node_modules/tns-core-modules/application-settings/application-settings.js")
const labelModule = __webpack_require__("../node_modules/tns-core-modules/ui/label/label.js")
const timerModule = __webpack_require__("../node_modules/tns-core-modules/timer/timer.js")
var insomnia = __webpack_require__("../node_modules/nativescript-insomnia/insomnia.js")
__webpack_require__("../node_modules/nativescript-dom/dom.js")
var Vibrate = __webpack_require__("../node_modules/nativescript-vibrate/vibrate.js").Vibrate
var vibrator = new Vibrate()
const frameModule = __webpack_require__("../node_modules/tns-core-modules/ui/frame/frame.js")
var fs = __webpack_require__("../node_modules/tns-core-modules/file-system/file-system.js")
var bghttp = __webpack_require__("../node_modules/nativescript-background-http/background-http.js")
var session = bghttp.session("image-upload")
var imageSourceModule = __webpack_require__("../node_modules/tns-core-modules/image-source/image-source.js")
var imagepicker = __webpack_require__("../node_modules/nativescript-imagepicker/imagepicker.js")
const httpModule = __webpack_require__("../node_modules/tns-core-modules/http/http.js")
var toasty = __webpack_require__("../node_modules/nativescript-toasty/toasty.js").Toasty;

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
let tempMaps = {"maps":[
    {"uuid":"3D:84:E8:A8:EF:ED","uuid_ios":"505171D0-BBF9-4D74-BE62-6EDD210913F0","x":42,"y":40,"name":"point_7","route":1,"map_status":"N"},
    {"uuid":"43:2F:ED:5C:3C:EF","uuid_ios":"9BB645AC-EB26-B5DB-1787-BBE99F457491","x":47,"y":35,"name":"point_8","route":1,"map_status":"N"},
    {"uuid":"46:B2:20:8D:30:CB","uuid_ios":"BD03F4F4-45B0-00A7-EFFB-BF76C0F98B2E","x":50,"y":22,"name":"point_10_End","route":1,"map_status":"E"},
    {"uuid":"8F:4A:1C:93:03:D7","uuid_ios":"AEA9ED04-A9B9-2768-EA03-A9A6943FE82B","x":52,"y":29,"name":"point_9","route":1,"map_status":"N"},
    {"uuid":"90:D0:E9:5C:CB:CB","uuid_ios":"9B16F74B-B1A6-21E2-614F-EEA5C319933D","x":35,"y":44,"name":"point_6","route":1,"map_status":"N"},
    {"uuid":"B4:26:7C:71:C8:D7","uuid_ios":"505171D0-BBF9-4D74-BE62-6EDD210913F0","x":26,"y":77,"name":"point_1","route":1,"map_status":"S"},
    {"uuid":"B6:7D:7C:9F:A7:E2","uuid_ios":"5F2EADF2-E85B-9FAC-ED9A-9ED74BEFD946","x":35,"y":54,"name":"point_4","route":1,"map_status":"D"},
    {"uuid":"E1:51:83:0B:70:DE","uuid_ios":"E3FA7F93-9235-60F7-B724-8C39032D16F4","x":38,"y":59,"name":"point_3","route":1,"map_status":"N"},
    {"uuid":"E3:6B:F7:31:5B:FE","uuid_ios":"51398D28-A39A-CCD3-056B-8E99263EDC04","x":36,"y":68,"name":"point_2","route":1,"map_status":"N"},
    {"uuid":"EC:18:B9:C0:CF:C3","uuid_ios":"5303A213-E1D4-D346-0C72-E5511AA259AB","x":33,"y":49,"name":"point_5","route":1,"map_status":"N"}
]}
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
            img = imageSourceModule.fromFile("~/images/r"+route+".jpg");
            var folder = fs.knownFolders.documents();
            var path = fs.path.join(folder.path, "r"+route+".jpg");
            appSettings.setString("bgMaps", path)
            img.saveToFile(path)
            mapLayout.backgroundImage = path
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
        var toast = new toasty({ text:text});
        toast.show()   
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
                var toast = new toasty({ text:"update success"});
                toast.show()   
        
            }
            else if(response.status == "Fail"){
                var toast = new toasty({ text:"update fail"});
                toast.show()   
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
    var toast = new toasty({ text:"Update fail please try again"});
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
       
       var toast = new toasty({ text:"Update success"});
       toast.show()   
   
   }
   else if(e.data["status"]== "Fail"){
       var toast = new toasty({ text:"Update fail"});
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
  } ; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./map.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./map.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./map.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Page loaded=\"pageLoaded\" unloaded=\"pageUnloaded\" id=\"Page\">\n  <!-- <ActionBar title=\"AOT\" class=\"action-bar\"></ActionBar> -->\n  <ActionBar android.iconVisibility=\"always\"  title=\"off-track alert system\"  class=\"header actions \" ></ActionBar>\n  <!-- Your UI components go here -->\n  \n  <DockLayout  width=\"100%\" height=\"100%\" class=\"fas\">\n    <AbsoluteLayout dock=\"top\" width=\"100%\" height=\"90%\" class=\"map\">\n    <ScrollView width=\"100%\"  height=\"100%\">\n        <AbsoluteLayout  width=\"100%\"  height=\"100%\" id=\"mapLayout\" >\n\n        </AbsoluteLayout>\n    </ScrollView>\n      <StackLayout width=\"80%\" height=\"26%\" class=\"detail-map\" id=\"detailMap\">\n        <Label text=\"&#xf057;\" width=\"30\" height=\"20\"  marginTop=\"5%\" marginLeft=\"88%\" tap=\"hideDetailMap\" class=\"close\"></Label>\n        <StackLayout id=\"testView\" width=\"100%\" orientation=\"horizontal\">\n          <Label text=\"&#xf3c5;\" color=\"#C70039\" class=\"map-mark\"></Label>\n          <Label text=\"{{ roadName }}\" class=\"track-name\"></Label>\n        </StackLayout>\n        \n        <StackLayout class=\"hr-light m-t-10\" width=\"90%\"></StackLayout>\n        <StackLayout width=\"100%\" orientation=\"horizontal\">\n          <Label class=\"user-RSSI\" text=\"&#xf09e;\"></Label>\n          <Label text=\"{{ rssi }}\" class=\"rssis\"></Label>\n          <Label class=\"user-road\" text=\"&#xf018;\"></Label>\n          <Label class=\"road-total\" text=\" {{ km +'m'}}\"></Label>\n        </StackLayout>\n      </StackLayout>\n      \n      <StackLayout width=\"26\" height=\"26\"  marginTop=\"3%\" marginLeft=\"90%\" class=\"detailMapBtn\" id=\"detailMapBtn\" tap=\"showDetailMap\">\n        <Label text=\"&#xf06e;\"></Label>\n      </StackLayout>\n      <!-- dlg User-->\n      <StackLayout class=\"lg-dialog\" tap=\"hideDialog\" id=\"user-data\">\n        <FlexboxLayout stretchLastChild=\"true\" class=\"dialog\" tap=\"noop\">\n\n            <FlexboxLayout  orientation=\"horizontal\" class=\"title headermenu\" height=\"11%\">\n             <Image src=\"~/images/icons8-resume-96.png\" text=\"User information\" stretch=\"none\"  width=\"15%\" height=\"12%\" class=\"\" horizontalAlignment=\"center\"></Image>\n                <Label text=\"Profile\" class=\"text \"></Label>\n                <Button  horizontalAlignment=\"left\" tap=\"hideDialog\" text=\"&#xf057;\"  class=\"close  left  \"/>\n            </FlexboxLayout>\n       \n            <StackLayout class=\"content bg_dlg_User \" id=\"txtData\" visibility=\"collapse\">\n\n              <StackLayout width=\"100%\" orientation=\"horizontal\" class=\"m-t-25p\">\n                <Label text=\"id card\" class=\"txt-s\"></Label>\n                <TextField hint=\"\" text=\"{{ idCard }}\"  class=\"selectbox_id\" id=\"idCard\"/>\n              </StackLayout>\n\n              <StackLayout width=\"100%\" orientation=\"horizontal\" class=\"m-t-10\">\n                <Label text=\"Name\" class=\"txt-s\"></Label>\n                <TextField hint=\"\" class=\"selectbox_user\" text=\"{{ userName }}\" id=\"userName\"/>\n              </StackLayout>\n\n              <StackLayout width=\"100%\" orientation=\"horizontal\" class=\"m-t-10\">\n                <Label text=\"Tel\" class=\"txt-s\"></Label>\n                <TextField hint=\"\" class=\"selectbox_tel\" text=\"{{ phoneNumber }}\" keyboardType=\"number\" id=\"phoneNumber\"/>\n              </StackLayout>\n\n              <Button  tap=\"setUser\" text=\"Edit\" class=\"action buttonsedit m-t-15p\"/>\n\n            </StackLayout>\n            <!-- PIC DATA -->\n           <StackLayout class=\"content bg_dlg_User\" id=\"picData\" visibility=\"collapse\">\n            \n              <StackLayout>\n                <Label text=\"Card\" class=\"txt-s\"></Label>\n                <AbsoluteLayout>\n                  <Image id=\"userCard\"  class=\"user-pic\" width=\"250\" height=\"150\"></Image>\n                  <Label  width=\"24\" height=\"24\" class=\"camera\" text=\"&#xf030;\" tap=\"changPic\"></Label>\n                </AbsoluteLayout>\n              </StackLayout>\n              <StackLayout width=\"100%\" orientation=\"horizontal\" class=\"lable_left\">\n                <Label text=\"Tel\" class=\"txt-s \"></Label>\n                <TextField hint=\"\" class=\"txt-f\" text=\"{{ phoneNumber }}\" keyboardType=\"number\" id=\"phoneNumber\"/>\n              </StackLayout>\n              \n              <FlexboxLayout class=\"\">\n                   <Button  tap=\"setUser\" text=\"Edit\"  class=\"action buttonsedit2 \"/>\n              </FlexboxLayout>\n\n          </StackLayout>\n<!-- ************************************************************************************************************************************************ -->\n          \n<!-- ************************************************************************************************************************************************ -->\n        </FlexboxLayout>\n      </StackLayout> \n      <!-- dlg User-->\n\n      <!-- dlg Alert-->\n      <StackLayout class=\"lg-dialog\" tap=\"hideDialog\" id=\"user-alert\">\n        <FlexboxLayout stretchLastChild=\"true\" class=\"dialog\" tap=\"noop\">\n            <FlexboxLayout orientation=\"horizontal\" class=\"title\">\n                <label text=\"Alert\" class=\"text\"/>\n                <Button  tap=\"hideDialog\" text=\"&#xf00d;\" class=\"close\"/>\n            </FlexboxLayout>\n            <StackLayout class=\"content\">\n              <StackLayout width=\"100%\" orientation=\"horizontal\" class=\"m-t-10p\">\n                <Label text=\"Out of the way\" class=\"txt-s\"></Label>\n              </StackLayout>\n            </StackLayout>\n            <FlexboxLayout class=\"actions\">\n                <Button  tap=\"hideDialog\" text=\"OK\" class=\"action\"/>\n            </FlexboxLayout>\n        </FlexboxLayout>\n      </StackLayout> \n      <!-- dlg Alert-->\n\n      <!-- dlg offline-->\n      <StackLayout class=\"lg-dialog\" tap=\"hideDialog\" id=\"user-offline\">\n        <FlexboxLayout stretchLastChild=\"true\" class=\"dialog\" tap=\"noop\">\n            <FlexboxLayout orientation=\"horizontal\" class=\"title\">\n                <label text=\"offline\" class=\"text\"/>\n                <Button  tap=\"hideDialog\" text=\"&#xf00d;\" class=\"close\"/>\n            </FlexboxLayout>\n            <StackLayout class=\"content\">\n              <StackLayout width=\"100%\" orientation=\"horizontal\" class=\"m-t-10p\">\n                <Label textWrap=\"true\" text=\"You are in offline mode. The map may not be updated.\" class=\"txt-s\"></Label>\n              </StackLayout>\n            </StackLayout>\n            <FlexboxLayout class=\"actions\">\n                <Button  tap=\"hideDialog\" text=\"OK\" class=\"action\"/>\n            </FlexboxLayout>\n        </FlexboxLayout>\n      </StackLayout> \n      <!-- dlg offline-->\n\n      <!-- dlg checkdata-->\n      <StackLayout class=\"lg-dialog\" tap=\"noop\" id=\"checkdata\">\n        <FlexboxLayout stretchLastChild=\"true\" class=\"dialog\" tap=\"noop\">\n            <FlexboxLayout orientation=\"horizontal\" class=\"title\">\n                <label text=\"wait data\" class=\"text\"/>\n            </FlexboxLayout>\n            \n            <StackLayout class=\"content\">\n             \n              <StackLayout width=\"100%\" orientation=\"horizontal\" class=\"m-t-10p\">\n                <Label text=\"wait data...\" class=\"txt-s \"></Label>  \n                <ActivityIndicator busy=\"true\" class=\"m-t-30p\"/><!-- londing-->\n              </StackLayout>\n                  <StackLayout class=\"content\"> \n                      <Label textWrap=\"true\" text=\"*Press REFRESH to load map data and search for devices.\" class=\"set_thai1\"></Label>\n                   </StackLayout>\n            </StackLayout>\n            <FlexboxLayout class=\"actions\">\n                <Button  tap=\"reMap\" text=\"refresh \" class=\"action\" backgroundColor=\"#ADF873\"/>\n            </FlexboxLayout>\n        </FlexboxLayout>\n      </StackLayout> \n      <!-- dlg checkdata-->\n\n      <!-- dlg countUser-->\n      <StackLayout class=\"lg-dialog\" tap=\"noop\" id=\"countUser\">\n        <FlexboxLayout stretchLastChild=\"true\" class=\"dialog\" tap=\"noop\">\n           <FlexboxLayout  orientation=\"horizontal\" class=\"title headermenu\" height=\"11%\">\n              <label text=\"Users\" class=\"text\"/>\n              <Button  horizontalAlignment=\"left\" tap=\"hideDialog\" text=\"&#xf057;\"  class=\"close  left  \"/>\n            </FlexboxLayout>\n            <StackLayout class=\"content\">\n                <StackLayout orientation=\"horizontal\" class=\"total-users\">\n                  <Label text=\"Total : \" width=\"80%\"></Label>\n                  <Label text=\"{{countUser[0].countUser}}\"  width=\"20%\"></Label>\n                </StackLayout>\n              <ListView items=\"{{ countUser }}\" itemTap=\"removeCard\" class=\"users-selector\">\n                  <ListView.itemTemplate  let-country=\"item\" let-i=\"index\" let-odd=\"odd\" let-even=\"even\" class=\"list-item\">\n                      <StackLayout class=\"item\" orientation=\"horizontal\">\n                          <Label text=\"&#xf21d;\" color=\"#3898E7\" class=\"txt-count-icon\"></Label>\n                          <Label text=\"{{ phone_number }}\" class=\"txt-count-name\"></Label>\n                          <Label text=\"{{ name }}\" class=\"txt-count-point\"></Label>\n                      </StackLayout>\n                  </ListView.itemTemplate>\n              </ListView>\n            </StackLayout>\n\n        </FlexboxLayout>\n      </StackLayout> \n      <!-- dlg countUser-->\n\n      <!-- dlg Start-->\n      <StackLayout class=\"lg-dialog\" tap=\"noop\" id=\"pointStart\">\n        <FlexboxLayout stretchLastChild=\"true\" class=\"dialog\" tap=\"noop\">\n            <FlexboxLayout orientation=\"horizontal\" class=\"title\">\n                <label text=\"Point Start\" class=\"text\"/>\n                <Button  tap=\"hideDialog\" text=\"&#xf00d;\" class=\"close\"/>\n            </FlexboxLayout>\n            <StackLayout class=\"content\">\n              <Label text=\"Start...\" class=\"txt-s\"></Label>\n            </StackLayout>\n            <FlexboxLayout class=\"actions\">\n                <Button  tap=\"hideDialog\" text=\"OK\" class=\"action\"/>\n            </FlexboxLayout>\n        </FlexboxLayout>\n      </StackLayout> \n      <!-- dlg Start-->\n\n      <!-- dlg End-->\n      <StackLayout class=\"lg-dialog\" tap=\"noop\" id=\"pointEnd\">\n        <FlexboxLayout stretchLastChild=\"true\" class=\"dialog\" tap=\"noop\">\n            <FlexboxLayout orientation=\"horizontal\" class=\"title\">\n                <label text=\"Point End\" class=\"text\"/>\n                <Button  tap=\"hideDialog\" text=\"&#xf00d;\" class=\"close\"/>\n            </FlexboxLayout>\n            <StackLayout class=\"content\">\n              <Label text=\"End...\" class=\"txt-s\"></Label>\n            </StackLayout>\n            <FlexboxLayout class=\"actions\">\n                <Button tap=\"hideDialog\" text=\"OK\" class=\"action\"/>\n            </FlexboxLayout>\n        </FlexboxLayout>\n      </StackLayout> \n      <!-- dlg End-->\n\n      <!-- dlg aboute-->\n      <StackLayout class=\"lg-dialog\" tap=\"noop\" id=\"aboute\">\n        <FlexboxLayout   stretchLastChild=\"true\" class=\"dialog  \" tap=\"noop\">\n          <FlexboxLayout  orientation=\"horizontal\" class=\"title headermenu\" height=\"11%\">\n              <label text=\"Aboute\" class=\"text\"/>\n              <Button  horizontalAlignment=\"left\" tap=\"hideDialog\" text=\"&#xf057;\"  class=\"close  left  \"/>\n          </FlexboxLayout>\n          <StackLayout class=\"content\">\n            <ScrollView width=\"100%\"  height=\"100%\">\n             <GridLayout class=\"m-10\" rows=\"auto auto auto auto auto\">\n                <StackLayout  row=\"0\" orientation=\"horizontal\">\n                  <Label text=\"&#xf2bb;\" class=\"aboute-txt\"></Label><Label class=\"aboute-txt-detail\" width=\"100%\" height=\"auto\" text=\"personal Information\"></Label>\n                </StackLayout>\n                <StackLayout class=\"m-10\" row=\"1\" orientation=\"horizontal\">\n                  <Label text=\"&#xf554;\" class=\"aboute-txt\"></Label><Label class=\"aboute-txt-detail\"  height=\"auto\" text=\"Total number of people on the route\" textWrap=\"true\"></Label>\n                </StackLayout>\n                <StackLayout class=\"m-10\" row=\"2\" orientation=\"horizontal\">\n                  <Label text=\"&#xf09e;\" class=\"aboute-txt\"></Label><Label class=\"aboute-txt-detail\"  height=\"auto\" text=\"Signal strength bluetooth (RSSI)\" textWrap=\"true\"></Label>\n                </StackLayout>\n                <StackLayout class=\"m-10\" row=\"3\" orientation=\"horizontal\">\n                  <Label text=\"&#xf018;\" class=\"aboute-txt\"></Label><Label class=\"aboute-txt-detail\"  height=\"auto\" text=\"The distance from the current point\" textWrap=\"true\"></Label>\n                </StackLayout>\n                <Image row=\"4\" src=\"~/images/FITMlogo.png\" class=\"fas t-28 m-10 aboute-logo\"></Image>\n              </GridLayout>\n            </ScrollView>\n          </StackLayout>\n        </FlexboxLayout>\n      </StackLayout> \n      <!-- dlg aboute-->\n\n\n    </AbsoluteLayout>\n        <StackLayout width=\"100%\"  class=\"bgmap \">\n      <FlexboxLayout  width=\"100%\" height=\"100%\" class=\" map-menu \">\n          <Label text=\"&#xf2bb;\" tap=\"user\"></Label>\n          <Label text=\"&#xf554;\" tap=\"userCount\"></Label>\n           <Label text=\"&#xf059;\" tap=\"aboute\"></Label>\n      </FlexboxLayout>\n     </StackLayout>\n    \n  </DockLayout>\n  <!--REMOVE_CARD-->\n</Page>\n"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./map.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./map.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"name":"nativescript-template-tutorial","version":"4.1.0","main":"app.js"};

/***/ }),

/***/ "./register.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".txt-h{\n    font-size: 28;\n    text-align: center;\n    margin-top: 10%;\n}\n\n.txt-s{\n    font-size: 18;\n    margin: 5%,0,0,8%;\n}\n\n.txt-f{\n    width:50%;\n}\n.m-t-4p{\n    margin-top: 4%;\n   \n}\n.m-t-5p{\n    margin-top: 5%;\n   \n}\n.m-t-10p{\n    margin-top: 10%;\n   \n}\n.m-t-20p{\n    margin-top: 20%;\n   \n}\n.m-t-30p{\n    margin-top: 30%;\n    \n}\n.m-t-36p{\n    margin-top: 36%;\n    \n}\n.m-t-40p{\n    margin-top: 40%;\n   \n}\n\n.btn-scan{\n    width: 42%;\n}\n\n.btn-submit{\n    width: 42%;\n}\n\n.bg{\n    background-image: url(\"~/images/pexels-photo-1282264.jpg\");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n}\n\n\n.lg-dialog {\n    width:100%;\n    height:100%;\n    background-color: rgba(0,0,0,0.5);\n    visibility: collapse;\n}\n.lg-dialog .dialog {\n    /* background-image: url('~/images/bg.png'); */\n    background-position: center;\n    background-size: cover;\n    border-radius: 4;\n    width: 280;\n    height: 400;\n    margin: 48 auto;\n    /* background-color: #fff; */\n    background-color: rgba(0,0,0,0.5);\n    flex-direction: column;\n}\n.dialog .title{\n    position: center;\n    width: 100%;\n    height: 40;\n    padding:0;\n    margin-bottom: 8;\n    flex-shrink: 0;   \n}\n\n.title .text {\n    font-size: 20;\n    color: black;\n    margin: 0;\n    padding: 6 8 0 8;\n    flex-grow: 1;\n}\n.close {\n    /* flex-shrink: 0; */\n    width: 40;\n    margin: 4;\n    /* font-size: 16; */\n    text-align: center;\n}\n\n\n.content {\n    flex-grow: 1;\n}\n.actions {\n    flex-shrink: 0;\n    color: rgb(78, 71, 71);\n    margin: 0 0;\n    height: 50;\n}\n.actions .action {\n    flex-grow: 1;\n}\n.header{\n\n    background-image: url('~/images/bg_header.jpg');\n}\n/*-----------------form textbox---------------------------------------------*/\n\n.selectbox{\n    width: 80%;\n    height: 15%;\n    margin: 5px 10%;\n    display: inline-block;\n    border: 1px solid #ccc;\n    text-align: center;\n    border-radius: 50px;\n    padding: 15px;\n    background-color: rgba(154, 163, 163, 0.562);\n    transform: translateY(4px);\n    font-size: 15px;\n  }\n  /*---------------------------------------------------------------------------*/\n  \n/* -----------------------buttons scan card----------------------------------- */\n\n.btn-group .buttons2 {\n    background-color: #4CAF50; \n    border: 1px solid green;\n    color:white;\n    padding: 15px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    cursor: pointer;\n  }\n  .buttons2 {\n\n    width: 80%;\n    height: 11%;\n    border: 1px solid rgb(0, 0, 0);\n    display: inline-block;\n    padding: 10px 30px;\n    font-size: 15px;\n    cursor: pointer;\n    text-align: center;\n    text-decoration: none;\n    outline: none;\n    color: #fff;\n    background-color: rgba(222, 230, 230, 0.815);\n    border: 2px;\n    border-radius: 50px;\n    box-shadow: 0 9px #999;\n  }\n  .buttons2:hover {background-color: #3e8e41}\n    \n  .buttons2:active {\n    background-color: #3e8e41;\n    box-shadow: 0 5px #666;\n    transform: translateY(4px);\n  }\n  \n  /* ----------------------------------------------------------- */\n  \n/* -----------------------buttons----------------------------------- */\n.btn-group .buttons {\n    background-color: rgb(22, 240, 240); \n    border: 1px solid green;\n    color:white;\n    padding: 15px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    cursor: pointer;\n  }\n  \n  .buttons {\n    width: 80%;\n    /* height: 10%; */\n    display: inline-block;\n    padding: 15px 35px;\n    font-size: 16px;\n    cursor: pointer;\n    text-align: center;\n    text-decoration: none;\n    outline: none;\n    color: #fff;\n    background-color: rgba(20, 197, 94, 0.747);\n    border: 1px;\n    border-radius: 50px;\n    box-shadow: 0 9px #999;\n  }\n\n  .buttons:hover {background-color: #3e8e41}\n  \n  .buttons:active {\n    background-color: #bcc4bc;\n    box-shadow: 0 5px #666;\n    transform: translateY(4px);\n  }\n  /* ----------------------------------------------------------- */\n  /*--------------------------ActionBar------------------------------------*/\n  .ActionBar{\n    background-color: rgba(163, 162, 162, 0.623);\n  }\n  \n  /*-----------------------end---ActionBar------------------------------------*/\n  /*---------------------------icon id-------------------------------------*/\n  .iconID {\n    height: 10%;\n    margin: 2% 0% 0% -10%;\n    width: 500px;\n    position: relative;\n    resize: vertical;\n    overflow: auto;\n}\n /*----------------------------------------------------------------*/\n  .bgtest{\n    background-color: #4CAF50; \n  }", ""]);

; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./register.css") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "style", path: "./register.css" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./register.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var imageModule = __webpack_require__("../node_modules/tns-core-modules/ui/image/image.js")
var camera = __webpack_require__("../node_modules/nativescript-camera/camera.js")
var Observable = __webpack_require__("../node_modules/tns-core-modules/data/observable/observable.js")
const frameModule = __webpack_require__("../node_modules/tns-core-modules/ui/frame/frame.js");
const appSettings = __webpack_require__("../node_modules/tns-core-modules/application-settings/application-settings.js")
const Telephony = __webpack_require__("../node_modules/nativescript-telephony/telephony.js")
var bghttp = __webpack_require__("../node_modules/nativescript-background-http/background-http.js");
var session = bghttp.session("image-upload");
var imageSourceModule = __webpack_require__("../node_modules/tns-core-modules/image-source/image-source.js");
var fs = __webpack_require__("../node_modules/tns-core-modules/file-system/file-system.js");
var orientation = __webpack_require__("../node_modules/nativescript-orientation/orientation.js")
var toasty = __webpack_require__("../node_modules/nativescript-toasty/toasty.js").Toasty;


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
    // appSettings.clear();
    orientation.setOrientation("portrait")
    // var en = java.net.NetworkInterface.getNetworkInterfaces();
    // for(var obj in en){
    //     var intf = en.nextElement();
    //     var enumIpAddr = intf.getName();
    //     if(intf.getHardwareAddress()){
    //         console.log(enumIpAddr)
    //         console.log(toHexString(intf.getHardwareAddress()))
    //     }
    //     if(enumIpAddr == "wlan0"){
    //         let macAddress = intf.getHardwareAddress()
    //         if (macAddress == null) {
    //             return "";
    //         }
    //         // console.log(toHexString(macAddress))
    //         pageData.bleId = toHexString(macAddress)
    //         appSettings.setString("bleId",pageData.bleId+"")
    //     }
    // }
    // function toHexString(byteArray) {
    //     let i = 0
    //     return Array.from(byteArray, function(byte) {
    //         i++
    //         if(i == 6 )byte = byte-1
    //       return ('0' + (byte & 0xFF).toString(16)).slice(-2);
    //     }).join('')
    // }
    if(appSettings.getString("userData")){
        let userData = JSON.parse(appSettings.getString("userData"))
        if(userData.phoneNumber != ""){
            const navigationEntry = {
                moduleName: "map",
                context: { mode: "online" },
                animated: false
            };
            frameModule.getFrameById('topmost').navigate(navigationEntry);
        }
    } 

    page = args.object
    page.bindingContext = pageData
    
    Telephony.Telephony().then(function(resolved) {
        pageData.deviceId = resolved.deviceId
    }).catch(function(error) {
        console.error('error >', error)
        console.dir(error);
    })
    // let idCardLength = []
    // let userNameLength = []
    // let phoneNumberLength = []

    let idCard = page.getViewById('idCard')
    let userName = page.getViewById('userName')
    let phoneNumber = page.getViewById('phoneNumber')
    btnCamera = page.getViewById('btnCamera')
    mRegis = page.getViewById('mRegis')
    mRegisBtn = page.getViewById('mRegisBtn')
    btnofflineMode = page.getViewById('btnofflineMode')
    dlgPageMap = page.getViewById('user-pageMap')

    // idCardLength[0] = new android.text.InputFilter.LengthFilter(13)
    // userNameLength[0] = new android.text.InputFilter.LengthFilter(30)
    // phoneNumberLength[0] = new android.text.InputFilter.LengthFilter(10)

    // idCard.android.setFilters(idCardLength)
    // userName.android.setFilters(userNameLength)
    // phoneNumber.android.setFilters(phoneNumberLength)
    
}
exports.takeCamera =  function() {
    if (pageData.phoneNumber.length < 10) {
        var toast = new toasty({ text: 'Please enter your mobile phone number to complete 10 digits.' });
        toast.show()
        return 
    } 
    camera.requestPermissions().then(
        function success() {
            var options = {keepAspectRatio: false, saveToGallery: false };
            camera.takePicture(options)   
            .then(function (imageAsset) {
                dlgPageMap.style.visibility = 'visible'
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
                    { name: "phoneNumber", value: pageData.phoneNumber },
                    { name: "deviceId", value: pageData.deviceId },
                    { name: "bleId", value: pageData.bleId },
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
            var toast = new toasty({ text: "register success"});
            toast.show()
            const navigationEntry = {
                moduleName: "map",
                context: { mode: "online" },
                animated: false
            };
            frameModule.getFrameById('topmost').navigate(navigationEntry);
        }
        else if(response.status == "Fail"){
            var toast = new toasty({ text: "register fail"});
            toast.show()
        }
        else if(response.status == "DuplicateUser"){
            console.log("DuplicateUser")
        }
    }).catch((e) => {
        console.log('***fetch error***')
        var toast = new toasty({ text: "not send data to server"});
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
        var toast = new toasty({ text:'Please enter your mobile phone number to complete 10 digits.'});
        toast.show()
        return         
    } 
    appSettings.setString("userData", JSON.stringify(jsonData))
    console.log(jsonData)
    var toast = new toasty({ text:"offline mode success"});
    toast.show()
    const navigationEntry = {
        moduleName: "map",
        context: { mode: "offline" },
        animated: false
    };
    frameModule.getFrameById('topmost').navigate(navigationEntry);
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
     dlgPageMap.style.visibility = 'collapse'
     var toast = new toasty({ text:"regiser fail not send picture to server"});
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
        jsonData.bleId = pageData.bleId
        jsonData.phoneNumber = pageData.phoneNumber
        jsonData.pic = pageData.phoneNumber+'.jpg'
        dlgPageMap.style.visibility = 'collapse'
        appSettings.setString("userData", JSON.stringify(jsonData))

        var toast = new toasty({ text:"register success"});
        toast.show()

        const navigationEntry = {
            moduleName: "map",
            context: { mode: "online" },
            animated: false
        };
        frameModule.getFrameById('topmost').navigate(navigationEntry);
}
    else if(e.data["status"]== "Fail"){
        dlgPageMap.style.visibility = 'collapse'

        var toast = new toasty({ text:"register fail"});
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
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./register.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./register.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./register.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Page loaded=\"pageLoaded\" id=\"Page\" >\n  <!-- <ActionBar title=\"AOT\" class=\"action-bar\"></ActionBar> -->\n  <ActionBar  title=\"off-track alert system\"  class=\"header actions \" ></ActionBar>\n  <!-- Your UI components go here -->\n  <AbsoluteLayout  width=\"100%\"  height=\"100%\" >\n    <StackLayout width=\"100%\" height=\"100%\" class=\"fas bg  \" >\n\n      <StackLayout id=\"mRegis\" visibility=\"collapse\" class=\" m-t-30p\">\n        <GridLayout columns=\"auto, *, auto\" rows=\"auto,0\" verticalAlignment=\"top\" >\n            <Image src=\"~/images/baseline_vpn_key_black_24dp.png\" stretch=\"none\" class=\"iconID  \"></Image>\n            <TextField  height=\"11%\" hint=\"ID Card\" class=\"selectbox \"   text=\"{{ idCard }}\"  id=\"idCard\"/>\n        </GridLayout>\n        <GridLayout columns=\"auto, *, auto\" rows=\"auto,0\" verticalAlignment=\"top\" >\n            <Image src=\"~/images/baseline_person_black_18dp.png\" stretch=\"none\" class=\"iconID\"></Image>\n            <TextField  height=\"11%\" hint=\"UserName\" class=\"selectbox \" text=\"{{ userName }}\" id=\"userName\"/>\n        </GridLayout>\n          <GridLayout columns=\"auto, *, auto\" rows=\"auto,0\"  class=\"\">\n            <Image src=\"~/images/baseline_local_phone_black_18dp.png\" stretch=\"none\" class=\"iconID\"></Image>\n            <TextField text=\"&#xf030;\" abItem=\"title: 'Tab 1', iconSource: 'res://icon'\"  height=\"13%\" hint=\"telephone number\" class=\"selectbox \" keyboardType=\"number\" text=\"{{ phoneNumber }}\" id=\"phoneNumber\"/>\n        </GridLayout>\n        <button text=\"Submit\" class=\"m-t-10p btn-submit buttons\" tap=\"register\" id=\"mRegisBtn\" ></button>\n        <button text=\"Back\" class=\"m-t-4p buttons2\" tap=\"showInput\" tap=\"showMRegis\"></button>\n      </StackLayout>\n\n      <StackLayout id=\"mRegis\" visibility=\"\" class=\" m-t-36p\">\n        <GridLayout columns=\"auto, *, auto\" rows=\"auto,0\" verticalAlignment=\"top\"  class=\"\" >\n            <Image src=\"~/images/baseline_local_phone_black_18dp.png\" stretch=\"none\" class=\"iconID\"></Image>\n            <TextField text=\"&#xf030;\" abItem=\"title: 'Tab 1', iconSource: 'res://icon'\"  height=\"12%\" hint=\"telephone number\" class=\"selectbox \" keyboardType=\"number\" text=\"{{ phoneNumber }}\" id=\"phoneNumber\"/>\n        </GridLayout>\n      </StackLayout>\n        <button text=\"Submit\" class=\"m-t-10p btn-submit buttons\" tap=\"register\" id=\"mRegisBtn\" visibility=\"collapse\"></button>\n        <button text=\"Manule Register\" class=\"m-t-5p buttons\" tap=\"showInput\" tap=\"showMRegis\"></button>\n        <button text=\"&#xf030; Scan Card Register\" class=\"m-t-10 buttons\" tap=\"takeCamera\" id=\"btnCamera\"></button>\n        <button text=\"Offline Mode\" class=\"m-t-10 buttons\" tap=\"offlineMode\" id=\"btnofflineMode\"></button>\n    </StackLayout>\n\n    <!-- dlg pageMap-->\n    <StackLayout class=\"lg-dialog\" tap=\"hideDialog\" id=\"user-pageMap\">\n      <FlexboxLayout stretchLastChild=\"true\" class=\"dialog\" tap=\"noop\">\n          <FlexboxLayout orientation=\"horizontal\" class=\"title\">\n              <label text=\"Load\" class=\"text\"/>\n          </FlexboxLayout>\n          <StackLayout class=\"content\">\n            <StackLayout width=\"100%\" class=\"m-t-10p\">\n                <ActivityIndicator busy=\"true\" class=\"m-t-30p\"/><!-- londing-->\n                <Label textWrap=\"true\" text=\"Loeding...\" class=\"loading\"></Label>\n            </StackLayout>\n          </StackLayout>\n          <FlexboxLayout class=\"actions\">\n          </FlexboxLayout>\n      </FlexboxLayout>\n    </StackLayout> \n    <!-- dlg pageMap-->\n\n  </AbsoluteLayout>\n</Page>\n"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./register.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./register.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ })

},[["./app.js","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLiBzeW5jIG5vbnJlY3Vyc2l2ZSBeXFwuXFwvYXBwXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkIiwid2VicGFjazovLy9cXGJfW1xcdy1dKlxcLilzY3NzKSQiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vbWFpbi1wYWdlLmpzIiwid2VicGFjazovLy8uL21haW4tcGFnZS54bWwiLCJ3ZWJwYWNrOi8vLy4vbWFwLmNzcyIsIndlYnBhY2s6Ly8vLi9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbWFwLnhtbCIsIndlYnBhY2s6Ly8vLi9yZWdpc3Rlci5jc3MiLCJ3ZWJwYWNrOi8vLy4vcmVnaXN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVnaXN0ZXIueG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRTs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEg7Ozs7Ozs7QUNoQ0EseUVBQTJCLG1CQUFPLENBQUMsZ0RBQWdEO0FBQ25GO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLG9HQUE2Rjs7QUFFL0c7QUFDQSxjQUFjLFFBQVMsbUNBQW1DLHVEQUF1RCx1QkFBdUIsSUFBSSxVQUFVLHdEQUF3RCx1QkFBdUIsSUFBSSxVQUFVLHFEQUFxRCx1QkFBdUIsSUFBSTs7QUFFblUsQztBQUNBLElBQUksS0FBVTs7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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsaUI7QUFDQSxhO0FBQ0EsUztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixxQ0FBcUM7QUFDdkQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsRTs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0wsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtB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O0FBQ0wsQzs7Ozs7Ozs7O0FDMVZBLHF2QkFBcXZCLFVBQVUsNlVBQTZVLFlBQVkscVJBQXFSLHVKQUF1SixlQUFlLDBtQkFBMG1CLHVKQUF1SixlQUFlLGlXQUFpVyxpakM7QUFDcG9GLElBQUksS0FBVTs7QUFFZDtBQUNBO0FBQ0EsMkJBQTJCLHlDQUF5QztBQUNwRSxLQUFLO0FBQ0wsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLmNzc1wiOiBcIi4vYXBwLmNzc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSB7IC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBpZDtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgXlxcXFwuXFxcXC9hcHBcXFxcLihjc3N8c2Nzc3xsZXNzfHNhc3MpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9hcHAuY3NzXCI6IFwiLi9hcHAuY3NzXCIsXG5cdFwiLi9hcHAuanNcIjogXCIuL2FwcC5qc1wiLFxuXHRcIi4vbWFpbi1wYWdlLmpzXCI6IFwiLi9tYWluLXBhZ2UuanNcIixcblx0XCIuL21haW4tcGFnZS54bWxcIjogXCIuL21haW4tcGFnZS54bWxcIixcblx0XCIuL21hcC5jc3NcIjogXCIuL21hcC5jc3NcIixcblx0XCIuL21hcC5qc1wiOiBcIi4vbWFwLmpzXCIsXG5cdFwiLi9tYXAueG1sXCI6IFwiLi9tYXAueG1sXCIsXG5cdFwiLi9yZWdpc3Rlci5jc3NcIjogXCIuL3JlZ2lzdGVyLmNzc1wiLFxuXHRcIi4vcmVnaXN0ZXIuanNcIjogXCIuL3JlZ2lzdGVyLmpzXCIsXG5cdFwiLi9yZWdpc3Rlci54bWxcIjogXCIuL3JlZ2lzdGVyLnhtbFwiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSB7IC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBpZDtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgcmVjdXJzaXZlICg/PCFcXFxcYkFwcF9SZXNvdXJjZXNcXFxcYi4qKVxcXFwuKHhtbHxjc3N8anN8KD88IVxcXFwuZFxcXFwuKXRzfCg/PCFcXFxcYl9bXFxcXHctXSpcXFxcLilzY3NzKSRcIjsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBJbXBvcnRzXG5leHBvcnRzLmkocmVxdWlyZShcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNyFuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIiksIFwiXCIpO1xuXG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIFlvdXIgQ1NTIGdvZXMgaGVyZSAqL1xcbi5mYXIge1xcbiAgICBmb250LWZhbWlseTogRm9udCBBd2Vzb21lIDUgRnJlZSwgZmEtcmVndWxhci00MDA7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7IFxcbn1cXG5cXG4uZmFiIHtcXG4gICAgZm9udC1mYW1pbHk6IEZvbnQgQXdlc29tZSA1IEJyYW5kcywgZmEtYnJhbmRzLTQwMDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDsgXFxufVxcblxcbi5mYXMge1xcbiAgICBmb250LWZhbWlseTogRm9udCBBd2Vzb21lIDUgRnJlZSwgZmEtc29saWQtOTAwO1xcbiAgICBmb250LXdlaWdodDogOTAwOyBcXG59XFxuXCIsIFwiXCJdKTtcblxuOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2FwcC5jc3NcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic3R5bGVcIiwgcGF0aDogXCIuL2FwcC5jc3NcIiB9KTtcbiAgICB9KTtcbn0gIiwiXG4gICAgICAgICAgICByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2xvYWQtYXBwbGljYXRpb24tY3NzLXJlZ3VsYXJcIikoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgICAgICBjb25zdCBobXJVcGRhdGUgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2htclwiKS5obXJVcGRhdGU7XG4gICAgICAgICAgICBnbG9iYWwuX19pbml0aWFsSG1yVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIGdsb2JhbC5fX2htclN5bmNCYWNrdXAgPSBnbG9iYWwuX19vbkxpdmVTeW5jO1xuXG4gICAgICAgICAgICBnbG9iYWwuX19vbkxpdmVTeW5jID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGhtclVwZGF0ZSgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2ggPSBmdW5jdGlvbih7IHR5cGUsIHBhdGggfSA9IHt9KSB7XG4gICAgICAgICAgICAgICAgaWYgKGdsb2JhbC5fX2luaXRpYWxIbXJVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBnbG9iYWwuX19obXJTeW5jQmFja3VwKHsgdHlwZSwgcGF0aCB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGhtclVwZGF0ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGdsb2JhbC5fX2luaXRpYWxIbXJVcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gcmVxdWlyZS5jb250ZXh0KFwifi9cIiwgdHJ1ZSwgLyg/PCFcXGJBcHBfUmVzb3VyY2VzXFxiLiopXFwuKHhtbHxjc3N8anN8KD88IVxcLmRcXC4pdHN8KD88IVxcYl9bXFx3LV0qXFwuKXNjc3MpJC8pO1xuICAgICAgICAgICAgZ2xvYmFsLnJlZ2lzdGVyV2VicGFja01vZHVsZXMoY29udGV4dCk7XG4gICAgICAgICAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KGNvbnRleHQuaWQsICgpID0+IHsgXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSE1SOiBBY2NlcHQgbW9kdWxlICdcIiArIGNvbnRleHQuaWQgKyBcIicgZnJvbSAnXCIgKyBtb2R1bGUuaWQgKyBcIidcIik7IFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2J1bmRsZS1lbnRyeS1wb2ludHNcIik7XG4gICAgICAgIHZhciBhcHBsaWNhdGlvbk1vZHVsZSA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvblwiKTtcbmFwcGxpY2F0aW9uTW9kdWxlLnJ1bih7IG1vZHVsZU5hbWU6IFwicmVnaXN0ZXJcIiB9KTs7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vYXBwLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vYXBwLmpzXCIgfSk7XG4gICAgfSk7XG59IFxuICAgIFxuICAgICAgICBcbiAgICAgICAgIiwiZXhwb3J0cy5wYWdlTG9hZGVkID0gZnVuY3Rpb24oKSB7XG5cbn07XG47IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vbWFpbi1wYWdlLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vbWFpbi1wYWdlLmpzXCIgfSk7XG4gICAgfSk7XG59ICIsIlxubW9kdWxlLmV4cG9ydHMgPSBcIjxQYWdlIGxvYWRlZD1cXFwicGFnZUxvYWRlZFxcXCI+XFxuICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJNeSBBcHBcXFwiIGNsYXNzPVxcXCJhY3Rpb24tYmFyXFxcIj48L0FjdGlvbkJhcj5cXG4gIDwhLS0gWW91ciBVSSBjb21wb25lbnRzIGdvIGhlcmUgLS0+XFxuPC9QYWdlPlxcblwiOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL21haW4tcGFnZS54bWxcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwibWFya3VwXCIsIHBhdGg6IFwiLi9tYWluLXBhZ2UueG1sXCIgfSk7XG4gICAgfSk7XG59ICIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm1hcHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmOyBcXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJ+L2ltYWdlcy9tYXAxLmpwZ1xcXCIpOyAqL1xcbiAgICAvKiBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IFxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAgKi9cXG4gICAgLyogdHJhbnNmb3JtOiBzY2FsZSgxKTsgICovXFxufVxcbi5tYXAtbGF5b3V0e1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbn1cXG4uYWJvdXRlLWxvZ297XFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxuICAgIG1hcmdpbi10b3A6IDUlO1xcbn1cXG4uYWJvdXRlLXR4dHtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICBtYXJnaW46IDUlIDIlIDAlIDUlO1xcbiAgICBcXG59XFxuLmFib3V0ZS10eHQtZGV0YWlse1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIG1hcmdpbjogNSUgMTUlIDAlIDAlO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG4ubWFwLW1lbnUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcbn1cXG4vKiBkbGcgKi9cXG4ubGctZGlhbG9nIHtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgaGVpZ2h0OjEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcXG4gICAgdmlzaWJpbGl0eTogY29sbGFwc2U7XFxufVxcbi5sZy1kaWFsb2cgLmRpYWxvZyB7XFxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnfi9pbWFnZXMvYmcucG5nJyk7ICovXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNDtcXG4gICAgd2lkdGg6IDI4MDtcXG4gICAgaGVpZ2h0OiA0MDA7XFxuICAgIG1hcmdpbjogNDggYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmRpYWxvZyAudGl0bGV7XFxuICAgIHBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDQwO1xcbiAgICBwYWRkaW5nOjA7XFxuICAgIG1hcmdpbi1ib3R0b206IDg7XFxuICAgIGZsZXgtc2hyaW5rOiAwOyAgIFxcbn1cXG5cXG4udGl0bGUgLnRleHQge1xcbiAgICBmb250LXNpemU6IDIwO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogNiA4IDAgODtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG4uY2xvc2Uge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZToxOHB4O1xcbiAgICBjb2xvcjpyZ2JhKDExNiwgMTE0LCAxMTQsIDAuODYzKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkwNCk7IFxcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuLmFjdGlvbnMge1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgY29sb3I6IHJnYig3OCwgNzEsIDcxKTtcXG4gICAgbWFyZ2luOiAwIDA7XFxuICAgIGhlaWdodDogNTA7XFxufVxcblxcbi5oZWFkZXJ7XFxuXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnfi9pbWFnZXMvYmdfaGVhZGVyLmpwZycpO1xcbn1cXG5cXG4uYWN0aW9ucyAuYWN0aW9uIHtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG4vKiBkbGcgKi9cXG4ubWFwLW1lbnUgTGFiZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ34vaW1hZ2VzL2JnX2hlYWRlci5qcGcnKTsgKi9cXG4gICAgd2lkdGg6IDMzLjQlO1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxcHg7XFxuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAxcHg7XFxuICAgIG1hcmdpbi10b3A6IDclO1xcbn1cXG4uZGV0YWlsLW1hcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICAgICBib3JkZXItcmFkaXVzOiAxMCU7XFxuICAgICAgIG1hcmdpbjogMTAlIDEwJSAwJSAxMCU7XFxuICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbi5kZXRhaWxNYXBCdG57XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk0LCAyNDEsIDIzKTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwJTtcXG4gICAgICAgIC8qIGZvbnQtc2l6ZTogMjhweDsgKi9cXG4gICAgICAgIHZpc2liaWxpdHkgOiBjb2xsYXBzZTtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB9XFxuICAgIFxcbi5sb2NhdGlvbiB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIG1hcmdpbjogODAlIDEwJSAxMCUgODAlO1xcbiAgICB9XFxuXFxuXFxuLmxvY2F0aW9uIExhYmVsIHtcXG4gICAgbWFyZ2luLXRvcDogMTIlO1xcbn1cXG4ubWFwLW1hcmsge1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIC8qIGNvbG9yOiBicm93bjsgKi9cXG4gICAgbWFyZ2luOiAxMCUgMCUgMCUgNSU7XFxufVxcbi50cmFjay1uYW1lIHtcXG4gICAgbWFyZ2luOiAyMCUgMCUgMCUgNSU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XFxufVxcbi51c2VyLVJTU0kge1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIG1hcmdpbjogMTAlIDAlIDAlIDUlO1xcbn1cXG4ucnNzaXMge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIG1hcmdpbjogMjAlIDAlIDAlIDUlO1xcbn1cXG4udXNlci1yb2FkIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBtYXJnaW46IDIwJSAwJSAwJSAxNSU7XFxufVxcbi5yb2FkLXRvdGFsIHtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBtYXJnaW46IDIwJSAwJSAwJSA1JTtcXG59XFxuXFxuLm0tdC0xMHB7XFxuICAgIG1hcmdpbi10b3A6IDEwJTtcXG59XFxuLm0tdC0xNXB7XFxuICAgIG1hcmdpbi10b3A6IDE1JTtcXG59XFxuLm0tdC0yNXB7XFxuICAgIG1hcmdpbi10b3A6IDI1JTtcXG59XFxuLm0tdC0zMHB7XFxuICAgIG1hcmdpbi10b3A6IDMwJTtcXG5cXG59XFxuLm0tdC01MHB7XFxuICAgIG1hcmdpbi10b3A6IDUwJTtcXG5cXG59XFxuLmNlbnRlcntcXG4gICAgXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgbWFyZ2luOiAwJSAwJSAwJSA0NSU7XFxufVxcbi5tLXQtNDdwe1xcbiAgICBtYXJnaW4tdG9wOiAzNSU7XFxufVxcbi5tLXQtNXB7XFxuICAgIG1hcmdpbi10b3A6IDUlO1xcbn1cXG5cXG4udHh0LXN7XFxuICAgIGZvbnQtc2l6ZTogMTg7XFxuICAgIG1hcmdpbjogNSUsMCwwLDglO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi51c2Vycy1zZWxlY3RvciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIC8qIGJhY2tncm91bmQ6IGdyZXk7ICovXFxufVxcblxcbi5pdGVte1xcbiAgICAvKmJhY2tncm91bmQ6ICNmZmY7Ki9cXG4gICAgcGFkZGluZzogNTZweDtcXG59XFxuXFxuLnR4dC1jb3VudC1pY29uIHtcXG4gICAgLyogbWFyZ2luLWxlZnQ6IDEwcHg7ICovXFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgd2lkdGg6IDIwJTtcXG5cXG59XFxuLnR4dC1jb3VudC1uYW1lIHtcXG4gICAgLyogbWFyZ2luLWxlZnQ6IDYwcHg7ICovXFxuICAgIHdpZHRoOiA0MCU7XFxufVxcbi50eHQtY291bnQtcG9pbnQge1xcbiAgICAvKiBtYXJnaW4tbGVmdDogNjBweDsgKi9cXG4gICAgd2lkdGg6IDQwJTtcXG59XFxuXFxuLnVzZXItcGlje1xcbiAgICBtYXJnaW46IDUlO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTApO1xcbn1cXG4udG90YWwtdXNlcnN7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4uY2FtZXJhe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLXRvcDogNDAlO1xcbiAgICBtYXJnaW4tbGVmdDogNjAlO1xcbiAgICBmb250LXNpemU6IDI0O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwO1xcbn1cXG4ucG9pbnR7XFxuICAgIHdpZHRoOjI4O1xcbiAgICBoZWlnaHQ6IDI4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzLCA5OSwgMTApO1xcbiAgICBib3JkZXItd2lkdGg6IDE7XFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi50eHQtbWFwe1xcbiAgICBmb250LXNpemU6IDE0O1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcbi8qLS0tLS0tLS0tLS0tLS0tLS1mb3JtIHRleHRib3gtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbi5zZWxlY3Rib3hfaWR7XFxuICAgIHdpZHRoOiA2NCU7XFxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcXG4gICAgbWFyZ2luOiA4cHggMDtcXG4gICAgXFxuICB9XFxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWVuZCBmb3JtIHRleHRib3gtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuICAvKi0tLS0tLS0tLS0tLS0tLS0tZm9ybSB0ZXh0Ym94LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4uc2VsZWN0Ym94X3VzZXJ7XFxuICAgIHdpZHRoOiA2OCU7XFxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcXG4gICAgbWFyZ2luOiA4cHggMDtcXG4gICAgXFxuICB9XFxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWVuZCBmb3JtIHRleHRib3gtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuICAvKi0tLS0tLS0tLS0tLS0tLS0tZm9ybSB0ZXh0Ym94LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4uc2VsZWN0Ym94X3RlbHtcXG4gICAgd2lkdGg6IDc2JTtcXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xcbiAgICBtYXJnaW46IDhweCAwO1xcbiAgICBcXG4gIH1cXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tZW5kIGZvcm0gdGV4dGJveC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1wcm9maWxlbGVmdC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuICAubGVmdCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNyU7XFxuICAgIHdpZHRoOiAxNSU7XFxuICB9XFxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tZW5kIGxlZnQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1pY29uIGNvbG9yLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbiAgLmljb25fd2lmaV9jb2xvcntcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDgsIDgsIDgpO1xcbiAgICBjb2xvcjogcmdiKDQzLCAyNiwgMTkyKTtcXG4gIH1cXG4gXFxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1lbmQtaWNvbiBjb2xvci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4gICAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWljb24gY29sb3ItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuICAuaWNvbl9sb2NhdGlvbl9jb2xvcntcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDgsIDgsIDgpO1xcbiAgICBjb2xvcjogcmdiKDE1MSwgOCwgOCk7XFxuICB9XFxuIFxcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tZW5kLWljb24gY29sb3ItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuICAgICAgICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0taWNvbiBjb2xvci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4gIC5pY29uX3JvYWRfY29sb3J7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig4LCA4LCA4KTtcXG4gICAgY29sb3I6IHJnYig2MSwgNTksIDU5KTtcXG4gIH1cXG4gXFxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1lbmQtaWNvbiBjb2xvci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4gICAgICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1pY29uIGNvbG9yLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbiAgLmljb25fS21fY29sb3J7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig4LCA4LCA4KTtcXG4gICAgY29sb3I6IHJnYigxNTEsIDgsIDgpO1xcbiAgfVxcbiBcXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWVuZC1pY29uIGNvbG9yLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gYmcgZGxnIFVzZXItLS0tLS0tLS0tLS0tLS0tLS0qL1xcbiAgICAuYmdfZGxnX1VzZXJ7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMiwgMjQwLCAyMzIsIDAuNzc0KTsgXFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ34vaW1hZ2VzL2JnX3Byb2ZpbGUuanBnJyk7XFxuICAgICAgfVxcbiAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0tYmcgZGxnIFVzZXItLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4gICAvKi0tLS0tLS0tLS0tYnRuIGVkaXQtLS0tLS0tLS0tLS0tLS0tKi9cXG4gICAuYnV0dG9uc2VkaXQge1xcbiAgICBtYXJnaW4tdG9wOiAxNSU7XFxuICAgIG1hcmdpbi1sZWZ0OiAzJTtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgcGFkZGluZzogMTVweCAzNXB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2OSwgMTgyLCA3OCk7XFxuICAgIGJvcmRlcjogMXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDlweCAjOTk5O1xcbiAgfVxcbiAgLmJ1dHRvbnNlZGl0MiB7XFxuICAgIG1hcmdpbi10b3A6IDMzJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgaGVpZ2h0OiAzMCU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgcGFkZGluZzogMTVweCAzNXB4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2OSwgMTgyLCA3OCk7XFxuICAgIGJvcmRlcjogMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDlweCAjOTk5O1xcbiAgfVxcbiAgLyotLS0tLS0tLS0tLWVuZCBidG4gZWRpdC0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4gIC5sYWJsZV9sZWZ0e1xcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xcbiAgfVxcbiBcXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS1mb250IHNpemUgbWVudS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbiAgLnNpemVfaWNvbl9tZW51e1xcbiAgIHdpZHRoOiAyMCU7XFxuICAgaGVpZ2h0OiAyMCU7ICAgXFxuICB9XFxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLWVuZCAtZm9udCBzaXplIG1lbnUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5cXG4vKi0tLS0tLS0tLS1oZWFkZXJtZW51LS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4uaGVhZGVybWVudXtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCd+L2ltYWdlcy9iZ19oZWFkZXIuanBnJyk7ICAgXFxufVxcbi8qLS0tLS0tLS0tLWVuZCBoZWFkZXJtZW51LS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuLyotLS0tLS0tLS0tYmcgYm9keSBtZW51LS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4uYm9keW1lbnV7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnfi9pbWFnZXMvMjAxMTE3Ny5wbmcnKTsgICBcXG59XFxuLyotLS0tLS0tLS0tZW5kIGJnIGJvZHkgbWVudS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbi8qLS0tLS0tLS0tLWJnIGJnbWFwLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4uYmdtYXB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnfi9pbWFnZXMvdGVzdG1hcC5wbmcnKTsgICBcXG59XFxuLyotLS0tLS0tLS0tZW5kIGJnbWFwLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLnRleHRBbGlnblZlcntcXG4gICAgZGlzcGxheTpibG9jaztcXG4gICAgZmlsdGVyOiBmbGlwdiBmbGlwaDtcXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZSA6IHVybCgnLi4vaW1hZ2VzL2Nsb3NlLWljb24ucG5nJyk7ICovXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTsgXFxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTsgXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpOyBcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxuICAgIHdpZHRoOjIwcHg7XFxuICAgIHdoaXRlLXNwYWNlOm5vd3JhcDtcXG4gICAgZm9udC1zaXplOjEycHg7XFxuICAgIG1hcmdpbi1ib3R0b206MTBweDtcXG59XFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLyogLS0tLS0tLS0tLS0tLS0td2FpdCBkYXRhLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4ub3ZlcmxheSB7ICAgXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgIFxcbiAgICB0b3A6IDBweDsgICBcXG4gICAgbGVmdDogMHB4OyAgXFxuICAgIGJhY2tncm91bmQ6ICNjY2M7ICAgXFxuICAgIHdpZHRoOiAxMDAlOyAgIFxcbiAgICBoZWlnaHQ6IDEwMCU7ICAgXFxuICAgIG9wYWNpdHk6IC43NTsgICBcXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTc1KTsgICBcXG4gICAgLW1vei1vcGFjaXR5OiAuNzU7ICBcXG4gICAgei1pbmRleDogOTk5OyAgXFxuICAgIGJhY2tncm91bmQ6ICNmZmYgdXJsKH4vaW1hZ2VzL0tVSm9lLmdpZikgNTAlIDUwJSBuby1yZXBlYXQ7XFxufSAgIFxcbi5tYWluLWNvbnRhaW57XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgIFxcbiAgICB0b3A6IDBweDsgICBcXG4gICAgbGVmdDogMHB4OyAgXFxuICAgIHdpZHRoOiAxMDAlOyAgIFxcbiAgICBoZWlnaHQ6IDEwMCU7ICAgXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi8qIC0tLS0tLS0tLS0tLS0tLXdhaXQgZGF0YS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tc2V0IGZvbnQgd2FpdGRhdGEtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4uc2V0X3RoYWkxe1xcbiAgICBtYXJnaW4tbGVmdDogNiU7XFxufVxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLWVuZCBzZXQgZm9udCB3YWl0ZGF0YS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5iZ3Rlc3R7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwOyBcXG4gICAgICB9XCIsIFwiXCJdKTtcblxuOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL21hcC5jc3NcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic3R5bGVcIiwgcGF0aDogXCIuL21hcC5jc3NcIiB9KTtcbiAgICB9KTtcbn0gIiwidmFyIG9yaWVudGF0aW9uID0gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LW9yaWVudGF0aW9uJylcbnZhciBPYnNlcnZhYmxlID0gcmVxdWlyZShcImRhdGEvb2JzZXJ2YWJsZVwiKVxudmFyIGJsdWV0b290aCA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtYmx1ZXRvb3RoXCIpXG5jb25zdCBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiKVxuY29uc3QgbGFiZWxNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYWJlbFwiKVxuY29uc3QgdGltZXJNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy90aW1lclwiKVxudmFyIGluc29tbmlhID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1pbnNvbW5pYVwiKVxucmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1kb21cIilcbnZhciBWaWJyYXRlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC12aWJyYXRlXCIpLlZpYnJhdGVcbnZhciB2aWJyYXRvciA9IG5ldyBWaWJyYXRlKClcbmNvbnN0IGZyYW1lTW9kdWxlID0gcmVxdWlyZShcInVpL2ZyYW1lXCIpXG52YXIgZnMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiKVxudmFyIGJnaHR0cCA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtYmFja2dyb3VuZC1odHRwXCIpXG52YXIgc2Vzc2lvbiA9IGJnaHR0cC5zZXNzaW9uKFwiaW1hZ2UtdXBsb2FkXCIpXG52YXIgaW1hZ2VTb3VyY2VNb2R1bGUgPSByZXF1aXJlKFwiaW1hZ2Utc291cmNlXCIpXG52YXIgaW1hZ2VwaWNrZXIgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWltYWdlcGlja2VyXCIpXG5jb25zdCBodHRwTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiKVxudmFyIHRvYXN0eSA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC10b2FzdHknKS5Ub2FzdHk7XG5cbnZhciBjb250ZXh0ID0gaW1hZ2VwaWNrZXIuY3JlYXRlKHsgbW9kZTogXCJzaW5nbGVcIiB9KVxubGV0IGxvZ0RhdGEgPSB7fVxuXG4vLzE5Mi4xNjguNDMuNTA6MzAwMVxuY29uc3QgQVBJX1VSTCA9IFwiaHR0cDovLzIwMi4xMjkuMTYuNjg6Nzc3N1wiXG52YXIgcGFnZURhdGEgPSBuZXcgT2JzZXJ2YWJsZS5mcm9tT2JqZWN0KHtcbiAgICByb2FkTmFtZTogXCJcIixcbiAgICBtYXA6e30sXG4gICAgaWRDYXJkOlwiXCIsXG4gICAgcnNzaTpcIlwiLFxuICAgIHVzZXJOYW1lOlwiXCIsXG4gICAgcGhvbmVOdW1iZXI6XCJcIixcbiAgICBkZXZpY2VJZDpcIlwiLFxuICAgIHV1aWQ6XCJcIixcbiAgICBjb3VudFVzZXI6W10sXG4gICAgcm91dGU6MCxcbiAgICBrbTowLFxuICAgIHBpY0NhcmQ6JycsXG4gICAgYmxlSWQ6IG51bGwsXG59KVxubGV0IHVybE1hcCA9IEFQSV9VUkwgKyAnL21hcHMnXG5sZXQgZGxnID0gbnVsbFxubGV0IGRsZ0FsZXJ0ID0gbnVsbFxubGV0IGRsZ09mZmxpbmUgPSBudWxsXG5sZXQgbWFwTGF5b3V0ID0gbnVsbFxubGV0IHZpZXdNYXAgPSBudWxsXG5sZXQgZGV0YWlsTWFwID0gbnVsbCBcbmxldCBkZXRhaWxNYXBCdG4gPSBudWxsXG5sZXQgb2xkUG9pbk5hbWUgPSBudWxsXG5sZXQgcnNzaSA9IG51bGxcbmxldCBwb2ludFdhbGtNYXAgPSBudWxsIFxubGV0IHRpbWVfbG9vcCAgPSAgbnVsbFxubGV0IHRpbWVfbG9vcF9sb2cgID0gIG51bGxcbmxldCBhcnJNYXBzID0gbnVsbFxubGV0IGRsZ2NvdW50VXNlciA9IG51bGxcbmxldCBwb2ludFN0YXJ0ID0gdHJ1ZVxubGV0IHBvaW50RW5kID0gdHJ1ZVxubGV0IGRsZ1N0YXJ0ID0gbnVsbFxubGV0IGRsZ0VuZCA9IG51bGxcbmxldCByb2FkTmFtZSA9IG51bGxcbmxldCB0eHREYXRhID0gbnVsbFxubGV0IHBpY0RhdGEgPSBudWxsXG5sZXQgcG9pbnREYW5nZXIgPSBmYWxzZVxubGV0IHVzZXJDYXJkID0gbnVsbFxubGV0IGltYWdlQXNzZXRDaGFuZyA9IHtfYW5kcm9pZDogbnVsbH1cbmxldCB0ZW1wTWFwcyA9IHtcIm1hcHNcIjpbXG4gICAge1widXVpZFwiOlwiM0Q6ODQ6RTg6QTg6RUY6RURcIixcInV1aWRfaW9zXCI6XCI1MDUxNzFEMC1CQkY5LTRENzQtQkU2Mi02RUREMjEwOTEzRjBcIixcInhcIjo0MixcInlcIjo0MCxcIm5hbWVcIjpcInBvaW50XzdcIixcInJvdXRlXCI6MSxcIm1hcF9zdGF0dXNcIjpcIk5cIn0sXG4gICAge1widXVpZFwiOlwiNDM6MkY6RUQ6NUM6M0M6RUZcIixcInV1aWRfaW9zXCI6XCI5QkI2NDVBQy1FQjI2LUI1REItMTc4Ny1CQkU5OUY0NTc0OTFcIixcInhcIjo0NyxcInlcIjozNSxcIm5hbWVcIjpcInBvaW50XzhcIixcInJvdXRlXCI6MSxcIm1hcF9zdGF0dXNcIjpcIk5cIn0sXG4gICAge1widXVpZFwiOlwiNDY6QjI6MjA6OEQ6MzA6Q0JcIixcInV1aWRfaW9zXCI6XCJCRDAzRjRGNC00NUIwLTAwQTctRUZGQi1CRjc2QzBGOThCMkVcIixcInhcIjo1MCxcInlcIjoyMixcIm5hbWVcIjpcInBvaW50XzEwX0VuZFwiLFwicm91dGVcIjoxLFwibWFwX3N0YXR1c1wiOlwiRVwifSxcbiAgICB7XCJ1dWlkXCI6XCI4Rjo0QToxQzo5MzowMzpEN1wiLFwidXVpZF9pb3NcIjpcIkFFQTlFRDA0LUE5QjktMjc2OC1FQTAzLUE5QTY5NDNGRTgyQlwiLFwieFwiOjUyLFwieVwiOjI5LFwibmFtZVwiOlwicG9pbnRfOVwiLFwicm91dGVcIjoxLFwibWFwX3N0YXR1c1wiOlwiTlwifSxcbiAgICB7XCJ1dWlkXCI6XCI5MDpEMDpFOTo1QzpDQjpDQlwiLFwidXVpZF9pb3NcIjpcIjlCMTZGNzRCLUIxQTYtMjFFMi02MTRGLUVFQTVDMzE5OTMzRFwiLFwieFwiOjM1LFwieVwiOjQ0LFwibmFtZVwiOlwicG9pbnRfNlwiLFwicm91dGVcIjoxLFwibWFwX3N0YXR1c1wiOlwiTlwifSxcbiAgICB7XCJ1dWlkXCI6XCJCNDoyNjo3Qzo3MTpDODpEN1wiLFwidXVpZF9pb3NcIjpcIjUwNTE3MUQwLUJCRjktNEQ3NC1CRTYyLTZFREQyMTA5MTNGMFwiLFwieFwiOjI2LFwieVwiOjc3LFwibmFtZVwiOlwicG9pbnRfMVwiLFwicm91dGVcIjoxLFwibWFwX3N0YXR1c1wiOlwiU1wifSxcbiAgICB7XCJ1dWlkXCI6XCJCNjo3RDo3Qzo5RjpBNzpFMlwiLFwidXVpZF9pb3NcIjpcIjVGMkVBREYyLUU4NUItOUZBQy1FRDlBLTlFRDc0QkVGRDk0NlwiLFwieFwiOjM1LFwieVwiOjU0LFwibmFtZVwiOlwicG9pbnRfNFwiLFwicm91dGVcIjoxLFwibWFwX3N0YXR1c1wiOlwiRFwifSxcbiAgICB7XCJ1dWlkXCI6XCJFMTo1MTo4MzowQjo3MDpERVwiLFwidXVpZF9pb3NcIjpcIkUzRkE3RjkzLTkyMzUtNjBGNy1CNzI0LThDMzkwMzJEMTZGNFwiLFwieFwiOjM4LFwieVwiOjU5LFwibmFtZVwiOlwicG9pbnRfM1wiLFwicm91dGVcIjoxLFwibWFwX3N0YXR1c1wiOlwiTlwifSxcbiAgICB7XCJ1dWlkXCI6XCJFMzo2QjpGNzozMTo1QjpGRVwiLFwidXVpZF9pb3NcIjpcIjUxMzk4RDI4LUEzOUEtQ0NEMy0wNTZCLThFOTkyNjNFREMwNFwiLFwieFwiOjM2LFwieVwiOjY4LFwibmFtZVwiOlwicG9pbnRfMlwiLFwicm91dGVcIjoxLFwibWFwX3N0YXR1c1wiOlwiTlwifSxcbiAgICB7XCJ1dWlkXCI6XCJFQzoxODpCOTpDMDpDRjpDM1wiLFwidXVpZF9pb3NcIjpcIjUzMDNBMjEzLUUxRDQtRDM0Ni0wQzcyLUU1NTExQUEyNTlBQlwiLFwieFwiOjMzLFwieVwiOjQ5LFwibmFtZVwiOlwicG9pbnRfNVwiLFwicm91dGVcIjoxLFwibWFwX3N0YXR1c1wiOlwiTlwifVxuXX1cbmluc29tbmlhLmtlZXBBd2FrZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coXCJJbnNvbW5pYSBpcyBhY3RpdmVcIik7XG59KVxubGV0IGRvY3VtZW50cyA9IGZzLmtub3duRm9sZGVycy5kb2N1bWVudHMoKVxubGV0IHBpY1BhdGggPSBudWxsXG5sZXQgdGVtcFBhdGggPSBudWxsXG5leHBvcnRzLnBhZ2VMb2FkZWQgPSBmdW5jdGlvbihhcmdzKSB7XG4gICAgaWYoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYmxlSWRcIikpXG4gICAgICAgIHBhZ2VEYXRhLmJsZUlkID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYmxlSWRcIilcblxuICAgIGlmKHRpbWVfbG9vcClcbiAgICAgICAgdGltZXJNb2R1bGUuY2xlYXJJbnRlcnZhbCh0aW1lX2xvb3ApO1xuICAgIGlmKHRpbWVfbG9vcF9sb2cpXG4gICAgICAgIHRpbWVyTW9kdWxlLmNsZWFySW50ZXJ2YWwodGltZV9sb29wX2xvZyk7XG5cbiAgICBwYWdlID0gYXJncy5vYmplY3RcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gcGFnZURhdGFcbiAgICBjb25zdCBuYXZpZ2F0aW9uQ29udGV4dCA9IHBhZ2UubmF2aWdhdGlvbkNvbnRleHRcbiAgICBjb25zb2xlLmxvZyhuYXZpZ2F0aW9uQ29udGV4dClcbiAgICBvcmllbnRhdGlvbi5zZXRPcmllbnRhdGlvbihcInBvcnRyYWl0XCIpXG4gICAgZGxnID0gcGFnZS5nZXRWaWV3QnlJZCgndXNlci1kYXRhJylcbiAgICBkbGdBbGVydCA9IHBhZ2UuZ2V0Vmlld0J5SWQoJ3VzZXItYWxlcnQnKVxuICAgIGRsZ09mZmxpbmUgPSBwYWdlLmdldFZpZXdCeUlkKCd1c2VyLW9mZmxpbmUnKVxuICAgIGRsZ0NoZWNrZGF0YSA9IHBhZ2UuZ2V0Vmlld0J5SWQoJ2NoZWNrZGF0YScpXG4gICAgZGV0YWlsTWFwID0gcGFnZS5nZXRWaWV3QnlJZCgnZGV0YWlsTWFwJylcbiAgICBkZXRhaWxNYXBCdG4gPSBwYWdlLmdldFZpZXdCeUlkKCdkZXRhaWxNYXBCdG4nKVxuICAgIGRsZ2NvdW50VXNlciA9IHBhZ2UuZ2V0Vmlld0J5SWQoJ2NvdW50VXNlcicpXG4gICAgZGxnU3RhcnQgPSBwYWdlLmdldFZpZXdCeUlkKCdwb2ludFN0YXJ0JylcbiAgICBkbGdBYm91dGUgPSBwYWdlLmdldFZpZXdCeUlkKCdhYm91dGUnKVxuICAgIGRsZ0VuZCA9IHBhZ2UuZ2V0Vmlld0J5SWQoJ3BvaW50RW5kJylcbiAgICBwaWNEYXRhID0gcGFnZS5nZXRWaWV3QnlJZCgncGljRGF0YScpXG4gICAgdHh0RGF0YSA9IHBhZ2UuZ2V0Vmlld0J5SWQoJ3R4dERhdGEnKVxuICAgIFxuICAgIGlmKCFhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJvZmZsaW5lXCIpKSB7XG4gICAgICAgIGlmKG5hdmlnYXRpb25Db250ZXh0Lm1vZGUgPT0gXCJvZmZsaW5lXCIpIHtcbiAgICAgICAgICAgIGRsZ09mZmxpbmUuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJ1xuICAgICAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwibWFwc1wiLCBKU09OLnN0cmluZ2lmeSh0ZW1wTWFwcykpXG4gICAgICAgIH1cbiAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwib2ZmbGluZVwiLCBcImZhbHNlXCIpXG4gICAgfSAgIFxuXG4gICAgcm9tb3ZlTWFwKClcbiAgICBjb25zdCBhcnJheVRvT2JqZWN0ID0gKGFycmF5KSA9PlxuICAgIGFycmF5LnJlZHVjZSgob2JqLCBpdGVtKSA9PiB7XG4gICAgICAgIG9ialtpdGVtLnV1aWRdID0gaXRlbVxuICAgICAgICByZXR1cm4gb2JqXG4gICAgfSwge30pXG4gICAgXG4gICAgaWYoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwidXNlckRhdGFcIikpe1xuICAgICAgICBsZXQganNvbkRhdGEgPSBKU09OLnBhcnNlKGFwcFNldHRpbmdzLmdldFN0cmluZyhcInVzZXJEYXRhXCIpKVxuICAgICAgICBwYWdlRGF0YS5pZENhcmQgPSBqc29uRGF0YS5pZENhcmRcbiAgICAgICAgcGFnZURhdGEudXNlck5hbWUgPSBqc29uRGF0YS51c2VyTmFtZVxuICAgICAgICBwYWdlRGF0YS5waG9uZU51bWJlciA9IGpzb25EYXRhLnBob25lTnVtYmVyXG4gICAgICAgIHBhZ2VEYXRhLmRldmljZUlkID0ganNvbkRhdGEuZGV2aWNlSWRcbiAgICAgICAgcGFnZURhdGEucGljQ2FyZCA9IGpzb25EYXRhLnBpY1xuICAgIH1cbiAgICBcbiAgICBsb2dEYXRhLmRldmljZUlkID0gcGFnZURhdGEuZGV2aWNlSWRcbiAgICBnZXRNYXBzKClcbiAgICBmdW5jdGlvbiBnZXRNYXBzKCl7XG4gICAgICAgIGZldGNoKHVybE1hcCkudGhlbihyID0+IHIuanNvbigpKVxuICAgICAgICAudGhlbihqc29uRGF0YSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhqc29uRGF0YSlcbiAgICAgICAgYXJyTWFwcyA9IGpzb25EYXRhXG4gICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhcIm1hcHNcIiwgSlNPTi5zdHJpbmdpZnkoanNvbkRhdGEpKVxuICAgICAgICBqc29uRGF0YSA9IGFycmF5VG9PYmplY3QoanNvbkRhdGEubWFwcylcbiAgICAgICAgcGFnZURhdGEubWFwID0ganNvbkRhdGFcbiAgICAgICAgfSkuY2F0Y2goZSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnKioqZmV0Y2ggZXJyb3IqKionKVxuICAgICAgICB9KVxuICAgIH1cbiAgICBcbiAgICBpZihhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJtYXBzXCIpKXtcbiAgICAgICAgYXJyTWFwcyA9IEpTT04ucGFyc2UoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwibWFwc1wiKSlcbiAgICAgICAgcGFnZURhdGEubWFwID0gYXJyYXlUb09iamVjdChhcnJNYXBzLm1hcHMpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGxnQ2hlY2tkYXRhLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSdcbiAgICB9XG4gICAgbGV0IGlkQ2FyZExlbmd0aCA9IFtdXG4gICAgbGV0IHVzZXJOYW1lTGVuZ3RoID0gW11cbiAgICBsZXQgcGhvbmVOdW1iZXJMZW5ndGggPSBbXVxuXG4gICAgbGV0IGlkQ2FyZCA9IHBhZ2UuZ2V0Vmlld0J5SWQoJ2lkQ2FyZCcpXG4gICAgbGV0IHVzZXJOYW1lID0gcGFnZS5nZXRWaWV3QnlJZCgndXNlck5hbWUnKVxuICAgIGxldCBwaG9uZU51bWJlciA9IHBhZ2UuZ2V0Vmlld0J5SWQoJ3Bob25lTnVtYmVyJylcbiAgICB1c2VyQ2FyZCA9IHBhZ2UuZ2V0Vmlld0J5SWQoJ3VzZXJDYXJkJylcbiAgICBcblxuICAgIGlkQ2FyZExlbmd0aFswXSA9IG5ldyBhbmRyb2lkLnRleHQuSW5wdXRGaWx0ZXIuTGVuZ3RoRmlsdGVyKDEzKVxuICAgIHVzZXJOYW1lTGVuZ3RoWzBdID0gbmV3IGFuZHJvaWQudGV4dC5JbnB1dEZpbHRlci5MZW5ndGhGaWx0ZXIoMzApXG4gICAgcGhvbmVOdW1iZXJMZW5ndGhbMF0gPSBuZXcgYW5kcm9pZC50ZXh0LklucHV0RmlsdGVyLkxlbmd0aEZpbHRlcigxMClcblxuICAgIGlkQ2FyZC5hbmRyb2lkLnNldEZpbHRlcnMoaWRDYXJkTGVuZ3RoKVxuICAgIHVzZXJOYW1lLmFuZHJvaWQuc2V0RmlsdGVycyh1c2VyTmFtZUxlbmd0aClcbiAgICBwaG9uZU51bWJlci5hbmRyb2lkLnNldEZpbHRlcnMocGhvbmVOdW1iZXJMZW5ndGgpXG4gICAgXG4gICAgaWYodGVtcFBhdGgpe1xuICAgICAgICBwaWNQYXRoID0gdGVtcFBhdGhcbiAgICB9IGVsc2Uge1xuICAgICAgICBpZihwYWdlRGF0YS5waWNDYXJkICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHBpY1BhdGggPSBmcy5wYXRoLmpvaW4oZG9jdW1lbnRzLnBhdGgsIHBhZ2VEYXRhLnBpY0NhcmQpXG4gICAgfVxuICAgIFxuICAgIGJsdWV0b290aC5lbmFibGUoKS50aGVuKFxuICAgICAgICBmdW5jdGlvbihlbmFibGVkKSB7XG4gICAgICAgICAgICBjaGVja19yb3V0ZShmdW5jdGlvbihjYil7XG4gICAgICAgICAgICAgICAgcGFnZURhdGEucm91dGUgPSBjYlxuICAgICAgICAgICAgICAgIGlmKGNiKSB7XG4gICAgICAgICAgICAgICAgICAgIGRsZ0NoZWNrZGF0YS5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJ1xuICAgICAgICAgICAgICAgICAgICBCTEVfc2NhbigpXG4gICAgICAgICAgICAgICAgICAgIHRpbWVfbG9vcCA9IHRpbWVyTW9kdWxlLnNldEludGVydmFsKGZ1bmN0aW9uKCl7IFxuICAgICAgICAgICAgICAgICAgICAvLyB1c2UgQmx1ZXRvb3RoIGZlYXR1cmVzIGlmIGVuYWJsZWQgaXMgdHJ1ZSBcbiAgICAgICAgICAgICAgICAgICAgYmx1ZXRvb3RoLnN0b3BTY2FubmluZygpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBCTEVfc2NhbigpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0sIDgwMDApIFxuXG4gICAgICAgICAgICAgICAgICAgIHRpbWVfbG9vcF9sb2cgPSB0aW1lck1vZHVsZS5zZXRJbnRlcnZhbChmdW5jdGlvbigpeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxvZyhsb2dEYXRhKVxuICAgICAgICAgICAgICAgICAgICB9LCAyMDAwMCkgXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGxnQ2hlY2tkYXRhLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgKSBcbiAgICAgICAgIFxufVxuZXhwb3J0cy5wYWdlVW5sb2FkZWQgPSAoKSA9PntcbiAgICBjb25zb2xlLmxvZyhcInBhZ2VVbmxvYWRlZFwiKVxuICAgIGlmKHRpbWVfbG9vcClcbiAgICAgICAgdGltZXJNb2R1bGUuY2xlYXJJbnRlcnZhbCh0aW1lX2xvb3ApO1xuICAgIGlmKHRpbWVfbG9vcF9sb2cpXG4gICAgICAgIHRpbWVyTW9kdWxlLmNsZWFySW50ZXJ2YWwodGltZV9sb29wX2xvZyk7XG4gICAgaWYobG9nRGF0YS5zdGF0dXMgIT0gXCJmaW5pc2hcIil7XG4gICAgICAgIGxvZ0RhdGEuc3RhdHVzID0gXCJhcHBOb3RXb3JraW5nXCJcbiAgICAgICAgdXBkYXRlTG9nKGxvZ0RhdGEpXG4gICAgfVxufVxuZnVuY3Rpb24gcm9tb3ZlTWFwKCkge1xuICAgIG1hcExheW91dCA9IHBhZ2UuZ2V0Vmlld0J5SWQoXCJtYXBMYXlvdXRcIilcbiAgICB2aWV3TWFwID0gbWFwTGF5b3V0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BvaW50JylcbiAgICBmb3IobGV0IGkgPSAwO2k8dmlld01hcC5sZW5ndGg7aSsrKXtcbiAgICAgICAgbWFwTGF5b3V0LnJlbW92ZUNoaWxkKHZpZXdNYXBbaV0pXG4gICAgfVxuICAgIHR4dE1hcCA9IG1hcExheW91dC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0eHQtbWFwJylcbiAgICBmb3IobGV0IGkgPSAwO2k8dmlld01hcC5sZW5ndGg7aSsrKXtcbiAgICAgICAgbWFwTGF5b3V0LnJlbW92ZUNoaWxkKHR4dE1hcFtpXSlcbiAgICB9XG5cbn1cbmZ1bmN0aW9uIGNoZWNrX3JvdXRlKGNiKSB7XG4gICAgbGV0IGNoZWNrX3N0YXR1cyA9IG51bGxcbiAgICBibHVldG9vdGguc3RhcnRTY2FubmluZyh7XG4gICAgICAgIHNlcnZpY2VVVUlEczogW10sXG4gICAgICAgIHNlY29uZHM6IDUsXG4gICAgICAgIG9uRGlzY292ZXJlZDogZnVuY3Rpb24gKHBlcmlwaGVyYWwpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiUGVyaXBlcmhhbCBmb3VuZCB3aXRoIFVVSUQ6IFwiICsgcGVyaXBoZXJhbC5VVUlEKVxuICAgICAgICAgICAgY2hlY2tfc3RhdHVzPWdlbk1hcChwZXJpcGhlcmFsLlVVSUQscGVyaXBoZXJhbC5SU1NJKVxuICAgICAgICB9LFxuICAgICAgICBza2lwUGVybWlzc2lvbkNoZWNrOiBmYWxzZSxcbiAgICB9KS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInNjYW5uaW5nIGNvbXBsZXRlXCIpXG4gICAgICAgIGNiKGNoZWNrX3N0YXR1cykgXG4gICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIHdoaWxlIHNjYW5uaW5nOiBcIiArIGVycilcbiAgICB9KVxufVxuZnVuY3Rpb24gQkxFX3NjYW4oKXtcbiAgICBsZXQgYWxlcnQgPSBmYWxzZVxuICAgIHJzc2kgPSAtMTAwXG4gICAgYmx1ZXRvb3RoLnN0YXJ0U2Nhbm5pbmcoe1xuICAgICAgICBzZXJ2aWNlVVVJRHM6IFtdLFxuICAgICAgICBzZWNvbmRzOiA3LFxuICAgICAgICBvbkRpc2NvdmVyZWQ6IGZ1bmN0aW9uIChwZXJpcGhlcmFsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBlcmlwZXJoYWwgZm91bmQgd2l0aCBVVUlEOiBcIiArIHBlcmlwaGVyYWwuVVVJRClcbiAgICAgICAgICAgIHdhbGtNYXAocGVyaXBoZXJhbC5VVUlELHBlcmlwaGVyYWwuUlNTSSxmdW5jdGlvbihjYil7XG4gICAgICAgICAgICAgICAgaWYoY2Ipe1xuICAgICAgICAgICAgICAgICAgICBhbGVydCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgbWFwTGF5b3V0ID0gcGFnZS5nZXRWaWV3QnlJZChcIm1hcExheW91dFwiKVxuICAgICAgICAgICAgICAgICAgICB2aWV3TWFwID0gbWFwTGF5b3V0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BvaW50JylcbiAgICAgICAgICAgICAgICAgICAgdmlld01hcC5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiXG4gICAgICAgICAgICAgICAgICAgIGxvZ0RhdGEuc3RhdHVzPVwidHJhdmVsaW5nXCJcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIGlmKHJvYWROYW1lICE9PSBvbGRQb2luTmFtZSl7XG4gICAgICAgICAgICAgICAgICAgIGlmKG9sZFBvaW5OYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbGRQb2ludCA9IHBhZ2UuZ2V0Vmlld0J5SWQob2xkUG9pbk5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihvbGRQb2ludCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2xkUG9pbnQuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihyb2FkTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBvbGRQb2luTmFtZSA9IHJvYWROYW1lXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VEYXRhLnJvYWROYW1lID0gcm9hZE5hbWVcbiAgICAgICAgICAgICAgICAgICAgcGFnZURhdGEucnNzaSA9IHJzc2lcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRXYWxrTWFwID0gcGFnZS5nZXRWaWV3QnlJZChyb2FkTmFtZSlcbiAgICAgICAgICAgICAgICAgICAgaWYocG9pbnRXYWxrTWFwKVxuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRXYWxrTWFwLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIlxuICAgICAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgICAgIGxvZ0RhdGEudXVpZCA9IHBhZ2VEYXRhLnV1aWRcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIHNraXBQZXJtaXNzaW9uQ2hlY2s6IGZhbHNlLFxuICAgIH0pLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2Nhbm5pbmcgY29tcGxldGVcIilcbiAgICAgICAgaWYocG9pbnREYW5nZXIpe1xuICAgICAgICAgICAgaWYoIWFsZXJ0KXtcbiAgICAgICAgICAgICAgICBhbGVydFVzZXIoKVxuICAgICAgICAgICAgICAgIGxvZ0RhdGEuc3RhdHVzPVwiZGV0b3Vyc1wiXG4gICAgICAgICAgICAgICAgdXBkYXRlTG9nKGxvZ0RhdGEpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvZ0RhdGEuc3RhdHVzPVwidHJhdmVsaW5nXCJcbiAgICAgICAgICAgICAgICBkbGdBbGVydC5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIHdoaWxlIHNjYW5uaW5nOiBcIiArIGVycilcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBhbGVydFVzZXIoKXtcbiAgICB2aWJyYXRvci52aWJyYXRlKDIwMDApO1xuICAgIGRsZ0FsZXJ0LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSdcbn1cblxuZnVuY3Rpb24gY291bnRQb2ludChyb3V0ZSkge1xuICAgIGxldCBjb3VudCA9IDBcbiAgICBhcnJNYXBzLm1hcHMuZm9yRWFjaChlbGVtZW50ID0+IHsgICBcbiAgICAgICAgaWYocm91dGUpe1xuICAgICAgICAgICAgaWYoZWxlbWVudC5yb3V0ZSA9PSAgcm91dGUpIHtcbiAgICAgICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBjb3VudFxufVxuXG5mdW5jdGlvbiB3YWxrTWFwKFVVSUQsUlNTSSxjYikge1xuICAgIGxldCBzdGF0dXMgPSBmYWxzZVxuICAgIFxuICAgIGlmKE9iamVjdC5rZXlzKHBhZ2VEYXRhLm1hcCkubGVuZ3RoICE9PSAwKXtcbiAgICAgICAgaWYocGFnZURhdGEubWFwW1VVSURdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHN0YXR1cyA9IHRydWVcbiAgICAgICAgICAgIHBvaW50RGFuZ2VyID0gZmFsc2VcbiAgICAgICAgICAgIGlmKFJTU0kgPj0gcnNzaSl7XG4gICAgICAgICAgICAgICAgcnNzaSA9IFJTU0lcbiAgICAgICAgICAgICAgICBwYWdlRGF0YS5rbSA9IGNhbGN1bGF0ZURpc3RhbmNlKHJzc2kpLnRvRml4ZWQoMilcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByb2FkTmFtZSA9IHBhZ2VEYXRhLm1hcFtVVUlEXS5uYW1lICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBwYWdlRGF0YS51dWlkID0gVVVJRFxuXG4gICAgICAgICAgICAgICAgaWYocGFnZURhdGEubWFwW1VVSURdLm1hcF9zdGF0dXMgPT0gXCJEXCIpe1xuICAgICAgICAgICAgICAgICAgICBwb2ludERhbmdlciA9dHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZihwYWdlRGF0YS5tYXBbVVVJRF0ubWFwX3N0YXR1cyA9PSBcIlNcIil7XG4gICAgICAgICAgICAgICAgICAgIGRsZ1Bpb250U3RhcnQoKVxuICAgICAgICAgICAgICAgICAgICBwYWdlRGF0YS5zdGF0dXMgPSBcInRyYXZlbGluZ1wiXG4gICAgICAgICAgICAgICAgICAgIHBvaW50U3RhcnQgPSBmYWxzZVxuXG4gICAgICAgICAgICAgICAgfSAgZWxzZSBpZihwYWdlRGF0YS5tYXBbVVVJRF0ubWFwX3N0YXR1cyA9PSBcIkVcIikge1xuICAgICAgICAgICAgICAgICAgICBkbGdQaW9udEVuZCgpXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VEYXRhLnN0YXR1cyA9IFwiZmluaXNoXCJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRFbmQgPSBmYWxzZVxuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICB9IFxuICAgICAgICB9IFxuICAgIH1cbiAgICBjYihzdGF0dXMpXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxvZyhkYXRhKSB7XG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgICBmZXRjaChBUElfVVJMK1wiL3VwZGF0ZVVzZXJMb2dcIiwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpXG4gICAgfSkudGhlbigocikgPT4gci5qc29uKCkpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PSBcIlN1Y2Nlc3NcIil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInVwZGF0ZSBsb2cgU3VjY2Vzc1wiKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYocmVzcG9uc2Uuc3RhdHVzID09IFwiRmFpbFwiKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidXBkYXRlIGxvZyBTdWNjZXNzXCIpXG4gICAgICAgIH1cbiAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnKioqZmV0Y2ggZXJyb3IqKionKVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBnZW5NYXAoVVVJRCxSU1NJKXtcbiAgICBsZXQgcm91dGUgPSAwXG4gICAgaWYoT2JqZWN0LmtleXMocGFnZURhdGEubWFwKS5sZW5ndGggIT09IDApe1xuXG4gICAgICAgIHZpZXdNYXAgPSBtYXBMYXlvdXQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncG9pbnQnKVxuICAgICAgICBpZihwYWdlRGF0YS5tYXBbVVVJRF0gIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHJvdXRlPXBhZ2VEYXRhLm1hcFtVVUlEXS5yb3V0ZVxuICAgICAgICAgICAgcGFnZURhdGEucm9hZE5hbWUgPSAgcGFnZURhdGEubWFwW1VVSURdLm5hbWVcbiAgICAgICAgICAgIGJsdWV0b290aC5zdG9wU2Nhbm5pbmcoKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2Nhbm5pbmcgc3RvcHBlZFwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodmlld01hcCl7XG4gICAgICAgICAgICByb21vdmVNYXAoKVxuICAgICAgICB9XG4gICAgICAgIG1hcExheW91dC5oZWlnaHQgPSBjb3VudFBvaW50KHJvdXRlKT44P1wiXCIrKCgoY291bnRQb2ludChyb3V0ZSktOCkqMTApKzEwMCkrXCIlXCI6XCIxMDAlXCJcbiAgICAgICAgbGV0IGJnTWFwcyA9IFwiXCJcbiAgICAgICAgbGV0IGltZyBcblxuICAgICAgICBodHRwTW9kdWxlLmdldEltYWdlKFwiaHR0cDovLzIwMi4xMjkuMTYuNjgvfm9mZnRkdWFjL2JnTWFwcy9yXCIrcm91dGUrXCIuanBnXCIpLnRoZW4oKHIpID0+IHtcbiAgICAgICAgICAgIC8vIGdldEltYWdlIG1ldGhvZCByZXR1cm5zIEltYWdlU291cmNlIG9iamVjdFxuICAgICAgICAgICAgaW1nID0gclxuICAgICAgICAgICAgdmFyIGZvbGRlciA9IGZzLmtub3duRm9sZGVycy5kb2N1bWVudHMoKTtcbiAgICAgICAgICAgIHZhciBwYXRoID0gZnMucGF0aC5qb2luKGZvbGRlci5wYXRoLCBcInJcIityb3V0ZStcIi5qcGdcIik7XG4gICAgICAgICAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJiZ01hcHNcIiwgcGF0aClcbiAgICAgICAgICAgIGltZy5zYXZlVG9GaWxlKHBhdGgpXG4gICAgICAgICAgICBtYXBMYXlvdXQuYmFja2dyb3VuZEltYWdlID0gcGF0aFxuICAgICAgICB9LCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgICAgIGltZyA9IGltYWdlU291cmNlTW9kdWxlLmZyb21GaWxlKFwifi9pbWFnZXMvclwiK3JvdXRlK1wiLmpwZ1wiKTtcbiAgICAgICAgICAgIHZhciBmb2xkZXIgPSBmcy5rbm93bkZvbGRlcnMuZG9jdW1lbnRzKCk7XG4gICAgICAgICAgICB2YXIgcGF0aCA9IGZzLnBhdGguam9pbihmb2xkZXIucGF0aCwgXCJyXCIrcm91dGUrXCIuanBnXCIpO1xuICAgICAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiYmdNYXBzXCIsIHBhdGgpXG4gICAgICAgICAgICBpbWcuc2F2ZVRvRmlsZShwYXRoKVxuICAgICAgICAgICAgbWFwTGF5b3V0LmJhY2tncm91bmRJbWFnZSA9IHBhdGhcbiAgICAgICAgfSk7ICAgIFxuXG4gICAgICAgIGJnTWFwcyA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImJnTWFwc1wiKVxuICAgICAgICBtYXBMYXlvdXQuY2xhc3NOYW1lID0gXCJtYXAtbGF5b3V0XCJcbiAgICAgICAgbWFwTGF5b3V0LmJhY2tncm91bmRJbWFnZSA9IGJnTWFwc1xuXG4gICAgICAgIGFyck1hcHMubWFwcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZihyb3V0ZSl7XG4gICAgICAgICAgICAgICAgaWYoZWxlbWVudC5yb3V0ZSA9PSAgcm91dGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG15TGFiZWwgPSBuZXcgbGFiZWxNb2R1bGUuTGFiZWwoKVxuICAgICAgICAgICAgICAgICAgICBsZXQgbXlMYWJlbFRleHQgPSBuZXcgbGFiZWxNb2R1bGUuTGFiZWwoKVxuXG4gICAgICAgICAgICAgICAgICAgIG15TGFiZWwuY2xhc3NOYW1lID0gXCJwb2ludFwiXG4gICAgICAgICAgICAgICAgICAgIG15TGFiZWwuaWQgPSBlbGVtZW50Lm5hbWVcbiAgICAgICAgICAgICAgICAgICAgbXlMYWJlbC5tYXJnaW5Ub3AgPSBcIlwiK2VsZW1lbnQueStcIiVcIlxuICAgICAgICAgICAgICAgICAgICBteUxhYmVsLm1hcmdpbkxlZnQgPSBcIlwiK2VsZW1lbnQueCtcIiVcIlxuICAgICAgICAgICAgICAgICAgICBteUxhYmVsLnN0eWxlLnpJbmRleD1cIi0xXCJcbiAgICAgICAgICAgICAgICAgICAgbXlMYWJlbFRleHQudGV4dCA9IGVsZW1lbnQubmFtZVxuICAgICAgICAgICAgICAgICAgICBteUxhYmVsVGV4dC5pZCA9IFwidHh0TWFwXCJcbiAgICAgICAgICAgICAgICAgICAgbXlMYWJlbFRleHQuY2xhc3MgPSBcInR4dC1tYXBcIlxuICAgICAgICAgICAgICAgICAgICBteUxhYmVsVGV4dC5tYXJnaW5MZWZ0ID0gXCJcIitlbGVtZW50LngrXCIlXCJcbiAgICAgICAgICAgICAgICAgICAgbXlMYWJlbFRleHQubWFyZ2luVG9wID0gXCJcIisoZWxlbWVudC55LTIpK1wiJVwiXG5cbiAgICAgICAgICAgICAgICAgICAgbWFwTGF5b3V0LmFkZENoaWxkKG15TGFiZWwpXG4gICAgICAgICAgICAgICAgICAgIG1hcExheW91dC5hZGRDaGlsZChteUxhYmVsVGV4dClcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIrKytnZW5CZWFjb24rKytcIitlbGVtZW50LngrXCIsXCIrZWxlbWVudC55KSBcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiByb3V0ZVxufSBcblxuZXhwb3J0cy51c2VyID0gZnVuY3Rpb24oKSB7XG4gICAgXG4gICAgaWYoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwidXNlckRhdGFcIikpe1xuICAgICAgICBsZXQganNvbkRhdGEgPSBKU09OLnBhcnNlKGFwcFNldHRpbmdzLmdldFN0cmluZyhcInVzZXJEYXRhXCIpKVxuICAgICAgICBwYWdlRGF0YS5pZENhcmQgPSBqc29uRGF0YS5pZENhcmRcbiAgICAgICAgcGFnZURhdGEudXNlck5hbWUgPSBqc29uRGF0YS51c2VyTmFtZVxuICAgICAgICBwYWdlRGF0YS5waG9uZU51bWJlciA9IGpzb25EYXRhLnBob25lTnVtYmVyXG4gICAgICAgIHBhZ2VEYXRhLmRldmljZUlkID0ganNvbkRhdGEuZGV2aWNlSWRcbiAgICAgICAgcGFnZURhdGEucGljQ2FyZCA9IGpzb25EYXRhLnBpY1xuICAgIH1cbiAgICBkbGcuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJ1xuICAgIGNvbnNvbGUubG9nKFwicGljQ2FyZCBwaWNDYXJkIHBpY0NhcmQgPSBcIitwYWdlRGF0YS5waWNDYXJkKVxuICAgIGlmKHBhZ2VEYXRhLnBpY0NhcmQgID09IHVuZGVmaW5lZClcbiAgICAgICAgcGFnZURhdGEucGljQ2FyZCAgPSAnJ1xuICAgIGlmKHBhZ2VEYXRhLnBpY0NhcmQgIT0gJycpe1xuICAgICAgICB1c2VyQ2FyZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgID0gcGljUGF0aFxuICAgICAgICBwaWNEYXRhLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSdcbiAgICAgICAgdHh0RGF0YS5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJ1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHBpY0RhdGEuc3R5bGUudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSdcbiAgICAgICAgdHh0RGF0YS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnXG4gICAgfVxufVxuZXhwb3J0cy5jaGFuZ1BpYyA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnRleHRcbiAgICAuYXV0aG9yaXplKClcbiAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGNvbnRleHQucHJlc2VudCgpO1xuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24oc2VsZWN0aW9uKSB7XG4gICAgICAgIHNlbGVjdGlvbi5mb3JFYWNoKGZ1bmN0aW9uKHNlbGVjdGVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZClcbiAgICAgICAgICAgIC8vIHByb2Nlc3MgdGhlIHNlbGVjdGVkIGltYWdlXG4gICAgICAgICAgICBpbWFnZUFzc2V0Q2hhbmcgPSBzZWxlY3RlZFxuICAgICAgICAgICAgdXNlckNhcmQuc3R5bGUuYmFja2dyb3VuZEltYWdlICA9IHNlbGVjdGVkLl9hbmRyb2lkXG5cbiAgICAgICAgfSk7XG4gICAgICAgIGxpc3QuaXRlbXMgPSBzZWxlY3Rpb247XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy8gcHJvY2VzcyBlcnJvclxuICAgIH0pO1xufSAgIFxuZXhwb3J0cy5zZXRVc2VyID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IHNhdmVEYXRhID0ge31cbiAgICBzYXZlRGF0YS5pZENhcmQgPSBwYWdlRGF0YS5pZENhcmRcbiAgICBzYXZlRGF0YS51c2VyTmFtZSA9IHBhZ2VEYXRhLnVzZXJOYW1lXG4gICAgc2F2ZURhdGEucGhvbmVOdW1iZXIgPSBwYWdlRGF0YS5waG9uZU51bWJlclxuICAgIHNhdmVEYXRhLmRldmljZUlkID0gcGFnZURhdGEuZGV2aWNlSWRcbiAgICBzYXZlRGF0YS5waWNDYXJkID0gcGFnZURhdGEucGljQ2FyZFxuICAgIHNhdmVEYXRhLmJsZUlkID0gcGFnZURhdGEuYmxlSWRcbiAgICBsZXQgdGV4dCA9IG51bGxcbiAgICB2YXIgdGVzdGVyID0gL15bYS16QS1aMC054LiBLeC5mSBdKiQvXG4gICAgaWYgKHNhdmVEYXRhLnVzZXJOYW1lLmxlbmd0aCA9PT0gMCAmJiBzYXZlRGF0YS5waWNDYXJkID09IFwiXCIpIHtcbiAgICB0ZXh0ID0gJ1BsZWFzZSBlbnRlciBuYW1lJ1xuICAgIH0gZWxzZSBpZiAoc2F2ZURhdGEucGhvbmVOdW1iZXIubGVuZ3RoIDwgMTApIHtcbiAgICB0ZXh0ID0gJ1BsZWFzZSBlbnRlciB5b3VyIG1vYmlsZSBwaG9uZSBudW1iZXIgdG8gY29tcGxldGUgMTAgZGlnaXRzLidcbiAgICB9IGVsc2UgaWYgKHNhdmVEYXRhLmRldmljZUlkLmxlbmd0aCA8IDApIHtcbiAgICB0ZXh0ID0gJ05PIERldmljZSBJRC4nXG4gICAgfSBcbiAgICAvLyBlbHNlIGlmIChzYXZlRGF0YS5pZENhcmQubGVuZ3RoIDwgNyAmJiBzYXZlRGF0YS5waWNDYXJkID09IFwiXCIpIHtcbiAgICAvLyB0ZXh0ID0gJ0lEIENhcmQgaW5jb3JyZWN0LidcbiAgICAvLyB9XG4gICAgZWxzZSBpZiAoIXRlc3Rlci50ZXN0KHBhZ2VEYXRhLnVzZXJOYW1lKSAmJiBzYXZlRGF0YS5waWNDYXJkID09IFwiXCIpIHtcbiAgICAgICAgdGV4dCA9ICdQbGVhc2UgZW50ZXIgdGhlIGZpcnN0IGFuZCBsYXN0IG5hbWUgaW4gdGhlIGFscGhhYmV0LiBhLXosIEEtWiwgMC05LCBBLTknXG4gICAgfVxuICAgIGlmICh0ZXh0ICE9IG51bGwpIHtcbiAgICAgICAgdmFyIHRvYXN0ID0gbmV3IHRvYXN0eSh7IHRleHQ6dGV4dH0pO1xuICAgICAgICB0b2FzdC5zaG93KCkgICBcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzYXZlRGF0YSkpKVxuICAgIGlmKHBhZ2VEYXRhLnBpY0NhcmQgPT0gJycpe1xuICAgICAgICBmZXRjaChBUElfVVJMK1wiL3VwZGF0ZVVzZXJcIiwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHNhdmVEYXRhKVxuICAgICAgICB9KS50aGVuKChyKSA9PiByLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZihyZXNwb25zZS5zdGF0dXMgPT0gXCJTdWNjZXNzXCIpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU3VjY2Vzc1wiKVxuICAgICAgICAgICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhcInVzZXJEYXRhXCIsIEpTT04uc3RyaW5naWZ5KHNhdmVEYXRhKSlcbiAgICAgICAgICAgICAgICB2YXIgdG9hc3QgPSBuZXcgdG9hc3R5KHsgdGV4dDpcInVwZGF0ZSBzdWNjZXNzXCJ9KTtcbiAgICAgICAgICAgICAgICB0b2FzdC5zaG93KCkgICBcbiAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKHJlc3BvbnNlLnN0YXR1cyA9PSBcIkZhaWxcIil7XG4gICAgICAgICAgICAgICAgdmFyIHRvYXN0ID0gbmV3IHRvYXN0eSh7IHRleHQ6XCJ1cGRhdGUgZmFpbFwifSk7XG4gICAgICAgICAgICAgICAgdG9hc3Quc2hvdygpICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnKioqZmV0Y2ggZXJyb3IqKionKVxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpZihpbWFnZUFzc2V0Q2hhbmcuX2FuZHJvaWQgPT0gbnVsbCl7XG4gICAgICAgICAgICBsZXQgZG9jdW1lbnRzID0gZnMua25vd25Gb2xkZXJzLmRvY3VtZW50cygpXG4gICAgICAgICAgICBsZXQgcGF0aCA9IGZzLnBhdGguam9pbihkb2N1bWVudHMucGF0aCwgcGFnZURhdGEucGljQ2FyZCk7XG4gICAgICAgICAgICBpbWFnZUFzc2V0Q2hhbmcuX2FuZHJvaWQgPXBhdGhcbiAgICAgICAgfVxuICAgICAgICB0ZW1wUGF0aCA9IGltYWdlQXNzZXRDaGFuZy5fYW5kcm9pZFxuICAgICAgICB2YXIgZmlsZSA9ICBpbWFnZUFzc2V0Q2hhbmcuX2FuZHJvaWRcbiAgICAgICAgdmFyIHVybCA9IEFQSV9VUkwrXCIvdXBkYXRlVXNlclwiO1xuICAgICAgICB2YXIgcmVxdWVzdCA9IHtcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiLFxuICAgICAgICAgICAgICAgIFwiRmlsZS1OYW1lXCI6IFwicGhvdG9cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlVwbG9hZGluZ1wiXG4gICAgICAgIH07XG4gICAgICAgIGxldCBwYXJhbXMgPSBbXG4gICAgICAgICAgICB7IG5hbWU6IFwicGhvbmVOdW1iZXJcIiwgdmFsdWU6IHBhZ2VEYXRhLnBob25lTnVtYmVyIH0sXG4gICAgICAgICAgICB7IG5hbWU6IFwiZGV2aWNlSWRcIiwgdmFsdWU6IHBhZ2VEYXRhLmRldmljZUlkIH0sXG4gICAgICAgICAgICB7IFwibmFtZVwiOiAncGhvdG8nLCBcImZpbGVuYW1lXCI6IGZpbGUsIFwibWltZVR5cGVcIjogXCJpbWFnZS9qcGdcIiB9XG4gICAgICAgIF07XG4gICAgICAgIGxldCB0YXNrID0gc2Vzc2lvbi5tdWx0aXBhcnRVcGxvYWQocGFyYW1zLCByZXF1ZXN0KTtcbiAgICAgICAgdGFzay5vbihcInByb2dyZXNzXCIsIHByb2dyZXNzSGFuZGxlcik7XG4gICAgICAgIHRhc2sub24oXCJlcnJvclwiLCBlcnJvckhhbmRsZXIpO1xuICAgICAgICB0YXNrLm9uKFwicmVzcG9uZGVkXCIsIHJlc3BvbmRlZEhhbmRsZXIpO1xuICAgICAgICAvLyB0YXNrLm9uKFwiY29tcGxldGVcIiwgY29tcGxldGVIYW5kbGVyKTtcbiAgICAgICAgbGV0IGRvY3VtZW50cyA9IGZzLmtub3duRm9sZGVycy5kb2N1bWVudHMoKTtcbiAgICAgICAgbGV0IHBhdGggPSBmcy5wYXRoLmpvaW4oZG9jdW1lbnRzLnBhdGgsIHBhZ2VEYXRhLnBob25lTnVtYmVyK1wiLmpwZ1wiKTtcbiAgICAgICAgY29uc29sZS5sb2cocGF0aClcbiAgICAgICAgaW1hZ2VTb3VyY2VNb2R1bGUuZnJvbUFzc2V0KGltYWdlQXNzZXRDaGFuZylcbiAgICAgICAgLnRoZW4oaW1hZ2VTb3VyY2UgPT4ge1xuICAgICAgICAgICAgaW1hZ2VTb3VyY2Uuc2F2ZVRvRmlsZShwYXRoLCBcImpwZ1wiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRsZ0hpZGUoKVxufVxuZXhwb3J0cy51c2VyQ291bnQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJ1c2VyQ291bnRcIilcbiAgICBmZXRjaChBUElfVVJMK1wiL2dldENvdW50VXNlclwiLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe3JvdXRlOnBhZ2VEYXRhLnJvdXRlfSlcbiAgICB9KS50aGVuKChyKSA9PiByLmpzb24oKSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYoT2JqZWN0LmtleXMocmVzcG9uc2UudXNlckRhdGEpLmxlbmd0aCAhPT0gMCl7XG4gICAgICAgICAgICByZXNwb25zZS51c2VyRGF0YVswXS5jb3VudFVzZXIgPSBPYmplY3Qua2V5cyhyZXNwb25zZS51c2VyRGF0YSkubGVuZ3RoXG4gICAgICAgICAgICBwYWdlRGF0YS5jb3VudFVzZXIgPSByZXNwb25zZS51c2VyRGF0YVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHBhZ2VEYXRhLmNvdW50VXNlcilcbiAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnKioqZmV0Y2ggZXJyb3IqKionKVxuICAgIH0pO1xuICAgIGRsZ2NvdW50VXNlci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnXG4gICAgXG59XG5leHBvcnRzLmhpZGVEaWFsb2cgPSBmdW5jdGlvbigpIHtcbiAgICBpbWFnZUFzc2V0Q2hhbmcuX2FuZHJvaWQgPSBudWxsXG4gICAgZGxnLnN0eWxlLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnXG4gICAgZGxnQWxlcnQuc3R5bGUudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSdcbiAgICBkbGdjb3VudFVzZXIuc3R5bGUudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSdcbiAgICBkbGdFbmQuc3R5bGUudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSdcbiAgICBkbGdTdGFydC5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJ1xuICAgIGRsZ0Fib3V0ZS5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJ1xuICAgIGRsZ09mZmxpbmUuc3R5bGUudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSdcbn1cblxuZnVuY3Rpb24gZGxnSGlkZSgpIHtcbiAgICBpbWFnZUFzc2V0Q2hhbmcuX2FuZHJvaWQgPSBudWxsXG4gICAgZGxnLnN0eWxlLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnXG4gICAgZGxnQWxlcnQuc3R5bGUudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSdcbiAgICBkbGdFbmQuc3R5bGUudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSdcbiAgICBkbGdTdGFydC5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJ1xuICAgIGRsZ0Fib3V0ZS5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJ1xufVxuXG5leHBvcnRzLmhpZGVEZXRhaWxNYXAgPSBmdW5jdGlvbigpe1xuICAgIGRldGFpbE1hcC5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJ1xuICAgIGRldGFpbE1hcEJ0bi5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnXG59XG5cbmV4cG9ydHMuc2hvd0RldGFpbE1hcCA9IGZ1bmN0aW9uKCl7XG4gICAgZGV0YWlsTWFwLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSdcbiAgICBkZXRhaWxNYXBCdG4uc3R5bGUudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSdcbn1cblxuZnVuY3Rpb24gZGxnUGlvbnRTdGFydCgpIHtcbiAgICBpZihwb2ludFN0YXJ0KXtcbiAgICAgICAgZGxnU3RhcnQuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJ1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRsZ1N0YXJ0LnN0eWxlLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnXG4gICAgfVxufVxuXG5mdW5jdGlvbiBkbGdQaW9udEVuZCgpIHtcbiAgICBpZihwb2ludEVuZCl7XG4gICAgICAgIGRsZ0VuZC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnXG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGxnRW5kLnN0eWxlLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnXG4gICAgfVxufVxuXG5leHBvcnRzLm5vb3AgPSAoKSA9PiB7XG59XG5leHBvcnRzLmFib3V0ZSA9ICgpID0+IHtcbiAgICBkbGdBYm91dGUuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJ1xufVxuXG5leHBvcnRzLnJlTWFwPSgpPT57XG4gICAgZnJhbWVNb2R1bGUudG9wbW9zdCgpLm5hdmlnYXRlKFwibWFwXCIpO1xufVxuZnVuY3Rpb24gZXJyb3JIYW5kbGVyKGUpIHtcbiAgICBjb25zb2xlLmxvZyhcInJlY2VpdmVkIFwiICsgZS5yZXNwb25zZUNvZGUgKyBcIiBjb2RlLlwiKTtcbiAgICB2YXIgdG9hc3QgPSBuZXcgdG9hc3R5KHsgdGV4dDpcIlVwZGF0ZSBmYWlsIHBsZWFzZSB0cnkgYWdhaW5cIn0pO1xuICAgIHRvYXN0LnNob3coKSAgIFxuICAgdmFyIHNlcnZlclJlc3BvbnNlID0gZS5yZXNwb25zZTtcbn1cblxuZnVuY3Rpb24gcmVzcG9uZGVkSGFuZGxlcihlKSB7XG4gICAgY29uc29sZS5sb2coXCJyZWNlaXZlZCBcIiArIGUucmVzcG9uc2VDb2RlICsgXCIgY29kZS4gU2VydmVyIHNlbnQ6IFwiICsgZS5kYXRhKTtcbiAgICBlLmRhdGEgPSBKU09OLnBhcnNlKGUuZGF0YSlcbiAgICBpZihlLmRhdGFbXCJzdGF0dXNcIl0gPT0gXCJTdWNjZXNzXCIpe1xuICAgICAgIGNvbnNvbGUubG9nKFwiU3VjY2Vzc1wiKVxuICAgICAgIGxldCBqc29uRGF0YSA9IHt9XG4gICAgICAganNvbkRhdGEuaWRDYXJkID0gcGFnZURhdGEuaWRDYXJkXG4gICAgICAganNvbkRhdGEudXNlck5hbWUgPSBwYWdlRGF0YS51c2VyTmFtZVxuICAgICAgIGpzb25EYXRhLmRldmljZUlkID0gcGFnZURhdGEuZGV2aWNlSWRcbiAgICAgICBqc29uRGF0YS5waG9uZU51bWJlciA9IHBhZ2VEYXRhLnBob25lTnVtYmVyXG4gICAgICAganNvbkRhdGEucGljID0gcGFnZURhdGEucGhvbmVOdW1iZXIrJy5qcGcnXG4gICAgICAgcGljUGF0aCA9IHRlbXBQYXRoXG4gICAgICAgXG4gICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwidXNlckRhdGFcIiwgSlNPTi5zdHJpbmdpZnkoanNvbkRhdGEpKVxuICAgICAgIFxuICAgICAgIHZhciB0b2FzdCA9IG5ldyB0b2FzdHkoeyB0ZXh0OlwiVXBkYXRlIHN1Y2Nlc3NcIn0pO1xuICAgICAgIHRvYXN0LnNob3coKSAgIFxuICAgXG4gICB9XG4gICBlbHNlIGlmKGUuZGF0YVtcInN0YXR1c1wiXT09IFwiRmFpbFwiKXtcbiAgICAgICB2YXIgdG9hc3QgPSBuZXcgdG9hc3R5KHsgdGV4dDpcIlVwZGF0ZSBmYWlsXCJ9KTtcbiAgICAgICB0b2FzdC5zaG93KCkgICBcblxuICAgfVxuICAgZWxzZSBpZihlLmRhdGFbXCJzdGF0dXNcIl09PSBcIkR1cGxpY2F0ZVVzZXJcIil7XG4gICAgICAgY29uc29sZS5sb2coXCJEdXBsaWNhdGVVc2VyXCIpXG4gICB9XG5cbn1cblxuZnVuY3Rpb24gcHJvZ3Jlc3NIYW5kbGVyKGUpIHtcbiAgICBjb25zb2xlLmxvZyhcInVwbG9hZGVkIFwiICsgZS5jdXJyZW50Qnl0ZXMgKyBcIiAvIFwiICsgZS50b3RhbEJ5dGVzKTtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlRGlzdGFuY2UocnNzaSkge1xuICBcbiAgICB2YXIgdHhQb3dlciA9IC01OSAvL2hhcmQgY29kZWQgcG93ZXIgdmFsdWUuIFVzdWFsbHkgcmFuZ2VzIGJldHdlZW4gLTU5IHRvIC02NVxuICAgIFxuICAgIGlmIChyc3NpID09IDApIHtcbiAgICAgIHJldHVybiAtMS4wOyBcbiAgICB9XG4gIFxuICAgIHZhciByYXRpbyA9IHJzc2kqMS4wL3R4UG93ZXI7XG4gICAgaWYgKHJhdGlvIDwgMS4wKSB7XG4gICAgICByZXR1cm4gTWF0aC5wb3cocmF0aW8sMTApO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHZhciBkaXN0YW5jZSA9ICAoMC44OTk3NikqTWF0aC5wb3cocmF0aW8sNy43MDk1KSArIDAuMTExOyAgICBcbiAgICAgIHJldHVybiBkaXN0YW5jZTtcbiAgICB9XG4gIH0gOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL21hcC5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL21hcC5qc1wiIH0pO1xuICAgIH0pO1xufSAiLCJcbm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZSBsb2FkZWQ9XFxcInBhZ2VMb2FkZWRcXFwiIHVubG9hZGVkPVxcXCJwYWdlVW5sb2FkZWRcXFwiIGlkPVxcXCJQYWdlXFxcIj5cXG4gIDwhLS0gPEFjdGlvbkJhciB0aXRsZT1cXFwiQU9UXFxcIiBjbGFzcz1cXFwiYWN0aW9uLWJhclxcXCI+PC9BY3Rpb25CYXI+IC0tPlxcbiAgPEFjdGlvbkJhciBhbmRyb2lkLmljb25WaXNpYmlsaXR5PVxcXCJhbHdheXNcXFwiICB0aXRsZT1cXFwib2ZmLXRyYWNrIGFsZXJ0IHN5c3RlbVxcXCIgIGNsYXNzPVxcXCJoZWFkZXIgYWN0aW9ucyBcXFwiID48L0FjdGlvbkJhcj5cXG4gIDwhLS0gWW91ciBVSSBjb21wb25lbnRzIGdvIGhlcmUgLS0+XFxuICBcXG4gIDxEb2NrTGF5b3V0ICB3aWR0aD1cXFwiMTAwJVxcXCIgaGVpZ2h0PVxcXCIxMDAlXFxcIiBjbGFzcz1cXFwiZmFzXFxcIj5cXG4gICAgPEFic29sdXRlTGF5b3V0IGRvY2s9XFxcInRvcFxcXCIgd2lkdGg9XFxcIjEwMCVcXFwiIGhlaWdodD1cXFwiOTAlXFxcIiBjbGFzcz1cXFwibWFwXFxcIj5cXG4gICAgPFNjcm9sbFZpZXcgd2lkdGg9XFxcIjEwMCVcXFwiICBoZWlnaHQ9XFxcIjEwMCVcXFwiPlxcbiAgICAgICAgPEFic29sdXRlTGF5b3V0ICB3aWR0aD1cXFwiMTAwJVxcXCIgIGhlaWdodD1cXFwiMTAwJVxcXCIgaWQ9XFxcIm1hcExheW91dFxcXCIgPlxcblxcbiAgICAgICAgPC9BYnNvbHV0ZUxheW91dD5cXG4gICAgPC9TY3JvbGxWaWV3PlxcbiAgICAgIDxTdGFja0xheW91dCB3aWR0aD1cXFwiODAlXFxcIiBoZWlnaHQ9XFxcIjI2JVxcXCIgY2xhc3M9XFxcImRldGFpbC1tYXBcXFwiIGlkPVxcXCJkZXRhaWxNYXBcXFwiPlxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcIiYjeGYwNTc7XFxcIiB3aWR0aD1cXFwiMzBcXFwiIGhlaWdodD1cXFwiMjBcXFwiICBtYXJnaW5Ub3A9XFxcIjUlXFxcIiBtYXJnaW5MZWZ0PVxcXCI4OCVcXFwiIHRhcD1cXFwiaGlkZURldGFpbE1hcFxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIj48L0xhYmVsPlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IGlkPVxcXCJ0ZXN0Vmlld1xcXCIgd2lkdGg9XFxcIjEwMCVcXFwiIG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIj5cXG4gICAgICAgICAgPExhYmVsIHRleHQ9XFxcIiYjeGYzYzU7XFxcIiBjb2xvcj1cXFwiI0M3MDAzOVxcXCIgY2xhc3M9XFxcIm1hcC1tYXJrXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgcm9hZE5hbWUgfX1cXFwiIGNsYXNzPVxcXCJ0cmFjay1uYW1lXFxcIj48L0xhYmVsPlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIFxcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJoci1saWdodCBtLXQtMTBcXFwiIHdpZHRoPVxcXCI5MCVcXFwiPjwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgd2lkdGg9XFxcIjEwMCVcXFwiIG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIj5cXG4gICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJ1c2VyLVJTU0lcXFwiIHRleHQ9XFxcIiYjeGYwOWU7XFxcIj48L0xhYmVsPlxcbiAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgcnNzaSB9fVxcXCIgY2xhc3M9XFxcInJzc2lzXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcInVzZXItcm9hZFxcXCIgdGV4dD1cXFwiJiN4ZjAxODtcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwicm9hZC10b3RhbFxcXCIgdGV4dD1cXFwiIHt7IGttICsnbSd9fVxcXCI+PC9MYWJlbD5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICBcXG4gICAgICA8U3RhY2tMYXlvdXQgd2lkdGg9XFxcIjI2XFxcIiBoZWlnaHQ9XFxcIjI2XFxcIiAgbWFyZ2luVG9wPVxcXCIzJVxcXCIgbWFyZ2luTGVmdD1cXFwiOTAlXFxcIiBjbGFzcz1cXFwiZGV0YWlsTWFwQnRuXFxcIiBpZD1cXFwiZGV0YWlsTWFwQnRuXFxcIiB0YXA9XFxcInNob3dEZXRhaWxNYXBcXFwiPlxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcIiYjeGYwNmU7XFxcIj48L0xhYmVsPlxcbiAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgPCEtLSBkbGcgVXNlci0tPlxcbiAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwibGctZGlhbG9nXFxcIiB0YXA9XFxcImhpZGVEaWFsb2dcXFwiIGlkPVxcXCJ1c2VyLWRhdGFcXFwiPlxcbiAgICAgICAgPEZsZXhib3hMYXlvdXQgc3RyZXRjaExhc3RDaGlsZD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImRpYWxvZ1xcXCIgdGFwPVxcXCJub29wXFxcIj5cXG5cXG4gICAgICAgICAgICA8RmxleGJveExheW91dCAgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiIGNsYXNzPVxcXCJ0aXRsZSBoZWFkZXJtZW51XFxcIiBoZWlnaHQ9XFxcIjExJVxcXCI+XFxuICAgICAgICAgICAgIDxJbWFnZSBzcmM9XFxcIn4vaW1hZ2VzL2ljb25zOC1yZXN1bWUtOTYucG5nXFxcIiB0ZXh0PVxcXCJVc2VyIGluZm9ybWF0aW9uXFxcIiBzdHJldGNoPVxcXCJub25lXFxcIiAgd2lkdGg9XFxcIjE1JVxcXCIgaGVpZ2h0PVxcXCIxMiVcXFwiIGNsYXNzPVxcXCJcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+PC9JbWFnZT5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlByb2ZpbGVcXFwiIGNsYXNzPVxcXCJ0ZXh0IFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiAgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwibGVmdFxcXCIgdGFwPVxcXCJoaWRlRGlhbG9nXFxcIiB0ZXh0PVxcXCImI3hmMDU3O1xcXCIgIGNsYXNzPVxcXCJjbG9zZSAgbGVmdCAgXFxcIi8+XFxuICAgICAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxcbiAgICAgICBcXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImNvbnRlbnQgYmdfZGxnX1VzZXIgXFxcIiBpZD1cXFwidHh0RGF0YVxcXCIgdmlzaWJpbGl0eT1cXFwiY29sbGFwc2VcXFwiPlxcblxcbiAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHdpZHRoPVxcXCIxMDAlXFxcIiBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCIgY2xhc3M9XFxcIm0tdC0yNXBcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiaWQgY2FyZFxcXCIgY2xhc3M9XFxcInR4dC1zXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGhpbnQ9XFxcIlxcXCIgdGV4dD1cXFwie3sgaWRDYXJkIH19XFxcIiAgY2xhc3M9XFxcInNlbGVjdGJveF9pZFxcXCIgaWQ9XFxcImlkQ2FyZFxcXCIvPlxcbiAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG5cXG4gICAgICAgICAgICAgIDxTdGFja0xheW91dCB3aWR0aD1cXFwiMTAwJVxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiIGNsYXNzPVxcXCJtLXQtMTBcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiTmFtZVxcXCIgY2xhc3M9XFxcInR4dC1zXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGhpbnQ9XFxcIlxcXCIgY2xhc3M9XFxcInNlbGVjdGJveF91c2VyXFxcIiB0ZXh0PVxcXCJ7eyB1c2VyTmFtZSB9fVxcXCIgaWQ9XFxcInVzZXJOYW1lXFxcIi8+XFxuICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHdpZHRoPVxcXCIxMDAlXFxcIiBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCIgY2xhc3M9XFxcIm0tdC0xMFxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJUZWxcXFwiIGNsYXNzPVxcXCJ0eHQtc1xcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCBoaW50PVxcXCJcXFwiIGNsYXNzPVxcXCJzZWxlY3Rib3hfdGVsXFxcIiB0ZXh0PVxcXCJ7eyBwaG9uZU51bWJlciB9fVxcXCIga2V5Ym9hcmRUeXBlPVxcXCJudW1iZXJcXFwiIGlkPVxcXCJwaG9uZU51bWJlclxcXCIvPlxcbiAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG5cXG4gICAgICAgICAgICAgIDxCdXR0b24gIHRhcD1cXFwic2V0VXNlclxcXCIgdGV4dD1cXFwiRWRpdFxcXCIgY2xhc3M9XFxcImFjdGlvbiBidXR0b25zZWRpdCBtLXQtMTVwXFxcIi8+XFxuXFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICA8IS0tIFBJQyBEQVRBIC0tPlxcbiAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJjb250ZW50IGJnX2RsZ19Vc2VyXFxcIiBpZD1cXFwicGljRGF0YVxcXCIgdmlzaWJpbGl0eT1cXFwiY29sbGFwc2VcXFwiPlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiQ2FyZFxcXCIgY2xhc3M9XFxcInR4dC1zXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8QWJzb2x1dGVMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgPEltYWdlIGlkPVxcXCJ1c2VyQ2FyZFxcXCIgIGNsYXNzPVxcXCJ1c2VyLXBpY1xcXCIgd2lkdGg9XFxcIjI1MFxcXCIgaGVpZ2h0PVxcXCIxNTBcXFwiPjwvSW1hZ2U+XFxuICAgICAgICAgICAgICAgICAgPExhYmVsICB3aWR0aD1cXFwiMjRcXFwiIGhlaWdodD1cXFwiMjRcXFwiIGNsYXNzPVxcXCJjYW1lcmFcXFwiIHRleHQ9XFxcIiYjeGYwMzA7XFxcIiB0YXA9XFxcImNoYW5nUGljXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8L0Fic29sdXRlTGF5b3V0PlxcbiAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICAgIDxTdGFja0xheW91dCB3aWR0aD1cXFwiMTAwJVxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiIGNsYXNzPVxcXCJsYWJsZV9sZWZ0XFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlRlbFxcXCIgY2xhc3M9XFxcInR4dC1zIFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCBoaW50PVxcXCJcXFwiIGNsYXNzPVxcXCJ0eHQtZlxcXCIgdGV4dD1cXFwie3sgcGhvbmVOdW1iZXIgfX1cXFwiIGtleWJvYXJkVHlwZT1cXFwibnVtYmVyXFxcIiBpZD1cXFwicGhvbmVOdW1iZXJcXFwiLz5cXG4gICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgIDxGbGV4Ym94TGF5b3V0IGNsYXNzPVxcXCJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICA8QnV0dG9uICB0YXA9XFxcInNldFVzZXJcXFwiIHRleHQ9XFxcIkVkaXRcXFwiICBjbGFzcz1cXFwiYWN0aW9uIGJ1dHRvbnNlZGl0MiBcXFwiLz5cXG4gICAgICAgICAgICAgIDwvRmxleGJveExheW91dD5cXG5cXG4gICAgICAgICAgPC9TdGFja0xheW91dD5cXG48IS0tICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAtLT5cXG4gICAgICAgICAgXFxuPCEtLSAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogLS0+XFxuICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XFxuICAgICAgPC9TdGFja0xheW91dD4gXFxuICAgICAgPCEtLSBkbGcgVXNlci0tPlxcblxcbiAgICAgIDwhLS0gZGxnIEFsZXJ0LS0+XFxuICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJsZy1kaWFsb2dcXFwiIHRhcD1cXFwiaGlkZURpYWxvZ1xcXCIgaWQ9XFxcInVzZXItYWxlcnRcXFwiPlxcbiAgICAgICAgPEZsZXhib3hMYXlvdXQgc3RyZXRjaExhc3RDaGlsZD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImRpYWxvZ1xcXCIgdGFwPVxcXCJub29wXFxcIj5cXG4gICAgICAgICAgICA8RmxleGJveExheW91dCBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCIgY2xhc3M9XFxcInRpdGxlXFxcIj5cXG4gICAgICAgICAgICAgICAgPGxhYmVsIHRleHQ9XFxcIkFsZXJ0XFxcIiBjbGFzcz1cXFwidGV4dFxcXCIvPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uICB0YXA9XFxcImhpZGVEaWFsb2dcXFwiIHRleHQ9XFxcIiYjeGYwMGQ7XFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiLz5cXG4gICAgICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJjb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgIDxTdGFja0xheW91dCB3aWR0aD1cXFwiMTAwJVxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiIGNsYXNzPVxcXCJtLXQtMTBwXFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIk91dCBvZiB0aGUgd2F5XFxcIiBjbGFzcz1cXFwidHh0LXNcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPEZsZXhib3hMYXlvdXQgY2xhc3M9XFxcImFjdGlvbnNcXFwiPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uICB0YXA9XFxcImhpZGVEaWFsb2dcXFwiIHRleHQ9XFxcIk9LXFxcIiBjbGFzcz1cXFwiYWN0aW9uXFxcIi8+XFxuICAgICAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxcbiAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxcbiAgICAgIDwvU3RhY2tMYXlvdXQ+IFxcbiAgICAgIDwhLS0gZGxnIEFsZXJ0LS0+XFxuXFxuICAgICAgPCEtLSBkbGcgb2ZmbGluZS0tPlxcbiAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwibGctZGlhbG9nXFxcIiB0YXA9XFxcImhpZGVEaWFsb2dcXFwiIGlkPVxcXCJ1c2VyLW9mZmxpbmVcXFwiPlxcbiAgICAgICAgPEZsZXhib3hMYXlvdXQgc3RyZXRjaExhc3RDaGlsZD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImRpYWxvZ1xcXCIgdGFwPVxcXCJub29wXFxcIj5cXG4gICAgICAgICAgICA8RmxleGJveExheW91dCBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCIgY2xhc3M9XFxcInRpdGxlXFxcIj5cXG4gICAgICAgICAgICAgICAgPGxhYmVsIHRleHQ9XFxcIm9mZmxpbmVcXFwiIGNsYXNzPVxcXCJ0ZXh0XFxcIi8+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gIHRhcD1cXFwiaGlkZURpYWxvZ1xcXCIgdGV4dD1cXFwiJiN4ZjAwZDtcXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIvPlxcbiAgICAgICAgICAgIDwvRmxleGJveExheW91dD5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHdpZHRoPVxcXCIxMDAlXFxcIiBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCIgY2xhc3M9XFxcIm0tdC0xMHBcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIHRleHQ9XFxcIllvdSBhcmUgaW4gb2ZmbGluZSBtb2RlLiBUaGUgbWFwIG1heSBub3QgYmUgdXBkYXRlZC5cXFwiIGNsYXNzPVxcXCJ0eHQtc1xcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICA8RmxleGJveExheW91dCBjbGFzcz1cXFwiYWN0aW9uc1xcXCI+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gIHRhcD1cXFwiaGlkZURpYWxvZ1xcXCIgdGV4dD1cXFwiT0tcXFwiIGNsYXNzPVxcXCJhY3Rpb25cXFwiLz5cXG4gICAgICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XFxuICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XFxuICAgICAgPC9TdGFja0xheW91dD4gXFxuICAgICAgPCEtLSBkbGcgb2ZmbGluZS0tPlxcblxcbiAgICAgIDwhLS0gZGxnIGNoZWNrZGF0YS0tPlxcbiAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwibGctZGlhbG9nXFxcIiB0YXA9XFxcIm5vb3BcXFwiIGlkPVxcXCJjaGVja2RhdGFcXFwiPlxcbiAgICAgICAgPEZsZXhib3hMYXlvdXQgc3RyZXRjaExhc3RDaGlsZD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImRpYWxvZ1xcXCIgdGFwPVxcXCJub29wXFxcIj5cXG4gICAgICAgICAgICA8RmxleGJveExheW91dCBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCIgY2xhc3M9XFxcInRpdGxlXFxcIj5cXG4gICAgICAgICAgICAgICAgPGxhYmVsIHRleHQ9XFxcIndhaXQgZGF0YVxcXCIgY2xhc3M9XFxcInRleHRcXFwiLz5cXG4gICAgICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJjb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgXFxuICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgd2lkdGg9XFxcIjEwMCVcXFwiIG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIiBjbGFzcz1cXFwibS10LTEwcFxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ3YWl0IGRhdGEuLi5cXFwiIGNsYXNzPVxcXCJ0eHQtcyBcXFwiPjwvTGFiZWw+ICBcXG4gICAgICAgICAgICAgICAgPEFjdGl2aXR5SW5kaWNhdG9yIGJ1c3k9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJtLXQtMzBwXFxcIi8+PCEtLSBsb25kaW5nLS0+XFxuICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiY29udGVudFxcXCI+IFxcbiAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIHRleHQ9XFxcIipQcmVzcyBSRUZSRVNIIHRvIGxvYWQgbWFwIGRhdGEgYW5kIHNlYXJjaCBmb3IgZGV2aWNlcy5cXFwiIGNsYXNzPVxcXCJzZXRfdGhhaTFcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICA8RmxleGJveExheW91dCBjbGFzcz1cXFwiYWN0aW9uc1xcXCI+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gIHRhcD1cXFwicmVNYXBcXFwiIHRleHQ9XFxcInJlZnJlc2ggXFxcIiBjbGFzcz1cXFwiYWN0aW9uXFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcIiNBREY4NzNcXFwiLz5cXG4gICAgICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XFxuICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XFxuICAgICAgPC9TdGFja0xheW91dD4gXFxuICAgICAgPCEtLSBkbGcgY2hlY2tkYXRhLS0+XFxuXFxuICAgICAgPCEtLSBkbGcgY291bnRVc2VyLS0+XFxuICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJsZy1kaWFsb2dcXFwiIHRhcD1cXFwibm9vcFxcXCIgaWQ9XFxcImNvdW50VXNlclxcXCI+XFxuICAgICAgICA8RmxleGJveExheW91dCBzdHJldGNoTGFzdENoaWxkPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwiZGlhbG9nXFxcIiB0YXA9XFxcIm5vb3BcXFwiPlxcbiAgICAgICAgICAgPEZsZXhib3hMYXlvdXQgIG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIiBjbGFzcz1cXFwidGl0bGUgaGVhZGVybWVudVxcXCIgaGVpZ2h0PVxcXCIxMSVcXFwiPlxcbiAgICAgICAgICAgICAgPGxhYmVsIHRleHQ9XFxcIlVzZXJzXFxcIiBjbGFzcz1cXFwidGV4dFxcXCIvPlxcbiAgICAgICAgICAgICAgPEJ1dHRvbiAgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwibGVmdFxcXCIgdGFwPVxcXCJoaWRlRGlhbG9nXFxcIiB0ZXh0PVxcXCImI3hmMDU3O1xcXCIgIGNsYXNzPVxcXCJjbG9zZSAgbGVmdCAgXFxcIi8+XFxuICAgICAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCIgY2xhc3M9XFxcInRvdGFsLXVzZXJzXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiVG90YWwgOiBcXFwiIHdpZHRoPVxcXCI4MCVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7Y291bnRVc2VyWzBdLmNvdW50VXNlcn19XFxcIiAgd2lkdGg9XFxcIjIwJVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICAgIDxMaXN0VmlldyBpdGVtcz1cXFwie3sgY291bnRVc2VyIH19XFxcIiBpdGVtVGFwPVxcXCJyZW1vdmVDYXJkXFxcIiBjbGFzcz1cXFwidXNlcnMtc2VsZWN0b3JcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxMaXN0Vmlldy5pdGVtVGVtcGxhdGUgIGxldC1jb3VudHJ5PVxcXCJpdGVtXFxcIiBsZXQtaT1cXFwiaW5kZXhcXFwiIGxldC1vZGQ9XFxcIm9kZFxcXCIgbGV0LWV2ZW49XFxcImV2ZW5cXFwiIGNsYXNzPVxcXCJsaXN0LWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcIml0ZW1cXFwiIG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCImI3hmMjFkO1xcXCIgY29sb3I9XFxcIiMzODk4RTdcXFwiIGNsYXNzPVxcXCJ0eHQtY291bnQtaWNvblxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBwaG9uZV9udW1iZXIgfX1cXFwiIGNsYXNzPVxcXCJ0eHQtY291bnQtbmFtZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBuYW1lIH19XFxcIiBjbGFzcz1cXFwidHh0LWNvdW50LXBvaW50XFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICAgIDwvTGlzdFZpZXcuaXRlbVRlbXBsYXRlPlxcbiAgICAgICAgICAgICAgPC9MaXN0Vmlldz5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxcbiAgICAgIDwvU3RhY2tMYXlvdXQ+IFxcbiAgICAgIDwhLS0gZGxnIGNvdW50VXNlci0tPlxcblxcbiAgICAgIDwhLS0gZGxnIFN0YXJ0LS0+XFxuICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJsZy1kaWFsb2dcXFwiIHRhcD1cXFwibm9vcFxcXCIgaWQ9XFxcInBvaW50U3RhcnRcXFwiPlxcbiAgICAgICAgPEZsZXhib3hMYXlvdXQgc3RyZXRjaExhc3RDaGlsZD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImRpYWxvZ1xcXCIgdGFwPVxcXCJub29wXFxcIj5cXG4gICAgICAgICAgICA8RmxleGJveExheW91dCBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCIgY2xhc3M9XFxcInRpdGxlXFxcIj5cXG4gICAgICAgICAgICAgICAgPGxhYmVsIHRleHQ9XFxcIlBvaW50IFN0YXJ0XFxcIiBjbGFzcz1cXFwidGV4dFxcXCIvPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uICB0YXA9XFxcImhpZGVEaWFsb2dcXFwiIHRleHQ9XFxcIiYjeGYwMGQ7XFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiLz5cXG4gICAgICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJjb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJTdGFydC4uLlxcXCIgY2xhc3M9XFxcInR4dC1zXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPEZsZXhib3hMYXlvdXQgY2xhc3M9XFxcImFjdGlvbnNcXFwiPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uICB0YXA9XFxcImhpZGVEaWFsb2dcXFwiIHRleHQ9XFxcIk9LXFxcIiBjbGFzcz1cXFwiYWN0aW9uXFxcIi8+XFxuICAgICAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxcbiAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxcbiAgICAgIDwvU3RhY2tMYXlvdXQ+IFxcbiAgICAgIDwhLS0gZGxnIFN0YXJ0LS0+XFxuXFxuICAgICAgPCEtLSBkbGcgRW5kLS0+XFxuICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJsZy1kaWFsb2dcXFwiIHRhcD1cXFwibm9vcFxcXCIgaWQ9XFxcInBvaW50RW5kXFxcIj5cXG4gICAgICAgIDxGbGV4Ym94TGF5b3V0IHN0cmV0Y2hMYXN0Q2hpbGQ9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJkaWFsb2dcXFwiIHRhcD1cXFwibm9vcFxcXCI+XFxuICAgICAgICAgICAgPEZsZXhib3hMYXlvdXQgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiIGNsYXNzPVxcXCJ0aXRsZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxsYWJlbCB0ZXh0PVxcXCJQb2ludCBFbmRcXFwiIGNsYXNzPVxcXCJ0ZXh0XFxcIi8+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gIHRhcD1cXFwiaGlkZURpYWxvZ1xcXCIgdGV4dD1cXFwiJiN4ZjAwZDtcXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIvPlxcbiAgICAgICAgICAgIDwvRmxleGJveExheW91dD5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkVuZC4uLlxcXCIgY2xhc3M9XFxcInR4dC1zXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPEZsZXhib3hMYXlvdXQgY2xhc3M9XFxcImFjdGlvbnNcXFwiPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRhcD1cXFwiaGlkZURpYWxvZ1xcXCIgdGV4dD1cXFwiT0tcXFwiIGNsYXNzPVxcXCJhY3Rpb25cXFwiLz5cXG4gICAgICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XFxuICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XFxuICAgICAgPC9TdGFja0xheW91dD4gXFxuICAgICAgPCEtLSBkbGcgRW5kLS0+XFxuXFxuICAgICAgPCEtLSBkbGcgYWJvdXRlLS0+XFxuICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJsZy1kaWFsb2dcXFwiIHRhcD1cXFwibm9vcFxcXCIgaWQ9XFxcImFib3V0ZVxcXCI+XFxuICAgICAgICA8RmxleGJveExheW91dCAgIHN0cmV0Y2hMYXN0Q2hpbGQ9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJkaWFsb2cgIFxcXCIgdGFwPVxcXCJub29wXFxcIj5cXG4gICAgICAgICAgPEZsZXhib3hMYXlvdXQgIG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIiBjbGFzcz1cXFwidGl0bGUgaGVhZGVybWVudVxcXCIgaGVpZ2h0PVxcXCIxMSVcXFwiPlxcbiAgICAgICAgICAgICAgPGxhYmVsIHRleHQ9XFxcIkFib3V0ZVxcXCIgY2xhc3M9XFxcInRleHRcXFwiLz5cXG4gICAgICAgICAgICAgIDxCdXR0b24gIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImxlZnRcXFwiIHRhcD1cXFwiaGlkZURpYWxvZ1xcXCIgdGV4dD1cXFwiJiN4ZjA1NztcXFwiICBjbGFzcz1cXFwiY2xvc2UgIGxlZnQgIFxcXCIvPlxcbiAgICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XFxuICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxuICAgICAgICAgICAgPFNjcm9sbFZpZXcgd2lkdGg9XFxcIjEwMCVcXFwiICBoZWlnaHQ9XFxcIjEwMCVcXFwiPlxcbiAgICAgICAgICAgICA8R3JpZExheW91dCBjbGFzcz1cXFwibS0xMFxcXCIgcm93cz1cXFwiYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvXFxcIj5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0ICByb3c9XFxcIjBcXFwiIG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiJiN4ZjJiYjtcXFwiIGNsYXNzPVxcXCJhYm91dGUtdHh0XFxcIj48L0xhYmVsPjxMYWJlbCBjbGFzcz1cXFwiYWJvdXRlLXR4dC1kZXRhaWxcXFwiIHdpZHRoPVxcXCIxMDAlXFxcIiBoZWlnaHQ9XFxcImF1dG9cXFwiIHRleHQ9XFxcInBlcnNvbmFsIEluZm9ybWF0aW9uXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcIm0tMTBcXFwiIHJvdz1cXFwiMVxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCImI3hmNTU0O1xcXCIgY2xhc3M9XFxcImFib3V0ZS10eHRcXFwiPjwvTGFiZWw+PExhYmVsIGNsYXNzPVxcXCJhYm91dGUtdHh0LWRldGFpbFxcXCIgIGhlaWdodD1cXFwiYXV0b1xcXCIgdGV4dD1cXFwiVG90YWwgbnVtYmVyIG9mIHBlb3BsZSBvbiB0aGUgcm91dGVcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcIm0tMTBcXFwiIHJvdz1cXFwiMlxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCImI3hmMDllO1xcXCIgY2xhc3M9XFxcImFib3V0ZS10eHRcXFwiPjwvTGFiZWw+PExhYmVsIGNsYXNzPVxcXCJhYm91dGUtdHh0LWRldGFpbFxcXCIgIGhlaWdodD1cXFwiYXV0b1xcXCIgdGV4dD1cXFwiU2lnbmFsIHN0cmVuZ3RoIGJsdWV0b290aCAoUlNTSSlcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcIm0tMTBcXFwiIHJvdz1cXFwiM1xcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCImI3hmMDE4O1xcXCIgY2xhc3M9XFxcImFib3V0ZS10eHRcXFwiPjwvTGFiZWw+PExhYmVsIGNsYXNzPVxcXCJhYm91dGUtdHh0LWRldGFpbFxcXCIgIGhlaWdodD1cXFwiYXV0b1xcXCIgdGV4dD1cXFwiVGhlIGRpc3RhbmNlIGZyb20gdGhlIGN1cnJlbnQgcG9pbnRcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugcm93PVxcXCI0XFxcIiBzcmM9XFxcIn4vaW1hZ2VzL0ZJVE1sb2dvLnBuZ1xcXCIgY2xhc3M9XFxcImZhcyB0LTI4IG0tMTAgYWJvdXRlLWxvZ29cXFwiPjwvSW1hZ2U+XFxuICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgPC9TY3JvbGxWaWV3PlxcbiAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxcbiAgICAgIDwvU3RhY2tMYXlvdXQ+IFxcbiAgICAgIDwhLS0gZGxnIGFib3V0ZS0tPlxcblxcblxcbiAgICA8L0Fic29sdXRlTGF5b3V0PlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IHdpZHRoPVxcXCIxMDAlXFxcIiAgY2xhc3M9XFxcImJnbWFwIFxcXCI+XFxuICAgICAgPEZsZXhib3hMYXlvdXQgIHdpZHRoPVxcXCIxMDAlXFxcIiBoZWlnaHQ9XFxcIjEwMCVcXFwiIGNsYXNzPVxcXCIgbWFwLW1lbnUgXFxcIj5cXG4gICAgICAgICAgPExhYmVsIHRleHQ9XFxcIiYjeGYyYmI7XFxcIiB0YXA9XFxcInVzZXJcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCImI3hmNTU0O1xcXCIgdGFwPVxcXCJ1c2VyQ291bnRcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiJiN4ZjA1OTtcXFwiIHRhcD1cXFwiYWJvdXRlXFxcIj48L0xhYmVsPlxcbiAgICAgIDwvRmxleGJveExheW91dD5cXG4gICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIFxcbiAgPC9Eb2NrTGF5b3V0PlxcbiAgPCEtLVJFTU9WRV9DQVJELS0+XFxuPC9QYWdlPlxcblwiOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL21hcC54bWxcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwibWFya3VwXCIsIHBhdGg6IFwiLi9tYXAueG1sXCIgfSk7XG4gICAgfSk7XG59ICIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnR4dC1oe1xcbiAgICBmb250LXNpemU6IDI4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwJTtcXG59XFxuXFxuLnR4dC1ze1xcbiAgICBmb250LXNpemU6IDE4O1xcbiAgICBtYXJnaW46IDUlLDAsMCw4JTtcXG59XFxuXFxuLnR4dC1me1xcbiAgICB3aWR0aDo1MCU7XFxufVxcbi5tLXQtNHB7XFxuICAgIG1hcmdpbi10b3A6IDQlO1xcbiAgIFxcbn1cXG4ubS10LTVwe1xcbiAgICBtYXJnaW4tdG9wOiA1JTtcXG4gICBcXG59XFxuLm0tdC0xMHB7XFxuICAgIG1hcmdpbi10b3A6IDEwJTtcXG4gICBcXG59XFxuLm0tdC0yMHB7XFxuICAgIG1hcmdpbi10b3A6IDIwJTtcXG4gICBcXG59XFxuLm0tdC0zMHB7XFxuICAgIG1hcmdpbi10b3A6IDMwJTtcXG4gICAgXFxufVxcbi5tLXQtMzZwe1xcbiAgICBtYXJnaW4tdG9wOiAzNiU7XFxuICAgIFxcbn1cXG4ubS10LTQwcHtcXG4gICAgbWFyZ2luLXRvcDogNDAlO1xcbiAgIFxcbn1cXG5cXG4uYnRuLXNjYW57XFxuICAgIHdpZHRoOiA0MiU7XFxufVxcblxcbi5idG4tc3VibWl0e1xcbiAgICB3aWR0aDogNDIlO1xcbn1cXG5cXG4uYmd7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwifi9pbWFnZXMvcGV4ZWxzLXBob3RvLTEyODIyNjQuanBnXFxcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcblxcbi5sZy1kaWFsb2cge1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBoZWlnaHQ6MTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xcbiAgICB2aXNpYmlsaXR5OiBjb2xsYXBzZTtcXG59XFxuLmxnLWRpYWxvZyAuZGlhbG9nIHtcXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCd+L2ltYWdlcy9iZy5wbmcnKTsgKi9cXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA0O1xcbiAgICB3aWR0aDogMjgwO1xcbiAgICBoZWlnaHQ6IDQwMDtcXG4gICAgbWFyZ2luOiA0OCBhdXRvO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5kaWFsb2cgLnRpdGxle1xcbiAgICBwb3NpdGlvbjogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA0MDtcXG4gICAgcGFkZGluZzowO1xcbiAgICBtYXJnaW4tYm90dG9tOiA4O1xcbiAgICBmbGV4LXNocmluazogMDsgICBcXG59XFxuXFxuLnRpdGxlIC50ZXh0IHtcXG4gICAgZm9udC1zaXplOiAyMDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDYgOCAwIDg7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuLmNsb3NlIHtcXG4gICAgLyogZmxleC1zaHJpbms6IDA7ICovXFxuICAgIHdpZHRoOiA0MDtcXG4gICAgbWFyZ2luOiA0O1xcbiAgICAvKiBmb250LXNpemU6IDE2OyAqL1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblxcbi5jb250ZW50IHtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG4uYWN0aW9ucyB7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICBjb2xvcjogcmdiKDc4LCA3MSwgNzEpO1xcbiAgICBtYXJnaW46IDAgMDtcXG4gICAgaGVpZ2h0OiA1MDtcXG59XFxuLmFjdGlvbnMgLmFjdGlvbiB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuLmhlYWRlcntcXG5cXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCd+L2ltYWdlcy9iZ19oZWFkZXIuanBnJyk7XFxufVxcbi8qLS0tLS0tLS0tLS0tLS0tLS1mb3JtIHRleHRib3gtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbi5zZWxlY3Rib3h7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogMTUlO1xcbiAgICBtYXJnaW46IDVweCAxMCU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NCwgMTYzLCAxNjMsIDAuNTYyKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gIH1cXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4gIFxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tYnV0dG9ucyBzY2FuIGNhcmQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5idG4tZ3JvdXAgLmJ1dHRvbnMyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDsgXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgcGFkZGluZzogMTVweCAzMnB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG4gIC5idXR0b25zMiB7XFxuXFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogMTElO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwgMCwgMCk7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMiwgMjMwLCAyMzAsIDAuODE1KTtcXG4gICAgYm9yZGVyOiAycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgOXB4ICM5OTk7XFxuICB9XFxuICAuYnV0dG9uczI6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICMzZThlNDF9XFxuICAgIFxcbiAgLmJ1dHRvbnMyOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZThlNDE7XFxuICAgIGJveC1zaGFkb3c6IDAgNXB4ICM2NjY7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xcbiAgfVxcbiAgXFxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbiAgXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1idXR0b25zLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4uYnRuLWdyb3VwIC5idXR0b25zIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyLCAyNDAsIDI0MCk7IFxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIHBhZGRpbmc6IDE1cHggMzJweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuICBcXG4gIC5idXR0b25zIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgLyogaGVpZ2h0OiAxMCU7ICovXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgcGFkZGluZzogMTVweCAzNXB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwLCAxOTcsIDk0LCAwLjc0Nyk7XFxuICAgIGJvcmRlcjogMXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDlweCAjOTk5O1xcbiAgfVxcblxcbiAgLmJ1dHRvbnM6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICMzZThlNDF9XFxuICBcXG4gIC5idXR0b25zOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiY2M0YmM7XFxuICAgIGJveC1zaGFkb3c6IDAgNXB4ICM2NjY7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xcbiAgfVxcbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1BY3Rpb25CYXItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbiAgLkFjdGlvbkJhcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjMsIDE2MiwgMTYyLCAwLjYyMyk7XFxuICB9XFxuICBcXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1lbmQtLS1BY3Rpb25CYXItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1pY29uIGlkLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuICAuaWNvbklEIHtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIG1hcmdpbjogMiUgMCUgMCUgLTEwJTtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHJlc2l6ZTogdmVydGljYWw7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG4gLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4gIC5iZ3Rlc3R7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7IFxcbiAgfVwiLCBcIlwiXSk7XG5cbjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9yZWdpc3Rlci5jc3NcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic3R5bGVcIiwgcGF0aDogXCIuL3JlZ2lzdGVyLmNzc1wiIH0pO1xuICAgIH0pO1xufSAiLCJ2YXIgaW1hZ2VNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9pbWFnZVwiKVxudmFyIGNhbWVyYSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtY2FtZXJhXCIpXG52YXIgT2JzZXJ2YWJsZSA9IHJlcXVpcmUoXCJkYXRhL29ic2VydmFibGVcIilcbmNvbnN0IGZyYW1lTW9kdWxlID0gcmVxdWlyZShcInVpL2ZyYW1lXCIpO1xuY29uc3QgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIilcbmNvbnN0IFRlbGVwaG9ueSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdGVsZXBob255XCIpXG52YXIgYmdodHRwID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1iYWNrZ3JvdW5kLWh0dHBcIik7XG52YXIgc2Vzc2lvbiA9IGJnaHR0cC5zZXNzaW9uKFwiaW1hZ2UtdXBsb2FkXCIpO1xudmFyIGltYWdlU291cmNlTW9kdWxlID0gcmVxdWlyZShcImltYWdlLXNvdXJjZVwiKTtcbnZhciBmcyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCIpO1xudmFyIG9yaWVudGF0aW9uID0gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LW9yaWVudGF0aW9uJylcbnZhciB0b2FzdHkgPSByZXF1aXJlKCduYXRpdmVzY3JpcHQtdG9hc3R5JykuVG9hc3R5O1xuXG5cbiB2YXIgcGFnZURhdGEgPSBuZXcgT2JzZXJ2YWJsZS5mcm9tT2JqZWN0KHtcbiAgICBpZENhcmQ6IFwiXCIsXG4gICAgdXNlck5hbWU6IFwiXCIsXG4gICAgZGV2aWNlSWQ6XCJcIixcbiAgICBwaG9uZU51bWJlcjpcIlwiLFxuICAgIGJsZUlkOlwiXCIsXG59KVxuLy8gMTkyLjE2OC40My41MFxuLy9odHRwOi8vMjAyLjEyOS4xNi42ODo3Nzc3XG5jb25zdCBBUElfVVJMID0gXCJodHRwOi8vMjAyLjEyOS4xNi42ODo3Nzc3XCJcbmxldCBtUmVnaXMgPSBudWxsXG5sZXQgYnRuQ2FtZXJhID1udWxsXG5sZXQgbVJlZ2lzQnRuID1udWxsXG5sZXQgYnRub2ZmbGluZU1vZGUgPSBudWxsXG5sZXQgZGxnUGFnZU1hcCA9IG51bGxcbmV4cG9ydHMucGFnZUxvYWRlZCA9IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAvLyBSZW1vdmVzIGFsbCB2YWx1ZXMuXG4gICAgLy8gYXBwU2V0dGluZ3MuY2xlYXIoKTtcbiAgICBvcmllbnRhdGlvbi5zZXRPcmllbnRhdGlvbihcInBvcnRyYWl0XCIpXG4gICAgLy8gdmFyIGVuID0gamF2YS5uZXQuTmV0d29ya0ludGVyZmFjZS5nZXROZXR3b3JrSW50ZXJmYWNlcygpO1xuICAgIC8vIGZvcih2YXIgb2JqIGluIGVuKXtcbiAgICAvLyAgICAgdmFyIGludGYgPSBlbi5uZXh0RWxlbWVudCgpO1xuICAgIC8vICAgICB2YXIgZW51bUlwQWRkciA9IGludGYuZ2V0TmFtZSgpO1xuICAgIC8vICAgICBpZihpbnRmLmdldEhhcmR3YXJlQWRkcmVzcygpKXtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGVudW1JcEFkZHIpXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyh0b0hleFN0cmluZyhpbnRmLmdldEhhcmR3YXJlQWRkcmVzcygpKSlcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBpZihlbnVtSXBBZGRyID09IFwid2xhbjBcIil7XG4gICAgLy8gICAgICAgICBsZXQgbWFjQWRkcmVzcyA9IGludGYuZ2V0SGFyZHdhcmVBZGRyZXNzKClcbiAgICAvLyAgICAgICAgIGlmIChtYWNBZGRyZXNzID09IG51bGwpIHtcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRvSGV4U3RyaW5nKG1hY0FkZHJlc3MpKVxuICAgIC8vICAgICAgICAgcGFnZURhdGEuYmxlSWQgPSB0b0hleFN0cmluZyhtYWNBZGRyZXNzKVxuICAgIC8vICAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiYmxlSWRcIixwYWdlRGF0YS5ibGVJZCtcIlwiKVxuICAgIC8vICAgICB9XG4gICAgLy8gfVxuICAgIC8vIGZ1bmN0aW9uIHRvSGV4U3RyaW5nKGJ5dGVBcnJheSkge1xuICAgIC8vICAgICBsZXQgaSA9IDBcbiAgICAvLyAgICAgcmV0dXJuIEFycmF5LmZyb20oYnl0ZUFycmF5LCBmdW5jdGlvbihieXRlKSB7XG4gICAgLy8gICAgICAgICBpKytcbiAgICAvLyAgICAgICAgIGlmKGkgPT0gNiApYnl0ZSA9IGJ5dGUtMVxuICAgIC8vICAgICAgIHJldHVybiAoJzAnICsgKGJ5dGUgJiAweEZGKS50b1N0cmluZygxNikpLnNsaWNlKC0yKTtcbiAgICAvLyAgICAgfSkuam9pbignJylcbiAgICAvLyB9XG4gICAgaWYoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwidXNlckRhdGFcIikpe1xuICAgICAgICBsZXQgdXNlckRhdGEgPSBKU09OLnBhcnNlKGFwcFNldHRpbmdzLmdldFN0cmluZyhcInVzZXJEYXRhXCIpKVxuICAgICAgICBpZih1c2VyRGF0YS5waG9uZU51bWJlciAhPSBcIlwiKXtcbiAgICAgICAgICAgIGNvbnN0IG5hdmlnYXRpb25FbnRyeSA9IHtcbiAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiBcIm1hcFwiLFxuICAgICAgICAgICAgICAgIGNvbnRleHQ6IHsgbW9kZTogXCJvbmxpbmVcIiB9LFxuICAgICAgICAgICAgICAgIGFuaW1hdGVkOiBmYWxzZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGZyYW1lTW9kdWxlLmdldEZyYW1lQnlJZCgndG9wbW9zdCcpLm5hdmlnYXRlKG5hdmlnYXRpb25FbnRyeSk7XG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgcGFnZSA9IGFyZ3Mub2JqZWN0XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHBhZ2VEYXRhXG4gICAgXG4gICAgVGVsZXBob255LlRlbGVwaG9ueSgpLnRoZW4oZnVuY3Rpb24ocmVzb2x2ZWQpIHtcbiAgICAgICAgcGFnZURhdGEuZGV2aWNlSWQgPSByZXNvbHZlZC5kZXZpY2VJZFxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2Vycm9yID4nLCBlcnJvcilcbiAgICAgICAgY29uc29sZS5kaXIoZXJyb3IpO1xuICAgIH0pXG4gICAgLy8gbGV0IGlkQ2FyZExlbmd0aCA9IFtdXG4gICAgLy8gbGV0IHVzZXJOYW1lTGVuZ3RoID0gW11cbiAgICAvLyBsZXQgcGhvbmVOdW1iZXJMZW5ndGggPSBbXVxuXG4gICAgbGV0IGlkQ2FyZCA9IHBhZ2UuZ2V0Vmlld0J5SWQoJ2lkQ2FyZCcpXG4gICAgbGV0IHVzZXJOYW1lID0gcGFnZS5nZXRWaWV3QnlJZCgndXNlck5hbWUnKVxuICAgIGxldCBwaG9uZU51bWJlciA9IHBhZ2UuZ2V0Vmlld0J5SWQoJ3Bob25lTnVtYmVyJylcbiAgICBidG5DYW1lcmEgPSBwYWdlLmdldFZpZXdCeUlkKCdidG5DYW1lcmEnKVxuICAgIG1SZWdpcyA9IHBhZ2UuZ2V0Vmlld0J5SWQoJ21SZWdpcycpXG4gICAgbVJlZ2lzQnRuID0gcGFnZS5nZXRWaWV3QnlJZCgnbVJlZ2lzQnRuJylcbiAgICBidG5vZmZsaW5lTW9kZSA9IHBhZ2UuZ2V0Vmlld0J5SWQoJ2J0bm9mZmxpbmVNb2RlJylcbiAgICBkbGdQYWdlTWFwID0gcGFnZS5nZXRWaWV3QnlJZCgndXNlci1wYWdlTWFwJylcblxuICAgIC8vIGlkQ2FyZExlbmd0aFswXSA9IG5ldyBhbmRyb2lkLnRleHQuSW5wdXRGaWx0ZXIuTGVuZ3RoRmlsdGVyKDEzKVxuICAgIC8vIHVzZXJOYW1lTGVuZ3RoWzBdID0gbmV3IGFuZHJvaWQudGV4dC5JbnB1dEZpbHRlci5MZW5ndGhGaWx0ZXIoMzApXG4gICAgLy8gcGhvbmVOdW1iZXJMZW5ndGhbMF0gPSBuZXcgYW5kcm9pZC50ZXh0LklucHV0RmlsdGVyLkxlbmd0aEZpbHRlcigxMClcblxuICAgIC8vIGlkQ2FyZC5hbmRyb2lkLnNldEZpbHRlcnMoaWRDYXJkTGVuZ3RoKVxuICAgIC8vIHVzZXJOYW1lLmFuZHJvaWQuc2V0RmlsdGVycyh1c2VyTmFtZUxlbmd0aClcbiAgICAvLyBwaG9uZU51bWJlci5hbmRyb2lkLnNldEZpbHRlcnMocGhvbmVOdW1iZXJMZW5ndGgpXG4gICAgXG59XG5leHBvcnRzLnRha2VDYW1lcmEgPSAgZnVuY3Rpb24oKSB7XG4gICAgaWYgKHBhZ2VEYXRhLnBob25lTnVtYmVyLmxlbmd0aCA8IDEwKSB7XG4gICAgICAgIHZhciB0b2FzdCA9IG5ldyB0b2FzdHkoeyB0ZXh0OiAnUGxlYXNlIGVudGVyIHlvdXIgbW9iaWxlIHBob25lIG51bWJlciB0byBjb21wbGV0ZSAxMCBkaWdpdHMuJyB9KTtcbiAgICAgICAgdG9hc3Quc2hvdygpXG4gICAgICAgIHJldHVybiBcbiAgICB9IFxuICAgIGNhbWVyYS5yZXF1ZXN0UGVybWlzc2lvbnMoKS50aGVuKFxuICAgICAgICBmdW5jdGlvbiBzdWNjZXNzKCkge1xuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB7a2VlcEFzcGVjdFJhdGlvOiBmYWxzZSwgc2F2ZVRvR2FsbGVyeTogZmFsc2UgfTtcbiAgICAgICAgICAgIGNhbWVyYS50YWtlUGljdHVyZShvcHRpb25zKSAgIFxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGltYWdlQXNzZXQpIHtcbiAgICAgICAgICAgICAgICBkbGdQYWdlTWFwLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSdcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlc3VsdCBpcyBhbiBpbWFnZSBhc3NldCBpbnN0YW5jZVwiKTtcbiAgICAgICAgICAgICAgICB2YXIgaW1hZ2UgPSBuZXcgaW1hZ2VNb2R1bGUuSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSBpbWFnZUFzc2V0O1xuICAgICAgICAgICAgICAgIHZhciBmaWxlID0gIGltYWdlLnNyYy5fYW5kcm9pZDtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gQVBJX1VSTCtcIi9jYXJkc1wiO1xuICAgICAgICAgICAgICAgIHZhciByZXF1ZXN0ID0ge1xuICAgICAgICAgICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiRmlsZS1OYW1lXCI6IFwicGhvdG9cIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJVcGxvYWRpbmdcIlxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgbGV0IHBhcmFtcyA9IFtcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBcInBob25lTnVtYmVyXCIsIHZhbHVlOiBwYWdlRGF0YS5waG9uZU51bWJlciB9LFxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IFwiZGV2aWNlSWRcIiwgdmFsdWU6IHBhZ2VEYXRhLmRldmljZUlkIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogXCJibGVJZFwiLCB2YWx1ZTogcGFnZURhdGEuYmxlSWQgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBcIm5hbWVcIjogJ3Bob3RvJywgXCJmaWxlbmFtZVwiOiBmaWxlLCBcIm1pbWVUeXBlXCI6IFwiaW1hZ2UvanBnXCIgfVxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgbGV0IHRhc2sgPSBzZXNzaW9uLm11bHRpcGFydFVwbG9hZChwYXJhbXMsIHJlcXVlc3QpO1xuICAgICAgICAgICAgICAgIHRhc2sub24oXCJwcm9ncmVzc1wiLCBwcm9ncmVzc0hhbmRsZXIpO1xuICAgICAgICAgICAgICAgIHRhc2sub24oXCJlcnJvclwiLCBlcnJvckhhbmRsZXIpO1xuICAgICAgICAgICAgICAgIHRhc2sub24oXCJyZXNwb25kZWRcIiwgcmVzcG9uZGVkSGFuZGxlcik7XG4gICAgICAgICAgICAgICAgLy8gdGFzay5vbihcImNvbXBsZXRlXCIsIGNvbXBsZXRlSGFuZGxlcik7XG4gICAgICAgICAgICAgICAgbGV0IGRvY3VtZW50cyA9IGZzLmtub3duRm9sZGVycy5kb2N1bWVudHMoKTtcbiAgICAgICAgICAgICAgICBsZXQgcGF0aCA9IGZzLnBhdGguam9pbihkb2N1bWVudHMucGF0aCwgcGFnZURhdGEucGhvbmVOdW1iZXIrXCIuanBnXCIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhdGgpXG4gICAgICAgICAgICAgICAgaW1hZ2VTb3VyY2VNb2R1bGUuZnJvbUFzc2V0KGltYWdlQXNzZXQpXG4gICAgICAgICAgICAgICAgLnRoZW4oaW1hZ2VTb3VyY2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgaW1hZ2VTb3VyY2Uuc2F2ZVRvRmlsZShwYXRoLCBcImpwZ1wiKTtcbiAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhcHBseUZpbHRlciBFUlJPUjogJyArIGVycik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9LCBcbiAgICAgICAgZnVuY3Rpb24gZmFpbHVyZSgpIHtcbiAgICAgICAgLy8gcGVybWlzc2lvbiByZXF1ZXN0IHJlamVjdGVkXG4gICAgICAgIC8vIC4uLiB0ZWxsIHRoZSB1c2VyIC4uLlxuICAgICAgICB9XG4gICAgKTtcbn1cbmV4cG9ydHMucmVnaXN0ZXIgPSAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIGpzb25EYXRhID0ge31cbiAgICB2YXIgdG9hc3QgPSBudWxsXG4gICAganNvbkRhdGEuaWRDYXJkID0gcGFnZURhdGEuaWRDYXJkXG4gICAganNvbkRhdGEudXNlck5hbWUgPSBwYWdlRGF0YS51c2VyTmFtZVxuICAgIGpzb25EYXRhLmRldmljZUlkID0gcGFnZURhdGEuZGV2aWNlSWRcbiAgICBqc29uRGF0YS5waG9uZU51bWJlciA9IHBhZ2VEYXRhLnBob25lTnVtYmVyXG4gICAganNvbkRhdGEuYmxlSWQgPSBwYWdlRGF0YS5ibGVJZFxuICAgIGpzb25EYXRhLnBpYyA9ICcnXG5cbiAgICBsZXQgdGV4dCA9IG51bGxcbiAgICB2YXIgdGVzdGVyID0gL15bYS16QS1aMC054LiBLeC5mSBdKiQvXG4gICAgaWYgKGpzb25EYXRhLnVzZXJOYW1lLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGV4dCA9ICdQbGVhc2UgZW50ZXIgbmFtZSdcbiAgICB9IGVsc2UgaWYgKGpzb25EYXRhLnBob25lTnVtYmVyLmxlbmd0aCA8IDEwKSB7XG4gICAgICB0ZXh0ID0gJ1BsZWFzZSBlbnRlciB5b3VyIG1vYmlsZSBwaG9uZSBudW1iZXIgdG8gY29tcGxldGUgMTAgZGlnaXRzLidcbiAgICB9IGVsc2UgaWYgKGpzb25EYXRhLmRldmljZUlkLmxlbmd0aCA8IDApIHtcbiAgICAgIHRleHQgPSAnTk8gRGV2aWNlIElELidcbiAgICB9IFxuICAgIC8vIGVsc2UgaWYgKGpzb25EYXRhLmlkQ2FyZC5sZW5ndGggPCA3KSB7XG4gICAgLy8gICB0ZXh0ID0gJ0lEIENhcmQgaW5jb3JyZWN0LidcbiAgICAvLyB9XG4gICAgZWxzZSBpZiAoIXRlc3Rlci50ZXN0KHBhZ2VEYXRhLnVzZXJOYW1lKSkge1xuICAgICAgICB0ZXh0ID0gJ1BsZWFzZSBlbnRlciB0aGUgZmlyc3QgYW5kIGxhc3QgbmFtZSBpbiB0aGUgYWxwaGFiZXQuIGEteiwgQS1aLCAwLTksIEEtOSdcbiAgICB9XG4gICAgaWYgKHRleHQgIT0gbnVsbCkge1xuICAgICAgdmFyIHRvYXN0ID0gbmV3IHRvYXN0eSh7IHRleHQ6IHRleHQgfSk7XG4gICAgICB0b2FzdC5zaG93KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBmZXRjaChBUElfVVJMK1wiL2luc2VydFVzZXJcIiwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGpzb25EYXRhKVxuICAgIH0pLnRoZW4oKHIpID0+IHIuanNvbigpKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZihyZXNwb25zZS5zdGF0dXMgPT0gXCJTdWNjZXNzXCIpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTdWNjZXNzXCIpXG4gICAgICAgICAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJ1c2VyRGF0YVwiLCBKU09OLnN0cmluZ2lmeShqc29uRGF0YSkpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhqc29uRGF0YSlcbiAgICAgICAgICAgIHZhciB0b2FzdCA9IG5ldyB0b2FzdHkoeyB0ZXh0OiBcInJlZ2lzdGVyIHN1Y2Nlc3NcIn0pO1xuICAgICAgICAgICAgdG9hc3Quc2hvdygpXG4gICAgICAgICAgICBjb25zdCBuYXZpZ2F0aW9uRW50cnkgPSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogXCJtYXBcIixcbiAgICAgICAgICAgICAgICBjb250ZXh0OiB7IG1vZGU6IFwib25saW5lXCIgfSxcbiAgICAgICAgICAgICAgICBhbmltYXRlZDogZmFsc2VcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmcmFtZU1vZHVsZS5nZXRGcmFtZUJ5SWQoJ3RvcG1vc3QnKS5uYXZpZ2F0ZShuYXZpZ2F0aW9uRW50cnkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYocmVzcG9uc2Uuc3RhdHVzID09IFwiRmFpbFwiKXtcbiAgICAgICAgICAgIHZhciB0b2FzdCA9IG5ldyB0b2FzdHkoeyB0ZXh0OiBcInJlZ2lzdGVyIGZhaWxcIn0pO1xuICAgICAgICAgICAgdG9hc3Quc2hvdygpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihyZXNwb25zZS5zdGF0dXMgPT0gXCJEdXBsaWNhdGVVc2VyXCIpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEdXBsaWNhdGVVc2VyXCIpXG4gICAgICAgIH1cbiAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnKioqZmV0Y2ggZXJyb3IqKionKVxuICAgICAgICB2YXIgdG9hc3QgPSBuZXcgdG9hc3R5KHsgdGV4dDogXCJub3Qgc2VuZCBkYXRhIHRvIHNlcnZlclwifSk7XG4gICAgICAgIHRvYXN0LnNob3coKVxuXG4gICAgfSk7XG5cbn1cbmV4cG9ydHMuc2hvd01SZWdpcyA9ICgpID0+IHtcbiAgICBpZihtUmVnaXMuc3R5bGUudmlzaWJpbGl0eSA9PSAnY29sbGFwc2UnKXtcbiAgICAgICAgYnRuQ2FtZXJhLnN0eWxlLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnXG4gICAgICAgIG1SZWdpcy5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnXG4gICAgICAgIG1SZWdpc0J0bi5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnXG4gICAgfSBlbHNlIHtcbiAgICAgICAgYnRuQ2FtZXJhLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSdcbiAgICAgICAgYnRub2ZmbGluZU1vZGUuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJ1xuICAgICAgICBtUmVnaXMuc3R5bGUudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSdcbiAgICAgICAgbVJlZ2lzQnRuLnN0eWxlLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnXG4gICAgfVxufVxuZXhwb3J0cy5ub29wID0gKCkgPT4ge1xufVxuZXhwb3J0cy5vZmZsaW5lTW9kZSA9ICgpID0+IHtcbiAgICB2YXIganNvbkRhdGEgPSB7fVxuICAgIHZhciB0b2FzdCA9IG51bGxcbiAgICBqc29uRGF0YS5pZENhcmQgPSBwYWdlRGF0YS5pZENhcmRcbiAgICBqc29uRGF0YS51c2VyTmFtZSA9IHBhZ2VEYXRhLnVzZXJOYW1lXG4gICAganNvbkRhdGEuZGV2aWNlSWQgPSBwYWdlRGF0YS5kZXZpY2VJZFxuICAgIGpzb25EYXRhLnBob25lTnVtYmVyID0gcGFnZURhdGEucGhvbmVOdW1iZXJcbiAgICBqc29uRGF0YS5ibGVJZCA9IHBhZ2VEYXRhLmJsZUlkXG4gICAganNvbkRhdGEucGljID0gJydcblxuICAgIGlmIChwYWdlRGF0YS5waG9uZU51bWJlci5sZW5ndGggPCAxMCkge1xuICAgICAgICB2YXIgdG9hc3QgPSBuZXcgdG9hc3R5KHsgdGV4dDonUGxlYXNlIGVudGVyIHlvdXIgbW9iaWxlIHBob25lIG51bWJlciB0byBjb21wbGV0ZSAxMCBkaWdpdHMuJ30pO1xuICAgICAgICB0b2FzdC5zaG93KClcbiAgICAgICAgcmV0dXJuICAgICAgICAgXG4gICAgfSBcbiAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJ1c2VyRGF0YVwiLCBKU09OLnN0cmluZ2lmeShqc29uRGF0YSkpXG4gICAgY29uc29sZS5sb2coanNvbkRhdGEpXG4gICAgdmFyIHRvYXN0ID0gbmV3IHRvYXN0eSh7IHRleHQ6XCJvZmZsaW5lIG1vZGUgc3VjY2Vzc1wifSk7XG4gICAgdG9hc3Quc2hvdygpXG4gICAgY29uc3QgbmF2aWdhdGlvbkVudHJ5ID0ge1xuICAgICAgICBtb2R1bGVOYW1lOiBcIm1hcFwiLFxuICAgICAgICBjb250ZXh0OiB7IG1vZGU6IFwib2ZmbGluZVwiIH0sXG4gICAgICAgIGFuaW1hdGVkOiBmYWxzZVxuICAgIH07XG4gICAgZnJhbWVNb2R1bGUuZ2V0RnJhbWVCeUlkKCd0b3Btb3N0JykubmF2aWdhdGUobmF2aWdhdGlvbkVudHJ5KTtcbn1cbi8vIGV2ZW50IGFyZ3VtZW50czpcbi8vIHRhc2s6IFRhc2tcbi8vIGN1cnJlbnRCeXRlczogbnVtYmVyXG4vLyB0b3RhbEJ5dGVzOiBudW1iZXJcbmZ1bmN0aW9uIHByb2dyZXNzSGFuZGxlcihlKSB7XG4gICAgY29uc29sZS5sb2coXCJ1cGxvYWRlZCBcIiArIGUuY3VycmVudEJ5dGVzICsgXCIgLyBcIiArIGUudG90YWxCeXRlcyk7XG59XG4gXG4vLyBldmVudCBhcmd1bWVudHM6XG4vLyB0YXNrOiBUYXNrXG4vLyByZXNwb25zZUNvZGU6IG51bWJlclxuLy8gZXJyb3I6IGphdmEubGFuZy5FeGNlcHRpb24gKEFuZHJvaWQpIC8gTlNFcnJvciAoaU9TKVxuLy8gcmVzcG9uc2U6IG5ldC5nb3Rldi51cGxvYWRzZXJ2aWNlLlNlcnZlclJlc3BvbnNlIChBbmRyb2lkKSAvIE5TSFRUUFVSTFJlc3BvbnNlIChpT1MpXG5mdW5jdGlvbiBlcnJvckhhbmRsZXIoZSkge1xuICAgICBjb25zb2xlLmxvZyhcInJlY2VpdmVkIFwiICsgZS5yZXNwb25zZUNvZGUgKyBcIiBjb2RlLlwiKTtcbiAgICAgZGxnUGFnZU1hcC5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJ1xuICAgICB2YXIgdG9hc3QgPSBuZXcgdG9hc3R5KHsgdGV4dDpcInJlZ2lzZXIgZmFpbCBub3Qgc2VuZCBwaWN0dXJlIHRvIHNlcnZlclwifSk7XG4gICAgIHRvYXN0LnNob3coKVxuICAgICB2YXIgc2VydmVyUmVzcG9uc2UgPSBlLnJlc3BvbnNlO1xufVxuIFxuIFxuLy8gZXZlbnQgYXJndW1lbnRzOlxuLy8gdGFzazogVGFza1xuLy8gcmVzcG9uc2VDb2RlOiBudW1iZXJcbi8vIGRhdGE6IHN0cmluZ1xuZnVuY3Rpb24gcmVzcG9uZGVkSGFuZGxlcihlKSB7XG4gICAgXG4gICAgIGNvbnNvbGUubG9nKFwicmVjZWl2ZWQgXCIgKyBlLnJlc3BvbnNlQ29kZSArIFwiIGNvZGUuIFNlcnZlciBzZW50OiBcIiArIGUuZGF0YSk7XG4gICAgIGUuZGF0YSA9IEpTT04ucGFyc2UoZS5kYXRhKVxuICAgICBpZihlLmRhdGFbXCJzdGF0dXNcIl0gPT0gXCJTdWNjZXNzXCIpe1xuICAgICAgICBjb25zb2xlLmxvZyhcIlN1Y2Nlc3NcIilcbiAgICAgICAgbGV0IGpzb25EYXRhID0ge31cbiAgICAgICAganNvbkRhdGEuaWRDYXJkID0gcGFnZURhdGEuaWRDYXJkXG4gICAgICAgIGpzb25EYXRhLnVzZXJOYW1lID0gcGFnZURhdGEudXNlck5hbWVcbiAgICAgICAganNvbkRhdGEuZGV2aWNlSWQgPSBwYWdlRGF0YS5kZXZpY2VJZFxuICAgICAgICBqc29uRGF0YS5ibGVJZCA9IHBhZ2VEYXRhLmJsZUlkXG4gICAgICAgIGpzb25EYXRhLnBob25lTnVtYmVyID0gcGFnZURhdGEucGhvbmVOdW1iZXJcbiAgICAgICAganNvbkRhdGEucGljID0gcGFnZURhdGEucGhvbmVOdW1iZXIrJy5qcGcnXG4gICAgICAgIGRsZ1BhZ2VNYXAuc3R5bGUudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSdcbiAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwidXNlckRhdGFcIiwgSlNPTi5zdHJpbmdpZnkoanNvbkRhdGEpKVxuXG4gICAgICAgIHZhciB0b2FzdCA9IG5ldyB0b2FzdHkoeyB0ZXh0OlwicmVnaXN0ZXIgc3VjY2Vzc1wifSk7XG4gICAgICAgIHRvYXN0LnNob3coKVxuXG4gICAgICAgIGNvbnN0IG5hdmlnYXRpb25FbnRyeSA9IHtcbiAgICAgICAgICAgIG1vZHVsZU5hbWU6IFwibWFwXCIsXG4gICAgICAgICAgICBjb250ZXh0OiB7IG1vZGU6IFwib25saW5lXCIgfSxcbiAgICAgICAgICAgIGFuaW1hdGVkOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICBmcmFtZU1vZHVsZS5nZXRGcmFtZUJ5SWQoJ3RvcG1vc3QnKS5uYXZpZ2F0ZShuYXZpZ2F0aW9uRW50cnkpO1xufVxuICAgIGVsc2UgaWYoZS5kYXRhW1wic3RhdHVzXCJdPT0gXCJGYWlsXCIpe1xuICAgICAgICBkbGdQYWdlTWFwLnN0eWxlLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnXG5cbiAgICAgICAgdmFyIHRvYXN0ID0gbmV3IHRvYXN0eSh7IHRleHQ6XCJyZWdpc3RlciBmYWlsXCJ9KTtcbiAgICAgICAgdG9hc3Quc2hvdygpXG4gICAgfVxuICAgIGVsc2UgaWYoZS5kYXRhW1wic3RhdHVzXCJdPT0gXCJEdXBsaWNhdGVVc2VyXCIpe1xuICAgICAgICBjb25zb2xlLmxvZyhcIkR1cGxpY2F0ZVVzZXJcIilcbiAgICB9XG5cbn1cbiBcbi8vIGV2ZW50IGFyZ3VtZW50czpcbi8vIHRhc2s6IFRhc2tcbi8vIHJlc3BvbnNlQ29kZTogbnVtYmVyXG4vLyByZXNwb25zZTogbmV0LmdvdGV2LnVwbG9hZHNlcnZpY2UuU2VydmVyUmVzcG9uc2UgKEFuZHJvaWQpIC8gTlNIVFRQVVJMUmVzcG9uc2UgKGlPUylcbmZ1bmN0aW9uIGNvbXBsZXRlSGFuZGxlcihlKSB7XG4gICAgIGNvbnNvbGUubG9nKFwicmVjZWl2ZWQgXCIgKyBlLnJlc3BvbnNlQ29kZSArIFwiIGNvZGVcIik7XG4gICAgdmFyIHNlcnZlclJlc3BvbnNlID0gZS5yZXNwb25zZTtcbn1cbiBcbi8vIGV2ZW50IGFyZ3VtZW50czpcbi8vIHRhc2s6IFRhc2tcbmZ1bmN0aW9uIGNhbmNlbGxlZEhhbmRsZXIoZSkge1xuICAgICBjb25zb2xlLmxvZyhcInVwbG9hZCBjYW5jZWxsZWRcIik7XG59XG47IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vcmVnaXN0ZXIuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi9yZWdpc3Rlci5qc1wiIH0pO1xuICAgIH0pO1xufSAiLCJcbm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZSBsb2FkZWQ9XFxcInBhZ2VMb2FkZWRcXFwiIGlkPVxcXCJQYWdlXFxcIiA+XFxuICA8IS0tIDxBY3Rpb25CYXIgdGl0bGU9XFxcIkFPVFxcXCIgY2xhc3M9XFxcImFjdGlvbi1iYXJcXFwiPjwvQWN0aW9uQmFyPiAtLT5cXG4gIDxBY3Rpb25CYXIgIHRpdGxlPVxcXCJvZmYtdHJhY2sgYWxlcnQgc3lzdGVtXFxcIiAgY2xhc3M9XFxcImhlYWRlciBhY3Rpb25zIFxcXCIgPjwvQWN0aW9uQmFyPlxcbiAgPCEtLSBZb3VyIFVJIGNvbXBvbmVudHMgZ28gaGVyZSAtLT5cXG4gIDxBYnNvbHV0ZUxheW91dCAgd2lkdGg9XFxcIjEwMCVcXFwiICBoZWlnaHQ9XFxcIjEwMCVcXFwiID5cXG4gICAgPFN0YWNrTGF5b3V0IHdpZHRoPVxcXCIxMDAlXFxcIiBoZWlnaHQ9XFxcIjEwMCVcXFwiIGNsYXNzPVxcXCJmYXMgYmcgIFxcXCIgPlxcblxcbiAgICAgIDxTdGFja0xheW91dCBpZD1cXFwibVJlZ2lzXFxcIiB2aXNpYmlsaXR5PVxcXCJjb2xsYXBzZVxcXCIgY2xhc3M9XFxcIiBtLXQtMzBwXFxcIj5cXG4gICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcImF1dG8sICosIGF1dG9cXFwiIHJvd3M9XFxcImF1dG8sMFxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcInRvcFxcXCIgPlxcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XFxcIn4vaW1hZ2VzL2Jhc2VsaW5lX3Zwbl9rZXlfYmxhY2tfMjRkcC5wbmdcXFwiIHN0cmV0Y2g9XFxcIm5vbmVcXFwiIGNsYXNzPVxcXCJpY29uSUQgIFxcXCI+PC9JbWFnZT5cXG4gICAgICAgICAgICA8VGV4dEZpZWxkICBoZWlnaHQ9XFxcIjExJVxcXCIgaGludD1cXFwiSUQgQ2FyZFxcXCIgY2xhc3M9XFxcInNlbGVjdGJveCBcXFwiICAgdGV4dD1cXFwie3sgaWRDYXJkIH19XFxcIiAgaWQ9XFxcImlkQ2FyZFxcXCIvPlxcbiAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiYXV0bywgKiwgYXV0b1xcXCIgcm93cz1cXFwiYXV0bywwXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwidG9wXFxcIiA+XFxuICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwifi9pbWFnZXMvYmFzZWxpbmVfcGVyc29uX2JsYWNrXzE4ZHAucG5nXFxcIiBzdHJldGNoPVxcXCJub25lXFxcIiBjbGFzcz1cXFwiaWNvbklEXFxcIj48L0ltYWdlPlxcbiAgICAgICAgICAgIDxUZXh0RmllbGQgIGhlaWdodD1cXFwiMTElXFxcIiBoaW50PVxcXCJVc2VyTmFtZVxcXCIgY2xhc3M9XFxcInNlbGVjdGJveCBcXFwiIHRleHQ9XFxcInt7IHVzZXJOYW1lIH19XFxcIiBpZD1cXFwidXNlck5hbWVcXFwiLz5cXG4gICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiYXV0bywgKiwgYXV0b1xcXCIgcm93cz1cXFwiYXV0bywwXFxcIiAgY2xhc3M9XFxcIlxcXCI+XFxuICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwifi9pbWFnZXMvYmFzZWxpbmVfbG9jYWxfcGhvbmVfYmxhY2tfMThkcC5wbmdcXFwiIHN0cmV0Y2g9XFxcIm5vbmVcXFwiIGNsYXNzPVxcXCJpY29uSURcXFwiPjwvSW1hZ2U+XFxuICAgICAgICAgICAgPFRleHRGaWVsZCB0ZXh0PVxcXCImI3hmMDMwO1xcXCIgYWJJdGVtPVxcXCJ0aXRsZTogJ1RhYiAxJywgaWNvblNvdXJjZTogJ3JlczovL2ljb24nXFxcIiAgaGVpZ2h0PVxcXCIxMyVcXFwiIGhpbnQ9XFxcInRlbGVwaG9uZSBudW1iZXJcXFwiIGNsYXNzPVxcXCJzZWxlY3Rib3ggXFxcIiBrZXlib2FyZFR5cGU9XFxcIm51bWJlclxcXCIgdGV4dD1cXFwie3sgcGhvbmVOdW1iZXIgfX1cXFwiIGlkPVxcXCJwaG9uZU51bWJlclxcXCIvPlxcbiAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgPGJ1dHRvbiB0ZXh0PVxcXCJTdWJtaXRcXFwiIGNsYXNzPVxcXCJtLXQtMTBwIGJ0bi1zdWJtaXQgYnV0dG9uc1xcXCIgdGFwPVxcXCJyZWdpc3RlclxcXCIgaWQ9XFxcIm1SZWdpc0J0blxcXCIgPjwvYnV0dG9uPlxcbiAgICAgICAgPGJ1dHRvbiB0ZXh0PVxcXCJCYWNrXFxcIiBjbGFzcz1cXFwibS10LTRwIGJ1dHRvbnMyXFxcIiB0YXA9XFxcInNob3dJbnB1dFxcXCIgdGFwPVxcXCJzaG93TVJlZ2lzXFxcIj48L2J1dHRvbj5cXG4gICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgIDxTdGFja0xheW91dCBpZD1cXFwibVJlZ2lzXFxcIiB2aXNpYmlsaXR5PVxcXCJcXFwiIGNsYXNzPVxcXCIgbS10LTM2cFxcXCI+XFxuICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCJhdXRvLCAqLCBhdXRvXFxcIiByb3dzPVxcXCJhdXRvLDBcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJ0b3BcXFwiICBjbGFzcz1cXFwiXFxcIiA+XFxuICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwifi9pbWFnZXMvYmFzZWxpbmVfbG9jYWxfcGhvbmVfYmxhY2tfMThkcC5wbmdcXFwiIHN0cmV0Y2g9XFxcIm5vbmVcXFwiIGNsYXNzPVxcXCJpY29uSURcXFwiPjwvSW1hZ2U+XFxuICAgICAgICAgICAgPFRleHRGaWVsZCB0ZXh0PVxcXCImI3hmMDMwO1xcXCIgYWJJdGVtPVxcXCJ0aXRsZTogJ1RhYiAxJywgaWNvblNvdXJjZTogJ3JlczovL2ljb24nXFxcIiAgaGVpZ2h0PVxcXCIxMiVcXFwiIGhpbnQ9XFxcInRlbGVwaG9uZSBudW1iZXJcXFwiIGNsYXNzPVxcXCJzZWxlY3Rib3ggXFxcIiBrZXlib2FyZFR5cGU9XFxcIm51bWJlclxcXCIgdGV4dD1cXFwie3sgcGhvbmVOdW1iZXIgfX1cXFwiIGlkPVxcXCJwaG9uZU51bWJlclxcXCIvPlxcbiAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8YnV0dG9uIHRleHQ9XFxcIlN1Ym1pdFxcXCIgY2xhc3M9XFxcIm0tdC0xMHAgYnRuLXN1Ym1pdCBidXR0b25zXFxcIiB0YXA9XFxcInJlZ2lzdGVyXFxcIiBpZD1cXFwibVJlZ2lzQnRuXFxcIiB2aXNpYmlsaXR5PVxcXCJjb2xsYXBzZVxcXCI+PC9idXR0b24+XFxuICAgICAgICA8YnV0dG9uIHRleHQ9XFxcIk1hbnVsZSBSZWdpc3RlclxcXCIgY2xhc3M9XFxcIm0tdC01cCBidXR0b25zXFxcIiB0YXA9XFxcInNob3dJbnB1dFxcXCIgdGFwPVxcXCJzaG93TVJlZ2lzXFxcIj48L2J1dHRvbj5cXG4gICAgICAgIDxidXR0b24gdGV4dD1cXFwiJiN4ZjAzMDsgU2NhbiBDYXJkIFJlZ2lzdGVyXFxcIiBjbGFzcz1cXFwibS10LTEwIGJ1dHRvbnNcXFwiIHRhcD1cXFwidGFrZUNhbWVyYVxcXCIgaWQ9XFxcImJ0bkNhbWVyYVxcXCI+PC9idXR0b24+XFxuICAgICAgICA8YnV0dG9uIHRleHQ9XFxcIk9mZmxpbmUgTW9kZVxcXCIgY2xhc3M9XFxcIm0tdC0xMCBidXR0b25zXFxcIiB0YXA9XFxcIm9mZmxpbmVNb2RlXFxcIiBpZD1cXFwiYnRub2ZmbGluZU1vZGVcXFwiPjwvYnV0dG9uPlxcbiAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICA8IS0tIGRsZyBwYWdlTWFwLS0+XFxuICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwibGctZGlhbG9nXFxcIiB0YXA9XFxcImhpZGVEaWFsb2dcXFwiIGlkPVxcXCJ1c2VyLXBhZ2VNYXBcXFwiPlxcbiAgICAgIDxGbGV4Ym94TGF5b3V0IHN0cmV0Y2hMYXN0Q2hpbGQ9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJkaWFsb2dcXFwiIHRhcD1cXFwibm9vcFxcXCI+XFxuICAgICAgICAgIDxGbGV4Ym94TGF5b3V0IG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIiBjbGFzcz1cXFwidGl0bGVcXFwiPlxcbiAgICAgICAgICAgICAgPGxhYmVsIHRleHQ9XFxcIkxvYWRcXFwiIGNsYXNzPVxcXCJ0ZXh0XFxcIi8+XFxuICAgICAgICAgIDwvRmxleGJveExheW91dD5cXG4gICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJjb250ZW50XFxcIj5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgd2lkdGg9XFxcIjEwMCVcXFwiIGNsYXNzPVxcXCJtLXQtMTBwXFxcIj5cXG4gICAgICAgICAgICAgICAgPEFjdGl2aXR5SW5kaWNhdG9yIGJ1c3k9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJtLXQtMzBwXFxcIi8+PCEtLSBsb25kaW5nLS0+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgdGV4dD1cXFwiTG9lZGluZy4uLlxcXCIgY2xhc3M9XFxcImxvYWRpbmdcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgPEZsZXhib3hMYXlvdXQgY2xhc3M9XFxcImFjdGlvbnNcXFwiPlxcbiAgICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XFxuICAgICAgPC9GbGV4Ym94TGF5b3V0PlxcbiAgICA8L1N0YWNrTGF5b3V0PiBcXG4gICAgPCEtLSBkbGcgcGFnZU1hcC0tPlxcblxcbiAgPC9BYnNvbHV0ZUxheW91dD5cXG48L1BhZ2U+XFxuXCI7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vcmVnaXN0ZXIueG1sXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcIm1hcmt1cFwiLCBwYXRoOiBcIi4vcmVnaXN0ZXIueG1sXCIgfSk7XG4gICAgfSk7XG59ICJdLCJzb3VyY2VSb290IjoiIn0=