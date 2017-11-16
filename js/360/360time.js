	require.config({
	paths:{
	 'echarts' : 'js/echarts/echarts-original',
	'echarts/chart/line' : 'js/echarts/echarts-original',
	 
	}
	});
	
	require(
	[
	'echarts',
	
	'echarts/chart/line'
	
	],

	function(ec){
		var myChart = ec.init(document.getElementById('main7')); 
 option = {
    title : {
        text: '转发时间曲线',
        subtext: '数据来自新浪微博',
		textStyle:{
					color:'#000000'
					}
    },
    tooltip : {
        trigger: 'axis',
		textStyle:{color:'#FFFFFF'}
    },
    legend: {
        data:['转发次数'],
		textStyle:{color:'#000000'}
    },
    toolbox: {
        show : true,
        feature : {
           
            dataView : {show: true, readOnly: false},
          
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['03月24日 22:20','03月24日 22:30','03月24日 22:40','03月24日 22:50','03月24日 23:00','03月24日 23:10','03月24日 23:20','03月24日 23:30','03月24日 23:40','03月24日 23:50','03月25日 00:00','03月25日 00:10','03月25日 00:20','03月25日 00:30','03月25日 00:50','03月25日 01:20','03月25日 01:40','03月25日 01:50','03月25日 03:10','03月25日 07:10','03月25日 07:20','03月25日 07:30','03月25日 07:50','03月25日 08:00','03月25日 08:30','03月25日 08:50','03月25日 09:10','03月25日 10:10','03月25日 11:00','03月25日 11:10'],
        axisLabel:{textStyle:{color:'#000000'}},
		}
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel : {
			textStyle:{color:'#000000'},
                formatter: '{value} '
            }
        }
    ],
    series : [
        {
            name:'转发次数',
            type:'line',
            data:[16,28,15,14,8,8,5,2,6,4,6,2,5,1,1,3,1,1,1,1,1,3,2,1,1,1,1,3,2,2],
            
			markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        }
    ]
};
                      myChart.setOption(option);          window.onresize = myChart.resize		
	})