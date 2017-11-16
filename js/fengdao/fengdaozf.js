require.config({
	paths:{
	 'echarts' : 'js/echarts/echarts-original',
	'echarts/chart/bar' : 'js/echarts/echarts-original',
	 
	}
	});
	
	require(
	[
	'echarts',
	
	'echarts/chart/bar'
	
	],

	function(ec){
		var myChart = ec.init(document.getElementById('main6')); 
		var option5 = {
    title : {
        text: '转发层级分析',
        subtext: '数据来自于新浪微博',
		textStyle:{
					color:'#000000'
					}
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['转发级数'],
		textStyle:{color:'#D2D2D2'}
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
            data : ['一级转发','二级转发','三级转发','四级转发','五级转发','六级转发','七及转发','八级转发','九级转发'],
axisLabel:{textStyle:{color:'#000000'}},}
    ],
    yAxis : [
        {
            type : 'value',
			axisLabel : {
			textStyle:{color:'#000000'}
                
            }
        }
    ],
    series : [
        {
            name:'转发级数',
            type:'bar',
            data:[1195, 287, 156, 46, 25, 6, 1, 3, 4 ],
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
                    
                      myChart.setOption(option5);          
	})