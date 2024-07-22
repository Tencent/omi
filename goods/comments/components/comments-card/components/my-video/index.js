Component({
  externalClasses: ['my-video', 'my-cover-img', 'my-play-icon'],
  properties: {
    videoSrc: { type: String },
  },
  data: {
    isShow: true,
  },

  options: {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
  },

  attached() {
    this.videoContext = wx.createVideoContext('myVideo', this);
  },

  fullScreen: false,

  methods: {
    // 点击封面自定义播放按钮时触发
    bindplay(e) {
      this.setData({
        isShow: false,
      });
      this.videoContext.play();
      this.triggerEvent('play', e);
    },

    bindplayByVideo(e) {
      this.setData({
        isShow: false,
      });
      this.triggerEvent('play', e);
    },

    // 监听播放到末尾时触发
    bindended(e) {
      if (!this.fullScreen) {
        this.setData({
          isShow: true,
        });
      }
      this.triggerEvent('ended', e);
    },
    // 监听暂停播放时触发
    bindpause(e) {
      this.triggerEvent('pause', e);
    },
    bindfullscreenchange(e) {
      const fullScreen = e?.detail?.fullScreen;
      this.fullScreen = fullScreen;
    },
  },
});
