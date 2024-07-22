/* eslint-disable no-param-reassign */
/* eslint-disable no-nested-ternary */
import Toast from 'tdesign-miniprogram/toast/index';

Component({
  options: {
    multipleSlots: true,
    addGlobalClass: true,
  },

  properties: {
    src: {
      type: String,
    },
    title: String,
    show: {
      type: Boolean,
      value: false,
    },
    limitBuyInfo: {
      type: String,
      value: '',
    },
    isStock: {
      type: Boolean,
      value: true,
    },
    limitMaxCount: {
      type: Number,
      value: 999,
    },
    limitMinCount: {
      type: Number,
      value: 1,
    },
    skuList: {
      type: Array,
      value: [],
      observer(skuList) {
        if (skuList && skuList.length > 0) {
          if (this.initStatus) {
            this.initData();
          }
        }
      },
    },
    specList: {
      type: Array,
      value: [],
      observer(specList) {
        if (specList && specList.length > 0) {
          this.initData();
        }
      },
    },
    outOperateStatus: {
      type: Boolean,
      value: false,
    },
    hasAuth: {
      type: Boolean,
      value: false,
    },
    count: {
      type: Number,
      value: 1,
      observer(count) {
        this.setData({
          buyNum: count,
        });
      },
    },
  },

  initStatus: false,
  selectedSku: {},
  selectSpecObj: {},

  data: {
    buyNum: 1,
    isAllSelectedSku: false,
  },

  methods: {
    initData() {
      const { skuList } = this.properties;
      const { specList } = this.properties;
      specList.forEach((item) => {
        if (item.specValueList.length > 0) {
          item.specValueList.forEach((subItem) => {
            const obj = this.checkSkuStockQuantity(
              subItem.specValueId,
              skuList,
            );
            subItem.hasStockObj = obj;
          });
        }
      });
      const selectedSku = {};
      specList.forEach((item) => {
        selectedSku[item.specId] = '';
      });
      this.setData({
        specList,
      });
      this.selectSpecObj = {};
      this.selectedSku = {};
      this.initStatus = true;
    },

    checkSkuStockQuantity(specValueId, skuList) {
      let hasStock = false;
      const array = [];
      skuList.forEach((item) => {
        (item.specInfo || []).forEach((subItem) => {
          if (subItem.specValueId === specValueId && item.quantity > 0) {
            const subArray = [];
            (item.specInfo || []).forEach((specItem) => {
              subArray.push(specItem.specValueId);
            });
            array.push(subArray);
            hasStock = true;
          }
        });
      });
      return {
        hasStock,
        specsArray: array,
      };
    },

    chooseSpecValueId(specValueId, specId) {
      const { selectSpecObj } = this;
      const { skuList, specList } = this.properties;
      if (selectSpecObj[specId]) {
        selectSpecObj[specId] = [];
        this.selectSpecObj = selectSpecObj;
      } else {
        selectSpecObj[specId] = [];
      }

      const itemAllSpecArray = [];
      const itemUnSelectArray = [];
      const itemSelectArray = [];
      specList.forEach((item) => {
        if (item.specId === specId) {
          const subSpecValueItem = item.specValueList.find(
            (subItem) => subItem.specValueId === specValueId,
          );
          let specSelectStatus = false;
          item.specValueList.forEach((n) => {
            itemAllSpecArray.push(n.hasStockObj.specsArray);
            if (n.isChoosed) {
              specSelectStatus = true;
            }
            if (n.hasStockObj.hasStock) {
              itemSelectArray.push(n.specValueId);
            } else {
              itemUnSelectArray.push(n.specValueId);
            }
          });
          if (specSelectStatus) {
            selectSpecObj[specId] = this.flatten(
              subSpecValueItem?.hasStockObj.specsArray.concat(itemSelectArray),
            );
          } else {
            const subSet = function (arr1, arr2) {
              const set2 = new Set(arr2);
              const subset = [];
              arr1.forEach((val) => {
                if (!set2.has(val)) {
                  subset.push(val);
                }
              });
              return subset;
            };
            selectSpecObj[specId] = subSet(
              this.flatten(itemAllSpecArray),
              this.flatten(itemUnSelectArray),
            );
          }
        } else {
          // 未点击规格的逻辑
          const itemSelectArray = [];
          let specSelectStatus = false;
          item.specValueList.map(
            // 找到有库存的规格数组
            (n) => {
              itemSelectArray.push(n.hasStockObj.specsArray);
              if (n.isChoosed) {
                specSelectStatus = true;
              }
              n.hasStockObj.hasStock = true;
              return n;
            },
          );
          if (specSelectStatus) {
            selectSpecObj[item.specId] = this.flatten(itemSelectArray);
          } else {
            delete selectSpecObj[item.specId];
          }
        }
        this.selectSpecObj = selectSpecObj;
      });
      const combatArray = Object.values(selectSpecObj);
      if (combatArray.length > 0) {
        const showArray = combatArray.reduce((x, y) =>
          this.getIntersection(x, y),
        );
        const lastResult = Array.from(new Set(showArray));
        specList.forEach((item) => {
          item.specValueList.forEach((subItem) => {
            if (lastResult.includes(subItem.specValueId)) {
              subItem.hasStockObj.hasStock = true;
            } else {
              subItem.hasStockObj.hasStock = false;
            }
          });
        });
      } else {
        specList.forEach((item) => {
          if (item.specValueList.length > 0) {
            item.specValueList.forEach((subItem) => {
              const obj = this.checkSkuStockQuantity(
                subItem.specValueId,
                skuList,
              );
              subItem.hasStockObj = obj;
            });
          }
        });
      }
      this.setData({
        specList,
      });
    },

    flatten(input) {
      const stack = [...input];
      const res = [];
      while (stack.length) {
        const next = stack.pop();
        if (Array.isArray(next)) {
          stack.push(...next);
        } else {
          res.push(next);
        }
      }
      return res.reverse();
    },

    getIntersection(array, nextArray) {
      return array.filter((item) => nextArray.includes(item));
    },

    toChooseItem(e) {
      const { isStock } = this.properties;
      if (!isStock) return;
      const { id } = e.currentTarget.dataset;
      const specId = e.currentTarget.dataset.specid;
      const hasStock = e.currentTarget.dataset.hasstock;
      if (!hasStock) {
        Toast({
          context: this,
          selector: '#t-toast',
          message: '该规格已售罄',
          icon: '',
          duration: 1000,
        });
        return;
      }

      let { selectedSku } = this;
      const { specList } = this.properties;
      selectedSku =
        selectedSku[specId] === id
          ? { ...this.selectedSku, [specId]: '' }
          : { ...this.selectedSku, [specId]: id };
      specList.forEach((item) => {
        item.specValueList.forEach((valuesItem) => {
          if (item.specId === specId) {
            valuesItem.isChoosed =
              valuesItem.specValueId === selectedSku[specId];
          }
        });
      });
      this.chooseSpecValueId(id, specId);
      const isAllSelectedSku = this.isAllSelected(specList, selectedSku);
      if (!isAllSelectedSku) {
        this.setData({
          selectSkuSellsPrice: 0,
          selectSkuImg: '',
        });
      }
      this.setData({
        specList,
        isAllSelectedSku,
      });
      this.selectedSku = selectedSku;
      this.triggerEvent('change', {
        specList,
        selectedSku,
        isAllSelectedSku,
      });
    },

    // 判断是否所有的sku都已经选中
    isAllSelected(skuTree, selectedSku) {
      const selected = Object.keys(selectedSku).filter(
        (skuKeyStr) => selectedSku[skuKeyStr] !== '',
      );
      return skuTree.length === selected.length;
    },

    handlePopupHide() {
      this.triggerEvent('closeSpecsPopup', {
        show: false,
      });
    },

    specsConfirm() {
      const { isStock } = this.properties;
      if (!isStock) return;
      this.triggerEvent('specsConfirm');
    },

    addCart() {
      const { isStock } = this.properties;
      if (!isStock) return;
      this.triggerEvent('addCart');
    },

    buyNow() {
      const { isAllSelectedSku } = this.data;
      const { isStock } = this.properties;
      if (!isStock) return;
      this.triggerEvent('buyNow', {
        isAllSelectedSku,
      });
    },

    // 加
    handleBuyNumPlus() {
      const { buyNum } = this.data;
      const { isStock } = this.properties;
      if (!isStock) return;
      const nextBuyNum = Number(buyNum) + 1;
      this.setBuyNum(nextBuyNum > 999 ? buyNum : nextBuyNum);
    },

    // 减
    handleBuyNumMinus() {
      const { buyNum } = this.data;
      const { limitMinCount } = this.properties;
      const { isStock } = this.properties;
      if (!isStock || buyNum < limitMinCount + 1) return;
      const nextBuyNum = Number(buyNum) - 1;
      this.setBuyNum(nextBuyNum < 1 ? buyNum : nextBuyNum);
    },

    // 总处理
    setBuyNum(buyNum) {
      this.setData({
        buyNum,
      });
      this.triggerEvent('changeNum', {
        buyNum,
      });
    },

    // 输入框
    handleBuyNumChange(e) {
      const {
        detail: { value },
      } = e;
      const valInNum = Number(value);
      const { limitMaxCount, limitMinCount } = this.properties;
      const nextData = {
        buyNum:
          valInNum < limitMinCount
            ? limitMinCount
            : valInNum > limitMaxCount
            ? limitMaxCount
            : valInNum,
      };
      this.setData(nextData);
    },
  },
});
