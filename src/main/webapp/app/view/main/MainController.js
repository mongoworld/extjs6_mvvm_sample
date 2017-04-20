Ext.define('Study.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
    /**
     * 우측상단 메뉴버튼 관리자명 SET
     */
    setAdminNm : function(obj) {
    	var me = this;
    	var view = me.getView();
    	view.down("#adminNm").setText(obj.adminNm);
    },
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
    	
    	Ext.Ajax.request({
    		url : '/api/logout',
    		method : 'POST',
    		success : function(res){
    			var result = Ext.decode(res.responseText);
    			if(result['code'] == 200) {
    				view.destroy();
    				Ext.widget("login");			
    			}
    			else {
    				Ext.Msg.alert("알림",result['msg']);
    				return;
    			}
    		}
    	});
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
