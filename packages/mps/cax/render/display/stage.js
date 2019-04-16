import wegameCanvas from './wegame-canvas'
import Group from './group.js'
import Renderer from '../render/renderer.js'
import HitRender from '../render/hit-render.js'
import Event from '../base/event.js'
import WeStage from './we-stage'
import option from '../base/stage-propagation-tag'

class Stage extends Group {
  constructor(width, height, renderTo) {
    super()
    const len = arguments.length
    this.isWegame = typeof wx !== 'undefined' && wx.createCanvas
    this.moveDetectionInterval = 0
    if (len === 0) {
      // wegame
      this.canvas = wegameCanvas
      this.disableMoveDetection = true
      this.moveDetectionInterval = 500
    } else if (len === 4) {
      // weapp
      return new WeStage(arguments[0], arguments[1], arguments[2], arguments[3])
    } else {
      if (len === 1) {
        this.canvas =
          typeof width === 'string' ? document.querySelector(width) : width
      } else {
        this.renderTo =
          typeof renderTo === 'string'
            ? document.querySelector(renderTo)
            : renderTo
        if (this.renderTo.tagName === 'CANVAS') {
          this.canvas = this.renderTo
          this.canvas.width = width
          this.canvas.height = height
        } else {
          this.canvas = document.createElement('canvas')
          this.canvas.width = width
          this.canvas.height = height
          this.renderTo.appendChild(this.canvas)
        }
      }
      // get rect again when trigger onscroll onresize event!?
      this._boundingClientRect = this.canvas.getBoundingClientRect()

      this.offset = this._getOffset(this.canvas)
    }
    this.renderer = new Renderer(this.canvas)
    if (this.isWegame) {
      wx.onTouchStart(evt => this._handleMouseDown(evt))

      wx.onTouchMove(evt => this._handleMouseMove(evt))

      wx.onTouchEnd(evt => this._handleMouseUp(evt))
    } else {
      this.canvas.addEventListener('click', evt => this._handleClick(evt))
      this.canvas.addEventListener('mousedown', evt =>
        this._handleMouseDown(evt)
      )
      this.canvas.addEventListener('mousemove', evt =>
        this._handleMouseMove(evt)
      )
      this.canvas.addEventListener('mouseup', evt => this._handleMouseUp(evt))
      this.canvas.addEventListener('mouseout', evt => this._handleMouseOut(evt))
      this.canvas.addEventListener('touchstart', evt =>
        this._handleMouseDown(evt)
      )
      this.canvas.addEventListener('touchmove', evt =>
        this._handleMouseMove(evt)
      )
      this.canvas.addEventListener('touchend', evt => this._handleMouseUp(evt))

      this.canvas.addEventListener('dblclick', evt => this._handleDblClick(evt))
      // this.addEvent(this.canvas, "mousewheel", this._handleMouseWheel.bind(this));

      document.addEventListener('contextmenu', evt =>
        this._handleContextmenu(evt)
      )
    }

    this.borderTopWidth = 0
    this.borderLeftWidth = 0

    this.hitAABB = false
    this._hitRender = new HitRender()

    this._overObject = null

    this._scaleX = 1
    this._scaleY = 1

    this._mouseDownX = 0
    this._mouseDownY = 0

    this._mouseUpX = 0
    this._mouseUpY = 0

    this.willDragObject = null
    this.preStageX = null
    this.preStageY = null

    this.width = this.canvas.width
    this.height = this.canvas.height

    this.___instanceof = 'Stage'

    this._moveDetectionTime = Date.now()
  }

  _handleContextmenu(evt) {
    this._getObjectUnderPoint(evt)
  }

  _handleDblClick(evt) {
    this._getObjectUnderPoint(evt)
  }

  _handleClick(evt) {
    if (
      Math.abs(this._mouseDownX - this._mouseUpX) < 20 &&
      Math.abs(this._mouseDownY - this._mouseUpY) < 20
    ) {
      this._getObjectUnderPoint(evt)
    }
  }

  _handleMouseDown(evt) {
    if (this.isWegame) {
      evt.type = 'touchstart'
    }
    this.offset = this._getOffset(this.canvas)
    let obj = this._getObjectUnderPoint(evt)
    this.willDragObject = obj
    this._mouseDownX = evt.stageX
    this._mouseDownY = evt.stageY
    this.preStageX = evt.stageX
    this.preStageY = evt.stageY
  }

  scaleEventPoint(x, y) {
    this._scaleX = x
    this._scaleY = y
  }

  _handleMouseUp(evt) {
    if (this.isWegame) {
      evt.type = 'touchend'
    }
    const obj = this._getObjectUnderPoint(evt)
    this._mouseUpX = evt.stageX
    this._mouseUpY = evt.stageY

    let mockEvt = new Event()
    mockEvt.stageX = evt.stageX
    mockEvt.stageY = evt.stageY
    mockEvt.pureEvent = evt

    this.willDragObject = null
    this.preStageX = null
    this.preStageY = null

    if (
      obj &&
      evt.type === 'touchend' &&
      Math.abs(this._mouseDownX - this._mouseUpX) < 30 &&
      Math.abs(this._mouseDownY - this._mouseUpY) < 30
    ) {
      mockEvt.type = 'tap'
      obj.dispatchEvent(mockEvt)
    }
  }

