Ext.define('Study.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',
    /**
     * Login 버튼 클릭 이벤트
     */
    loginBtn : function(btn) {
    	var me = this;
    	var view = me.getView();
    	view.close();
		Ext.widget("main");
    }
});
