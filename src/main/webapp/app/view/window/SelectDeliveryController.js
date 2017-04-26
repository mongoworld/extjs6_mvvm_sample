Ext.define('Study.view.window.SelectDeliveryController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.selectDelivery',
    onLoadData : function(obj) {
    	var me = this;
    	var view = me.getView();
    	var viewModel = me.getViewModel();
    	
    	viewModel.set("deliveryNm",view['deliveryNm']);
    	viewModel.set("deliveryAddr","("+view['deliveryZipcode']+") " + view['deliveryAddr']);
    	
    	var deliveryStatusNm = "";
    	if(view['deliveryStatus'] == "I") {
    		deliveryStatusNm = "배송중";
    	}
    	else {
    		deliveryStatusNm = "배송완료";
    	}
    	viewModel.set("deliveryStatusNm",deliveryStatusNm);
    }
});
