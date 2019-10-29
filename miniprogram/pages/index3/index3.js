// miniprogram/pages/index3/index3.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageSrc: '',
    imageList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onClick: function () {
    var that = this;
    wx.chooseImage({
      count: 10, // 最多只允许选择一个图像
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {

        that.setData(
          {
            imageSrc: res.tempFilePaths[0] ,   //  显示选中的第一个图像
            imageList: res.tempFilePaths
          }
        )
        //  输出返回的路径个数
        console.log(res.tempFilePaths.length)
      }
    })    
  },

  previewImage: function (e) {
    var current = e.target.dataset.src

    wx.previewImage({

      urls: this.data.imageList
    })
  },

imageInfo: function (e) {
    wx.getImageInfo({
      src: 'index3.jpeg',
      success: function (res) {
        console.log(res)
        console.log(res.width)      //  输出图像的宽度
        console.log(res.height)     //  输出图像的高度
        console.log(res.path)       //  输出图像的路径 
      }
    })
  }


})