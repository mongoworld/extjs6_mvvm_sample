/**
 * TODO -  이 클래스는 주문목록 그리드컴포넌트입니다.
 */
Ext.define('Study.view.order.OrderList', {
    extend: 'Ext.grid.Panel',
    listeners : {
    	boxready : 'onLoadData'
    },
    xtype: 'orderList',
    controller: 'orderList',
    viewModel: 'orderList',
    title : '주문목록 조회',
    columnLines : true,
    tbar : [{
    	xtype : 'textfield',
    	flex : 1,
        emptyText : '주문자명을 입력하세요',
        name : 'searchValue'
    },{
    	xtype : 'button',
    	text : '검색',
    	handler : 'searchBtn'
    }],
    columns : [{
    	xtype : 'rownumberer'
    },{
    	text : '주문자명',
    	flex : 1,
    	dataIndex : 'memberNm'
    },{
    	text : '주문일',
    	flex : 1,
    	dataIndex : 'orderRegDt',
    	renderer : function(value){
    		if(value != undefined && value != null && value != "") {
    			return Ext.util.Format.date(new Date(value), "Y-m-d H:i:s");
    		}
    		return value;
    	}
    },{
    	text : '주문상태',
    	flex : 1,
    	dataIndex : 'orderStatus',
    	renderer : function(value){
    		if(value != undefined && value!= null && value != "") {
    			if(value == "I") {
    				value = "주문완료";
    			}
    			else {
    				value = "주문취소";
    			}
    		}
    		return value;
    	}
    },{
    	text : '제품명',
    	flex : 1,
    	dataIndex : 'orderNm'
    },{
    	text : '수량',
    	flex : 1,
    	dataIndex : 'orderCnt',
    	renderer : function(value){
    		return Ext.util.Format.number(value,"0,000");
    	}
    },{
    	text : '금액',
    	flex : 1,
    	dataIndex : 'orderTotalPrc',
    	renderer : function(value){
    		return Ext.util.Format.number(value,"0,000");
    	}
    },{
    	xtype : 'widgetcolumn',
    	flex : 1,
    	widget : {
    		xtype : 'button',
    		text : '배송정보조회',
    		handler : 'openDeliveryInfo'
    		/*handler : function(btn) {
    			var record = btn.getWidgetRecord();
    		}*/
    	}
    }],
    bind : {
    	store : '{orderList}'
    },
    bbar : {
    	xtype : 'pagingtoolbar',
    	plugins : 'ux-progressbarpager',
    	displayInfo : true
    }
});
