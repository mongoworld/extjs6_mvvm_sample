Ext.define('Study.view.order.OrderListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.orderList',
    /**
     * 최초데이터로드
     */
    onLoadData : function(obj) {
    	var me = this;
    	var view = me.getView();
    	var viewModel = me.getViewModel();
    	var store = viewModel.getStore(view['xtype']);
    	store.load();
    },
    /**
     * 검색버튼 클릭
     */
    searchBtn : function(btn) {
    	var me = this;
    	var view = me.getView();
    	var viewModel = me.getViewModel();
    	var store = viewModel.getStore(view['xtype']);
    	var searchValue = view.down("[name=searchValue]").getValue();
    	store.getProxy().setExtraParam("searchValue",searchValue);
    	store.load();
    },
    /**
     * 배송조회 버튼 클릭
     */
    openDeliveryInfo : function(btn) {
    	var record = btn.getWidgetRecord();
    	Ext.widget("selectDelivery",{
    		deliveryNm : record.get("deliveryNm"),
    		deliveryAddr : record.get("deliveryAddr"),
    		deliveryZipcode : record.get("deliveryZipcode"),
    		deliveryStatus : record.get("deliveryStatus")
    	});
    }
});
