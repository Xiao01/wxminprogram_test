Page({
  onReady: function() {
    //  创建画布上下文
    this.context = wx.createCanvasContext('canvas')
  },
  draw: function() {
    this.context.moveTo(1, 1)
    //  绘制直线
    this.context.lineTo(100, 1)
    this.context.setFillStyle('yellow')
    //  绘制矩形
    this.context.rect(10, 20, 150, 75)

    this.context.moveTo(250, 50)
    //  绘制圆，其中300和75是圆心坐标，50是圆的半径，0是起始角度，
    //  2 * Math.PI是结束角度，正好是一周，所以绘制一个圆
    this.context.arc(300, 50, 50, 0, 2 * Math.PI)
    this.context.fill()
    //  设置文字颜色 
    this.context.setFillStyle('blue')
    //  设置文字字号
    this.context.setFontSize(20)
    //  绘制文字 
    this.context.fillText('极客起源', 20, 160)
    //  绘制文字
    this.context.fillText('http://geekori.cn', 150, 200)
    //  绘出当前路径的边框
    this.context.stroke()
    //  开始绘制图形
    this.context.draw()

  },
  // 绘制二次方贝塞尔曲线
  drawQuadraticCurveTo: function() {
    // 绘制第一个点（红色）
    this.context.beginPath()
    this.context.arc(20, 20, 10, 0, 2 * Math.PI)
    this.context.setFillStyle('red')
    this.context.fill()
    //  绘制第二个点（绿色）
    this.context.beginPath()
    this.context.arc(200, 20, 10, 0, 2 * Math.PI)
    this.context.setFillStyle('green')
    this.context.fill()
    //  绘制第三个点（蓝色）
    this.context.beginPath()
    this.context.arc(20, 100, 10, 0, 2 * Math.PI)
    this.context.setFillStyle('blue')
    this.context.fill()
    //  设置绘制的直线和曲线颜色是黑色
    this.context.setFillStyle('black')


    // 绘制辅助线
    this.context.beginPath()
    this.context.moveTo(20, 20)
    this.context.lineTo(20, 100)
    this.context.lineTo(200, 20)
    this.context.setStrokeStyle('#AAAAAA')
    this.context.stroke()

    // 绘制二次方贝塞尔曲线
    this.context.beginPath()
    this.context.moveTo(20, 20)
    this.context.quadraticCurveTo(20, 100, 200, 20)
    this.context.setStrokeStyle('black')
    this.context.stroke()
    this.context.draw()
  },


  //绘制三次方贝塞尔曲线
  drawBezierCurveTo: function() {
    //  绘制第一个点（红色）
    this.context.beginPath()
    this.context.arc(20, 20, 12, 0, 2 * Math.PI)
    this.context.setFillStyle('red')
    this.context.fill()
    //  绘制第二个点（绿色）
    this.context.beginPath()
    this.context.arc(200, 20, 12, 0, 2 * Math.PI)
    this.context.setFillStyle('green')
    this.context.fill()
    //  绘制第三个和第四个点（蓝色）
    this.context.beginPath()
    this.context.arc(20, 100, 12, 0, 2 * Math.PI)
    this.context.arc(200, 100, 12, 0, 2 * Math.PI)
    this.context.setFillStyle('blue')
    this.context.fill()

    this.context.setFillStyle('black')


    // 绘制辅助线
    this.context.beginPath()
    this.context.moveTo(20, 20)
    this.context.lineTo(20, 100)
    this.context.lineTo(150, 75)

    this.context.moveTo(200, 20)
    this.context.lineTo(200, 100)
    this.context.lineTo(70, 75)
    this.context.setStrokeStyle('#AAAAAA')
    this.context.stroke()

    // 开始绘制三次方贝塞尔曲线
    this.context.beginPath()
    this.context.moveTo(20, 20)
    this.context.bezierCurveTo(20, 100, 200, 100, 200, 20)
    this.context.setStrokeStyle('black')
    this.context.stroke()

    this.context.draw()
  },
  //绘制阴影
  drawShallow: function() {
    this.context.setFillStyle('red')
    this.context.setShadow(20, 20, 2, 'blue') //阴影偏移的X，Y轴数值,阴影模糊度,颜色
    this.context.fillRect(30, 30, 250, 150)
    this.context.draw()
  },
  //绘制图片
  drawImage: function() {
    var that = this;
    wx.chooseImage({
      success: function(res) {
        that.context.drawImage(res.tempFilePaths[0], 0, 0, )
        that.context.draw()
      }
    })
  },

  //缩放图像
  drawScale: function() {
    this.context.strokeRect(10, 10, 25, 25)
    this.context.scale(2, 2)
    this.context.strokeRect(5, 5, 25, 25)
    this.context.scale(1.5, 1.5)
    this.context.strokeRect(10, 10, 25, 25)
    this.context.scale(0.5, 0.5)
    this.context.strokeRect(10, 10, 25, 25)
    this.context.draw()
  },

  //下面的代码绘制了 3 个矩形，并且旋转了后两个矩形的角度。

  drawRotate: function() {
    this.context.strokeRect(100, 10, 150, 100)
    this.context.rotate(20 * Math.PI / 180)
    this.context.strokeRect(100, 10, 150, 100)
    this.context.rotate(-40 * Math.PI / 180)
    this.context.strokeRect(100, 10, 150, 100)
    this.context.draw()
  },
//改变原坐标
  drawTranslate: function () {
    this.context.strokeRect(10, 10, 150, 100)
    this.context.translate(20, 20)
    this.context.strokeRect(10, 10, 150, 100)
    this.context.translate(40, 40)
    this.context.strokeRect(10, 10, 150, 100)
    this.context.draw()
  },

  //渐变
  drawGradient: function () {
    const gradient1 = this.context.createLinearGradient(0, 100, 10, 0)
    //  开始颜色
    gradient1.addColorStop(0, 'red')
    //  结束颜色
    gradient1.addColorStop(1, 'white')

    // 用渐变方式填充矩形
    this.context.setFillStyle(gradient1)
    //  绘制矩形
    this.context.fillRect(10, 10, 200,200)
    this.context.draw()
  },
//圆形渐变对象
  drawGradient2: function () {
    const gradient2 = this.context.createCircularGradient(75, 75, 75)
    gradient2.addColorStop(0, 'red')
    gradient2.addColorStop(1, 'white')

    // 开始绘制渐变效果
    this.context.setFillStyle(gradient2)
    this.context.fillRect(10, 10, 150, 150)
    this.context.draw()
  }

})