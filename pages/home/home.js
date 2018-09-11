//pages/MQindex/index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 2000,
    duration: 1000,
   
    APPHid: false,
    SCHid: false,
    userInfo: {},
  },
  onLoad: function () {
    
  },
  // 页面跳转
  tzgg: function(){
    wx.navigateTo({
      url: '../tzgg/tzgg'
    })
  },
  zwgk: function () {
    wx.navigateTo({
      url: '../zwgk/zwgk'
    })
  },
  djhd: function () {
    wx.navigateTo({
      url: '../djhd/djhd'
    })
  },
  xghd: function () {
    wx.navigateTo({
      url: '../xghd/xghd'
    })
  },


  //取消授权
  Qxkksq: function () {
    var that = this;
    that.setData({
      APPHid: true,
      SCHid: true
    })
  },

  //获取用户信息
  onGotUserInfo: function (e) {
    var that = this;
    that.setData({
      APPHid: true,
      SCHid: true
    })
    if (e.detail.userInfo) {
      //用户按了允许授权按钮
      wx.setStorageSync('avatarUrl', e.detail.userInfo.avatarUrl)
      wx.setStorageSync('nickName', e.detail.userInfo.nickName)
      that.setData({
        modelHid: true,
        userInfo: e.detail.userInfo
      }) 
    } else {
      //用户按了拒绝按钮
      that.setData({
        modelHid: true
      })
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '小程序必须获取您的头像昵称才能正常使用',
        success: function (res) {
          if (res.confirm) {
            that.setData({
              modelHid: false
            })
          }
        }
      })
    }

  },

})
