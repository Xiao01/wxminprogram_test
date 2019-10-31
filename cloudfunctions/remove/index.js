// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
const _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    return await db.collection('test').where({
      _openid: 'oK1SB4tF0GrSzxSZEKWCQTaY3DOw'   //  删除done字段为true的所有文档
    }).remove()
    console.log("success")
  } catch (e) {
    console.error(e)
  }
}