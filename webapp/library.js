/**
 * Initialization Code and shared classes of library ux402.ex8
 */
sap.ui.define(["jquery.sap.global",
		"sap/ui/core/library"
	], // library dependency
	function(jQuery) {

		"use strict";

		/**
		 * Assurance and Compliance Library
		 *
		 * @namespace
		 * @name ux402.ex8
		 * @author SAP SE
		 * @version ${version}
		 * @public
		 */

		// delegate further initialization of this library to the Core
		sap.ui.getCore().initLibrary({
			name: "ux402.ex8.ux402library",
			version: "${version}",
			dependencies: ["sap.ui.core"],
			types: [],
			interfaces: [],
			controls: ["ux402.ex8.ux402library.HoverButton"],
			elements: [],
            noLibraryCSS: true
		});

		return ux402.ex8;

	}, /* bExport= */ false);