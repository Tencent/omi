import { tag, Component, h } from 'omi'
import './tree-node'

@tag('omi-tree')
export class OmiTree extends Component {
  static props = {
    data: Array,
  }

  // 移动节点
  moveNode(id, parentId) {
    if (id === parentId) return
    if (this.check(parentId, id)) {
      let parent = this.getChildById(parentId, this.props.data)
      let child = this.removeChildById(id, this.props.data)
      parent.children.push(child)
      this.update()
      this.fire('onNodeMove', { id, parentId })
    }
  }

  // 防止把父节点拖到自己子节点下
  check(parentId, childId) {
    let current = this.getChildById(childId, this.props.data)
    let children = current.children
    for (let i = 0, len = children.length; i < len; i++) {
      let child = children[i]
      if (child.id === parentId) return false
      let errorIds = this.check(parentId, child.id)
      if (!errorIds) return false
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
      if (target) return target
    }
  }

  getChildById(id, children) {
    for (let i = 0, len = children.length; i < len; i++) {
      let child = children[i]
      if (child.id === id) return child
      let target = this.getChildById(id, child.children)
      if (target) return target
    }
  }

  render() {
    return (
      <ul>
        {this.props.data.map((child) => (
          <omi-tree-node key={child.id} data={child} moveNode={this.moveNode.bind(this)} />
        ))}
      </ul>
    )
  }
}
