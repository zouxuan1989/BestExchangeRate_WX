Page({
  data: {
    exchangeRateList: [],
  },
  onShow: function () {
    var that = this;
    wx.request({
      url: "http://127.0.0.1:8181/sgdToCn/getAll",
      method: 'GET',
      data: {},
      success: function (res) {
        var list = res.data;
        if (list == null) {
          var toastText = 'get info failed' + res.data.errMsg;
          wx.showToast({
            title: toastText,
            icon: '',
            duration: 2000
          })
        }
        else {
          that.setData({
            exchangeRateList:list
          })
        }
      }
    })
  }
})