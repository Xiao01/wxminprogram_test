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


// var app = getApp()
// Page({
//   data: {
//     background: ['green', 'red', 'yellow', 'blue'],
//     indicatorDots: true,
//     vertical:true,
//   },
//   change: function (e) {
//     console.log(e);
//     console.log(e.detail);  // 访问e.detail.current可以获取当前页面的索引
//   }
// }
// var app = getApp()
// Page({
//   data: {
//     background: ['green', 'red', 'yellow', 'blue'],
//     indicatorDots: true,
//     vertical:true,
//     defaultSize:"default",
//     loading:false,
//     plain:false,
//     disabled:false,
//     primarySize:"primary",
//     warnSize:"warn",
//   },
//   change: function (e) {
//     console.log("change")
//     console.log(e);
//     console.log(e.detail);  // 访问e.detail.current可以获取当前页面的索引
//   },
//   default:function(e){
//     this.setData(
//       {
//         defaultSize: this.data['defaultSize'] == 'default'?'mini':'default'
//       }
//     )
//       console.log(this.data['defaultSize'])
//   },

//   setDisabled: function (e) {
//     this.setData({
//       disabled: !this.data.disabled
//     })
//     console.log("setDisabled：" + this.data.disabled)
//   },
//   setPlain: function (e) {
//     this.setData({
//       plain: !this.data.plain
//     })
//     console.log("setPlain：" + this.data.plain)
//   },
//   setLoading: function (e) {
//     this.setData({
//       loading: !this.data.loading
//     })
//     console.log("setLoading：" + this.data.loading)
//   },
// })


// Page({
//   data: {
//     items: [
//       { name: 'shenyang', value: '沈阳', checked: 'true' },
//       { name: 'beijing', value: '北京' },
//       { name: 'hangzhou', value: '杭州' },
//       { name: 'xian', value: '西安' },
//       { name: 'wuhan', value: '武汉' },
//       { name: 'shenzhen', value: '深圳' },
//     ]
//   },
//   checkboxChange: function (e) {
//     console.log('checkbox发生change事件，携带value值为：', e.detail.value)
//   }
// })

// Page({
//   data: {
//     focus: false,
//     inputValue: "",

//     checkboxItems: [
//       { name: 'USA', value: '美国' },
//       { name: 'CHN', value: '中国', checked: 'true' },
//       { name: 'BRA', value: '巴西' },
//       { name: 'JPN', value: '日本', checked: 'true' },
//       { name: 'ENG', value: '英国' },
//       { name: 'FRA', value: '法国' },
//     ],
//     radioItems: [
//       { name: 'USA', value: '美国' },
//       { name: 'CHN', value: '中国', checked: 'true' },
//       { name: 'BRA', value: '巴西' },
//       { name: 'JPN', value: '日本' },
//       { name: 'ENG', value: '英国' },
//       { name: 'FRA', value: '法国' },
//     ],
//     // items: [
//     //   { name: 'shenyang', value: '沈阳', checked: 'true' },
//     //   { name: 'beijing', value: '北京' },
//     //   { name: 'hangzhou', value: '杭州' },
//     //   { name: 'xian', value: '西安' , margin:'10px',},
//     //   { name: 'wuhan', value: '武汉' },
//     //   { name: 'shenzhen', value: '深圳' },
//     // ],
//     items: [
//       { name: 'USA', value: '美国', margin: 10 },
//       { name: 'CHN', value: '中国', checked: 'true', margin: 20 },
//       { name: 'BRA', value: '巴西', margin: 30 },
//       { name: 'JPN', value: '日本', margin: 40 },
//       { name: 'ENG', value: '英国', margin: 50 },
//       { name: 'FRA', value: '法国', margin: 60 },
//     ]
//   },
//   bindButtonTap: function () {
//     this.setData({
//       focus: true
//     })
//   },
//   bindKeyInput: function (e) {
//     this.setData({
//       inputValue: e.detail.value
//     })
//   },
//   //  当输入<和>是，会自动转换为&lt;和&gt;
//   bindReplaceInput: function (e) {
//     var value = e.detail.value;
//     var pos = e.detail.cursor;
//     if (pos != -1) {
//       //光标在中间
//       var left = e.detail.value.slice(0, pos);
//       //计算光标的位置
//       pos = left.replace(/</g, '&lt;').replace(/>/g, '&gt;').length;
//     }
//     //直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
//     return {
//       value: value.replace(/</g, '&lt;').replace(/>/g, '&gt;'),
//       cursor: pos
//     }
//   },
//   bindHideKeyboard: function (e) {
//     if (e.detail.value === "close") {
//       //收起键盘
//       wx.hideKeyboard();
//     }
//   },
//   //  相应radio组件变化的函数
//   radioChange: function (e) {
//     console.log('radio发生change事件，携带value值为：', e.detail.value)
//   }
// })


// var pageData = {
//   data: {
//     switch1Checked: true,
//     switch2Checked: false,
//   }
//   ,
//   switchChange: function (e) {
//     console.log(e.detail.value);
//   }
// }
// Page(pageData) 


Page({
  data:{
    index:1,
    array:["东京","西京","南京","北京"],
    time:"12:25",
    _date:"2016",
  },
  bindPickerChange:function(e){
    this.setData({
      index: e.detail.value
    });
  },
  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    });
  },
  bindDateChange: function (e) {
    this.setData({
      _date: e.detail.value
    });
  },

})