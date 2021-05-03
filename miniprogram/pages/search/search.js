//初始化数据库
const db = wx.cloud.database()

Page({
    data: {

        //数据查询
        //最大查询量
        MAX_LIMIT: 20,
        //查询页面
        page: 0,
        //查询数据
        datas: [],
        //输入内容
        inputVal: "",

        //图片展示
        gallery: false,
        Img: ""


    },
    onLoad: function (options) {
        this.data.inputVal = ""
        this.data.datas = []
        this.data.page = 0
    },
    onSearch: function (e) {
        //获取页面输入内容
        this.data.inputVal = e.detail.value
        //初始化page
        this.data.page = 0
        this.getData()
    },
    getData: function () {
        wx.showLoading({
            title: '正在加载数据中',
        })
        var that = this
        if (this.data.inputVal == "") {
            this.data.datas = []
            this.data.page = 0
            //return
        }
        if (this.data.page == 0) {
            this.data.datas = []
        }
        //选择product表
        //skip():跳过已查询页面
        //this.data.MAX_LIMIT:本次查询限制数量
        var datas = db.collection('product').skip(this.data.page * this.data.MAX_LIMIT).limit(this.data.MAX_LIMIT).where({
            //正则匹配所输入的内容
            name: db.RegExp({
                regexp: that.data.inputVal,
            })
        }).get({
            success: function (res) {
                wx.hideLoading()
                that.data.page = that.data.page + 1
                console.log(that.data.page)
                /* if (this.data.dataCount < this.data.page * this.data.MAX_LIMIT) {
                    wx.showToast({
                        title: '数据已经加载完',
                        icon: "none"
                    })
                    wx.hideLoading()
                    return
                } */
                if (res.data.length == 0) {
                    wx.showToast({
                        title: '未查到更多相关数据',
                        icon: "none"
                    })
                    return
                }
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
    openImg: function (event) {
        var index = event.currentTarget.dataset.index
        var Img = ""
        console.log(index)
        switch (parseInt(index)) {
            case 1:
                Img = "cloud://lsz-volunteer-j0gsc.6c73-lsz-volunteer-j0gsc-1302312601/click_img/click_可回收.png"
                break;
            case 2:
                Img = "cloud://lsz-volunteer-j0gsc.6c73-lsz-volunteer-j0gsc-1302312601/click_img/click_有害.jpg"
                break;
            case 3:
                Img = "cloud://lsz-volunteer-j0gsc.6c73-lsz-volunteer-j0gsc-1302312601/click_img/click_厨余.jpeg"
                break;
            case 4:
                Img = "cloud://lsz-volunteer-j0gsc.6c73-lsz-volunteer-j0gsc-1302312601/click_img/click_其他.jpeg"
                break;
        }
        console.log(Img)
        this.setData({
            Img: Img,
            gallery: true
        })
    },
    closeImg: function () {
        this.setData({
            gallery: false
        })
    },
    /**
     * 下拉刷新
     */
    onPullDownRefresh: function () {
        this.data.page = 0
        this.getData()
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
        this.getData()
    },
});