/*
 * @Author: rileycai
 * @Date: 2022-03-05 16:47:16
 * @LastEditTime: 2022-03-05 16:48:32
 * @LastEditors: rileycai
 * @Description:
 * @FilePath: /tdesign-miniprogram-starter/pages/order/order-confirm/components/address-card/index.js
 */
Component({
  externalClasses: ['wr-class'],
  properties: {
    addressData: {
      type: Object,
      value: {},
    },
  },
  methods: {
    onAddressTap() {
      this.triggerEvent('addressclick');
    },
    onAddTap() {
      this.triggerEvent('addclick');
    },
  },
});
