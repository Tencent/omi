import { Component, tag, h } from 'omi'

interface TreeNode {
  name: string
  children?: TreeNode[]
}

interface TreeProps {
  nodes: TreeNode[]
}

@tag('omi-tree')
export default class OmiTree extends Component<TreeProps> {
  static css = `
    .tree-node {
      padding-left: 20px;
      margin: 5px 0;
    }
    .tree-node-title {
      cursor: pointer;
      padding: 2px 5px;
      border-radius: 3px;
    }
    .tree-node-title:hover {
      background: #f0f0f0;
    }
  `

  static propTypes = {
    nodes: Array
  }

  static defaultProps = {
    nodes: []
  }

  render() {
    const { nodes = [] } = this.props
    
    console.log('OmiTree render, props:', this.props);
    console.log('OmiTree render, nodes:', nodes);
    console.log('OmiTree render, nodes type:', typeof nodes);
    console.log('OmiTree render, nodes isArray:', Array.isArray(nodes));

    const renderNode = (node: TreeNode, index: number) => (
      h('div', { className: 'tree-node', key: index }, [
        h('div', { 
          className: 'tree-node-title', 
          onClick: () => this.fire('nodeClick', node) 
        }, node.name),
        ...(node.children ? node.children.map((child, childIndex) => renderNode(child, childIndex)) : [])
      ])
    )

    if (!Array.isArray(nodes) || nodes.length === 0) {
      return (
        h('div', {}, [
          h('p', {}, 'No nodes to display'),
          h('p', {}, `Debug: nodes = ${JSON.stringify(nodes)}`)
        ])
      )
    }

    return (
      h('div', {}, nodes.map((node, index) => renderNode(node, index)))
    )
  }
}
