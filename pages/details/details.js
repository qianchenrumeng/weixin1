// pages/details/details.js
import ajax from '../../requets/ajax.js'
Page({
toHeader() {
  wx.switchTab({
    url:'/pages/home/home',
    success: function (res) { },
    fail: function (res) { },
    complete: function (res) { }
  })
},
  getDetails() {
    ajax.get(`/api/detail?id=${this.data.id}&normal=1&sa=`)
    .then(resp => {
      if(resp.data.code===200){
        console.log(resp.data.data)
        const imgUrls =[]
        const urls = resp.data.data.detail.photos.map(item =>{
          imgUrls.push(item.url)
        })
        const details = resp.data.data.detail.descContentList.filter(item => item.type != 2)
        this.setData({
          imgUrls,
          title: resp.data.data.detail.qunTitle ? resp.data.data.detail.qunTitle : resp.data.data.detail.title ,
          price: resp.data.data.detail.price,
          saleNum: resp.data.data.detail.saleNum,
          details, 
      },() => {
       console.log(this.data.details)
      })
      }
     
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[],
    title:'',
    price:0,
    saleNum:0,
    details:[],
    id:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id:options.id
    },() => {
      console.log(this.data.id)
      this.getDetails()
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