// miniprogram/pages/cards/cards.js


Page({

  /**
   * Page initial data
   */
  data: {
    cardsList:{},
    allCards:[1,2,3,4,1,23,1,2,1,2],
    cardsShow:[1,2,3]
  },


  /**
   * 加载页面获取数据的方法
   * 通过云数据库获取数据
   * 
   */
  initialData(){
    const db = wx.cloud.database()
    db.collection('testdata').get({
      success:(res)=>{
        
        this.setData(
          {
            cardsList: res.data[0].cardsType
          }
        )
      },
      fail:(res)=>{
        console.log(res)
      }
    })
  },


  /**
   *  ------------- 绑定事件 ------------
   */


  onTapCardType(e) {
    console.log(e)
    this.changeSelected(e.currentTarget.id)
    // switch (e.currentTarget.id){
    //   case "first":

    // }
  },

  /**
   *  ------------- 其他方法 ------------
   */
  changeSelected(id){
    const temp = this.data.cardsList
    for(let key in temp){
      let tempSelected = temp[key].selected ;
      temp[key].selected = false;
      console.log(temp[key])
      if (temp[key].id === id && tempSelected === false){
        console.log(this.data.cardsList[key].selected, this.data.cardsList[key])
        console.log('进来了')
        temp[key].selected = true
      } 
    }
    this.setData({
      cardsList:temp
    })
    console.log(this.data.cardsList)

  },


  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.initialData()
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
    
  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})