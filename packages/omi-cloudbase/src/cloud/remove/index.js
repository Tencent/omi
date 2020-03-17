// 云函数模板
const cloud = require('wx-server-sdk')

// 初始化 cloud
cloud.init()

const db = cloud.database()
const _ = db.command

exports.main = async (event, context) => {
  try {
    return await db.collection('todo').where({
      done: true
    }).remove()
  } catch (e) {
    console.error(e)
  }
}