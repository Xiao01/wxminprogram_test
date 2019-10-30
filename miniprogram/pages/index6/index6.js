Page({
  data: {
    value: 1
  },
  onLoad: function (option) {
    //  获取导航时传过来的参数值，并将该参数值设置为当前页面的标题
    wx.setNavigationBarTitle({ title: option.title + "page" })
  },
  onClick_navigateBack: function () {
    var that = this;
    //  返回指定的页面
    wx.navigateBack({
      delta: that.data.value
    })
  },
  charInput: function (res) {
    this.setData(
      {
        value: parseInt(res.detail.value)  //  必须转换为int类型的值
      }
    )
  },
  //  导航到下一个新的页面
  onClick_navigateTo: function () {
    wx.navigateTo({
      url: '../index1/index1?title=redirectTo',
    })
  }
}
)