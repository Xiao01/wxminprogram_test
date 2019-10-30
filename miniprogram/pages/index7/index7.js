Page({
  onReady: function () {
    //  通过createAnimation方法的参数，可以传入动画完成时间，单位是毫秒，默认是400毫秒
    this.animation = wx.createAnimation()
  },
  rotate: function () {
    //  播放旋转动画，rotate方法从参数需要指定从原点顺时针旋转的角度，取值范围是-360到360
    this.animation.rotate(Math.random() * 720 - 360).step()
    this.setData({ animation: this.animation.export() })
  },
  scale: function () {
    //  播放缩放动画，scale方法需要指定在X和Y轴缩放的倍数
    this.animation.scale(Math.random() * 2).step()
    this.setData({ animation: this.animation.export() })
  },
  translate: function () {
    //  播放移动动画，translate方法需要传入X和Y轴移动的偏移量
    this.animation.translate(Math.random() * 100 - 50, Math.random() * 100 - 50).step()
    this.setData({ animation: this.animation.export() })
  },
  skew: function () {
    //  播放倾斜动画，skew第一个参数表示X轴坐标延顺时针倾斜ax度，第二个参数在Y轴倾斜ay度
    this.animation.skew(Math.random() * 90, Math.random() * 90).step()
    this.setData({ animation: this.animation.export() })
  },
  //  同时播放旋转和缩放动画
  rotateAndScale: function () {
    this.animation.rotate(Math.random() * 720 - 360)
      .scale(Math.random() * 2)
      .step()
    this.setData({ animation: this.animation.export() })
  },
  //  先播放旋转动画，再播放缩放动画，没播放一个动画，都要调用step方法
  rotateThenScale: function () {
    this.animation.rotate(Math.random() * 720 - 360).step()
      .scale(Math.random() * 2).step()
    this.setData({ animation: this.animation.export() })
  },
  //  同时播放所有的动画
  all: function () {
    this.animation.rotate(Math.random() * 720 - 360)
      .scale(Math.random() * 2)
      .translate(Math.random() * 100 - 50, Math.random() * 100 - 50)
      .skew(Math.random() * 90, Math.random() * 90)
      .step()
    this.setData({ animation: this.animation.export() })
  },
  //  顺序播放所有的动画
  allInQueue: function () {
    this.animation.rotate(Math.random() * 720 - 360).step()
      .scale(Math.random() * 2).step()
      .translate(Math.random() * 100 - 50, Math.random() * 100 - 50).step()
      .skew(Math.random() * 90, Math.random() * 90).step()
    this.setData({ animation: this.animation.export() })
  },
  //  恢复初始状态
  reset: function () {
    this.animation.rotate(0, 0)
      .scale(1)
      .translate(0, 0)
      .skew(0, 0)
      .step()
    this.setData({ animation: this.animation.export() })
  }
}
)