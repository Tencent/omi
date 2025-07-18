import { Component, tag, signal } from 'omi'

// 树节点数据结构
export interface TreeNode {
  id: string | number
  label: string
  expanded?: boolean | ReturnType<typeof signal>
  children?: TreeNode[]
  [key: string]: any
}

// 树组件属性
export interface TreeProps {
  data: TreeNode[]
  expanded?: boolean
  nodeKey?: string
}

// 定义放置位置的枚举类型
export enum DropPosition {
  BEFORE = 'before',
  INSIDE = 'inside',
  AFTER = 'after',
  NONE = 'none'
}

@tag('o-tree')
export class OTree extends Component<TreeProps> {
  static css = `
    .o-tree {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    }
    .o-tree-node {
      padding: 5px 0;
      position: relative;
      transition: all 0.2s ease;
    }
    .o-tree-node-content {
      display: flex;
      align-items: center;
      cursor: pointer;
      height: 26px;
      line-height: 26px;
      transition: background-color 0.2s ease;
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
      max-height: 1000px; 
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
    .drop-inside {
      background-color: rgba(64, 158, 255, 0.1);
      border: 1px dashed #409eff;
      transition: all 0.2s ease-in-out;
    }
    .drop-before {
      position: relative;
    }
    .drop-before::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background-color: #409eff;
      z-index: 1;
      transition: all 0.2s ease-in-out;
    }
    .drop-after {
      position: relative;
    }
    .drop-after::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background-color: #409eff;
      z-index: 1;
      transition: all 0.2s ease-in-out;
    }
  `

