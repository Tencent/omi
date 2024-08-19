import { Component, signal, computed } from 'omi'
import { ComponentType } from './component-type'

export interface ComponentInstance {
  id: string // 组件id，用于唯一标识一个组件
  type: ComponentType | string // 枚举，前期先兼容string
  props: Record<string, any> // 属性
  events?: Record<string, string> // 事件，后期直接用代码编辑器来实现事件绑定 or 我们设定一些可编辑事件
  state?: Record<string, any> // 状态，用于组件内部状态管理，如input的value等
  children: ComponentInstance[] // 组件的子节点
}

export abstract class BaseMaterial extends Component {
  private _instance = signal<ComponentInstance>({
    id: 'root',
    type: 'layout',
    props: {},
    children: [],
  })

  // instance的getter
  get instance(): ComponentInstance {
    return this._instance.value
  }

  // instance的setter
  set instance(newInstance: ComponentInstance) {
    // TODO 设置的时候，可进一步确保id和children的id是唯一的
    // 进一步校验
    if (this.validateProps(newInstance.props)) {
      // Call validation before setting
      this._instance.value = newInstance
    }
  }

  validateProps(props: Record<string, any>): boolean {
    if (!props) {
      throw new Error('Props cannot be null or undefined.')
    }
    return true
    // Add further validation as necessary
  }

  // 根据实例类型构造组件，继承后的组件可以直接写生成逻辑 & children 放置位置
  // 在内部实现设置childred的放置位置，根据children的ComponentInstance调用createComponent构建对应的组件
  abstract renderComponent(): JSX.Element

  // 解析当前组件状态为 JSON Schema
  parse_json(): ComponentInstance {
    const parseInstance = (instance: ComponentInstance): ComponentInstance => ({
      id: instance.id,
      type: instance.type,
      props: instance.props,
      events: instance.events,
      state: instance.state,
      children: instance.children.map((child) => parseInstance(child)),
    })

    return parseInstance(this.instance)
  }

  // 生成当前组件的代码片段 (需考虑到生成的代码是什么类型的)
  parse_code(): string {
    const parseInstance = (instance: ComponentInstance): string => {
      const propsCode = Object.entries(instance.props || {})
        .map(([key, value]) => `${key}="${value}"`)
        .join(' ')

      const eventsCode = Object.entries(instance.events || {})
        .map(([event, handler]) => `@${event}="${handler}"`)
        .join(' ')

      const childrenCode = (instance.children || []).map((child) => parseInstance(child)).join('\n')

      return `<${instance.type} id="${instance.id}" ${propsCode} ${eventsCode}>
  ${childrenCode}
</${instance.type}>`
    }

    return parseInstance(this.instance)
  }

  // 增加子节点：可能没有必要
  addChild(parentId: string, newChild: ComponentInstance) {
    const findAndAddChild = (instance: ComponentInstance): boolean => {
      if (instance.id === parentId) {
        instance.children.push(newChild)
        return true
      }

      for (let child of instance.children) {
        if (findAndAddChild(child)) {
          return true
        }
      }

      return false
    }

    if (findAndAddChild(this.instance)) {
      this.instance = { ...this.instance } // 触发更新
    }
  }

  // 基类的渲染方法
  render() {
    return this.renderComponent()
  }
}
