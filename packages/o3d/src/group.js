class Group {
  constructor() {
    this.children = []
  }

  add(child){
    this.children.push(child)
  }

  render(ctx) {
    let list = this.children.slice()
    for (let i = 0, l = list.length; i < l; i++) {
      let child = list[i]
      if (!child.isVisible()) {
        continue
      }

      // draw the child:
      ctx.save()
      child.updateContext(ctx)
      child.render(ctx)
      ctx.restore()
    }
    return true
  }
}

export {Group}
