// pages/mall/mall.js
import ajax from '../../requets/ajax.js'
const app = getApp()
Page({
  refreshList(){
    this.setData({
      start:0,
      products:[]
    },() =>{
      this.getProducts()
    })
  },
  addToCart(e){
    console.log(e)
    app.addToGlobalCart(e.currentTarget.dataset)
  },
  loadMore(){
    this.getProducts()
  },
  changeCate(e){
    this.setData({
      currentCateId:e.currentTarget.dataset.id,
      start:0,
      products: []
    },() =>{
      this.getProducts()
    })
  },
  getProducts() {
    ajax.get(`/api/tab/${this.data.currentCateId}?start=${this.data.start}`)
      .then(resp => {
       // console.log(resp)
        const products =this.data.products.concat(resp.data.data.items.list) 
        const start = resp.data.data.items.nextIndex
        const isEnd = resp.data.data.items.isEnd
        this.setData({
          products,
          start,
          isEnd
        })
      })
  },
  /**
   * 页面的初始数据
   */
  data: {
    navs:[],
    currentCateId:null,
    products: [],
    start: 0,
    isEnd:false
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    ajax.get("/api/tabs?sa=")
    .then((res) => {
      const navs = res.data.data.list.slice(1)
      if(res.data.code === 200){
        this.setData({
          navs,
          currentCateId:navs[0].id
        },() =>{
          this.getProducts()
        })
      }
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