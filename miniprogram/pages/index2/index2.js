// var initData = '第一行\n第二行'
// Page({
//   data: {
//     text: initData,    //  文本的初始数据
//     color: '#ff0000'   //  文本的初始颜色
//   },
//   extraLine: [],        //  用于保存追加的字符串
//   add: function (e) {
//     //  最近一个新行
//     this.extraLine.push('新行' + (this.extraLine.length + 1));
//     this.setData({
//       text: initData + '\n' + this.extraLine.join('\n')
//     })
//   },
//   remove: function (e) {
//     //  如果有追加的行，从最后一行删除
//     if (this.extraLine.length > 0) {
//       this.extraLine.pop()
//       this.setData({
//         text: initData + '\n' + this.extraLine.join('\n')
//       })
//     }
//   },
//   setColor: function (e) {
//     //  让文本颜色在红色和蓝色之间不断切换
//     if (this.data.color == '#ff0000') {
//       this.setData(
//         {
//           color: '#0000ff'
//         }
//       )
//     }
//     else {
//       this.setData(
//         {
//           color: '#ff0000'
//         }
//       )
//     }
//   }
// })


// Page({
//   data: {
//     iconSize: [20, 30, 40, 50, 60, 70,80,90,100,110,120].reverse(),  //  倒序数组
//     iconColor: [
//       'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
//     ],
//     iconType: [
//       'success', 'info', 'warn', 'waiting', 'safe_success', 'safe_warn',
//       'success_circle', 'success_no_circle', 'waiting_circle', 'circle', 'download',
//       'info_circle', 'cancel', 'search', 'clear'
//     ]
//   }
// })

// var app = getApp()
// Page({
  
//   upper: function (e) {
//     console.log(e)
//   },
//   lower: function (e) {
//     console.log(e)
//   },
//   scroll:function(e)
// {
//    console.log(e.detail)
// },
// })

var app = getApp()
Page({
  data: {
    background: ['green', 'red', 'yellow', 'blue'],
    indicatorDots: true,
    vertical:true,
  },
  change: function (e) {
    console.log(e);
    console.log(e.detail);  // 访问e.detail.current可以获取当前页面的索引
  }
})