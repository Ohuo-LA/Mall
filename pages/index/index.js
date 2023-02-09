// // index.js
// 0 用来发送请求的方法 一定要把路径补全
// import {request} from "../../request/index";


Page({
  data:{
    banners:[
      {'image_src':'../../image/1.JPG'},
      {'image_src':'../../image/2.JPG'},
      {'image_src':'../../image/3.JPG'}
    ],
    // 轮播图数组
    swiperList:[]
  },
  onLoad(options){
    // // 1. 发送异步请求获取轮播图数据
    // wx-wx.request({
    //   url: 'url',
    //         success: (result) => {
    //     // console.log(result);
    //     // 如果请求接口数据
    //   this.setData({
    //     swiperList:result.data.message
    //   })
    //   // 递进请求优化可以利用ES6的promise
    //   wx.request({
    //     url: 'url',
    //   })
    //   }
    // })

//     request({ url:"" })
//     .then(result=>{
//       this.setData({
//           swiperList:result.data.message
//       })
//     })
//     .then()
  }
})




// // 获取应用实例
// const app = getApp()

// Page({
//   data: {
//     motto: 'Hello World',
//     userInfo: {},
//     hasUserInfo: false,
//     canIUse: wx.canIUse('button.open-type.getUserInfo'),
//     canIUseGetUserProfile: false,
//     canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
//   },
//   // 事件处理函数
//   bindViewTap() {
//     wx.navigateTo({
//       url: '../logs/logs'
//     })
//   },
//   onLoad() {
//     if (wx.getUserProfile) {
//       this.setData({
//         canIUseGetUserProfile: true
//       })
//     }
//   },
//   getUserProfile(e) {
//     // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
//     wx.getUserProfile({
//       desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
//       success: (res) => {
//         console.log(res)
//         this.setData({
//           userInfo: res.userInfo,
//           hasUserInfo: true
//         })
//       }
//     })
//   },
//   getUserInfo(e) {
//     // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
//     console.log(e)
//     this.setData({
//       userInfo: e.detail.userInfo,
//       hasUserInfo: true
//     })
//   }
// })
