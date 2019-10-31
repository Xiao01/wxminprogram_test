// pages/index12/index12.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

 jc:function(){
   wx.cloud.callFunction({
     name: 'jc',
     data: {
       n: 10
     },
     success: function (res) {
       console.log("success:" + JSON.stringify(res.result))
     },
     fail: console.error
   })
 },

  delete_test_db:function(){
    
    wx.cloud.callFunction({
      name:'remove',
      success: function (res) {
        console.log(res.result)
      },
      fail: console.error
    })
    
  }
})