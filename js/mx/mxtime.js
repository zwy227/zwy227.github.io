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
            data : ['05月16日 12:10','05月16日 11:10','05月16日 12:20','05月16日 13:00','05月16日 11:30','05月16日 11:50','05月16日 13:10','05月16日 11:20','05月16日 12:30','05月16日 12:00','05月16日 11:40','05月16日 12:50','05月16日 12:40'],
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
            data:[7,60,10,2,19,6,5,25,5,10,9,6,6],
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