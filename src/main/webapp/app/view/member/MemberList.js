/**
 * TODO -  이 클래스는 회원목록 그리드컴포넌트입니다.
 */
Ext.define('Study.view.member.MemberList', {
    extend: 'Ext.grid.Panel',
    xtype: 'memberList',
    controller: 'memberList',
    viewModel: 'memberList',
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
    bind : {
    	store : '{memberList}'
    },
    bbar : {
    	xtype : 'pagingtoolbar',
    	plugins : 'ux-slidingpager',
    	displayInfo : true
    }
});
