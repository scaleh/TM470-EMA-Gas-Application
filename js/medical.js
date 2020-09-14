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


            var svgMarkupHospital = '<svg width="24" height="24" ' +
                'xmlns="http://www.w3.org/2000/svg">' +
                '<rect stroke="white" fill="#FF0000" x="1" y="1" width="22" ' +
                'height="22" /><text x="12" y="18" font-size="12pt" ' +
                'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
                'fill="white">H</text></svg>'; //Here API Code example used.


            //Hospital Markers (Numbered 000001 - 020000)
            var hospital = new H.map.DomIcon(svgMarkupHospital),
                coords000001 = {
                    lat: 51.58021545410156,
                    lng: -2.99747896194458
                }, //Royal Gwent Hospital, Newport, NP20 2UB
                coords000002 = {
                    lat: 51.50700759887695,
                    lng: -3.19017648696894
                }, // University of Wales Hospital, Cardiff, CF14 4XW
                coords000003 = {
                    lat: 51.64627484267166,
                    lng: -2.9963106923938954
                }, // Llanfrechfa Grange Hospital, Cwmbran, NP44 8YN.
                marker000001 = new H.map.DomMarker(coords000001, {
                    icon: hospital
                });
                marker000002 = new H.map.DomMarker(coords000002, {
                    icon: hospital
                });
                marker000003 = new H.map.DomMarker(coords000003, {
                    icon: hospital
                });
            map.addObject(marker000001);
            map.addObject(marker000002);
            map.addObject(marker000003);

            var svgMarkupFirstAid = '<svg width="24" height="24" ' +
                'xmlns="http://www.w3.org/2000/svg">' +
                '<rect stroke="white" fill="#008954" x="1" y="1" width="22" ' +
                'height="22" /><text x="12" y="18" font-size="11pt" ' +
                'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
                'fill="white">+</text></svg>'; //Here API Code example used.

            //First Aid Markers (Numbered 20001 - 100000)
            var firstAid = new H.map.DomIcon(svgMarkupFirstAid),
                coords020001 = {
                    lat: 51.597634340769815,
                    lng: -2.981227020058337
                }, //Richmond Surgery, Newport, NP19 7FY
                coords020002 = {
                    lat: 51.57967429991777,
                    lng: -2.830412550138166
                }, // Dorset House Surgery, Magor, NP26 3EG
                coords020003 = {
                    lat: 51.524631,
                    lng: -3.091403
                }, // Willowbrook Surgery, Cardiff, CF3 0SH.
                coords020004 = {
                    lat: 51.640323,
                    lng: -2.658974
                }, // Beachley Road Surgery, Chepstow, NP16 7AA.
                coords020005 = {
                    lat: 51.710452,
                    lng: -3.145284
                }, // Aberbeeg Medical Centre, Abertillery, NP13 2AB.
                marker020001 = new H.map.DomMarker(coords020001, {
                    icon: firstAid
                });
                marker020002 = new H.map.DomMarker(coords020002, {
                    icon: firstAid
                });
                marker020003 = new H.map.DomMarker(coords020003, {
                    icon: firstAid
                        });
                marker020004 = new H.map.DomMarker(coords020004, {
                    icon: firstAid
                        });
                marker020005 = new H.map.DomMarker(coords020005, {
                    icon: firstAid
                        });
            map.addObject(marker020001);
            map.addObject(marker020002);
            map.addObject(marker020003);
            map.addObject(marker020004);
            map.addObject(marker020005);





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
