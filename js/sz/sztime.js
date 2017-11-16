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
            data : ['05月20日 06:00','05月20日 06:10','05月20日 06:20','05月20日 06:30','05月20日 06:40','05月20日 06:50','05月20日 07:00','05月20日 07:10','05月20日 07:20','05月20日 07:30','05月20日 07:40','05月20日 07:50','05月20日 08:00','05月20日 08:10','05月20日 08:20','05月20日 08:30','05月20日 08:40','05月20日 08:50','05月20日 09:00','05月20日 09:10','05月20日 09:20','05月20日 09:30','05月20日 09:40','05月20日 09:50','05月20日 10:00','05月20日 10:10','05月20日 10:20','05月20日 10:30','05月20日 10:50','05月20日 11:00','05月20日 11:10','05月20日 11:20','05月20日 11:30','05月20日 11:40','05月20日 12:00','05月20日 12:10','05月20日 12:20','05月20日 12:40','05月20日 12:50','05月20日 13:30','05月20日 13:40','05月20日 13:50','05月20日 14:00'],
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
            data:[32,38,33,28,34,30,31,19,36,23,23,28,28,24,17,14,6,5,9,5,6,2,2,2,3,2,1,1,1,3,3,1,1,1,1,1,2,1,1,4,2,3,2],
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