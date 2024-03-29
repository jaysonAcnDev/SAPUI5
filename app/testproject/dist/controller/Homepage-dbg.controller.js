sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";
        return Controller.extend("testproject.testproject.controller.Homepage", {
            onInit() {
                this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
            }
        });
    });
