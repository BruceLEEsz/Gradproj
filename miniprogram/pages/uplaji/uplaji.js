// pages/upload/upload.js

const db = wx.cloud.database()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    context: '',

  },
  textareaAInput: function (e) {
    this.data.context = e.detail.value
    console.log(this.data.context)
  },
  upload: function () {
    db.collection('laji_buchong').add({
      data: {
        context: this.data.context
      },
      success(res) {
        console.log("成功", res);
        wx.showToast({
          title: '提交成功',
        })
      },
      fail(res) {
        console.log("失败", res);
        wx.showToast({
          title: '提交失败',
        })
      }
    })
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

  }
})