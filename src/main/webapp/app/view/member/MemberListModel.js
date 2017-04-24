Ext.define('Study.view.member.MemberListModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.memberList',
    stores : {
    	memberList : {
        	type : 'memberList'
        }
    }
});
