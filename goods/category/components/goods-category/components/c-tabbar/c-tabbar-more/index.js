Component({
  externalClasses: ['custom-class'],

  properties: {
    tabList: Array,
  },

  data: {
    unfolded: false,
    boardMaxHeight: null,
  },
  attached() {
    wx.createSelectorQuery()
      .in(this)
      .select('.c-tabbar-more')
      .boundingClientRect((rect) => {
        this.setData({ boardMaxHeight: rect.height });
      })
      .exec();
  },

  methods: {
    changeFold() {
      this.setData({
        unfolded: !this.data.unfolded,
      });
      const { unfolded } = this.data;
      this.triggerEvent('change', { unfolded });
    },

    onSelect(event) {
      const activeKey = event.currentTarget.dataset.index;
      this.triggerEvent('select', activeKey);
      this.changeFold();
    },
  },
});
