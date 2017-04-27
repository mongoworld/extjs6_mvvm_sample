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
                	,'Ext.grid.plugin.CellEditing',
                	'Study.overrides.Item'],
    xtype: 'main',
    controller: 'main',
    viewModel: 'main',
    layout : 'border',
    listeners : {
    	boxready : 'setAdminNm'
    },
    items : [{
    	xtype : 'panel',
    	region : 'north',
    	title : '',
    	header : false,
    	items : [{
    		xtype : 'toolbar',
    		cls : 'top',
    		items : [{
                margin: '0 0 0 8',
                scale : 'large',
    			ui : 'materialbtn',
                iconCls:'x-fa fa-navicon',
                handler: 'toggleMenuList'
            },{
    			xtype : 'label',
    			margin : '0 0 0 20',
    			style : 'cursor:pointer;',
    			html : '<h2>Market Admin</h2>',
    			listeners: {
    			    boxready: 'mainChange'
    			}
    		},'->',
    		{
    			xtype : 'button',
    			scale : 'large',
    			ui : 'materialbtn',
    			itemId : 'adminNm',
    			menu : [{
    				text : '비밀번호 변경',
    				handler : 'updatePasswordBtn'
    			},{
    				text : '로그아웃',
    				handler : 'logoutBtn'
    			}]
    		}]
    	}]
    },{
    	xtype : 'panel',
    	width : 278,
    	region : 'west',
    	layout : 'fit',
    	items : {
    		xtype : 'treelist',
    		ui : 'menulist',
    		store : 'menuList',
    		listeners : {
    			selectionchange : 'menuChange'
    		}
    	}
    },{
    	xtype : 'container',
    	region : 'center',
    	autoScroll : true,
    	items : {
    		xtype : 'mainDashboard'
    	} 
    }]
});
