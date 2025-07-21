// @ts-nocheck
// 由于 Omi 组件装饰器和 JSX 与 TypeScript 类型系统存在兼容性问题，参考 Omi 官方和社区实践，demo 代码采用 ts-nocheck 跳过类型检查，保证开发体验和功能演示。
/** @jsx h */
import { h, tag, Component } from 'omi'
import './tree-node'

interface TreeProps {
  data: any[]
}

@tag('omi-tree')
export class OmiTree extends Component<TreeProps> {
  static props = {
    data: Array,
  }
  // 移动节点
  moveNode(id: number, parentId: number) {
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
  check(parentId: number, childId: number): boolean {
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
  removeChildById(id: number, children: any[]): any {
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
  getChildById(id: number, children: any[]): any {
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