  _handleMouseOut(evt) {
    this._computeStageXY(evt)
    this.dispatchEvent({
      pureEvent: evt,
      type: 'mouseout',
      stageX: evt.stageX,
      stageY: evt.stageY
    })
  }

  _handleMouseMove(evt) {
    if (Date.now() - this._moveDetectionTime < this.moveDetectionInterval) {
      return
    }
    this._moveDetectionTime = Date.now()

    if (this.isWegame) {
      evt.type = 'touchmove'
    }
    if (this.disableMoveDetection) return
    let obj = this._getObjectUnderPoint(evt)
    let mockEvt = new Event()
    mockEvt.stageX = evt.stageX
    mockEvt.stageY = evt.stageY
    mockEvt.pureEvent = evt

    if (this.willDragObject) {
      mockEvt.type = 'drag'
      mockEvt.dx = mockEvt.stageX - this.preStageX
      mockEvt.dy = mockEvt.stageY - this.preStageY
      this.preStageX = mockEvt.stageX
      this.preStageY = mockEvt.stageY
      this.willDragObject.dispatchEvent(mockEvt)
    }

    if (obj) {
      if (this._overObject === null) {
        mockEvt.type = 'mouseover'
        obj.dispatchEvent(mockEvt)
        this._overObject = obj
        this._setCursor(obj)
      } else {
        if (obj.id !== this._overObject.id) {
          this._overObject.dispatchEvent({
            pureEvent: evt,
            type: 'mouseout',
            stageX: evt.stageX,
            stageY: evt.stageY
          })
          mockEvt.type = 'mouseover'
          obj.dispatchEvent(mockEvt)
          this._setCursor(obj)
          this._overObject = obj
        } else {
          mockEvt.type = 'mousemove'
          obj.dispatchEvent(mockEvt)
          mockEvt.type = 'touchmove'
          obj.dispatchEvent(mockEvt)
        }
      }
    } else if (this._overObject) {
      mockEvt.type = 'mouseout'
      this._overObject.dispatchEvent(mockEvt)
      this._overObject = null
      this._setCursor({ cursor: 'default' })
    }
  }

  _setCursor(obj) {
    if (!this.canvas.style) {
      return
    }
    if (obj.cursor) {
      this.canvas.style.cursor = obj.cursor
    } else if (obj.parent) {
      this._setCursor(obj.parent)
    } else {
      this._setCursor({ cursor: 'default' })
    }
  }

  _getObjectUnderPoint(evt) {
    this._computeStageXY(evt)
    if (this.hitAABB) {
      return this._hitRender.hitAABB(this, evt)
    } else {
      return this._hitRender.hitPixel(this, evt)
    }
  }

  _computeStageXY(evt) {
    this._boundingClientRect = this.isWegame
      ? { left: 0, top: 0 }
      : this.canvas.getBoundingClientRect()
    if (evt.touches || evt.changedTouches) {
      const firstTouch = evt.touches[0] || evt.changedTouches[0]
      if (firstTouch) {
        evt.stageX = (firstTouch.pageX - this.offset[0]) / this._scaleX
        evt.stageY = (firstTouch.pageY - this.offset[1]) / this._scaleY
      }
    } else {
      evt.stageX =
        (evt.clientX - this._boundingClientRect.left - this.borderLeftWidth) /
        this._scaleX
      evt.stageY =
        (evt.clientY - this._boundingClientRect.top - this.borderTopWidth) /
        this._scaleY
    }
  }

  _getOffset(el) {
    if (this.isWegame) {
      return [0, 0]
    }
    let _t = 0,
      _l = 0
    if (
      document.documentElement.getBoundingClientRect &&
      el.getBoundingClientRect
    ) {
      let box = el.getBoundingClientRect()
      _l = box.left
      _t = box.top
    } else {
      while (el.offsetParent) {
        _t += el.offsetTop
        _l += el.offsetLeft
        el = el.offsetParent
      }
      return [_l, _t]
    }
    return [
      _l +
        Math.max(document.documentElement.scrollLeft, document.body.scrollLeft),
      _t + Math.max(document.documentElement.scrollTop, document.body.scrollTop)
    ]
  }

  update() {
    this.renderer.update(this)
  }

  on(type, fn) {
    this.canvas.addEventListener(type, evt => {
      if (!option.stagePropagationStopped[type]) {
        this._computeStageXY(evt)
        fn(evt)
      }
      option.stagePropagationStopped[type] = false
    })
  }

  off(type, fn) {
    this.canvas.removeEventListener(type, fn)
  }
}

export default Stage
