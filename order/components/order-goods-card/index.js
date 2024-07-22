Component({
  options: {
    addGlobalClass: true,
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
  },

  relations: {
    '../order-card/index': {
      type: 'ancestor',
      linked(target) {
        this.parent = target;
      },
    },
  },

  properties: {
    goods: Object,
    thumbWidth: Number,
    thumbHeight: Number,
    thumbWidthInPopup: Number,
    thumbHeightInPopup: Number,
    noTopLine: Boolean,
    step: Boolean,
    stepDisabled: Boolean,
  },

  data: {
    goods: {},
    hidden: false,
  },

  methods: {
    setHidden(hidden) {
      if (this.data.hidden === hidden) return;
      this.setData({ hidden });
    },

    onNumChange(e) {
      const { value } = e.detail;
      this.triggerEvent('num-change', { value });
    },
  },
});
