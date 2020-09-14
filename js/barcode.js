var app = {
    initialize: function () {
        document.addEventListener(
                "deviceready",
                this.onDeviceReady.bind(this),
                false
                );
    },

    onDeviceReady: function () {
        this.receivedEvent("deviceready");
    },

    receivedEvent: function (id) {


        function Barcode() {


            var barcodeObject = {};


            barcodeObject.takePhoto = function () {
                var onCameraSuccess = function (imageData) {
                    var image = document.getElementById("image");
                    image.style.display = "block";
                    image.src = imageData;
                    };
                var onCameraFail = function () {
                    console.error("Camera Error Identified");
                    alert("Camera Failed. Please restart device and application");

                };

                navigator.camera.getPicture(onCameraSuccess, onCameraFail, {
                    quality: 50,
                    allowEdit: false,
                    correctOrientation: true,
                    saveToPhotoAlbum: false
                });

            }

            return barcodeObject;
        }

        app.barcode = new Barcode();
    }
};
app.initialize();

function searchBarcode() {
// Code to be implemented here to perform a reverse image search.

}
;

