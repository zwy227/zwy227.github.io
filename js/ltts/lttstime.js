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
		textStyle:{color:'#ffffff'}
    },
    legend: {
        data:['转发次数'],
		textStyle:{color:'#000000'}
    },toolbox: {
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
            data :['05月15日 15:30','05月15日 16:10','05月15日 15:20','05月15日 15:10','05月15日 15:00','05月15日 14:50','05月15日 15:50','05月15日 15:40','05月15日 17:50','05月15日 18:30','05月15日 16:20','05月15日 17:20','05月15日 20:30','05月15日 23:30','05月15日 16:30','05月15日 16:00','05月15日 18:40','05月15日 18:20','05月15日 16:40','05月15日 19:40','05月15日 22:40','05月15日 17:00','05月15日 21:30','05月15日 19:10','05月16日 11:50','05月16日 16:40','05月15日 18:00','05月16日 00:30','05月15日 17:30','05月15日 16:50','05月15日 19:50','05月16日 10:30','05月16日 17:20','05月15日 22:20','05月16日 14:30','05月15日 18:10','05月15日 22:30','05月16日 19:30','05月15日 19:00','05月15日 17:10','05月15日 20:20','05月15日 19:20','05月15日 18:50','05月16日 10:10','05月16日 03:10','05月15日 21:40','05月15日 17:40','05月17日 08:20','05月17日 16:10','05月16日 13:00','05月16日 10:20','05月16日 07:30','05月16日 00:00','05月17日 18:10','05月16日 08:50','05月15日 20:40'],
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
            data:[44,8,41,81,123,247,21,32,10,2,9,5,2,1,8,27,1,3,6,1,3,5,2,1,1,2,3,2,4,7,4,1,1,1,1,2,1,1,1,2,2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1],
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
                      myChart.setOption(option);     
window.onresize = myChart.resize 						  
	})