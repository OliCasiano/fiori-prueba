sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("capgemini.invoice.controller.MainView", {
        onInit: function () {
            const oJSONModel = new sap.ui.model.json.oJSONModel();
            const oView = this.getView();
            oJSONModel.loadData("./model/SelectionScreenMenu.json");
            oView.setModel(oJSONModel, "selectionScreen");
        }
    });
});
