import { Component, h, type VNode, tag } from 'omi'

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

  install() {
    console.log('OTree installed, props:', this.props);
    console.log('OTree props.data:', this.props.data);
  }

  installed() {
    console.log('OTree component mounted, props:', this.props);
  }

  receiveProps(props: TreeProps) {
    console.log('OTree receiveProps:', props);
  }

  nodeClick(node: TreeNode): void {
    // 切换展开状态
    node.expanded = !node.expanded
    // 重新渲染
    this.update()
    // 触发节点点击事件 - 使用驼峰命名
    this.fire('nodeClick', node)
    console.log('节点被点击 - 触发nodeClick事件:', node);
  }

  nodeExpand(node: TreeNode): void {
    // 将节点标记为展开
    node.expanded = true
    this.update()
    // 触发节点展开事件 - 使用驼峰命名
    this.fire('nodeExpand', node)
    console.log('节点被展开 - 触发nodeExpand事件:', node);
  }

  nodeCollapse(node: TreeNode): void {
    // 将节点标记为折叠
    node.expanded = false
    this.update()
    // 触发节点折叠事件 - 使用驼峰命名
    this.fire('nodeCollapse', node)
    console.log('节点被折叠 - 触发nodeCollapse事件:', node);
  }

  // 递归渲染树节点
  renderNode(node: TreeNode, level: number = 0): VNode<any> {
    const hasChildren = node.children && node.children.length > 0
    const isExpanded = node.expanded === true

    return h('div', { class: 'o-tree-node' }, [
      h('div', {
        class: 'o-tree-node-content',
        style: { paddingLeft: `${level * 18}px` },
        onClick: () => this.nodeClick(node)
      }, [
        hasChildren ? 
          h('span', { 
            class: `o-tree-node-expand-icon ${isExpanded ? 'expanded' : ''}`,
            onClick: (e: Event) => {
              e.stopPropagation()
              isExpanded ? this.nodeCollapse(node) : this.nodeExpand(node)
            }
          }, '▶') : 
          h('span', { class: 'o-tree-node-expand-icon' }, ''),
        h('span', { class: 'o-tree-node-label' }, node.label),
        h('slot', { name: 'node-icon', node: node })
      ]),
      hasChildren && h('div', { 
        class: `o-tree-node-children ${isExpanded ? 'expanded' : ''}` 
      }, node.children ? node.children.map(child => this.renderNode(child, level + 1)) : [])
    ])
  }

  render(): VNode<any> {
    console.log('OTree render props:', this.props);
    console.log('OTree render data:', this.props.data);
    
    if (!this.props.data || this.props.data.length === 0) {
      return h('div', { class: 'o-tree' }, [
        h('div', { class: 'o-tree-empty' }, '暂无数据')
      ]);
    }
    
    return h('div', { class: 'o-tree' }, 
      this.props.data.map(node => this.renderNode(node))
    )
  }
} 