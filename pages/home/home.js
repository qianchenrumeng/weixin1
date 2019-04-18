// pages/home/home.js.js
import ajax from '../../requets/ajax.js'
Page({
  toSearch(){
wx.navigateTo({
  url: '/pages/search/search'
})
  },

  /**
   * 页面的初始数据
   */
  data: {
    city:'',
  imgUrls:[
    'http://img1.lukou.com/static/p/commodity/img/20190314-101749.jpeg',
    "http://img1.lukou.com/static/p/commodity/img/20190318-102033.jpeg",
    'http://img1.lukou.com/static/p/commodity/img/20190316-025312.jpeg'
  ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getLocation({
      type: 'wgs84',
      altitude: true,
      success: (res) => {
        // console.log(res)
       wx.request({
         url: `https://apis.map.qq.com/ws/geocoder/v1/?location=${res.latitude},${res.longitude}&key=TLZBZ-QWFCU-OO3VX-43QGH-SFZTE-ROBIV&get_poi=1`,
         success:(resp) => {
           console.log(resp)
           this.setData({
             city:resp.data.result.address_component.city
           })
         }
       })
      },
      fail: function(res) {},
      complete: function(res) {},
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