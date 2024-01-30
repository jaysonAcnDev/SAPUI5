sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
    // "sap/ui/model/resource/RecourceModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, JSONModel, ResourceModel) {
        "use strict";

        return Controller.extend("testproject.testproject.controller.Homepage", {
            onInit() {
                // set data model on view
                const oData = {
                   recipient : {
                      name : "World"
                   }
                };
                const oModel = new JSONModel(oData);
                this.getView().setModel(oModel);

                // set i18n model on view
                const i18nModel = new ResourceModel({
                    bundleName: "testproject.testproject.i18n.i18n"
                });
                this.getView().setModel(i18nModel, "i18n");
             },
            onPressBtn1(){
                const oBundle = this.getView().getModel("i18n").getResourceBundle();
                const sRecipient = this.getView().getModel().getProperty("/recipient/name");
                const sMsg = oBundle.getText("helloMsg", [sRecipient]);

                // MessageToast.show(sMsg);
                // // Access the input field by its ID
                // const oInput = this.byId("myInput");

                // // Get the value of the input field
                // const inputValue = oInput.getValue();

                // // Alert the input value
                // console.log(inputValue);

                if([sRecipient] == ""){
                    swal("Warning", "No user input", "warning");
                }else{
                    swal(sMsg, "This is the word that you typed.", "info");
                }
            }
            // onPressBtn1 : function(){
            //         MessageToast.show("Pressed");
            //     }
        });
    });
