import '../my-child/my-child'

function render() {

  return h('div',null,[h('my-child',null,[]),h('div',null,[`my-ele`])])

}
// components/my-ele/my-ele.js
const mpOption = Component({
  /**
   * 组件的属性列表
   */
  properties: {

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

  }
})
