$(function(){
  'use strict'





  var newCust = [[0, 8], [1, 7], [2,7], [3, 8], [4, 7], [5, 8], [6, 9], [7, 9], [8, 9], [9, 8], [10, 9], [11, 8], [12, 7], [13,8], [14, 7], [15, 7], [16, 8], [17, 9], [18, 9], [19, 10]];
  var retCust = [[0, 1], [1, 2], [2,3], [3, 3], [4, 2], [5, 3], [6, 4], [7, 5], [8, 4], [9, 5], [10, 4], [11, 4], [12, 3], [13,4], [14, 4], [15, 5], [16, 5], [17, 4], [18, 6], [19, 7]];

  var plot = $.plot($('#ch5'),[
    {
      data: newCust,
      label: 'Bounce Rate',
      color: '#17A2B8'
    },
    {
      data: retCust,
      label: 'Page Views',
      color: '#4E6577'
    }
  ],{
    series: {
      lines: {
        show: false
      },
      splines: {
        show: true,
        tension: 0.4,
        lineWidth: 0,
        fill: 0.5
      },
      shadowSize: 0
    },
    points: {
      show: false,
    },
    grid: {
      hoverable: true,
      clickable: true,
      borderColor: '#ddd',
      borderWidth: 0,
      labelMargin: 5,
      backgroundColor: '#fff'
    },
    yaxis: {
      min: 0,
      max: 15,
      color: '#eee',
      font: {
        size: 10,
        color: '#999'
      }
    },
    xaxis: {
      color: '#eee',
      font: {
        size: 10,
        color: '#999'
      }
    }
  });


  $('#ch7').sparkline('html', {
    type: 'bar',
    barWidth: 10,
    height: 70,
    barColor: '#17A2B8',
    chartRangeMax: 12
  });

  $('#ch8').sparkline('html', {
    type: 'bar',
    barWidth: 10,
    height: 70,
    barColor: '#20C997',
    chartRangeMax: 12
  });

  $('#ch9').sparkline('html', {
    type: 'bar',
    barWidth: 10,
    height: 70,
    barColor: '#3A4293',
    chartRangeMax: 12
  });

  // Horizontal bar chart
  var ch12data = [
    {
      name: 'Oranges',
      type: 'bar',
      data: [20, 20, 36, 12, 15]
    },
    {
      name: 'Apples',
      type: 'bar',
      data: [8, 5, 25, 10, 10]
    }
  ];

  var ch12Option = {
    grid: {
      top: '6',
      right: '0',
      bottom: '17',
      left: '32',
    },
    xAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: '#ccc'
        }
      },
      axisLabel: {
        fontSize: 10,
        color: '#666'
      }
    },
    yAxis: {
      type: 'category',
      data: [ '2006', '2008', '2010', '2012', '2014'],
      splitLine: {
        lineStyle: {
          color: '#ddd'
        }
      },
      axisLine: {
        lineStyle: {
          color: '#ccc'
        }
      },
      axisLabel: {
        fontSize: 10,
        color: '#666'
      }
    },
    series: ch12data,
    color: ['#17A2B8', '#6F42C1']
  };

  var ch12id = document.getElementById('ch12');
  var ch12 = echarts.init(ch12id);
  ch12.setOption(ch12Option);

  new ResizeSensor($('.br-mainpanel'), function(){
    ch12.resize();
  });


});
