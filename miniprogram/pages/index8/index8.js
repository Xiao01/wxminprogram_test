Page({
  onReady: function () {
    //  创建画布上下文
    this.context = wx.createCanvasContext('canvas')
  },
  draw: function () {
    this.context.moveTo(10, 10)
    //  绘制直线
    this.context.lineTo(100, 10)
    this.context.setFillStyle('yellow')
    //  绘制矩形
    this.context.rect(10, 50, 150, 75)

    this.context.moveTo(300, 50)
    //  绘制圆，其中300和75是圆心坐标，50是圆的半径，0是起始角度，
    //  2 * Math.PI是结束角度，正好是一周，所以绘制一个圆
    this.context.arc(300, 75, 50, 0, 2 * Math.PI)
    this.context.fill()
    //  设置文字颜色 
    this.context.setFillStyle('blue')
    //  设置文字字号
    this.context.setFontSize(20)
    //  绘制文字 
    this.context.fillText('极客起源', 20, 160)
    //  绘制文字
    this.context.fillText('http://geekori.cn', 150, 160)
    //  绘出当前路径的边框
    this.context.stroke()
    //  开始绘制图形
    this.context.draw()
  }
}
)