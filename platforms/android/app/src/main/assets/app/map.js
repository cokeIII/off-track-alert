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
    var bluetooth = require("nativescript-bluetooth");
 
    bluetooth.isBluetoothEnabled().then(
    function(enabled) {
        console.log("Enabled? " + enabled);
    }
    );
    bluetooth.enable().then(
        function(enabled) {
          // use Bluetooth features if enabled is true 
          bluetooth.startScanning({
            serviceUUIDs: [],
            seconds: 10,
            onDiscovered: function (peripheral) {
                console.log("Periperhal found with UUID: " + peripheral.UUID);
                console.log(peripheral)
            },
            skipPermissionCheck: false,
          }).then(function() {
            console.log("scanning complete");
          }, function (err) {
            console.log("error while scanning: " + err);
          });
    
        }
      );
    // var webView = page.getViewById("webViewID")
    // if(webView.android) { // in IOS android will be undefined
    // webView.android.getSettings().setBuiltInZoomControls(false);
    // }
};
