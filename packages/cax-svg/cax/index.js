import cax from './index'

Component({
  /**
   * 组件的属性列表
   */
  properties: {

    option: {
      type: Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    width: 0,
    height: 0,
    id: 'caxCanvas' + cax.caxCanvasId++,
    index: cax.caxCanvasId - 1
  },

  /**
   * 组件的方法列表
   */
  methods: {

    getCaxCanvasId: function () {
      return this.data.id
    },

    touchStart: function (evt) {
      this.stage.touchStartHandler(evt)
      this.stage.touchStart && this.stage.touchStart(evt)
    },

    touchMove: function (evt) {
      this.stage.touchMoveHandler(evt)
      this.stage.touchMove && this.stage.touchMove(evt)
    },

    touchEnd: function (evt) {
      this.stage.touchEndHandler(evt)
      this.stage.touchEnd && this.stage.touchEnd(evt)
    }

  }
})
