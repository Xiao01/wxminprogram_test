// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

function jc(n){
  if(n==0||n==1){
    return 1
  }else{
    return n*jc(n-1)
  }
}
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  return {
    jc:jc(event.n)
  }
}