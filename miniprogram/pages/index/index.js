const db = wx.cloud.database()

// miniprogram/pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: [],
    sort_img:[],
    indicatordots: true,
    //是否显示面板指示点
    autoplay: true,
    //是否自动切换
    interval: 5000,
    //自动切换时间间隔
    duration: 500,
    //滑动动画时长
    color: '#ffffff',
    //当前选中的指示点颜色
    height: ''
    //swiper高度
  },
  imgshow: function (e) {
    var width = wx.getSystemInfoSync().windowWidth
    //获取可使用窗口宽度
    var imgheight = e.detail.height
    //获取图片实际高度
    var imgwidth = e.detail.width 
    //获取图片实际宽度
    var height = width * imgheight / imgwidth + "px"
    //计算等比swiper高度
    this.setData({
      height: height
    })
  },
  onClick:function(e){
    console.log(JSON.stringify(e))
    var index = e.currentTarget.dataset.index
    var indexClick=0;
    switch (index){
      case 0:
      indexClick=1
      break;
       case 1:
        indexClick = 2
      break;
      case 2:
        indexClick = 3
        break;
      case 3:
        indexClick = 4
        break;
    }
    wx.navigateTo({
      url: '/pages/filter/filter?type=' + indexClick,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    db.collection('swiper').where({
      name:"宣传图"
    }).get({
      success:function(res){
        console.log("数据库swiper获取成功",res)
        that.setData({
          img:res.data
        })
      },
      fail:function(res){
        console.log("数据库swiper获取失败",res)
      }
    })
    db.collection('sort_img').get({
      success:function(res){
        console.log("数据库sort_img获取成功",res)
        that.setData({
          sort_img:res.data
        })
      },
      fail:function(res){
        console.log("数据库sort_img获取失败",res)
      }
    })
  },
  goSearch: function() {
    console.log("go")
    wx.navigateTo({
      url: '/pages/search/search',
    })
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