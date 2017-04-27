Ext.define('Study.view.product.ProductListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.productList',
    /**
     * 최초 데이터 로드
     */
    onLoadData : function(obj){
    	var me = this;
    	var view = me.getView();
    	var viewModel = me.getViewModel();
    	//view['xtype'] == "productList"
    	var store = viewModel.getStore(view['xtype']);
    	store.load();
    },
    /**
     * 검색 기능
     */
    searchBtn : function(btn) {
    	var me = this;
    	var view = me.getView();
    	var viewModel = me.getViewModel();
    	var store = viewModel.getStore(view['xtype']);
    	store.getProxy().setExtraParam("searchValue",viewModel.get("searchValue"));
    	store.load();
    },
    /**
     * 상품목록 그리드 리사이트
     */
    setGridHeight : function(obj){
    	obj.down("grid").setHeight(Ext.Element.getViewportHeight()-200);
    },
    /**
     * 상품 저장/수정
     */
    addProduct : function(btn) {
    	var me = this;
    	var view = me.getView();
    	var viewModel = me.getViewModel();
    	var url = "/api/add/product";
    	var params = {
    			itemNm : viewModel.get("itemNm"),
    			itemPrc : viewModel.get("itemPrc"),
    			itemAmt : viewModel.get("itemAmt")
    	};
    	
    	/**
    	 * UPDATE
    	 */
    	if(viewModel.get("itemSeq") > 0) {
    		params.itemSeq = viewModel.get("itemSeq")
    		url = "/api/update/product";
    	}
    	
    	Ext.Ajax.request({
    		url : url,
    		method : 'POST',
    		params : params,
    		success : function(res){
    			var result = Ext.decode(res.responseText);
    			//정상등록
    			if(result['code'] == 200){
    				viewModel.getStore(view['xtype']).load();
    			}
    			else {
    				Ext.Msg.alert("알림",result['msg']);
    				return;
    			}
    		}
    	});
    },
    /**
     * 정보수정을 위한 method
     */
    onUpdateForm : function(obj,td,cellIndex,record,tr,rowIndex,e,eOpt){
    	var me = this;
    	var view = me.getView();
    	var viewModel = me.getViewModel();
    	
    	viewModel.set("itemSeq",record.get("itemSeq"));
    	viewModel.set("itemNm",record.get("itemNm"));
    	viewModel.set("itemPrc",record.get("itemPrc"));
    	viewModel.set("itemAmt",record.get("itemAmt"));
    	
    },
    /**
     * 상품삭제
     */
    removeBtn : function(btn){
    	var me = this;
    	var view = me.getView();
    	var viewModel = me.getViewModel();
		var record = btn.getWidgetRecord();
		
		Ext.Ajax.request({
			url : '/api/remove/product',
			method : 'POST',
			params : {
				itemSeq : record.get("itemSeq")
			},
			success : function(res){
				var result = Ext.decode(res.responseText);
				if(result['code'] ==200) {
					viewModel.getStore(view['xtype']).load();
				}
				else {
					Ext.Msg.alert("알림",result['msg']);
					return;
				}
			}
		})
    },
    /**
     * 초기화 버튼 클릭
     */
    formatBtn : function(btn) {
    	var me = this;
    	var view = me.getView();
    	var viewModel = me.getViewModel();
    	viewModel.set("itemSeq",0);
    	viewModel.set("itemNm","");
    	viewModel.set("itemPrc",0);
    	viewModel.set("itemAmt",0);
    }
});
