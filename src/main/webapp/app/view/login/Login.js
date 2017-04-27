/**
 * TODO -  이 클래스는 로그인 윈도우컴포넌트입니다.
 * 					최초 로그인 시, 세션정보가 없을 경우 로그인 윈도우 컴포넌트를 호출하게 됩니다.
 */
Ext.define('Study.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',
    controller: 'login',
    cls: 'login-background',
    closable : false,
    maximized : true,
    autoShow : true,
    header : false,
    style : 'border-width : 0px;',
    onEsc : function(){
    	return false;
    },
    layout : {
		type : 'vbox',
		align : 'center',
		pack : 'center'
	},
    items : [{
    	xtype : 'form',
    	width: 410,
    	layout: {
            type: 'vbox',
            align: 'stretch'
        },
    	cls : 'login-form',
    	items : [ {
            xtype: 'label',
            margin : '0 0 0 20',
            html : '<h2>관리자로그인</h2>'
        },{
    		xtype : 'textfield',
    		margin : '0 20 10 20',
    		name : 'adminId',
    		value : 'admin'
    	},{
    		xtype : 'textfield',
    		margin : '0 20 10 20',
    		inputType : 'password',
    		name : 'adminPwd',
    		value : '1234'
    	},{
    		xtype : 'button',
    		margin : '0 20 20 20',
    		scale: 'large',
    		text : '로그인',
    		handler : 'loginBtn'
    	}]
    }]
});
