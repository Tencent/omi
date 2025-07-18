/**
 *
 * 为组件添加ref自动转发功能
 *
 * ref自动转发的目的是为了让组件的使用者可以直接通过组件实例获取到内部元素的引用，
 * 特别是组件多层嵌套时，可以通过ref获取到任意层级的组件实例，而不需要层层传递ref
 *
 *
 * 工作原理:
 *
 * 1. 为组件定义一个ref prop，这是约定的名称
 * 2. 在组件实例可以通过this.ref获取到ref对象，可以将this.ref绑定到任意内部元素上
 * 3.
 *
 *
 *
 *
 */
import { type Component } from '../component'
declare const _default: {
  /**
   * 为组件实例动态添加ref属性
   * @param self
   */
  initial: (self: Component) => void
  disconnected: (self: Component) => void
}
export default _default
