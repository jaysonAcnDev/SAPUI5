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

        return Controller.extend("testproject.testproject.controller.Exercise1Panel", {
            onShow(){
                const oBundle = this.getView().getModel("i18n").getResourceBundle();
                const sRecipientName = this.getView().getModel().getProperty("/exerciseData/name");
                const sRecipientCountry = this.getView().getModel().getProperty("/exerciseData/country");
                const sMsg = oBundle.getText("Hello I am "+ [sRecipientName] + " from " + [sRecipientCountry]);

                MessageToast.show(sMsg);
            },
            onOpenDialog() {
                // create dialog lazily
                this.pDialog ??= this.loadFragment({
                    name: "testproject.testproject.view.Exercise1Dialog"
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
