// var app = getApp()
// Page({
//   data: {
//     recording: false,   //  表示当前是否正在录制
//     hasRecord: false,   //  表示当前是否已经成功录制，并成功生成了音频临时文件
//     playing: false,
//   },
//   //开始录音
//   startRecord: function () {
//     var that = this;
//     wx.startRecord({
//       success: function (res) {
//         console.log(res.tempFilePath);
//         that.setData({
//           hasRecord: true,
//           tempFilePath: res.tempFilePath,
//         })
//       },
//       complete: function () {
//         that.setData({ recording: false })
//       }
//     })
//   },
//   //  停止录音
//   stopRecord: function () {
//     var that = this;
//     console.log(this.data.tempFilePath);
//     wx.stopRecord({
//       success: function () {
//         console.log('stop record success')
//         that.setData({
//           recording: false,
//           hasRecord: false,
//         })
//       }
//     })
//   },
//   //  开始播放录制的音频
//   playVoice: function () {
//     var that = this;
//     wx.playVoice({
//       filePath: this.data.tempFilePath,
//       success: function () {
//         console.log('play voice finished')
//         that.setData({
//           playing: false,
//         })
//       }
//     })
//   },
//   //  暂停播放录制的音频
//   pauseVoice: function () {
//     wx.pauseVoice()
//     this.setData({
//       playing: false
//     })
//   },
//   //  停止播放录制的音频
//   stopVoice: function () {
//     wx.stopVoice(),
//     this.setData({
//       playing: false
//     })
//   },

// })


//  背景音乐文件对应的Url（在线播放）
// var dataUrl =
//   'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'

// var app = getApp()
// Page({
//   data: {
//     playTime: 0,                          //  <slider>组件当前的位置
//     formatedPlayTime: '00:00:00'    //  当前播放的位置
//   },
//   //播放背景音乐
//   playBackgroundAudio: function () {
//     var that = this
//     wx.playBackgroundAudio({
//       dataUrl: dataUrl,
//       title: '此时此刻',
//     })
//     this.enableInterval()
//     app.globalData.backgroundAudioPlaying = true
//   },
//   //  暂停背景音乐
//   pauseBackgroundAudio: function () {
//     var that = this
//     wx.pauseBackgroundAudio()
//     app.globalData.backgroundAudioPlaying = false
//   },
//   //  停止背景音乐
//   stopBackgroundAudio: function () {
//     var that = this
//     wx.stopBackgroundAudio({
//       success: function (res) {
//         that.setData({
//           playTime: 0,
//           formatedPlayTime: '00:00:00'
//         })
//       }
//     })
//     app.globalData.backgroundAudioPlaying = false
//   },

//   //  将秒格式的时间格式化为00:00:00形式（时分秒）
//   formatTime: function (time) {
//     if (typeof time !== 'number' || time < 0) {
//       return time
//     }
//     var hour = parseInt(time / 3600)
//     time = time % 3600
//     var minute = parseInt(time / 60)
//     time = time % 60
//     var second = time

//     return ([hour, minute, second]).map(function (n) {
//       n = n.toString()
//       consoloe.log("n:"+ n)
//       return n[1] ? n : '0' + n
//     }).join(':')
//   },
//   //  随机定位背景音乐
//   seek: function (e) {

//     clearInterval(this.updateInterval)
//     var that = this
//     wx.seekBackgroundAudio({
//       position: e.detail.value,
//       complete: function () {
//         // 实际会延迟两秒左右才跳过去
//         setTimeout(function () {
//           that.enableInterval()
//         }, 2000)
//       }
//     })
//   },
//   //  开启定时器，播放计时
//   enableInterval: function () {
//     var that = this
//     update()
//     //  开启定时器，500毫秒获取一次背景音乐的播放位置
//     this.updateInterval = setInterval(update, 500)

//     function update() {
//       wx.getBackgroundAudioPlayerState({
//         success: function (res) {
//           if (res.currentPosition != undefined) {
//             that.setData({
//               playTime: res.currentPosition,
//               formatedPlayTime: that.formatTime(res.currentPosition + 1)
//             })
//           }
//         }
//       })
//     }
//   },
// })


// Page({
//   chooseVideo: function () {
//     var that = this
//     //  选择视频文件
//     wx.chooseVideo({
//       sourceType: ['camera', 'album'],
//       camera: ['front', 'back'],
//       maxDuration: 10,
//       success: function (res) {
//         that.setData({
//           src: res.tempFilePath  //  设置src属性为视频文件临时路径，以便在<video>组件中播放视频
//         })
//       }
//     })
//   }
// })


//  随机生成弹幕文字颜色
// function getRandomColor() {
//   let rgb = []
//   for (let i = 0; i < 3; ++i) {
//     let color = Math.floor(Math.random() * 256).toString(16)
//     color = color.length == 1 ? '0' + color : color
//     rgb.push(color)
//   }
//   return '#' + rgb.join('')
// }

// Page({
//   onReady: function (res) {
//     //  创建视频上下文
//     this.videoContext = wx.createVideoContext('myVideo')
//   },
//   inputValue: '吐槽，吐槽',   //  输入的弹幕文本
//   //  获取弹幕文本
//   bindInputBlur: function (e) {
//     this.inputValue = e.detail.value
//   },
//   //  发送弹幕
//   bindSendDanmu: function () {
//     this.videoContext.sendDanmu({
//       text: this.inputValue,
//       color: getRandomColor()
//     })
//   },
//   //  播放视频
//   playVideo: function () {
//     this.videoContext.play();
//   },
//   //  暂停视频
//   pauseVideo: function () {
//     this.videoContext.pause();
//   },
//   //  将视频定位到100秒的位置
//   seekVideo: function () {
//     this.videoContext.seek(100);
//   },


