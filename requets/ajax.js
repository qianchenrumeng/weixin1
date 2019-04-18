const baseURL = "http://www.xiongmaoyouxuan.com"
class Ajax{
  get(url,data={}){
   return new Promise((resolve,reject) =>{
     wx.request({
       url: baseURL + url,
       data,
       method: 'GET',
       dataType: 'json',
       success: function (res) {
         resolve(res)
       },
       fail: function (res) {
         reject(res)
        },
       complete: function (res) { }
     })
   })
  }
}

export default new Ajax()