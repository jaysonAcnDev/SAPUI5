sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/routing/History","sap/m/MessageToast","sap/ui/model/json/JSONModel"],(e,t,o,n)=>{"use strict";return e.extend("testproject.testproject.controller.Detail",{onInit(){const e=new n({currency:"EUR"});this.getView().setModel(e,"view");const t=this.getOwnerComponent().getRouter();t.getRoute("detail").attachPatternMatched(this.onObjectMatched,this)},onObjectMatched(e){this.byId("rating").reset();this.getView().bindElement({path:"/"+window.decodeURIComponent(e.getParameter("arguments").invoicePath),model:"invoice"})},onNavBack(){const e=t.getInstance();const o=e.getPreviousHash();if(o!==undefined){window.history.go(-1)}else{const e=this.getOwnerComponent().getRouter();e.navTo("RouteHomepage",{},true)}},onPress(e){console.log("test");const t=e.getSource();const o=this.getOwnerComponent().getRouter();o.navTo("otherdetail",{invoicePath:window.encodeURIComponent(t.getBindingContext("invoice").getPath().substr(1))})},onRatingChange(e){const t=e.getParameter("value");const n=this.getView().getModel("i18n").getResourceBundle();o.show(n.getText("ratingConfirmation",[t]))}})});