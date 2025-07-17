<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { omiVueify } from '../../../../src/index';
import './OTree';
import type { TreeNode } from './OTree';

// 使用omiVueify封装o-tree组件, 添加 CRUD 方法暴露
const OmiTree = omiVueify('o-tree', {
  methodNames: ['nodeExpand', 'nodeCollapse', 'addNode', 'removeNode', 'updateNode', 'findNode']
});

// 树节点数据
const treeData = ref<TreeNode[]>([
  {
    id: 1,
    label: '一级节点 1',
    expanded: true,
    children: [
      {
        id: 11,
        label: '二级节点 1-1',
        children: [
          {
            id: 111,
            label: '三级节点 1-1-1'
          }
        ]
      },
      {
        id: 12,
        label: '二级节点 1-2'
      }
    ]
  },
  {
    id: 2,
    label: '一级节点 2',
    children: [
      {
        id: 21,
        label: '二级节点 2-1'
      },
      {
        id: 22,
        label: '二级节点 2-2'
      }
    ]
  }
]);

// ref to the tree component
const treeRef = ref();

onMounted(() => {
  console.log('Vue component mounted, treeData:', treeData.value);
});

// 处理节点点击事件
const handleNodeClick = (e: CustomEvent) => {
  console.log('节点被点击:', e.detail);
};

// 处理节点展开事件
const handleNodeExpand = (e: CustomEvent) => {
  console.log('节点被展开:', e.detail);
};

// 处理节点折叠事件
const handleNodeCollapse = (e: CustomEvent) => {
  console.log('节点被折叠:', e.detail);
};

// 示例: 添加新节点
function addNewNode() {
  const newNode = { id: Date.now(), label: 'New Node' };
  treeRef.value.addNode(1, newNode);  // 添加到 id=1 的节点下
}

// 示例: 删除节点
function removeNode() {
  treeRef.value.removeNode(11);  // 删除 id=11 的节点
}

// 示例: 更新节点
function updateNode() {
  treeRef.value.updateNode(1, { label: 'Updated Node 1' });
}

// 示例: 查找节点
function findNode() {
  const found = treeRef.value.findNode(1);
  console.log('Found node:', found);
}

// 处理事件如 nodeAdded
function handleNodeAdded(e: CustomEvent) {
  console.log('Node added:', e.detail);
}

// 类似处理其他事件
</script>

<template>
  <div class="tree-component">
    <h3>树组件示例</h3>
    <OmiTree 
      ref="treeRef"
      :data="treeData"
      @nodeClick="handleNodeClick"
      @nodeExpand="handleNodeExpand"
      @nodeCollapse="handleNodeCollapse"
      @nodeAdded="handleNodeAdded"
      @nodeRemoved="(e) => console.log('Node removed:', e.detail)"
      @nodeUpdated="(e) => console.log('Node updated:', e.detail)"
    >
      <!-- 可以在这里添加插槽内容 -->
    </OmiTree>
    <div>
      <button @click="addNewNode">Add New Node</button>
      <button @click="removeNode">Remove Node 1-1</button>
      <button @click="updateNode">Update Node 1</button>
      <button @click="findNode">Find Node 1</button>
    </div>
  </div>
</template>

<style scoped>
.tree-component {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  max-width: 400px;
}

h3 {
  margin-top: 0;
  margin-bottom: 20px;
  color: #303133;
}
</style> 