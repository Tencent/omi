// pages/goods/comments/components/comments-card/images-videos/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    resources: {
      type: Array,
      value: [],
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    classType: 'single',
  },

  observers: {
    resources: function (newVal) {
      if (newVal.length <= 1) {
        this.setData({ classType: 'single' });
      } else if (newVal.length === 2) {
        this.setData({ classType: 'double' });
      } else {
        this.setData({ classType: 'multiple' });
      }
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {},
});
