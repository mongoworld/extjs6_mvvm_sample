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
        emptyText : '주문자명을 입력하세요'
    },{
    	xtype : 'button',
    	text : '검색'
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
    	dataIndex : 'orderRegDt'
    },{
    	text : '주문상태',
    	flex : 1,
    	dataIndex : 'orderStatus'
    },{
    	text : '제품명',
    	flex : 1,
    	dataIndex : 'orderNm'
    },{
    	text : '수량',
    	flex : 1,
    	dataIndex : 'orderCnt'
    },{
    	text : '금액',
    	flex : 1,
    	dataIndex : 'orderTotalPrc'
    },{
    	xtype : 'widgetcolumn',
    	flex : 1,
    	widget : {
    		xtype : 'button',
    		text : '배송정보조회',
    		handler : function(btn) {
    			var record = btn.getWidgetRecord();
    		}
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
