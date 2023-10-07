import { TNode, TElement } from '../common'

export interface TdTimelineProps {
  /**
   * 标签信息放在时间轴的位置，`mode='alternate'` 时生效。纵向时间轴信息位置：左侧、右侧或两侧，默认信息在时间轴右侧。横向时间轴信息位置：上方、下方、两侧
   * @default left
   */
  labelAlign?: 'left' | 'right' | 'alternate' | 'top' | 'bottom'
  /**
   * 时间轴方向：水平方向、垂直方向
   * @default vertical
   */
  layout?: 'horizontal' | 'vertical'
  /**
   * 标签与内容文本的位置关系，`alternate` 为展示在轴两侧，`same` 为展示在同一侧
   * @default alternate
   */
  mode?: 'alternate' | 'same'
  /**
   * 时间轴是否表现为倒序
   * @default false
   */
  reverse?: boolean
  /**
   * 步骤条风格
   * @default default
   */
  theme?: 'default' | 'dot'
}

export interface TdTimelineItemProps {
  /**
   * 描述内容，同 content
   */
  children?: TNode
  /**
   * 描述内容
   */
  content?: TNode
  /**
   * 用于自定义时间轴节点元素
   */
  dot?: TElement
  /**
   * 时间轴颜色，内置 `primary/warning/error/default` 四种色值，可传入 16 进制颜色码或 RGB 颜色值.
   * @default primary
   */
  dotColor?: string
  /**
   * 标签文本内容，可完全自定义
   */
  label?: TNode
  /**
   * 标签信息相对于时间轴的位置，在 `mode='alternate'` 时生效，优先级高于 `Timeline.labelAlign`
   */
  labelAlign?: 'left' | 'right' | 'top' | 'bottom'
  /**
   * 是否处在加载状态
   */
  loading?: boolean
}
