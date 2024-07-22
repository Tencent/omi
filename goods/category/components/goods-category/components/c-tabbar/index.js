Component({
  externalClasses: ['custom-class'],

  properties: {
    activeKey: {
      type: Number,
      value: 0,
    },
    tabList: {
      type: Array,
      value: [],
    },
    showMore: Boolean, // 是否需要下拉功能
  },
  observers: {
    activeKey(newVal) {
      if (this.properties.tabList && newVal) {
        this.setActive(newVal).catch((e) => {
          console.error(e);
        });
      }
    },
  },

  data: {
    currentActive: -1,
  },
  attached() {
    this.setActive(this.properties.activeKey).catch((e) => {
      console.error(e);
    });
  },

  methods: {
    setActive(activeKey) {
      if (
        !this.properties.tabList[activeKey] ||
        this.properties.tabList[activeKey].disabled
      ) {
        return Promise.reject('数据异常或不可操作');
      }
      return new Promise((resolve) => {
        this.setData(
          {
            currentActive: activeKey,
          },
          () => resolve(),
        );
      });
    },
    onClick(event) {
      let activeKey;
      if (event.type === 'select') {
        activeKey = event.detail;
      } else {
        activeKey = event.currentTarget.dataset.index;
      }
      this.setActive(activeKey)
        .then(() => {
          const { currentActive } = this.data;
          this.triggerEvent('change', { index: currentActive });
        })
        .catch((e) => {
          console.error(e);
        });
    },
  },
});
