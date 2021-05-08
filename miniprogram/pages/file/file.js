// pages/file/file.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  open1: function(){
    console.log(1)
    wx.showLoading({
      title: '正在加载文件.....',
    })
    wx.cloud.downloadFile({
      fileID: 'cloud://lsz-volunteer-j0gsc.6c73-lsz-volunteer-j0gsc-1302312601/国务院办公厅关于转发国家发展改革委住房城乡建设部生活垃圾分类制度实施方案的通知_政府信息公开专栏.pdf',
      success: res=>{
        console.log(2)
        const filePath = res.tempFilePath
        wx.openDocument({
          filePath: filePath,
          success: function (res) {
            wx.hideLoading()
            console.log('打开文档成功')
          }
        })
      },
      fail:err=>{
      }
    })
  },
  open2: function(){
    console.log(1)
    wx.showLoading({
      title: '正在加载文件.....',
    })
    wx.cloud.downloadFile({
      fileID: 'cloud://lsz-volunteer-j0gsc.6c73-lsz-volunteer-j0gsc-1302312601/图解：国务院办公厅关于转发国家发展改革委住房城乡建设部生活垃圾分类制度实施方案的通知_图解图表_中国政府网.pdf',
      success: res=>{
        console.log(2)
        const filePath = res.tempFilePath
        wx.openDocument({
          filePath: filePath,
          success: function (res) {
            wx.hideLoading()
            console.log('打开文档成功')
          }
        })
      },
      fail:err=>{
      }
    })
  },
  open3: function(){
    //console.log(1)
    wx.showLoading({
      title: '正在加载文件.....',
    })
    wx.cloud.downloadFile({
      fileID: 'cloud://lsz-volunteer-j0gsc.6c73-lsz-volunteer-j0gsc-1302312601/住房城乡建设部加快推进生活垃圾分类工作_部门政务_中国政府网.pdf',
      success: res=>{
        //console.log(2)
        const filePath = res.tempFilePath
        wx.openDocument({
          filePath: filePath,
          success: function (res) {
            wx.hideLoading()
            console.log('打开文档成功')
          }
        })
      },
      fail:err=>{
        console.error(err,'打开文件失败')
      }
    })
  },
  open4: function(){
    //console.log(1)
    wx.showLoading({
      title: '正在加载文件.....',
    })
    wx.cloud.downloadFile({
      fileID: 'cloud://lsz-volunteer-j0gsc.6c73-lsz-volunteer-j0gsc-1302312601/南京市人民政府关于实施生活垃圾分类的通告.pdf',
      success: res=>{
        //console.log(2)
        const filePath = res.tempFilePath
        wx.openDocument({
          filePath: filePath,
          success: function (res) {
            wx.hideLoading()
            console.log('打开文档成功')
          }
        })
      },
      fail:err=>{
      }
    })
  },
  open5: function(){
    //console.log(1)
    wx.showLoading({
      title: '正在加载文件.....',
    })
    wx.cloud.downloadFile({
      fileID: 'cloud://lsz-volunteer-j0gsc.6c73-lsz-volunteer-j0gsc-1302312601/市政府办公厅关于印发南京市全面推进生活垃圾强制分类工作方案的通知_政府公报_南京市人民政府.pdf',
      success: res=>{
        //console.log(2)
        const filePath = res.tempFilePath
        wx.openDocument({
          filePath: filePath,
          success: function (res) {
            wx.hideLoading()
            console.log('打开文档成功')
          }
        })
      },
      fail:err=>{
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