var wxCharts = require('../../../utils/wxcharts-min.js');
var app = getApp();
var areaChart =null;
Page({
  data: {
  },
  //  生成模拟数据
  createSimulationData: function () {
    var categories = [];
    var data1 = [];
    
    for (var i = 0; i < 10; i++) {
      categories.push((i + 1) + '月');
      data1.push((Math.random() * 100).toFixed(0));
    }

    return {
      categories: categories,
      data1: data1,
     
    }
  },



  //  点击“更新数据”按钮时重新参数模拟数据，更新图表
  updateData: function () {
    var simulationData = this.createSimulationData();
    areaChart.updateData({
      categories:simulationData.categories,
      series:[{
        data: simulationData.data1,
      }]
    });
  },

  onLoad: function (e) {
    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }
    //  开始绘制面积图
    areaChart= new wxCharts({
      canvasId: 'areaCanvas',
      type: 'area',
      categories: ['1', '2', '3', '4', '5', '6'],
      animation: true,
      series: [{
        name: '成交量1',
        data: [32, 45, 13, 56, 33, 34],
        format: function (val) {
          return val.toFixed(2) + '万';
        }
      }],
      yAxis: {
        title: '成交金额 (万元)',
        format: function (val) {
          return val.toFixed(2);
        },
        min: 0,
        fontColor: '#8085e9',
        gridColor: '#8085e9',
        titleFontColor: '#f7a35c'
      },
      xAxis: {
        fontColor: '#7cb5ec',
        gridColor: '#7cb5ec'
      },
      width: windowWidth,
      height: 200
    });
  }
});