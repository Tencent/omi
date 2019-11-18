
// components/hello/hello.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    aa: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    a: { b: Math.random() }
  },

  ready: function () {
    setTimeout(()=>{
      this.setData({'a.b': 1})
    },3000)
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
