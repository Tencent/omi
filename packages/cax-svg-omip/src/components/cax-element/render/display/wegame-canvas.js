let wegameCanvas = null
if (typeof wx !== 'undefined') {
  // 在开放数据域的环境下，用`wx.getSharedCanvas`创建canvas
  if (wx.getSharedCanvas) {
    wegameCanvas = wx.getSharedCanvas()
  } else if (wx.createCanvas) {
    wegameCanvas = wx.createCanvas()
  }
}

export default wegameCanvas
