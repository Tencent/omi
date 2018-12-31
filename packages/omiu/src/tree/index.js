import { define, WeElement } from 'omi'
import './tree-node'
import css from './_index.css'

define('o-tree', class extends WeElement {


  moveNode(id, parentId) {
    if (id === parentId) {
      return
    }

    if (this.check(parentId, id)) {
      let parent = this.getChildById(parentId, this.data.children)

      if (parent.type !== 'group') return
      let child = this.removeChildById(id, this.data.children)
      parent.children.push(child)
      this.update()
    }
  }

  check(parentId, childId) {
    let current = this.getChildById(childId, this.data.children),
      children = current.children
    for (let i = 0, len = children.length; i < len; i++) {
      let child = children[i]
      if (child.id === parentId) {
        return false
      }

      let errorIds = this.check(parentId, child.id)
      if (!errorIds) {
        return false
      }
    }

    return true
  }

  removeChildById(id, children) {

    for (let i = 0, len = children.length; i < len; i++) {
      let child = children[i]
      if (child.id === id) {
        children.splice(i, 1)
        return child
      }

      let target = this.removeChildById(id, child.children)
      if (target) {
        return target
      }

    }
  }

  getChildById(id, children) {

    for (let i = 0, len = children.length; i < len; i++) {
      let child = children[i]
      if (child.id === id) {
        return child
      }

      let target = this.getChildById(id, child.children)
      if (target) {
        return target
      }
    }
  }

  getNodeCount(count, children) {

    for (let i = 0, len = children.length; i < len; i++) {
      count++

      let child = children[i]
      if (child.children.length > 0 && child.expand) {
        count = this.getNodeCount(count, child.children)
      }
    }

    return count
  }

  toggle(id) {
    let nodeData = this.getChildById(id, this.data.children)
    nodeData.expand = !nodeData.expand
    this.update()
  }

  rename(id, name) {

    let nodeData = this.getChildById(id, this.data.children)
    nodeData.name = name
    this.update()
  }

  beforeRender() {
    if (this.data.children) {
      this.data.emptyArr = new Array(this.getNodeCount(0, this.data.children))
    }
  }

  css() {
    return css
  }

  render(props) {
    return (
      <div class='o-tree'>
        <ul class="tree-wp">
          <tree-node data={props.data}></tree-node>
        </ul>
        {/* <div class="bg-wp">
          <div o-repeat="c in emptyArr" class="bg"></div>
        </div> */}
      </div>
    )
  }
})
