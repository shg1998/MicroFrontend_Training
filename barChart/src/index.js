import * as echarts from "echarts";

var myChart = echarts.init(document.getElementById('barchart-dev'));
myChart.setOption({
    title: {
        text: "Shg BarChart"
    },
    legend: {
        data: ['sales']
    },
    xAxis: {
        data: ['DigiKala', 'Alibaba', 'OKala', 'Golrang', 'Snapp', 'Tap30']
    },
    yAxis: {

    },
    series: [
        {
            name: 'sales',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }
    ]
}
);
