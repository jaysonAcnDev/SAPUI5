sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","testproject/testproject/model/models","sap/ui/model/json/JSONModel"],function(e,t,n,i){"use strict";return e.extend("testproject.testproject.Component",{metadata:{interfaces:["sap.ui.core.IAsyncContentCreation"],manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);const n={recipient:{name:"World"}};const o=new i(n);this.setModel(o);this.getRouter().initialize();const s=new i(t);s.setDefaultBindingMode("OneWay");this.setModel(s,"device")},getContentDensityClass(){return t.support.touch?"sapUiSizeCozy":"sapUiSizeCompact"}})});