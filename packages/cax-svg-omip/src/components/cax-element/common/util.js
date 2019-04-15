export function getImageInWx(img, callback) {
  if (
    (img.indexOf('https://') === -1 && img.indexOf('http://') === -1) ||
    img.indexOf('http://tmp/') === 0
  ) {
    wx.getImageInfo({
      src: img,
      success: info => {
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
      success: res => {
        if (res.statusCode === 200) {
          wx.getImageInfo({
            src: res.tempFilePath,
            success: info => {
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

function getGlobal() {
  if (
    typeof global !== 'object' ||
    !global ||
    global.Math !== Math ||
    global.Array !== Array
  ) {
    if (typeof self !== 'undefined') {
      return self
    } else if (typeof window !== 'undefined') {
      return window
    } else if (typeof global !== 'undefined') {
      return global
    }
    return (function() {
      return this
    })()
  }
  return global
}

export function toSVGString(shapes) {
  return shapes
    .map(function(shape) {
      shape.forEach(function(point, idx) {
        if (!idx) {
          /*
           * 若是第一个点数组，那么对该点数组的处理是前面加M,然后前两个点后面加C
           * */
          point.splice(2, 0, 'C')
          point.unshift('M')
        } else {
          /*
           * 除了第一个点数据外,所有的点数组的前两个点删除掉
           * */
          point.splice(0, 2, 'C')
        }
      })
      return shape
        .map(function(point) {
          return point.join(' ')
        })
        .join('')
    })
    .join('')
}

const root = getGlobal()

export default {
  getImageInWx,
  root,
  isWeapp:
    typeof wx !== 'undefined' && !wx.createCanvas && wx.createCanvasContext,
  isWegame: typeof wx !== 'undefined' && wx.createCanvas
}
