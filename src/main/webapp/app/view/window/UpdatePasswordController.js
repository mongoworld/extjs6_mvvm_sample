Ext.define('Study.view.window.UpdatePasswordController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.updatePassword',
    /**
     * 비밀번호 변경버튼 클릭
     */
    updateBtn : function(btn) {
    	var me = this;
    	var view = me.getView();
    },
    /**
     * 닫기버튼 클릭
     */
    closeBtn : function(btn) {
    	btn.up("window").close();
    }
});
