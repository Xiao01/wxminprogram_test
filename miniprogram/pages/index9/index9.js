// pages/index9/index9.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    grids:[0,1,2,3,4,5,6,7,8],
  },
  //小程序登陸微信
  login: function() {
    wx.login({
      success: function(res) {
        if (res.code) {
          //向第三方服务器发起网络请求，以便获取session_key和openid
          console.log("获取用户代码成功：" + res.code);
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }

    });
  },

  //检测会话是否过期
  onClickCheckSession: function() {
    wx.checkSession({
      success: function() {
        console.log('Session未过期');
      },
      fail: function() {
        //登录态过期
        console.log('Session已经过期');
        wx.login({
          success: function(res) {
            if (res.code) {
              //发起网络请求
              console.log("获取用户代码成功：" + res.code);
            } else {
              console.log('获取用户登录态失败！' + res.errMsg)
            }
          }
        })
      }
    })
  },


  onClickGetUserInfo: function() {
    wx.login({
      success: function(res) {
        if (res.code) {
          wx.getUserInfo({
            success: function(res) {
              console.log(res);
              //  需要将加密的字符串用wx.request方法传回第三方服务器，解密后
              //  再传回小程序   
            }
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
  },

  
  onClickRequestPayment: function() {
      wx.requestPayment({
        'timeStamp': '',
        'nonceStr': '',
        'package': '',
        'signType': 'MD5',
        'paySign': '',
        'success': function(res) {
          console.log('succes')
        },
        'fail': function(res) {
          console.log('fail')
        },
        'complete': function (res) {
          console.log('complete')
        }
      })
    },
//微信分享
  onShareAppMessage: function () {
    return {
      title: '自定义分享标题',
      path: '/pages/index8/index8'
    }
  }
})