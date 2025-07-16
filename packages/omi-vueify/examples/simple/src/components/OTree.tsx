import { Component, tag, signal, type Signal } from 'omi'

// 树节点数据结构
export interface TreeNode {
  id: string | number
  label: string
  expanded?: boolean
  children?: TreeNode[]
  [key: string]: any
}

// 树组件属性
export interface TreeProps {
  data: TreeNode[]
  expanded?: boolean
  nodeKey?: string
}

@tag('o-tree')
export class OTree extends Component<TreeProps> {
  static css = `
    .o-tree {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    }
    .o-tree-node {
      padding: 5px 0;
    }
    .o-tree-node-content {
      display: flex;
      align-items: center;
      cursor: pointer;
      height: 26px;
      line-height: 26px;
    }
    .o-tree-node-content:hover {
      background-color: #f5f7fa;
    }
    .o-tree-node-label {
      font-size: 14px;
    }
    .o-tree-node-expand-icon {
      margin-right: 4px;
      width: 16px;
      height: 16px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: #606266;
      transform: rotate(0deg);
      transition: transform 0.3s ease-in-out;
    }
    .o-tree-node-expand-icon.expanded {
      transform: rotate(90deg);
    }
    .o-tree-node-children {
      padding-left: 18px;
      overflow: hidden;
      max-height: 0;
      transition: max-height 0.3s ease-in-out;
    }
    .o-tree-node-children.expanded {
      max-height: 1000px; /* 足够大的高度 */
    }
    .o-tree-node-loading {
      color: #909399;
      margin-right: 4px;
    }
    .drag-over {
      background-color: #f0f8ff;
      border: 1px dashed #409eff;
    }
    .o-tree-node.drag-over > * {
      pointer-events: none;
    }
  `

  static props = {
    data: {
      type: Array,
      default: [],
      changed(this: OTree, newValue: TreeNode[], oldValue: TreeNode[]) {
        console.log('props.data changed:', newValue);
        // 如果有新值，触发更新
        if (newValue && newValue.length > 0) {
          this.update();
        }
      }
    },
    expanded: {
      type: Boolean,
      default: false
    },
    nodeKey: {
      type: String,
      default: 'id'
    }
  }

  treeData = signal<TreeNode[]>([])

  install() {
    console.log('OTree installed, props:', this.props)
    // 使用 props.data 初始化 signal
    this.treeData.value = this.props.data
  }

  installed() {
    console.log('OTree component mounted, props:', this.props);
  }

  receiveProps(props: TreeProps) {
    console.log('OTree receiveProps:', props);
    // 当 props.data 从外部更新时，同步到内部的 signal
    // 使用 peek() 可以避免不必要的循环更新
    if (props.data !== this.treeData.peek()) {
      this.treeData.value = props.data
    }
  }

  nodeClick(node: TreeNode): void {
    // 切换展开状态
    node.expanded = !node.expanded
    // 通过创建新数组触发 signal 更新，替代 this.update()
    this.treeData.value = [...this.treeData.value]
    // 触发节点点击事件 - 使用驼峰命名
    this.fire('nodeClick', node)
    console.log('节点被点击 - 触发nodeClick事件:', node)
  }

  nodeExpand(node: TreeNode): void {
    // 将节点标记为展开
    node.expanded = true
    // 通过创建新数组触发 signal 更新
    this.treeData.value = [...this.treeData.value]
    // 触发节点展开事件 - 使用驼峰命名
    this.fire('nodeExpand', node)
    console.log('节点被展开 - 触发nodeExpand事件:', node)
  }

  nodeCollapse(node: TreeNode): void {
    // 将节点标记为折叠
    node.expanded = false
    // 通过创建新数组触发 signal 更新
    this.treeData.value = [...this.treeData.value]
    // 触发节点折叠事件 - 使用驼峰命名
    this.fire('nodeCollapse', node)
    console.log('节点被折叠 - 触发nodeCollapse事件:', node)
  }

  // 查找节点
  findNode(id: string, nodes: TreeNode[]): TreeNode | null {
    for (const node of nodes) {
      if (node.id.toString() === id) return node
      if (node.children) {
        const found = this.findNode(id, node.children)
        if (found) return found
      }
    }
    return null
  }

