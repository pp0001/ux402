sap.ui.define([
    "sap/ui/core/Renderer"
], function(Renderer) {
    'use strict';
    
    var PlaneInfoRenderer = Renderer.extend("ux402.ex8.controls/PlaneInfoRenderer");

    PlaneInfoRenderer.render = function(oRem, oControl) {
        oRem.write("<div");
        oRem.writeControlData(oControl);
        oRem.write(">");
        oRem.write("<table align='center'>");

        oRem.write("<tr>");
        oRem.write("<td>");
        oRem.writeIcon("sap-icon://flight");
        oRem.write(" " + oControl.getPlaneType() + "</td>");
        oRem.write("</tr>");

        oRem.write("<tr>");
        oRem.write("<td>");
        oRem.writeIcon("sap-icon://person-placeholder");
        oRem.write(" " + oControl.getSeatsMax() + "</td>");
        oRem.write("</tr>");

        oRem.write("</table>");
        oRem.write("</div>")
    };

    return PlaneInfoRenderer;
});