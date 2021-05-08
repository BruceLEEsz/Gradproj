//初始化db
const db = wx.cloud.database()

Page({
  data: {
    /**
     * 标题相关
     */
    //type标识查询种类
    type: 1,
    title:"",
    /**
     * 查询记录相关
     */
    //db每次只能查询20条数据，因此limit设为20
    MAX_LIMIT: 20,
    //用于分页查询
    page: 0,
    //dataCount: 0,
    //数据集
    datas: [],



    /**
     * 图片相关
     */
    img: [],
    indicatordots: false,
    //是否显示面板指示点
    autoplay: false,
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(JSON.stringify(options))
    //设置标题
    this.setTitle(options)
    //设置图像
    this.setImg(options)
    //获取数据
    this.onGetData()
  },
  /**
   * 设置标题
   * @param {} options 
   */
  setTitle: function(options){
    this.data.type = options.type
    var typeInt = parseInt(this.data.type)
    //初始化tile
    var title = ""
    switch (typeInt) {
      case 1:
        title = '可回收垃圾'
        break;
      case 2:
        title = '有害垃圾'
        break;
      case 3:
        title = '厨余垃圾'
        break;
      case 4:
        title = '其他垃圾'
        break;
    }
    this.setData({
      title:title
    })
    wx.setNavigationBarTitle({
      title: title,
    })
  },
  setImg: function(options){
    this.data.type = options.type
    var typeInt = parseInt(this.data.type)
    //初始化tile
    var img = []
    switch (typeInt) {
      case 1:
        this.onLoadImg(options,"可回收")
        break;
      case 2:
        this.onLoadImg(options,"有害")
        break;
      case 3:
        this.onLoadImg(options,"厨余")
        break;
      case 4:
        this.onLoadImg(options,"其他")
        break;
    }
    this.setData({
      img:img
    })
  },
  /**
   * 加载数据库
   * @param {} options 
   */
  onLoadImg: function (options,name) {
    let that = this
    db.collection('swiper').where({
      name:name
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
  },
  /**
   * 图片获取
   * @param {*} e 
   */
  imgshow: function (e) {
    var width = wx.getSystemInfoSync().windowWidth
    console.log(width)
    //获取可使用窗口宽度
    var imgheight = e.detail.height
    console.log(imgheight)
    //获取图片实际高度
    var imgwidth = e.detail.width
    console.log(imgwidth) 
    //获取图片实际宽度
    var height = width * imgheight / imgwidth + "px"
    console.log(height)
    //计算等比swiper高度
    this.setData({
      height: height
    })
  },
  /**
   * 获取数据
   */
  onGetData: function () {
    wx.showLoading({
      title: '正在加载数据中.....',
    })
    //console.log("num1", this.data.dataCount)
    //console.log("num2", this.data.page * this.data.MAX_LIMIT)
    var that = this
    //初始化数据
    if (this.data.page == 0) {
      this.data.datas = []
    }
    //每次skip已查询的记录，同时获取20条数据
    var datas = db.collection('product').skip(this.data.page * this.data.MAX_LIMIT).limit(this.data.MAX_LIMIT).where({
      sortId: parseInt(that.data.type)
    }).get({
      success: function (res) {
        console.log(res.data)
        wx.hideLoading()
        that.data.page = that.data.page + 1
        for (var i = 0; i < res.data.length; i++) {
          that.data.datas.push(res.data[i])
        }
        that.setData({
          datas: that.data.datas
        })
      },
      fail: res => {
        wx.hideLoading()
        wx.showToast({
          title: '数据加载失败',
          icon: "none"
        })
      }
    })
  },
  /**
   * 下拉刷新
   */
  onPullDownRefresh: function () {
    this.data.page = 0
    this.onGetData()
  },
  /**
   * 上拉触底加载
   */
  onReachBottom: function () {
    //获取总数
    /* var that = this
    db.collection('product').where({
      sortId: parseInt(this.data.type)
    }).count({
      success: function (res) {
        console.log(res.total)
        this.setData({
          dataCount: res.total
        })
        console.log("1", this.data.dataCount)
        console.log("2", this.data.page * this.data.MAX_LIMIT)
        if (that.data.dataCount < that.data.page * that.data.MAX_LIMIT) {
          wx.hideLoading()
          wx.showToast({
            title: '数据已经加载完',
            icon: "none"
          })
          return
        }
      },
      fail: function (res) {
        console.log("获取总数失败")
      }
    }) */
    this.onGetData()
  },
})