//   wx.getSavedFileList({
//     success: function (res) {
//       console.log(res.fileList)
//     }
//   }),


//   wx.getSavedFileInfo({
//     filePath: 'wxfile://store_1245245288o6zAJs2t5tIf5IgXSSAKZjRtz91g1486648006373.pdf',
//     success: function (res) {
//       console.log('文件尺寸：', res.size)
//       console.log('文件创建时间：', res.createTime)
//     }
//   }),


//   wx.getSavedFileList({
//     success: function (res) {
//       if (res.fileList.length > 0) {
//         wx.removeSavedFile({
//           filePath: res.fileList[0].filePath,
//           complete: function (res) {
//             console.log(res)
//           }
//         })
//       }
//     }
//   })


//   wx.downloadFile({
//     url: 'https://geekori.com/download/test.pdf',
//     success: function (res) {
//       var filePath = res.tempFilePath
//       wx.openDocument({
//         filePath: filePath,
//         success: function (res) {
//           console.log('打开文档成功')
//           console.log(res)
//         },
//         fail: function (res) {
//           console.log('fail')
//           console.log(res)
//         },
//         complete: function (res) {
//           console.log('complete')
//           console.log(res)
//         }
//       })
//     },
//     fail: function (res) {
//       console.log('fail')
//       console.log(res)
//     },
//     complete: function (res) {
//       console.log('完成')
//       console.log(res)
//     }
//   })


// })

// Page({
//   data: {
//     key: '',
//     data: ''
//   },
//   //  点击第一个按钮执行的事件函数，用于保存key-value值
//   saveKeyValue: function () {
//     // var that = this;
//     // //  保存key-value值
//     // wx.setStorage({
//     //   key: that.data.key,       //  设置key
//     //   data: that.data.data,     //  设置value
//     //   //  该函数保存成功时调用
//     //   success: function (res) {
//     //     console.log('异步成功保存了key-value值');

//     //   }
//     // })


//     try {
//       //  用同步的方式写入了key-value值
//       wx.setStorageSync(this.data.key, this.data.data)
//       //  只有写入完成后，才会执行后面的语句

//     } catch (e) {
//     }
//   },
//   //  读取key-value值
//   loadKeyValue: function () {
//     // var that = this;
//     // wx.getStorage({
//     //   key: that.data.key, 
//     //       //  通过key读取value
//     //   success: function (res) {
//     //     console.log("key:" + that.data.key),  
//     //     console.log("value："+ res.data)
//     //     that.setData(
//     //       {
//     //         data: res.data           //  获取与key对应的数据（value）
//     //       }
//     //     )
//     //   }
//     // })
//     try {
//       //  用同步的方式读取key-value值
//       var value = wx.getStorageSync(this.data.key)
//       //  只有读取成功，才会获取value值
//       this.setData(
//         {
//           data: value
//         }
//       )
//       console.log(this.data.key + ":" + value);
//     }
//     catch (e) {
//     }
//   },
//   keyChange: function (e) {
//     this.setData({
//       key: e.detail.value
//     })
//   },
//   dataChange: function (e) {
//     this.setData({
//       data: e.detail.value
//     })
//   },

//   getStorageInfo: function () {
//     wx.getStorageInfo({
//       success: function (res) {
//         //  获取已经存储的key的集合
//         console.log(res.keys)
//         //  获取当前存储尺寸
//         console.log(res.currentSize)
//         //  获取可存储的最大尺寸
//         console.log(res.limitSize)
//       }
//     })
//   },


//   removeStorage: function () {
//     // var that = this;
//     // wx.removeStorage({
//     //   key: that.data.key,
//     //   success: function (res) {
//     //     console.log('移除成功')
//     //   }
//     // })

//     try {
//       wx.removeStorageSync(this.data.key)
//       console.log('用同步的方式成功移除key');
//     } catch (e) {
//       // Do something when catch error
//     }

//   },

//   clearStorage: function () {
//    // wx.clearStorage()
//     try {
//       wx.clearStorageSync()
//     } catch (e) {
//     }
//   }

// })


//  用于格式化经纬度的函数
// function formatLocation(longitude, latitude) {
//   longitude = longitude.toFixed(2)    //  保留两位小数
//   latitude = latitude.toFixed(2)         //  保留两位小数
//   return {
//     longitude: longitude.toString().split('.'),
//     latitude: latitude.toString().split('.')
//   }
// }
// Page({
//   data: {
//     location: ''

//   },
//   onClick: function () {
    
    // wx.chooseLocation({
    //   success: function (res) {
    //     console.log('位置名称：' + res.name)
    //     console.log('详细地址：' + res.address)
    //     console.log('纬度：' + res.latitude)
    //     console.log('经度：' + res.longitude)
    //   }
    // })



    // var that = this
    // //  获取当前的位置
    // wx.getLocation({
    //   success: function (res) {
    //     console.log(res)
    //     that.setData({
    //       location: formatLocation(res.longitude, res.latitude)
    //     })
    //     console.log(this.data.location)
    //   }
    // })


  //   wx.getLocation({
  //     type: 'gcj02', //返回可以用于wx.openLocation的经纬度
  //     success: function (res) {
  //       var latitude = res.latitude
  //       var longitude = res.longitude
  //       wx.openLocation({
  //         name: '沈阳',
  //         address: '市府广场',
  //         latitude: latitude,
  //         longitude: longitude,
  //         scale: 15
  //       })
  //     }
  //   })
  // }
// })


Page({
  onReady: function (e) {
    // 使用 wx.createMapContext 获取 map 上下文 
    this.mapCtx = wx.createMapContext('myMap')
  },
  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function (res) {
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  }
  ,
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  }
}
)