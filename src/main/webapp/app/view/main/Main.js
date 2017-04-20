/**
 * TODO -  이 클래스는 메인컴포넌트입니다.
 * 					로그인 처리가 완료 된 후, 표출됩니다.
 */
Ext.define('Study.view.main.Main', {
    extend: 'Ext.container.Viewport',
    requires : ['Ext.data.TreeStore'
                	,'Ext.form.field.ComboBox'
                	,'Ext.ux.ProgressBarPager'
                	,'Ext.ux.SlidingPager'
                	,'Ext.grid.plugin.CellEditing'],
    xtype: 'main',
    controller: 'main',
    viewModel: 'main',
    layout : 'border',
    items : [{
    	xtype : 'panel',
    	region : 'north',
    	title : '',
    	header : false,
    	items : [{
    		xtype : 'toolbar',
    		items : [{
    			xtype : 'label',
    			html : '<h2>Market Admin</h2>'
    		},'->',
    		{
    			xtype : 'button',
    			text : 'ExtJS TV님',
    			menu : [{
    				text : '비밀번호 변경',
    				handler : function(btn) {
    					Ext.widget("updatePassword");
    				}
    			},{
    				text : '로그아웃',
    				handler : function(btn) {
    					btn.up("viewport").destroy();
    					Ext.widget("login");
    				}
    			}]
    		}]
    	}]
    },{
    	xtype : 'panel',
    	split : true,
    	width : 200,
    	region : 'west',
    	layout : 'fit',
    	items : {
    		xtype : 'treelist',
    		listeners : {
    			selectionchange : function(obj,record){
    				var center = obj.up("viewport").down("component[region=center]");
    				center.removeAll(true);
    				center.add({
    					xtype : record.get("page")
    				});
    			}
    		},
    		store : {
    			root : {
    				expanded : true,
    				children: [{
    					text : '상품관리',
    					iconCls : 'x-fa fa-gift',
    					expanded : true,
    					selectable : false,
    					children : [{
    						text : '상품목록',
    						page : 'productList',
    						leaf : true
    					}]
    				},{
    					text : '주문관리',
    					iconCls : 'x-fa fa-shopping-cart',
    					expanded : true,
    					selectable : false,
    					children : [{
    						text : '주문목록',
    						page : 'orderList',
    						leaf : true
    					}]
    				},{
    					text : '회원관리',
    					iconCls : 'x-fa fa-users',
    					expanded : true,
    					selectable : false,
    					children : [{
    						text : '회원목록',
    						page : 'memberList',
    						leaf : true
    					}]
    				}]
    			}
    		}
    	}
    },{
    	xtype : 'panel',
    	region : 'center'
    }]
});
