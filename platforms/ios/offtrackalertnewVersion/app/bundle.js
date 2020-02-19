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
    frameModule.getFrameById('topmost').navigate("map");
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
// const frameModule = require("ui/frame");
const getFrameById = __webpack_require__("../node_modules/tns-core-modules/ui/frame/frame.js").getFrameById;
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
// let frameModule = null
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

    page = args.object
    page.bindingContext = pageData
    
    if(appSettings.getString("userData")){
        let userData = JSON.parse(appSettings.getString("userData"))
        if(userData.phoneNumber != ""){
            const navigationEntry = {
                moduleName: "map",
                context: { mode: "online" },
                animated: false
            };
            const frame = getFrameById("Page");
            frame.navigate(navigationEntry);
            // frameModule.topmost().navigate(navigationEntry);
        }
    } 

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
            // frameModule.topmost().navigate(navigationEntry);
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
    // frameModule.topmost().navigate(navigationEntry);
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
        // frameModule.topmost().navigate(navigationEntry);
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
module.exports = "\n<Page loaded=\"pageLoaded\" id=\"Page\" frame=\"register\">\n  <!-- <ActionBar title=\"AOT\" class=\"action-bar\"></ActionBar> -->\n  <ActionBar  title=\"off-track alert system\"  class=\"header actions \" ></ActionBar>\n  <!-- Your UI components go here -->\n  \n  <AbsoluteLayout  width=\"100%\"  height=\"100%\" >\n    <StackLayout width=\"100%\" height=\"100%\" class=\"fas bg  \" >\n\n      <StackLayout id=\"mRegis\" visibility=\"collapse\" class=\" m-t-30p\">\n        <GridLayout columns=\"auto, *, auto\" rows=\"auto,0\" verticalAlignment=\"top\" >\n            <Image src=\"~/images/baseline_vpn_key_black_24dp.png\" stretch=\"none\" class=\"iconID  \"></Image>\n            <TextField  height=\"11%\" hint=\"ID Card\" class=\"selectbox \"   text=\"{{ idCard }}\"  id=\"idCard\"/>\n        </GridLayout>\n        <GridLayout columns=\"auto, *, auto\" rows=\"auto,0\" verticalAlignment=\"top\" >\n            <Image src=\"~/images/baseline_person_black_18dp.png\" stretch=\"none\" class=\"iconID\"></Image>\n            <TextField  height=\"11%\" hint=\"UserName\" class=\"selectbox \" text=\"{{ userName }}\" id=\"userName\"/>\n        </GridLayout>\n          <GridLayout columns=\"auto, *, auto\" rows=\"auto,0\"  class=\"\">\n            <Image src=\"~/images/baseline_local_phone_black_18dp.png\" stretch=\"none\" class=\"iconID\"></Image>\n            <TextField text=\"&#xf030;\" abItem=\"title: 'Tab 1', iconSource: 'res://icon'\"  height=\"13%\" hint=\"telephone number\" class=\"selectbox \" keyboardType=\"number\" text=\"{{ phoneNumber }}\" id=\"phoneNumber\"/>\n        </GridLayout>\n        <button text=\"Submit\" class=\"m-t-10p btn-submit buttons\" tap=\"register\" id=\"mRegisBtn\" ></button>\n        <button text=\"Back\" class=\"m-t-4p buttons2\" tap=\"showInput\" tap=\"showMRegis\"></button>\n      </StackLayout>\n\n      <StackLayout id=\"mRegis\" visibility=\"\" class=\" m-t-36p\">\n        <GridLayout columns=\"auto, *, auto\" rows=\"auto,0\" verticalAlignment=\"top\"  class=\"\" >\n            <Image src=\"~/images/baseline_local_phone_black_18dp.png\" stretch=\"none\" class=\"iconID\"></Image>\n            <TextField text=\"&#xf030;\" abItem=\"title: 'Tab 1', iconSource: 'res://icon'\"  height=\"12%\" hint=\"telephone number\" class=\"selectbox \" keyboardType=\"number\" text=\"{{ phoneNumber }}\" id=\"phoneNumber\"/>\n        </GridLayout>\n      </StackLayout>\n        <button text=\"Submit\" class=\"m-t-10p btn-submit buttons\" tap=\"register\" id=\"mRegisBtn\" visibility=\"collapse\"></button>\n        <button text=\"Manule Register\" class=\"m-t-5p buttons\" tap=\"showInput\" tap=\"showMRegis\"></button>\n        <button text=\"&#xf030; Scan Card Register\" class=\"m-t-10 buttons\" tap=\"takeCamera\" id=\"btnCamera\"></button>\n        <button text=\"Offline Mode\" class=\"m-t-10 buttons\" tap=\"offlineMode\" id=\"btnofflineMode\"></button>\n    </StackLayout>\n\n    <!-- dlg pageMap-->\n    <StackLayout class=\"lg-dialog\" tap=\"hideDialog\" id=\"user-pageMap\">\n      <FlexboxLayout stretchLastChild=\"true\" class=\"dialog\" tap=\"noop\">\n          <FlexboxLayout orientation=\"horizontal\" class=\"title\">\n              <label text=\"Load\" class=\"text\"/>\n          </FlexboxLayout>\n          <StackLayout class=\"content\">\n            <StackLayout width=\"100%\" class=\"m-t-10p\">\n                <ActivityIndicator busy=\"true\" class=\"m-t-30p\"/><!-- londing-->\n                <Label textWrap=\"true\" text=\"Loeding...\" class=\"loading\"></Label>\n            </StackLayout>\n          </StackLayout>\n          <FlexboxLayout class=\"actions\">\n          </FlexboxLayout>\n      </FlexboxLayout>\n    </StackLayout> \n    <!-- dlg pageMap-->\n\n  </AbsoluteLayout>\n</Page>\n"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./register.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./register.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ })

},[["./app.js","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLiBzeW5jIG5vbnJlY3Vyc2l2ZSBeXFwuXFwvYXBwXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkIiwid2VicGFjazovLy9cXGJfW1xcdy1dKlxcLilzY3NzKSQiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vbWFpbi1wYWdlLmpzIiwid2VicGFjazovLy8uL21haW4tcGFnZS54bWwiLCJ3ZWJwYWNrOi8vLy4vbWFwLmNzcyIsIndlYnBhY2s6Ly8vLi9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbWFwLnhtbCIsIndlYnBhY2s6Ly8vLi9yZWdpc3Rlci5jc3MiLCJ3ZWJwYWNrOi8vLy4vcmVnaXN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVnaXN0ZXIueG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRTs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEg7Ozs7Ozs7QUNoQ0EseUVBQTJCLG1CQUFPLENBQUMsZ0RBQWdEO0FBQ25GO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLG9HQUE2Rjs7QUFFL0c7QUFDQSxjQUFjLFFBQVMsbUNBQW1DLHVEQUF1RCx1QkFBdUIsSUFBSSxVQUFVLHdEQUF3RCx1QkFBdUIsSUFBSSxVQUFVLHFEQUFxRCx1QkFBdUIsSUFBSTs7QUFFblUsQztBQUNBLElBQUksS0FBVTs7QUFFZDtBQUNBO0FBQ0EsMkJBQTJCLG1DQUFtQztBQUM5RCxLQUFLO0FBQ0wsQzs7Ozs7Ozs7O0FDYkEsWUFBWSxtQkFBTyxDQUFDLDBFQUF1RDs7O0FBRzNFLFlBQVksSUFBVTtBQUN0Qiw4QkFBOEIsbUJBQU8sQ0FBQyx1REFBOEI7QUFDcEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMENBQTBDLGFBQWEsS0FBSztBQUM1RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMsYUFBYTtBQUN6RCxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQSw0QkFBNEIsMEhBQXdHO0FBQ3BJO0FBQ0EsZ0JBQWdCLElBQVU7QUFDMUIscUQ7QUFDQSxtRkFBbUYsUUFBUyxRO0FBQzVGLGlCQUFpQjtBQUNqQjs7QUFFQSxRQUFRLG1CQUFPLENBQUMseURBQXNDO0FBQ3RELGdDQUFnQyxtQkFBTyxDQUFDLDZEQUFhO0FBQ3JELHVCQUF1Qix5QkFBeUIsRztBQUNoRCxJQUFJLEtBQVU7O0FBRWQ7QUFDQTtBQUNBLDJCQUEyQixtQ0FBbUM7QUFDOUQsS0FBSztBQUNMLEM7Ozs7Ozs7Ozs7O0FDN0NBOztBQUVBO0FBQ0EsQztBQUNBLElBQUksS0FBVTs7QUFFZDtBQUNBO0FBQ0EsMkJBQTJCLHlDQUF5QztBQUNwRSxLQUFLO0FBQ0wsQzs7Ozs7Ozs7O0FDVEEsbUs7QUFDQSxJQUFJLEtBQVU7O0FBRWQ7QUFDQTtBQUNBLDJCQUEyQiwwQ0FBMEM7QUFDckUsS0FBSztBQUNMLEM7Ozs7Ozs7O0FDUkEseUVBQTJCLG1CQUFPLENBQUMsZ0RBQWdEO0FBQ25GO0FBQ0EsY0FBYyxRQUFTLFFBQVEsNEJBQTRCLHVEQUF1RCx3Q0FBd0Msb0NBQW9DLDZCQUE2QixpQ0FBaUMsT0FBTyxjQUFjLG1DQUFtQyxrQ0FBa0MsaUNBQWlDLEdBQUcsZUFBZSx1QkFBdUIscUJBQXFCLEdBQUcsY0FBYyxzQkFBc0IsMEJBQTBCLFNBQVMscUJBQXFCLHNCQUFzQiwyQkFBMkIsMEJBQTBCLEdBQUcsYUFBYSw2QkFBNkIsR0FBRyx5QkFBeUIsaUJBQWlCLGtCQUFrQix3Q0FBd0MsMkJBQTJCLEdBQUcsc0JBQXNCLGtEQUFrRCxxQ0FBcUMsNkJBQTZCLHVCQUF1QixpQkFBaUIsa0JBQWtCLHNCQUFzQiw2QkFBNkIsNkJBQTZCLEdBQUcsaUJBQWlCLHVCQUF1QixrQkFBa0IsaUJBQWlCLGdCQUFnQix1QkFBdUIscUJBQXFCLE1BQU0sa0JBQWtCLG9CQUFvQixtQkFBbUIsZ0JBQWdCLHVCQUF1QixtQkFBbUIsR0FBRyxVQUFVLHlCQUF5QixxQkFBcUIsdUNBQXVDLG1EQUFtRCxJQUFJLGNBQWMsbUJBQW1CLEdBQUcsWUFBWSxxQkFBcUIsNkJBQTZCLGtCQUFrQixpQkFBaUIsR0FBRyxZQUFZLHdEQUF3RCxHQUFHLHNCQUFzQixtQkFBbUIsR0FBRyw4QkFBOEIsNkJBQTZCLHlEQUF5RCxzQkFBc0Isc0JBQXNCLHlCQUF5Qiw4QkFBOEIsNkJBQTZCLHFCQUFxQixHQUFHLGVBQWUsMENBQTBDLDRCQUE0QixnQ0FBZ0MsNEJBQTRCLE9BQU8sZ0JBQWdCLDhDQUE4QywwQkFBMEIsNkJBQTZCLDZCQUE2QixtQ0FBbUMsNkJBQTZCLHNCQUFzQix1QkFBdUIsT0FBTyxtQkFBbUIsa0NBQWtDLDZCQUE2QiwwQkFBMEIsNkJBQTZCLGtDQUFrQyxPQUFPLHVCQUF1QixzQkFBc0IsR0FBRyxhQUFhLHNCQUFzQixzQkFBc0IsOEJBQThCLEdBQUcsZUFBZSwyQkFBMkIsa0JBQWtCLHNCQUFzQixHQUFHLGNBQWMsc0JBQXNCLDJCQUEyQixHQUFHLFVBQVUsc0JBQXNCLDJCQUEyQixHQUFHLGNBQWMsc0JBQXNCLDRCQUE0QixHQUFHLGVBQWUsaUJBQWlCLHNCQUFzQiwyQkFBMkIsR0FBRyxhQUFhLHNCQUFzQixHQUFHLFdBQVcsc0JBQXNCLEdBQUcsV0FBVyxzQkFBc0IsR0FBRyxXQUFXLHNCQUFzQixLQUFLLFdBQVcsc0JBQXNCLEtBQUssVUFBVSw0QkFBNEIsMkJBQTJCLEdBQUcsV0FBVyxzQkFBc0IsR0FBRyxVQUFVLHFCQUFxQixHQUFHLFdBQVcsb0JBQW9CLHdCQUF3QixHQUFHLGNBQWMsa0JBQWtCLG1CQUFtQixHQUFHLHFCQUFxQixrQkFBa0IsbUJBQW1CLDBCQUEwQixNQUFNLFVBQVUseUJBQXlCLHNCQUFzQixHQUFHLHFCQUFxQiwyQkFBMkIseUJBQXlCLGlCQUFpQixLQUFLLG1CQUFtQiwyQkFBMkIsb0JBQW9CLEdBQUcsb0JBQW9CLDJCQUEyQixvQkFBb0IsR0FBRyxjQUFjLGlCQUFpQixtQ0FBbUMsa0NBQWtDLCtCQUErQiw0QkFBNEIsR0FBRyxlQUFlLHdCQUF3QixzQkFBc0Isa0JBQWtCLEdBQUcsVUFBVSw4QkFBOEIsc0JBQXNCLHVCQUF1QixvQkFBb0IsbUJBQW1CLHdCQUF3QixHQUFHLFNBQVMsZUFBZSxpQkFBaUIseUNBQXlDLHNCQUFzQiwwQkFBMEIsMEJBQTBCLEdBQUcsV0FBVyxvQkFBb0IsbUJBQW1CLEdBQUcsZ0dBQWdHLGlCQUFpQix5QkFBeUIsb0JBQW9CLFdBQVcsb0xBQW9MLGlCQUFpQix5QkFBeUIsb0JBQW9CLFdBQVcsbUxBQW1MLGlCQUFpQix5QkFBeUIsb0JBQW9CLFdBQVcsNkpBQTZKLHVCQUF1QixpQkFBaUIsS0FBSywySkFBMkoscUNBQXFDLDhCQUE4QixLQUFLLG1MQUFtTCxxQ0FBcUMsNEJBQTRCLEtBQUssbUxBQW1MLHFDQUFxQyw2QkFBNkIsS0FBSyxpTEFBaUwscUNBQXFDLDRCQUE0QixLQUFLLGdLQUFnSyx1REFBdUQsNERBQTRELFNBQVMsOEhBQThILHNCQUFzQixzQkFBc0IsaUJBQWlCLGtCQUFrQiw0QkFBNEIseUJBQXlCLHNCQUFzQixzQkFBc0IseUJBQXlCLDRCQUE0QixvQkFBb0IsMEJBQTBCLHlDQUF5QyxrQkFBa0IsMEJBQTBCLDZCQUE2QixLQUFLLG1CQUFtQixzQkFBc0IsdUJBQXVCLGlCQUFpQixrQkFBa0IsNEJBQTRCLHlCQUF5QixzQkFBc0Isc0JBQXNCLHlCQUF5Qiw0QkFBNEIsb0JBQW9CLDBCQUEwQix5Q0FBeUMsa0JBQWtCLDBCQUEwQiw2QkFBNkIsS0FBSywrR0FBK0csdUJBQXVCLEtBQUssZ0lBQWdJLGdCQUFnQixpQkFBaUIsUUFBUSwrSEFBK0gsc0RBQXNELE1BQU0sMkdBQTJHLG9EQUFvRCxNQUFNLHNHQUFzRyxvREFBb0QsTUFBTSw2R0FBNkcsb0JBQW9CLDBCQUEwQiw0REFBNEQsMkNBQTJDLHNDQUFzQyxrQ0FBa0MseUJBQXlCLGlCQUFpQix5QkFBeUIscUJBQXFCLHlCQUF5QixHQUFHLHFIQUFxSCw0QkFBNEIsaUJBQWlCLG1CQUFtQix5QkFBeUIscUJBQXFCLHNCQUFzQixzQkFBc0IsbUNBQW1DLDJCQUEyQixxQkFBcUIsbUVBQW1FLEdBQUcsbUJBQW1CLHlCQUF5QixpQkFBaUIsbUJBQW1CLG9CQUFvQixzQkFBc0IsMEJBQTBCLEdBQUcsbUpBQW1KLHNCQUFzQixHQUFHLDRGQUE0RixvQ0FBb0MsVUFBVTs7QUFFbmdULEM7QUFDQSxJQUFJLEtBQVU7O0FBRWQ7QUFDQTtBQUNBLDJCQUEyQixtQ0FBbUM7QUFDOUQsS0FBSztBQUNMLEM7Ozs7Ozs7O0FDWEEsZ0VBQWtCLG1CQUFPLENBQUMseURBQTBCO0FBQ3BELGlCQUFpQixtQkFBTyxDQUFDLGdFQUFpQjtBQUMxQyxnQkFBZ0IsbUJBQU8sQ0FBQyxxREFBd0I7QUFDaEQsb0JBQW9CLG1CQUFPLENBQUMsK0VBQXNCO0FBQ2xELG9CQUFvQixtQkFBTyxDQUFDLG9EQUEyQjtBQUN2RCxvQkFBb0IsbUJBQU8sQ0FBQyxpREFBd0I7QUFDcEQsZUFBZSxtQkFBTyxDQUFDLG1EQUF1QjtBQUM5QyxtQkFBTyxDQUFDLHlDQUFrQjtBQUMxQixjQUFjLG1CQUFPLENBQUMsaURBQXNCO0FBQzVDO0FBQ0Esb0JBQW9CLG1CQUFPLENBQUMsb0RBQVU7QUFDdEMsU0FBUyxtQkFBTyxDQUFDLDZEQUE4QjtBQUMvQyxhQUFhLG1CQUFPLENBQUMsaUVBQThCO0FBQ25EO0FBQ0Esd0JBQXdCLG1CQUFPLENBQUMsK0RBQWM7QUFDOUMsa0JBQWtCLG1CQUFPLENBQUMseURBQTBCO0FBQ3BELG1CQUFtQixtQkFBTyxDQUFDLCtDQUF1QjtBQUNsRCxhQUFhLG1CQUFPLENBQUMsK0NBQXFCOztBQUUxQyxrQ0FBa0MsaUJBQWlCO0FBQ25EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLGdCQUFnQjtBQUNoQixLQUFLLHVJQUF1STtBQUM1SSxLQUFLLHVJQUF1STtBQUM1SSxLQUFLLDRJQUE0STtBQUNqSixLQUFLLHVJQUF1STtBQUM1SSxLQUFLLHVJQUF1STtBQUM1SSxLQUFLLHVJQUF1STtBQUM1SSxLQUFLLHVJQUF1STtBQUM1SSxLQUFLLHVJQUF1STtBQUM1SSxLQUFLLHVJQUF1STtBQUM1SSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssSUFBSTs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIscUJBQXFCOztBQUVyQix1RTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQjtBQUNBOztBQUVBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsaUI7QUFDQSxhO0FBQ0EsUztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixxQ0FBcUM7QUFDdkQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsRTs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0wsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtB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QUEyQix3Q0FBd0M7QUFDbkUsS0FBSztBQUNMLEM7Ozs7Ozs7OztBQy9WQSw2d0JBQTZ3QixVQUFVLDZVQUE2VSxZQUFZLHFSQUFxUix1SkFBdUosZUFBZSwwbUJBQTBtQix1SkFBdUosZUFBZSxpV0FBaVcsaWpDO0FBQzVwRixJQUFJLEtBQVU7O0FBRWQ7QUFDQTtBQUNBLDJCQUEyQix5Q0FBeUM7QUFDcEUsS0FBSztBQUNMLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2FwcC5jc3NcIjogXCIuL2FwcC5jc3NcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgeyAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gaWQ7XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIF5cXFxcLlxcXFwvYXBwXFxcXC4oY3NzfHNjc3N8bGVzc3xzYXNzKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLmNzc1wiOiBcIi4vYXBwLmNzc1wiLFxuXHRcIi4vYXBwLmpzXCI6IFwiLi9hcHAuanNcIixcblx0XCIuL21haW4tcGFnZS5qc1wiOiBcIi4vbWFpbi1wYWdlLmpzXCIsXG5cdFwiLi9tYWluLXBhZ2UueG1sXCI6IFwiLi9tYWluLXBhZ2UueG1sXCIsXG5cdFwiLi9tYXAuY3NzXCI6IFwiLi9tYXAuY3NzXCIsXG5cdFwiLi9tYXAuanNcIjogXCIuL21hcC5qc1wiLFxuXHRcIi4vbWFwLnhtbFwiOiBcIi4vbWFwLnhtbFwiLFxuXHRcIi4vcmVnaXN0ZXIuY3NzXCI6IFwiLi9yZWdpc3Rlci5jc3NcIixcblx0XCIuL3JlZ2lzdGVyLmpzXCI6IFwiLi9yZWdpc3Rlci5qc1wiLFxuXHRcIi4vcmVnaXN0ZXIueG1sXCI6IFwiLi9yZWdpc3Rlci54bWxcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgeyAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gaWQ7XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIHJlY3Vyc2l2ZSAoPzwhXFxcXGJBcHBfUmVzb3VyY2VzXFxcXGIuKilcXFxcLih4bWx8Y3NzfGpzfCg/PCFcXFxcLmRcXFxcLil0c3woPzwhXFxcXGJfW1xcXFx3LV0qXFxcXC4pc2NzcykkXCI7IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gSW1wb3J0c1xuZXhwb3J0cy5pKHJlcXVpcmUoXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTchbmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIpLCBcIlwiKTtcblxuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiBZb3VyIENTUyBnb2VzIGhlcmUgKi9cXG4uZmFyIHtcXG4gICAgZm9udC1mYW1pbHk6IEZvbnQgQXdlc29tZSA1IEZyZWUsIGZhLXJlZ3VsYXItNDAwO1xcbiAgICBmb250LXdlaWdodDogNDAwOyBcXG59XFxuXFxuLmZhYiB7XFxuICAgIGZvbnQtZmFtaWx5OiBGb250IEF3ZXNvbWUgNSBCcmFuZHMsIGZhLWJyYW5kcy00MDA7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7IFxcbn1cXG5cXG4uZmFzIHtcXG4gICAgZm9udC1mYW1pbHk6IEZvbnQgQXdlc29tZSA1IEZyZWUsIGZhLXNvbGlkLTkwMDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDsgXFxufVxcblwiLCBcIlwiXSk7XG5cbjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9hcHAuY3NzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInN0eWxlXCIsIHBhdGg6IFwiLi9hcHAuY3NzXCIgfSk7XG4gICAgfSk7XG59ICIsIlxuICAgICAgICAgICAgcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9sb2FkLWFwcGxpY2F0aW9uLWNzcy1yZWd1bGFyXCIpKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICAgICAgY29uc3QgaG1yVXBkYXRlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9obXJcIikuaG1yVXBkYXRlO1xuICAgICAgICAgICAgZ2xvYmFsLl9faW5pdGlhbEhtclVwZGF0ZSA9IHRydWU7XG4gICAgICAgICAgICBnbG9iYWwuX19obXJTeW5jQmFja3VwID0gZ2xvYmFsLl9fb25MaXZlU3luYztcblxuICAgICAgICAgICAgZ2xvYmFsLl9fb25MaXZlU3luYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBobXJVcGRhdGUoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoID0gZnVuY3Rpb24oeyB0eXBlLCBwYXRoIH0gPSB7fSkge1xuICAgICAgICAgICAgICAgIGlmIChnbG9iYWwuX19pbml0aWFsSG1yVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLl9faG1yU3luY0JhY2t1cCh7IHR5cGUsIHBhdGggfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBobXJVcGRhdGUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBnbG9iYWwuX19pbml0aWFsSG1yVXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHJlcXVpcmUuY29udGV4dChcIn4vXCIsIHRydWUsIC8oPzwhXFxiQXBwX1Jlc291cmNlc1xcYi4qKVxcLih4bWx8Y3NzfGpzfCg/PCFcXC5kXFwuKXRzfCg/PCFcXGJfW1xcdy1dKlxcLilzY3NzKSQvKTtcbiAgICAgICAgICAgIGdsb2JhbC5yZWdpc3RlcldlYnBhY2tNb2R1bGVzKGNvbnRleHQpO1xuICAgICAgICAgICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmFjY2VwdChjb250ZXh0LmlkLCAoKSA9PiB7IFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkhNUjogQWNjZXB0IG1vZHVsZSAnXCIgKyBjb250ZXh0LmlkICsgXCInIGZyb20gJ1wiICsgbW9kdWxlLmlkICsgXCInXCIpOyBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9idW5kbGUtZW50cnktcG9pbnRzXCIpO1xuICAgICAgICB2YXIgYXBwbGljYXRpb25Nb2R1bGUgPSByZXF1aXJlKFwiYXBwbGljYXRpb25cIik7XG5hcHBsaWNhdGlvbk1vZHVsZS5ydW4oeyBtb2R1bGVOYW1lOiBcInJlZ2lzdGVyXCIgfSk7OyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2FwcC5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL2FwcC5qc1wiIH0pO1xuICAgIH0pO1xufSBcbiAgICBcbiAgICAgICAgXG4gICAgICAgICIsImV4cG9ydHMucGFnZUxvYWRlZCA9IGZ1bmN0aW9uKCkge1xuXG59O1xuOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL21haW4tcGFnZS5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL21haW4tcGFnZS5qc1wiIH0pO1xuICAgIH0pO1xufSAiLCJcbm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZSBsb2FkZWQ9XFxcInBhZ2VMb2FkZWRcXFwiPlxcbiAgPEFjdGlvbkJhciB0aXRsZT1cXFwiTXkgQXBwXFxcIiBjbGFzcz1cXFwiYWN0aW9uLWJhclxcXCI+PC9BY3Rpb25CYXI+XFxuICA8IS0tIFlvdXIgVUkgY29tcG9uZW50cyBnbyBoZXJlIC0tPlxcbjwvUGFnZT5cXG5cIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9tYWluLXBhZ2UueG1sXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcIm1hcmt1cFwiLCBwYXRoOiBcIi4vbWFpbi1wYWdlLnhtbFwiIH0pO1xuICAgIH0pO1xufSAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5tYXB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZjsgXFxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwifi9pbWFnZXMvbWFwMS5qcGdcXFwiKTsgKi9cXG4gICAgLyogYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgICovXFxuICAgIC8qIHRyYW5zZm9ybTogc2NhbGUoMSk7ICAqL1xcbn1cXG4ubWFwLWxheW91dHtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG59XFxuLmFib3V0ZS1sb2dve1xcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xcbiAgICBtYXJnaW4tdG9wOiA1JTtcXG59XFxuLmFib3V0ZS10eHR7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgbWFyZ2luOiA1JSAyJSAwJSA1JTtcXG4gICAgXFxufVxcbi5hYm91dGUtdHh0LWRldGFpbHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBtYXJnaW46IDUlIDE1JSAwJSAwJTtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuLm1hcC1tZW51IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcXG59XFxuLyogZGxnICovXFxuLmxnLWRpYWxvZyB7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIGhlaWdodDoxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XFxuICAgIHZpc2liaWxpdHk6IGNvbGxhcHNlO1xcbn1cXG4ubGctZGlhbG9nIC5kaWFsb2cge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ34vaW1hZ2VzL2JnLnBuZycpOyAqL1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQ7XFxuICAgIHdpZHRoOiAyODA7XFxuICAgIGhlaWdodDogNDAwO1xcbiAgICBtYXJnaW46IDQ4IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5kaWFsb2cgLnRpdGxle1xcbiAgICBwb3NpdGlvbjogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA0MDtcXG4gICAgcGFkZGluZzowO1xcbiAgICBtYXJnaW4tYm90dG9tOiA4O1xcbiAgICBmbGV4LXNocmluazogMDsgICBcXG59XFxuXFxuLnRpdGxlIC50ZXh0IHtcXG4gICAgZm9udC1zaXplOiAyMDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDYgOCAwIDg7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuLmNsb3NlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6MThweDtcXG4gICAgY29sb3I6cmdiYSgxMTYsIDExNCwgMTE0LCAwLjg2Myk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45MDQpOyBcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxufVxcbi5hY3Rpb25zIHtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIGNvbG9yOiByZ2IoNzgsIDcxLCA3MSk7XFxuICAgIG1hcmdpbjogMCAwO1xcbiAgICBoZWlnaHQ6IDUwO1xcbn1cXG5cXG4uaGVhZGVye1xcblxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ34vaW1hZ2VzL2JnX2hlYWRlci5qcGcnKTtcXG59XFxuXFxuLmFjdGlvbnMgLmFjdGlvbiB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuLyogZGxnICovXFxuLm1hcC1tZW51IExhYmVsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCd+L2ltYWdlcy9iZ19oZWFkZXIuanBnJyk7ICovXFxuICAgIHdpZHRoOiAzMy40JTtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yaWdodC13aWR0aDogMXB4O1xcbiAgICBib3JkZXItbGVmdC13aWR0aDogMXB4O1xcbiAgICBtYXJnaW4tdG9wOiA3JTtcXG59XFxuLmRldGFpbC1tYXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgICAgYm9yZGVyLXJhZGl1czogMTAlO1xcbiAgICAgICBtYXJnaW46IDEwJSAxMCUgMCUgMTAlO1xcbiAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG4uZGV0YWlsTWFwQnRue1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NCwgMjQxLCAyMyk7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAzMCU7XFxuICAgICAgICAvKiBmb250LXNpemU6IDI4cHg7ICovXFxuICAgICAgICB2aXNpYmlsaXR5IDogY29sbGFwc2U7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgfVxcbiAgICBcXG4ubG9jYXRpb24ge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMCU7XFxuICAgICAgICBmb250LXNpemU6IDI4cHg7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW46IDgwJSAxMCUgMTAlIDgwJTtcXG4gICAgfVxcblxcblxcbi5sb2NhdGlvbiBMYWJlbCB7XFxuICAgIG1hcmdpbi10b3A6IDEyJTtcXG59XFxuLm1hcC1tYXJrIHtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICAvKiBjb2xvcjogYnJvd247ICovXFxuICAgIG1hcmdpbjogMTAlIDAlIDAlIDUlO1xcbn1cXG4udHJhY2stbmFtZSB7XFxuICAgIG1hcmdpbjogMjAlIDAlIDAlIDUlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xcbn1cXG4udXNlci1SU1NJIHtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBtYXJnaW46IDEwJSAwJSAwJSA1JTtcXG59XFxuLnJzc2lzIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBtYXJnaW46IDIwJSAwJSAwJSA1JTtcXG59XFxuLnVzZXItcm9hZCB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgbWFyZ2luOiAyMCUgMCUgMCUgMTUlO1xcbn1cXG4ucm9hZC10b3RhbCB7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbWFyZ2luOiAyMCUgMCUgMCUgNSU7XFxufVxcblxcbi5tLXQtMTBwe1xcbiAgICBtYXJnaW4tdG9wOiAxMCU7XFxufVxcbi5tLXQtMTVwe1xcbiAgICBtYXJnaW4tdG9wOiAxNSU7XFxufVxcbi5tLXQtMjVwe1xcbiAgICBtYXJnaW4tdG9wOiAyNSU7XFxufVxcbi5tLXQtMzBwe1xcbiAgICBtYXJnaW4tdG9wOiAzMCU7XFxuXFxufVxcbi5tLXQtNTBwe1xcbiAgICBtYXJnaW4tdG9wOiA1MCU7XFxuXFxufVxcbi5jZW50ZXJ7XFxuICAgIFxcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIG1hcmdpbjogMCUgMCUgMCUgNDUlO1xcbn1cXG4ubS10LTQ3cHtcXG4gICAgbWFyZ2luLXRvcDogMzUlO1xcbn1cXG4ubS10LTVwe1xcbiAgICBtYXJnaW4tdG9wOiA1JTtcXG59XFxuXFxuLnR4dC1ze1xcbiAgICBmb250LXNpemU6IDE4O1xcbiAgICBtYXJnaW46IDUlLDAsMCw4JTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4udXNlcnMtc2VsZWN0b3Ige1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAvKiBiYWNrZ3JvdW5kOiBncmV5OyAqL1xcbn1cXG5cXG4uaXRlbXtcXG4gICAgLypiYWNrZ3JvdW5kOiAjZmZmOyovXFxuICAgIHBhZGRpbmc6IDU2cHg7XFxufVxcblxcbi50eHQtY291bnQtaWNvbiB7XFxuICAgIC8qIG1hcmdpbi1sZWZ0OiAxMHB4OyAqL1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIHdpZHRoOiAyMCU7XFxuXFxufVxcbi50eHQtY291bnQtbmFtZSB7XFxuICAgIC8qIG1hcmdpbi1sZWZ0OiA2MHB4OyAqL1xcbiAgICB3aWR0aDogNDAlO1xcbn1cXG4udHh0LWNvdW50LXBvaW50IHtcXG4gICAgLyogbWFyZ2luLWxlZnQ6IDYwcHg7ICovXFxuICAgIHdpZHRoOiA0MCU7XFxufVxcblxcbi51c2VyLXBpY3tcXG4gICAgbWFyZ2luOiA1JTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwKTtcXG59XFxuLnRvdGFsLXVzZXJze1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuLmNhbWVyYXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbi10b3A6IDQwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDYwJTtcXG4gICAgZm9udC1zaXplOiAyNDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDtcXG59XFxuLnBvaW50e1xcbiAgICB3aWR0aDoyODtcXG4gICAgaGVpZ2h0OiAyODtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgOTksIDEwKTtcXG4gICAgYm9yZGVyLXdpZHRoOiAxO1xcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4udHh0LW1hcHtcXG4gICAgZm9udC1zaXplOiAxNDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG4vKi0tLS0tLS0tLS0tLS0tLS0tZm9ybSB0ZXh0Ym94LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4uc2VsZWN0Ym94X2lke1xcbiAgICB3aWR0aDogNjQlO1xcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxuICAgIG1hcmdpbjogOHB4IDA7XFxuICAgIFxcbiAgfVxcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1lbmQgZm9ybSB0ZXh0Ym94LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbiAgLyotLS0tLS0tLS0tLS0tLS0tLWZvcm0gdGV4dGJveC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuLnNlbGVjdGJveF91c2Vye1xcbiAgICB3aWR0aDogNjglO1xcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxuICAgIG1hcmdpbjogOHB4IDA7XFxuICAgIFxcbiAgfVxcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1lbmQgZm9ybSB0ZXh0Ym94LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbiAgLyotLS0tLS0tLS0tLS0tLS0tLWZvcm0gdGV4dGJveC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuLnNlbGVjdGJveF90ZWx7XFxuICAgIHdpZHRoOiA3NiU7XFxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcXG4gICAgbWFyZ2luOiA4cHggMDtcXG4gICAgXFxuICB9XFxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWVuZCBmb3JtIHRleHRib3gtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tcHJvZmlsZWxlZnQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbiAgLmxlZnQge1xcbiAgICBtYXJnaW4tbGVmdDogMjclO1xcbiAgICB3aWR0aDogMTUlO1xcbiAgfVxcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWVuZCBsZWZ0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0taWNvbiBjb2xvci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4gIC5pY29uX3dpZmlfY29sb3J7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig4LCA4LCA4KTtcXG4gICAgY29sb3I6IHJnYig0MywgMjYsIDE5Mik7XFxuICB9XFxuIFxcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tZW5kLWljb24gY29sb3ItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1pY29uIGNvbG9yLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbiAgLmljb25fbG9jYXRpb25fY29sb3J7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig4LCA4LCA4KTtcXG4gICAgY29sb3I6IHJnYigxNTEsIDgsIDgpO1xcbiAgfVxcbiBcXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWVuZC1pY29uIGNvbG9yLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbiAgICAgICAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWljb24gY29sb3ItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuICAuaWNvbl9yb2FkX2NvbG9ye1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoOCwgOCwgOCk7XFxuICAgIGNvbG9yOiByZ2IoNjEsIDU5LCA1OSk7XFxuICB9XFxuIFxcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tZW5kLWljb24gY29sb3ItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuICAgICAgICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0taWNvbiBjb2xvci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4gIC5pY29uX0ttX2NvbG9ye1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoOCwgOCwgOCk7XFxuICAgIGNvbG9yOiByZ2IoMTUxLCA4LCA4KTtcXG4gIH1cXG4gXFxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1lbmQtaWNvbiBjb2xvci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGJnIGRsZyBVc2VyLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4gICAgLmJnX2RsZ19Vc2Vye1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzIsIDI0MCwgMjMyLCAwLjc3NCk7IFxcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCd+L2ltYWdlcy9iZ19wcm9maWxlLmpwZycpO1xcbiAgICAgIH1cXG4gICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtLWJnIGRsZyBVc2VyLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuICAgLyotLS0tLS0tLS0tLWJ0biBlZGl0LS0tLS0tLS0tLS0tLS0tLSovXFxuICAgLmJ1dHRvbnNlZGl0IHtcXG4gICAgbWFyZ2luLXRvcDogMTUlO1xcbiAgICBtYXJnaW4tbGVmdDogMyU7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGhlaWdodDogMTAlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBhZGRpbmc6IDE1cHggMzVweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjksIDE4MiwgNzgpO1xcbiAgICBib3JkZXI6IDFweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgYm94LXNoYWRvdzogMCA5cHggIzk5OTtcXG4gIH1cXG4gIC5idXR0b25zZWRpdDIge1xcbiAgICBtYXJnaW4tdG9wOiAzMyU7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGhlaWdodDogMzAlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBhZGRpbmc6IDE1cHggMzVweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjksIDE4MiwgNzgpO1xcbiAgICBib3JkZXI6IDJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgYm94LXNoYWRvdzogMCA5cHggIzk5OTtcXG4gIH1cXG4gIC8qLS0tLS0tLS0tLS1lbmQgYnRuIGVkaXQtLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuICAubGFibGVfbGVmdHtcXG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcXG4gIH1cXG4gXFxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tZm9udCBzaXplIG1lbnUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4gIC5zaXplX2ljb25fbWVudXtcXG4gICB3aWR0aDogMjAlO1xcbiAgIGhlaWdodDogMjAlOyAgIFxcbiAgfVxcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS1lbmQgLWZvbnQgc2l6ZSBtZW51LS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuLyotLS0tLS0tLS0taGVhZGVybWVudS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuLmhlYWRlcm1lbnV7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnfi9pbWFnZXMvYmdfaGVhZGVyLmpwZycpOyAgIFxcbn1cXG4vKi0tLS0tLS0tLS1lbmQgaGVhZGVybWVudS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbi8qLS0tLS0tLS0tLWJnIGJvZHkgbWVudS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuLmJvZHltZW51e1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ34vaW1hZ2VzLzIwMTExNzcucG5nJyk7ICAgXFxufVxcbi8qLS0tLS0tLS0tLWVuZCBiZyBib2R5IG1lbnUtLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4vKi0tLS0tLS0tLS1iZyBiZ21hcC0tLS0tLS0tLS0tLS0tLS0tLSovXFxuLmJnbWFwe1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ34vaW1hZ2VzL3Rlc3RtYXAucG5nJyk7ICAgXFxufVxcbi8qLS0tLS0tLS0tLWVuZCBiZ21hcC0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi50ZXh0QWxpZ25WZXJ7XFxuICAgIGRpc3BsYXk6YmxvY2s7XFxuICAgIGZpbHRlcjogZmxpcHYgZmxpcGg7XFxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2UgOiB1cmwoJy4uL2ltYWdlcy9jbG9zZS1pY29uLnBuZycpOyAqL1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7IFxcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7IFxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTsgXFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgICB3aWR0aDoyMHB4O1xcbiAgICB3aGl0ZS1zcGFjZTpub3dyYXA7XFxuICAgIGZvbnQtc2l6ZToxMnB4O1xcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XFxufVxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLXdhaXQgZGF0YS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLm92ZXJsYXkgeyAgIFxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICBcXG4gICAgdG9wOiAwcHg7ICAgXFxuICAgIGxlZnQ6IDBweDsgIFxcbiAgICBiYWNrZ3JvdW5kOiAjY2NjOyAgIFxcbiAgICB3aWR0aDogMTAwJTsgICBcXG4gICAgaGVpZ2h0OiAxMDAlOyAgIFxcbiAgICBvcGFjaXR5OiAuNzU7ICAgXFxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT03NSk7ICAgXFxuICAgIC1tb3otb3BhY2l0eTogLjc1OyAgXFxuICAgIHotaW5kZXg6IDk5OTsgIFxcbiAgICBiYWNrZ3JvdW5kOiAjZmZmIHVybCh+L2ltYWdlcy9LVUpvZS5naWYpIDUwJSA1MCUgbm8tcmVwZWF0O1xcbn0gICBcXG4ubWFpbi1jb250YWlue1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICBcXG4gICAgdG9wOiAwcHg7ICAgXFxuICAgIGxlZnQ6IDBweDsgIFxcbiAgICB3aWR0aDogMTAwJTsgICBcXG4gICAgaGVpZ2h0OiAxMDAlOyAgIFxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4vKiAtLS0tLS0tLS0tLS0tLS13YWl0IGRhdGEtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLXNldCBmb250IHdhaXRkYXRhLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLnNldF90aGFpMXtcXG4gICAgbWFyZ2luLWxlZnQ6IDYlO1xcbn1cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS1lbmQgc2V0IGZvbnQgd2FpdGRhdGEtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4uYmd0ZXN0e1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDsgXFxuICAgICAgfVwiLCBcIlwiXSk7XG5cbjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9tYXAuY3NzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInN0eWxlXCIsIHBhdGg6IFwiLi9tYXAuY3NzXCIgfSk7XG4gICAgfSk7XG59ICIsInZhciBvcmllbnRhdGlvbiA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC1vcmllbnRhdGlvbicpXG52YXIgT2JzZXJ2YWJsZSA9IHJlcXVpcmUoXCJkYXRhL29ic2VydmFibGVcIilcbnZhciBibHVldG9vdGggPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWJsdWV0b290aFwiKVxuY29uc3QgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIilcbmNvbnN0IGxhYmVsTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvbGFiZWxcIilcbmNvbnN0IHRpbWVyTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdGltZXJcIilcbnZhciBpbnNvbW5pYSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtaW5zb21uaWFcIilcbnJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtZG9tXCIpXG52YXIgVmlicmF0ZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdmlicmF0ZVwiKS5WaWJyYXRlXG52YXIgdmlicmF0b3IgPSBuZXcgVmlicmF0ZSgpXG5jb25zdCBmcmFtZU1vZHVsZSA9IHJlcXVpcmUoXCJ1aS9mcmFtZVwiKVxudmFyIGZzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIilcbnZhciBiZ2h0dHAgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWJhY2tncm91bmQtaHR0cFwiKVxudmFyIHNlc3Npb24gPSBiZ2h0dHAuc2Vzc2lvbihcImltYWdlLXVwbG9hZFwiKVxudmFyIGltYWdlU291cmNlTW9kdWxlID0gcmVxdWlyZShcImltYWdlLXNvdXJjZVwiKVxudmFyIGltYWdlcGlja2VyID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1pbWFnZXBpY2tlclwiKVxuY29uc3QgaHR0cE1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2h0dHBcIilcbnZhciB0b2FzdHkgPSByZXF1aXJlKCduYXRpdmVzY3JpcHQtdG9hc3R5JykuVG9hc3R5O1xuXG52YXIgY29udGV4dCA9IGltYWdlcGlja2VyLmNyZWF0ZSh7IG1vZGU6IFwic2luZ2xlXCIgfSlcbmxldCBsb2dEYXRhID0ge31cblxuLy8xOTIuMTY4LjQzLjUwOjMwMDFcbmNvbnN0IEFQSV9VUkwgPSBcImh0dHA6Ly8yMDIuMTI5LjE2LjY4Ojc3NzdcIlxudmFyIHBhZ2VEYXRhID0gbmV3IE9ic2VydmFibGUuZnJvbU9iamVjdCh7XG4gICAgcm9hZE5hbWU6IFwiXCIsXG4gICAgbWFwOnt9LFxuICAgIGlkQ2FyZDpcIlwiLFxuICAgIHJzc2k6XCJcIixcbiAgICB1c2VyTmFtZTpcIlwiLFxuICAgIHBob25lTnVtYmVyOlwiXCIsXG4gICAgZGV2aWNlSWQ6XCJcIixcbiAgICB1dWlkOlwiXCIsXG4gICAgY291bnRVc2VyOltdLFxuICAgIHJvdXRlOjAsXG4gICAga206MCxcbiAgICBwaWNDYXJkOicnLFxuICAgIGJsZUlkOiBudWxsLFxufSlcbmxldCB1cmxNYXAgPSBBUElfVVJMICsgJy9tYXBzJ1xubGV0IGRsZyA9IG51bGxcbmxldCBkbGdBbGVydCA9IG51bGxcbmxldCBkbGdPZmZsaW5lID0gbnVsbFxubGV0IG1hcExheW91dCA9IG51bGxcbmxldCB2aWV3TWFwID0gbnVsbFxubGV0IGRldGFpbE1hcCA9IG51bGwgXG5sZXQgZGV0YWlsTWFwQnRuID0gbnVsbFxubGV0IG9sZFBvaW5OYW1lID0gbnVsbFxubGV0IHJzc2kgPSBudWxsXG5sZXQgcG9pbnRXYWxrTWFwID0gbnVsbCBcbmxldCB0aW1lX2xvb3AgID0gIG51bGxcbmxldCB0aW1lX2xvb3BfbG9nICA9ICBudWxsXG5sZXQgYXJyTWFwcyA9IG51bGxcbmxldCBkbGdjb3VudFVzZXIgPSBudWxsXG5sZXQgcG9pbnRTdGFydCA9IHRydWVcbmxldCBwb2ludEVuZCA9IHRydWVcbmxldCBkbGdTdGFydCA9IG51bGxcbmxldCBkbGdFbmQgPSBudWxsXG5sZXQgcm9hZE5hbWUgPSBudWxsXG5sZXQgdHh0RGF0YSA9IG51bGxcbmxldCBwaWNEYXRhID0gbnVsbFxubGV0IHBvaW50RGFuZ2VyID0gZmFsc2VcbmxldCB1c2VyQ2FyZCA9IG51bGxcbmxldCBpbWFnZUFzc2V0Q2hhbmcgPSB7X2FuZHJvaWQ6IG51bGx9XG5sZXQgdGVtcE1hcHMgPSB7XCJtYXBzXCI6W1xuICAgIHtcInV1aWRcIjpcIjNEOjg0OkU4OkE4OkVGOkVEXCIsXCJ1dWlkX2lvc1wiOlwiNTA1MTcxRDAtQkJGOS00RDc0LUJFNjItNkVERDIxMDkxM0YwXCIsXCJ4XCI6NDIsXCJ5XCI6NDAsXCJuYW1lXCI6XCJwb2ludF83XCIsXCJyb3V0ZVwiOjEsXCJtYXBfc3RhdHVzXCI6XCJOXCJ9LFxuICAgIHtcInV1aWRcIjpcIjQzOjJGOkVEOjVDOjNDOkVGXCIsXCJ1dWlkX2lvc1wiOlwiOUJCNjQ1QUMtRUIyNi1CNURCLTE3ODctQkJFOTlGNDU3NDkxXCIsXCJ4XCI6NDcsXCJ5XCI6MzUsXCJuYW1lXCI6XCJwb2ludF84XCIsXCJyb3V0ZVwiOjEsXCJtYXBfc3RhdHVzXCI6XCJOXCJ9LFxuICAgIHtcInV1aWRcIjpcIjQ2OkIyOjIwOjhEOjMwOkNCXCIsXCJ1dWlkX2lvc1wiOlwiQkQwM0Y0RjQtNDVCMC0wMEE3LUVGRkItQkY3NkMwRjk4QjJFXCIsXCJ4XCI6NTAsXCJ5XCI6MjIsXCJuYW1lXCI6XCJwb2ludF8xMF9FbmRcIixcInJvdXRlXCI6MSxcIm1hcF9zdGF0dXNcIjpcIkVcIn0sXG4gICAge1widXVpZFwiOlwiOEY6NEE6MUM6OTM6MDM6RDdcIixcInV1aWRfaW9zXCI6XCJBRUE5RUQwNC1BOUI5LTI3NjgtRUEwMy1BOUE2OTQzRkU4MkJcIixcInhcIjo1MixcInlcIjoyOSxcIm5hbWVcIjpcInBvaW50XzlcIixcInJvdXRlXCI6MSxcIm1hcF9zdGF0dXNcIjpcIk5cIn0sXG4gICAge1widXVpZFwiOlwiOTA6RDA6RTk6NUM6Q0I6Q0JcIixcInV1aWRfaW9zXCI6XCI5QjE2Rjc0Qi1CMUE2LTIxRTItNjE0Ri1FRUE1QzMxOTkzM0RcIixcInhcIjozNSxcInlcIjo0NCxcIm5hbWVcIjpcInBvaW50XzZcIixcInJvdXRlXCI6MSxcIm1hcF9zdGF0dXNcIjpcIk5cIn0sXG4gICAge1widXVpZFwiOlwiQjQ6MjY6N0M6NzE6Qzg6RDdcIixcInV1aWRfaW9zXCI6XCI1MDUxNzFEMC1CQkY5LTRENzQtQkU2Mi02RUREMjEwOTEzRjBcIixcInhcIjoyNixcInlcIjo3NyxcIm5hbWVcIjpcInBvaW50XzFcIixcInJvdXRlXCI6MSxcIm1hcF9zdGF0dXNcIjpcIlNcIn0sXG4gICAge1widXVpZFwiOlwiQjY6N0Q6N0M6OUY6QTc6RTJcIixcInV1aWRfaW9zXCI6XCI1RjJFQURGMi1FODVCLTlGQUMtRUQ5QS05RUQ3NEJFRkQ5NDZcIixcInhcIjozNSxcInlcIjo1NCxcIm5hbWVcIjpcInBvaW50XzRcIixcInJvdXRlXCI6MSxcIm1hcF9zdGF0dXNcIjpcIkRcIn0sXG4gICAge1widXVpZFwiOlwiRTE6NTE6ODM6MEI6NzA6REVcIixcInV1aWRfaW9zXCI6XCJFM0ZBN0Y5My05MjM1LTYwRjctQjcyNC04QzM5MDMyRDE2RjRcIixcInhcIjozOCxcInlcIjo1OSxcIm5hbWVcIjpcInBvaW50XzNcIixcInJvdXRlXCI6MSxcIm1hcF9zdGF0dXNcIjpcIk5cIn0sXG4gICAge1widXVpZFwiOlwiRTM6NkI6Rjc6MzE6NUI6RkVcIixcInV1aWRfaW9zXCI6XCI1MTM5OEQyOC1BMzlBLUNDRDMtMDU2Qi04RTk5MjYzRURDMDRcIixcInhcIjozNixcInlcIjo2OCxcIm5hbWVcIjpcInBvaW50XzJcIixcInJvdXRlXCI6MSxcIm1hcF9zdGF0dXNcIjpcIk5cIn0sXG4gICAge1widXVpZFwiOlwiRUM6MTg6Qjk6QzA6Q0Y6QzNcIixcInV1aWRfaW9zXCI6XCI1MzAzQTIxMy1FMUQ0LUQzNDYtMEM3Mi1FNTUxMUFBMjU5QUJcIixcInhcIjozMyxcInlcIjo0OSxcIm5hbWVcIjpcInBvaW50XzVcIixcInJvdXRlXCI6MSxcIm1hcF9zdGF0dXNcIjpcIk5cIn1cbl19XG5pbnNvbW5pYS5rZWVwQXdha2UoKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKFwiSW5zb21uaWEgaXMgYWN0aXZlXCIpO1xufSlcbmxldCBkb2N1bWVudHMgPSBmcy5rbm93bkZvbGRlcnMuZG9jdW1lbnRzKClcbmxldCBwaWNQYXRoID0gbnVsbFxubGV0IHRlbXBQYXRoID0gbnVsbFxuZXhwb3J0cy5wYWdlTG9hZGVkID0gZnVuY3Rpb24oYXJncykge1xuICAgIGlmKGFwcFNldHRpbmdzLmdldFN0cmluZyhcImJsZUlkXCIpKVxuICAgICAgICBwYWdlRGF0YS5ibGVJZCA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImJsZUlkXCIpXG5cbiAgICBpZih0aW1lX2xvb3ApXG4gICAgICAgIHRpbWVyTW9kdWxlLmNsZWFySW50ZXJ2YWwodGltZV9sb29wKTtcbiAgICBpZih0aW1lX2xvb3BfbG9nKVxuICAgICAgICB0aW1lck1vZHVsZS5jbGVhckludGVydmFsKHRpbWVfbG9vcF9sb2cpO1xuXG4gICAgcGFnZSA9IGFyZ3Mub2JqZWN0XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHBhZ2VEYXRhXG4gICAgY29uc3QgbmF2aWdhdGlvbkNvbnRleHQgPSBwYWdlLm5hdmlnYXRpb25Db250ZXh0XG4gICAgY29uc29sZS5sb2cobmF2aWdhdGlvbkNvbnRleHQpXG4gICAgb3JpZW50YXRpb24uc2V0T3JpZW50YXRpb24oXCJwb3J0cmFpdFwiKVxuICAgIGRsZyA9IHBhZ2UuZ2V0Vmlld0J5SWQoJ3VzZXItZGF0YScpXG4gICAgZGxnQWxlcnQgPSBwYWdlLmdldFZpZXdCeUlkKCd1c2VyLWFsZXJ0JylcbiAgICBkbGdPZmZsaW5lID0gcGFnZS5nZXRWaWV3QnlJZCgndXNlci1vZmZsaW5lJylcbiAgICBkbGdDaGVja2RhdGEgPSBwYWdlLmdldFZpZXdCeUlkKCdjaGVja2RhdGEnKVxuICAgIGRldGFpbE1hcCA9IHBhZ2UuZ2V0Vmlld0J5SWQoJ2RldGFpbE1hcCcpXG4gICAgZGV0YWlsTWFwQnRuID0gcGFnZS5nZXRWaWV3QnlJZCgnZGV0YWlsTWFwQnRuJylcbiAgICBkbGdjb3VudFVzZXIgPSBwYWdlLmdldFZpZXdCeUlkKCdjb3VudFVzZXInKVxuICAgIGRsZ1N0YXJ0ID0gcGFnZS5nZXRWaWV3QnlJZCgncG9pbnRTdGFydCcpXG4gICAgZGxnQWJvdXRlID0gcGFnZS5nZXRWaWV3QnlJZCgnYWJvdXRlJylcbiAgICBkbGdFbmQgPSBwYWdlLmdldFZpZXdCeUlkKCdwb2ludEVuZCcpXG4gICAgcGljRGF0YSA9IHBhZ2UuZ2V0Vmlld0J5SWQoJ3BpY0RhdGEnKVxuICAgIHR4dERhdGEgPSBwYWdlLmdldFZpZXdCeUlkKCd0eHREYXRhJylcbiAgICBcbiAgICBpZighYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwib2ZmbGluZVwiKSkge1xuICAgICAgICBpZihuYXZpZ2F0aW9uQ29udGV4dC5tb2RlID09IFwib2ZmbGluZVwiKSB7XG4gICAgICAgICAgICBkbGdPZmZsaW5lLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSdcbiAgICAgICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhcIm1hcHNcIiwgSlNPTi5zdHJpbmdpZnkodGVtcE1hcHMpKVxuICAgICAgICB9XG4gICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhcIm9mZmxpbmVcIiwgXCJmYWxzZVwiKVxuICAgIH0gICBcblxuICAgIHJvbW92ZU1hcCgpXG4gICAgY29uc3QgYXJyYXlUb09iamVjdCA9IChhcnJheSkgPT5cbiAgICBhcnJheS5yZWR1Y2UoKG9iaiwgaXRlbSkgPT4ge1xuICAgICAgICBvYmpbaXRlbS51dWlkXSA9IGl0ZW1cbiAgICAgICAgcmV0dXJuIG9ialxuICAgIH0sIHt9KVxuICAgIFxuICAgIGlmKGFwcFNldHRpbmdzLmdldFN0cmluZyhcInVzZXJEYXRhXCIpKXtcbiAgICAgICAgbGV0IGpzb25EYXRhID0gSlNPTi5wYXJzZShhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJ1c2VyRGF0YVwiKSlcbiAgICAgICAgcGFnZURhdGEuaWRDYXJkID0ganNvbkRhdGEuaWRDYXJkXG4gICAgICAgIHBhZ2VEYXRhLnVzZXJOYW1lID0ganNvbkRhdGEudXNlck5hbWVcbiAgICAgICAgcGFnZURhdGEucGhvbmVOdW1iZXIgPSBqc29uRGF0YS5waG9uZU51bWJlclxuICAgICAgICBwYWdlRGF0YS5kZXZpY2VJZCA9IGpzb25EYXRhLmRldmljZUlkXG4gICAgICAgIHBhZ2VEYXRhLnBpY0NhcmQgPSBqc29uRGF0YS5waWNcbiAgICB9XG4gICAgXG4gICAgbG9nRGF0YS5kZXZpY2VJZCA9IHBhZ2VEYXRhLmRldmljZUlkXG4gICAgZ2V0TWFwcygpXG4gICAgZnVuY3Rpb24gZ2V0TWFwcygpe1xuICAgICAgICBmZXRjaCh1cmxNYXApLnRoZW4ociA9PiByLmpzb24oKSlcbiAgICAgICAgLnRoZW4oanNvbkRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coanNvbkRhdGEpXG4gICAgICAgIGFyck1hcHMgPSBqc29uRGF0YVxuICAgICAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJtYXBzXCIsIEpTT04uc3RyaW5naWZ5KGpzb25EYXRhKSlcbiAgICAgICAganNvbkRhdGEgPSBhcnJheVRvT2JqZWN0KGpzb25EYXRhLm1hcHMpXG4gICAgICAgIHBhZ2VEYXRhLm1hcCA9IGpzb25EYXRhXG4gICAgICAgIH0pLmNhdGNoKGUgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJyoqKmZldGNoIGVycm9yKioqJylcbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG4gICAgaWYoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwibWFwc1wiKSl7XG4gICAgICAgIGFyck1hcHMgPSBKU09OLnBhcnNlKGFwcFNldHRpbmdzLmdldFN0cmluZyhcIm1hcHNcIikpXG4gICAgICAgIHBhZ2VEYXRhLm1hcCA9IGFycmF5VG9PYmplY3QoYXJyTWFwcy5tYXBzKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGRsZ0NoZWNrZGF0YS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnXG4gICAgfVxuICAgIGxldCBpZENhcmRMZW5ndGggPSBbXVxuICAgIGxldCB1c2VyTmFtZUxlbmd0aCA9IFtdXG4gICAgbGV0IHBob25lTnVtYmVyTGVuZ3RoID0gW11cblxuICAgIGxldCBpZENhcmQgPSBwYWdlLmdldFZpZXdCeUlkKCdpZENhcmQnKVxuICAgIGxldCB1c2VyTmFtZSA9IHBhZ2UuZ2V0Vmlld0J5SWQoJ3VzZXJOYW1lJylcbiAgICBsZXQgcGhvbmVOdW1iZXIgPSBwYWdlLmdldFZpZXdCeUlkKCdwaG9uZU51bWJlcicpXG4gICAgdXNlckNhcmQgPSBwYWdlLmdldFZpZXdCeUlkKCd1c2VyQ2FyZCcpXG4gICAgXG5cbiAgICBpZENhcmRMZW5ndGhbMF0gPSBuZXcgYW5kcm9pZC50ZXh0LklucHV0RmlsdGVyLkxlbmd0aEZpbHRlcigxMylcbiAgICB1c2VyTmFtZUxlbmd0aFswXSA9IG5ldyBhbmRyb2lkLnRleHQuSW5wdXRGaWx0ZXIuTGVuZ3RoRmlsdGVyKDMwKVxuICAgIHBob25lTnVtYmVyTGVuZ3RoWzBdID0gbmV3IGFuZHJvaWQudGV4dC5JbnB1dEZpbHRlci5MZW5ndGhGaWx0ZXIoMTApXG5cbiAgICBpZENhcmQuYW5kcm9pZC5zZXRGaWx0ZXJzKGlkQ2FyZExlbmd0aClcbiAgICB1c2VyTmFtZS5hbmRyb2lkLnNldEZpbHRlcnModXNlck5hbWVMZW5ndGgpXG4gICAgcGhvbmVOdW1iZXIuYW5kcm9pZC5zZXRGaWx0ZXJzKHBob25lTnVtYmVyTGVuZ3RoKVxuICAgIFxuICAgIGlmKHRlbXBQYXRoKXtcbiAgICAgICAgcGljUGF0aCA9IHRlbXBQYXRoXG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYocGFnZURhdGEucGljQ2FyZCAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICBwaWNQYXRoID0gZnMucGF0aC5qb2luKGRvY3VtZW50cy5wYXRoLCBwYWdlRGF0YS5waWNDYXJkKVxuICAgIH1cbiAgICBcbiAgICBibHVldG9vdGguZW5hYmxlKCkudGhlbihcbiAgICAgICAgZnVuY3Rpb24oZW5hYmxlZCkge1xuICAgICAgICAgICAgY2hlY2tfcm91dGUoZnVuY3Rpb24oY2Ipe1xuICAgICAgICAgICAgICAgIHBhZ2VEYXRhLnJvdXRlID0gY2JcbiAgICAgICAgICAgICAgICBpZihjYikge1xuICAgICAgICAgICAgICAgICAgICBkbGdDaGVja2RhdGEuc3R5bGUudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSdcbiAgICAgICAgICAgICAgICAgICAgQkxFX3NjYW4oKVxuICAgICAgICAgICAgICAgICAgICB0aW1lX2xvb3AgPSB0aW1lck1vZHVsZS5zZXRJbnRlcnZhbChmdW5jdGlvbigpeyBcbiAgICAgICAgICAgICAgICAgICAgLy8gdXNlIEJsdWV0b290aCBmZWF0dXJlcyBpZiBlbmFibGVkIGlzIHRydWUgXG4gICAgICAgICAgICAgICAgICAgIGJsdWV0b290aC5zdG9wU2Nhbm5pbmcoKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQkxFX3NjYW4oKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9LCA4MDAwKSBcblxuICAgICAgICAgICAgICAgICAgICB0aW1lX2xvb3BfbG9nID0gdGltZXJNb2R1bGUuc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXsgXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVMb2cobG9nRGF0YSlcbiAgICAgICAgICAgICAgICAgICAgfSwgMjAwMDApIFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRsZ0NoZWNrZGF0YS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICkgXG4gICAgICAgICBcbn1cbmV4cG9ydHMucGFnZVVubG9hZGVkID0gKCkgPT57XG4gICAgY29uc29sZS5sb2coXCJwYWdlVW5sb2FkZWRcIilcbiAgICBpZih0aW1lX2xvb3ApXG4gICAgICAgIHRpbWVyTW9kdWxlLmNsZWFySW50ZXJ2YWwodGltZV9sb29wKTtcbiAgICBpZih0aW1lX2xvb3BfbG9nKVxuICAgICAgICB0aW1lck1vZHVsZS5jbGVhckludGVydmFsKHRpbWVfbG9vcF9sb2cpO1xuICAgIGlmKGxvZ0RhdGEuc3RhdHVzICE9IFwiZmluaXNoXCIpe1xuICAgICAgICBsb2dEYXRhLnN0YXR1cyA9IFwiYXBwTm90V29ya2luZ1wiXG4gICAgICAgIHVwZGF0ZUxvZyhsb2dEYXRhKVxuICAgIH1cbn1cbmZ1bmN0aW9uIHJvbW92ZU1hcCgpIHtcbiAgICBtYXBMYXlvdXQgPSBwYWdlLmdldFZpZXdCeUlkKFwibWFwTGF5b3V0XCIpXG4gICAgdmlld01hcCA9IG1hcExheW91dC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwb2ludCcpXG4gICAgZm9yKGxldCBpID0gMDtpPHZpZXdNYXAubGVuZ3RoO2krKyl7XG4gICAgICAgIG1hcExheW91dC5yZW1vdmVDaGlsZCh2aWV3TWFwW2ldKVxuICAgIH1cbiAgICB0eHRNYXAgPSBtYXBMYXlvdXQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndHh0LW1hcCcpXG4gICAgZm9yKGxldCBpID0gMDtpPHZpZXdNYXAubGVuZ3RoO2krKyl7XG4gICAgICAgIG1hcExheW91dC5yZW1vdmVDaGlsZCh0eHRNYXBbaV0pXG4gICAgfVxuXG59XG5mdW5jdGlvbiBjaGVja19yb3V0ZShjYikge1xuICAgIGxldCBjaGVja19zdGF0dXMgPSBudWxsXG4gICAgYmx1ZXRvb3RoLnN0YXJ0U2Nhbm5pbmcoe1xuICAgICAgICBzZXJ2aWNlVVVJRHM6IFtdLFxuICAgICAgICBzZWNvbmRzOiA1LFxuICAgICAgICBvbkRpc2NvdmVyZWQ6IGZ1bmN0aW9uIChwZXJpcGhlcmFsKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlBlcmlwZXJoYWwgZm91bmQgd2l0aCBVVUlEOiBcIiArIHBlcmlwaGVyYWwuVVVJRClcbiAgICAgICAgICAgIGNoZWNrX3N0YXR1cz1nZW5NYXAocGVyaXBoZXJhbC5VVUlELHBlcmlwaGVyYWwuUlNTSSlcbiAgICAgICAgfSxcbiAgICAgICAgc2tpcFBlcm1pc3Npb25DaGVjazogZmFsc2UsXG4gICAgfSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJzY2FubmluZyBjb21wbGV0ZVwiKVxuICAgICAgICBjYihjaGVja19zdGF0dXMpIFxuICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciB3aGlsZSBzY2FubmluZzogXCIgKyBlcnIpXG4gICAgfSlcbn1cbmZ1bmN0aW9uIEJMRV9zY2FuKCl7XG4gICAgbGV0IGFsZXJ0ID0gZmFsc2VcbiAgICByc3NpID0gLTEwMFxuICAgIGJsdWV0b290aC5zdGFydFNjYW5uaW5nKHtcbiAgICAgICAgc2VydmljZVVVSURzOiBbXSxcbiAgICAgICAgc2Vjb25kczogNyxcbiAgICAgICAgb25EaXNjb3ZlcmVkOiBmdW5jdGlvbiAocGVyaXBoZXJhbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQZXJpcGVyaGFsIGZvdW5kIHdpdGggVVVJRDogXCIgKyBwZXJpcGhlcmFsLlVVSUQpXG4gICAgICAgICAgICB3YWxrTWFwKHBlcmlwaGVyYWwuVVVJRCxwZXJpcGhlcmFsLlJTU0ksZnVuY3Rpb24oY2Ipe1xuICAgICAgICAgICAgICAgIGlmKGNiKXtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIG1hcExheW91dCA9IHBhZ2UuZ2V0Vmlld0J5SWQoXCJtYXBMYXlvdXRcIilcbiAgICAgICAgICAgICAgICAgICAgdmlld01hcCA9IG1hcExheW91dC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwb2ludCcpXG4gICAgICAgICAgICAgICAgICAgIHZpZXdNYXAuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIlxuICAgICAgICAgICAgICAgICAgICBsb2dEYXRhLnN0YXR1cz1cInRyYXZlbGluZ1wiXG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICBpZihyb2FkTmFtZSAhPT0gb2xkUG9pbk5hbWUpe1xuICAgICAgICAgICAgICAgICAgICBpZihvbGRQb2luTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2xkUG9pbnQgPSBwYWdlLmdldFZpZXdCeUlkKG9sZFBvaW5OYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYob2xkUG9pbnQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9sZFBvaW50LmJhY2tncm91bmRDb2xvciA9IFwicmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYocm9hZE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgb2xkUG9pbk5hbWUgPSByb2FkTmFtZVxuICAgICAgICAgICAgICAgICAgICBwYWdlRGF0YS5yb2FkTmFtZSA9IHJvYWROYW1lXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VEYXRhLnJzc2kgPSByc3NpXG4gICAgICAgICAgICAgICAgICAgIHBvaW50V2Fsa01hcCA9IHBhZ2UuZ2V0Vmlld0J5SWQocm9hZE5hbWUpXG4gICAgICAgICAgICAgICAgICAgIGlmKHBvaW50V2Fsa01hcClcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50V2Fsa01hcC5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCJcbiAgICAgICAgICAgICAgICB9ICBcbiAgICAgICAgICAgICAgICBsb2dEYXRhLnV1aWQgPSBwYWdlRGF0YS51dWlkXG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBza2lwUGVybWlzc2lvbkNoZWNrOiBmYWxzZSxcbiAgICB9KS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInNjYW5uaW5nIGNvbXBsZXRlXCIpXG4gICAgICAgIGlmKHBvaW50RGFuZ2VyKXtcbiAgICAgICAgICAgIGlmKCFhbGVydCl7XG4gICAgICAgICAgICAgICAgYWxlcnRVc2VyKClcbiAgICAgICAgICAgICAgICBsb2dEYXRhLnN0YXR1cz1cImRldG91cnNcIlxuICAgICAgICAgICAgICAgIHVwZGF0ZUxvZyhsb2dEYXRhKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsb2dEYXRhLnN0YXR1cz1cInRyYXZlbGluZ1wiXG4gICAgICAgICAgICAgICAgZGxnQWxlcnQuc3R5bGUudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciB3aGlsZSBzY2FubmluZzogXCIgKyBlcnIpXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gYWxlcnRVc2VyKCl7XG4gICAgdmlicmF0b3IudmlicmF0ZSgyMDAwKTtcbiAgICBkbGdBbGVydC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnXG59XG5cbmZ1bmN0aW9uIGNvdW50UG9pbnQocm91dGUpIHtcbiAgICBsZXQgY291bnQgPSAwXG4gICAgYXJyTWFwcy5tYXBzLmZvckVhY2goZWxlbWVudCA9PiB7ICAgXG4gICAgICAgIGlmKHJvdXRlKXtcbiAgICAgICAgICAgIGlmKGVsZW1lbnQucm91dGUgPT0gIHJvdXRlKSB7XG4gICAgICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gY291bnRcbn1cblxuZnVuY3Rpb24gd2Fsa01hcChVVUlELFJTU0ksY2IpIHtcbiAgICBsZXQgc3RhdHVzID0gZmFsc2VcbiAgICBcbiAgICBpZihPYmplY3Qua2V5cyhwYWdlRGF0YS5tYXApLmxlbmd0aCAhPT0gMCl7XG4gICAgICAgIGlmKHBhZ2VEYXRhLm1hcFtVVUlEXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzdGF0dXMgPSB0cnVlXG4gICAgICAgICAgICBwb2ludERhbmdlciA9IGZhbHNlXG4gICAgICAgICAgICBpZihSU1NJID49IHJzc2kpe1xuICAgICAgICAgICAgICAgIHJzc2kgPSBSU1NJXG4gICAgICAgICAgICAgICAgcGFnZURhdGEua20gPSBjYWxjdWxhdGVEaXN0YW5jZShyc3NpKS50b0ZpeGVkKDIpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcm9hZE5hbWUgPSBwYWdlRGF0YS5tYXBbVVVJRF0ubmFtZSAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcGFnZURhdGEudXVpZCA9IFVVSURcblxuICAgICAgICAgICAgICAgIGlmKHBhZ2VEYXRhLm1hcFtVVUlEXS5tYXBfc3RhdHVzID09IFwiRFwiKXtcbiAgICAgICAgICAgICAgICAgICAgcG9pbnREYW5nZXIgPXRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYocGFnZURhdGEubWFwW1VVSURdLm1hcF9zdGF0dXMgPT0gXCJTXCIpe1xuICAgICAgICAgICAgICAgICAgICBkbGdQaW9udFN0YXJ0KClcbiAgICAgICAgICAgICAgICAgICAgcGFnZURhdGEuc3RhdHVzID0gXCJ0cmF2ZWxpbmdcIlxuICAgICAgICAgICAgICAgICAgICBwb2ludFN0YXJ0ID0gZmFsc2VcblxuICAgICAgICAgICAgICAgIH0gIGVsc2UgaWYocGFnZURhdGEubWFwW1VVSURdLm1hcF9zdGF0dXMgPT0gXCJFXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZGxnUGlvbnRFbmQoKVxuICAgICAgICAgICAgICAgICAgICBwYWdlRGF0YS5zdGF0dXMgPSBcImZpbmlzaFwiXG4gICAgICAgICAgICAgICAgICAgIHBvaW50RW5kID0gZmFsc2VcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgfSBcbiAgICAgICAgfSBcbiAgICB9XG4gICAgY2Ioc3RhdHVzKVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMb2coZGF0YSkge1xuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgZmV0Y2goQVBJX1VSTCtcIi91cGRhdGVVc2VyTG9nXCIsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxuICAgIH0pLnRoZW4oKHIpID0+IHIuanNvbigpKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZihyZXNwb25zZS5zdGF0dXMgPT0gXCJTdWNjZXNzXCIpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1cGRhdGUgbG9nIFN1Y2Nlc3NcIilcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHJlc3BvbnNlLnN0YXR1cyA9PSBcIkZhaWxcIil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInVwZGF0ZSBsb2cgU3VjY2Vzc1wiKVxuICAgICAgICB9XG4gICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJyoqKmZldGNoIGVycm9yKioqJylcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZ2VuTWFwKFVVSUQsUlNTSSl7XG4gICAgbGV0IHJvdXRlID0gMFxuICAgIGlmKE9iamVjdC5rZXlzKHBhZ2VEYXRhLm1hcCkubGVuZ3RoICE9PSAwKXtcblxuICAgICAgICB2aWV3TWFwID0gbWFwTGF5b3V0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BvaW50JylcbiAgICAgICAgaWYocGFnZURhdGEubWFwW1VVSURdICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICByb3V0ZT1wYWdlRGF0YS5tYXBbVVVJRF0ucm91dGVcbiAgICAgICAgICAgIHBhZ2VEYXRhLnJvYWROYW1lID0gIHBhZ2VEYXRhLm1hcFtVVUlEXS5uYW1lXG4gICAgICAgICAgICBibHVldG9vdGguc3RvcFNjYW5uaW5nKCkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNjYW5uaW5nIHN0b3BwZWRcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHZpZXdNYXApe1xuICAgICAgICAgICAgcm9tb3ZlTWFwKClcbiAgICAgICAgfVxuICAgICAgICBtYXBMYXlvdXQuaGVpZ2h0ID0gY291bnRQb2ludChyb3V0ZSk+OD9cIlwiKygoKGNvdW50UG9pbnQocm91dGUpLTgpKjEwKSsxMDApK1wiJVwiOlwiMTAwJVwiXG4gICAgICAgIGxldCBiZ01hcHMgPSBcIlwiXG4gICAgICAgIGxldCBpbWcgXG5cbiAgICAgICAgaHR0cE1vZHVsZS5nZXRJbWFnZShcImh0dHA6Ly8yMDIuMTI5LjE2LjY4L35vZmZ0ZHVhYy9iZ01hcHMvclwiK3JvdXRlK1wiLmpwZ1wiKS50aGVuKChyKSA9PiB7XG4gICAgICAgICAgICAvLyBnZXRJbWFnZSBtZXRob2QgcmV0dXJucyBJbWFnZVNvdXJjZSBvYmplY3RcbiAgICAgICAgICAgIGltZyA9IHJcbiAgICAgICAgICAgIHZhciBmb2xkZXIgPSBmcy5rbm93bkZvbGRlcnMuZG9jdW1lbnRzKCk7XG4gICAgICAgICAgICB2YXIgcGF0aCA9IGZzLnBhdGguam9pbihmb2xkZXIucGF0aCwgXCJyXCIrcm91dGUrXCIuanBnXCIpO1xuICAgICAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiYmdNYXBzXCIsIHBhdGgpXG4gICAgICAgICAgICBpbWcuc2F2ZVRvRmlsZShwYXRoKVxuICAgICAgICAgICAgbWFwTGF5b3V0LmJhY2tncm91bmRJbWFnZSA9IHBhdGhcbiAgICAgICAgfSwgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgICAgICBpbWcgPSBpbWFnZVNvdXJjZU1vZHVsZS5mcm9tRmlsZShcIn4vaW1hZ2VzL3JcIityb3V0ZStcIi5qcGdcIik7XG4gICAgICAgICAgICB2YXIgZm9sZGVyID0gZnMua25vd25Gb2xkZXJzLmRvY3VtZW50cygpO1xuICAgICAgICAgICAgdmFyIHBhdGggPSBmcy5wYXRoLmpvaW4oZm9sZGVyLnBhdGgsIFwiclwiK3JvdXRlK1wiLmpwZ1wiKTtcbiAgICAgICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhcImJnTWFwc1wiLCBwYXRoKVxuICAgICAgICAgICAgaW1nLnNhdmVUb0ZpbGUocGF0aClcbiAgICAgICAgICAgIG1hcExheW91dC5iYWNrZ3JvdW5kSW1hZ2UgPSBwYXRoXG4gICAgICAgIH0pOyAgICBcblxuICAgICAgICBiZ01hcHMgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJiZ01hcHNcIilcbiAgICAgICAgbWFwTGF5b3V0LmNsYXNzTmFtZSA9IFwibWFwLWxheW91dFwiXG4gICAgICAgIG1hcExheW91dC5iYWNrZ3JvdW5kSW1hZ2UgPSBiZ01hcHNcblxuICAgICAgICBhcnJNYXBzLm1hcHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYocm91dGUpe1xuICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQucm91dGUgPT0gIHJvdXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBteUxhYmVsID0gbmV3IGxhYmVsTW9kdWxlLkxhYmVsKClcbiAgICAgICAgICAgICAgICAgICAgbGV0IG15TGFiZWxUZXh0ID0gbmV3IGxhYmVsTW9kdWxlLkxhYmVsKClcblxuICAgICAgICAgICAgICAgICAgICBteUxhYmVsLmNsYXNzTmFtZSA9IFwicG9pbnRcIlxuICAgICAgICAgICAgICAgICAgICBteUxhYmVsLmlkID0gZWxlbWVudC5uYW1lXG4gICAgICAgICAgICAgICAgICAgIG15TGFiZWwubWFyZ2luVG9wID0gXCJcIitlbGVtZW50LnkrXCIlXCJcbiAgICAgICAgICAgICAgICAgICAgbXlMYWJlbC5tYXJnaW5MZWZ0ID0gXCJcIitlbGVtZW50LngrXCIlXCJcbiAgICAgICAgICAgICAgICAgICAgbXlMYWJlbC5zdHlsZS56SW5kZXg9XCItMVwiXG4gICAgICAgICAgICAgICAgICAgIG15TGFiZWxUZXh0LnRleHQgPSBlbGVtZW50Lm5hbWVcbiAgICAgICAgICAgICAgICAgICAgbXlMYWJlbFRleHQuaWQgPSBcInR4dE1hcFwiXG4gICAgICAgICAgICAgICAgICAgIG15TGFiZWxUZXh0LmNsYXNzID0gXCJ0eHQtbWFwXCJcbiAgICAgICAgICAgICAgICAgICAgbXlMYWJlbFRleHQubWFyZ2luTGVmdCA9IFwiXCIrZWxlbWVudC54K1wiJVwiXG4gICAgICAgICAgICAgICAgICAgIG15TGFiZWxUZXh0Lm1hcmdpblRvcCA9IFwiXCIrKGVsZW1lbnQueS0yKStcIiVcIlxuXG4gICAgICAgICAgICAgICAgICAgIG1hcExheW91dC5hZGRDaGlsZChteUxhYmVsKVxuICAgICAgICAgICAgICAgICAgICBtYXBMYXlvdXQuYWRkQ2hpbGQobXlMYWJlbFRleHQpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKysrZ2VuQmVhY29uKysrXCIrZWxlbWVudC54K1wiLFwiK2VsZW1lbnQueSkgXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcm91dGVcbn0gXG5cbmV4cG9ydHMudXNlciA9IGZ1bmN0aW9uKCkge1xuICAgIFxuICAgIGlmKGFwcFNldHRpbmdzLmdldFN0cmluZyhcInVzZXJEYXRhXCIpKXtcbiAgICAgICAgbGV0IGpzb25EYXRhID0gSlNPTi5wYXJzZShhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJ1c2VyRGF0YVwiKSlcbiAgICAgICAgcGFnZURhdGEuaWRDYXJkID0ganNvbkRhdGEuaWRDYXJkXG4gICAgICAgIHBhZ2VEYXRhLnVzZXJOYW1lID0ganNvbkRhdGEudXNlck5hbWVcbiAgICAgICAgcGFnZURhdGEucGhvbmVOdW1iZXIgPSBqc29uRGF0YS5waG9uZU51bWJlclxuICAgICAgICBwYWdlRGF0YS5kZXZpY2VJZCA9IGpzb25EYXRhLmRldmljZUlkXG4gICAgICAgIHBhZ2VEYXRhLnBpY0NhcmQgPSBqc29uRGF0YS5waWNcbiAgICB9XG4gICAgZGxnLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSdcbiAgICBjb25zb2xlLmxvZyhcInBpY0NhcmQgcGljQ2FyZCBwaWNDYXJkID0gXCIrcGFnZURhdGEucGljQ2FyZClcbiAgICBpZihwYWdlRGF0YS5waWNDYXJkICA9PSB1bmRlZmluZWQpXG4gICAgICAgIHBhZ2VEYXRhLnBpY0NhcmQgID0gJydcbiAgICBpZihwYWdlRGF0YS5waWNDYXJkICE9ICcnKXtcbiAgICAgICAgdXNlckNhcmQuc3R5bGUuYmFja2dyb3VuZEltYWdlICA9IHBpY1BhdGhcbiAgICAgICAgcGljRGF0YS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnXG4gICAgICAgIHR4dERhdGEuc3R5bGUudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSdcbiAgICB9IGVsc2Uge1xuICAgICAgICBwaWNEYXRhLnN0eWxlLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnXG4gICAgICAgIHR4dERhdGEuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJ1xuICAgIH1cbn1cbmV4cG9ydHMuY2hhbmdQaWMgPSBmdW5jdGlvbigpIHtcbiAgICBjb250ZXh0XG4gICAgLmF1dGhvcml6ZSgpXG4gICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBjb250ZXh0LnByZXNlbnQoKTtcbiAgICB9KVxuICAgIC50aGVuKGZ1bmN0aW9uKHNlbGVjdGlvbikge1xuICAgICAgICBzZWxlY3Rpb24uZm9yRWFjaChmdW5jdGlvbihzZWxlY3RlZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWQpXG4gICAgICAgICAgICAvLyBwcm9jZXNzIHRoZSBzZWxlY3RlZCBpbWFnZVxuICAgICAgICAgICAgaW1hZ2VBc3NldENoYW5nID0gc2VsZWN0ZWRcbiAgICAgICAgICAgIHVzZXJDYXJkLnN0eWxlLmJhY2tncm91bmRJbWFnZSAgPSBzZWxlY3RlZC5fYW5kcm9pZFxuXG4gICAgICAgIH0pO1xuICAgICAgICBsaXN0Lml0ZW1zID0gc2VsZWN0aW9uO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vIHByb2Nlc3MgZXJyb3JcbiAgICB9KTtcbn0gICBcbmV4cG9ydHMuc2V0VXNlciA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBzYXZlRGF0YSA9IHt9XG4gICAgc2F2ZURhdGEuaWRDYXJkID0gcGFnZURhdGEuaWRDYXJkXG4gICAgc2F2ZURhdGEudXNlck5hbWUgPSBwYWdlRGF0YS51c2VyTmFtZVxuICAgIHNhdmVEYXRhLnBob25lTnVtYmVyID0gcGFnZURhdGEucGhvbmVOdW1iZXJcbiAgICBzYXZlRGF0YS5kZXZpY2VJZCA9IHBhZ2VEYXRhLmRldmljZUlkXG4gICAgc2F2ZURhdGEucGljQ2FyZCA9IHBhZ2VEYXRhLnBpY0NhcmRcbiAgICBzYXZlRGF0YS5ibGVJZCA9IHBhZ2VEYXRhLmJsZUlkXG4gICAgbGV0IHRleHQgPSBudWxsXG4gICAgdmFyIHRlc3RlciA9IC9eW2EtekEtWjAtOeC4gS3guZkgXSokL1xuICAgIGlmIChzYXZlRGF0YS51c2VyTmFtZS5sZW5ndGggPT09IDAgJiYgc2F2ZURhdGEucGljQ2FyZCA9PSBcIlwiKSB7XG4gICAgdGV4dCA9ICdQbGVhc2UgZW50ZXIgbmFtZSdcbiAgICB9IGVsc2UgaWYgKHNhdmVEYXRhLnBob25lTnVtYmVyLmxlbmd0aCA8IDEwKSB7XG4gICAgdGV4dCA9ICdQbGVhc2UgZW50ZXIgeW91ciBtb2JpbGUgcGhvbmUgbnVtYmVyIHRvIGNvbXBsZXRlIDEwIGRpZ2l0cy4nXG4gICAgfSBlbHNlIGlmIChzYXZlRGF0YS5kZXZpY2VJZC5sZW5ndGggPCAwKSB7XG4gICAgdGV4dCA9ICdOTyBEZXZpY2UgSUQuJ1xuICAgIH0gXG4gICAgLy8gZWxzZSBpZiAoc2F2ZURhdGEuaWRDYXJkLmxlbmd0aCA8IDcgJiYgc2F2ZURhdGEucGljQ2FyZCA9PSBcIlwiKSB7XG4gICAgLy8gdGV4dCA9ICdJRCBDYXJkIGluY29ycmVjdC4nXG4gICAgLy8gfVxuICAgIGVsc2UgaWYgKCF0ZXN0ZXIudGVzdChwYWdlRGF0YS51c2VyTmFtZSkgJiYgc2F2ZURhdGEucGljQ2FyZCA9PSBcIlwiKSB7XG4gICAgICAgIHRleHQgPSAnUGxlYXNlIGVudGVyIHRoZSBmaXJzdCBhbmQgbGFzdCBuYW1lIGluIHRoZSBhbHBoYWJldC4gYS16LCBBLVosIDAtOSwgQS05J1xuICAgIH1cbiAgICBpZiAodGV4dCAhPSBudWxsKSB7XG4gICAgICAgIHZhciB0b2FzdCA9IG5ldyB0b2FzdHkoeyB0ZXh0OnRleHR9KTtcbiAgICAgICAgdG9hc3Quc2hvdygpICAgXG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc2F2ZURhdGEpKSlcbiAgICBpZihwYWdlRGF0YS5waWNDYXJkID09ICcnKXtcbiAgICAgICAgZmV0Y2goQVBJX1VSTCtcIi91cGRhdGVVc2VyXCIsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShzYXZlRGF0YSlcbiAgICAgICAgfSkudGhlbigocikgPT4gci5qc29uKCkpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09IFwiU3VjY2Vzc1wiKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlN1Y2Nlc3NcIilcbiAgICAgICAgICAgICAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJ1c2VyRGF0YVwiLCBKU09OLnN0cmluZ2lmeShzYXZlRGF0YSkpXG4gICAgICAgICAgICAgICAgdmFyIHRvYXN0ID0gbmV3IHRvYXN0eSh7IHRleHQ6XCJ1cGRhdGUgc3VjY2Vzc1wifSk7XG4gICAgICAgICAgICAgICAgdG9hc3Quc2hvdygpICAgXG4gICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihyZXNwb25zZS5zdGF0dXMgPT0gXCJGYWlsXCIpe1xuICAgICAgICAgICAgICAgIHZhciB0b2FzdCA9IG5ldyB0b2FzdHkoeyB0ZXh0OlwidXBkYXRlIGZhaWxcIn0pO1xuICAgICAgICAgICAgICAgIHRvYXN0LnNob3coKSAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJyoqKmZldGNoIGVycm9yKioqJylcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYoaW1hZ2VBc3NldENoYW5nLl9hbmRyb2lkID09IG51bGwpe1xuICAgICAgICAgICAgbGV0IGRvY3VtZW50cyA9IGZzLmtub3duRm9sZGVycy5kb2N1bWVudHMoKVxuICAgICAgICAgICAgbGV0IHBhdGggPSBmcy5wYXRoLmpvaW4oZG9jdW1lbnRzLnBhdGgsIHBhZ2VEYXRhLnBpY0NhcmQpO1xuICAgICAgICAgICAgaW1hZ2VBc3NldENoYW5nLl9hbmRyb2lkID1wYXRoXG4gICAgICAgIH1cbiAgICAgICAgdGVtcFBhdGggPSBpbWFnZUFzc2V0Q2hhbmcuX2FuZHJvaWRcbiAgICAgICAgdmFyIGZpbGUgPSAgaW1hZ2VBc3NldENoYW5nLl9hbmRyb2lkXG4gICAgICAgIHZhciB1cmwgPSBBUElfVVJMK1wiL3VwZGF0ZVVzZXJcIjtcbiAgICAgICAgdmFyIHJlcXVlc3QgPSB7XG4gICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIixcbiAgICAgICAgICAgICAgICBcIkZpbGUtTmFtZVwiOiBcInBob3RvXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJVcGxvYWRpbmdcIlxuICAgICAgICB9O1xuICAgICAgICBsZXQgcGFyYW1zID0gW1xuICAgICAgICAgICAgeyBuYW1lOiBcInBob25lTnVtYmVyXCIsIHZhbHVlOiBwYWdlRGF0YS5waG9uZU51bWJlciB9LFxuICAgICAgICAgICAgeyBuYW1lOiBcImRldmljZUlkXCIsIHZhbHVlOiBwYWdlRGF0YS5kZXZpY2VJZCB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogJ3Bob3RvJywgXCJmaWxlbmFtZVwiOiBmaWxlLCBcIm1pbWVUeXBlXCI6IFwiaW1hZ2UvanBnXCIgfVxuICAgICAgICBdO1xuICAgICAgICBsZXQgdGFzayA9IHNlc3Npb24ubXVsdGlwYXJ0VXBsb2FkKHBhcmFtcywgcmVxdWVzdCk7XG4gICAgICAgIHRhc2sub24oXCJwcm9ncmVzc1wiLCBwcm9ncmVzc0hhbmRsZXIpO1xuICAgICAgICB0YXNrLm9uKFwiZXJyb3JcIiwgZXJyb3JIYW5kbGVyKTtcbiAgICAgICAgdGFzay5vbihcInJlc3BvbmRlZFwiLCByZXNwb25kZWRIYW5kbGVyKTtcbiAgICAgICAgLy8gdGFzay5vbihcImNvbXBsZXRlXCIsIGNvbXBsZXRlSGFuZGxlcik7XG4gICAgICAgIGxldCBkb2N1bWVudHMgPSBmcy5rbm93bkZvbGRlcnMuZG9jdW1lbnRzKCk7XG4gICAgICAgIGxldCBwYXRoID0gZnMucGF0aC5qb2luKGRvY3VtZW50cy5wYXRoLCBwYWdlRGF0YS5waG9uZU51bWJlcitcIi5qcGdcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKHBhdGgpXG4gICAgICAgIGltYWdlU291cmNlTW9kdWxlLmZyb21Bc3NldChpbWFnZUFzc2V0Q2hhbmcpXG4gICAgICAgIC50aGVuKGltYWdlU291cmNlID0+IHtcbiAgICAgICAgICAgIGltYWdlU291cmNlLnNhdmVUb0ZpbGUocGF0aCwgXCJqcGdcIik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkbGdIaWRlKClcbn1cbmV4cG9ydHMudXNlckNvdW50ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwidXNlckNvdW50XCIpXG4gICAgZmV0Y2goQVBJX1VSTCtcIi9nZXRDb3VudFVzZXJcIiwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtyb3V0ZTpwYWdlRGF0YS5yb3V0ZX0pXG4gICAgfSkudGhlbigocikgPT4gci5qc29uKCkpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmKE9iamVjdC5rZXlzKHJlc3BvbnNlLnVzZXJEYXRhKS5sZW5ndGggIT09IDApe1xuICAgICAgICAgICAgcmVzcG9uc2UudXNlckRhdGFbMF0uY291bnRVc2VyID0gT2JqZWN0LmtleXMocmVzcG9uc2UudXNlckRhdGEpLmxlbmd0aFxuICAgICAgICAgICAgcGFnZURhdGEuY291bnRVc2VyID0gcmVzcG9uc2UudXNlckRhdGFcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhwYWdlRGF0YS5jb3VudFVzZXIpXG4gICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJyoqKmZldGNoIGVycm9yKioqJylcbiAgICB9KTtcbiAgICBkbGdjb3VudFVzZXIuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJ1xuICAgIFxufVxuZXhwb3J0cy5oaWRlRGlhbG9nID0gZnVuY3Rpb24oKSB7XG4gICAgaW1hZ2VBc3NldENoYW5nLl9hbmRyb2lkID0gbnVsbFxuICAgIGRsZy5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJ1xuICAgIGRsZ0FsZXJ0LnN0eWxlLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnXG4gICAgZGxnY291bnRVc2VyLnN0eWxlLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnXG4gICAgZGxnRW5kLnN0eWxlLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnXG4gICAgZGxnU3RhcnQuc3R5bGUudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSdcbiAgICBkbGdBYm91dGUuc3R5bGUudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSdcbiAgICBkbGdPZmZsaW5lLnN0eWxlLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnXG59XG5cbmZ1bmN0aW9uIGRsZ0hpZGUoKSB7XG4gICAgaW1hZ2VBc3NldENoYW5nLl9hbmRyb2lkID0gbnVsbFxuICAgIGRsZy5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJ1xuICAgIGRsZ0FsZXJ0LnN0eWxlLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnXG4gICAgZGxnRW5kLnN0eWxlLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnXG4gICAgZGxnU3RhcnQuc3R5bGUudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSdcbiAgICBkbGdBYm91dGUuc3R5bGUudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSdcbn1cblxuZXhwb3J0cy5oaWRlRGV0YWlsTWFwID0gZnVuY3Rpb24oKXtcbiAgICBkZXRhaWxNYXAuc3R5bGUudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSdcbiAgICBkZXRhaWxNYXBCdG4uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJ1xufVxuXG5leHBvcnRzLnNob3dEZXRhaWxNYXAgPSBmdW5jdGlvbigpe1xuICAgIGRldGFpbE1hcC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnXG4gICAgZGV0YWlsTWFwQnRuLnN0eWxlLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnXG59XG5cbmZ1bmN0aW9uIGRsZ1Bpb250U3RhcnQoKSB7XG4gICAgaWYocG9pbnRTdGFydCl7XG4gICAgICAgIGRsZ1N0YXJ0LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSdcbiAgICB9IGVsc2Uge1xuICAgICAgICBkbGdTdGFydC5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJ1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZGxnUGlvbnRFbmQoKSB7XG4gICAgaWYocG9pbnRFbmQpe1xuICAgICAgICBkbGdFbmQuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJ1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRsZ0VuZC5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJ1xuICAgIH1cbn1cblxuZXhwb3J0cy5ub29wID0gKCkgPT4ge1xufVxuZXhwb3J0cy5hYm91dGUgPSAoKSA9PiB7XG4gICAgZGxnQWJvdXRlLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSdcbn1cblxuZXhwb3J0cy5yZU1hcD0oKT0+e1xuICAgIGZyYW1lTW9kdWxlLmdldEZyYW1lQnlJZCgndG9wbW9zdCcpLm5hdmlnYXRlKFwibWFwXCIpO1xufVxuZnVuY3Rpb24gZXJyb3JIYW5kbGVyKGUpIHtcbiAgICBjb25zb2xlLmxvZyhcInJlY2VpdmVkIFwiICsgZS5yZXNwb25zZUNvZGUgKyBcIiBjb2RlLlwiKTtcbiAgICB2YXIgdG9hc3QgPSBuZXcgdG9hc3R5KHsgdGV4dDpcIlVwZGF0ZSBmYWlsIHBsZWFzZSB0cnkgYWdhaW5cIn0pO1xuICAgIHRvYXN0LnNob3coKSAgIFxuICAgdmFyIHNlcnZlclJlc3BvbnNlID0gZS5yZXNwb25zZTtcbn1cblxuZnVuY3Rpb24gcmVzcG9uZGVkSGFuZGxlcihlKSB7XG4gICAgY29uc29sZS5sb2coXCJyZWNlaXZlZCBcIiArIGUucmVzcG9uc2VDb2RlICsgXCIgY29kZS4gU2VydmVyIHNlbnQ6IFwiICsgZS5kYXRhKTtcbiAgICBlLmRhdGEgPSBKU09OLnBhcnNlKGUuZGF0YSlcbiAgICBpZihlLmRhdGFbXCJzdGF0dXNcIl0gPT0gXCJTdWNjZXNzXCIpe1xuICAgICAgIGNvbnNvbGUubG9nKFwiU3VjY2Vzc1wiKVxuICAgICAgIGxldCBqc29uRGF0YSA9IHt9XG4gICAgICAganNvbkRhdGEuaWRDYXJkID0gcGFnZURhdGEuaWRDYXJkXG4gICAgICAganNvbkRhdGEudXNlck5hbWUgPSBwYWdlRGF0YS51c2VyTmFtZVxuICAgICAgIGpzb25EYXRhLmRldmljZUlkID0gcGFnZURhdGEuZGV2aWNlSWRcbiAgICAgICBqc29uRGF0YS5waG9uZU51bWJlciA9IHBhZ2VEYXRhLnBob25lTnVtYmVyXG4gICAgICAganNvbkRhdGEucGljID0gcGFnZURhdGEucGhvbmVOdW1iZXIrJy5qcGcnXG4gICAgICAgcGljUGF0aCA9IHRlbXBQYXRoXG4gICAgICAgXG4gICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwidXNlckRhdGFcIiwgSlNPTi5zdHJpbmdpZnkoanNvbkRhdGEpKVxuICAgICAgIFxuICAgICAgIHZhciB0b2FzdCA9IG5ldyB0b2FzdHkoeyB0ZXh0OlwiVXBkYXRlIHN1Y2Nlc3NcIn0pO1xuICAgICAgIHRvYXN0LnNob3coKSAgIFxuICAgXG4gICB9XG4gICBlbHNlIGlmKGUuZGF0YVtcInN0YXR1c1wiXT09IFwiRmFpbFwiKXtcbiAgICAgICB2YXIgdG9hc3QgPSBuZXcgdG9hc3R5KHsgdGV4dDpcIlVwZGF0ZSBmYWlsXCJ9KTtcbiAgICAgICB0b2FzdC5zaG93KCkgICBcblxuICAgfVxuICAgZWxzZSBpZihlLmRhdGFbXCJzdGF0dXNcIl09PSBcIkR1cGxpY2F0ZVVzZXJcIil7XG4gICAgICAgY29uc29sZS5sb2coXCJEdXBsaWNhdGVVc2VyXCIpXG4gICB9XG5cbn1cblxuZnVuY3Rpb24gcHJvZ3Jlc3NIYW5kbGVyKGUpIHtcbiAgICBjb25zb2xlLmxvZyhcInVwbG9hZGVkIFwiICsgZS5jdXJyZW50Qnl0ZXMgKyBcIiAvIFwiICsgZS50b3RhbEJ5dGVzKTtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlRGlzdGFuY2UocnNzaSkge1xuICBcbiAgICB2YXIgdHhQb3dlciA9IC01OSAvL2hhcmQgY29kZWQgcG93ZXIgdmFsdWUuIFVzdWFsbHkgcmFuZ2VzIGJldHdlZW4gLTU5IHRvIC02NVxuICAgIFxuICAgIGlmIChyc3NpID09IDApIHtcbiAgICAgIHJldHVybiAtMS4wOyBcbiAgICB9XG4gIFxuICAgIHZhciByYXRpbyA9IHJzc2kqMS4wL3R4UG93ZXI7XG4gICAgaWYgKHJhdGlvIDwgMS4wKSB7XG4gICAgICByZXR1cm4gTWF0aC5wb3cocmF0aW8sMTApO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHZhciBkaXN0YW5jZSA9ICAoMC44OTk3NikqTWF0aC5wb3cocmF0aW8sNy43MDk1KSArIDAuMTExOyAgICBcbiAgICAgIHJldHVybiBkaXN0YW5jZTtcbiAgICB9XG4gIH0gOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL21hcC5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL21hcC5qc1wiIH0pO1xuICAgIH0pO1xufSAiLCJcbm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZSBsb2FkZWQ9XFxcInBhZ2VMb2FkZWRcXFwiIHVubG9hZGVkPVxcXCJwYWdlVW5sb2FkZWRcXFwiIGlkPVxcXCJQYWdlXFxcIj5cXG4gIDwhLS0gPEFjdGlvbkJhciB0aXRsZT1cXFwiQU9UXFxcIiBjbGFzcz1cXFwiYWN0aW9uLWJhclxcXCI+PC9BY3Rpb25CYXI+IC0tPlxcbiAgPEFjdGlvbkJhciBhbmRyb2lkLmljb25WaXNpYmlsaXR5PVxcXCJhbHdheXNcXFwiICB0aXRsZT1cXFwib2ZmLXRyYWNrIGFsZXJ0IHN5c3RlbVxcXCIgIGNsYXNzPVxcXCJoZWFkZXIgYWN0aW9ucyBcXFwiID48L0FjdGlvbkJhcj5cXG4gIDwhLS0gWW91ciBVSSBjb21wb25lbnRzIGdvIGhlcmUgLS0+XFxuICBcXG4gIDxEb2NrTGF5b3V0ICB3aWR0aD1cXFwiMTAwJVxcXCIgaGVpZ2h0PVxcXCIxMDAlXFxcIiBjbGFzcz1cXFwiZmFzXFxcIj5cXG4gICAgPEFic29sdXRlTGF5b3V0IGRvY2s9XFxcInRvcFxcXCIgd2lkdGg9XFxcIjEwMCVcXFwiIGhlaWdodD1cXFwiOTAlXFxcIiBjbGFzcz1cXFwibWFwXFxcIj5cXG4gICAgPFNjcm9sbFZpZXcgd2lkdGg9XFxcIjEwMCVcXFwiICBoZWlnaHQ9XFxcIjEwMCVcXFwiPlxcbiAgICAgICAgPEFic29sdXRlTGF5b3V0ICB3aWR0aD1cXFwiMTAwJVxcXCIgIGhlaWdodD1cXFwiMTAwJVxcXCIgaWQ9XFxcIm1hcExheW91dFxcXCIgPlxcblxcbiAgICAgICAgPC9BYnNvbHV0ZUxheW91dD5cXG4gICAgPC9TY3JvbGxWaWV3PlxcbiAgICAgIDxTdGFja0xheW91dCB3aWR0aD1cXFwiODAlXFxcIiBoZWlnaHQ9XFxcIjI2JVxcXCIgY2xhc3M9XFxcImRldGFpbC1tYXBcXFwiIGlkPVxcXCJkZXRhaWxNYXBcXFwiPlxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcIiYjeGYwNTc7XFxcIiB3aWR0aD1cXFwiMzBcXFwiIGhlaWdodD1cXFwiMjBcXFwiICBtYXJnaW5Ub3A9XFxcIjUlXFxcIiBtYXJnaW5MZWZ0PVxcXCI4OCVcXFwiIHRhcD1cXFwiaGlkZURldGFpbE1hcFxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIj48L0xhYmVsPlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IGlkPVxcXCJ0ZXN0Vmlld1xcXCIgd2lkdGg9XFxcIjEwMCVcXFwiIG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIj5cXG4gICAgICAgICAgPExhYmVsIHRleHQ9XFxcIiYjeGYzYzU7XFxcIiBjb2xvcj1cXFwiI0M3MDAzOVxcXCIgY2xhc3M9XFxcIm1hcC1tYXJrXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgcm9hZE5hbWUgfX1cXFwiIGNsYXNzPVxcXCJ0cmFjay1uYW1lXFxcIj48L0xhYmVsPlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIFxcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJoci1saWdodCBtLXQtMTBcXFwiIHdpZHRoPVxcXCI5MCVcXFwiPjwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgd2lkdGg9XFxcIjEwMCVcXFwiIG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIj5cXG4gICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJ1c2VyLVJTU0lcXFwiIHRleHQ9XFxcIiYjeGYwOWU7XFxcIj48L0xhYmVsPlxcbiAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgcnNzaSB9fVxcXCIgY2xhc3M9XFxcInJzc2lzXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcInVzZXItcm9hZFxcXCIgdGV4dD1cXFwiJiN4ZjAxODtcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwicm9hZC10b3RhbFxcXCIgdGV4dD1cXFwiIHt7IGttICsnbSd9fVxcXCI+PC9MYWJlbD5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICBcXG4gICAgICA8U3RhY2tMYXlvdXQgd2lkdGg9XFxcIjI2XFxcIiBoZWlnaHQ9XFxcIjI2XFxcIiAgbWFyZ2luVG9wPVxcXCIzJVxcXCIgbWFyZ2luTGVmdD1cXFwiOTAlXFxcIiBjbGFzcz1cXFwiZGV0YWlsTWFwQnRuXFxcIiBpZD1cXFwiZGV0YWlsTWFwQnRuXFxcIiB0YXA9XFxcInNob3dEZXRhaWxNYXBcXFwiPlxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcIiYjeGYwNmU7XFxcIj48L0xhYmVsPlxcbiAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgPCEtLSBkbGcgVXNlci0tPlxcbiAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwibGctZGlhbG9nXFxcIiB0YXA9XFxcImhpZGVEaWFsb2dcXFwiIGlkPVxcXCJ1c2VyLWRhdGFcXFwiPlxcbiAgICAgICAgPEZsZXhib3hMYXlvdXQgc3RyZXRjaExhc3RDaGlsZD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImRpYWxvZ1xcXCIgdGFwPVxcXCJub29wXFxcIj5cXG5cXG4gICAgICAgICAgICA8RmxleGJveExheW91dCAgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiIGNsYXNzPVxcXCJ0aXRsZSBoZWFkZXJtZW51XFxcIiBoZWlnaHQ9XFxcIjExJVxcXCI+XFxuICAgICAgICAgICAgIDxJbWFnZSBzcmM9XFxcIn4vaW1hZ2VzL2ljb25zOC1yZXN1bWUtOTYucG5nXFxcIiB0ZXh0PVxcXCJVc2VyIGluZm9ybWF0aW9uXFxcIiBzdHJldGNoPVxcXCJub25lXFxcIiAgd2lkdGg9XFxcIjE1JVxcXCIgaGVpZ2h0PVxcXCIxMiVcXFwiIGNsYXNzPVxcXCJcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+PC9JbWFnZT5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlByb2ZpbGVcXFwiIGNsYXNzPVxcXCJ0ZXh0IFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiAgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwibGVmdFxcXCIgdGFwPVxcXCJoaWRlRGlhbG9nXFxcIiB0ZXh0PVxcXCImI3hmMDU3O1xcXCIgIGNsYXNzPVxcXCJjbG9zZSAgbGVmdCAgXFxcIi8+XFxuICAgICAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxcbiAgICAgICBcXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImNvbnRlbnQgYmdfZGxnX1VzZXIgXFxcIiBpZD1cXFwidHh0RGF0YVxcXCIgdmlzaWJpbGl0eT1cXFwiY29sbGFwc2VcXFwiPlxcblxcbiAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHdpZHRoPVxcXCIxMDAlXFxcIiBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCIgY2xhc3M9XFxcIm0tdC0yNXBcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiaWQgY2FyZFxcXCIgY2xhc3M9XFxcInR4dC1zXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGhpbnQ9XFxcIlxcXCIgdGV4dD1cXFwie3sgaWRDYXJkIH19XFxcIiAgY2xhc3M9XFxcInNlbGVjdGJveF9pZFxcXCIgaWQ9XFxcImlkQ2FyZFxcXCIvPlxcbiAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG5cXG4gICAgICAgICAgICAgIDxTdGFja0xheW91dCB3aWR0aD1cXFwiMTAwJVxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiIGNsYXNzPVxcXCJtLXQtMTBcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiTmFtZVxcXCIgY2xhc3M9XFxcInR4dC1zXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGhpbnQ9XFxcIlxcXCIgY2xhc3M9XFxcInNlbGVjdGJveF91c2VyXFxcIiB0ZXh0PVxcXCJ7eyB1c2VyTmFtZSB9fVxcXCIgaWQ9XFxcInVzZXJOYW1lXFxcIi8+XFxuICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHdpZHRoPVxcXCIxMDAlXFxcIiBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCIgY2xhc3M9XFxcIm0tdC0xMFxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJUZWxcXFwiIGNsYXNzPVxcXCJ0eHQtc1xcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCBoaW50PVxcXCJcXFwiIGNsYXNzPVxcXCJzZWxlY3Rib3hfdGVsXFxcIiB0ZXh0PVxcXCJ7eyBwaG9uZU51bWJlciB9fVxcXCIga2V5Ym9hcmRUeXBlPVxcXCJudW1iZXJcXFwiIGlkPVxcXCJwaG9uZU51bWJlclxcXCIvPlxcbiAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG5cXG4gICAgICAgICAgICAgIDxCdXR0b24gIHRhcD1cXFwic2V0VXNlclxcXCIgdGV4dD1cXFwiRWRpdFxcXCIgY2xhc3M9XFxcImFjdGlvbiBidXR0b25zZWRpdCBtLXQtMTVwXFxcIi8+XFxuXFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICA8IS0tIFBJQyBEQVRBIC0tPlxcbiAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJjb250ZW50IGJnX2RsZ19Vc2VyXFxcIiBpZD1cXFwicGljRGF0YVxcXCIgdmlzaWJpbGl0eT1cXFwiY29sbGFwc2VcXFwiPlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiQ2FyZFxcXCIgY2xhc3M9XFxcInR4dC1zXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8QWJzb2x1dGVMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgPEltYWdlIGlkPVxcXCJ1c2VyQ2FyZFxcXCIgIGNsYXNzPVxcXCJ1c2VyLXBpY1xcXCIgd2lkdGg9XFxcIjI1MFxcXCIgaGVpZ2h0PVxcXCIxNTBcXFwiPjwvSW1hZ2U+XFxuICAgICAgICAgICAgICAgICAgPExhYmVsICB3aWR0aD1cXFwiMjRcXFwiIGhlaWdodD1cXFwiMjRcXFwiIGNsYXNzPVxcXCJjYW1lcmFcXFwiIHRleHQ9XFxcIiYjeGYwMzA7XFxcIiB0YXA9XFxcImNoYW5nUGljXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8L0Fic29sdXRlTGF5b3V0PlxcbiAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICAgIDxTdGFja0xheW91dCB3aWR0aD1cXFwiMTAwJVxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiIGNsYXNzPVxcXCJsYWJsZV9sZWZ0XFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlRlbFxcXCIgY2xhc3M9XFxcInR4dC1zIFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCBoaW50PVxcXCJcXFwiIGNsYXNzPVxcXCJ0eHQtZlxcXCIgdGV4dD1cXFwie3sgcGhvbmVOdW1iZXIgfX1cXFwiIGtleWJvYXJkVHlwZT1cXFwibnVtYmVyXFxcIiBpZD1cXFwicGhvbmVOdW1iZXJcXFwiLz5cXG4gICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgIDxGbGV4Ym94TGF5b3V0IGNsYXNzPVxcXCJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICA8QnV0dG9uICB0YXA9XFxcInNldFVzZXJcXFwiIHRleHQ9XFxcIkVkaXRcXFwiICBjbGFzcz1cXFwiYWN0aW9uIGJ1dHRvbnNlZGl0MiBcXFwiLz5cXG4gICAgICAgICAgICAgIDwvRmxleGJveExheW91dD5cXG5cXG4gICAgICAgICAgPC9TdGFja0xheW91dD5cXG48IS0tICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAtLT5cXG4gICAgICAgICAgXFxuPCEtLSAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogLS0+XFxuICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XFxuICAgICAgPC9TdGFja0xheW91dD4gXFxuICAgICAgPCEtLSBkbGcgVXNlci0tPlxcblxcbiAgICAgIDwhLS0gZGxnIEFsZXJ0LS0+XFxuICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJsZy1kaWFsb2dcXFwiIHRhcD1cXFwiaGlkZURpYWxvZ1xcXCIgaWQ9XFxcInVzZXItYWxlcnRcXFwiPlxcbiAgICAgICAgPEZsZXhib3hMYXlvdXQgc3RyZXRjaExhc3RDaGlsZD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImRpYWxvZ1xcXCIgdGFwPVxcXCJub29wXFxcIj5cXG4gICAgICAgICAgICA8RmxleGJveExheW91dCBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCIgY2xhc3M9XFxcInRpdGxlXFxcIj5cXG4gICAgICAgICAgICAgICAgPGxhYmVsIHRleHQ9XFxcIkFsZXJ0XFxcIiBjbGFzcz1cXFwidGV4dFxcXCIvPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uICB0YXA9XFxcImhpZGVEaWFsb2dcXFwiIHRleHQ9XFxcIiYjeGYwMGQ7XFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiLz5cXG4gICAgICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJjb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgIDxTdGFja0xheW91dCB3aWR0aD1cXFwiMTAwJVxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiIGNsYXNzPVxcXCJtLXQtMTBwXFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIk91dCBvZiB0aGUgd2F5XFxcIiBjbGFzcz1cXFwidHh0LXNcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPEZsZXhib3hMYXlvdXQgY2xhc3M9XFxcImFjdGlvbnNcXFwiPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uICB0YXA9XFxcImhpZGVEaWFsb2dcXFwiIHRleHQ9XFxcIk9LXFxcIiBjbGFzcz1cXFwiYWN0aW9uXFxcIi8+XFxuICAgICAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxcbiAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxcbiAgICAgIDwvU3RhY2tMYXlvdXQ+IFxcbiAgICAgIDwhLS0gZGxnIEFsZXJ0LS0+XFxuXFxuICAgICAgPCEtLSBkbGcgb2ZmbGluZS0tPlxcbiAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwibGctZGlhbG9nXFxcIiB0YXA9XFxcImhpZGVEaWFsb2dcXFwiIGlkPVxcXCJ1c2VyLW9mZmxpbmVcXFwiPlxcbiAgICAgICAgPEZsZXhib3hMYXlvdXQgc3RyZXRjaExhc3RDaGlsZD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImRpYWxvZ1xcXCIgdGFwPVxcXCJub29wXFxcIj5cXG4gICAgICAgICAgICA8RmxleGJveExheW91dCBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCIgY2xhc3M9XFxcInRpdGxlXFxcIj5cXG4gICAgICAgICAgICAgICAgPGxhYmVsIHRleHQ9XFxcIm9mZmxpbmVcXFwiIGNsYXNzPVxcXCJ0ZXh0XFxcIi8+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gIHRhcD1cXFwiaGlkZURpYWxvZ1xcXCIgdGV4dD1cXFwiJiN4ZjAwZDtcXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIvPlxcbiAgICAgICAgICAgIDwvRmxleGJveExheW91dD5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHdpZHRoPVxcXCIxMDAlXFxcIiBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCIgY2xhc3M9XFxcIm0tdC0xMHBcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIHRleHQ9XFxcIllvdSBhcmUgaW4gb2ZmbGluZSBtb2RlLiBUaGUgbWFwIG1heSBub3QgYmUgdXBkYXRlZC5cXFwiIGNsYXNzPVxcXCJ0eHQtc1xcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICA8RmxleGJveExheW91dCBjbGFzcz1cXFwiYWN0aW9uc1xcXCI+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gIHRhcD1cXFwiaGlkZURpYWxvZ1xcXCIgdGV4dD1cXFwiT0tcXFwiIGNsYXNzPVxcXCJhY3Rpb25cXFwiLz5cXG4gICAgICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XFxuICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XFxuICAgICAgPC9TdGFja0xheW91dD4gXFxuICAgICAgPCEtLSBkbGcgb2ZmbGluZS0tPlxcblxcbiAgICAgIDwhLS0gZGxnIGNoZWNrZGF0YS0tPlxcbiAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwibGctZGlhbG9nXFxcIiB0YXA9XFxcIm5vb3BcXFwiIGlkPVxcXCJjaGVja2RhdGFcXFwiPlxcbiAgICAgICAgPEZsZXhib3hMYXlvdXQgc3RyZXRjaExhc3RDaGlsZD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImRpYWxvZ1xcXCIgdGFwPVxcXCJub29wXFxcIj5cXG4gICAgICAgICAgICA8RmxleGJveExheW91dCBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCIgY2xhc3M9XFxcInRpdGxlXFxcIj5cXG4gICAgICAgICAgICAgICAgPGxhYmVsIHRleHQ9XFxcIndhaXQgZGF0YVxcXCIgY2xhc3M9XFxcInRleHRcXFwiLz5cXG4gICAgICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJjb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgXFxuICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgd2lkdGg9XFxcIjEwMCVcXFwiIG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIiBjbGFzcz1cXFwibS10LTEwcFxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ3YWl0IGRhdGEuLi5cXFwiIGNsYXNzPVxcXCJ0eHQtcyBcXFwiPjwvTGFiZWw+ICBcXG4gICAgICAgICAgICAgICAgPEFjdGl2aXR5SW5kaWNhdG9yIGJ1c3k9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJtLXQtMzBwXFxcIi8+PCEtLSBsb25kaW5nLS0+XFxuICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiY29udGVudFxcXCI+IFxcbiAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIHRleHQ9XFxcIipQcmVzcyBSRUZSRVNIIHRvIGxvYWQgbWFwIGRhdGEgYW5kIHNlYXJjaCBmb3IgZGV2aWNlcy5cXFwiIGNsYXNzPVxcXCJzZXRfdGhhaTFcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICA8RmxleGJveExheW91dCBjbGFzcz1cXFwiYWN0aW9uc1xcXCI+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gIHRhcD1cXFwicmVNYXBcXFwiIHRleHQ9XFxcInJlZnJlc2ggXFxcIiBjbGFzcz1cXFwiYWN0aW9uXFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcIiNBREY4NzNcXFwiLz5cXG4gICAgICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XFxuICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XFxuICAgICAgPC9TdGFja0xheW91dD4gXFxuICAgICAgPCEtLSBkbGcgY2hlY2tkYXRhLS0+XFxuXFxuICAgICAgPCEtLSBkbGcgY291bnRVc2VyLS0+XFxuICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJsZy1kaWFsb2dcXFwiIHRhcD1cXFwibm9vcFxcXCIgaWQ9XFxcImNvdW50VXNlclxcXCI+XFxuICAgICAgICA8RmxleGJveExheW91dCBzdHJldGNoTGFzdENoaWxkPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwiZGlhbG9nXFxcIiB0YXA9XFxcIm5vb3BcXFwiPlxcbiAgICAgICAgICAgPEZsZXhib3hMYXlvdXQgIG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIiBjbGFzcz1cXFwidGl0bGUgaGVhZGVybWVudVxcXCIgaGVpZ2h0PVxcXCIxMSVcXFwiPlxcbiAgICAgICAgICAgICAgPGxhYmVsIHRleHQ9XFxcIlVzZXJzXFxcIiBjbGFzcz1cXFwidGV4dFxcXCIvPlxcbiAgICAgICAgICAgICAgPEJ1dHRvbiAgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwibGVmdFxcXCIgdGFwPVxcXCJoaWRlRGlhbG9nXFxcIiB0ZXh0PVxcXCImI3hmMDU3O1xcXCIgIGNsYXNzPVxcXCJjbG9zZSAgbGVmdCAgXFxcIi8+XFxuICAgICAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCIgY2xhc3M9XFxcInRvdGFsLXVzZXJzXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiVG90YWwgOiBcXFwiIHdpZHRoPVxcXCI4MCVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7Y291bnRVc2VyWzBdLmNvdW50VXNlcn19XFxcIiAgd2lkdGg9XFxcIjIwJVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICAgIDxMaXN0VmlldyBpdGVtcz1cXFwie3sgY291bnRVc2VyIH19XFxcIiBpdGVtVGFwPVxcXCJyZW1vdmVDYXJkXFxcIiBjbGFzcz1cXFwidXNlcnMtc2VsZWN0b3JcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxMaXN0Vmlldy5pdGVtVGVtcGxhdGUgIGxldC1jb3VudHJ5PVxcXCJpdGVtXFxcIiBsZXQtaT1cXFwiaW5kZXhcXFwiIGxldC1vZGQ9XFxcIm9kZFxcXCIgbGV0LWV2ZW49XFxcImV2ZW5cXFwiIGNsYXNzPVxcXCJsaXN0LWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcIml0ZW1cXFwiIG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCImI3hmMjFkO1xcXCIgY29sb3I9XFxcIiMzODk4RTdcXFwiIGNsYXNzPVxcXCJ0eHQtY291bnQtaWNvblxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBwaG9uZV9udW1iZXIgfX1cXFwiIGNsYXNzPVxcXCJ0eHQtY291bnQtbmFtZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBuYW1lIH19XFxcIiBjbGFzcz1cXFwidHh0LWNvdW50LXBvaW50XFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICAgIDwvTGlzdFZpZXcuaXRlbVRlbXBsYXRlPlxcbiAgICAgICAgICAgICAgPC9MaXN0Vmlldz5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxcbiAgICAgIDwvU3RhY2tMYXlvdXQ+IFxcbiAgICAgIDwhLS0gZGxnIGNvdW50VXNlci0tPlxcblxcbiAgICAgIDwhLS0gZGxnIFN0YXJ0LS0+XFxuICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJsZy1kaWFsb2dcXFwiIHRhcD1cXFwibm9vcFxcXCIgaWQ9XFxcInBvaW50U3RhcnRcXFwiPlxcbiAgICAgICAgPEZsZXhib3hMYXlvdXQgc3RyZXRjaExhc3RDaGlsZD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImRpYWxvZ1xcXCIgdGFwPVxcXCJub29wXFxcIj5cXG4gICAgICAgICAgICA8RmxleGJveExheW91dCBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCIgY2xhc3M9XFxcInRpdGxlXFxcIj5cXG4gICAgICAgICAgICAgICAgPGxhYmVsIHRleHQ9XFxcIlBvaW50IFN0YXJ0XFxcIiBjbGFzcz1cXFwidGV4dFxcXCIvPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uICB0YXA9XFxcImhpZGVEaWFsb2dcXFwiIHRleHQ9XFxcIiYjeGYwMGQ7XFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiLz5cXG4gICAgICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJjb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJTdGFydC4uLlxcXCIgY2xhc3M9XFxcInR4dC1zXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPEZsZXhib3hMYXlvdXQgY2xhc3M9XFxcImFjdGlvbnNcXFwiPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uICB0YXA9XFxcImhpZGVEaWFsb2dcXFwiIHRleHQ9XFxcIk9LXFxcIiBjbGFzcz1cXFwiYWN0aW9uXFxcIi8+XFxuICAgICAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxcbiAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxcbiAgICAgIDwvU3RhY2tMYXlvdXQ+IFxcbiAgICAgIDwhLS0gZGxnIFN0YXJ0LS0+XFxuXFxuICAgICAgPCEtLSBkbGcgRW5kLS0+XFxuICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJsZy1kaWFsb2dcXFwiIHRhcD1cXFwibm9vcFxcXCIgaWQ9XFxcInBvaW50RW5kXFxcIj5cXG4gICAgICAgIDxGbGV4Ym94TGF5b3V0IHN0cmV0Y2hMYXN0Q2hpbGQ9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJkaWFsb2dcXFwiIHRhcD1cXFwibm9vcFxcXCI+XFxuICAgICAgICAgICAgPEZsZXhib3hMYXlvdXQgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiIGNsYXNzPVxcXCJ0aXRsZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxsYWJlbCB0ZXh0PVxcXCJQb2ludCBFbmRcXFwiIGNsYXNzPVxcXCJ0ZXh0XFxcIi8+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gIHRhcD1cXFwiaGlkZURpYWxvZ1xcXCIgdGV4dD1cXFwiJiN4ZjAwZDtcXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIvPlxcbiAgICAgICAgICAgIDwvRmxleGJveExheW91dD5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkVuZC4uLlxcXCIgY2xhc3M9XFxcInR4dC1zXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPEZsZXhib3hMYXlvdXQgY2xhc3M9XFxcImFjdGlvbnNcXFwiPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRhcD1cXFwiaGlkZURpYWxvZ1xcXCIgdGV4dD1cXFwiT0tcXFwiIGNsYXNzPVxcXCJhY3Rpb25cXFwiLz5cXG4gICAgICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XFxuICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XFxuICAgICAgPC9TdGFja0xheW91dD4gXFxuICAgICAgPCEtLSBkbGcgRW5kLS0+XFxuXFxuICAgICAgPCEtLSBkbGcgYWJvdXRlLS0+XFxuICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJsZy1kaWFsb2dcXFwiIHRhcD1cXFwibm9vcFxcXCIgaWQ9XFxcImFib3V0ZVxcXCI+XFxuICAgICAgICA8RmxleGJveExheW91dCAgIHN0cmV0Y2hMYXN0Q2hpbGQ9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJkaWFsb2cgIFxcXCIgdGFwPVxcXCJub29wXFxcIj5cXG4gICAgICAgICAgPEZsZXhib3hMYXlvdXQgIG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIiBjbGFzcz1cXFwidGl0bGUgaGVhZGVybWVudVxcXCIgaGVpZ2h0PVxcXCIxMSVcXFwiPlxcbiAgICAgICAgICAgICAgPGxhYmVsIHRleHQ9XFxcIkFib3V0ZVxcXCIgY2xhc3M9XFxcInRleHRcXFwiLz5cXG4gICAgICAgICAgICAgIDxCdXR0b24gIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImxlZnRcXFwiIHRhcD1cXFwiaGlkZURpYWxvZ1xcXCIgdGV4dD1cXFwiJiN4ZjA1NztcXFwiICBjbGFzcz1cXFwiY2xvc2UgIGxlZnQgIFxcXCIvPlxcbiAgICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XFxuICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxuICAgICAgICAgICAgPFNjcm9sbFZpZXcgd2lkdGg9XFxcIjEwMCVcXFwiICBoZWlnaHQ9XFxcIjEwMCVcXFwiPlxcbiAgICAgICAgICAgICA8R3JpZExheW91dCBjbGFzcz1cXFwibS0xMFxcXCIgcm93cz1cXFwiYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvXFxcIj5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0ICByb3c9XFxcIjBcXFwiIG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiJiN4ZjJiYjtcXFwiIGNsYXNzPVxcXCJhYm91dGUtdHh0XFxcIj48L0xhYmVsPjxMYWJlbCBjbGFzcz1cXFwiYWJvdXRlLXR4dC1kZXRhaWxcXFwiIHdpZHRoPVxcXCIxMDAlXFxcIiBoZWlnaHQ9XFxcImF1dG9cXFwiIHRleHQ9XFxcInBlcnNvbmFsIEluZm9ybWF0aW9uXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcIm0tMTBcXFwiIHJvdz1cXFwiMVxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCImI3hmNTU0O1xcXCIgY2xhc3M9XFxcImFib3V0ZS10eHRcXFwiPjwvTGFiZWw+PExhYmVsIGNsYXNzPVxcXCJhYm91dGUtdHh0LWRldGFpbFxcXCIgIGhlaWdodD1cXFwiYXV0b1xcXCIgdGV4dD1cXFwiVG90YWwgbnVtYmVyIG9mIHBlb3BsZSBvbiB0aGUgcm91dGVcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcIm0tMTBcXFwiIHJvdz1cXFwiMlxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCImI3hmMDllO1xcXCIgY2xhc3M9XFxcImFib3V0ZS10eHRcXFwiPjwvTGFiZWw+PExhYmVsIGNsYXNzPVxcXCJhYm91dGUtdHh0LWRldGFpbFxcXCIgIGhlaWdodD1cXFwiYXV0b1xcXCIgdGV4dD1cXFwiU2lnbmFsIHN0cmVuZ3RoIGJsdWV0b290aCAoUlNTSSlcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcIm0tMTBcXFwiIHJvdz1cXFwiM1xcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCImI3hmMDE4O1xcXCIgY2xhc3M9XFxcImFib3V0ZS10eHRcXFwiPjwvTGFiZWw+PExhYmVsIGNsYXNzPVxcXCJhYm91dGUtdHh0LWRldGFpbFxcXCIgIGhlaWdodD1cXFwiYXV0b1xcXCIgdGV4dD1cXFwiVGhlIGRpc3RhbmNlIGZyb20gdGhlIGN1cnJlbnQgcG9pbnRcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugcm93PVxcXCI0XFxcIiBzcmM9XFxcIn4vaW1hZ2VzL0ZJVE1sb2dvLnBuZ1xcXCIgY2xhc3M9XFxcImZhcyB0LTI4IG0tMTAgYWJvdXRlLWxvZ29cXFwiPjwvSW1hZ2U+XFxuICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgPC9TY3JvbGxWaWV3PlxcbiAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxcbiAgICAgIDwvU3RhY2tMYXlvdXQ+IFxcbiAgICAgIDwhLS0gZGxnIGFib3V0ZS0tPlxcblxcblxcbiAgICA8L0Fic29sdXRlTGF5b3V0PlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IHdpZHRoPVxcXCIxMDAlXFxcIiAgY2xhc3M9XFxcImJnbWFwIFxcXCI+XFxuICAgICAgPEZsZXhib3hMYXlvdXQgIHdpZHRoPVxcXCIxMDAlXFxcIiBoZWlnaHQ9XFxcIjEwMCVcXFwiIGNsYXNzPVxcXCIgbWFwLW1lbnUgXFxcIj5cXG4gICAgICAgICAgPExhYmVsIHRleHQ9XFxcIiYjeGYyYmI7XFxcIiB0YXA9XFxcInVzZXJcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCImI3hmNTU0O1xcXCIgdGFwPVxcXCJ1c2VyQ291bnRcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiJiN4ZjA1OTtcXFwiIHRhcD1cXFwiYWJvdXRlXFxcIj48L0xhYmVsPlxcbiAgICAgIDwvRmxleGJveExheW91dD5cXG4gICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIFxcbiAgPC9Eb2NrTGF5b3V0PlxcbiAgPCEtLVJFTU9WRV9DQVJELS0+XFxuPC9QYWdlPlxcblwiOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL21hcC54bWxcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwibWFya3VwXCIsIHBhdGg6IFwiLi9tYXAueG1sXCIgfSk7XG4gICAgfSk7XG59ICIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnR4dC1oe1xcbiAgICBmb250LXNpemU6IDI4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwJTtcXG59XFxuXFxuLnR4dC1ze1xcbiAgICBmb250LXNpemU6IDE4O1xcbiAgICBtYXJnaW46IDUlLDAsMCw4JTtcXG59XFxuXFxuLnR4dC1me1xcbiAgICB3aWR0aDo1MCU7XFxufVxcbi5tLXQtNHB7XFxuICAgIG1hcmdpbi10b3A6IDQlO1xcbiAgIFxcbn1cXG4ubS10LTVwe1xcbiAgICBtYXJnaW4tdG9wOiA1JTtcXG4gICBcXG59XFxuLm0tdC0xMHB7XFxuICAgIG1hcmdpbi10b3A6IDEwJTtcXG4gICBcXG59XFxuLm0tdC0yMHB7XFxuICAgIG1hcmdpbi10b3A6IDIwJTtcXG4gICBcXG59XFxuLm0tdC0zMHB7XFxuICAgIG1hcmdpbi10b3A6IDMwJTtcXG4gICAgXFxufVxcbi5tLXQtMzZwe1xcbiAgICBtYXJnaW4tdG9wOiAzNiU7XFxuICAgIFxcbn1cXG4ubS10LTQwcHtcXG4gICAgbWFyZ2luLXRvcDogNDAlO1xcbiAgIFxcbn1cXG5cXG4uYnRuLXNjYW57XFxuICAgIHdpZHRoOiA0MiU7XFxufVxcblxcbi5idG4tc3VibWl0e1xcbiAgICB3aWR0aDogNDIlO1xcbn1cXG5cXG4uYmd7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwifi9pbWFnZXMvcGV4ZWxzLXBob3RvLTEyODIyNjQuanBnXFxcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcblxcbi5sZy1kaWFsb2cge1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBoZWlnaHQ6MTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xcbiAgICB2aXNpYmlsaXR5OiBjb2xsYXBzZTtcXG59XFxuLmxnLWRpYWxvZyAuZGlhbG9nIHtcXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCd+L2ltYWdlcy9iZy5wbmcnKTsgKi9cXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA0O1xcbiAgICB3aWR0aDogMjgwO1xcbiAgICBoZWlnaHQ6IDQwMDtcXG4gICAgbWFyZ2luOiA0OCBhdXRvO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5kaWFsb2cgLnRpdGxle1xcbiAgICBwb3NpdGlvbjogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA0MDtcXG4gICAgcGFkZGluZzowO1xcbiAgICBtYXJnaW4tYm90dG9tOiA4O1xcbiAgICBmbGV4LXNocmluazogMDsgICBcXG59XFxuXFxuLnRpdGxlIC50ZXh0IHtcXG4gICAgZm9udC1zaXplOiAyMDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDYgOCAwIDg7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuLmNsb3NlIHtcXG4gICAgLyogZmxleC1zaHJpbms6IDA7ICovXFxuICAgIHdpZHRoOiA0MDtcXG4gICAgbWFyZ2luOiA0O1xcbiAgICAvKiBmb250LXNpemU6IDE2OyAqL1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblxcbi5jb250ZW50IHtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG4uYWN0aW9ucyB7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICBjb2xvcjogcmdiKDc4LCA3MSwgNzEpO1xcbiAgICBtYXJnaW46IDAgMDtcXG4gICAgaGVpZ2h0OiA1MDtcXG59XFxuLmFjdGlvbnMgLmFjdGlvbiB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuLmhlYWRlcntcXG5cXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCd+L2ltYWdlcy9iZ19oZWFkZXIuanBnJyk7XFxufVxcbi8qLS0tLS0tLS0tLS0tLS0tLS1mb3JtIHRleHRib3gtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbi5zZWxlY3Rib3h7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogMTUlO1xcbiAgICBtYXJnaW46IDVweCAxMCU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NCwgMTYzLCAxNjMsIDAuNTYyKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gIH1cXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4gIFxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tYnV0dG9ucyBzY2FuIGNhcmQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5idG4tZ3JvdXAgLmJ1dHRvbnMyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDsgXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgcGFkZGluZzogMTVweCAzMnB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG4gIC5idXR0b25zMiB7XFxuXFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogMTElO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwgMCwgMCk7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMiwgMjMwLCAyMzAsIDAuODE1KTtcXG4gICAgYm9yZGVyOiAycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgOXB4ICM5OTk7XFxuICB9XFxuICAuYnV0dG9uczI6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICMzZThlNDF9XFxuICAgIFxcbiAgLmJ1dHRvbnMyOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZThlNDE7XFxuICAgIGJveC1zaGFkb3c6IDAgNXB4ICM2NjY7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xcbiAgfVxcbiAgXFxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbiAgXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1idXR0b25zLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4uYnRuLWdyb3VwIC5idXR0b25zIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyLCAyNDAsIDI0MCk7IFxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIHBhZGRpbmc6IDE1cHggMzJweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuICBcXG4gIC5idXR0b25zIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgLyogaGVpZ2h0OiAxMCU7ICovXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgcGFkZGluZzogMTVweCAzNXB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwLCAxOTcsIDk0LCAwLjc0Nyk7XFxuICAgIGJvcmRlcjogMXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDlweCAjOTk5O1xcbiAgfVxcblxcbiAgLmJ1dHRvbnM6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICMzZThlNDF9XFxuICBcXG4gIC5idXR0b25zOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiY2M0YmM7XFxuICAgIGJveC1zaGFkb3c6IDAgNXB4ICM2NjY7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xcbiAgfVxcbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1BY3Rpb25CYXItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbiAgLkFjdGlvbkJhcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjMsIDE2MiwgMTYyLCAwLjYyMyk7XFxuICB9XFxuICBcXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1lbmQtLS1BY3Rpb25CYXItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1pY29uIGlkLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuICAuaWNvbklEIHtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIG1hcmdpbjogMiUgMCUgMCUgLTEwJTtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHJlc2l6ZTogdmVydGljYWw7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG4gLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4gIC5iZ3Rlc3R7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7IFxcbiAgfVwiLCBcIlwiXSk7XG5cbjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9yZWdpc3Rlci5jc3NcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic3R5bGVcIiwgcGF0aDogXCIuL3JlZ2lzdGVyLmNzc1wiIH0pO1xuICAgIH0pO1xufSAiLCJ2YXIgaW1hZ2VNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9pbWFnZVwiKVxudmFyIGNhbWVyYSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtY2FtZXJhXCIpXG52YXIgT2JzZXJ2YWJsZSA9IHJlcXVpcmUoXCJkYXRhL29ic2VydmFibGVcIilcbi8vIGNvbnN0IGZyYW1lTW9kdWxlID0gcmVxdWlyZShcInVpL2ZyYW1lXCIpO1xuY29uc3QgZ2V0RnJhbWVCeUlkID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIikuZ2V0RnJhbWVCeUlkO1xuY29uc3QgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIilcbmNvbnN0IFRlbGVwaG9ueSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdGVsZXBob255XCIpXG52YXIgYmdodHRwID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1iYWNrZ3JvdW5kLWh0dHBcIik7XG52YXIgc2Vzc2lvbiA9IGJnaHR0cC5zZXNzaW9uKFwiaW1hZ2UtdXBsb2FkXCIpO1xudmFyIGltYWdlU291cmNlTW9kdWxlID0gcmVxdWlyZShcImltYWdlLXNvdXJjZVwiKTtcbnZhciBmcyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCIpO1xudmFyIG9yaWVudGF0aW9uID0gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LW9yaWVudGF0aW9uJylcbnZhciB0b2FzdHkgPSByZXF1aXJlKCduYXRpdmVzY3JpcHQtdG9hc3R5JykuVG9hc3R5O1xuXG5cbiB2YXIgcGFnZURhdGEgPSBuZXcgT2JzZXJ2YWJsZS5mcm9tT2JqZWN0KHtcbiAgICBpZENhcmQ6IFwiXCIsXG4gICAgdXNlck5hbWU6IFwiXCIsXG4gICAgZGV2aWNlSWQ6XCJcIixcbiAgICBwaG9uZU51bWJlcjpcIlwiLFxuICAgIGJsZUlkOlwiXCIsXG59KVxuLy8gMTkyLjE2OC40My41MFxuLy9odHRwOi8vMjAyLjEyOS4xNi42ODo3Nzc3XG5jb25zdCBBUElfVVJMID0gXCJodHRwOi8vMjAyLjEyOS4xNi42ODo3Nzc3XCJcbmxldCBtUmVnaXMgPSBudWxsXG5sZXQgYnRuQ2FtZXJhID1udWxsXG5sZXQgbVJlZ2lzQnRuID1udWxsXG5sZXQgYnRub2ZmbGluZU1vZGUgPSBudWxsXG5sZXQgZGxnUGFnZU1hcCA9IG51bGxcbi8vIGxldCBmcmFtZU1vZHVsZSA9IG51bGxcbmV4cG9ydHMucGFnZUxvYWRlZCA9IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAvLyBSZW1vdmVzIGFsbCB2YWx1ZXMuXG4gICAgLy8gYXBwU2V0dGluZ3MuY2xlYXIoKTtcbiAgICBvcmllbnRhdGlvbi5zZXRPcmllbnRhdGlvbihcInBvcnRyYWl0XCIpXG4gICAgLy8gdmFyIGVuID0gamF2YS5uZXQuTmV0d29ya0ludGVyZmFjZS5nZXROZXR3b3JrSW50ZXJmYWNlcygpO1xuICAgIC8vIGZvcih2YXIgb2JqIGluIGVuKXtcbiAgICAvLyAgICAgdmFyIGludGYgPSBlbi5uZXh0RWxlbWVudCgpO1xuICAgIC8vICAgICB2YXIgZW51bUlwQWRkciA9IGludGYuZ2V0TmFtZSgpO1xuICAgIC8vICAgICBpZihpbnRmLmdldEhhcmR3YXJlQWRkcmVzcygpKXtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGVudW1JcEFkZHIpXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyh0b0hleFN0cmluZyhpbnRmLmdldEhhcmR3YXJlQWRkcmVzcygpKSlcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBpZihlbnVtSXBBZGRyID09IFwid2xhbjBcIil7XG4gICAgLy8gICAgICAgICBsZXQgbWFjQWRkcmVzcyA9IGludGYuZ2V0SGFyZHdhcmVBZGRyZXNzKClcbiAgICAvLyAgICAgICAgIGlmIChtYWNBZGRyZXNzID09IG51bGwpIHtcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRvSGV4U3RyaW5nKG1hY0FkZHJlc3MpKVxuICAgIC8vICAgICAgICAgcGFnZURhdGEuYmxlSWQgPSB0b0hleFN0cmluZyhtYWNBZGRyZXNzKVxuICAgIC8vICAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiYmxlSWRcIixwYWdlRGF0YS5ibGVJZCtcIlwiKVxuICAgIC8vICAgICB9XG4gICAgLy8gfVxuICAgIC8vIGZ1bmN0aW9uIHRvSGV4U3RyaW5nKGJ5dGVBcnJheSkge1xuICAgIC8vICAgICBsZXQgaSA9IDBcbiAgICAvLyAgICAgcmV0dXJuIEFycmF5LmZyb20oYnl0ZUFycmF5LCBmdW5jdGlvbihieXRlKSB7XG4gICAgLy8gICAgICAgICBpKytcbiAgICAvLyAgICAgICAgIGlmKGkgPT0gNiApYnl0ZSA9IGJ5dGUtMVxuICAgIC8vICAgICAgIHJldHVybiAoJzAnICsgKGJ5dGUgJiAweEZGKS50b1N0cmluZygxNikpLnNsaWNlKC0yKTtcbiAgICAvLyAgICAgfSkuam9pbignJylcbiAgICAvLyB9XG5cbiAgICBwYWdlID0gYXJncy5vYmplY3RcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gcGFnZURhdGFcbiAgICBcbiAgICBpZihhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJ1c2VyRGF0YVwiKSl7XG4gICAgICAgIGxldCB1c2VyRGF0YSA9IEpTT04ucGFyc2UoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwidXNlckRhdGFcIikpXG4gICAgICAgIGlmKHVzZXJEYXRhLnBob25lTnVtYmVyICE9IFwiXCIpe1xuICAgICAgICAgICAgY29uc3QgbmF2aWdhdGlvbkVudHJ5ID0ge1xuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6IFwibWFwXCIsXG4gICAgICAgICAgICAgICAgY29udGV4dDogeyBtb2RlOiBcIm9ubGluZVwiIH0sXG4gICAgICAgICAgICAgICAgYW5pbWF0ZWQ6IGZhbHNlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgZnJhbWUgPSBnZXRGcmFtZUJ5SWQoXCJQYWdlXCIpO1xuICAgICAgICAgICAgZnJhbWUubmF2aWdhdGUobmF2aWdhdGlvbkVudHJ5KTtcbiAgICAgICAgICAgIC8vIGZyYW1lTW9kdWxlLnRvcG1vc3QoKS5uYXZpZ2F0ZShuYXZpZ2F0aW9uRW50cnkpO1xuICAgICAgICB9XG4gICAgfSBcblxuICAgIFRlbGVwaG9ueS5UZWxlcGhvbnkoKS50aGVuKGZ1bmN0aW9uKHJlc29sdmVkKSB7XG4gICAgICAgIHBhZ2VEYXRhLmRldmljZUlkID0gcmVzb2x2ZWQuZGV2aWNlSWRcbiAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdlcnJvciA+JywgZXJyb3IpXG4gICAgICAgIGNvbnNvbGUuZGlyKGVycm9yKTtcbiAgICB9KVxuICAgIC8vIGxldCBpZENhcmRMZW5ndGggPSBbXVxuICAgIC8vIGxldCB1c2VyTmFtZUxlbmd0aCA9IFtdXG4gICAgLy8gbGV0IHBob25lTnVtYmVyTGVuZ3RoID0gW11cblxuICAgIGxldCBpZENhcmQgPSBwYWdlLmdldFZpZXdCeUlkKCdpZENhcmQnKVxuICAgIGxldCB1c2VyTmFtZSA9IHBhZ2UuZ2V0Vmlld0J5SWQoJ3VzZXJOYW1lJylcbiAgICBsZXQgcGhvbmVOdW1iZXIgPSBwYWdlLmdldFZpZXdCeUlkKCdwaG9uZU51bWJlcicpXG4gICAgYnRuQ2FtZXJhID0gcGFnZS5nZXRWaWV3QnlJZCgnYnRuQ2FtZXJhJylcbiAgICBtUmVnaXMgPSBwYWdlLmdldFZpZXdCeUlkKCdtUmVnaXMnKVxuICAgIG1SZWdpc0J0biA9IHBhZ2UuZ2V0Vmlld0J5SWQoJ21SZWdpc0J0bicpXG4gICAgYnRub2ZmbGluZU1vZGUgPSBwYWdlLmdldFZpZXdCeUlkKCdidG5vZmZsaW5lTW9kZScpXG4gICAgZGxnUGFnZU1hcCA9IHBhZ2UuZ2V0Vmlld0J5SWQoJ3VzZXItcGFnZU1hcCcpXG5cbiAgICAvLyBpZENhcmRMZW5ndGhbMF0gPSBuZXcgYW5kcm9pZC50ZXh0LklucHV0RmlsdGVyLkxlbmd0aEZpbHRlcigxMylcbiAgICAvLyB1c2VyTmFtZUxlbmd0aFswXSA9IG5ldyBhbmRyb2lkLnRleHQuSW5wdXRGaWx0ZXIuTGVuZ3RoRmlsdGVyKDMwKVxuICAgIC8vIHBob25lTnVtYmVyTGVuZ3RoWzBdID0gbmV3IGFuZHJvaWQudGV4dC5JbnB1dEZpbHRlci5MZW5ndGhGaWx0ZXIoMTApXG5cbiAgICAvLyBpZENhcmQuYW5kcm9pZC5zZXRGaWx0ZXJzKGlkQ2FyZExlbmd0aClcbiAgICAvLyB1c2VyTmFtZS5hbmRyb2lkLnNldEZpbHRlcnModXNlck5hbWVMZW5ndGgpXG4gICAgLy8gcGhvbmVOdW1iZXIuYW5kcm9pZC5zZXRGaWx0ZXJzKHBob25lTnVtYmVyTGVuZ3RoKVxuICAgIFxufVxuZXhwb3J0cy50YWtlQ2FtZXJhID0gIGZ1bmN0aW9uKCkge1xuICAgIGlmIChwYWdlRGF0YS5waG9uZU51bWJlci5sZW5ndGggPCAxMCkge1xuICAgICAgICB2YXIgdG9hc3QgPSBuZXcgdG9hc3R5KHsgdGV4dDogJ1BsZWFzZSBlbnRlciB5b3VyIG1vYmlsZSBwaG9uZSBudW1iZXIgdG8gY29tcGxldGUgMTAgZGlnaXRzLicgfSk7XG4gICAgICAgIHRvYXN0LnNob3coKVxuICAgICAgICByZXR1cm4gXG4gICAgfSBcbiAgICBjYW1lcmEucmVxdWVzdFBlcm1pc3Npb25zKCkudGhlbihcbiAgICAgICAgZnVuY3Rpb24gc3VjY2VzcygpIHtcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0ge2tlZXBBc3BlY3RSYXRpbzogZmFsc2UsIHNhdmVUb0dhbGxlcnk6IGZhbHNlIH07XG4gICAgICAgICAgICBjYW1lcmEudGFrZVBpY3R1cmUob3B0aW9ucykgICBcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChpbWFnZUFzc2V0KSB7XG4gICAgICAgICAgICAgICAgZGxnUGFnZU1hcC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZXN1bHQgaXMgYW4gaW1hZ2UgYXNzZXQgaW5zdGFuY2VcIik7XG4gICAgICAgICAgICAgICAgdmFyIGltYWdlID0gbmV3IGltYWdlTW9kdWxlLkltYWdlKCk7XG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gaW1hZ2VBc3NldDtcbiAgICAgICAgICAgICAgICB2YXIgZmlsZSA9ICBpbWFnZS5zcmMuX2FuZHJvaWQ7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IEFQSV9VUkwrXCIvY2FyZHNcIjtcbiAgICAgICAgICAgICAgICB2YXIgcmVxdWVzdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkZpbGUtTmFtZVwiOiBcInBob3RvXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVXBsb2FkaW5nXCJcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGxldCBwYXJhbXMgPSBbXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogXCJwaG9uZU51bWJlclwiLCB2YWx1ZTogcGFnZURhdGEucGhvbmVOdW1iZXIgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBcImRldmljZUlkXCIsIHZhbHVlOiBwYWdlRGF0YS5kZXZpY2VJZCB9LFxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IFwiYmxlSWRcIiwgdmFsdWU6IHBhZ2VEYXRhLmJsZUlkIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgXCJuYW1lXCI6ICdwaG90bycsIFwiZmlsZW5hbWVcIjogZmlsZSwgXCJtaW1lVHlwZVwiOiBcImltYWdlL2pwZ1wiIH1cbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIGxldCB0YXNrID0gc2Vzc2lvbi5tdWx0aXBhcnRVcGxvYWQocGFyYW1zLCByZXF1ZXN0KTtcbiAgICAgICAgICAgICAgICB0YXNrLm9uKFwicHJvZ3Jlc3NcIiwgcHJvZ3Jlc3NIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICB0YXNrLm9uKFwiZXJyb3JcIiwgZXJyb3JIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICB0YXNrLm9uKFwicmVzcG9uZGVkXCIsIHJlc3BvbmRlZEhhbmRsZXIpO1xuICAgICAgICAgICAgICAgIC8vIHRhc2sub24oXCJjb21wbGV0ZVwiLCBjb21wbGV0ZUhhbmRsZXIpO1xuICAgICAgICAgICAgICAgIGxldCBkb2N1bWVudHMgPSBmcy5rbm93bkZvbGRlcnMuZG9jdW1lbnRzKCk7XG4gICAgICAgICAgICAgICAgbGV0IHBhdGggPSBmcy5wYXRoLmpvaW4oZG9jdW1lbnRzLnBhdGgsIHBhZ2VEYXRhLnBob25lTnVtYmVyK1wiLmpwZ1wiKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwYXRoKVxuICAgICAgICAgICAgICAgIGltYWdlU291cmNlTW9kdWxlLmZyb21Bc3NldChpbWFnZUFzc2V0KVxuICAgICAgICAgICAgICAgIC50aGVuKGltYWdlU291cmNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgIGltYWdlU291cmNlLnNhdmVUb0ZpbGUocGF0aCwgXCJqcGdcIik7XG4gICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYXBwbHlGaWx0ZXIgRVJST1I6ICcgKyBlcnIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSwgXG4gICAgICAgIGZ1bmN0aW9uIGZhaWx1cmUoKSB7XG4gICAgICAgIC8vIHBlcm1pc3Npb24gcmVxdWVzdCByZWplY3RlZFxuICAgICAgICAvLyAuLi4gdGVsbCB0aGUgdXNlciAuLi5cbiAgICAgICAgfVxuICAgICk7XG59XG5leHBvcnRzLnJlZ2lzdGVyID0gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBqc29uRGF0YSA9IHt9XG4gICAgdmFyIHRvYXN0ID0gbnVsbFxuICAgIGpzb25EYXRhLmlkQ2FyZCA9IHBhZ2VEYXRhLmlkQ2FyZFxuICAgIGpzb25EYXRhLnVzZXJOYW1lID0gcGFnZURhdGEudXNlck5hbWVcbiAgICBqc29uRGF0YS5kZXZpY2VJZCA9IHBhZ2VEYXRhLmRldmljZUlkXG4gICAganNvbkRhdGEucGhvbmVOdW1iZXIgPSBwYWdlRGF0YS5waG9uZU51bWJlclxuICAgIGpzb25EYXRhLmJsZUlkID0gcGFnZURhdGEuYmxlSWRcbiAgICBqc29uRGF0YS5waWMgPSAnJ1xuXG4gICAgbGV0IHRleHQgPSBudWxsXG4gICAgdmFyIHRlc3RlciA9IC9eW2EtekEtWjAtOeC4gS3guZkgXSokL1xuICAgIGlmIChqc29uRGF0YS51c2VyTmFtZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRleHQgPSAnUGxlYXNlIGVudGVyIG5hbWUnXG4gICAgfSBlbHNlIGlmIChqc29uRGF0YS5waG9uZU51bWJlci5sZW5ndGggPCAxMCkge1xuICAgICAgdGV4dCA9ICdQbGVhc2UgZW50ZXIgeW91ciBtb2JpbGUgcGhvbmUgbnVtYmVyIHRvIGNvbXBsZXRlIDEwIGRpZ2l0cy4nXG4gICAgfSBlbHNlIGlmIChqc29uRGF0YS5kZXZpY2VJZC5sZW5ndGggPCAwKSB7XG4gICAgICB0ZXh0ID0gJ05PIERldmljZSBJRC4nXG4gICAgfSBcbiAgICAvLyBlbHNlIGlmIChqc29uRGF0YS5pZENhcmQubGVuZ3RoIDwgNykge1xuICAgIC8vICAgdGV4dCA9ICdJRCBDYXJkIGluY29ycmVjdC4nXG4gICAgLy8gfVxuICAgIGVsc2UgaWYgKCF0ZXN0ZXIudGVzdChwYWdlRGF0YS51c2VyTmFtZSkpIHtcbiAgICAgICAgdGV4dCA9ICdQbGVhc2UgZW50ZXIgdGhlIGZpcnN0IGFuZCBsYXN0IG5hbWUgaW4gdGhlIGFscGhhYmV0LiBhLXosIEEtWiwgMC05LCBBLTknXG4gICAgfVxuICAgIGlmICh0ZXh0ICE9IG51bGwpIHtcbiAgICAgIHZhciB0b2FzdCA9IG5ldyB0b2FzdHkoeyB0ZXh0OiB0ZXh0IH0pO1xuICAgICAgdG9hc3Quc2hvdygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgZmV0Y2goQVBJX1VSTCtcIi9pbnNlcnRVc2VyXCIsIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShqc29uRGF0YSlcbiAgICB9KS50aGVuKChyKSA9PiByLmpzb24oKSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09IFwiU3VjY2Vzc1wiKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU3VjY2Vzc1wiKVxuICAgICAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwidXNlckRhdGFcIiwgSlNPTi5zdHJpbmdpZnkoanNvbkRhdGEpKVxuICAgICAgICAgICAgY29uc29sZS5sb2coanNvbkRhdGEpXG4gICAgICAgICAgICB2YXIgdG9hc3QgPSBuZXcgdG9hc3R5KHsgdGV4dDogXCJyZWdpc3RlciBzdWNjZXNzXCJ9KTtcbiAgICAgICAgICAgIHRvYXN0LnNob3coKVxuICAgICAgICAgICAgY29uc3QgbmF2aWdhdGlvbkVudHJ5ID0ge1xuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6IFwibWFwXCIsXG4gICAgICAgICAgICAgICAgY29udGV4dDogeyBtb2RlOiBcIm9ubGluZVwiIH0sXG4gICAgICAgICAgICAgICAgYW5pbWF0ZWQ6IGZhbHNlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gZnJhbWVNb2R1bGUudG9wbW9zdCgpLm5hdmlnYXRlKG5hdmlnYXRpb25FbnRyeSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihyZXNwb25zZS5zdGF0dXMgPT0gXCJGYWlsXCIpe1xuICAgICAgICAgICAgdmFyIHRvYXN0ID0gbmV3IHRvYXN0eSh7IHRleHQ6IFwicmVnaXN0ZXIgZmFpbFwifSk7XG4gICAgICAgICAgICB0b2FzdC5zaG93KClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHJlc3BvbnNlLnN0YXR1cyA9PSBcIkR1cGxpY2F0ZVVzZXJcIil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkR1cGxpY2F0ZVVzZXJcIilcbiAgICAgICAgfVxuICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCcqKipmZXRjaCBlcnJvcioqKicpXG4gICAgICAgIHZhciB0b2FzdCA9IG5ldyB0b2FzdHkoeyB0ZXh0OiBcIm5vdCBzZW5kIGRhdGEgdG8gc2VydmVyXCJ9KTtcbiAgICAgICAgdG9hc3Quc2hvdygpXG5cbiAgICB9KTtcblxufVxuZXhwb3J0cy5zaG93TVJlZ2lzID0gKCkgPT4ge1xuICAgIGlmKG1SZWdpcy5zdHlsZS52aXNpYmlsaXR5ID09ICdjb2xsYXBzZScpe1xuICAgICAgICBidG5DYW1lcmEuc3R5bGUudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSdcbiAgICAgICAgbVJlZ2lzLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSdcbiAgICAgICAgbVJlZ2lzQnRuLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSdcbiAgICB9IGVsc2Uge1xuICAgICAgICBidG5DYW1lcmEuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJ1xuICAgICAgICBidG5vZmZsaW5lTW9kZS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnXG4gICAgICAgIG1SZWdpcy5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJ1xuICAgICAgICBtUmVnaXNCdG4uc3R5bGUudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSdcbiAgICB9XG59XG5leHBvcnRzLm5vb3AgPSAoKSA9PiB7XG59XG5leHBvcnRzLm9mZmxpbmVNb2RlID0gKCkgPT4ge1xuICAgIHZhciBqc29uRGF0YSA9IHt9XG4gICAgdmFyIHRvYXN0ID0gbnVsbFxuICAgIGpzb25EYXRhLmlkQ2FyZCA9IHBhZ2VEYXRhLmlkQ2FyZFxuICAgIGpzb25EYXRhLnVzZXJOYW1lID0gcGFnZURhdGEudXNlck5hbWVcbiAgICBqc29uRGF0YS5kZXZpY2VJZCA9IHBhZ2VEYXRhLmRldmljZUlkXG4gICAganNvbkRhdGEucGhvbmVOdW1iZXIgPSBwYWdlRGF0YS5waG9uZU51bWJlclxuICAgIGpzb25EYXRhLmJsZUlkID0gcGFnZURhdGEuYmxlSWRcbiAgICBqc29uRGF0YS5waWMgPSAnJ1xuXG4gICAgaWYgKHBhZ2VEYXRhLnBob25lTnVtYmVyLmxlbmd0aCA8IDEwKSB7XG4gICAgICAgIHZhciB0b2FzdCA9IG5ldyB0b2FzdHkoeyB0ZXh0OidQbGVhc2UgZW50ZXIgeW91ciBtb2JpbGUgcGhvbmUgbnVtYmVyIHRvIGNvbXBsZXRlIDEwIGRpZ2l0cy4nfSk7XG4gICAgICAgIHRvYXN0LnNob3coKVxuICAgICAgICByZXR1cm4gICAgICAgICBcbiAgICB9IFxuICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhcInVzZXJEYXRhXCIsIEpTT04uc3RyaW5naWZ5KGpzb25EYXRhKSlcbiAgICBjb25zb2xlLmxvZyhqc29uRGF0YSlcbiAgICB2YXIgdG9hc3QgPSBuZXcgdG9hc3R5KHsgdGV4dDpcIm9mZmxpbmUgbW9kZSBzdWNjZXNzXCJ9KTtcbiAgICB0b2FzdC5zaG93KClcbiAgICBjb25zdCBuYXZpZ2F0aW9uRW50cnkgPSB7XG4gICAgICAgIG1vZHVsZU5hbWU6IFwibWFwXCIsXG4gICAgICAgIGNvbnRleHQ6IHsgbW9kZTogXCJvZmZsaW5lXCIgfSxcbiAgICAgICAgYW5pbWF0ZWQ6IGZhbHNlXG4gICAgfTtcbiAgICAvLyBmcmFtZU1vZHVsZS50b3Btb3N0KCkubmF2aWdhdGUobmF2aWdhdGlvbkVudHJ5KTtcbn1cbi8vIGV2ZW50IGFyZ3VtZW50czpcbi8vIHRhc2s6IFRhc2tcbi8vIGN1cnJlbnRCeXRlczogbnVtYmVyXG4vLyB0b3RhbEJ5dGVzOiBudW1iZXJcbmZ1bmN0aW9uIHByb2dyZXNzSGFuZGxlcihlKSB7XG4gICAgY29uc29sZS5sb2coXCJ1cGxvYWRlZCBcIiArIGUuY3VycmVudEJ5dGVzICsgXCIgLyBcIiArIGUudG90YWxCeXRlcyk7XG59XG4gXG4vLyBldmVudCBhcmd1bWVudHM6XG4vLyB0YXNrOiBUYXNrXG4vLyByZXNwb25zZUNvZGU6IG51bWJlclxuLy8gZXJyb3I6IGphdmEubGFuZy5FeGNlcHRpb24gKEFuZHJvaWQpIC8gTlNFcnJvciAoaU9TKVxuLy8gcmVzcG9uc2U6IG5ldC5nb3Rldi51cGxvYWRzZXJ2aWNlLlNlcnZlclJlc3BvbnNlIChBbmRyb2lkKSAvIE5TSFRUUFVSTFJlc3BvbnNlIChpT1MpXG5mdW5jdGlvbiBlcnJvckhhbmRsZXIoZSkge1xuICAgICBjb25zb2xlLmxvZyhcInJlY2VpdmVkIFwiICsgZS5yZXNwb25zZUNvZGUgKyBcIiBjb2RlLlwiKTtcbiAgICAgZGxnUGFnZU1hcC5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJ1xuICAgICB2YXIgdG9hc3QgPSBuZXcgdG9hc3R5KHsgdGV4dDpcInJlZ2lzZXIgZmFpbCBub3Qgc2VuZCBwaWN0dXJlIHRvIHNlcnZlclwifSk7XG4gICAgIHRvYXN0LnNob3coKVxuICAgICB2YXIgc2VydmVyUmVzcG9uc2UgPSBlLnJlc3BvbnNlO1xufVxuIFxuIFxuLy8gZXZlbnQgYXJndW1lbnRzOlxuLy8gdGFzazogVGFza1xuLy8gcmVzcG9uc2VDb2RlOiBudW1iZXJcbi8vIGRhdGE6IHN0cmluZ1xuZnVuY3Rpb24gcmVzcG9uZGVkSGFuZGxlcihlKSB7XG4gICAgXG4gICAgIGNvbnNvbGUubG9nKFwicmVjZWl2ZWQgXCIgKyBlLnJlc3BvbnNlQ29kZSArIFwiIGNvZGUuIFNlcnZlciBzZW50OiBcIiArIGUuZGF0YSk7XG4gICAgIGUuZGF0YSA9IEpTT04ucGFyc2UoZS5kYXRhKVxuICAgICBpZihlLmRhdGFbXCJzdGF0dXNcIl0gPT0gXCJTdWNjZXNzXCIpe1xuICAgICAgICBjb25zb2xlLmxvZyhcIlN1Y2Nlc3NcIilcbiAgICAgICAgbGV0IGpzb25EYXRhID0ge31cbiAgICAgICAganNvbkRhdGEuaWRDYXJkID0gcGFnZURhdGEuaWRDYXJkXG4gICAgICAgIGpzb25EYXRhLnVzZXJOYW1lID0gcGFnZURhdGEudXNlck5hbWVcbiAgICAgICAganNvbkRhdGEuZGV2aWNlSWQgPSBwYWdlRGF0YS5kZXZpY2VJZFxuICAgICAgICBqc29uRGF0YS5ibGVJZCA9IHBhZ2VEYXRhLmJsZUlkXG4gICAgICAgIGpzb25EYXRhLnBob25lTnVtYmVyID0gcGFnZURhdGEucGhvbmVOdW1iZXJcbiAgICAgICAganNvbkRhdGEucGljID0gcGFnZURhdGEucGhvbmVOdW1iZXIrJy5qcGcnXG4gICAgICAgIGRsZ1BhZ2VNYXAuc3R5bGUudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSdcbiAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwidXNlckRhdGFcIiwgSlNPTi5zdHJpbmdpZnkoanNvbkRhdGEpKVxuXG4gICAgICAgIHZhciB0b2FzdCA9IG5ldyB0b2FzdHkoeyB0ZXh0OlwicmVnaXN0ZXIgc3VjY2Vzc1wifSk7XG4gICAgICAgIHRvYXN0LnNob3coKVxuXG4gICAgICAgIGNvbnN0IG5hdmlnYXRpb25FbnRyeSA9IHtcbiAgICAgICAgICAgIG1vZHVsZU5hbWU6IFwibWFwXCIsXG4gICAgICAgICAgICBjb250ZXh0OiB7IG1vZGU6IFwib25saW5lXCIgfSxcbiAgICAgICAgICAgIGFuaW1hdGVkOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICAvLyBmcmFtZU1vZHVsZS50b3Btb3N0KCkubmF2aWdhdGUobmF2aWdhdGlvbkVudHJ5KTtcbn1cbiAgICBlbHNlIGlmKGUuZGF0YVtcInN0YXR1c1wiXT09IFwiRmFpbFwiKXtcbiAgICAgICAgZGxnUGFnZU1hcC5zdHlsZS52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJ1xuXG4gICAgICAgIHZhciB0b2FzdCA9IG5ldyB0b2FzdHkoeyB0ZXh0OlwicmVnaXN0ZXIgZmFpbFwifSk7XG4gICAgICAgIHRvYXN0LnNob3coKVxuICAgIH1cbiAgICBlbHNlIGlmKGUuZGF0YVtcInN0YXR1c1wiXT09IFwiRHVwbGljYXRlVXNlclwiKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJEdXBsaWNhdGVVc2VyXCIpXG4gICAgfVxuXG59XG4gXG4vLyBldmVudCBhcmd1bWVudHM6XG4vLyB0YXNrOiBUYXNrXG4vLyByZXNwb25zZUNvZGU6IG51bWJlclxuLy8gcmVzcG9uc2U6IG5ldC5nb3Rldi51cGxvYWRzZXJ2aWNlLlNlcnZlclJlc3BvbnNlIChBbmRyb2lkKSAvIE5TSFRUUFVSTFJlc3BvbnNlIChpT1MpXG5mdW5jdGlvbiBjb21wbGV0ZUhhbmRsZXIoZSkge1xuICAgICBjb25zb2xlLmxvZyhcInJlY2VpdmVkIFwiICsgZS5yZXNwb25zZUNvZGUgKyBcIiBjb2RlXCIpO1xuICAgIHZhciBzZXJ2ZXJSZXNwb25zZSA9IGUucmVzcG9uc2U7XG59XG4gXG4vLyBldmVudCBhcmd1bWVudHM6XG4vLyB0YXNrOiBUYXNrXG5mdW5jdGlvbiBjYW5jZWxsZWRIYW5kbGVyKGUpIHtcbiAgICAgY29uc29sZS5sb2coXCJ1cGxvYWQgY2FuY2VsbGVkXCIpO1xufVxuOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3JlZ2lzdGVyLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vcmVnaXN0ZXIuanNcIiB9KTtcbiAgICB9KTtcbn0gIiwiXG5tb2R1bGUuZXhwb3J0cyA9IFwiXFxuPFBhZ2UgbG9hZGVkPVxcXCJwYWdlTG9hZGVkXFxcIiBpZD1cXFwiUGFnZVxcXCIgZnJhbWU9XFxcInJlZ2lzdGVyXFxcIj5cXG4gIDwhLS0gPEFjdGlvbkJhciB0aXRsZT1cXFwiQU9UXFxcIiBjbGFzcz1cXFwiYWN0aW9uLWJhclxcXCI+PC9BY3Rpb25CYXI+IC0tPlxcbiAgPEFjdGlvbkJhciAgdGl0bGU9XFxcIm9mZi10cmFjayBhbGVydCBzeXN0ZW1cXFwiICBjbGFzcz1cXFwiaGVhZGVyIGFjdGlvbnMgXFxcIiA+PC9BY3Rpb25CYXI+XFxuICA8IS0tIFlvdXIgVUkgY29tcG9uZW50cyBnbyBoZXJlIC0tPlxcbiAgXFxuICA8QWJzb2x1dGVMYXlvdXQgIHdpZHRoPVxcXCIxMDAlXFxcIiAgaGVpZ2h0PVxcXCIxMDAlXFxcIiA+XFxuICAgIDxTdGFja0xheW91dCB3aWR0aD1cXFwiMTAwJVxcXCIgaGVpZ2h0PVxcXCIxMDAlXFxcIiBjbGFzcz1cXFwiZmFzIGJnICBcXFwiID5cXG5cXG4gICAgICA8U3RhY2tMYXlvdXQgaWQ9XFxcIm1SZWdpc1xcXCIgdmlzaWJpbGl0eT1cXFwiY29sbGFwc2VcXFwiIGNsYXNzPVxcXCIgbS10LTMwcFxcXCI+XFxuICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCJhdXRvLCAqLCBhdXRvXFxcIiByb3dzPVxcXCJhdXRvLDBcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJ0b3BcXFwiID5cXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVxcXCJ+L2ltYWdlcy9iYXNlbGluZV92cG5fa2V5X2JsYWNrXzI0ZHAucG5nXFxcIiBzdHJldGNoPVxcXCJub25lXFxcIiBjbGFzcz1cXFwiaWNvbklEICBcXFwiPjwvSW1hZ2U+XFxuICAgICAgICAgICAgPFRleHRGaWVsZCAgaGVpZ2h0PVxcXCIxMSVcXFwiIGhpbnQ9XFxcIklEIENhcmRcXFwiIGNsYXNzPVxcXCJzZWxlY3Rib3ggXFxcIiAgIHRleHQ9XFxcInt7IGlkQ2FyZCB9fVxcXCIgIGlkPVxcXCJpZENhcmRcXFwiLz5cXG4gICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcImF1dG8sICosIGF1dG9cXFwiIHJvd3M9XFxcImF1dG8sMFxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcInRvcFxcXCIgPlxcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XFxcIn4vaW1hZ2VzL2Jhc2VsaW5lX3BlcnNvbl9ibGFja18xOGRwLnBuZ1xcXCIgc3RyZXRjaD1cXFwibm9uZVxcXCIgY2xhc3M9XFxcImljb25JRFxcXCI+PC9JbWFnZT5cXG4gICAgICAgICAgICA8VGV4dEZpZWxkICBoZWlnaHQ9XFxcIjExJVxcXCIgaGludD1cXFwiVXNlck5hbWVcXFwiIGNsYXNzPVxcXCJzZWxlY3Rib3ggXFxcIiB0ZXh0PVxcXCJ7eyB1c2VyTmFtZSB9fVxcXCIgaWQ9XFxcInVzZXJOYW1lXFxcIi8+XFxuICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcImF1dG8sICosIGF1dG9cXFwiIHJvd3M9XFxcImF1dG8sMFxcXCIgIGNsYXNzPVxcXCJcXFwiPlxcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XFxcIn4vaW1hZ2VzL2Jhc2VsaW5lX2xvY2FsX3Bob25lX2JsYWNrXzE4ZHAucG5nXFxcIiBzdHJldGNoPVxcXCJub25lXFxcIiBjbGFzcz1cXFwiaWNvbklEXFxcIj48L0ltYWdlPlxcbiAgICAgICAgICAgIDxUZXh0RmllbGQgdGV4dD1cXFwiJiN4ZjAzMDtcXFwiIGFiSXRlbT1cXFwidGl0bGU6ICdUYWIgMScsIGljb25Tb3VyY2U6ICdyZXM6Ly9pY29uJ1xcXCIgIGhlaWdodD1cXFwiMTMlXFxcIiBoaW50PVxcXCJ0ZWxlcGhvbmUgbnVtYmVyXFxcIiBjbGFzcz1cXFwic2VsZWN0Ym94IFxcXCIga2V5Ym9hcmRUeXBlPVxcXCJudW1iZXJcXFwiIHRleHQ9XFxcInt7IHBob25lTnVtYmVyIH19XFxcIiBpZD1cXFwicGhvbmVOdW1iZXJcXFwiLz5cXG4gICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgIDxidXR0b24gdGV4dD1cXFwiU3VibWl0XFxcIiBjbGFzcz1cXFwibS10LTEwcCBidG4tc3VibWl0IGJ1dHRvbnNcXFwiIHRhcD1cXFwicmVnaXN0ZXJcXFwiIGlkPVxcXCJtUmVnaXNCdG5cXFwiID48L2J1dHRvbj5cXG4gICAgICAgIDxidXR0b24gdGV4dD1cXFwiQmFja1xcXCIgY2xhc3M9XFxcIm0tdC00cCBidXR0b25zMlxcXCIgdGFwPVxcXCJzaG93SW5wdXRcXFwiIHRhcD1cXFwic2hvd01SZWdpc1xcXCI+PC9idXR0b24+XFxuICAgICAgPC9TdGFja0xheW91dD5cXG5cXG4gICAgICA8U3RhY2tMYXlvdXQgaWQ9XFxcIm1SZWdpc1xcXCIgdmlzaWJpbGl0eT1cXFwiXFxcIiBjbGFzcz1cXFwiIG0tdC0zNnBcXFwiPlxcbiAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiYXV0bywgKiwgYXV0b1xcXCIgcm93cz1cXFwiYXV0bywwXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwidG9wXFxcIiAgY2xhc3M9XFxcIlxcXCIgPlxcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XFxcIn4vaW1hZ2VzL2Jhc2VsaW5lX2xvY2FsX3Bob25lX2JsYWNrXzE4ZHAucG5nXFxcIiBzdHJldGNoPVxcXCJub25lXFxcIiBjbGFzcz1cXFwiaWNvbklEXFxcIj48L0ltYWdlPlxcbiAgICAgICAgICAgIDxUZXh0RmllbGQgdGV4dD1cXFwiJiN4ZjAzMDtcXFwiIGFiSXRlbT1cXFwidGl0bGU6ICdUYWIgMScsIGljb25Tb3VyY2U6ICdyZXM6Ly9pY29uJ1xcXCIgIGhlaWdodD1cXFwiMTIlXFxcIiBoaW50PVxcXCJ0ZWxlcGhvbmUgbnVtYmVyXFxcIiBjbGFzcz1cXFwic2VsZWN0Ym94IFxcXCIga2V5Ym9hcmRUeXBlPVxcXCJudW1iZXJcXFwiIHRleHQ9XFxcInt7IHBob25lTnVtYmVyIH19XFxcIiBpZD1cXFwicGhvbmVOdW1iZXJcXFwiLz5cXG4gICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgPGJ1dHRvbiB0ZXh0PVxcXCJTdWJtaXRcXFwiIGNsYXNzPVxcXCJtLXQtMTBwIGJ0bi1zdWJtaXQgYnV0dG9uc1xcXCIgdGFwPVxcXCJyZWdpc3RlclxcXCIgaWQ9XFxcIm1SZWdpc0J0blxcXCIgdmlzaWJpbGl0eT1cXFwiY29sbGFwc2VcXFwiPjwvYnV0dG9uPlxcbiAgICAgICAgPGJ1dHRvbiB0ZXh0PVxcXCJNYW51bGUgUmVnaXN0ZXJcXFwiIGNsYXNzPVxcXCJtLXQtNXAgYnV0dG9uc1xcXCIgdGFwPVxcXCJzaG93SW5wdXRcXFwiIHRhcD1cXFwic2hvd01SZWdpc1xcXCI+PC9idXR0b24+XFxuICAgICAgICA8YnV0dG9uIHRleHQ9XFxcIiYjeGYwMzA7IFNjYW4gQ2FyZCBSZWdpc3RlclxcXCIgY2xhc3M9XFxcIm0tdC0xMCBidXR0b25zXFxcIiB0YXA9XFxcInRha2VDYW1lcmFcXFwiIGlkPVxcXCJidG5DYW1lcmFcXFwiPjwvYnV0dG9uPlxcbiAgICAgICAgPGJ1dHRvbiB0ZXh0PVxcXCJPZmZsaW5lIE1vZGVcXFwiIGNsYXNzPVxcXCJtLXQtMTAgYnV0dG9uc1xcXCIgdGFwPVxcXCJvZmZsaW5lTW9kZVxcXCIgaWQ9XFxcImJ0bm9mZmxpbmVNb2RlXFxcIj48L2J1dHRvbj5cXG4gICAgPC9TdGFja0xheW91dD5cXG5cXG4gICAgPCEtLSBkbGcgcGFnZU1hcC0tPlxcbiAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImxnLWRpYWxvZ1xcXCIgdGFwPVxcXCJoaWRlRGlhbG9nXFxcIiBpZD1cXFwidXNlci1wYWdlTWFwXFxcIj5cXG4gICAgICA8RmxleGJveExheW91dCBzdHJldGNoTGFzdENoaWxkPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwiZGlhbG9nXFxcIiB0YXA9XFxcIm5vb3BcXFwiPlxcbiAgICAgICAgICA8RmxleGJveExheW91dCBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCIgY2xhc3M9XFxcInRpdGxlXFxcIj5cXG4gICAgICAgICAgICAgIDxsYWJlbCB0ZXh0PVxcXCJMb2FkXFxcIiBjbGFzcz1cXFwidGV4dFxcXCIvPlxcbiAgICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XFxuICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHdpZHRoPVxcXCIxMDAlXFxcIiBjbGFzcz1cXFwibS10LTEwcFxcXCI+XFxuICAgICAgICAgICAgICAgIDxBY3Rpdml0eUluZGljYXRvciBidXN5PVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwibS10LTMwcFxcXCIvPjwhLS0gbG9uZGluZy0tPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIHRleHQ9XFxcIkxvZWRpbmcuLi5cXFwiIGNsYXNzPVxcXCJsb2FkaW5nXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgIDxGbGV4Ym94TGF5b3V0IGNsYXNzPVxcXCJhY3Rpb25zXFxcIj5cXG4gICAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxcbiAgICAgIDwvRmxleGJveExheW91dD5cXG4gICAgPC9TdGFja0xheW91dD4gXFxuICAgIDwhLS0gZGxnIHBhZ2VNYXAtLT5cXG5cXG4gIDwvQWJzb2x1dGVMYXlvdXQ+XFxuPC9QYWdlPlxcblwiOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3JlZ2lzdGVyLnhtbFwiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJtYXJrdXBcIiwgcGF0aDogXCIuL3JlZ2lzdGVyLnhtbFwiIH0pO1xuICAgIH0pO1xufSAiXSwic291cmNlUm9vdCI6IiJ9