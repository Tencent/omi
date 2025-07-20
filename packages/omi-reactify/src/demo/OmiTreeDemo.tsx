import React, { useState, useRef, useCallback } from 'react'
import OmiTreeReact, { TreeNode } from '../OmiTreeReact'

const initialData: TreeNode[] = [
  {
    key: '1',
    label: '根节点1',
    desc: '这是根节点1的描述',
    children: [
      {
        key: '1-1',
        label: '子节点1-1',
        desc: '子节点描述',
        children: [
          { key: '1-1-1', label: '孙节点1-1-1', desc: '孙节点描述', children: [] },
          { key: '1-1-2', label: '孙节点1-1-2', desc: '孙节点描述', children: [] },
        ],
      },
      { key: '1-2', label: '子节点1-2', desc: '子节点描述', children: [] },
    ],
  },
  {
    key: '2',
    label: '根节点2',
    desc: '这是根节点2的描述',
    children: [
      { key: '2-1', label: '子节点2-1', desc: '子节点描述', children: [] },
      { key: '2-2', label: '子节点2-2', desc: '子节点描述', children: [] },
    ],
  },
  {
    key: '3',
    label: '分组节点',
    desc: '这是一个分组',
    group: true,
    children: [
      { key: '3-1', label: '分组内节点1', desc: '分组内节点描述', children: [] },
      { key: '3-2', label: '分组内节点2', desc: '分组内节点描述', children: [] },
    ],
  },
]

export default function OmiTreeDemo() {
  const handleChange = useCallback((data: TreeNode[]) => {
    console.log('树数据变化:', data)
  }, [])

  const handleNodeAdd = useCallback((parentKey: string | null, newNode: TreeNode) => {
    console.log('添加节点:', { parentKey, newNode })
  }, [])

  const handleNodeDelete = useCallback((key: string) => {
    console.log('删除节点:', key)
  }, [])

  const handleNodeMove = useCallback(
    (fromKeys: string[], toKey: string | null, asChild: boolean) => {
      console.log('移动节点:', { fromKeys, toKey, asChild })
    },
    []
  )

  const handleNodeChange = useCallback((key: string, newNode: TreeNode) => {
    console.log('修改节点:', { key, newNode })
  }, [])

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#1890ff', marginBottom: '20px' }}>🌳 Omi Tree React 组件演示</h1>

      <div style={{ display: 'flex', gap: '20px', height: '600px' }}>
        <div style={{ flex: 1, border: '1px solid #d9d9d9', borderRadius: '8px', padding: '16px' }}>
          <h3 style={{ marginTop: 0, color: '#333' }}>树形结构</h3>
          <OmiTreeReact
            data={initialData}
            // onChange={handleChange} // 注释掉，改为非受控模式
            onNodeAdd={handleNodeAdd}
            onNodeDelete={handleNodeDelete}
            onNodeMove={handleNodeMove}
            onNodeChange={handleNodeChange}
          />
        </div>
      </div>

      <div
        style={{ marginTop: '20px', padding: '16px', background: '#f5f5f5', borderRadius: '8px' }}
      >
        <h3 style={{ marginTop: 0, color: '#333' }}>功能说明</h3>
        <ul style={{ margin: 0, paddingLeft: '20px' }}>
          <li>
            <strong>拖拽排序：</strong>拖拽节点手柄可以移动节点位置
          </li>
          <li>
            <strong>展开/折叠：</strong>点击节点前的箭头可以展开或折叠子节点
          </li>
          <li>
            <strong>节点编辑：</strong>双击节点名称或描述可以编辑
          </li>
          <li>
            <strong>添加节点：</strong>点击 "+" 按钮可以添加子节点
          </li>
          <li>
            <strong>删除节点：</strong>点击 "×" 按钮可以删除节点
          </li>
          <li>
            <strong>多选操作：</strong>按住 Ctrl 键可以多选节点
          </li>
          <li>
            <strong>批量删除：</strong>选中多个节点后可以批量删除
          </li>
          <li>
            <strong>撤回/重做：</strong>支持操作历史记录（现在可用！）
          </li>
          <li>
            <strong>属性面板：</strong>选中节点后可以在右侧面板编辑属性
          </li>
        </ul>
      </div>
    </div>
  )
}
