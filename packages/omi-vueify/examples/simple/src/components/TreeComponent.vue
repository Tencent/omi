<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { omiVueify } from '../../../../src/index';
import './OTree';
import type { TreeNode } from './OTree';

// 使用omiVueify封装o-tree组件
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

const treeRef = ref();

onMounted(() => {
  console.log('Vue component mounted, treeData:', treeData.value);
});

const logEvent = (message: string, detail: any) => {
  console.log(message, detail);
};
const handleNodeExpand = (e: CustomEvent) => {
  logEvent('节点被展开:', e.detail);
};

const handleNodeCollapse = (e: CustomEvent) => {
  logEvent('节点被折叠:', e.detail);
};

const addNodeInput = ref('');
const addLabelInput = ref('');
const addPositionInput = ref('');

function performAddNode() {
  const parentId = addNodeInput.value ? parseInt(addNodeInput.value) : null;
  const label = addLabelInput.value || 'New Node';
  const position = addPositionInput.value ? parseInt(addPositionInput.value) : -1;

  // 查找当前最大ID的函数
  const findMaxId = (nodes: TreeNode[], max = 0): number => {
    for (const node of nodes) {
      if (typeof node.id === 'number' && node.id > max) max = node.id;
      if (node.children) max = findMaxId(node.children, max);
    }
    return max;
  };

  const maxId = findMaxId(treeData.value);
  const newId = maxId + 1;
  const newNode = { id: newId, label };
  treeRef.value.addNode(parentId, newNode, position);
  addNodeInput.value = '';
  addLabelInput.value = '';
  addPositionInput.value = '';
}

const removeNodeInput = ref('');

function performRemoveNode() {
  const id = parseInt(removeNodeInput.value);
  if (!isNaN(id)) {
    treeRef.value.removeNode(id);
  }
  removeNodeInput.value = '';
}

const updateNodeInput = ref('');
const updateLabelInput = ref('');

function performUpdateNode() {
  const id = parseInt(updateNodeInput.value);
  const label = updateLabelInput.value;
  if (!isNaN(id) && label) {
    treeRef.value.updateNode(id, { label });
  }
  updateNodeInput.value = '';
  updateLabelInput.value = '';
}

const findNodeInput = ref('');

const showModal = ref(false);
const foundNode = ref<TreeNode | null>(null);

function performFindNode() {
  const id = parseInt(findNodeInput.value);
  if (!isNaN(id)) {
    const found = treeRef.value.findNode(id);
    if (found) {
      foundNode.value = found;
      showModal.value = true;
      logEvent('Found node:', found);
    } else {
      logEvent('Node not found:', id);
    }
  }
  findNodeInput.value = '';
}

function closeModal() {
  showModal.value = false;
  foundNode.value = null;
}
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
      @nodeRemoved="handleNodeRemoved"
      @nodeUpdated="handleNodeUpdated"
    >
    </OmiTree>
    <div class="operations">
      <h4>添加节点</h4>
      <input v-model="addNodeInput" placeholder="Parent ID (null for root)" />
      <input v-model="addLabelInput" placeholder="Label" />
      <input v-model="addPositionInput" placeholder="Position (-1 for end)" />
      <button @click="performAddNode">添加</button>

      <h4>删除节点</h4>
      <input v-model="removeNodeInput" placeholder="Node ID" />
      <button @click="performRemoveNode">删除</button>

      <h4>更新节点</h4>
      <input v-model="updateNodeInput" placeholder="Node ID" />
      <input v-model="updateLabelInput" placeholder="New Label" />
      <button @click="performUpdateNode">更新</button>

      <h4>查找节点</h4>
      <input v-model="findNodeInput" placeholder="Node ID" />
      <button @click="performFindNode">查找</button>
    </div>
    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <h4>节点详情</h4>
        <pre>{{ JSON.stringify(foundNode, null, 2) }}</pre>
        <button @click="closeModal">关闭</button>
      </div>
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
.operations {
  margin-top: 20px;
}
.operations h4 {
  margin: 10px 0 5px;
}
.operations input {
  margin-right: 10px;
  margin-bottom: 10px;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 4px;
  max-width: 500px;
  overflow: auto;
}
pre {
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style> 