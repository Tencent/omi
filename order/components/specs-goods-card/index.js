Component({
  options: {
    addGlobalClass: true,
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
  },

  externalClasses: [
    'title-class',
    'desc-class',
    'num-class',
    'thumb-class',
    'specs-class',
    'price-class',
    'origin-price-class',
    'price-prefix-class',
  ],

  relations: {
    '../order-card/index': {
      type: 'ancestor',
      linked(target) {
        this.parent = target;
      },
    },
  },

  properties: {
    id: String,
    hidden: {
      // 设置为null代表不做类型转换
      type: null,
      observer(hidden) {
        // null就是代表没有设置，没有设置的话不setData，防止祖先组件触发的setHidden操作被覆盖
        if (hidden !== null) {
          this.setHidden(!!hidden);
        }
      },
    },
    data: Object,
    layout: {
      type: String,
      value: 'horizontal',
    },
    thumbMode: {
      type: String,
      value: 'aspectFill',
    },
    thumbWidth: Number,
    thumbHeight: Number,
    thumbWidthInPopup: Number,
    thumbHeightInPopup: Number,
    priceFill: {
      type: Boolean,
      value: true,
    },
    currency: {
      type: String,
      value: '¥',
    },
    lazyLoad: Boolean,
    centered: Boolean,
    showCart: Boolean,
    pricePrefix: String,
    cartSize: {
      type: Number,
      value: 48,
    },
    cartColor: {
      type: String,
      value: '#FA550F',
    },
    disablePopup: Boolean,
  },

  data: {
    hiddenInData: false,
    specsPopup: {
      insert: false,
      show: false,
    },
  },

  currentInTapSpecs: false,

  lifetimes: {
    ready() {
      const { hidden } = this.properties;
      if (hidden !== null) {
        this.setHidden(!!hidden);
      }
    },
  },

  methods: {
    closeSpecsPopup() {
      this.setData({
        'specsPopup.show': false,
      });
      this.triggerEvent('specsclose', { good: this.properties.data });
    },

    removeSpecsPopup() {
      this.setData({
        'specsPopup.insert': false,
      });
    },

    onClick(e) {
      if (this.currentInTapSpecs) {
        this.currentInTapSpecs = false;
        return;
      }
      this.triggerEvent('click', e.detail);
    },

    onClickThumb(e) {
      this.triggerEvent('thumb', e.detail);
    },

    onClickTag(e) {
      this.triggerEvent('tag', e.detail);
    },

    onClickCart(e) {
      this.triggerEvent('add-cart', e.detail);
    },

    setHidden(hidden) {
      this.setData({ hiddenInData: !!hidden });
    },
  },
});
