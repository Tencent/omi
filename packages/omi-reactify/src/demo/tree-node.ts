import { tag, Component, h } from 'omi'

@tag('omi-tree-node')
export class OmiTreeNode extends Component {
  static props = {
    data: Object,
    moveNode: Function
  }

  state = {
    expanded: true
  }

  // 拖拽事件
  dragStartHandler = (evt) => {
    evt.dataTransfer.setData('node-id', this.props.data.id)
    evt.stopPropagation()
  }

  dropHandler = (evt) => {
    const fromId = parseInt(evt.dataTransfer.getData('node-id'))
    const toId = this.props.data.id
    this.props.moveNode(fromId, toId)
    this.node && this.node.classList.remove('drag-over')
    evt.stopPropagation()
    evt.preventDefault()
  }

  dragOverHandler = (evt) => {
    this.node.classList.add('drag-over')
    evt.stopPropagation()
    evt.preventDefault()
  }

  dragLeaveHandler = () => {
    this.node.classList.remove('drag-over')
  }

  // 展开/折叠
  toggleExpand = (evt) => {
    this.state.expanded = !this.state.expanded
    this.update()
    evt.stopPropagation()
  }

  // 属性编辑（可扩展更多属性）
  handleLabelChange = (evt) => {
    this.props.data.name = evt.target.value
    this.update()
    evt.stopPropagation()
  }

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
        ref={e => (this.node = e)}
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
            onClick={e => e.stopPropagation()}
          />
        </div>
        {expanded && data.children && data.children.length > 0 && (
          <ul>
            {data.children.map(child => (
              <omi-tree-node key={child.id} data={child} moveNode={this.props.moveNode} />
            ))}
          </ul>
        )}
      </li>
    )
  }
} 