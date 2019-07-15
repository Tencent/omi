import option from "./stage-propagation-tag"

class EventDispatcher {
  constructor () {
    this._listeners = null
    this._captureListeners = null
  }

  addEventListener (type, listener, useCapture) {
    var listeners
    if (useCapture) {
      listeners = this._captureListeners = this._captureListeners || {}
    } else {
      listeners = this._listeners = this._listeners || {}
    }
    var arr = listeners[type]
    if (arr) { this.removeEventListener(type, listener, useCapture) }
    arr = listeners[type] // remove may have deleted the array
    if (!arr) { listeners[type] = [listener] } else { arr.push(listener) }
    return listener
  }

  removeEventListener (type, listener, useCapture) {
    var listeners = useCapture ? this._captureListeners : this._listeners
    if (!listeners) { return }
    var arr = listeners[type]
    if (!arr) { return }

    arr.every((item, index) => {
      if (item === listener) {
        arr.splice(index, 1)
        return false
      }
      return true
    })
  }

  on (type, listener, useCapture) {
    this.addEventListener(type, listener, useCapture)
  }

  off (type, listener, useCapture) {
    this.removeEventListener(type, listener, useCapture)
  }

  dispatchEvent (evt) {
      option.stagePropagationStopped[evt.type] = false

      var top = this, list = [top]
      while (top.parent) { list.push(top = top.parent) }
      var i, l = list.length

      // capture & atTarget
      for (i = l - 1; i >= 0 && !evt.propagationStopped; i--) {
        list[i]._dispatchEvent(evt, 0)
      }
      // bubbling
      for (i = 0; i < l && !evt.propagationStopped; i++) {
        list[i]._dispatchEvent(evt, 1)
      }
    
  }

  _dispatchEvent (evt, type) {
    evt.target = this
    if (this._captureListeners && type === 0) {
      let cls = this._captureListeners[evt.type]
      cls && cls.forEach(fn => {
        fn.call(this, evt)
      })
    }

    if (this._listeners && type === 1) {
      let ls = this._listeners[evt.type]
      ls && ls.forEach(fn => {
        fn.call(this, evt)
      })
    }
  }
}

export default EventDispatcher
