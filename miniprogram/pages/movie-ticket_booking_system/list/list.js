//index.js
Page({
  data: {
    films: [],    //  电影对象列表
    loading: false,
    windowHeight: 0,
    windowWidth: 0
  },

 
  onLoad: function () {
    this.setData({
      loading: false
    })
  },
  onShow: function () {
    var that = this
    wx.request({
      //模拟的API接口，读者可以更换实际的API接口，或本地接口
     // url: 'http://geekori.cn/list.json',
      url:'http://m.maoyan.com/ajax/movieOnInfoList?token=',
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
       
        //  成功获取电影列表数据，并将这些数据更新到films数组中
        var movieList = JSON.stringify( res.data.movieList)
        var movieList1 = movieList.replace(/w.h/g, '128.80')
        console.log('----' + movieList1)
        var movieList2 = JSON.parse(movieList1)
        that.setData({
          films: movieList2,
          loading: true
        })
      }
    })
    //  获取窗口的宽度和高度，用来设置<scroll-view>组件的尺寸
    wx.getSystemInfo({
      success: (res) => {
        that.setData({
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth
        })
      }
    })
  },
 
})