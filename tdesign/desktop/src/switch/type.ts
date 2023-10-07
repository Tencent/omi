import { TNode } from '../common'

export interface TdSwitchProps<T = SwitchValue> {
  /**
   * 用于自定义开关的值，[打开时的值，关闭时的值]。默认为 [true, false]。示例：[1, 0]、['open', 'close']
   */
  customValue?: Array<SwitchValue>
  /**
   * 是否禁用组件，默认为 false
   */
  disabled?: boolean
  /**
   * 开关内容，[开启时内容，关闭时内容]。示例：['开', '关'] 或 (value) => value ? '开' : '关'
   * @default []
   */
  label?: Array<string | TNode> | TNode<{ value: SwitchValue }>
  /**
   * 是否处于加载中状态
   * @default false
   */
  loading?: boolean
  /**
   * 开关尺寸
   * @default medium
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * 开关值
   */
  value?: T
  /**
   * 开关值，非受控属性
   */
  defaultValue?: T
  /**
   * 数据发生变化时触发
   */
  onChange?: (value: T, context: { e: MouseEvent }) => void
}

export type SwitchValue = string | number | boolean
