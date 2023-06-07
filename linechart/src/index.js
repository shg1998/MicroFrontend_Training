import * as echarts from "echarts";

var myChart = echarts.init(document.getElementById('line-chart-dev'));
myChart.setOption({
    title: {
        text: "Shg LineChart"
    },
    xAxis: {
        type: 'category',
        data: ['A', 'B', 'C', 'D', 'E', 'F']
    },
    yAxis: {
        type: 'value'
    },  
    series: [
        {
            type: 'line',
            data: [5, 20, 36, 10, 10, 20]
        }
    ]
}
);
