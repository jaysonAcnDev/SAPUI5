/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "testproject/testproject/model/models",
        "sap/ui/model/json/JSONModel",
    ],
    function (UIComponent, Device, models, JSONModel) {
        "use strict";

        return UIComponent.extend("testproject.testproject.Component", {
            metadata : {
                interfaces: ["sap.ui.core.IAsyncContentCreation"],
                manifest: "json"
             },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // set data model
                const oData = {
                    recipient : {
                    name : "World"
                    }
                };
                const oModel = new JSONModel(oData);
                this.setModel(oModel);


                // enable routing
                this.getRouter().initialize();

                // set device model
                const oDeviceModel = new JSONModel(Device);
                oDeviceModel.setDefaultBindingMode("OneWay");
                this.setModel(oDeviceModel, "device");
            },
            getContentDensityClass() {
                return Device.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact";
            }
        });
    }
);