/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Study.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Study',

    stores: [
        // TODO: add global / shared stores here
        'MenuList'
    ],
    
    launch: function () {
    	Ext.ariaWarn = Ext.emptyFn;
    	Ext.Ajax.request({
    		url : '/api/sessionCheck',
    		method : 'POST',
    		success : function(res){
    			var result = Ext.decode(res.responseText);
    			if(result['code'] == 999) {
    				Ext.widget("login");
    			}
    			else {
    				Ext.widget("main",{
    					adminNm : result['adminNm']
    				});
    			}
    		}
    	});
    },
    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
