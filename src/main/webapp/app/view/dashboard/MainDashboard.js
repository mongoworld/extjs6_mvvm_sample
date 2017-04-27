/**
 * TODO -  이 클래스는 메인 대쉬보드 컴포넌트입니다.
 */
Ext.define('Study.view.dashboard.MainDashboard', {
		extend : "Ext.Container",
		xtype : 'mainDashboard',
		requires : [
                	'Ext.chart.axis.Numeric3D',
                	'Ext.chart.axis.Category3D',
                	'Ext.chart.series.Bar3D',
                	'Ext.chart.series.Pie3D',
                	'Ext.chart.series.Line',
                	'Ext.chart.axis.Category',
                	'Ext.chart.axis.Numeric'],
		items : [{
    		xtype : 'panel',
    		margin : 15,
    		layout : {
				type : 'hbox'
			},
    		items : [{
    			xtype : 'cartesian',
    			height: 380,
    		    bodyPadding: 15,
    			width : '50%',
    			title : '막대그래프',
    			axes : [{
    				type : 'numeric3d',
    				position : 'left',
    				title : '방문자수'
    			},{
    				type : 'category3d',
    				position : 'bottom',
    				title : '일자'
    			}],
    			series : {
    				type : 'bar3d',
    				axis : 'left',
    				xField : 'date',
    				yField : 'count',
    				label : {
    					field : 'count',
    					display : 'insideEnd'
    				}
    			},
    			store : {
    				fields : ['date','count'],
    				data : [{
    					date : '7/20', 
    					count : 52
    				},{
    					date : '7/21', 
    					count : 58
    				},{
    					date : '7/22', 
    					count : 22
    				},{
    					date : '7/23', 
    					count : 36
    				},{
    					date : '7/24', 
    					count : 14
    				}]
    			}
    		},{
    			xtype: 'polar',
    			title : '원형그래프',
    			height: 380,
    		    bodyPadding: 15,
       		 	insetPadding: 50,
                innerPadding: 20,
       		 	width: '50%',
                series: [{
                    type: 'pie3d',
                    angleField: 'rate',
                    label: {
                        field: 'browser'
                    }
                }],
    			store : {
				   	 fields : ['browser', 'rate'],
				     data: [{browser : 'Chrome',rate : 61.02},
							{browser : 'IE',rate : 28.98},
							{browser : 'Safari',rate : 6.82},
							{browser : 'Firefox',rate : 1.39},
							{browser : '(not set)',rate : 0.98},
							{browser : 'Android Browser',rate : 0.60},
							{browser : 'Safari(in-app)',rate : 0.16},
							{browser : 'Maxthon',rate : 0.03},
							{browser : 'YaBrowser',rate : 0.02}]
				 }
    		}]
    	},{
    		xtype : 'panel',
    		margin : 15,
    		layout : {
				type : 'hbox'
			},
    		items : [{
    			xtype : 'cartesian', 
    			innerPadding : 30, 
    			height : 380,
    			width : '50%',
    			title : '2012 연령별 투표율 ', 
    			store : { 
    				fields : ['age','vote1','vote2'], 
    				data : [{ 
    					age : '20대', vote1 : 65.8, vote2 : 33.7 
					},{ 
						age : '30대', vote1 : 66.5, vote2 : 33.1 
					},{ 
						age : '40대', vote1 : 55.6, vote2 : 44.1 
					},{ 
						age : '50대', vote1 : 37.4, vote2 : 62.5 
					},{ 
						age : '60대', vote1 : 27.5, vote2 : 72.3 
					}] 
    			},
    			axes : [{ 
    				type : 'numeric', 
    				position : 'left', 
    				minimum : 0, 
    				maximum : 100, 
    				title : '(%)' 
				},{
					type : 'category', 
					position : 'bottom' 
				}], series : [{ 
					type : 'line', 
					marker : { radius : 4 }, 
					smooth : true, 
					xField : 'age', 
					yField : 'vote1', 
					label : { 
						field : 'vote1', 
						display : 'insideEnd' 
						} 
				},{ 
					type : 'line', 
					marker : { 
						radius : 4 
					}, 
					smooth : true, 
					xField : 'age', 
					yField : 'vote2', 
					label : { 
						field : 'vote2', 
						display : 'insideEnd' 
					} 
				}] 
			},{
    			xtype: 'polar',
    			title : '도넛그래프',
    			height: 380,
    		    bodyPadding: 15,
       		 	insetPadding: 50,
                innerPadding: 20,
       		 	width: '50%',
                series: [{
                    type: 'pie3d',
                    donut: 50,
                    angleField: 'rate',
                    label: {
                        field: 'browser'
                    }
                }],
    			store : {
				   	 fields : ['browser', 'rate'],
				     data: [{browser : 'Chrome',rate : 61.02},
							{browser : 'IE',rate : 28.98},
							{browser : 'Safari',rate : 6.82},
							{browser : 'Firefox',rate : 1.39},
							{browser : '(not set)',rate : 0.98},
							{browser : 'Android Browser',rate : 0.60},
							{browser : 'Safari(in-app)',rate : 0.16},
							{browser : 'Maxthon',rate : 0.03},
							{browser : 'YaBrowser',rate : 0.02}]
				 }
    		}]
    	},{
    		xtype : 'panel',
    		margin : 15,
    		layout : {
				type : 'hbox'
			},
    		items : [{
    			xtype : 'grid',
    			width : '100%',
                hideHeaders: true,
                title : 'TODO List',
    			height : 300,
    			title : '안녕하세요',
    			columns : [{
    				dataIndex : 'task',
    				flex : 1,
    				text : '테스트컬럼'
    			}],
    			store : {
               	  fields : ['task'],
               	  data : [{
               		  task : '빨래하기111'
               	  },{
               		  task : '빨래하기222'
               	  },{
               		  task : '빨래하기333'
               	  }]
                 },
                 dockedItems: [
                   {
                       xtype: 'container',
                       layout: 'hbox',
                       dock: 'bottom',
                       padding: '10 0 0 0',
                       items: [
                           {
                               xtype: 'textfield',
                               flex: 1,
                               width:540,
                               emptyText: '일감등록'
                           },
                           {
                               xtype: 'button',
                               width: 40,
                               iconCls: 'x-fa fa-plus'
                           }
                       ]
                   }
               ],
               selModel: {
                   selType: 'checkboxmodel'
               }
    		}]
    	}]
});
