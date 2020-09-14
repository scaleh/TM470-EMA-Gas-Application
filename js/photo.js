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

        function Photo() {


            var photoObject = {};


            photoObject.takePhoto = function () {
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
                    quality: 75,
                    allowEdit: false,
                    correctOrientation: true,
                    saveToPhotoAlbum: true
                });


            }

            return photoObject;
        }

        app.photo = new Photo();
    }
};
app.initialize();

function searchPhoto() {
// Code to be implemented here to perform a reverse image search.

}
;




