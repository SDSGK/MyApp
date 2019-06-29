// pages/onclick/onclick.js

var startdisX;
var movX;
var endX;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    game: [
      
    ]
    ,
    pinglun:[
      {
        text:"这里是评论区，有意见的可以在这里留言，不会采取",
      time :'19-6-15',
        img: 'https://i2.hdslb.com/bfs/face/3fef70d70810d07047749d04fe26cac9a038a83a.jpg@72w_72h.webp',
        name : '我芦苇没有开挂',
      }
    ]
    ,
    valueshuru:""
  },
  //添加到购物车
  onclick_tjgwc: function (e) {
  
  },
  //评论功能实现，获取输入的内容，并放到新的object对象中。
  onclick_shuru:function(e){
    var a = new Object();
    a.text = e.detail.value
    a.time= '19-6-15',
    a.img= 'https://i2.hdslb.com/bfs/face/3fef70d70810d07047749d04fe26cac9a038a83a.jpg@72w_72h.webp',
    a. name= '我芦苇没有开挂',
      this.data.pinglun.unshift(a)
    this.setData({
      pinglun: this.data.pinglun
    })
    var that = this;
    wx.showToast({
      title: '评论成功',
      success:function(){
        that.setData({
          valueshuru:""
        })
      }
    })
  },
  //返回页面
  back:function(){
    wx.navigateBack({
      delta: 1,
    })
  },
  //滑动返回
  sme:function(e){
    var type = e.type;
    switch(type){
      case "touchstart":
        startdisX = e.changedTouches["0"].clientX;
        // console.log(e.changedTouches["0"].clientX)
        break;
      case "touchmove":
        movX = e.changedTouches["0"].clientX;
        // console.log(e.changedTouches["0"].clientX,e)
        break;
      case "touchend":
        endX = e.changedTouches["0"].clientX;
        if (endX > startdisX){
          // console.log("r")
          if (endX - startdisX > 150) {
            wx.navigateBack({
              delta: 1,
            })
          }
        } else {
          console.log("l")
        }
        break;
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(JSON.parse(options.val).name,"chuanzhi")
    this.data.game.push(JSON.parse(options.val))
    // console.log(chuanzhi)
    this.setData({
      game: this.data.game
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