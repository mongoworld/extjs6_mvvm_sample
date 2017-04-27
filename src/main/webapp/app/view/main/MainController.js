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
    },
    /**
     * 좌측상단 Market Admin 로고 클릭시 대쉬보드 페이지 이동
     */
    mainChange : function(obj) {
    	var me = this;
    	var view = me.getView();
    	var center = view.down("component[region=center]");
    	var west = view.down("component[region=west]");
    	obj.getEl().on('click', function(){
    		west.removeAll(true);
    		west.add({
	    		xtype : 'treelist',
	    		ui : 'menulist',
	    		store : 'menuList',
	    		listeners : {
	    			selectionchange : 'menuChange'
	    		}
	    	});
    		
    		center.removeAll(true);
    		center.add({
    			xtype : 'mainDashboard'
    		});
	      }, obj);
    },
    /**
     * 좌측상단 메뉴목록 접는 토글버튼
     */
    toggleMenuList : function(btn) {
    	var me = this;
    	var view = me.getView();
    	var west = view.down("component[region=west]");
    	var center = view.down("component[region=center]");
    	var treelist = west.down("treelist"), ct = treelist.ownerCt;
    	var collapsing = !treelist.getMicro();
    	var newWidth = collapsing ? 110 : 278;
    	
    	 if (!collapsing) {
    		 treelist.setMicro(false);
         }
    	 ct.setWidth(newWidth);
         if (collapsing) {
        	 treelist.setMicro(true);
    	}
    }
});
