/*
 * @Author: rileycai
 * @Date: 2022-03-14 21:18:07
 * @LastEditTime: 2022-03-22 21:17:16
 * @LastEditors: rileycai
 * @Description:
 * @FilePath: /tdesign-miniprogram-starter/pages/order/pay-result/index.js
 */
Page({
  data: {
    totalPaid: 0,
    orderNo: '',
    groupId: '',
    groupon: null,
    spu: null,
    adUrl: '',
  },

  onLoad(options) {
    const { totalPaid = 0, orderNo = '', groupId = '' } = options;
    this.setData({
      totalPaid,
      orderNo,
      groupId,
    });
  },

  onTapReturn(e) {
    const target = e.currentTarget.dataset.type;
    const { orderNo } = this.data;
    if (target === 'home') {
      wx.switchTab({ url: '/pages/home/home' });
    } else if (target === 'orderList') {
      wx.navigateTo({
        url: `/pages/order/order-list/index?orderNo=${orderNo}`,
      });
    } else if (target === 'order') {
      wx.navigateTo({
        url: `/pages/order/order-detail/index?orderNo=${orderNo}`,
      });
    }
  },

  navBackHandle() {
    wx.navigateBack();
  },
});
