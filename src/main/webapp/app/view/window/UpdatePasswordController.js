Ext.define('Study.view.window.UpdatePasswordController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.updatePassword',
    /**
     * 비밀번호 변경버튼 클릭
     */
    updateBtn : function(btn) {
    	var me = this;
    	var view = me.getView();
    	var form = view.down("form");
    	var values = form.getForm().getValues();
    	
    	if(Ext.String.trim(values['adminPwd']) != Ext.String.trim(values['confirmPwd'])) {
    		Ext.Msg.alert("알림","비밀번호와 비밀번호확인값이 다릅니다");
    		return;
    	}
    	else {
    		form.submit({
    			success: function(form, action) {
    				var result = action.result;
    				if(result['code'] == 200){
    					Ext.Msg.alert("알림","비밀번호가 변경되었습니다.");
    					btn.up("window").close();
    		    		return;
    				}
    				else {
    					Ext.Msg.alert("알림",result['msg']);
    		    		return;
    				}
                },
                failure: function(form, action) {
                    switch (action.failureType) {
                        case Ext.form.action.Action.CLIENT_INVALID:
                            Ext.Msg.alert('알림', "잘못된 값으로 비밀번호 변경이 되지 않았습니다");
                            break;
                        case Ext.form.action.Action.CONNECT_FAILURE:
                            Ext.Msg.alert('알림', '비동기 호출을 할 수 없습니다');
                            break;
                        case Ext.form.action.Action.SERVER_INVALID:
                           Ext.Msg.alert('알림', action.result.msg);
                   }
                }
    		});	
    	}
    },
    /**
     * 닫기버튼 클릭
     */
    closeBtn : function(btn) {
    	btn.up("window").close();
    }
});
