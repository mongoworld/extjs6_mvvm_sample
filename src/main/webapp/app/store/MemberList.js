Ext.define("Study.store.MemberList",{
	extend : 'Ext.data.Store',
	alias : 'store.memberList',
	storeId : 'memberList',
	autoLoad : false,
	fields : ['memberSeq','memberId','memberNm','memberAddr','memberRegDt'],
	//한페이지 몇개 호출?
	pageSize : 5,
	proxy : {
		type : 'ajax',
		actionMethods : {
			read : 'POST'
		},
		url : '/api/list/member',
		reader : {
			type : 'json',
			rootProperty : 'data',
			totalProperty : 'totalCount'
		}
	}
})