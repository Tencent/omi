// 布局组件，需要优化
// src/materials/layout/layout.tsx
import { tag, h } from 'omi'
import { BaseMaterial, ComponentInstance } from '../base-material'

@tag('layout-component')
class LayoutComponent extends BaseMaterial {
  static css = [
    `div {
      width:100px;
      height:100px;
    }`,
  ]

  renderComponent(instance: ComponentInstance): JSX.Element {
    // 布局组件，渲染其子组件
    return <div {...instance.props}>{instance.children.map((child) => this.createComponent(child))}</div>
  }
}
