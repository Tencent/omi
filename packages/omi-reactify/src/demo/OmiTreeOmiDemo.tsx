import React, { useReducer } from 'react'
import OmiTreeOmi from '../OmiTreeOmi'

const initialData = [
  {
    id: 1,
    name: '根节点',
    children: [
      { id: 2, name: '节点A', children: [] },
      { id: 3, name: '节点B', children: [{ id: 4, name: '节点B1', children: [] }] },
    ],
  },
]

type State = {
  past: any[][]
  present: any[]
  future: any[][]
}

type Action = { type: 'SET'; data: any[] } | { type: 'UNDO' } | { type: 'REDO' }

const MAX_HISTORY = 50

function reducer(state: State, action: Action): State {
  const { past, present, future } = state
  switch (action.type) {
    case 'SET':
      if (action.data === present) return state
      return {
        past: [...past, present].slice(-MAX_HISTORY),
        present: action.data,
        future: [],
      }
    case 'UNDO':
      if (past.length === 0) return state
      return {
        past: past.slice(0, -1),
        present: past[past.length - 1],
        future: [present, ...future].slice(0, MAX_HISTORY),
      }
    case 'REDO':
      if (future.length === 0) return state
      return {
        past: [...past, present].slice(-MAX_HISTORY),
        present: future[0],
        future: future.slice(1),
      }
    default:
      return state
  }
}

export default function OmiTreeOmiDemo() {
  const [state, dispatch] = useReducer(reducer, {
    past: [],
    present: initialData,
    future: [],
  })
  const { past, present, future } = state
  const canUndo = past.length > 0
  const canRedo = future.length > 0

  // 增加根节点
  const handleAddRoot = () => {
    const newId = Date.now()
    dispatch({ type: 'SET', data: [...present, { id: newId, name: '新节点', children: [] }] })
  }

  // 节点拖拽、属性编辑等都通过 onNodeMove 事件和 setData 实现
  return (
    <div>
      <div style={{ marginBottom: 16, display: 'flex', gap: 8 }}>
        <button onClick={() => dispatch({ type: 'UNDO' })} disabled={!canUndo}>
          撤销
        </button>
        <button onClick={() => dispatch({ type: 'REDO' })} disabled={!canRedo}>
          重做
        </button>
        <button onClick={handleAddRoot}>添加根节点</button>
      </div>
      <OmiTreeOmi
        data={present}
        onNodeMove={(e) => {
          // Omi 组件内部已自动处理数据变更，这里只需同步最新数据即可
          dispatch({ type: 'SET', data: [...present] })
        }}
      />
    </div>
  )
}
