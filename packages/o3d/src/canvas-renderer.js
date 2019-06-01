class CanvasRenderer {
  constructor(ctx) {
    this.ctx = ctx
  }

  begin() {
    this.ctx.beginPath()
  }

  move(elem, point) {
    this.ctx.moveTo(point.x, point.y)
  }

  line(elem, point) {
    this.ctx.lineTo(point.x, point.y)
  }

  bezier(elem, cp0, cp1, end) {
    this.ctx.bezierCurveTo(cp0.x, cp0.y, cp1.x, cp1.y, end.x, end.y)
  }

  closePath() {
    this.ctx.closePath()
  }

  setPath() {}

  renderPath(elem, pathCommands, isClosed) {
    this.begin(this.ctx, elem)
    pathCommands.forEach(function(command) {
      command.render(this.ctx, elem, CanvasRenderer)
    })
    if (isClosed) {
      this.closePath(this.ctx, elem)
    }
  }

  stroke(elem, isStroke, color, lineWidth) {
    if (!isStroke) {
      return
    }
    this.ctx.strokeStyle = color
    this.ctx.lineWidth = lineWidth
    this.ctx.stroke()
  }

  fill(elem, isFill, color) {
    if (!isFill) {
      return
    }
    this.ctx.fillStyle = color
    this.ctx.fill()
  }

  end() {}
}

export { CanvasRenderer }