  // 移除节点
  removeNode(id: string, nodes: TreeNode[]): TreeNode | null {
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i].id.toString() === id) {
        return nodes.splice(i, 1)[0]
      }
      if (nodes[i].children) {
        const removed = this.removeNode(id, nodes[i].children!)
        if (removed) return removed
      }
    }
    return null
  }
  
  // 检查是否可以将一个节点移动到另一个节点
  checkDropValidity(draggedNodeId: string, dropTargetId: string): boolean {
    if (draggedNodeId === dropTargetId) return false

    const draggedNode = this.findNode(draggedNodeId, this.treeData.value)
    if (!draggedNode) return false

    // 检查目标是否是拖拽节点的子孙
    const isDescendant = (node: TreeNode, targetId: string): boolean => {
      if (node.id.toString() === targetId) return true
      if (!node.children) return false
      return node.children.some(child => isDescendant(child, targetId))
    }

    if (isDescendant(draggedNode, dropTargetId)) {
      console.error("Cannot drop a node into its own descendant.")
      return false
    }

    return true
  }

  handleDragStart = (evt: DragEvent, node: TreeNode) => {
    evt.stopPropagation()
    evt.dataTransfer?.setData('node-id', node.id.toString())
  }

  handleDragOver = (evt: DragEvent) => {
    evt.preventDefault() // 必须阻止默认事件才能触发 onDrop
  }

  handleDragEnter = (evt: DragEvent) => {
    evt.preventDefault();
    (evt.currentTarget as HTMLElement).classList.add('drag-over')
  }

  handleDragLeave = (evt: DragEvent) => {
    evt.preventDefault();
    (evt.currentTarget as HTMLElement).classList.remove('drag-over')
  }

  handleDrop = (evt: DragEvent, targetNode: TreeNode) => {
    evt.preventDefault()
    evt.stopPropagation();
    (evt.currentTarget as HTMLElement).classList.remove('drag-over')

    const draggedId = evt.dataTransfer?.getData('node-id')
    if (!draggedId) return

    const targetId = targetNode.id.toString()

    if (!this.checkDropValidity(draggedId, targetId)) return;
    
    // 对 signal 的数据进行深拷贝，在副本上进行修改
    const treeDataCopy = JSON.parse(JSON.stringify(this.treeData.value));

    const removedNode = this.removeNode(draggedId, treeDataCopy)
    if (!removedNode) return

    const newParentNode = this.findNode(targetId, treeDataCopy)
    if (newParentNode) {
      newParentNode.children = newParentNode.children || []
      newParentNode.children.push(removedNode)
      // 将修改后的副本重新赋值给 signal，触发自动更新
      this.treeData.value = treeDataCopy
      this.fire('nodeDrop', { draggedNode: removedNode, targetNode: newParentNode })
      console.log(`Node ${removedNode.label} dropped on ${newParentNode.label}`);
    } else {
       // 如果父节点找不到了，需要把移除的节点加回来，防止数据丢失
       treeDataCopy.push(removedNode)
       this.treeData.value = treeDataCopy
    }
  }


  // 递归渲染树节点
  renderNode(node: TreeNode, level: number = 0) {
    const hasChildren = node.children && node.children.length > 0
    const isExpanded = node.expanded === true

    return (
      <div 
        class="o-tree-node"
        onDrop={(e: DragEvent) => this.handleDrop(e, node)}
        onDragOver={this.handleDragOver}
        onDragEnter={this.handleDragEnter}
        onDragLeave={this.handleDragLeave}
      >
        <div
          class="o-tree-node-content"
          style={{ paddingLeft: `${level * 18}px` }}
          onClick={() => this.nodeClick(node)}
          draggable="true"
          onDragStart={(e: DragEvent) => this.handleDragStart(e, node)}
        >
          {hasChildren ? (
            <span
              class={`o-tree-node-expand-icon ${isExpanded ? 'expanded' : ''}`}
              onClick={(e: Event) => {
                e.stopPropagation()
                isExpanded ? this.nodeCollapse(node) : this.nodeExpand(node)
              }}
            >
              ▶
            </span>
          ) : (
            <span class="o-tree-node-expand-icon"></span>
          )}
          <span class="o-tree-node-label">{node.label}</span>
          <slot name="node-icon" node={node}></slot>
        </div>
        {hasChildren && (
          <div class={`o-tree-node-children ${isExpanded ? 'expanded' : ''}`}>
            {node.children?.map((child) => this.renderNode(child, level + 1))}
          </div>
        )}
      </div>
    )
  }

  render() {
    console.log('OTree render data:', this.treeData.value);
    
    if (!this.treeData.value || this.treeData.value.length === 0) {
      return (
        <div class="o-tree">
          <div class="o-tree-empty">暂无数据</div>
        </div>
      );
    }
    
    return (
      <div class="o-tree">
        {this.treeData.value.map(node => this.renderNode(node))}
      </div>
    )
  }
} 