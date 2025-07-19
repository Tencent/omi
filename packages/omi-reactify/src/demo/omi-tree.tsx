import { tag, Component, createRef, signal, render } from "omi";
import React from "react";

@tag("omi-component-tree")
class OmiComponentTree extends Component {
  static css = `
  .tree-node {
  padding-left: 20px; /* 为子节点缩进留出空间 */
  margin-bottom: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
  cursor: pointer;
}

.tree-header {
  display: flex;
  align-items: center;
  padding: 8px 0; /* 上下内边距，让 label 和 content 有间距 */
}

.tree-title {
  flex: 0 0 auto;
  font-size: 16px;
  color: #333;
  user-select: none;
  margin-right: 8px;
}

.tree-label {
  flex: 1 1 auto;
  font-size: 14px;
  color: #444;
}

.tree-content {
  display: block; /* 确保独占一行 */
  padding-left: 20px; /* 子节点进一步缩进 */
  margin-top: 5px; /* 与 header 保持间距 */
  border-top: 1px dashed #ccc;
}
  `;
  static propTypes = { 
    treeData:Array,
  };

  treeData = [
    {
      id: 1,
      name: "Node 1",
      expanded: true,
      children: [
        {
          id: 2,
          name: "Node 1.1",
          children: [{ id: 3, name: "Node 1.1.1" }],
        },
        { id: 4, name: "Node 1.2" },
      ],
    },
    {
      id: 5,
      name: "Node 2",
      children: [{ id: 6, name: "Node 2.1" }],
    },
  ];
  reactRef = createRef() as any;
  renderReacted = false;
  txt = "";
  expandedIds = signal<number[]>([])
  // 判断节点是否展开
  isExpanded = (nodeId: number) => {
    return this.expandedIds.value.includes(nodeId)
  }

  // 切换节点展开/收起状态
  toggleNode = (nodeId: number) => {
    const ids = [...this.expandedIds.value]
    const index = ids.indexOf(nodeId)
    if (index === -1) {
      ids.push(nodeId)
    } else {
      ids.splice(index, 1)
    }
    this.expandedIds.value = ids
  }

  treeNode(node:any) {
    const hasChildren = node.children && node.children.length > 0
    const isExpanded = hasChildren && this.expandedIds.value.includes(node.id)

    return (
      <div class="tree-node">
        <div onClick={(e) => {
            e.stopPropagation() // 阻止事件冒泡到父容器
            this.toggleNode(node.id)
          }}>
        <span class="tree-title" >
          {hasChildren ? (isExpanded ? "-" : "+") : " "}
        </span>
        <span class="tree-label">{node.label}</span>

        </div>
        {isExpanded && node.children?.map((child: any) => this.treeNode(child))}
      </div>
    );
  }
  render(props: any) {

    const treeData = props.treeData;
    return (<>{treeData?.map((node)=>this.treeNode(node))}</>)
  }
}

export default OmiComponentTree;
