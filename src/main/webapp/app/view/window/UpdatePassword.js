/**
 * TODO -  이 클래스는 비밀번호 변경 윈도우 컴포넌트 입니다.
 * 					우측상단 비밀번호변경 메뉴 클릭시, 표출됩니다.
 */
Ext.define('Study.view.window.UpdatePassword', {
    extend: 'Ext.window.Window',
    xtype: 'updatePassword',
    controller : 'updatePassword',
    width : 350,
    height : 200,
    title : '비밀번호 변경',
    autoShow : true,
    modal : true,
    items : [{
    	xtype : 'form',
    	margin : 20,
    	items : [{
    		xtype : 'textfield',
    		inputType :'password',
    		fieldLabel : '비밀번호'
    	},{
    		xtype : 'textfield',
    		inputType :'password',
    		fieldLabel : '비밀번호 확인'
    	}]
    }],
    bbar : [{
    	xtype : 'button',
    	text : '비밀번호변경',
    	handler : 'updateBtn'
    },{
    	xtype : 'button',
    	text : '닫   기',
    	handler : 'closeBtn'
    }]
});
