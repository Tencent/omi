import cax from 'cax'

const caxProps = ['x', 'y', 'scaleX', 'scaleY', 'scale', 'rotation', 'skewX', 'skewY', 'originX', 'originY', 'alpha', 'compositeOperation', 'cursor', 'fixed', 'shadow']

export default class ObjectPool {
  constructor() {
    this.textList = []
    this.bitmapList = []
    this.testListUsing = []
    this.bitmapListUsing = []
  }

  reset() {
    this.testListUsing.forEach(item => {
      this.textList.push(item)
    })
    this.bitmapListUsing.forEach(item => {
      this.bitmapList.push(item)
    })
  }

  getObj(type, vnode, stage) {
    const attr = vnode.attributes
    switch (type) {
      case 'text':
        if (this.textList.length > 0) {
          const obj = this.textList[0]
          mix(attr, obj)
          return obj
        } else {
          //https://github.com/dntzhang/cax/blob/master/packages/cax/src/render/display/text.js
          const text = new cax.Text(attr.text, {
            font: attr.font,
            color: attr.color,
            baseline: attr.baseline
          })
          mix(attr, text)
          this.testListUsing.push(text)
          return text
        }

      case 'bitmap':
        if (this.bitmapList.length > 0) {
          const obj = this.bitmapList[0]
          mix(attr, obj)
          return obj
        } else {
          const bitmap = new cax.Bitmap(attr.src, () => {
            stage.update()
          })

          mix(attr, bitmap)

          this.bitmapListUsing.push(bitmap)

          return bitmap
        }

    }

  }

  add(type) {
    switch (type) {
      case 'text':
        break
      case 'bitmap':
        break
    }

  }
}

function reset(obj) {
  obj.x = 0
  obj.y = 0
  obj.scale = 1
  obj.rotation = 0
  obj.skewX = 0
  obj.skewY = 0
  obj.originX = 0
  obj.originY = 0
  obj.alpha = 1
  obj.compositeOperation = null
  obj.cursor = 'default'
  obj.fixed = false
  obj.shadow = null
}



function mix(attr, obj) {
  caxProps.forEach(prop => {
    if (attr.hasOwnProperty(prop)) {
      obj[prop] = attr[prop]
    }
  })

  Object.keys(attr).forEach(key => {
    if (key[0] == 'o' && key[1] == 'n') {
      const type = key.toLowerCase().substring(2)
      obj.on(type, attr[key])
    }
  })
}




// getImageInfo(attr.src, (w, h, img) => {
//   obj.rect[0] = 0
//   obj.rect[1] = 0
//   obj.rect[2] = w
//   obj.rect[3] = h
//   obj.width = w
//   obj.height = h
//   obj.img = img


// })
// const img = new Image()
// function getImageInfo(src, callback) {

//   img.onload = () => {
//     callback(img.width, img.height, img)
//   }
//   img.src = src
// }
