//var util = require('../../utils/util.js')
Page({
  data: {
    //  定义目前支持的快递公司
    express: ['圆通快递', '申通快递', '顺丰快递', '韵达快递', '德邦物流', '中通快递', '百世快递', '邮政包裹', 'EMS', '邮政国际'],
    //  定义快递公司对应的key 
    key: ['yuantong', 'shentong', 'shunfeng', 'yunda', 'debangwuliu', 'zhongtong', 'huitongkuaidi', 'youzhengguonei', 'ems', 'youzhengguoji'],
    //  当前选择的快递公司索引，从0开始 
    index: 0,
    //  快递单号
    postId: '',
    //  返回与快递单号对应的快递单状态数据
    data: [],
    //  决定是否在按钮上显示正在装载动画，该属性为true，显示正在装载动画
    loading: false
  },
  onLoad: function () {

  },
  //  <picker>组件的值发生变化时调用该方法
  bindExpressChange: function (e) {
    var that = this;
    console.log(that.data.key[e.detail.value]);
    that.setData({
      index: e.detail.value
    });
  },
  //  在<input>组件中输入内容时调用该方法
  bindChangeInput: function (e) {
    this.setData({
      postId: e.detail.value
    });
  },
  //  点击“查询”按钮调用该方法
  bindOnSearch: function () {

    var that = this;
    //  获取要查询的快递单号 
    var postId = that.data.postId;
    //  获取当前选择的快递公司对应的key
    var type = that.data.key[that.data.index];

    if (!postId.length || !type.length) return;
    //  显示正在装载动画
    that.setData({
      loading: !that.data.loading
    });
    //  请求第三方API的Url
    wx.request({
      url: 'https://robot.leanapp.cn/api/express/' + type + '/' + postId,
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        //  如果成功返回数据，更新data变量，显示快递单状态数据
        that.setData({
          loading: !that.data.loading,
          data: res.data
        });
        console.error(res.data.data);
      }
    });
  }
})