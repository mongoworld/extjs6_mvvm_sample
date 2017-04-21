Ext.define('Study.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',
    /**
     * Login 버튼 클릭 이벤트
     */
    loginBtn : function(btn) {
    	var me = this;
    	var view = me.getView();
    	var params = view.down("form").getForm().getValues();
    	Ext.Ajax.request({
    		url : '/findLogin',
    		method : 'POST',
    		params : params,
    		success : function(res){
    			var result = Ext.decode(res.responseText);
    			if(result['code'] == 200) {
    				view.close();
                    Ext.widget("main",{
                    	adminNm : result['adminNm']
                    });
    			}
    			else {
    				Ext.Msg.alert("알림",result['msg']);
    				return;
    			}
    		}
    	})
    }
});
