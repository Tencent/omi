Component({
  properties: {
    show: Boolean,
    title: String,
    options: {
      type: Object,
      observer() {
        this.init();
      },
    },
    multiple: {
      type: Boolean,
      observer() {
        this.init();
      },
    },
    showConfirmButton: Boolean,
    showCloseButton: Boolean,
    confirmButtonText: {
      type: String,
      value: '确定',
    },
    cancelButtonText: {
      type: String,
      value: '取消',
    },
    emptyTip: {
      type: String,
      value: '请选择',
    },
  },

  data: {
    _options: [],
    checkedIndexes: [],
  },

  methods: {
    attached() {
      this.toast = this.selectComponent('#t-toast');
    },

    init() {
      const checkedIndexes = [];
      const _options = this.properties.options.map((opt, i) => {
        const checked = !!opt.checked;
        if (checked) {
          if (this.properties.multiple) checkedIndexes[0] = i;
          else checkedIndexes.push(i);
        }
        return {
          title: opt.title,
          checked,
        };
      });
      this.setData({ checkedIndexes, _options });
    },

    onOptionTap(e) {
      const { index } = e.currentTarget.dataset;
      const { checkedIndexes } = this.data;
      let data = {};
      if (this.properties.multiple) {
        if (checkedIndexes.includes(index)) {
          checkedIndexes.splice(index, 1);
          data = { checkedIndexes, [`_options[${index}].checked`]: false };
        } else {
          checkedIndexes.push(index);
          data = { checkedIndexes, [`_options[${index}].checked`]: true };
        }
      } else {
        if (checkedIndexes[0] === index) {
          // 单选不可取消选择
          return;
        }
        data = {
          [`_options[${index}].checked`]: true,
          checkedIndexes: [index],
        };
        if (checkedIndexes[0] !== undefined) {
          data[`_options[${checkedIndexes[0]}].checked`] = false;
        }
      }
      this.setData(data);
      this.triggerEvent('select', { index });
      this._onOptionTap && this._onOptionTap(index);
      if (!this.properties.showConfirmButton && !this.properties.multiple) {
        // 没有确认按钮且是单选的情况下，选择选项则自动确定
        this._onConfirm && this._onConfirm([index]);
        this.setData({ show: false });
      }
    },

    onCancel() {
      this.triggerEvent('cancel');
      this._onCancel && this._onCancel();
      this.setData({ show: false });
    },

    onConfirm() {
      if (this.data.checkedIndexes.length === 0) {
        this.toast.show({
          icon: '',
          text: this.properties.emptyTip,
        });
        return;
      }
      const indexed = this.data.checkedIndexes;
      this.triggerEvent('confirm', { indexed });
      this._onConfirm && this._onConfirm(indexed);
      this.setData({ show: false });
    },
  },
});
