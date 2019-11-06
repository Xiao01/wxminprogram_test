Page({
  data: {
    films: [],
    loading: false,
    title: '正在热映',
    video: 'video-hide',   //  设置<video>组件显示或隐藏使用的样式
    datails: '',
    windowWidth: 0
  },
  onLoad: function (options) {
    //  每一部电影对应的细节Url
    var id = 'http://m.maoyan.com/asgard/movie/' + options.id + '.json'
    this.setData({
      title: options.titles
    })
    var that = this
    //  请求服务端获取电影细节列表，其中包含电影预告视频的播放链接
    wx.request({
      url: id,
      data: {
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log("--------------"+res.data)
        that.setData({
          films: res.data.data,
          loading: true
        })
        //  过滤掉电影详细描述的<p>、</p>等标签
        var pages = that.data.films.MovieDetailModel.dra
        pages = pages.replace(/<.*?>/ig, "")
        that.setData({
          details: pages
        })
        console.log(pages)
      }
    })
  },
  //  设置导航标题栏等信息
  onReady: function () {
    var that = this
    wx.setNavigationBarTitle({
      title: that.data.title
    })
    wx.getSystemInfo({
      success: (res) => {
        that.setData({
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth
        })
      }
    })
  },
  //  点击“立即支付”按钮执行的方法
  pay: function () {
    console.log('pay');
    wx.requestPayment({
      'timeStamp': '',
      'nonceStr': '',
      'package': '',
      'signType': 'MD5',
      'paySign': '',
      'success': function (res) {
        console.log('success');
      },
      'fail': function (res) {
        console.log('fail');
      }
    })
  },
  //  显示<video>组件，也就是切换<video>组件使用的样式
  vShow: function () {
    this.setData({
      video: 'video-show'
    })
  },
  //  隐藏<video>组件，也就是切换<video>组件使用的样式

  vHid: function () {
    this.setData({
      video: 'video-hide'
    })
  }
})