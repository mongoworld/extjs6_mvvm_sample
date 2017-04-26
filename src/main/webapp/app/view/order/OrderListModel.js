Ext.define('Study.view.order.OrderListModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.orderList',
    stores : {
    	orderList : {
    		type : 'orderList'
        }
    }
});
