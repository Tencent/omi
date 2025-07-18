<p align="center"><img src="https://omijs.github.io/home/assets/logo.svg" alt="omi" width="100"/></p>
<h2 align="center">Omi - Web Components 框架</h2>

- 📶 基于 [reactive-signal](https://github.com/Tencent/omi/tree/master/packages/reactive-signal) 的 **Signal** 驱动响应式编程
- 🧱 [TDesign Web Components](https://github.com/TDesignOteam/tdesign-web-components)
- 💗 [100+ OMI 模板](https://omi.cdn-go.cn/templates/latest/) & [OMI 模板源码](https://github.com/Tencent/omi/tree/master/packages/omi-templates)
- 🐲 [OMI 表单](https://omi.cdn-go.cn/form/latest/docs/) & [OMI 表单演练场](https://omi.cdn-go.cn/form/latest/play/) & [Lucide Omi 图标](https://github.com/omijs/lucide-omi)
- ⚡ **小巧**体积，**快速**性能
- 🌐 你需要的一切：**Web Components**、**JSX**、函数组件、路由、Suspense、指令、Tailwindcss...
- 💒 利用 **Constructable Stylesheets** 轻松管理和共享样式

## ExportParts - 样式化嵌套组件

Omi 支持 Web Components 的 `exportparts` 属性，允许将嵌套组件的 CSS parts 暴露给外部进行样式化。这使得在保持样式封装的同时，实现强大的组件组合。

### 基本用法

```tsx
import { render, tag, Component, h } from 'omi'

// 内部组件定义 CSS parts
@tag('inner-button')
class InnerButton extends Component {
  static css = `
    .btn {
      padding: 10px 20px;
      border: 2px solid #007bff;
      background: #007bff;
      color: white;
      border-radius: 4px;
      cursor: pointer;
    }
  `

  render() {
    return (
      <button class="btn" part="button">
        <span part="icon">🚀</span>
        <span part="text">{this.props.children}</span>
      </button>
    )
  }
}

// 容器组件使用 exportparts
@tag('card-component')
class CardComponent extends Component {
  static css = `
    .card {
      border: 1px solid #ddd;
      padding: 20px;
      border-radius: 8px;
    }
    
    /* 通过 ::part() 样式化嵌套组件 */
    inner-button::part(button) {
      background: #28a745;
      border-color: #28a745;
    }
  `

  render() {
    return (
      <div class="card" part="card">
        {/* 导出嵌套组件的 parts */}
        <inner-button exportparts="button, icon, text">Click me</inner-button>
      </div>
    )
  }
}

// 父组件可以样式化导出的 parts
@tag('app-container')
class AppContainer extends Component {
  static css = `
    /* 样式化从嵌套组件导出的 parts */
    card-component::part(button) {
      background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
      border: none;
      border-radius: 25px;
    }
    
    card-component::part(icon) {
      animation: spin 2s linear infinite;
    }
    
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `

  render() {
    return <card-component />
  }
}
```

### 核心特性

- **Part 定义**: 使用 `part="part-name"` 属性定义组件中可样式化的部分
- **Part 导出**: 使用 `exportparts="part1, part2"` 暴露嵌套组件的 parts
- **外部样式化**: 使用 `component::part(part-name)` 选择器从外部样式化 parts
- **Part 重命名**: 使用 `exportparts="internal-name:external-name"` 重命名导出的 parts

### 高级示例

完整的工作示例请参考 [`exportparts-example.tsx`](./examples/exportparts-example.tsx)，演示了：

- 多层组件嵌套
- Part 重命名和别名
- 复杂样式化场景
- 动画和悬停效果

## 在 Vue 中使用 Omi 组件

```vue
<template>
  <h1>{{ msg }}</h1>

  <my-counter @change="change" :count="count" />
  <p>【Omi 组件】</p>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>【Vue 组件】</p>
  </div>
</template>
```

## 许可证

MIT © Tencent
