/**
 * TODO -  이 클래스는 상품목록 패널컴포넌트입니다.
 * 					다른 컴포넌트(memberList,orderList)와 다르게 툴바 하나가 더 존재하여 
 * 					일반 패널 컴포넌트로 define 하였습니다.
 */
Ext.define('Study.view.product.ProductList', {
    extend: 'Ext.panel.Panel',
    xtype: 'productList',
    controller: 'productList',
    viewModel: 'productList',
    title : '상품목록 조회',
    items : [{
    	xtype : 'toolbar',
    	items : [{
    		xtype : 'textfield',
    		fieldLabel : '상품명'
    	},{
    		xtype : 'numberfield',
    		fieldLabel : '가격'
    	},{
    		xtype : 'numberfield',
    		fieldLabel : '상품명'
    	},{
    		xtype : 'button',
    		text : '등록'
    	}]
    },{
    	xtype : 'grid',
    	columnLines : true,
        tbar : [{
        	xtype : 'textfield',
            emptyText : '검색어를 입력하세요'
        },{
        	xtype : 'button',
        	text : '검색'
        }],
        columns : [{
        	xtype : 'rownumberer'
        },{
        	text : '상품명',
        	flex : 1,
        	dataIndex : 'productNm'
        },{
        	text : '가격',
        	flex : 1,
        	dataIndex : 'price'
        },{
        	text : '재고량',
        	flex : 1,
        	dataIndex : 'amount'
        },{
        	text : '등록일',
        	flex : 1,
        	dataIndex : 'rgstrDt'
        }],
        bind : {
        	store : '{productList}'
        }
    }]
});
