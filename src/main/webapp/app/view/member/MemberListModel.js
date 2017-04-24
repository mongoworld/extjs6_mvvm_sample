Ext.define('Study.view.member.MemberListModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.memberList',
    stores : {
    	memberList : {
        	fields : ['memberId','memberNm','memberAddr','memberRgstrDt'],
        	data : [{
        		memberId : 'hong',
        		memberNm : '홍길동',
        		memberAddr : '경기도 성남시 분당구 판교역로 160',
        		memberRgstrDt : new Date()
        	},{
        		memberId : 'kimcs',
        		memberNm : '김철수',
        		memberAddr : '서울특별시 양천구 목동동로 293 현대41타워 4층',
        		memberRgstrDt : new Date()
        	},{
        		memberId : 'leejs',
        		memberNm : '이진수',
        		memberAddr : '도로명주소 서울특별시 관악구 관악로30길 12 봉천우성',
        		memberRgstrDt : new Date()
        	}]
        }
    }
});
