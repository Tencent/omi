let wegameCanvas = null
if (typeof wx !== 'undefined' && wx.createCanvas) {
  wegameCanvas = wx.createCanvas()
}

export default wegameCanvas
