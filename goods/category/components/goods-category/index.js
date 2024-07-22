Component({
  externalClasses: ['custom-class'],

  properties: {
    category: {
      type: Array,
    },
    initActive: {
      type: Array,
      value: [],
      observer(newVal, oldVal) {
        if (newVal[0] !== oldVal[0]) {
          this.setActiveKey(newVal[0], 0);
        }
      },
    },
    isSlotRight: {
      type: Boolean,
      value: false,
    },
    level: {
      type: Number,
      value: 3,
    },
  },
  data: {
    activeKey: 0,
    subActiveKey: 0,
  },
  attached() {
    if (this.properties.initActive && this.properties.initActive.length > 0) {
      this.setData({
        activeKey: this.properties.initActive[0],
        subActiveKey: this.properties.initActive[1] || 0,
      });
    }
  },
  methods: {
    onParentChange(event) {
      this.setActiveKey(event.detail.index, 0).then(() => {
        this.triggerEvent('change', [
          this.data.activeKey,
          this.data.subActiveKey,
        ]);
      });
    },
    onChildChange(event) {
      this.setActiveKey(this.data.activeKey, event.detail.index).then(() => {
        this.triggerEvent('change', [
          this.data.activeKey,
          this.data.subActiveKey,
        ]);
      });
    },
    changCategory(event) {
      const { item } = event.currentTarget.dataset;
      this.triggerEvent('changeCategory', {
        item,
      });
    },
    setActiveKey(key, subKey) {
      return new Promise((resolve) => {
        this.setData(
          {
            activeKey: key,
            subActiveKey: subKey,
          },
          () => {
            resolve();
          },
        );
      });
    },
  },
});
