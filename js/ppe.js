//TM470 – The computing and IT project EMA Jonathan Paul Hill B283401X
//  Date: July - September 2020
// Green Assessments & Screening (GAS) Application. A Health & Safety Application for persons who work with hazardous material and chemicals.

var platform = {
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

        var map;
        var markers = [];

        function clearMarkersFromMap() {
            $.each(markers, function (index, value) {
                if (value != null)
                    map.removeObject(value);
            });
            markers = [];
        }

        function intialiseMap() {
            // initialize the platform object:
            var platform = new H.service.Platform({
                app_id: "rqErxnOz2jm7J1JDMirN", // HERE maps app id
                app_code: "2UC_aO7bvzdEyMMOM5zbPUH8nOJ4g5dmyYJXDzYwsRA"
            });
            // obtain the default map types from the platform object
            var defaultLayers = platform.createDefaultLayers();
            // instantiate (and display) a map object:
            var div = document.getElementById("theMap");

            map = new H.Map(
                div,
                defaultLayers.normal.map
            );


            map.setZoom(10);


            var ui = H.ui.UI.createDefault(map, defaultLayers);
            var zoom = ui.getControl("zoom");
            var scalebar = ui.getControl("scalebar");
            zoom.setAlignment("bottom-right");
            scalebar.setAlignment("top-left");


            var onSuccess = function (position) {
                //For testing purposes, the location has be set to Newport South Wales. https://www.gps-coordinates.net/
                map.setCenter({
                    lat: 51.59093475341797,
                    lng: -2.9924983978271484
                });
            }


            var svgMarkupPPE = '<svg width="24" height="24" ' +
                'xmlns="http://www.w3.org/2000/svg">' +
                '<rect stroke="white" fill="#cc3300" x="1" y="1" width="22" ' +
                'height="22" /><text x="12" y="18" font-size="9pt" ' +
                'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
                'fill="white">PPE</text></svg>'; //Here API Code example used.


            //PPE Markers (
            var ppe = new H.map.DomIcon(svgMarkupPPE),
                coords000001 = {
                    lat: 51.57290997793718,
                    lng: -2.952926603880419
                }, //Fictitious PPE Supplier #1. Random Post Code in Newport
                coords000002 = {
                    lat: 51.533604041107296,
                    lng: -3.142168046677294
                }, //Fictitious PPE Supplier #2. Random Post Code in Cardiff
                coords000003 = {
                    lat: 51.67998013891479,
                    lng: -3.134640360473955
                }, ///Fictitious PPE Supplier #3. Random Post Code in Newbridge
                coords000004 = {
                    lat: 51.633659080634025,
                    lng: -2.7064834502588275
                }, ///Fictitious PPE Supplier #4. Random Post Code in Chepstow
                coords000005 = {
                    lat: 51.706484105125355,
                    lng: -3.0450529660450543
                }, ///Fictitious PPE Supplier #1. Random Post Code in Pontypool
                marker000001 = new H.map.DomMarker(coords000001, {
                    icon: ppe
                });
                marker000002 = new H.map.DomMarker(coords000002, {
                    icon: ppe
                });
                marker000003 = new H.map.DomMarker(coords000003, {
                    icon: ppe
                });
                marker000004 = new H.map.DomMarker(coords000004, {
                    icon: ppe
                });
                marker000005 = new H.map.DomMarker(coords000005, {
                    icon: ppe
                });
            map.addObject(marker000001);
            map.addObject(marker000002);
            map.addObject(marker000003);
            map.addObject(marker000004);
            map.addObject(marker000005);



            var onError = function (error) {
                alert(
                    "code: " + error.code + "\n" + "message: " + error.message + "\n"
                );
            };

            navigator.geolocation.getCurrentPosition(onSuccess, onError, {
                enableHighAccuracy: true
            });
            var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
        }

        intialiseMap();

    }
};
platform.initialize();
