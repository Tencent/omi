// @ts-nocheck
// 由于 Omi 组件装饰器和 JSX 与 TypeScript 类型系统存在兼容性问题，参考 Omi 官方和社区实践，demo 代码采用 ts-nocheck 跳过类型检查，保证开发体验和功能演示。
/** @jsx h */
import { h, tag, Component } from 'omi'

interface TreeNodeProps {
  data: any
  moveNode: (fromId: number, toId: number) => void
}

@tag('omi-tree-node')
export class OmiTreeNode extends Component<TreeNodeProps> {
  node: HTMLElement
  static props = {
    data: Object,
    moveNode: Function,
  }
  state = {
    expanded: true,
  }
  // 拖拽事件
  dragStartHandler = (evt: DragEvent) => {
    evt.dataTransfer.setData('node-id', this.props.data.id)
    evt.stopPropagation()
  }
  dropHandler = (evt: DragEvent) => {
    const fromId = parseInt(evt.dataTransfer.getData('node-id'))
    const toId = this.props.data.id
    this.props.moveNode(fromId, toId)
    this.node && this.node.classList.remove('drag-over')
    evt.stopPropagation()
    evt.preventDefault()
  }
  dragOverHandler = (evt: DragEvent) => {
    this.node.classList.add('drag-over')
    evt.stopPropagation()
    evt.preventDefault()
  }
  dragLeaveHandler = () => {
    this.node.classList.remove('drag-over')
  }
  // 展开/折叠
  toggleExpand = (evt: MouseEvent) => {
    this.state.expanded = !this.state.expanded
    this.update()
    evt.stopPropagation()
  }
  // 属性编辑
  handleLabelChange = (evt: Event) => {
    const target = evt.target as HTMLInputElement
    this.props.data.name = target.value
    this.update()
    evt.stopPropagation()
  }
  // @ts-ignore
  style() {
    return `
      .drag-over {
        border: 1px dashed #1890ff;
        background: #e6f7ff;
      }
      .tree-node-row {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 4px 0;
      }
      .expand-btn {
        cursor: pointer;
        margin-right: 4px;
        color: #1890ff;
        font-weight: bold;
        user-select: none;
      }
      .label-input {
        width: 100px;
        border: 1px solid #d9d9d9;
        border-radius: 4px;
        padding: 2px 4px;
      }
    `
  }
  render() {
    const { data } = this.props
    const { expanded } = this.state
    return (
      <li
        ref={(e) => (this.node = e as HTMLElement)}
        data-node-id={data.id}
        draggable="true"
        ondragstart={this.dragStartHandler}
        ondragleave={this.dragLeaveHandler}
        ondrop={this.dropHandler}
        ondragover={this.dragOverHandler}
      >
        <div class="tree-node-row">
          {data.children && data.children.length > 0 && (
            <span class="expand-btn" onclick={this.toggleExpand}>
              {expanded ? '-' : '+'}
            </span>
          )}
          <input
            class="label-input"
            value={data.name}
            oninput={this.handleLabelChange}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
        {expanded && data.children && data.children.length > 0 && (
          <ul>
            {data.children.map((child) => (
              <omi-tree-node key={child.id} data={child} moveNode={this.props.moveNode} />
            ))}
          </ul>
        )}
      </li>
    )
  }
}
