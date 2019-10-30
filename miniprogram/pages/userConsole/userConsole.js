// pages/userConsole/userConsole.js
Page({

  data: {
    openid: ''
  },

  onLoad: function (options) {
    this.setData({
      openid: getApp().globalData.openid
    })
    //云函数初始化
    wx.cloud.init({ env: 'uclud' })

    // 获取数据库和集合对象：  
    const db = wx.cloud.database()
    const test = db.collection('test')  

    test.add({
      // data 字段表示需新增的 JSON 数据
      data: {

        name: "Bill",
        age: 30
      },
      success: function (res) {
        //  输出成功插入后的id以及其他信息
        console.log(res)
      }
    })  
  }
})