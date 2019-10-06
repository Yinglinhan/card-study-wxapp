// miniprogram/pages/index/index.js
Page({

  /**
   * Page initial data
   */
  data: {
    toggleShow:{},
    isShow:false,
    logoModalHeight:0
  },


  /**
   * ------------------ 初始化 ----------------
   */

  init(_self) {
    let height;
    wx.createSelectorQuery().select('#logo-modal').boundingClientRect(function (rect) {
      height = rect.height
      _self.setData({
        logoModalHeight: height
      })
    }).exec()
  },




  /**
   *---------- 绑定事件 -------------
   */

  onTapLogo(e){
    
    if(!this.data.isShow && e.currentTarget.id === "logo"){
      console.log('我上来啦')
      this.aniLogoModalUp()
    }else{
      console.log('我下去啦')
      this.aniLogoModalDown()
    }
    
  },

  onTapToHtml(){
    wx.navigateTo({
      url: '../cards/cards',
    })
  },


/**
   *---------- 动画相关 -------------
   */

  



  aniLogoModalUp(){
    const animation = wx.createAnimation({
      duration:400,
      timingFunction:"ease-in-out"
    })
    
    console.log(this.data.logoModalHeight)
    animation.translateY(0).step()
    this.setData({
      toggleShow:animation.export(),
      isShow:true
    })
  },

  aniLogoModalDown(){
    const animation = wx.createAnimation({
      duration: 400,
      timingFunction: "ease-in-out"
    })

    console.log(this.data.logoModalHeight)
    animation.translateY(this.data.logoModalHeight).step()
    this.setData({
      toggleShow: animation.export(),
      isShow: false
    })
  },




  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

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
    this.init(this)
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