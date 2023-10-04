import { TNode } from '../common'

export interface TdDividerProps {
  /**
   * 文本位置（仅在水平分割线有效）
   * @default center
   */
  align?: 'left' | 'right' | 'center'
  /**
   * 子元素，同 content
   */
  children?: TNode
  /**
   * 子元素
   */
  content?: TNode
  /**
   * 是否虚线（仅在水平分割线有效）
   * @default false
   */
  dashed?: boolean
  /**
   * 分隔线类型有两种：水平和垂直
   * @default horizontal
   */
  layout?: 'horizontal' | 'vertical'
}
