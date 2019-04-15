let tmpCtx = null

if (typeof document !== 'undefined') {
  tmpCtx = document.createElement('canvas').getContext('2d')
} else if (typeof wx !== 'undefined' && wx.createCanvas) {
  tmpCtx = wx.createCanvas().getContext('2d')
}

export function createImageData(w, h) {
  return tmpCtx.createImageData(w, h)
}
