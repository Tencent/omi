<script setup lang="ts">
import { ref } from 'vue';
import { omiVueify } from '../../../../src/index';
import './o-tree';
import type { TreeNode } from './o-tree';

// 使用omiVueify封装o-tree组件
const OmiTree = omiVueify('o-tree', {
  methodNames: ['nodeExpand', 'nodeCollapse', 'addNode', 'removeNode', 'updateNode', 'highlightNode']
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

const addNodeInput = ref('');
const addLabelInput = ref('');
const addPositionInput = ref('');

function performAddNode() {
  const parentId = addNodeInput.value ? parseInt(addNodeInput.value) : null;
  const label = addLabelInput.value || 'New Node';
  const position = addPositionInput.value ? parseInt(addPositionInput.value) : -1;

  const newNode = { label };
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

function performFindNode() {
  const id = findNodeInput.value ? parseInt(findNodeInput.value) : null;
  treeRef.value.highlightNode(id);
}

</script>

<template>
  <div class="tree-component">
    <h3>树组件示例</h3>
    <div class="container">
      <div class="tree-container">
        <OmiTree 
          ref="treeRef"
          :data="treeData"
        >
        </OmiTree>
      </div>
      <div class="operations">
        <div class="form-group">
          <h4>添加节点</h4>
          <input v-model="addNodeInput" placeholder="Parent ID (null for root)" />
          <input v-model="addLabelInput" placeholder="Label" />
          <input v-model="addPositionInput" placeholder="Position (-1 for end)" />
          <button @click="performAddNode">添加</button>
        </div>

        <div class="form-group">
          <h4>删除节点</h4>
          <input v-model="removeNodeInput" placeholder="Node ID" />
          <button @click="performRemoveNode">删除</button>
        </div>

        <div class="form-group">
          <h4>更新节点</h4>
          <input v-model="updateNodeInput" placeholder="Node ID" />
          <input v-model="updateLabelInput" placeholder="New Label" />
          <button @click="performUpdateNode">更新</button>
        </div>

        <div class="form-group">
          <h4>查找节点</h4>
          <input v-model="findNodeInput" placeholder="Node ID" />
          <button @click="performFindNode">查找</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tree-component {
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  color: #333;
}

h3, .operations h4 {
  margin-top: 0;
  margin-bottom: 1em;
  font-weight: 600;
}

.container {
  display: flex;
  gap: 30px;
  align-items: flex-start;
}

.tree-container {
  flex: 1;
}

.operations {
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.operations input,
.operations button {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 14px;
}

.operations button {
  background-color: #f0f0f0;
  border-color: #ccc;
  cursor: pointer;
  font-weight: 500;
}
.operations button:hover {
  background-color: #e0e0e0;
}

.modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: grid;
  place-items: center;
}
.modal-content {
  background: white;
  padding: 20px 25px;
  border-radius: 5px;
  max-width: 500px;
  width: calc(100% - 40px);
}
.modal-content button {
    margin-top: 15px;
}
pre {
  white-space: pre-wrap;
  word-wrap: break-word;
  background: #f7f7f7;
  padding: 10px;
  border-radius: 4px;
}
</style> 