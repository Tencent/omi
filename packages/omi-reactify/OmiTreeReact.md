# OmiTreeReact 组件（中英双语文档）

## 简介 Introduction

`OmiTreeReact` 是一个高质量、类型安全、支持大厂级业务场景的 React 树组件，基于 Omi Web Components 封装，支持属性编辑、嵌套/批量拖拽、分组、Undo/Redo、批量操作、分组节点联动、受控/非受控模式等能力，适用于低代码平台、表单引擎、可视化编辑器等复杂场景。

OmiTreeReact is a high-quality, type-safe React tree component based on Omi Web Components, supporting advanced business scenarios such as property editing, nested/batch drag-and-drop, grouping, Undo/Redo, batch operations, group node linkage, controlled/uncontrolled modes, etc. Suitable for low-code platforms, form engines, visual editors, and other complex scenarios.

---

## 主要特性 Key Features

- 属性编辑、批量属性编辑（支持分组节点联动）
- 嵌套拖拽、批量拖拽、分组节点拖拽
- 拖拽到空白区自动新建分组
- 批量删除、Undo/Redo 全面支持
- 受控/非受控模式切换
- 类型安全、事件回调丰富、易于扩展
- 代码风格统一，工程化规范

---

## API 设计

### Props

| 属性/Prop | 类型/Type                    | 说明/Description                        |
| --------- | ---------------------------- | --------------------------------------- |
| data      | `TreeNode[]`                 | 树结构数据，受控模式下由外部管理        |
| onChange  | `(data: TreeNode[]) => void` | 数据变更回调，受控模式下必填            |
| ...       | ...                          | 其它扩展 props（如 render props、事件） |

### TreeNode 结构

```ts
export type TreeNode = {
  key: string
  label: string
  desc?: string
  group?: boolean // 是否为分组节点
  children: TreeNode[]
}
```

---

## 典型用例 Usage Examples

### 1. 受控模式 Controlled Mode

```tsx
import React, { useState } from 'react'
import OmiTreeReact, { TreeNode } from 'omi-reactify'

const initialData: TreeNode[] = [
  { key: '1', label: '节点1', children: [] },
  { key: '2', label: '节点2', children: [] },
]

export default function Demo() {
  const [treeData, setTreeData] = useState<TreeNode[]>(initialData)
  return <OmiTreeReact data={treeData} onChange={setTreeData} />
}
```

### 2. 非受控模式 Uncontrolled Mode

```tsx
<OmiTreeReact data={initialData} />
```

### 3. 批量拖拽、分组、批量属性编辑

- 按住 Ctrl/Shift 多选节点，拖拽可批量移动，拖拽到空白区自动新建分组。
- 多选分组节点时，属性面板支持批量编辑。

---

## 事件回调 Event Callbacks

- `onChange(data: TreeNode[])`：数据变更时触发（受控模式下必填）
- 未来可扩展：`onNodeAdd`、`onNodeDelete`、`onNodeMove`、`onNodeChange` 等

---

## 扩展点与最佳实践

- 支持 render props，自定义节点渲染、属性面板、拖拽手柄等
- 支持事件回调扩展，便于业务集成
- 代码风格统一，支持 Prettier、ESLint、CI 检查
- Undo/Redo、批量操作、分组联动等能力可按需扩展

---

## 受控/非受控模式说明

- 受控模式：由外部传入 `data` 和 `onChange`，所有数据变更由外部管理，适合与全局状态管理集成。
- 非受控模式：仅传入 `data`，组件内部自动管理数据和历史栈，适合简单场景。

---

## 常见问题 FAQ

- 如何实现批量拖拽/批量删除？
  > 按住 Ctrl/Shift 多选节点后，拖拽或点击“批量删除”按钮即可。
- 如何扩展分组节点属性？
  > TreeNode 支持自定义字段，可在属性面板中扩展更多属性。
- 如何接入 Undo/Redo？
  > 组件内置历史栈，所有操作都支持撤销/重做。

---

# OmiTreeReact Component (English)

## Introduction

OmiTreeReact is a high-quality, type-safe React tree component based on Omi Web Components, supporting advanced business scenarios such as property editing, nested/batch drag-and-drop, grouping, Undo/Redo, batch operations, group node linkage, controlled/uncontrolled modes, etc. Suitable for low-code platforms, form engines, visual editors, and other complex scenarios.

## Key Features

- Property editing, batch property editing (group node linkage)
- Nested drag-and-drop, batch drag-and-drop, group node drag-and-drop
- Drag to blank area to create group automatically
- Batch delete, full Undo/Redo support
- Controlled/uncontrolled mode switch
- Type-safe, rich event callbacks, easy to extend
- Unified code style, engineering specification

## API Design

### Props

| Prop     | Type                         | Description                                        |
| -------- | ---------------------------- | -------------------------------------------------- |
| data     | `TreeNode[]`                 | Tree data, managed externally in controlled mode   |
| onChange | `(data: TreeNode[]) => void` | Data change callback, required in controlled mode  |
| ...      | ...                          | Other extension props (render props, events, etc.) |

### TreeNode Structure

```ts
export type TreeNode = {
  key: string
  label: string
  desc?: string
  group?: boolean // Is group node
  children: TreeNode[]
}
```

## Usage Examples

### 1. Controlled Mode

```tsx
import React, { useState } from 'react'
import OmiTreeReact, { TreeNode } from 'omi-reactify'

const initialData: TreeNode[] = [
  { key: '1', label: 'Node 1', children: [] },
  { key: '2', label: 'Node 2', children: [] },
]

export default function Demo() {
  const [treeData, setTreeData] = useState<TreeNode[]>(initialData)
  return <OmiTreeReact data={treeData} onChange={setTreeData} />
}
```

### 2. Uncontrolled Mode

```tsx
<OmiTreeReact data={initialData} />
```

### 3. Batch Drag, Group, Batch Property Edit

- Hold Ctrl/Shift to multi-select nodes, drag to batch move, drag to blank area to create group automatically.
- When multi-selecting group nodes, the property panel supports batch editing.

## Event Callbacks

- `onChange(data: TreeNode[])`: Triggered when data changes (required in controlled mode)
- Future extensible: `onNodeAdd`, `onNodeDelete`, `onNodeMove`, `onNodeChange`, etc.

## Extension Points & Best Practices

- Support render props for custom node rendering, property panel, drag handle, etc.
- Support event callback extension for business integration
- Unified code style, Prettier, ESLint, CI support
- Undo/Redo, batch operation, group linkage can be extended as needed

## Controlled/Uncontrolled Mode

- Controlled: Pass in `data` and `onChange`, all data changes managed externally, suitable for integration with global state management.
- Uncontrolled: Only pass in `data`, component manages data and history stack internally, suitable for simple scenarios.

## FAQ

- How to batch drag/delete?
  > Hold Ctrl/Shift to multi-select nodes, then drag or click the "Batch Delete" button.
- How to extend group node properties?
  > TreeNode supports custom fields, you can extend more properties in the property panel.
- How to use Undo/Redo?
  > The component has a built-in history stack, all operations support undo/redo.
