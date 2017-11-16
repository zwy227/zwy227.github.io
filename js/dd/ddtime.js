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
            data : ['05月16日 07:00','05月16日 07:20','05月16日 07:30','05月16日 07:10','05月16日 07:50','05月16日 07:40','05月16日 08:00','05月16日 08:10','05月16日 08:20','05月16日 08:30','05月16日 08:40','05月16日 08:50','05月16日 09:00','05月16日 09:10','05月16日 09:20','05月16日 09:30','05月16日 09:50','05月16日 10:00','05月16日 10:20','05月16日 10:30','05月16日 10:40','05月16日 10:50','05月16日 11:10','05月16日 11:40','05月16日 12:40','05月16日 13:00','05月16日 13:30','05月16日 14:10','05月16日 15:50','05月16日 19:10','05月16日 21:10','05月16日 21:40','05月16日 22:20','05月16日 22:30','05月17日 00:40','05月17日 07:20','05月17日 09:30','05月17日 10:30','05月17日 20:30','05月17日 20:40'],

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
            data:[4,11,10,11,18,9,7,2,7,4,3,2,3,2,2,4,2,1,1,2,3,2,2,3,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,2],
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