var tool = require("../../utils/tool.js")
var app = getApp()
Page({
  /**
    * 页面的初始数据
    */
  data: {
    bools:1,
    default_type:'全部课程'
  },
  // 全部课程筛选点击事件
  showok(){
    var that = this;
    if(that.data.bools==1){
      that.data.bools=2;
      that.setData({
        showkecd: true

      })
    }else{
      that.data.bools = 1;
      that.setData({
        showkecd: false
  
      })
    }
  },
  //销量
  showxl() {
    var that = this;
    if (that.data.bools == 1) {
      that.data.bools = 2;
      that.setData({
        showkecda: true
      })
    } else {
      that.data.bools = 1;
      that.setData({
        showkecda: false
      })
    }
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
  
  },
  /**
   * 获取课程列表
   */
  courseList:function(){

  }
})