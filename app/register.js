var imageModule = require("tns-core-modules/ui/image");
var camera = require("nativescript-camera");
var OCRPlugin = require("nativescript-ocr");
const imageSourceModule = require("tns-core-modules/image-source");
var Observable = require("data/observable");
// import { CardIo } from 'nativescript-card-io';

const vision = require('@google-cloud/vision');
const API_URL = "https://vision.googleapis.com/v1/images:annotate"
var pageData = new Observable.fromObject({
    scanTxt: "TXT",
})

exports.pageLoaded = function(args) {
    page = args.object
    page.bindingContext = pageData
}
exports.takeCamera =  function() {
    camera.requestPermissions().then(
        function success() {
            camera.takePicture()   
            .then(function (imageAsset) {
                console.log("Result is an image asset instance");
                var image = new imageModule.Image();
                image.src = imageAsset;
                console.log(image.src._android)
                // const folder = fileSystemModule.knownFolders.currentApp();
                // const path = fileSystemModule.path.join(folder.path, image.src._android);
                const imageFromLocalFile = imageSourceModule.fromFile(image.src._android);
                var ocr = new OCRPlugin.OCR();
                quickstart(image.src._android)

                // Creates a client
                
                /**
                 * TODO(developer): Uncomment the following line before running the sample.
                 */
                // const fileName = 'Local image file, e.g. /path/to/image.png';
                
                // Performs text detection on the local file
                //quickstart()
                // ocr.retrieveText({
                // image: imageFromLocalFile
                // }).then(
                //     function (result) {
                //         console.log("Result: " + result.text)
                //         pageData.scanTxt =  result.text
                //     },
                //     function (error) {
                //         console.log("Error: " + error);
                //     }
                // );
            }).catch(function (err) {
                console.log("Error -> " + err.message);
            });
        }, 
        function failure() {
        // permission request rejected
        // ... tell the user ...
        }
    );
}

async function quickstart(imgSrc) {
    console.log("quickstart")
    // Imports the Google Cloud client library
    
  
    // Creates a client
    const client = new vision.ImageAnnotatorClient();
  
    // Performs label detection on the image file
    const [result] = await client.labelDetection(imgSrc);
    const labels = result.labelAnnotations;
    console.log('Labels:');
    labels.forEach(label => console.log(label.description));
  }
