var wxCharts = require('../../utils/wxcharts-min.js');
var app = getApp();
var lineChart = null;
Page({
  data: {},
  //  生成模拟数据
  createSimulationData: function() {
    var categories = [];
    var data1 = [];
    var data2 = [];
    var data3 = [];
    for (var i = 0; i < 50; i++) {
      categories.push((i + 1) + '月');
      data1.push(Math.random() * 2 + 4);
      data2.push(Math.random() * 4 + 6);
      data3.push(Math.random() * 8 + 10);
    }

    return {
      categories: categories,
      data1: data1,
      data2: data2,
      data3: data3
    }
  },
  //  点击“更新数据”按钮时重新参数模拟数据，更新图表
  updateData: function() {
    var simulationData = this.createSimulationData();
    var series = [{
        name: '成交量1',
        data: simulationData.data1,
        format: function(val, name) {
          return val.toFixed(2) + '万';
        }
      },
      {
        name: '成交量2',
        data: simulationData.data2,
        format: function(val, name) {
          return val.toFixed(2) + '万';
        }
      },
      {
        name: '成交量3',
        data: simulationData.data3,
        format: function(val, name) {
          return val.toFixed(2) + '万';
        }
      }
    ];
    lineChart.updateData({
      categories: simulationData.categories,
      series: series
    });
  },
  onLoad: function(e) {
    var windowWidth = 400;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }

    var simulationData = this.createSimulationData();

    //  页面装载时创建wxCharts对象，并指定相应的属性，以便绘制曲线图
    lineChart = new wxCharts({
      canvasId: 'lineCanvas',
      type: 'line',
      categories: simulationData.categories,
      animation: true,
      background: '#f0f0f0',
      series: [{
          name: '成交量1',
          data: simulationData.data1,
          format: function(val, name) {
            return val.toFixed(2) + '万';
          }
        },
        {
          name: '成交量2',
          data: simulationData.data2,
          format: function(val, name) {
            return val.toFixed(2) + '万';
          }
        },
        {
          name: '成交量3',
          data: simulationData.data3,
          format: function(val, name) {
            return val.toFixed(2) + '万';
          }
        }
      ],
      xAxis: {
        disableGrid: true
      },
      yAxis: {
        title: '成交金额 (万元)',
        format: function(val) {
          return val.toFixed(2);
        },
        min: 0
      },
      width: windowWidth,
      height: 160,
      dataLabel: false,
      dataPointShape: false
    });
  }
});