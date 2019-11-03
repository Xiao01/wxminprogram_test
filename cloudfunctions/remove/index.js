// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
const _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    return await db.collection('test1').where({
      _openid: 'oK1SB4tF0GrSzxSZEKWCQTaY3DOw'   //  删除done字段为true的所有文档
    }).remove()
    
  } catch (e) {
    console.error(e)
  }
  console.log(JSON.stringify(event) )
  console.log(JSON.stringify(event).errNsg)
  if (JSON.stringify(event).errNsg=="cloud.callFunction:ok"){
    return JSON.stringify(event.result)
  }
}