import { Component} from 'omi'

export interface ComponentInstance {
  id: string
  type: string
  props: Record<string, any>
  children: ComponentInstance[]
}

export abstract class BaseMaterial extends Component<ComponentInstance> {


  // 抽象方法，用于处理 `ComponentInstance` 接口数据
  abstract renderComponent(instance: ComponentInstance): JSX.Element
  // 根据实例类型构造组件
  protected createComponent(instance: ComponentInstance): JSX.Element {
    switch (instance.type) {
      case 'button':
        return <button {...instance.props}>{instance.props.label}</button>
      case 'layout':
        return <div {...instance.props}>{instance.children.map((child) => this.renderComponent(child))}</div>
      // 可以扩展其他组件类型
      default:
        return <div>未知组件类型: {instance.type}</div>
    }
  }

  // 基类的渲染方法
  render() {
    const childrenInstance = this.props.children as ComponentInstance[]
    return <div>
        {childrenInstance.map((instance) => this.renderComponent(instance))}  
    </div>
  }
}
