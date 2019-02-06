export function getImageInWx (img, callback) {
  if ((img.indexOf('https://') === -1 && img.indexOf('http://') === -1) || img.indexOf('http://tmp/') === 0) {
    wx.getImageInfo({
      src: img,
      success: (info) => {
        callback({
          img: img,
          width: info.width,
          height: info.height
        })
      }
    })
  } else {
    wx.downloadFile({
      url: img,
      success: (res) => {
        if (res.statusCode === 200) {
          wx.getImageInfo({
            src: res.tempFilePath,
            success: (info) => {
              callback({
                img: res.tempFilePath,
                width: info.width,
                height: info.height
              })
            }
          })
        }
      }
    })
  }
}

function getGlobal () {
  if (typeof global !== 'object' || !global || global.Math !== Math || global.Array !== Array) {
    if (typeof self !== 'undefined') {
      return self
    } else if (typeof window !== 'undefined') {
      return window
    } else if (typeof global !== 'undefined') {
      return global
    }
    return (function () {
      return this
    })()
  }
  return global
}

const root = getGlobal()

export default{
  getImageInWx,
  root,
  isWeapp: typeof wx !== 'undefined' && !wx.createCanvas,
  isWegame: typeof wx !== 'undefined' && wx.createCanvas
}
