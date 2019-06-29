// pages/home/home.js
var that = this

var gamelist = [];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    viewH: 0,
    //首页数组
    arr: [{
        diyitiao: '白给的第一天，把把起野牛，三天大地球,day1哈哈哈哈哈哈',
        diertiao: 'Wdnmd，真就白给呗，哈哈哈',
        image: 'https://img.3dmgame.com/uploads/images/thumbkwdfirst/20190321/1553132423_129751.png',
        fbzz: '来自：白给少年',
        gk: '654',
        pl: '2'
      },
      {
        diyitiao: '白给的第二天，中路来个高闪，秋膏梨，day2哈哈哈哈哈哈',
        diertiao: 'Wdnmd，真就白给呗，哈哈哈',
        image: 'https://img.3dmgame.com/uploads/images/thumbnews/20180726/1532569701_351408.jpg',
        fbzz: '来自：今天你白给了吗',
        gk: '195',
        pl: '4'
      },
      {
        diyitiao: '白给的第三天，中路来把狙，我起了一枪秒了，有什么好说的',
        diertiao: 'Wdnmd，真就白给呗，哈哈哈',
        image: 'https://img.3dmgame.com/uploads/images/thumbkwdfirst/20180718/1531896687_811533.jpg',
        fbzz: '来自：我芦苇没有开挂',
        gk: '16548',
        pl: '64'
      },
      {
        diyitiao: '白给的第四天，随便编辑点内容，假装是条消息，就可以了。哈哈哈哈',
        diertiao: 'Wdnmd，真就白给呗，哈哈哈',
        image: 'https://img.3dmgame.com/uploads/images/thumbkwdfirst/20180928/1538099247_494414.jpg',
        fbzz: '来自：zzzs',
        gk: '316',
        pl: '4'
      },
      {
        diyitiao: '白给的第四天，随便编辑点内容，假装是条消息，就可以了。哈哈哈哈',
        diertiao: 'Wdnmd，真就白给呗，哈哈哈',
        image: 'https://img.3dmgame.com/uploads/images/thumbkwdfirst/20180928/1538099247_494414.jpg',
        fbzz: '来自：zzzs',
        gk: '316',
        pl: '4'
      }
    ],
    //底部导航栏内容文字
    menu: ["首页", "找游戏", "购物车", "个人中心"],
    curretPage: 0,

    //游戏数组
    game: [{
        name: 'bt手游，快乐就完事了',
        jiage: '300',
        image: 'https://shouyou.3dmgame.com/uploadimg/ico/2019/0513/1557728134399417.png'
      },
      {
        name: '三国传奇，也快乐',
        jiage: '500',
        image: 'https://shouyou.3dmgame.com/uploadimg/ico/2019/0515/1557909634724937.jpg'
      },
      {
        name: '天下，Wdnmd',
        jiage: '100',
        image: 'https://shouyou.3dmgame.com/uploadimg/ico/2019/0312/1552356606324859.png'
      },
      {
        name: '流星蝴蝶剑',
        jiage: '40',
        image: 'https://shouyou.3dmgame.com/uploadimg/ico/2018/0510/1525955030436665.jpg'
      },
      {
        name: '崩崩崩！！！',
        jiage: '999',
        image: 'https://shouyou.3dmgame.com/uploadimg/ico/2019/0417/1555493804589290.png'
      },
      {
        name: '快乐农药',
        jiage: '999',
        image: 'https://shouyou.3dmgame.com/uploadimg/ico/2017/0327/1490621219368371.png'
      },
      {
        name: '来自路飞的快乐头像',
        jiage: '10',
        image: 'https://shouyou.3dmgame.com/uploadimg/ico/2017/0518/1495071854921465.jpg'
      },
      {
        name: '来自路飞的快乐头像',
        jiage: '10',
        image: 'https://shouyou.3dmgame.com/uploadimg/ico/2017/0518/1495071854921465.jpg'
      },
      {
        name: '来自路飞的快乐头像',
        jiage: '10',
        image: 'https://shouyou.3dmgame.com/uploadimg/ico/2017/0518/1495071854921465.jpg'
      },
      {
        name: '来自路飞的快乐头像',
        jiage: '10',
        image: 'https://shouyou.3dmgame.com/uploadimg/ico/2017/0518/1495071854921465.jpg'
      }
    ],
    //资源数组
    zhiyuan: [{
        name: 'Adobe Dreamweaver',
        jiage: '989',
        image: 'http://pic.baike.soso.com/ugc/baikepic2/15164/cut-20180130144855-1726951617_jpg_309_247_10641.jpg/300'
      },
      {
        name: 'Visual Studio Code',
        jiage: '95.9',
        image: 'http://pic.baike.soso.com/ugc/baikepic2/12404/20150504103247-1393601284.jpg/300'
      },
      {
        name: 'Adobe Premiere',
        jiage: '1850',
        image: 'http://pic.baike.soso.com/ugc/baikepic2/53/cut-20180918212423-1554488235_jpg_216_173_3469.jpg/300'
      },
      {
        name: 'Adobe Photoshop',
        jiage: '1024',
        image: 'https://img02.sogoucdn.com/app/a/100520061/f327529eb9fb2cecf67629a6499ca1cb'
      },
      {
        name: 'Hbuilder',
        jiage: '261',
        image: 'https://img02.sogoucdn.com/v2/thumb/retype/ext/jpg/cls/imagick?appid=200504&url=http://7.pic.pc6.com/up/2015-2/201525162649.jpg'
      },
      {
        name: '微信小程序',
        jiage: '88',
        image: 'https://res.wx.qq.com/wxdoc/dist/assets/img/main.01aed00c.png'
      },
      {
        name: 'Notepad++',
        jiage: '3.8',
        image: 'https://img02.sogoucdn.com/v2/thumb/retype/ext/jpg/cls/imagick?appid=200504&url=http://pc3.gtimg.com/softmgr/logo/48/23026_48_1474946616.png'
      }
    ],
    //精品数组
    jingping: [{
        name: '赛博朋克2077 （Cyberpunk 2077）',
        jiage: '300',
        image: 'https://img.3dmgame.com/uploads/images/thumbkwdfirst/20180824/1535097086_262447.jpg',
        dataTime: '19-06-20'
      },
      {
        name: '我的朋友佩德罗 （My Friend Pedro）',
        jiage: '500',
        image: 'https://img.3dmgame.com/uploads/images/thumbkwdfirst/20190621/1561085416_376209.jpg',
        dataTime: '19-06-10'
      },
      {
        name: '节奏海拉鲁 （Cadence of Hyrule）',
        jiage: '100',
        image: 'https://img.3dmgame.com/uploads/images/thumbkwdfirst/20190321/1553132423_129751.png',
        dataTime: '19-06-14'
      },
      {
        name: '歧路旅人 （Octopath Traveler）',
        jiage: '40',
        image: 'https://img.3dmgame.com/uploads/images/thumbkwdfirst/20180718/1531896687_811533.jpg',
        dataTime: '19-06-21'
      },
      {
        name: '幽灵行动：断点 （Tom Clancy’s Ghost Recon: Breakpoint）',
        jiage: '999',
        image: 'https://img.3dmgame.com/uploads/images/thumbkwdfirst/20190513/1557714825_245472.jpg',
        dataTime: '19-06-10'
      },
      {
        name: '看门狗：军团 （Watch Dogs: Legion）',
        jiage: '999',
        image: 'https://img.3dmgame.com/uploads/images/thumbkwdfirst/20190611/1560218597_739669.jpg',
        dataTime: '19-06-01'
      },
      {
        name: '狂怒2 （Rage 2）',
        jiage: '10',
        image: 'https://img.3dmgame.com/uploads/images/thumbkwdfirst/20190326/1553565514_381265.png',
        dataTime: '19-06-25'
      }
    ],
    //影视数组
    yingshi: [{

        ship: 'http://192.168.233.193:8080/wuxia.mp4',
        image: 'http://img1.imgtn.bdimg.com/it/u=687822341,3992324814&fm=26&gp=0.jpg'
      },
      {

        ship: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
        image: 'http://img1.imgtn.bdimg.com/it/u=687822341,3992324814&fm=26&gp=0.jpg'
      },
      {
        ship: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
        image: 'http://img1.imgtn.bdimg.com/it/u=687822341,3992324814&fm=26&gp=0.jpg'
      },
      {
        ship: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
        image: 'http://img1.imgtn.bdimg.com/it/u=687822341,3992324814&fm=26&gp=0.jpg'
      },
      {
        ship: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
        image: 'http://img1.imgtn.bdimg.com/it/u=687822341,3992324814&fm=26&gp=0.jpg'
      },
      {
        ship: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
        image: 'http://img1.imgtn.bdimg.com/it/u=687822341,3992324814&fm=26&gp=0.jpg'
      }
    ],
    ddsplay1: "block",
    ddsplay2: "none",
    //购物车数组
    gwc: [

    ],
    wode: [{
        text: '我的评论',
        img: 'http://m.qpic.cn/psb?/V11GboKj1UDEcv/ZBw447r3bBt2EczMf26k8seMyQDVEp9stMM4vksvAoE!/b/dDUBAAAAAAAA&bo=yADIAMgAyAADCSw!&rf=viewer_4',
      },
      {
        text: '我的购买记录',
        img: 'http://a4.qpic.cn/psb?/V11GboKj1UDEcv/MNi.DzkDBF7z9KbVEhgYeZ5QCJukvlao*ZORQHPTmhw!/m/dLsAAAAAAAAAnull&bo=yADIAMgAyAADCSw!&rf=photolist&t=5',
      },
      {
        text: '我的消息',
        img: 'http://a1.qpic.cn/psb?/V11GboKj1UDEcv/8.*qxCyTnxFRl6No9djofybM1Vy18Zpb6HENda1Ty44!/m/dFQBAAAAAAAAnull&bo=yADIAMgAyAADCSw!&rf=photolist&t=5',
      }
    ],
    backgroundColor: '#fff',
    color: '#000',

    shopcar: []

      ,
    lists: [], // 接收搜索的内容
    wxSearchData: '', // 输入的值,
    serachGameC: 0

      ,
    tjgwc: '添加到购物车',
    btn: "button",

    dds: 'none',
    gamelist: [],
    zonggongdaxiao: '',

    chekcList: [],
    checked: false,
    sumsize: 0

      ,

    crt: '0',
    xianshi: -1,
    xianshi2: -1,
  },
  //
  video_stat: function(e) {
    this.setData({
      xianshi: e.currentTarget.dataset.index
    })
    for (var i = 0; i < this.data.yingshi.length; i++) {
      if (i != e.currentTarget.dataset.index) {
        var video = wx.createVideoContext("v" + i)
        // console.log(video)
        wx.createVideoContext("v" + i).pause()
      }
    }
    this.setData({
      xianshi2: e.currentTarget.dataset.index
    })
  },
  video_stat2: function(e) {

  },
  //搜索框功能
  onclick_shuru: function(e) {
    var shuzu = JSON.stringify(this.data.game)
    var shuzu2 = JSON.stringify(this.data.zhiyuan)
    var newArr = this.data.game.concat(this.data.zhiyuan);
    // console.log(newArr);
    wx.setStorage({
      key: "newArr",
      data: newArr
    })
    // return;
    wx.navigateTo({
      url: '/pages/query/query'
    })
  },
  //购物车界面点击编辑功能
  onclick_bianji: function() {
    // console.log('你点击了编辑')
    var dd1 = this.data.ddsplay1 == 'block' ? 'none' : 'block'
    var dd2 = this.data.ddsplay2 == 'none' ? 'block' : 'none'
    var ssd = this.data.dds == 'none' ? "block" : 'none'

    // console.log(dd1)
    this.setData({
      ddsplay1: dd1,
      ddsplay2: dd2,
      dds: ssd
    })
  },
  //计算大小
  onclick_check: function(e) {
    this.setData({
      sumsize: 0
    })
    var index = e.currentTarget.dataset.index
    this.data.chekcList[index] = !this.data.chekcList[index]
    this.setData({
      chekcList: this.data.chekcList
    })
    console.log(this.data.chekcList)
    var checks = true
    for (var i = 0; i < this.data.gwc.length; i++) {
      var size = parseInt(this.data.gwc[i].jiage)
      if (this.data.chekcList[i]) {
        this.setData({
          sumsize: this.data.sumsize += size
        })
      } else {
        checks = false
      }
    }
    console.log(checks)
    this.setData({
      checked: checks
    })
  },
  //跳转
  to: function(e) {
    var val = JSON.stringify(e.currentTarget.dataset.val)
    wx.navigateTo({
      url: '/pages/onclick/onclick?val=' + val
    })
  },
  //夜间模式滑块
  onclick_Nightmode: function(e) {
    var bgColor = this.data.backgroundColor == '#fff' ? '#000' : '#fff'
    var wzColor = this.data.color == '#000' ? '#fff' : '#000'
    this.setData({
      backgroundColor: bgColor,
      color: wzColor
    })
  },
  //添加到购物车
  onclick_tjgwc: function(e) {
    var that = this;
    // console.log(that.data.tjgwc)
    for (var i = 0; i < this.data.gwc.length; i++) {
      if (e.currentTarget.dataset.val.name == this.data.gwc[i].name) {
        // console.log(this.data.gwc[i], "相同")
        wx.showToast({
          title: '购物车以拥有',
          icon: 'none',
          image: "/images/cuowu.png",
          duration: 700
        })
        return;
      }
    }
    // console.log(e.currentTarget.dataset.val)
    this.data.gwc.push(e.currentTarget.dataset.val);
    this.setData({
      gwc: this.data.gwc
    })
    // console.log(this.data.gwc)
    wx.setStorage({
      key: 'diyige',
      data: JSON.stringify(that.data.gwc)
    })
    wx.showToast({
      title: '在购物车等你哦',
      duration: 700,
      mask: true,
    })
  },
  //删除购物车
  onclick_scgwc: function(e) {
    // console.log(e.currentTarget.dataset.index)
    var that = this;
    this.data.gwc.splice(e.currentTarget.dataset.index, 1);
    this.setData({
      gwc: this.data.gwc
    })
    wx.setStorage({
      key: 'diyige',
      data: JSON.stringify(that.data.gwc)
    })
    wx.showToast({
      title: '删除成功',
      duration: 700,
      mask: true,
    })

  },
  //swiper切换自动设置高度
  change: function(e) {
    this.setData({
      curretPage: e.detail.current,
    })
    var that = this
    if (e.detail.current == 0) {
      this.changeViewH(this.data.arr, 150, 240)
    } else if (e.detail.current == 1) {
      this.changeViewH(this.data.game, 85, 230)
    } else if (e.detail.current == 2) {
      // console.log("数组长度")
      // console.log(this.data.gwc.length)
      // console.log(this.data.gwc.length >= 4 )
      if (this.data.gwc.length < 2) {
        this.changeViewH(this.data.gwc, 85, 630)
      } else if (this.data.gwc.length < 4) {
        this.changeViewH(this.data.gwc, 85, 450)
      } else if (this.data.gwc.length >= 4) {
        // console.log(111)
        this.changeViewH(this.data.gwc, 85, 260)
      }
    } else if (e.detail.current == 3) {
      this.changeViewH(this.data.gwc, 0, 630)
    }
    //console.log(e.detail.current)
    //切换之后，游戏界面自动归零
    setTimeout(function() {
      that.setData({
        dds: 'none',
        ddsplay1: "block",
        ddsplay2: "none",
      })
      // console.log('111')
    }, 100) //延迟时间
  },
  //自动高度，组件
  changeViewH: function(arr, instaH, eH) {
    // console.log(this.data.game.length)
    this.setData({
      viewH: ((arr.length * instaH) + eH) + "px"
    })
  },
  //设置swiper的滚动位置
  setCurrent: function(e) {
    this.setData({
      curretPage: e.currentTarget.dataset.index
    })
    // console.log(e.currentTarget.dataset.index)
  },
  //隐藏和显示
  game_onclick: function(e) {
    var crt = e.currentTarget.dataset.index
    var that = this
    switch (crt) {
      case "0":
        that.changeViewH(that.data.game, 85, 230)
        break;
      case "1":
        that.changeViewH(that.data.zhiyuan, 85, 230)
        break;
      case "2":
        that.changeViewH(that.data.jingping, 260, 230)
        break;
      case "3":
        that.changeViewH(that.data.yingshi, 130, 230)
        break;
    }
    this.setData({
      serachGameC: e.currentTarget.dataset.index
    })
  },

  //点击去逛逛，跳转到找游戏
  onclick_swiper2: function() {
    this.setData({
      curretPage: 1
    })

  },
  checkAll: function(e) {
    // console.log(e)
    this.setData({
      checked: !this.data.checked
    })
    for (var i = 0; i < this.data.gwc.length; i++) {
      this.data.chekcList[i] = this.data.checked
      this.setData({
        chekcList: this.data.chekcList
      })
      if (this.data.chekcList[i]) {
        var size = parseInt(this.data.gwc[i].jiage)
        this.setData({
          sumsize: this.data.sumsize += size
        })
        // console.log(this.data.gwc[i].jiage)
      } else {
        var size = parseInt(this.data.gwc[i].jiage)
        this.setData({
          sumsize: this.data.sumsize -= size
        })
        // console.log(this.data.gwc[i].jiage)
      }
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //首页初始渲染，自动设置高度
    this.setData({
      viewH: ((this.data.arr.length * 150) + 240) + "px"
    })
    // console.log(this.data.viewH,this.data.game.length);
    // console.log(this.data.arr.length,"arr长度")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    var that = this;
    wx.getStorage({
      key: 'diyige',
      success: function(res) {
        // console.log(res.data)
        that.setData({
          gwc: JSON.parse(res.data)
        })
        // console.log("gwcl", that.data.gwc.length)
        for (var i = 0; i < that.data.gwc.length; i++) {
          that.data.chekcList.push(false)
          that.setData({
            chekcList: that.data.chekcList
          })
        }
        // console.log(that.data.gwc,"数组购物车")
      },
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    // var a = [1,2,3,4,5]; 
    // var b = [1,2,3,4,5];
    // console.log(a.__proto__ == b.__proto__,"123321")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})