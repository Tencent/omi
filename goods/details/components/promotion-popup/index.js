Component({
  options: {
    multipleSlots: true,
  },

  properties: {
    list: Array,
    title: {
      type: String,
      value: '促销说明',
    },
    show: {
      type: Boolean,
    },
  },

  // data: {
  //   list: [],
  // },

  methods: {
    change(e) {
      const { index } = e.currentTarget.dataset;
      this.triggerEvent('promotionChange', {
        index,
      });
    },

    closePromotionPopup() {
      this.triggerEvent('closePromotionPopup', {
        show: false,
      });
    },
  },
});
