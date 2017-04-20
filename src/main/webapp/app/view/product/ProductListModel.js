Ext.define('Study.view.product.ProductListModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.productList',
    stores : {
    	productList : {
    		fields : ['productNm','price','amount','rgstrDt'],
        	data : [{
        		productNm : '지우개',
        		price : 500,
        		amount : 100,
        		rgstrDt : new Date()
        	},{
        		productNm : '연필',
        		price : 300,
        		amount : 300,
        		rgstrDt : new Date()
        	},{
        		productNm : '샤프',
        		price : 1000,
        		amount : 200,
        		rgstrDt : new Date()
        	},{
        		productNm : '계산기',
        		price : 10000,
        		amount : 10,
        		rgstrDt : new Date()
        	},{
        		productNm : 'A4용지',
        		price : 100,
        		amount : 1200,
        		rgstrDt : new Date()
        	},{
        		productNm : 'B4용지',
        		price : 150,
        		amount : 2000,
        		rgstrDt : new Date()
        	}]
        }
    }
});
