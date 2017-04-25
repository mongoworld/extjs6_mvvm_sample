Ext.define('Study.view.order.OrderListModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.orderList',
    stores : {
    	orderList : {
    		fields : ['memberNm','orderRegDt','orderStatus','orderNm','orderCnt','orderTotalPrc'],
        	data : [{
        		memberNm : '홍길동',
        		orderRegDt : new Date(),
        		orderNm : '지우개',
        		orderStatus : 'Y',
        		orderCnt : 100,
        		orderTotalPrc : 20000
        	},{
        		memberNm : '김철수',
        		orderRegDt : new Date(),
        		orderNm : '샤프',
        		orderStatus : 'Y',
        		orderCnt : 20,
        		orderTotalPrc : 1000
        	},{
        		memberNm : '이진수',
        		orderRegDt : new Date(),
        		orderNm : '연필',
        		orderStatus : 'N',
        		orderCnt : 50,
        		orderTotalPrc : 10000
        	}]
        }
    }
});
