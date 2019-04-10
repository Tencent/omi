import TWEEN from './tween'
import {setRafInterval, clearRafInterval} from './raf-interval'

class To {
  constructor (element) {
    this.element = element
    this.cmds = []
    this.index = 0
    this.tweens = []
    this._pause = false
    this.loop = setRafInterval(function () {
      TWEEN.update()
    }, 15)
    this.cycleCount = 0
  }

  to (target, duration, easing) {
    this.cmds.push(['to'])
    if (arguments.length !== 0) {
      for (let key in target) {
        this.set(key, target[key], duration || 0, easing)
      }
    }
    return this
  }

  set (prop, value, duration, easing) {
    this.cmds[this.cmds.length - 1].push([prop, [value, duration, easing]])
    return this
  }

  x () {
    this.cmds[this.cmds.length - 1].push(['x', arguments])
    return this
  }

  y () {
    this.cmds[this.cmds.length - 1].push(['y', arguments])
    return this
  }

  z () {
    this.cmds[this.cmds.length - 1].push(['z', arguments])
    return this
  }

  rotation () {
    this.cmds[this.cmds.length - 1].push(['rotation', arguments])
    return this
  }

  scaleX () {
    this.cmds[this.cmds.length - 1].push(['scaleX', arguments])
    return this
  }

  scaleY () {
    this.cmds[this.cmds.length - 1].push(['scaleY', arguments])
    return this
  }

  skewX () {
    this.cmds[this.cmds.length - 1].push(['skewX', arguments])
    return this
  }

  skewY () {
    this.cmds[this.cmds.length - 1].push(['skewY', arguments])
    return this
  }

  originX () {
    this.cmds[this.cmds.length - 1].push(['originX', arguments])
    return this
  }

  originY () {
    this.cmds[this.cmds.length - 1].push(['originY', arguments])
    return this
  }

  alpha () {
    this.cmds[this.cmds.length - 1].push(['alpha', arguments])
    return this
  }

  begin (fn) {
    this.cmds[this.cmds.length - 1].begin = fn
    return this
  }

  progress (fn) {
    this.cmds[this.cmds.length - 1].progress = fn
    return this
  }

  end (fn) {
    this.cmds[this.cmds.length - 1].end = fn
    return this
  }

  wait () {
    this.cmds.push(['wait', arguments])
    return this
  }

  then () {
    this.cmds.push(['then', arguments])
    return this
  }

  cycle () {
    this.cmds.push(['cycle', arguments])
    return this
  }

  start () {
    if (this._pause) return
    var len = this.cmds.length
    if (this.index < len) {
      this.exec(this.cmds[this.index], this.index === len - 1)
    } else {
      clearRafInterval(this.loop)
    }
    return this
  }

  pause () {
    this._pause = true
    for (var i = 0, len = this.tweens.length; i < len; i++) {
      this.tweens[i].pause()
    }
    if (this.currentTask === 'wait') {
      this.timeout -= new Date() - this.currentTaskBegin
      this.currentTaskBegin = new Date()
    }
  }

  toggle () {
    if (this._pause) {
      this.play()
    } else {
      this.pause()
    }
  }

  play () {
    this._pause = false
    for (var i = 0, len = this.tweens.length; i < len; i++) {
      this.tweens[i].play()
    }
    var self = this
    if (this.currentTask === 'wait') {
      setTimeout(function () {
        if (self._pause) return
        self.index++
        self.start()
        if (self.index === self.cmds.length && self.complete) self.complete()
      }, this.timeout)
    }
  }

  stop () {
    for (var i = 0, len = this.tweens.length; i < len; i++) {
      this.tweens[i].stop()
    }
    this.cmds.length = 0
  }

  animate (name) {
    this.cmds = this.cmds.concat(To.animationMap[name] || [])
    return this
  }

  exec (cmd, last) {
    var len = cmd.length,
      self = this
    this.currentTask = cmd[0]
    switch (this.currentTask) {
      case 'to':
        self.stepCompleteCount = 0
        for (var i = 1; i < len; i++) {
          var task = cmd[i]
          var ease = task[1][2]
          var target = {}
          var prop = task[0]
          target[prop] = task[1][0]

          var t = new TWEEN.Tween(this.element)
            .to(target, task[1][1])
            .onStart(function () {
              if (cmd.begin) cmd.begin.call(self.element, self.element)
            })
            .onUpdate(function () {
              if (cmd.progress) cmd.progress.call(self.element, self.element)
              // self.element[prop] = this[prop];
            })
            .easing(ease || TWEEN.Easing.Linear.None)
            .onComplete(function () {
              self.stepCompleteCount++
              if (self.stepCompleteCount === len - 1) {
                if (cmd.end) cmd.end.call(self.element, self.element)
                if (last && self.complete) self.complete()
                self.index++
                self.start()
              }
            })
            .start()
          this.tweens.push(t)
        }
        break
      case 'wait':
        this.currentTaskBegin = new Date()
        this.timeout = cmd[1][0]
        setTimeout(function () {
          if (self._pause) return
          self.index++
          self.start()
          if (cmd.end) cmd.end.call(self.element, self.element)
          if (last && self.complete) self.complete()
        }, cmd[1][0])
        break
      case 'then':
        var arg = cmd[1][0]
        arg.index = 0
        arg.complete = function () {
          self.index++
          self.start()
          if (last && self.complete) self.complete()
        }
        arg.start()
        break
      case 'cycle':
        var count = cmd[1][1]
        if (count === undefined) {
          self.index = cmd[1][0] || 0
          self.start()
        } else {
          if (count && self.cycleCount === count) {
            self.index++
            self.start()
            if (last && self.complete) self.complete()
          } else {
            self.cycleCount++
            self.index = cmd[1][0]
            self.start()
          }
        }
        break
    }
  }
}

To.get = function (element) {
  var to = new To(element)
  return to
}

To.animationMap = {}
To.extend = function (animationName, cmds) {
  To.animationMap[animationName] = cmds
}

export default To
