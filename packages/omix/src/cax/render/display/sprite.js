import DisplayObject from './display-object'
import util from '../../common/util'
import Bitmap from './bitmap'

class Sprite extends DisplayObject {
  constructor (option) {
    super()
    this.option = option
    const len = this.option.imgs.length
    let count = 0
    const firstImg = this.option.imgs[0]
    this.imgMap = {}

    if (util.isWeapp) {
      this.option.imgs.forEach(img => {
        util.getImageInWx(img, (result) => {
          this.imgMap[img] = result.img
          count++
          if (count === len) {
            this.img = this.imgMap[firstImg]
            this.rect = [0, 0, 0, 0]
          }
        })
      }
      )
    } else {
      if (typeof firstImg === 'string') {
        const len = this.option.imgs.length
        let loadedCount = 0
        this.option.imgs.forEach(src => {
          if (Bitmap.cache[src]) {
            this.imgMap[src] = Bitmap.cache[src]
            loadedCount++
            if (loadedCount === len) {
              this.img = this.imgMap[firstImg]
              this.rect = [0, 0, 0, 0]
            }
          } else {
            const img = util.isWegame ? wx.createImage() : new window.Image()
            img.onload = () => {
              this.imgMap[src] = img
              loadedCount++
              if (loadedCount === len) {
                this.img = this.imgMap[firstImg]
                this.rect = [0, 0, 0, 0]
              }
              Bitmap.cache[src] = img
            }
            img.src = src
          }
        })
      } else if (firstImg instanceof Bitmap) {
        this.rect = [0, 0, 0, 0]
        this.img = firstImg.img
      } else {
        this.rect = [0, 0, 0, 0]
        this.img = firstImg
      }
    }

    this.x = option.x || 0
    this.y = option.y || 0
    this.currentFrameIndex = 0
    this.animationFrameIndex = 0
    this.currentAnimation = option.currentAnimation || null

    this.interval = 1e3 / option.framerate

    this.paused = false
    this.animationEnd = option.animationEnd || function () {}
    if (this.currentAnimation) {
      if (option.playOnce) {
        this.gotoAndPlayOnce(this.currentAnimation)
      } else {
        this.gotoAndPlay(this.currentAnimation)
      }
    }
  }

  play () {
    this.paused = false
  }

  pause () {
    this.paused = true
  }

  reset () {
    this.currentFrameIndex = 0
    this.animationFrameIndex = 0
  }

  updateFrame () {
    if (!this.paused) {
      let opt = this.option
      this.dt = Date.now() - this.startTime
      let frames = opt.animations[this.currentAnimation].frames
      const len = frames.length
      const index = Math.floor(this.dt / this.interval % len)
      this.rect = opt.frames[ frames[ index ] ]
      const rectLen = this.rect.length

      rectLen > 4 && (this.originX = this.rect[2] * this.rect[4])
      rectLen > 5 && (this.originY = this.rect[3] * this.rect[5])
      if (rectLen > 6) {
        const img = this.option.imgs[this.rect[6]]
        this.img = typeof img === 'string' ? this.imgMap[img] : img
      }

      if (index === len - 1 && (!this.endTime || Date.now() - this.endTime > this.interval)) {
        this.endTime = Date.now()
        this.animationEnd()
        if (this._willDestroy) {
          this.destroy()
        }
      }
    }
  }

  gotoAndPlay (animation) {
    this.paused = false
    this.reset()
    this.currentAnimation = animation
    this.startTime = Date.now()
  }

  gotoAndStop (animation) {
    this.reset()
    this.paused = true
    this.currentAnimation = animation
    var opt = this.option
    var frames = opt.animations[this.currentAnimation].frames
    this.rect = opt.frames[frames[this.animationFrameIndex]]
    const rect = this.rect
    this.width = rect[2]
    this.height = rect[3]
    const rectLen = rect.length
    rectLen > 4 && (this.originX = rect[2] * rect[4])
    rectLen > 5 && (this.originY = rect[3] * rect[5])
    if (rectLen > 6) {
      const img = this.option.imgs[rect[6]]
      this.img = typeof img === 'string' ? this.imgMap[img] : img
    }
  }

  gotoAndPlayOnce (animation) {
    this.gotoAndPlay(animation)
    this._willDestroy = true
  }
}

export default Sprite
