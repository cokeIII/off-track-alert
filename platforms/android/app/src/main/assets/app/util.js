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
  }
  exports.loadingHide = () => {
    loader.hide()
  }
  