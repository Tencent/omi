Page({
  data: {
    logisticsData: {
      logisticsNo: '',
      nodes: [],
      company: '',
      phoneNumber: '',
    },
    active: 0,
  },

  onLoad(query) {
    let data;
    try {
      data = JSON.parse(decodeURIComponent(query.data || '{}'));
    } catch (e) {
      console.warn('物流节点数据解析失败', e);
    }
    if (Number(query.source) === 2) {
      const service = {
        company: data.logisticsCompanyName,
        logisticsNo: data.logisticsNo,
        nodes: data.nodes,
      };
      this.setData({
        logisticsData: service,
      });
    } else if (data) {
      this.setData({ logisticsData: data });
    }
  },

  onLogisticsNoCopy() {
    wx.setClipboardData({ data: this.data.logisticsData.logisticsNo });
  },

  onCall() {
    const { phoneNumber } = this.data.logisticsData;
    wx.makePhoneCall({
      phoneNumber,
    });
  },
});
