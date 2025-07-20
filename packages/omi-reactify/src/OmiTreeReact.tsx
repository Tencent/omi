import React, {
  useReducer,
  useRef,
  useState,
  ReactNode,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react'

export type TreeNode = {
  key: string
  label: string
  desc?: string
  group?: boolean
  children: TreeNode[]
}

export type TreeState = {
  past: TreeNode[][]
  present: TreeNode[]
  future: TreeNode[][]
}

export type OmiTreeReactProps = {
  data: TreeNode[]
  onChange?: (data: TreeNode[]) => void
  onStateChange?: (state: TreeState) => void
  renderNode?: (node: TreeNode, defaultNode: ReactNode) => ReactNode
  renderPanel?: (selectedNodes: TreeNode[], defaultPanel: ReactNode) => ReactNode
  onNodeAdd?: (parentKey: string | null, newNode: TreeNode) => void
  onNodeDelete?: (key: string) => void
  onNodeMove?: (fromKeys: string[], toKey: string | null, asChild: boolean) => void
  onNodeChange?: (key: string, newNode: TreeNode) => void
}

export type TreeAction =
  | { type: 'SET'; data: TreeNode[] }
  | { type: 'UNDO' }
  | { type: 'REDO' }
  | { type: 'ADD'; parentKey: string | null }
  | { type: 'DELETE'; key: string }
  | { type: 'DELETE_BATCH'; keys: string[] }
  | { type: 'GROUP'; nodeKeys: string[] }

const MAX_HISTORY = 50

function deleteNode(nodes: TreeNode[], key: string): TreeNode[] {
  return nodes
    .filter((node) => node.key !== key)
    .map((node) => ({ ...node, children: deleteNode(node.children, key) }))
}

function deleteNodesBatch(nodes: TreeNode[], keys: string[]): TreeNode[] {
  return nodes
    .filter((node) => !keys.includes(node.key))
    .map((node) => ({ ...node, children: deleteNodesBatch(node.children, keys) }))
}

function treeReducer(state: TreeState, action: TreeAction): TreeState {
  let { past, present, future } = state
  switch (action.type) {
    case 'SET': {
      const newPast = [...past, present].slice(-MAX_HISTORY)
      return { past: newPast, present: action.data, future: [] }
    }
    case 'UNDO': {
      if (past.length === 0) return state
      const prev = past[past.length - 1]
      const newPast = past.slice(0, -1)
      return {
        past: newPast,
        present: prev,
        future: [present, ...future].slice(0, MAX_HISTORY),
      }
    }
    case 'REDO': {
      if (future.length === 0) return state
      const next = future[0]
      const newFuture = future.slice(1)
      return {
        past: [...past, present].slice(-MAX_HISTORY),
        present: next,
        future: newFuture,
      }
    }
    case 'ADD': {
      const newNode: TreeNode = {
        key: Date.now().toString() + Math.random().toString(36).slice(2),
        label: '新节点',
        desc: '',
        children: [],
      }
      let newTree: TreeNode[]
      if (!action.parentKey) {
        newTree = [...present, newNode]
      } else {
        newTree = updateNode(present, action.parentKey, (node) => ({
          ...node,
          children: [...node.children, newNode],
        }))
      }
      return { past: [...past, present].slice(-MAX_HISTORY), present: newTree, future: [] }
    }
    case 'DELETE': {
      const newTree = deleteNode(present, action.key)
      return { past: [...past, present].slice(-MAX_HISTORY), present: newTree, future: [] }
    }
    case 'DELETE_BATCH': {
      const newTree = deleteNodesBatch(present, action.keys)
      return { past: [...past, present].slice(-MAX_HISTORY), present: newTree, future: [] }
    }
    case 'GROUP': {
      const groupKey = Date.now().toString() + Math.random().toString(36).slice(2)
      const groupNode: TreeNode = {
        key: groupKey,
        label: '新分组',
        desc: '',
        group: true,
        children: [],
      }
      let newTree = present.filter((n) => !action.nodeKeys.includes(n.key))
      groupNode.children = present.filter((n) => action.nodeKeys.includes(n.key))
      newTree.push(groupNode)
      return { past: [...past, present].slice(-MAX_HISTORY), present: newTree, future: [] }
    }
    default:
      return state
  }
}

function updateNode(
  nodes: TreeNode[],
  key: string,
  updater: (node: TreeNode) => TreeNode
): TreeNode[] {
  return nodes.map((node) => {
    if (node.key === key) {
      return updater(node)
    }
    if (node.children && node.children.length > 0) {
      return { ...node, children: updateNode(node.children, key, updater) }
    }
    return node
  })
}

function moveNodesNested(
  nodes: TreeNode[],
  fromKeys: string[],
  toKey: string | null,
  asChild: boolean
): TreeNode[] {
  let moving: TreeNode[] = []
  let rest: TreeNode[] = []
  function collect(nodes: TreeNode[]): TreeNode[] {
    return nodes.reduce<TreeNode[]>((acc, n) => {
      if (fromKeys.includes(n.key)) {
        moving.push(n)
        return acc
      }
      return [...acc, { ...n, children: collect(n.children) }]
    }, [])
  }
  rest = collect(nodes)
  if (toKey) {
    rest = updateNode(rest, toKey, (node) => ({
      ...node,
      children: asChild ? [...node.children, ...moving] : node.children,
    }))
    if (!asChild) rest = [...rest, ...moving]
  } else {
    rest = [...rest, ...moving]
  }
  return rest
}

function TreeNodePropPanel({
  node,
  onChange,
  selected,
  onSelect,
  multiEdit,
  multiEditValues,
  onMultiEdit,
}: {
  node: TreeNode
  onChange: (key: string, newNode: TreeNode) => void
  selected: boolean
  onSelect: (e: React.MouseEvent, key: string) => void
  multiEdit?: boolean
  multiEditValues?: Partial<TreeNode>
  onMultiEdit?: (values: Partial<TreeNode>) => void
}): JSX.Element {
  const [editLabel, setEditLabel] = useState(multiEdit ? multiEditValues?.label || '' : node.label)
  const [editDesc, setEditDesc] = useState(
    multiEdit ? multiEditValues?.desc || '' : node.desc || ''
  )
  useEffect(() => {
    setEditLabel(multiEdit ? multiEditValues?.label || '' : node.label)
    setEditDesc(multiEdit ? multiEditValues?.desc || '' : node.desc || '')
  }, [node.label, node.desc, multiEdit, multiEditValues])
  const save = () => {
    if (multiEdit && onMultiEdit) {
      onMultiEdit({ label: editLabel.trim(), desc: editDesc })
    } else if (editLabel.trim() !== node.label || editDesc !== (node.desc || '')) {
      onChange(node.key, { ...node, label: editLabel.trim(), desc: editDesc })
    }
  }
  return (
    <div
      style={{
        marginBottom: 8,
        display: 'flex',
        gap: 8,
        alignItems: 'center',
        background: selected ? '#e6f7ff' : undefined,
        padding: 4,
        borderRadius: 4,
        cursor: 'pointer',
      }}
      onClick={(e) => onSelect(e, node.key)}
    >
      <input
        value={editLabel}
        onChange={(e) => setEditLabel(e.target.value)}
        onBlur={save}
        onKeyDown={(e) => {
          if (e.key === 'Enter') save()
        }}
        placeholder={multiEdit ? '批量修改名称' : '节点名称'}
        style={{ width: 100, padding: 4, border: '1px solid #d9d9d9', borderRadius: 4 }}
        onClick={(e) => e.stopPropagation()}
      />
      <input
        value={editDesc}
        onChange={(e) => setEditDesc(e.target.value)}
        onBlur={save}
        onKeyDown={(e) => {
          if (e.key === 'Enter') save()
        }}
        placeholder={multiEdit ? '批量修改描述' : '描述（可选）'}
        style={{ width: 120, padding: 4, border: '1px solid #d9d9d9', borderRadius: 4 }}
        onClick={(e) => e.stopPropagation()}
      />
      {node.group && <span style={{ color: '#1890ff', marginLeft: 8 }}>分组</span>}
    </div>
  )
}

function DragHandle({
  onDragStart,
  onDragOver,
  onDrop,
  isOver,
}: {
  onDragStart: (e: React.DragEvent) => void
  onDragOver: (e: React.DragEvent) => void
  onDrop: (e: React.DragEvent) => void
  isOver: boolean
}) {
  return (
    <span
      draggable={true}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
      style={{
        cursor: 'grab',
        marginRight: 8,
        color: isOver ? '#1890ff' : '#888',
        fontSize: '16px',
        userSelect: 'none',
        opacity: 1,
        pointerEvents: 'auto',
      }}
      title="拖拽排序"
      onMouseDown={(e) => {
        // 保证鼠标按下时也是抓手
        ;(e.target as HTMLElement).style.cursor = 'grabbing'
      }}
      onMouseUp={(e) => {
        ;(e.target as HTMLElement).style.cursor = 'grab'
      }}
    >
      ⋮⋮
    </span>
  )
}

function renderTree(
  nodes: TreeNode[],
  path: number[],
  onNodeChange: (key: string, newNode: TreeNode) => void,
  onNodeMove: (fromKeys: string[], toKey: string | null, asChild: boolean) => void,
  onNodeAdd: (parentKey: string | null) => void,
  onNodeDelete: (key: string) => void,
  selectedKeys: string[],
  onSelect: (e: React.MouseEvent, key: string) => void,
  renderNode?: (node: TreeNode, defaultNode: ReactNode) => ReactNode
): ReactNode[] {
  return nodes.map((node, idx) => {
    const selected = selectedKeys.includes(node.key)
    // 每个节点内容单独一行横排，最外层 div 负责选中/多选
    const nodeRow = (
      <div
        key={node.key}
        onClick={(e) => onSelect(e, node.key)}
        style={{
          border: selected ? '2px solid #1890ff' : '1px solid #eee',
          margin: 4,
          padding: 8,
          borderRadius: 6,
          background: selected ? '#e6f7ff' : '#fff',
          display: 'flex',
          alignItems: 'center',
          boxShadow: selected ? '0 0 0 2px #91d5ff' : undefined,
          cursor: 'pointer',
          transition: 'background 0.2s, box-shadow 0.2s',
        }}
      >
        <span
          draggable={true}
          onDragStart={(e) => {
            console.log('onDragStart', node.key)
            e.dataTransfer.setData('text/plain', node.key)
          }}
          onDragOver={(e) => {
            e.preventDefault()
            console.log('onDragOver', node.key)
          }}
          onDrop={(e) => {
            e.preventDefault()
            const fromKey = e.dataTransfer.getData('text/plain')
            console.log('onDrop', fromKey, '->', node.key)
            if (
              fromKey &&
              fromKey !== node.key &&
              !(node.children || []).some((child) => child.key === fromKey)
            ) {
              onNodeMove([fromKey], node.key, node.group === true)
            }
          }}
          style={{
            cursor: 'grab',
            marginRight: 8,
            color: selected ? '#1890ff' : '#888',
            fontSize: '16px',
            userSelect: 'none',
            opacity: 1,
            pointerEvents: 'auto',
          }}
          title="拖拽排序"
          onMouseDown={(e) => {
            ;(e.target as HTMLElement).style.cursor = 'grabbing'
          }}
          onMouseUp={(e) => {
            ;(e.target as HTMLElement).style.cursor = 'grab'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          ⋮⋮
        </span>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          <TreeNodePropPanel
            node={node}
            onChange={onNodeChange}
            selected={selected}
            onSelect={onSelect}
          />
          <button
            style={{
              marginLeft: 8,
              padding: '4px 8px',
              border: '1px solid #d9d9d9',
              borderRadius: 4,
              background: '#fff',
              cursor: 'pointer',
            }}
            onClick={(e) => {
              e.stopPropagation()
              onNodeAdd(node.key)
            }}
          >
            添加子节点
          </button>
          <button
            style={{
              marginLeft: 4,
              padding: '4px 8px',
              border: '1px solid #d9d9d9',
              borderRadius: 4,
              background: '#fff',
              cursor: 'pointer',
            }}
            onClick={(e) => {
              e.stopPropagation()
              onNodeDelete(node.key)
            }}
          >
            删除
          </button>
        </div>
      </div>
    )
    // 子节点竖着排列
    const children = node.children && node.children.length > 0 && (
      <div
        style={{
          marginLeft: 16,
          marginTop: 8,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {renderTree(
          node.children,
          [...path, idx],
          onNodeChange,
          onNodeMove,
          onNodeAdd,
          onNodeDelete,
          selectedKeys,
          onSelect,
          renderNode
        )}
      </div>
    )
    return renderNode ? (
      renderNode(
        node,
        <React.Fragment key={node.key}>
          {nodeRow}
          {children}
        </React.Fragment>
      )
    ) : (
      <React.Fragment key={node.key}>
        {nodeRow}
        {children}
      </React.Fragment>
    )
  })
}

export default forwardRef<{ dispatch: (action: TreeAction) => void }, OmiTreeReactProps>(
  function OmiTreeReact(props, ref) {
    const {
      data,
      onChange,
      onStateChange,
      renderNode,
      renderPanel,
      onNodeAdd,
      onNodeDelete,
      onNodeMove,
      onNodeChange,
    } = props

    const [state, dispatch] = useReducer(treeReducer, {
      past: [],
      present: data,
      future: [],
    })

    const [selectedKeys, setSelectedKeys] = useState<string[]>([])

    const isControlled = typeof onChange === 'function'
    const treeData = isControlled ? data : state.present

    // 暴露 dispatch 方法给外部
    useImperativeHandle(
      ref,
      () => ({
        dispatch,
      }),
      [dispatch]
    )

    // 监听状态变化，通知外部
    useEffect(() => {
      if (onStateChange) {
        onStateChange(state)
      }
    }, [state, onStateChange])

    const handleNodeChange = (key: string, newNode: TreeNode) => {
      if (onNodeChange) onNodeChange(key, newNode)
      const newTree = updateNode(treeData, key, () => newNode)
      if (isControlled && !!onChange) {
        onChange(newTree)
      } else {
        dispatch({ type: 'SET', data: newTree })
      }
    }

    const handleNodeMove = (fromKeys: string[], toKey: string | null, asChild: boolean) => {
      if (toKey && fromKeys.includes(toKey)) return
      if (onNodeMove) onNodeMove(fromKeys, toKey, asChild)
      const newTree = moveNodesNested(treeData, fromKeys, toKey, asChild)
      if (isControlled && !!onChange) {
        onChange(newTree)
      } else {
        dispatch({ type: 'SET', data: newTree })
      }
      setSelectedKeys(fromKeys)
    }

    const handleNodeAdd = (parentKey: string | null) => {
      const newNode: TreeNode = {
        key: Date.now().toString() + Math.random().toString(36).slice(2),
        label: '新节点',
        desc: '',
        children: [],
      }
      if (onNodeAdd) onNodeAdd(parentKey, newNode)
      if (isControlled && !!onChange) {
        let newTree: TreeNode[]
        if (!parentKey) {
          newTree = [...treeData, newNode]
        } else {
          newTree = updateNode(treeData, parentKey, (node) => ({
            ...node,
            children: [...node.children, newNode],
          }))
        }
        onChange(newTree)
      } else {
        dispatch({ type: 'ADD', parentKey })
      }
    }

    const handleBatchDelete = () => {
      if (selectedKeys.length === 0) return
      if (onNodeDelete) selectedKeys.forEach((k) => onNodeDelete(k))
      if (isControlled && !!onChange) {
        const newTree = deleteNodesBatch(treeData, selectedKeys)
        onChange(newTree)
      } else {
        dispatch({ type: 'DELETE_BATCH', keys: selectedKeys })
      }
      setSelectedKeys([])
    }

    const handleNodeDelete = (key: string) => {
      if (onNodeDelete) onNodeDelete(key)
      if (isControlled && !!onChange) {
        const newTree = deleteNode(treeData, key)
        onChange(newTree)
      } else {
        dispatch({ type: 'DELETE', key })
      }
      setSelectedKeys((keys) => keys.filter((k) => k !== key))
    }

    const handleSelect = (e: React.MouseEvent, key: string) => {
      e.stopPropagation()
      if (e.ctrlKey || e.metaKey) {
        setSelectedKeys((keys) =>
          keys.includes(key) ? keys.filter((k) => k !== key) : [...keys, key]
        )
      } else if (e.shiftKey && selectedKeys.length > 0) {
        const allKeys = treeData.map((n) => n.key)
        const last = allKeys.indexOf(selectedKeys[selectedKeys.length - 1])
        const cur = allKeys.indexOf(key)
        if (last !== -1 && cur !== -1) {
          const [start, end] = [last, cur].sort((a, b) => a - b)
          setSelectedKeys(allKeys.slice(start, end + 1))
        }
      } else {
        setSelectedKeys([key])
      }
    }

    const multiEdit = selectedKeys.length > 1
    const selectedNodes = selectedKeys
      .map((k) => findNodeByKey(treeData, k))
      .filter(Boolean) as TreeNode[]
    const allGroups = selectedNodes.every((n) => n.group)
    const multiEditValues = multiEdit
      ? selectedNodes.reduce<Partial<TreeNode>>((acc, node) => {
          if (acc.label === undefined) acc.label = node.label
          if (acc.desc === undefined) acc.desc = node.desc
          if (acc.label !== node.label) acc.label = ''
          if (acc.desc !== node.desc) acc.desc = ''
          return acc
        }, {})
      : undefined

    const handleMultiEdit = (values: Partial<TreeNode>) => {
      const newTree = updateNodesBatch(treeData, selectedKeys, values)
      if (isControlled && !!onChange) {
        onChange(newTree)
      } else {
        dispatch({ type: 'SET', data: newTree })
      }
    }

    function findNodeByKey(nodes: TreeNode[], key: string): TreeNode | null {
      for (const n of nodes) {
        if (n.key === key) return n
        if (n.children.length > 0) {
          const found = findNodeByKey(n.children, key)
          if (found) return found
        }
      }
      return null
    }

    function updateNodesBatch(
      nodes: TreeNode[],
      keys: string[],
      values: Partial<TreeNode>
    ): TreeNode[] {
      return nodes.map((n) =>
        keys.includes(n.key)
          ? { ...n, ...values }
          : { ...n, children: updateNodesBatch(n.children, keys, values) }
      )
    }

    const canUndo = !isControlled && state.past.length > 0
    const canRedo = !isControlled && state.future.length > 0

    const defaultPanel =
      multiEdit && allGroups ? (
        <TreeNodePropPanel
          node={{ key: '', label: '', desc: '', group: true, children: [] }}
          onChange={() => {}}
          selected={false}
          onSelect={() => {}}
          multiEdit
          multiEditValues={multiEditValues}
          onMultiEdit={handleMultiEdit}
        />
      ) : null

    const panel = renderPanel ? renderPanel(selectedNodes, defaultPanel) : defaultPanel

    return (
      <div style={{ padding: 16, fontFamily: 'Arial, sans-serif' }}>
        {/* 控制按钮 */}
        <div style={{ marginBottom: 16, display: 'flex', gap: 8 }}>
          <button
            onClick={() => dispatch({ type: 'UNDO' })}
            disabled={isControlled || !canUndo}
            style={{
              padding: '8px 16px',
              border: '1px solid #d9d9d9',
              borderRadius: 4,
              background: !isControlled && canUndo ? '#fff' : '#f5f5f5',
              cursor: !isControlled && canUndo ? 'pointer' : 'not-allowed',
              color: !isControlled && canUndo ? '#000' : '#ccc',
            }}
          >
            撤销
          </button>
          <button
            onClick={() => dispatch({ type: 'REDO' })}
            disabled={isControlled || !canRedo}
            style={{
              padding: '8px 16px',
              border: '1px solid #d9d9d9',
              borderRadius: 4,
              background: !isControlled && canRedo ? '#fff' : '#f5f5f5',
              cursor: !isControlled && canRedo ? 'pointer' : 'not-allowed',
              color: !isControlled && canRedo ? '#000' : '#ccc',
            }}
          >
            重做
          </button>
          <button
            onClick={() => handleNodeAdd(null)}
            disabled={false}
            style={{
              padding: '8px 16px',
              border: '1px solid #d9d9d9',
              borderRadius: 4,
              background: '#fff',
              cursor: 'pointer',
              color: '#000',
            }}
          >
            添加根节点
          </button>
          <button
            onClick={handleBatchDelete}
            disabled={selectedKeys.length === 0}
            style={{
              padding: '8px 16px',
              border: '1px solid #d9d9d9',
              borderRadius: 4,
              background: selectedKeys.length > 0 ? '#fff' : '#f5f5f5',
              cursor: selectedKeys.length > 0 ? 'pointer' : 'not-allowed',
              color: selectedKeys.length > 0 ? '#000' : '#ccc',
            }}
          >
            批量删除 ({selectedKeys.length})
          </button>
        </div>

        {/* 属性面板 */}
        {panel && (
          <div
            style={{
              marginBottom: 16,
              padding: 12,
              border: '1px solid #d9d9d9',
              borderRadius: 4,
              background: '#fafafa',
            }}
          >
            <h4 style={{ margin: '0 0 8px 0' }}>批量编辑</h4>
            {panel}
          </div>
        )}

        {/* 树结构 */}
        <div
          style={{
            border: '1px solid #d9d9d9',
            borderRadius: 6,
            padding: 16,
            background: '#fafafa',
          }}
        >
          {renderTree(
            treeData,
            [],
            handleNodeChange,
            handleNodeMove,
            handleNodeAdd,
            handleNodeDelete,
            selectedKeys,
            handleSelect,
            renderNode
          )}
        </div>
      </div>
    )
  }
)
