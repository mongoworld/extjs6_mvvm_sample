Ext.define('Study.view.member.MemberList', {
    extend: 'Ext.grid.Panel',
    xtype: 'memberList',
    title : '회원목록 조회',
    plugins : 'cellediting',
    columnLines : true,
    tbar : [{
    	xtype : 'combo',
    	editable : false,
    	displayField : 'key',
		valueField : 'value',
		queryMode : 'local',
		value : 'memberId',
    	store : {
    		fields : ['key','value'],
    		data : [{
    			key : '아이디',
    			value : 'memberId'
    		},{
    			key : '이름',
    			value : 'memberNm'
    		}]
    	}
    },{
    	xtype : 'textfield',
        emptyText : '검색어를 입력하세요'
    },{
    	xtype : 'button',
    	text : '검색'
    }],
    columns : [{
    	xtype : 'rownumberer'
    },{
    	text : '아이디',
    	flex : 1,
    	dataIndex : 'memberId'
    },{
    	text : '이름',
    	flex : 1,
    	dataIndex : 'memberNm',
    	editor : {
    		xtype : 'textfield'
    	}
    },{
    	text : '주소',
    	flex : 1,
    	dataIndex : 'memberAddr',
    	editor : {
    		xtype : 'textfield'
    	}
    },{
    	text : '연락처',
    	flex : 1,
    	dataIndex : 'memberPhone',
    	editor : {
    		xtype : 'textfield'
    	}
    },{
    	text : '가입일',
    	flex : 1,
    	dataIndex : 'memberRgstrDt'
    }],
    store : {
    	fields : ['memberId','memberNm','memberAddr','memberPhone','memberRgstrDt'],
    	data : [{
    		memberId : 'hong',
    		memberNm : '홍길동',
    		memberAddr : '경기도 성남시 분당구 판교역로 160',
    		memberPhone  : '010-1234-5678',
    		memberRgstrDt : new Date()
    	},{
    		memberId : 'kimcs',
    		memberNm : '김철수',
    		memberAddr : '서울특별시 양천구 목동동로 293 현대41타워 4층',
    		memberPhone  : '010-1313-9999',
    		memberRgstrDt : new Date()
    	},{
    		memberId : 'leejs',
    		memberNm : '이진수',
    		memberAddr : '도로명주소 서울특별시 관악구 관악로30길 12 봉천우성',
    		memberPhone  : '010-9876-4646',
    		memberRgstrDt : new Date()
    	}]
    },
    bbar : {
    	xtype : 'pagingtoolbar',
    	plugins : 'ux-slidingpager',
    	displayInfo : true
    }
});
