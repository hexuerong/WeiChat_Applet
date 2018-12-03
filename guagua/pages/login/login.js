Page({

  /**
   * 页面的初始数据
   */
  data: {
    email: '',
    password: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
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

  login: function (e) {//登录按钮
    //显示一个进度条
    wx.showToast({
      'title': '请求登录中',
      'icon': 'loading',
      'duration': 10000
    });
    //网络请求开始
    wx.request({
      url: '',
      method: 'get',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res);
      },
      fail: function (msg) {
        console.log(msg);
        wx.showModal({
          title: '请求出错',
          content: '请检查你的请求代码',
          // showCancel: false,
          success: function () {

          }
        });
      },
      complete: function () {
        wx.hideToast();
      }
    });
  },

  bindemailInput: function (e) {//邮箱输入
    this.setData({
      email: e.detail.value
    });
  },

  bindpasswordInput: function (e) {//密码输入
    this.setData({
      password: e.detail.value
    });
  },

  wxLogin: function (e) {//微信登录
    /* wx.login({
      success: res => {
        console.log(res);
        if(res.code){
          //将code发送给开发者服务器
        }
      },
      fail: msg => {

      }
    }); */
  },
})