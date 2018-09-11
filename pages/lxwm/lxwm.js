// pages/lxwm/lxwm.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phoneNumber:"400-2135-5455",
    latitude: 30.2889500000,
    longitude: 120.2289800000,
    markers: [{
      id: 1,
      latitude: 30.2889500000,
      longitude: 120.2289800000,
      name: '杭州市江干区彭埠经济合作社'
    }],
    covers: [{
      latitude: 30.2889500000,
      longitude: 120.2289800000,
      iconPath: '../images/location.png'
    }, 
    {  
      latitude: 30.2889500000,
      longitude: 120.2289800000,
      iconPath: '../images/location.png'
    }]
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  // 拨打电话
  makePhone: function () {
    var phone = this.data.customer_number;
    // if (!phone) {
    //   app.showModal('未设置电话！');
    //   return;
    // }
    wx.makePhoneCall({
      phoneNumber: this.data.phoneNumber, //仅为示例，并非真实的电话号码
      success: function (res) {
        console.log(res);
      },
      // fail: function () {
      //   app.showModal('拨打失败，号码已复制粘贴板！');
      //   wx.setClipboardData({
      //     data: phone,
      //   });
      // }
    })
  },
})