Ext.define('Study.view.product.ProductListModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.productList',
    data : {
    	itemNm : '',
    	itemPrc : 0,
    	itemAmt : 0,
    	searchValue : ''
    },
    stores : {
    	productList : {
    		type : 'productList'
        }
    }
});
