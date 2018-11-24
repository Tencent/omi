// components/my-ele/my-ele.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    name:{
      type: String,
      value: '',
    },
    age:{
      type: Number,
      value: 18
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    myMethods: function() {
      this.triggerEvent('myevent', { name: 'dntzhang' })
    }
  }
})
