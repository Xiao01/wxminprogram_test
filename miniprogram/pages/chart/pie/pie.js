var wxCharts = require('../../../utils/wxcharts-min.js');
var app = getApp();
var pieChart = null;
Page({
  data: {},


  //  点击“更新数据”按钮时重新参数模拟数据，更新图表
  updateData: function() {
   
    pieChart.updateData({
      series: [{
        name: '成交量1',
        data: 43,
      }, {
        name: '成交量2',
        data: 12,
      }, {
        name: '成交量3',
        data: 32,
      }, {
        name: '成交量4',
        data: 51,
      }, ]
    });
  },
  onLoad: function(e) {
    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }
    
    //  开始绘制饼状图
    pieChart = new wxCharts({
      animation: true,
      canvasId: 'pieCanvas',
      type: 'pie',
      series: [{
        name: '成交量1',
        data:18,// simulationData.data[0],
      }, {
        name: '成交量2',
        data:35,// simulationData.data[1],
      }, {
        name: '成交量3',
        data: 12,// simulationData.data[2],
      }, {
        name: '成交量4',
        data: 5,// simulationData.data[3],
      }],
      width: windowWidth,
      height: 300,
      dataLabel: true,
    });
  }
});