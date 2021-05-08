const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    iconList: [{
      icon: 'search',
      color: 'green',
      badge: 0,
      name: '搜索'
    }, {
      icon: 'text',
      color: 'orange',
      badge: 1,
      name: '政策解读'
    }, {
      icon: 'mark',
      color: 'yellow',
      badge: 0,
      name: '完善分类'
    }, {
      icon: 'calendar',
      color: 'olive',
      badge: 0,
      name: '日期提醒'
    }, {
      icon: 'camera',
      color: 'cyan',
      badge: 0,
      name: '图像识别'
    }, {
      icon: 'discoverfill',
      color: 'purple',
      badge: 0,
      name: '快速指引'
    }, {
      icon: 'questionfill',
      color: 'mauve',
      badge: 0,
      name: '帮助'
    }, {
      icon: 'commandfill',
      color: 'purple',
      badge: 0,
      name: '待定'
    }, {
      icon: 'clothesfill',
      color: 'blue',
      badge: 0,
      name: '待定'
    }],
    gridCol: 3,
    skin: false
  },
  onClick: function (e) {
    var index = e.currentTarget.dataset.index
    var indexClick = 0;
    switch (index) {
      case 0:
        wx.navigateTo({
          url: '/pages/search/search',
        })
        break;
      case 1:
        wx.switchTab({
          url: '/pages/file/file',
        })
        break;
      case 2:
        wx.navigateTo({
          url: '/pages/uplaji/uplaji',
        })
        break;
      case 3:
        wx.navigateTo({
          url: '/pages/calendar/calendar',
        })
        break;
      case 4:
        wx.navigateTo({
          url: '/pages/camera/camera',
        })
        break;
      case 5:
        wx.showLoading({
          title: '正在加载文件.....',
        })
        wx.cloud.downloadFile({
          fileID: 'cloud://lsz-volunteer-j0gsc.6c73-lsz-volunteer-j0gsc-1302312601/W02020052745907.pdf',
          success: res => {
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
          fail: err => {}
        })
        break;
      case 6:
        wx.navigateTo({
          url: '/pages/help/help',
        })
        break;
    }
  }
})