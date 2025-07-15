<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { omiVueify } from '../../../../src/index';
import './OTree';
import type { TreeNode } from './OTree';

// 使用omiVueify封装o-tree组件
const OmiTree = omiVueify('o-tree', {
  methodNames: ['nodeExpand', 'nodeCollapse']
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
</script>

<template>
  <div class="tree-component">
    <h3>树组件示例</h3>
    <OmiTree 
      :data="treeData"
      @nodeClick="handleNodeClick"
      @nodeExpand="handleNodeExpand"
      @nodeCollapse="handleNodeCollapse"
    >
      <!-- 可以在这里添加插槽内容 -->
    </OmiTree>
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