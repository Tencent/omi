import React, { useCallback } from 'react'
import OmiTreeReact, { TreeNode } from '../omi-tree-react'

const initialData: TreeNode[] = [
  {
    key: '1',
    label: '根节点1',
    desc: '这是根节点1的描述',
    children: [],
  },
]

export default function OmiTreeDemo() {
  const handleNodeAdd = useCallback((parentKey: string | null, newNode: TreeNode) => {
    // 已删除 console.log
  }, [])

  const handleNodeDelete = useCallback((key: string) => {
    // 已删除 console.log
  }, [])

  // 修正参数类型
  const handleNodeMove = useCallback(
    (fromKeys: string[], toKey: string | null, position: 'before' | 'after' | 'child') => {
      // 已删除 console.log
    },
    []
  )

  const handleNodeChange = useCallback((key: string, newNode: TreeNode) => {
    // 已删除 console.log
  }, [])

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <OmiTreeReact
        data={initialData}
        onNodeAdd={handleNodeAdd}
        onNodeDelete={handleNodeDelete}
        onNodeMove={handleNodeMove}
        onNodeChange={handleNodeChange}
      />
      {/* 功能说明区域已删除，避免重复 */}
    </div>
  )
}
