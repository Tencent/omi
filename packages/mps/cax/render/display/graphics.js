import DisplayObject from './display-object.js'

const assMap = {
  fillStyle: true,
  strokeStyle: true,
  lineWidth: true,
  lineCap: true,
  lineDashOffset: true,
  lineJoin: true,
  miterLimit: true
}

class Graphics extends DisplayObject {
  constructor() {
    super()
    this.cmds = []
    this.currentGradient = null
  }

  clearRect() {
    this.cmds.push(['clearRect', arguments])
    return this
  }

  rect() {
    this.cmds.push(['rect', arguments])
    return this
  }

  clear() {
    this.cmds.length = 0
    return this
  }

  setLineDash() {
    this.cmds.push(['setLineDash', arguments])
    return this
  }

  strokeRect() {
    this.cmds.push(['strokeRect', arguments])
    return this
  }

  fillRect() {
    this.cmds.push(['fillRect', arguments])
    return this
  }

  beginPath() {
    this.cmds.push(['beginPath', arguments])
    return this
  }

  arc() {
    this.cmds.push(['arc', arguments])
    return this
  }

  closePath() {
    this.cmds.push(['closePath', arguments])
    return this
  }

  fillStyle() {
    this.cmds.push(['fillStyle', arguments])
    return this
  }

  fill() {
    this.cmds.push(['fill', arguments])
    return this
  }

  strokeStyle() {
    this.cmds.push(['strokeStyle', arguments])
    return this
  }

  lineWidth() {
    this.cmds.push(['lineWidth', arguments])
    return this
  }

  lineCap() {
    this.cmds.push(['lineCap', arguments])
    return this
  }

  lineDashOffset() {
    this.cmds.push(['lineDashOffset', arguments])
    return this
  }

  lineJoin() {
    this.cmds.push(['lineJoin', arguments])
    return this
  }

  miterLimit() {
    this.cmds.push(['miterLimit', arguments])
    return this
  }

  stroke() {
    this.cmds.push(['stroke', arguments])
    return this
  }

  moveTo() {
    this.cmds.push(['moveTo', arguments])
    return this
  }

  lineTo() {
    this.cmds.push(['lineTo', arguments])
    return this
  }

  bezierCurveTo() {
    this.cmds.push(['bezierCurveTo', arguments])
    return this
  }

  quadraticCurveTo() {
    this.cmds.push(['quadraticCurveTo', arguments])
    return this
  }

  createRadialGradient() {
    this.cmds.push(['createRadialGradient', arguments])
    return this
  }

  createLinearGradient() {
    this.cmds.push(['createLinearGradient', arguments])
    return this
  }

  addColorStop() {
    this.cmds.push(['addColorStop', arguments])
    return this
  }

  fillGradient() {
    this.cmds.push(['fillGradient'])
    return this
  }

  arcTo() {
    this.cmds.push(['arcTo', arguments])
    return this
  }

  render(ctx) {
    this.cmds.forEach(cmd => {
      const methodName = cmd[0]
      if (assMap[methodName]) {
        ctx[methodName] = cmd[1][0]
      } else if (methodName === 'addColorStop') {
        this.currentGradient &&
          this.currentGradient.addColorStop(cmd[1][0], cmd[1][1])
      } else if (methodName === 'fillGradient') {
        ctx.fillStyle = this.currentGradient
      } else {
        let result = ctx[methodName].apply(
          ctx,
          Array.prototype.slice.call(cmd[1])
        )
        if (
          methodName === 'createRadialGradient' ||
          methodName === 'createLinearGradient'
        ) {
          this.currentGradient = result
        }
      }
    })
  }
}

export default Graphics
