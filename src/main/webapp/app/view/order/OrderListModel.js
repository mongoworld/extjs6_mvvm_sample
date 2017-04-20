Ext.define('Study.view.order.OrderListModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.orderList',
    stores : {
    	orderList : {
    		fields : ['orderNm','orderDt','orderStatus','productNm','orderAmt','orderPrice'],
        	data : [{
        		orderNm : '홍길동',
        		orderDt : new Date(),
        		productNm : '지우개',
        		orderStatus : 'Y',
        		orderAmt : 100,
        		orderPrice : 20000
        	},{
        		orderNm : '김철수',
        		orderDt : new Date(),
        		productNm : '샤프',
        		orderStatus : 'Y',
        		orderAmt : 20,
        		orderPrice : 1000
        	},{
        		orderNm : '이진수',
        		orderDt : new Date(),
        		productNm : '연필',
        		orderStatus : 'N',
        		orderAmt : 50,
        		orderPrice : 10000
        	}]
        }
    }
});
