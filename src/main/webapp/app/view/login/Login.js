/**
 * TODO -  이 클래스는 로그인 윈도우컴포넌트입니다.
 * 					최초 로그인 시, 세션정보가 없을 경우 로그인 윈도우 컴포넌트를 호출하게 됩니다.
 */
Ext.define('Study.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',
    controller: 'login',
    layout : 'center',
    closable : false,
    maximized : true,
    autoShow : true,
    header : false,
    onEsc : function(){
    	return false;
    },
    items : [{
    	xtype : 'form',
    	layout : {
    		type : 'vbox',
    		align : 'center',
    		pack : 'center'
    	},
    	items : [{
    		xtype : 'textfield',
    		name : 'adminId',
    		value : 'admin'
    	},{
    		xtype : 'textfield',
    		inputType : 'password',
    		name : 'adminPwd',
    		value : '1234'
    	},{
    		xtype : 'button',
    		width : 165,
    		text : '로그인',
    		handler : 'loginBtn'
    	}]
    }]
});
