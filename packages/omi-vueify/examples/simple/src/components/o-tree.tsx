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

interface TreeState {
  data: TreeNode[];
  draggedNodeId: string | null;
  currentDropTarget: HTMLElement | null;
  currentDropPosition: DropPosition;
  lastDropPosition: DropPosition;
  lastUpdateTime: number;
  highlightedNodeId: string | number | null;
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
      transition: background-color 0.2s ease, border-color 0.2s ease;
      box-sizing: border-box;
      border: 1px solid transparent;
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
    .o-tree-node-content.highlight {
      background-color: #e6f7ff;
      border-color: #91d5ff;
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
      border-color: #409eff;
      border-style: dashed;
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
      default: []
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

  
  store = signal<TreeState>({
    data: [],
    draggedNodeId: null,
    currentDropTarget: null,
    currentDropPosition: DropPosition.NONE,
    lastDropPosition: DropPosition.NONE,
    lastUpdateTime: 0,
    highlightedNodeId: null,
  })

  private lastUsedId = 0

  constructor() {
    super();
  }


  initializeSignals(node: TreeNode): TreeNode {
    if (typeof node.expanded !== 'object' || !node.expanded?.value) {
      node.expanded = signal(node.expanded === true);
    }
    if (node.children) {
      node.children = node.children.map(child => this.initializeSignals(child))
    }
    return node;
  }

  private _initializeLastUsedId(nodes: TreeNode[]) {
    for (const node of nodes) {
      if (typeof node.id === 'number' && node.id > this.lastUsedId) {
        this.lastUsedId = node.id;
      }
      if (node.children) {
        this._initializeLastUsedId(node.children);
      }
    }
  }

  install() {
    this.store.value.data = this.props.data.map(node => this.initializeSignals({ ...node }));
    this._initializeLastUsedId(this.store.value.data);
    
    document.addEventListener('dragover', (e) => {
      e.preventDefault();
    });
  }


  nodeClick(node: TreeNode): void {
    if (typeof node.expanded === 'object') {
      node.expanded.value = !node.expanded.value;
    }
    this.fire('nodeClick', node)
  }

  nodeExpand(node: TreeNode): void {
    if (typeof node.expanded === 'object') {
      node.expanded.value = true;
    }
    this.fire('nodeExpand', node)
  }

  nodeCollapse(node: TreeNode): void {
    if (typeof node.expanded === 'object') {
      node.expanded.value = false;
    }
    this.fire('nodeCollapse', node)
  }

  traverseTree(
    nodes: TreeNode[],
    callback: (node: TreeNode, parent: TreeNode | null, index: number) => boolean | void,
    parent: TreeNode | null = null
  ): boolean {
    for (let i = 0; i < nodes.length; i++) {
      if (callback(nodes[i], parent, i)) return true
      const children = nodes[i].children;
      if (children && children.length > 0) {
        if (this.traverseTree(children, callback, nodes[i])) return true
      }
    }
    return false
  }

  // 检查是否可以将一个节点移动到另一个节点
  checkDropValidity(draggedNodeId: string, dropTargetId: string): boolean {
    if (draggedNodeId === dropTargetId) return false

    const draggedNode = this.findNode(draggedNodeId)
    if (!draggedNode) return false

    // 检查目标是否是拖拽节点的子孙
    const isDescendant = (node: TreeNode, targetId: string): boolean => {
      if (node.id.toString() === targetId) return true
      if (!node.children) return false
      return node.children.some(child => isDescendant(child, targetId))
    }

    if (isDescendant(draggedNode, dropTargetId)) {
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
      if (now - this.store.value.lastUpdateTime > delay) {
        this.store.value.lastUpdateTime = now;
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
    const state = this.store.value;
    // 如果放置类型没有变化，不做任何操作
    if (position === state.lastDropPosition && element === state.currentDropTarget) {
      return;
    }
    
    if (state.currentDropTarget && state.currentDropTarget !== element) {
      this.clearDropPositionClasses(state.currentDropTarget);
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
    this.store.value.currentDropTarget = element;
    this.store.value.lastDropPosition = position;
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

  addNode(parentId: string | number | null, newNodeData: Partial<TreeNode>, position: number = -1) {
    if (newNodeData.id === undefined) {
      this.lastUsedId++;
      newNodeData.id = this.lastUsedId;
    } else if (typeof newNodeData.id === 'number' && newNodeData.id > this.lastUsedId) {
      this.lastUsedId = newNodeData.id;
    }

    const newNode = this.initializeSignals(newNodeData as TreeNode);

    const data = this.store.value.data;
    if (parentId === null) {
      if (position === -1) {
        data.push(newNode);
      } else {
        data.splice(position, 0, newNode);
      }
    } else {
      this.traverseTree(data, (node) => {
        if (node.id.toString() === parentId.toString()) {
          node.children = node.children || [];
          if (position === -1) {
            node.children.push(newNode);
          } else {
            node.children.splice(position, 0, newNode);
          }
          return true;
        }
        return false;
      });
    }
    this.store.update();
    this.fire('nodeAdded', { newNode, parentId });
  }

  removeNode(id: string | number) {
    const data = this.store.value.data;
    const removed = this.removeNodeInternal(id.toString(), data);
    if (removed) {
      this.store.update();
      this.fire('nodeRemoved', { removedNode: removed, id });
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
    this.traverseTree(this.store.value.data, (node) => {
      if (node.id.toString() === id.toString()) {
        Object.assign(node, updates);
        if (updates.children) {
          updates.children.forEach(child => this.initializeSignals(child));
        }
        this.store.update();
        this.fire('nodeUpdated', { id, updates });
        return true;
      }
      return false;
    });
  }

  findNode(id: string | number): TreeNode | null {
    const found = this.findNodeInternal(id.toString(), this.store.peek().data);
    return found ? JSON.parse(JSON.stringify(found)) : null;
  }

  private findNodeInternal(id: string, nodes: TreeNode[]): TreeNode | null {
    let found: TreeNode | null = null;
    this.traverseTree(nodes, (node) => {
      if (node.id.toString() === id) {
        found = node;
        return true;
      }
      return false;
    });
    return found;
  }

  private findNodePath(id: string | number, nodes: TreeNode[]): TreeNode[] | null {
    for (const node of nodes) {
      if (node.id === id) {
        return [node];
      }
      if (node.children) {
        const path = this.findNodePath(id, node.children);
        if (path) {
          return [node, ...path];
        }
      }
    }
    return null;
  }

  highlightNode(id: string | number | null) {
    this.store.value.highlightedNodeId = id;
    if (id !== null) {
      const path = this.findNodePath(id, this.store.value.data);
      if (path) {
        // Expand all nodes in the path except the last one (the target node)
        for (let i = 0; i < path.length - 1; i++) {
          const node = path[i];
          if (typeof node.expanded === 'object') {
            node.expanded.value = true;
          }
        }
      }
    }
    this.store.update();
  }

  // 递归渲染树节点
  renderNode(node: TreeNode, level: number = 0) {
    const hasChildren = node.children && node.children.length > 0
    const isExpanded = typeof node.expanded === 'object' ? node.expanded.value : (node.expanded ?? false);
    const isHighlighted = this.store.value.highlightedNodeId !== null && this.store.value.highlightedNodeId === node.id;

    const handleDragStart = (evt: DragEvent) => {
      evt.stopPropagation();
      const nodeId = node.id.toString();
      if (evt.dataTransfer) {
        evt.dataTransfer.setData('node-id', nodeId);
        evt.dataTransfer.effectAllowed = 'move';
      }
      this.store.value.draggedNodeId = nodeId;
    };

    const handleDrop = (evt: DragEvent) => {
      evt.preventDefault();
      evt.stopPropagation();
      
      const element = evt.currentTarget as HTMLElement;
      this.clearDropPositionClasses(element);
      
      const draggedId = this.store.value.draggedNodeId;
      if (!draggedId) return;
      
      const targetId = node.id.toString();
      
      if (!this.checkDropValidity(draggedId, targetId)) return;
      
      const position = this.store.value.lastDropPosition !== DropPosition.NONE
        ? this.store.value.lastDropPosition
        : this.getDropPosition(evt, element);
      
      const data = this.store.value.data;
      
      const removedNode = this.removeNodeInternal(draggedId, data);
      if (!removedNode) return;
      
      switch (position) {
        case DropPosition.BEFORE:
          const beforeResult = this.findParentAndIndex(targetId, data);
          if (beforeResult) {
            const { parent, index } = beforeResult;
            this.addNode(parent ? parent.id : null, removedNode, index);
          }
          break;
        
        case DropPosition.INSIDE:
          this.addNode(targetId, removedNode);
          break;
        
        case DropPosition.AFTER:
          const afterResult = this.findParentAndIndex(targetId, data);
          if (afterResult) {
            const { parent, index } = afterResult;
            this.addNode(parent ? parent.id : null, removedNode, index + 1);
          }
          break;
      }
      
      this.fire('nodeDrop', { 
        draggedNode: removedNode, 
        targetNode: node, 
        position 
      });
      
      this.store.value.draggedNodeId = null;
      this.store.value.currentDropTarget = null;
      this.store.value.lastDropPosition = DropPosition.NONE;
    };

    const handleDragOver = this.throttle((evt: DragEvent) => {
      evt.preventDefault(); 
      const element = evt.currentTarget as HTMLElement;
      const position = this.getDropPosition(evt, element);
      this.applyDropPositionStyle(element, position);
    }, 50);

    const handleDragLeave = (evt: DragEvent) => {
      evt.preventDefault();
      const relatedTarget = evt.relatedTarget as Node;
      const currentTarget = evt.currentTarget as Node;
      if (!currentTarget.contains(relatedTarget)) {
        this.clearDropPositionClasses(evt.currentTarget as HTMLElement);
        if (this.store.value.currentDropTarget === evt.currentTarget) {
          this.store.value.currentDropTarget = null;
          this.store.value.lastDropPosition = DropPosition.NONE;
        }
      }
    };

    return (
      <div 
        class="o-tree-node"
        onDrop={handleDrop}
        onDragover={handleDragOver}
        onDragenter={(e:DragEvent) => e.preventDefault()}
        onDragleave={handleDragLeave}
      >
        <div
          class={`o-tree-node-content ${isHighlighted ? 'highlight' : ''}`}
          style={{ paddingLeft: `${level * 18}px` }}
          onClick={() => this.nodeClick(node)}
          draggable="true"
          onDragstart={handleDragStart}
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
    const data = this.store.value.data;
    if (!data || data.length === 0) {
      return (
        <div class="o-tree">
          <div class="o-tree-empty">暂无数据</div>
        </div>
      );
    }
    
    return (
      <div class="o-tree">
        {data.map(node => this.renderNode(node))}
      </div>
    )
  }
} 