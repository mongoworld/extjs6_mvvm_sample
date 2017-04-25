Ext.define("Study.store.OrderList",{
	extend : 'Ext.data.Store',
	alias : 'store.orderList',
	storeId : 'orderList',
	autoLoad : false,
	fields : ['memberNm','orderRegDt','orderStatus','orderNm','orderCnt','orderTotalPrc','deliveryNm','deliveryAddr','deliveryZipcode','deliveryStatus'],
	//한페이지 몇개 호출?
	pageSize : 2,
	proxy : {
		type : 'ajax',
		actionMethods : {
			read : 'POST'
		},
		url : '/api/list/order',
		reader : {
			type : 'json',
			rootProperty : 'data',
			totalProperty : 'totalCount'
		}
	}
})