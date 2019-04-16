import DisplayObject from './display-object.js'

class Group extends DisplayObject {
  constructor(data) {
    super(data)
    this.children = []
  }

  add(child) {
    const len = arguments.length

    for (let i = 0; i < len; i++) {
      const c = arguments[i]
      const parent = c.parent
      if (parent) {
        parent.removeChildAt(parent.children.indexOf(c))
      }
      this.children.push(c)
      c.parent = this
    }
  }

  addChildAt(child, index) {
    var par = child.parent
    par && par.removeChildAt(par.children.indexOf(child))
    child.parent = this
    this.children.splice(index, 0, child)
  }

  removeChildAt(index) {
    var child = this.children[index]
    if (child) {
      child.parent = null
    }
    this.children.splice(index, 1)
  }

  replace(current, pre) {
    const index = pre.parent.children.indexOf(pre)
    this.removeChildAt(index)
    this.addChildAt(current, index)
  }

  remove(child) {
    const len = arguments.length
    let cLen = this.children.length

    for (let i = 0; i < len; i++) {
      for (let j = 0; j < cLen; j++) {
        if (child.id === this.children[j].id) {
          child.parent = null
          this.children.splice(j, 1)
          j--
          cLen--
        }
      }
    }
  }

  empty() {
    this.children.forEach(child => {
      child.parent = null
    })
    this.children.length = 0
  }

  destroy() {
    this.empty()
    // Stage does not have a parent
    this.parent && super.destroy()
  }
}

export default Group
