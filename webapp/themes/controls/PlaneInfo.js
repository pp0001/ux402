sap.ui.define([
    "sap/ui/core/Control",
    "ux402/ex8/controls/PlaneInfoRenderer"
], function(Control, PlaneInfoRenderer) {
    'use strict';
    
    Control.extend("ux402.ex8.controls.PlaneInfo", {
        metadata: {
            properties: {
                "seatsMax": {
                    type: "String"
                },
                "seatsOcc": {
                    type: "String"
                },
                "planeType": {
                    type: "String"
                }
            }
        },
        renderer: PlaneInfoRenderer
    });
});