// pages/query/query.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dnmd:[
      {
        text:'快乐就完事了',
      },
      {
        text:'快乐农药'
      }
      ,{
        text:'崩崩崩！！'
      }
      , {
        text: 'Wdnmd',
      },
      {
        text: '快乐'
      }
      , {
        text: '代码怪'
      }
    ]
    ,
    game: [
      
    ]
    ,
    gamelist:[],
    iptVal:'',
    shuruneirong: '请在上面搜索框输入您想要的搜索内容' 
  },
  //
  dianjishijian:function(e){
    // console.log(e.currentTarget.dataset.item.text)
    this.setData({
      iptVal: e.currentTarget.dataset.item.text
    })
    this.sousuo({ detail: { value: e.currentTarget.dataset.item.text}})
  },
  sousuo:function(e){
    // event
    // { detail: { value: e.currentTarget.dataset.item.text } }
    // console.log(e.detail)
    // return;
    var serach = e.detail.value
      var that = this
      that.setData({
      gamelist: []
     
    })
    // console.log(serach)
      for(var i = 0; i<this.data.game.length; i++){
        if ((that.data.game[i].name.indexOf(serach) != -1||
          that.data.game[i].name.indexOf(serach.toUpperCase()) != -1) && serach) {
          for (var k = 0; k < that.data.gamelist.length; k++) {
            if (that.data.gamelist[k].name == that.data.game[i].name) {
              return;
            }
          }
          that.data.gamelist.push(that.data.game[i]);
          that.setData({
            gamelist: that.data.gamelist
          })
        } else {
          // console.log("false")
          that.setData({
            shuruneirong:'没有搜索到您想要的结果'
          })
        }
    }
  },
  //
  onclick_tjgwc:function(){

  },

  back(){
    wx.navigateBack({
      url:'1'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getStorage({
      key: 'newArr',
      success: function(res) {
        // console.log(res)
        that.setData({
          game: res.data
        })
      },
    })
    // console.log(JSON.parse(options.shuzu2), "shuzu2")
    // console.log(JSON.parse(options.shuzu), "shuzu")
    // this.data.game = JSON.parse(options.shuzu)
    // console.log(JSON.parse(options.shuzu))
    // console.log(options.shuzu2)
    // // console.log(this.data.game)
    // this.setData({
    //   game: this.data.game
    // })
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