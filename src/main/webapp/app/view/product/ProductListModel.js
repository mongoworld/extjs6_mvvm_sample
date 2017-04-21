Ext.define('Study.view.product.ProductListModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.productList',
    stores : {
    	productList : {
    		fields : ['itemtNm','itemPrc','itemAmt','itemRegDt'],
        	data : [{
        		itemtNm : '지우개',
        		itemPrc : 500,
        		itemAmt : 100,
        		itemRegDt : new Date()
        	},{
        		itemtNm : '연필',
        		itemPrc : 300,
        		itemAmt : 300,
        		itemRegDt : new Date()
        	},{
        		itemtNm : '샤프',
        		itemPrc : 1000,
        		itemAmt : 200,
        		itemRegDt : new Date()
        	},{
        		itemtNm : '계산기',
        		itemPrc : 10000,
        		itemAmt : 10,
        		itemRegDt : new Date()
        	},{
        		itemtNm : 'A4용지',
        		itemPrc : 100,
        		itemAmt : 1200,
        		itemRegDt : new Date()
        	},{
        		itemtNm : 'B4용지',
        		itemPrc : 150,
        		itemAmt : 2000,
        		itemRegDt : new Date()
        	}]
        }
    }
});
