// pages/calendar/calendar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Monday:"",
    Tuesday:"1",
    Wednesday:"2",
    Thursday:"3",
    Friday:"4",
    Saturday:"5",
    Sunday:"6",
    change:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.change=0
    
    this.setData({
      Monday:wx.getStorageSync('Monday'),
      Tuesday:wx.getStorageSync('Tuesday'),
      Wednesday:wx.getStorageSync('Wednesday'),
      Thursday:wx.getStorageSync('Thursday'),
      Friday:wx.getStorageSync('Friday'),
      Saturday:wx.getStorageSync('Saturday'),
      Sunday:wx.getStorageSync('Sunday'),
    })
    //console.log("onload",this.data.Monday)

  },
  onChange:function(){
    this.setData({
      change:1
    })
    console.log(this.data.change)
  },
  onSave:function(){
    this.setData({
      change:0
    })
    console.log(this.data.Monday)
    wx.setStorageSync('Monday', this.data.Monday)
    wx.setStorageSync('Tuesday', this.data.Tuesday)
    wx.setStorageSync('Wednesday', this.data.Wednesday)
    wx.setStorageSync('Thursday', this.data.Thursday)
    wx.setStorageSync('Friday', this.data.Friday)
    wx.setStorageSync('Saturday', this.data.Saturday)
    wx.setStorageSync('Sunday', this.data.Sunday)
    console.log(this.data.change)
    this.onLoad()
  },

  MondayInput:function(e){
    this.data.Monday=e.detail.value
  },
  TuesdayInput:function(e){
    this.data.Tuesday=e.detail.value
  },
  WednesdayInput:function(e){
    this.data.Wednesday=e.detail.value
  },
  ThursdayInput:function(e){
    this.data.Thursday=e.detail.value
  },
  FridayInput:function(e){
    this.data.Friday=e.detail.value
  },
  SaturdayInput:function(e){
    this.data.Saturday=e.detail.value
  },
  SundayInput:function(e){
    this.data.Sunday=e.detail.value
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
})