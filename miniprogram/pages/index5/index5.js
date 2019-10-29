// Page({
//   data: {
//     model: '',
//     pixelRatio: 0,
//     windowWidth: 0,
//     windowHeight: 0,
//     language: '',
//     version: '',
//     system: '',
//     platform: ''
//   },
//   //  异步获取系统信息
//   onClick_SystemInfo: function () {
//     var that = this
//     wx.getSystemInfo({
//       success: function (res) {
//         that.setData(
//           {
//             model: res.model,
//             pixelRatio: res.pixelRatio,
//             windowWidth: res.windowWidth,
//             windowHeight: res.windowHeight,
//             language: res.language,
//             version: res.version,
//             system: res.system,
//             platform: res.platform
//           }
//         )
//       }
//     })
//   },
//   //  同步获取系统信息
//   onClick_SystemInfoSync: function () {
//     var res = wx.getSystemInfoSync()
//     this.setData(
//       {
//         model: res.model,
//         pixelRatio: res.pixelRatio,
//         windowWidth: res.windowWidth,
//         windowHeight: res.windowHeight,
//         language: res.language,
//         version: res.version,
//         system: res.system,
//         platform: res.platform
//       }
//     )
//   },

//   onClick_ClearSystemInfo: function () {
//     var res = wx.getSystemInfoSync()
//     this.setData(
//       {
//         model: '',
//         pixelRatio: '',
//         windowWidth: '',
//         windowHeight: '',
//         language: '',
//         version: '',
//         system: '',
//         platform: ''
//       }
//     )
//   }
// }
// )


// Page({
//   data: {
// networkType: '',
// zlgy:'',    //重力感应数值
// direction:"",
//   phoneNumber: '',
// },
// onClick_NetworkType: function () {
//   var that = this;
//   wx.getNetworkType({
//     success: function (res) {
//       // 返回网络类型, 有效值：
//       // wifi/2g/3g/4g/unknown(Android下不常见的网络类型)/none(无网络)
//       console.log(res)
//       that.setData(
//         {
//           networkType: res.networkType
//         }
//       )
//     }
//   })
// },

// zhongliganying:function(){
//   wx.onAccelerometerChange(function (res) {
//     this.setData({
//       zlgy: res,
//     })
//     console.log(res)
//     console.log(res.x)
//     console.log(res.y)
//     console.log(res.z)
//   })
// },

// onClick_Direction: function () {
//   var that = this;
//   wx.onCompassChange(function (res) {
//     that.setData(
//       {
//         direction: parseInt(res.direction)  //  将罗盘方向转换为整数
//       }
//     ),
//     console.log(res +" , "+that.data.direction )
//   })
// },


//   input: function (res) {
//     this.setData({
//       phoneNumber: res.detail.value
//     })
//     console.log(this.data.phoneNumber)
//   },
//   onClick_Call: function () {
//     var that = this;
//     console.log(that.data.phoneNumber)
//     wx.makePhoneCall({
//       phoneNumber: that.data.phoneNumber,
//     })
//   },
// }
// )


Page({
  data: {
    code: '',
    scanType: '',
    charSet: '',
    path: ''
  },

  changeNavigationBarTitle: function () {
    console.log("修改NavigationBartitle")
    wx.setNavigationBarTitle({
      title: '天气预报'
    })
  },

  onClick_ScanCode: function() {
    var that = this;
    wx.scanCode({
      success: (res) => {
        that.setData({
          code: res.result,
          scanType: res.scanType,
          charSet: res.charSet,
          path: res.path
        })
      }
    })
  },

  show_Toast: function() {
    wx.showToast({
      title: '加载',
      icon: 'loading',
      duration: 20000 //  2秒后自动关闭
    })
  },

  cancel_showToast: function() {
    setTimeout(function() {
      wx.hideToast()
    }, 2000)
  },

  show_Modal: function() {
    console.log('用户点击show_Modal')
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  showActionSheet: function() {
    wx.showActionSheet({
      itemList: ['a1', 'a2', 'a3', 'a4', 'a5', 'a6'],
      itemColor: 'red',
      success: function(res) {
        console.log("success:" + res.tapIndex)
      },
      fail: function(res) {
        console.log("fail:" + res.tapIndex)
      },
      complete: function(res) {
        console.log("complete:" + res.tapIndex)
      },
    })
  },



})