  static props = {
    data: {
      type: Array,
      default: [],
      changed(this: OTree, newValue: TreeNode[], oldValue: TreeNode[]) {
        console.log('props.data changed:', newValue);
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
  
  // 记录当前拖拽状态
  private dragState = {
    draggedNodeId: null as string | null,
    currentDropTarget: null as HTMLElement | null,
    currentDropPosition: DropPosition.NONE,
    lastDropPosition: DropPosition.NONE,
    lastUpdateTime: 0
  }

  initializeSignals(node: TreeNode) {
    if (typeof node.expanded !== 'object' || !node.expanded?.value) {
      node.expanded = signal(node.expanded === true);
    }
    if (node.children) {
      node.children.forEach(child => this.initializeSignals(child))
    }
  }

  install() {
    console.log('OTree installed, props:', this.props)
    this.treeData.value = this.props.data.map(node => {
      const copy = { ...node }
      this.initializeSignals(copy)
      return copy
    })
  }

  installed() {
    console.log('OTree component mounted, props:', this.props);
  }

  receiveProps(props: TreeProps) {
    console.log('OTree receiveProps:', props);
    if (props.data !== this.treeData.peek()) {
      this.treeData.value = props.data.map(node => {
        const copy = { ...node }
        this.initializeSignals(copy)
        return copy
      })
    }
  }

  nodeClick(node: TreeNode): void {
    if (typeof node.expanded === 'object') {
      node.expanded.value = !node.expanded.value;
    } else {
      node.expanded = !node.expanded;
      this.treeData.update();  
    }
    this.fire('nodeClick', node)
    console.log('节点被点击 - 触发nodeClick事件:', node)
  }

  nodeExpand(node: TreeNode): void {
    if (typeof node.expanded === 'object') {
      node.expanded.value = true;
    } else {
      node.expanded = true;
      this.treeData.update();
    }
    this.fire('nodeExpand', node)
    console.log('节点被展开 - 触发nodeExpand事件:', node)
  }

  nodeCollapse(node: TreeNode): void {
    if (typeof node.expanded === 'object') {
      node.expanded.value = false;
    } else {
      node.expanded = false;
      this.treeData.update();
    }
    this.fire('nodeCollapse', node)
    console.log('节点被折叠 - 触发nodeCollapse事件:', node)
  }

  traverseTree(
    nodes: TreeNode[],
    callback: (node: TreeNode, parent: TreeNode | null, index: number) => boolean | void,
    parent: TreeNode | null = null
  ): boolean {
    for (let i = 0; i < nodes.length; i++) {
      if (callback(nodes[i], parent, i)) return true
      if (nodes[i].children && nodes[i].children.length > 0) {
        if (this.traverseTree(nodes[i].children!, callback, nodes[i])) return true
      }
    }
    return false
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

  // 节流函数，限制函数执行频率
  throttle<T extends (...args: any[]) => any>(
    fn: T, 
    delay: number
  ): (...args: Parameters<T>) => void {
    return (...args: Parameters<T>) => {
      const now = Date.now();
      if (now - this.dragState.lastUpdateTime > delay) {
        this.dragState.lastUpdateTime = now;
        fn.apply(this, args);
      }
    };
  }

  // 获取放置位置
  getDropPosition(evt: DragEvent, element: HTMLElement): DropPosition {
    const rect = element.getBoundingClientRect();
    const offsetY = evt.clientY - rect.top;
    const height = rect.height;
    
    // 上部 20% 区域放置为前一个兄弟
    if (offsetY < height * 0.2) {
      return DropPosition.BEFORE;
    }
    // 下部 20% 区域放置为后一个兄弟
    else if (offsetY > height * 0.8) {
      return DropPosition.AFTER;
    }
    // 中间区域放置为子节点
    else {
      return DropPosition.INSIDE;
    }
  }

  // 清除所有放置位置的样式类
  clearDropPositionClasses(element: HTMLElement) {
    element.classList.remove('drop-before', 'drop-inside', 'drop-after', 'drag-over');
  }

  // 应用放置样式
  applyDropPositionStyle(element: HTMLElement, position: DropPosition) {
    // 如果放置类型没有变化，不做任何操作
    if (position === this.dragState.lastDropPosition && element === this.dragState.currentDropTarget) {
      return;
    }
    
    if (this.dragState.currentDropTarget && this.dragState.currentDropTarget !== element) {
      this.clearDropPositionClasses(this.dragState.currentDropTarget);
    }

    this.clearDropPositionClasses(element);
    
    // 根据放置位置添加对应的样式类
    switch (position) {
      case DropPosition.BEFORE:
        element.classList.add('drop-before');
        break;
      case DropPosition.INSIDE:
        element.classList.add('drop-inside');
        break;
      case DropPosition.AFTER:
        element.classList.add('drop-after');
        break;
    }
    
    // 更新状态
    this.dragState.currentDropTarget = element;
    this.dragState.lastDropPosition = position;
  }

  handleDragStart = (evt: DragEvent, node: TreeNode) => {
    evt.stopPropagation();
    const nodeId = node.id.toString();
    evt.dataTransfer?.setData('node-id', nodeId);
    // 设置拖拽效果
    evt.dataTransfer!.effectAllowed = 'move';
    
    // 记录被拖拽的节点 ID
    this.dragState.draggedNodeId = nodeId;
    
    // 重置拖拽状态
    this.dragState.currentDropTarget = null;
    this.dragState.lastDropPosition = DropPosition.NONE;
  }

  // 使用节流处理拖拽悬停事件
  handleDragOver = this.throttle((evt: DragEvent) => {
    evt.preventDefault(); 
    
    const element = evt.currentTarget as HTMLElement;
    const position = this.getDropPosition(evt, element);
    this.applyDropPositionStyle(element, position);
  }, 50); 

  handleDragEnter = (evt: DragEvent) => {
    evt.preventDefault();
  }

  handleDragLeave = (evt: DragEvent) => {
    evt.preventDefault();
    
    const relatedTarget = evt.relatedTarget as Node;
    const currentTarget = evt.currentTarget as Node;
    
    if (!currentTarget.contains(relatedTarget)) {
      this.clearDropPositionClasses(evt.currentTarget as HTMLElement);
      if (this.dragState.currentDropTarget === evt.currentTarget) {
        this.dragState.currentDropTarget = null;
        this.dragState.lastDropPosition = DropPosition.NONE;
      }
    }
  }

  // 查找节点的父节点和在父节点中的索引
  findParentAndIndex(nodeId: string, nodes: TreeNode[]): { parent: TreeNode | null, index: number } | null {
    let result: { parent: TreeNode | null, index: number } | null = null
    this.traverseTree(nodes, (node, parent, index) => {
      if (node.id.toString() === nodeId) {
        result = { parent, index }
        return true
      }
      return false
    })
    return result
  }

  addNode(parentId: string | number | null, newNode: TreeNode, position: number = -1) {
    const data = this.treeData.value;
    this.initializeSignals(newNode);
    if (parentId === null) {
      if (position === -1) {
        data.push(newNode);
      } else {
        data.splice(position, 0, newNode);
      }
    } else {
      let added = false;
      this.traverseTree(data, (node, parent, index) => {
        if (node.id.toString() === parentId.toString()) {
          node.children = node.children || [];
          if (position === -1) {
            node.children.push(newNode);
          } else {
            node.children.splice(position, 0, newNode);
          }
          added = true;
          return true;
        }
        return false;
      });
      if (!added) {
        console.error(`Parent node with id ${parentId} not found.`);
        return;
      }
    }
    this.treeData.update();
    this.fire('nodeAdded', { newNode, parentId });
    console.log(`Node ${newNode.label} added to parent ${parentId}`);
  }

  removeNode(id: string | number) {
    const data = this.treeData.value;
    const removed = this.removeNodeInternal(id.toString(), data);
    if (removed) {
      this.treeData.update();
      this.fire('nodeRemoved', { removedNode: removed, id });
      console.log(`Node with id ${id} removed`);
    } else {
      console.error(`Node with id ${id} not found.`);
    }
  }

  private removeNodeInternal(id: string, nodes: TreeNode[]): TreeNode | null {
    let removed: TreeNode | null = null;
    this.traverseTree(nodes, (node, parent, index) => {
      if (node.id.toString() === id) {
        removed = node;
        if (parent && parent.children) {
          parent.children.splice(index, 1);
        } else {
          nodes.splice(index, 1);
        }
        return true;
      }
      return false;
    });
    return removed;
  }

  updateNode(id: string | number, updates: Partial<TreeNode>) {
    let updated = false;
    this.traverseTree(this.treeData.value, (node, parent, index) => {
      if (node.id.toString() === id.toString()) {
        Object.assign(node, updates);
        if (updates.children) {
          updates.children.forEach(child => this.initializeSignals(child));
        }
        updated = true;
        return true;
      }
      return false;
    });
    if (updated) {
      this.treeData.update();
      this.fire('nodeUpdated', { id, updates });
      console.log(`Node with id ${id} updated`);
    } else {
      console.error(`Node with id ${id} not found.`);
    }
  }

  findNode(id: string | number): TreeNode | null {
    const found = this.findNodeInternal(id.toString(), this.treeData.value);
    return found ? JSON.parse(JSON.stringify(found)) : null;
  }

  private findNodeInternal(id: string, nodes: TreeNode[]): TreeNode | null {
    let found: TreeNode | null = null;
    this.traverseTree(nodes, (node, parent, index) => {
      if (node.id.toString() === id) {
        found = node;
        return true;
      }
      return false;
    });
    return found;
  }

  handleDrop = (evt: DragEvent, targetNode: TreeNode) => {
    evt.preventDefault();
    evt.stopPropagation();
    
    const element = evt.currentTarget as HTMLElement;
    this.clearDropPositionClasses(element);
    
    const draggedId = evt.dataTransfer?.getData('node-id');
    if (!draggedId) return;
    
    const targetId = targetNode.id.toString();
    
    if (!this.checkDropValidity(draggedId, targetId)) return;
    
    const position = this.dragState.lastDropPosition !== DropPosition.NONE
      ? this.dragState.lastDropPosition
      : this.getDropPosition(evt, element);
    
    const data = this.treeData.value;
    
    const removedNode = this.removeNodeInternal(draggedId, data);
    if (!removedNode) return;
    
    switch (position) {
      case DropPosition.BEFORE:
        const beforeResult = this.findParentAndIndex(targetId, data);
        if (beforeResult) {
          const { parent, index } = beforeResult;
          const parentId = parent ? parent.id : null;
          this.addNode(parentId, removedNode, index);
        }
        break;
      
      case DropPosition.INSIDE:
        this.addNode(targetId, removedNode);
        break;
      
      case DropPosition.AFTER:
        const afterResult = this.findParentAndIndex(targetId, data);
        if (afterResult) {
          const { parent, index } = afterResult;
          const parentId = parent ? parent.id : null;
          this.addNode(parentId, removedNode, index + 1);
        }
        break;
    }
    
    
    this.fire('nodeDrop', { 
      draggedNode: removedNode, 
      targetNode, 
      position 
    });
    console.log(`Node ${removedNode.label} dropped ${position} ${targetNode.label}`);
    
    this.dragState = {
      draggedNodeId: null,
      currentDropTarget: null,
      currentDropPosition: DropPosition.NONE,
      lastDropPosition: DropPosition.NONE,
      lastUpdateTime: 0
    };
  }

  // 递归渲染树节点
  renderNode(node: TreeNode, level: number = 0) {
    const hasChildren = node.children && node.children.length > 0
    const isExpanded = typeof node.expanded === 'object' ? node.expanded.value : (node.expanded ?? false);

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
          <span class="o-tree-node-label">{`${node.label} (ID: ${node.id})`}</span>
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