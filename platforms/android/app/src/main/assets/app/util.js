var LoadingIndicator = require('nativescript-loading-indicator-new').LoadingIndicator
var loader = new LoadingIndicator()
exports.loading = () => {
    var options = {
      message: 'Loading...',
      progress: 0.65,
      android: {
        indeterminate: true,
        cancelable: false,
        max: 100,
        progressNumberFormat: '%1d/%2d',
        progressPercentFormat: 0.53,
        progressStyle: 1,
        secondaryProgress: 1,
      },
    }
    loader.show(options)
    cooldown(function(cb){
      console.log(cb)
      console.log("coolDown")
      if(cb){
        loader.hide()
      }
    })
  }
  exports.loadingHide = () => {
    loader.hide()
  }
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async function cooldown(cb){
    await sleep(2000);
    cb(true)
  }

