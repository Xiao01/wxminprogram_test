var wxCharts = require('../../../utils/wxcharts-min.js');
var app = getApp();
var ringChart = null;
Page({
  data: {},
  //  点击“更新数据”按钮时重新参数模拟数据，更新图表
  updateData: function () {
    ringChart.updateData({
      title: {
        name: '80%',
      },
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
      },]
    });
  },
  onLoad: function (e) {
    var windowWidth = 400;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }

    ringChart = new wxCharts({
      animation: true,
      canvasId: 'ringCanvas',
      type: 'ring',
      extra: {
        ringWidth: 25
      },
      title: {
        name: '70%',
        color: '#7cb5ec',
        fontSize: 25
      },
      subtitle: {
        name: '收益率',
        color: '#666666',
        fontSize: 15
      },
      series: [{
        name: '成交量1',
        data: 15,
        stroke: false
      }, {
        name: '成交量2',
        data: 35,
        stroke: false
      }, {
        name: '成交量3',
        data: 78,
        stroke: false
      }, {
        name: '成交量4',
        data: 63,
        stroke: false
      }],
      disablePieStroke: true,
      width: windowWidth,
      height: 200,
      dataLabel: true,
      legend: false,
      padding: 0
    });
    ringChart.addEventListener('renderComplete', () => {
      console.log('renderComplete');
    });
    setTimeout(() => {
      ringChart.stopAnimation();
    }, 500);
  }
});