Ext.define('Study.view.product.ProductList', {
    extend: 'Ext.panel.Panel',
    xtype: 'productList',
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
        store : {
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
    }]
});
