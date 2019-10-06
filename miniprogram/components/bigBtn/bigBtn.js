// components/bigBtn/bigBtn.js
Component({
  /**
   * Component properties
   */
  properties: {
    content:{
      type:String
    },
    animationDelay:{
      type:Number
    }
  },

  /**
   * Component initial data
   */
  data: {
    animationData:{}
  },


  /**
   * 组件生命周期函数
   */
  lifetimes:{
    attached(){
      // this.setAnimation()
      console.log(this.properties.animationDelay)
    }
  },

  /**
   * Component methods
   */
  methods: {
    setAnimation(delay){

      const btnAni = wx.createAnimation({
        delay:this.properties.animationDelay,
        duration:2,
        timingFunction:"ease-in-out"
      })

      
    }
  }
})
