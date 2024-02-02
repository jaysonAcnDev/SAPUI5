sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    // "sap/ui/model/resource/RecourceModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("testproject.testproject.controller.Homepage", {
            onShowHello(){
                const oBundle = this.getView().getModel("i18n").getResourceBundle();
                const sRecipient = this.getView().getModel().getProperty("/recipient/name");
                const sMsg = oBundle.getText("helloMsg", [sRecipient]);

                MessageToast.show(sMsg);
            },
            onOpenDialog() {
                // create dialog lazily
                this.pDialog ??= this.loadFragment({
                    name: "testproject.testproject.view.HelloDialog"
                });
            
                this.pDialog.then((oDialog) => oDialog.open());
            },
            onCloseDialog() {
                // note: We don't need to chain to the pDialog promise, since this event handler
                // is only called from within the loaded dialog itself.
                this.byId("helloDialog").close();
            }
        });
    });
