/**
 * TODO -  이 클래스는 상품목록 패널컴포넌트입니다.
 * 					다른 컴포넌트(memberList,orderList)와 다르게 툴바 하나가 더 존재하여 
 * 					일반 패널 컴포넌트로 define 하였습니다.
 */
Ext.define('Study.view.product.ProductList', {
    extend: 'Ext.form.Panel',
    xtype: 'productList',
    controller: 'productList',
    viewModel: 'productList',
    title : '상품목록 조회',
    items : [{
    	xtype : 'toolbar',
    	items : [{
    		xtype : 'textfield',
    		fieldLabel : '상품명',
    		name : 'itemNm'
    	},{
    		xtype : 'numberfield',
    		fieldLabel : '가격',
    		name : 'itemPrc'
    	},{
    		xtype : 'numberfield',
    		fieldLabel : '재고량',
    		name : 'itemAmt'
    	},{
    		xtype : 'button',
    		text : '저장'
    	},{
    		xtype : 'button',
    		text : '초기화'
    	}]
    },{
    	xtype : 'grid',
    	columnLines : true,
        tbar : [{
        	xtype : 'textfield',
        	flex : 1,
            emptyText : '찾으실 상품명을 입력하세요'
        },{
        	xtype : 'button',
        	text : '검색'
        }],
        columns : [{
        	xtype : 'rownumberer'
        },{
        	text : '상품명',
        	style : 'text-align:center',
        	flex : 1,
        	dataIndex : 'itemtNm'
        },{
        	text : '가격',
        	style : 'text-align:center',
        	flex : 1,
        	dataIndex : 'itemPrc'
        },{
        	text : '재고량',
        	style : 'text-align:center',
        	flex : 1,
        	dataIndex : 'itemAmt'
        },{
        	text : '등록일',
        	style : 'text-align:center',
        	flex : 1,
        	dataIndex : 'itemRegDt'
        },{
        	xtype : 'widgetcolumn',
        	text : '삭제',
        	align : 'center',
        	flex : 1,
        	widget : {
        		xtype : 'button',
        		text : '상품삭제',
        		handler : function(btn) {
        			var record = btn.getWidgetRecord();
        			console.log("S",record.getData())
        		}
        	}
        }],
        bind : {
        	store : '{productList}'
        }
    }]
});
