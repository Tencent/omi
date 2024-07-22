Component({
  options: {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
    addGlobalClass: true,
  },
  intersectionObserverContext: null,

  externalClasses: [
    'card-class',
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
    hidden: {
      // 设置为null代表不做类型转换
      type: null,
      value: false,
      observer(hidden) {
        // null就是代表没有设置，没有设置的话不setData，防止祖先组件触发的setHidden操作被覆盖
        if (hidden !== null) {
          this.setHidden(!!hidden);
        }
      },
    },
    id: {
      type: String,
      // `goods-card-88888888`
      // 不能在这里写生成逻辑，如果在这里写，那么假设有多个goods-list时，他们将共享这个值
      value: '',
      observer: (id) => {
        this.genIndependentID(id);
        if (this.properties.thresholds?.length) {
          this.createIntersectionObserverHandle();
        }
      },
    },
    data: {
      type: Object,
      observer(goods) {
        // 有ID的商品才渲染
        if (!goods) {
          return;
        }

        /** 划线价是否有效 */
        let isValidityLinePrice = true;
        // 判断一次划线价格是否合理
        if (
          goods.originPrice &&
          goods.price &&
          goods.originPrice < goods.price
        ) {
          isValidityLinePrice = false;
        }

        // 敲定换行数量默认值
        if (goods.lineClamp === undefined || goods.lineClamp <= 0) {
          // tag数组长度 大于0 且 可见
          // 指定换行为1行
          if ((goods.tags?.length || 0) > 0 && !goods.hideKey?.tags) {
            goods.lineClamp = 1;
          } else {
            goods.lineClamp = 2;
          }
        }

        this.setData({ goods, isValidityLinePrice });
      },
    },
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
    priceFill: {
      type: Boolean,
      value: true,
    },
    currency: {
      type: String,
      value: '¥',
    },
    lazyLoad: {
      type: Boolean,
      value: false,
    },
    centered: {
      type: Boolean,
      value: false,
    },
    showCart: {
      type: Boolean,
      value: false,
    },
    pricePrefix: {
      type: String,
      value: '',
    },
    cartSize: {
      type: Number,
      value: 48,
    },
    cartColor: {
      type: String,
      value: '#FA550F',
    },
    /** 元素可见监控阈值, 数组长度大于0就创建 */
    thresholds: {
      type: Array,
      value: [],
      observer(current) {
        if (current && current.length) {
          this.createIntersectionObserverHandle();
        } else {
          this.clearIntersectionObserverHandle();
        }
      },
    },
    specsIconClassPrefix: {
      type: String,
      value: 'wr',
    },
    specsIcon: {
      type: String,
      value: 'expand_more',
    },
    addCartIconClassPrefix: {
      type: String,
      value: 'wr',
    },
    addCartIcon: {
      type: String,
      value: 'cart',
    },
  },

  data: {
    hiddenInData: false,
    independentID: '',
    goods: { id: '' },
    /** 保证划线价格不小于原价，否则不渲染划线价 */
    isValidityLinePrice: false,
  },

  lifetimes: {
    ready() {
      this.init();
    },
    detached() {
      this.clear();
    },
  },

  methods: {
    clickHandle() {
      this.triggerEvent('click', { goods: this.data.goods });
    },
    clickThumbHandle() {
      this.triggerEvent('thumb', { goods: this.data.goods });
    },
    clickTagHandle(evt) {
      const { index } = evt.currentTarget.dataset;
      this.triggerEvent('tag', { goods: this.data.goods, index });
    },
    // 加入购物车
    addCartHandle(e) {
      const { id } = e.currentTarget;
      const { id: cardID } = e.currentTarget.dataset;
      this.triggerEvent('add-cart', {
        ...e.detail,
        id,
        cardID,
        goods: this.data.goods,
      });
    },
    genIndependentID(id, cb) {
      let independentID;
      if (id) {
        independentID = id;
      } else {
        // `goods-card-88888888`
        independentID = `goods-card-${~~(Math.random() * 10 ** 8)}`;
      }
      this.setData({ independentID }, cb);
    },

    init() {
      const { thresholds, id, hidden } = this.properties;
      if (hidden !== null) {
        this.setHidden(!!hidden);
      }

      this.genIndependentID(id || '', () => {
        if (thresholds && thresholds.length) {
          this.createIntersectionObserverHandle();
        }
      });
    },

    clear() {
      this.clearIntersectionObserverHandle();
    },

    setHidden(hidden) {
      this.setData({ hiddenInData: !!hidden });
    },

    createIntersectionObserverHandle() {
      if (this.intersectionObserverContext || !this.data.independentID) {
        return;
      }

      this.intersectionObserverContext = wx
        .createIntersectionObserver(this, {
          thresholds: this.properties.thresholds,
        })
        .relativeToViewport();

      this.intersectionObserverContext.observe(
        `#${this.data.independentID}`,
        (res) => {
          this.intersectionObserverCB(res);
        },
      );
    },
    intersectionObserverCB(ob) {
      this.triggerEvent('ob', {
        goods: this.data.goods,
        context: this.intersectionObserverContext,
        ob,
      });
    },
    clearIntersectionObserverHandle() {
      if (this.intersectionObserverContext) {
        try {
          this.intersectionObserverContext.disconnect();
        } catch (e) {}

        this.intersectionObserverContext = null;
      }
    },
  },
});
