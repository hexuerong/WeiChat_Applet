//app.js
App({
  onLaunch: function () {
    console.log('app onLaunch');
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }else{
          /* wx.openSetting({//打开设置，显示小程序已经向用户请求过的权限
            success: res => {
              console.log('')
            },
            fail: msg => {

            }
          }); */
          /* wx.authorize({
            scope: 'scope.userInfo',
            success: res => {

            },
            fail: msg => {

            }
          }); */
        }
      }
    })
  },
  onShow: function () {
    console.log('app onShow');
  },
  onHide: function () {
    //比如在游戏在后台运行的时候，是否需要保存一下游戏进度等。或者类似订单信息这样的情况。
    console.log('app onHide');
  },
  onError: function () {
    console.log('app onError');
  },
  onPageNotFound: function () {
    console.log('app onPageNotFound');
  },
  globalData: {
    userInfo: null
  }
})