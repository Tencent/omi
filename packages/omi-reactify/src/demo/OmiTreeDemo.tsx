import React, { useCallback } from 'react'
import OmiTreeReact, { TreeNode } from '../OmiTreeReact'

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
