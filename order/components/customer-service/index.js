Component({
  externalClasses: ['wr-class'],

  properties: {
    phoneNumber: String,
    desc: String,
  },

  data: {
    show: false,
  },

  methods: {
    onBtnTap() {
      this.setData({
        show: true,
      });
    },

    onDialogClose() {
      this.setData({
        show: false,
      });
    },

    onCall() {
      const { phoneNumber } = this.properties;
      wx.makePhoneCall({
        phoneNumber,
      });
    },
    onCallOnlineService() {
      wx.showToast({
        title: '你点击了在线客服',
      });
    },
  },
});
