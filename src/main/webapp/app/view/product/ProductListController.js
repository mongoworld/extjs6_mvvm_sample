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
    	store.load({
    		callback :function(data){
    			console.log(data);
    		}
    	});
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
    	obj.down("grid").setHeight(Ext.Element.getViewportHeight()-150);
    },
    /**
     * 상품 저장
     */
    addProduct : function(btn) {
    	var me = this;
    	var view = me.getView();
    	var viewModel = me.getViewModel();
    	
    	var params = {
    			itemNm : viewModel.get("itemNm"),
    			itemPrc : viewModel.get("itemPrc"),
    			itemAmt : viewModel.get("itemAmt")
    	};
    	
    	Ext.Ajax.request({
    		url : '/api/add/product',
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
    	})
    }
});
