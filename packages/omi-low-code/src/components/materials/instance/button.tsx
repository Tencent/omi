// 实例组件，需要修改
// src/materials/instance/button.tsx
import { tag } from 'omi'
import { BaseMaterial, ComponentInstance } from '../base-material'

@tag('button-component')
class ButtonComponent extends BaseMaterial  {

  renderComponent(instance: ComponentInstance): JSX.Element {
    // 按钮组件，渲染具体的按钮元素
    return <button {...instance.props}>{instance.props.label}</button>
  }
}
