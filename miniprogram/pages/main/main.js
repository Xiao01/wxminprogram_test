// miniprogram/pages/main/main.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  db: undefined,
  test: undefined,
  data: {
    name: '',
    age: '',
    recordId: '',
    nameResult: '',
    ageResult: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    //  调用login运含税
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        // 获取并保存openid
        app.globalData.openid = res.result.openid
        //  初始化minicloud环境
        wx.cloud.init({
          env: 'cloud'
        })
        //  获取并保存数据库
        that.db = wx.cloud.database()
        //  将数据库保存在全局变量中
        app.globalData.db = that.db
        //  获取名为test的文档集合
        that.test = that.db.collection('test')
        //  保存test文档集合
        app.globalData.test = that.test
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
        wx.navigateTo({
          url: '../deployFunctions/deployFunctions',
        })
      }
    })
  },
  // 单击“插入数据”按钮调用该函数
  insertData: function() {
    var that = this
    try {
      //  将年龄转换为整数类型值
      var age = parseInt(that.data.age)
      //  如果输入的年龄不是数字，会显示错误对话框，并退出该函数
      if (isNaN(age)) {
        //  显示错误对话框
        wx.showModal({
          title: '错误',
          content: '请输入正确的年龄',
          showCancel: false
        })
        return
      }
      //  向test数据集添加记录
      this.db.collection('test1').add({
        // data 字段表示需新增的 JSON 数据
        data: {
          name: that.data.name,
          age: age
        },
        //  数据插入成功，调用该函数
        success: function(res) {
          console.log(res)
          wx.showModal({
            title: '成功',
            content: '成功插入记录',
            showCancel: false
          })
          that.setData({
            name: '',
            age: ''
          })
        }
      })
    } catch (e) {
      wx.showModal({
        title: '错误',
        content: e.message,
        showCancel: false
      })

    }
  },
  //  单击“查询数据”按钮执行该函数
  queryData: function() {
    var that = this
    //  根据记录ID搜索数据集  
    this.db.collection('test1').doc(this.data.recordId).get({
      // 找到记录集调用
      success: function(res) {
        //  将查询结果显示在页面上  
        that.setData({
          nameResult: res.data.name,
          ageResult: res.data.age
        })

      },
      //  未查到数据时调用
      fail: function(res) {
        wx.showModal({
          title: '错误',
          content: '没有找到记录',
          showCancel: false
        })
      }
    })

  },
  //  下面的函数用于当更新input组件中的值时同时更新对应变量的值
  bindKeyInputName: function(e) {
    this.setData({
      name: e.detail.value
    })
  },
  bindKeyInputAge: function(e) {
    this.setData({
      age: e.detail.value
    })
  },
  bindKeyInputId: function(e) {
    this.setData({
      recordId: e.detail.value
    })
  },


  onClick_InsertDoc1: function() {
    //  插入数据
    app.globalData.test.add({

      data: {
        // _id:'123',  可以省略，系统会自动生成_id属性值      
        description: "这是描述信息",
        publishTime: new Date("2018-11-11"),
        tags: [
          "value1",
          "value2",
          {
            name: 'Bill',
            age: 30
          }
        ],
        // 东经123度，北纬43度             
        location: new app.globalData.db.Geo.Point(123, 43),
        done: false,
        value: null
      },
      success: function(res) {
        console.log(res);
        wx.showModal({
          title: '文档',
          content: '成功插入文档',
          showCancel: false
        })
      },
      fail: function(res) {
        wx.showModal({
          title: "文档",
          content: '插入文档失败：' + res.message,
          showCancel: false
        })
      }
    })
  },

  onClick_InsertDoc2: function() {
    app.globalData.test.add({
        data: {
          description: "这是描述信息",
          publishTime: new Date("2018-11-11"),
          tags: [
            "value1",
            "value2",
            {
              name: 'Bill',
              age: 30
            }
          ],
          // 东经123度，北纬43度             
          location: new app.globalData.db.Geo.Point(123, 43),
          done: false,
          value: null
        }
      })
      .then(res => {
        wx.showModal({
          title: '文档',
          content: '成功插入文档',
          showCancel: false
        })
      })
  },

  onClick_GetDocWithId: function() {
    //  根据唯一索引搜索文档
    app.globalData.test.doc('1c756ce65dbaa92003781e4e32289779').get({
      success: function(res) {
        console.log(res.data)
      }
    })
    //  Promise风格
    app.globalData.test.doc('1c756ce65dbaa92003781e4e32289779').get().then(res => {
      console.log(res)
    })
  },


  onClick_GetAllDoc: function() {
    //  根据唯一索引搜索文档
    app.globalData.test.get({
      success: function(res) {
        console.log(res.data)
      }
    })
    //  Promise风格，输出每一个文档的”_id"属性值
    app.globalData.test.get().then(res => {
      for (var i = 0; i < res.data.length; i++) {
        console.log(res.data[i]._id);
      }
    })
  },
  //多条件查询
  where_select: function() {

    const _value = 'value1'
    app.globalData.test.where({
      tags: _.in(_value)
    }).get({
      success: function(res) {
        console.log(res.data)
      }
    })

    const myOpenID = ['Bill', 'Mike']
    app.globalData.test.where({

        //  根据obj.name属性搜索文档
        obj: {
          name: _.in(myOpenID)
        }
      })
      .get({
        success: function(res) {
          console.log(res.data)
        }
      })
  },
  update_cluld_database: function() {
    const _ = app.globalData.db.command
    app.globalData.test.doc('1c756ce65dba7f42035dd31821dd0676')
      .set({
        // data 传入需要局部更新的数据
        data: {
          // 表示将 done 字段置为 true
          done2: true
        },
        // .update({
        //   // data 传入需要局部更新的数据
        //   data: {
        //     // 表示将 done 字段置为 true
        //     age: _.inc(20)
        //   },
        success: function(res) {
          wx.showModal({
            title: '文档',
            content: '成功更新文档',
            showCancel: false
          })
        }
      })
  },

      onClick_Remove: function() {
        app.globalData.test.doc('1c756ce65dba7f42035dd31821dd0676').remove({
          success: function(res) {
            wx.showModal({
              title: '文档',
              content: '成功删除文档',
              showCancel: false
            })
          }
        })
      }
  

})