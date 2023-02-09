// 简单版本的封装过的微信请求的代码
// 回调函数
export const request=(params)=>{
  // resolve成功时执行的回调函数，reject失败时执行的回调函数
  return new Promise((resolve,reject)=>{
    wx.request({
      // 里面的参数通过调用request函数传递参数的方式进行使用
      ...params,
      success:(result)=>{
        resolve(result);
      },
      fail:(err)=>{
        reject(err);
      }
    })
  })
}