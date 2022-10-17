sap.ui.define([
    "sap/m/Button"
], function(Button) {
    'use strict';
    return Button.extend("ux402.ex8.controls.HoverButton", {
        metadata: {
            properties: {
                "allowHover": {
                    type: "boolean",
                    defaultValue: false
                },
                "hoverText": {
                    type: "String"
                }
            },
            events: {
                "hover": {}
            }
        },
        onmouseover: function(evt) {
            if(this.getAllowHover){
                this.fireHover();
            }
        },

        renderer: {}

    });
});