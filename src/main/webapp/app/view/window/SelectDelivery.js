/**
 * TODO -  이 클래스는 배송조회 윈도우 컴포넌트 입니다.
 * 					주문목록 > 그리드 배송정보조회 버튼 클릭시, 표시됩니다.
 */
Ext.define('Study.view.window.SelectDelivery', {
    extend: 'Ext.window.Window',
    listeners : {
    	boxready : 'onLoadData'
    },
    xtype: 'selectDelivery',
    controller : 'selectDelivery',
    viewModel: 'selectDelivery',
    width : 610,
    height : 260,
    title : '배송정보 조회',
    autoShow : true,
    modal : true,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    bodyPadding: 10,
    items: [{
        xtype: 'textfield',
        fieldLabel: '받는사람',
        bind : {
        	value : '{deliveryNm}'
        }
    }, {
        xtype: 'textfield',
        fieldLabel: '주소',
        bind : {
        	value : '{deliveryAddr}'
        }
    }, {
        xtype: 'textfield',
        fieldLabel: '배송상태',
        bind : {
        	value : '{deliveryStatusNm}'
        }
    }],
    buttons: [{
        text: '닫기',
        handler: function(btn){
        	btn.up("window").close();
        }
    }]
});
