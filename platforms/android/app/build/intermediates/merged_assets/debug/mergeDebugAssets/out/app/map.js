var orientation = require('nativescript-orientation');
var Observable = require("data/observable");

var pageData = new Observable.fromObject({
    roadName: "testName"
})
exports.pageLoaded = function(args) {
    page = args.object
    page.bindingContext = pageData
    console.log(pageData)
    orientation.setOrientation("portrait")
    // var webView = page.getViewById("webViewID")
    // if(webView.android) { // in IOS android will be undefined
    // webView.android.getSettings().setBuiltInZoomControls(false);
    // }
};
