Ext.define('Study.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
    /**
     * 우측상단 비밀번호 변경 메뉴 클릭
     */
    updatePasswordBtn : function(btn) {
    	Ext.widget("updatePassword");
    },
    /**
     * 우측상단 로그아웃 메뉴 클릭
     */
    logoutBtn : function(btn) {
    	var me = this;
    	var view = me.getView();
    	view.destroy();
		Ext.widget("login");
    },
    /**
     * 좌측 트리목록 메뉴 변경 이벤트
     */
    menuChange : function(obj,record){
    	var me = this;
    	var view = me.getView();
    	var center = view.down("component[region=center]");
		center.removeAll(true);
		center.add({
			xtype : record.get("page")
		});
    }
});
