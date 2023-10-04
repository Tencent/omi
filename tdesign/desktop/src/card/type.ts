/* eslint-disable */
import { TNode } from '../common'

export interface TdCardProps {
  /**
   * 卡片操作区
   */
  actions?: TNode
  /**
   * 卡片中的用户头像，仅在海报风格的卡片中有效
   */
  avatar?: TNode
  /**
   * 是否有边框
   * @default true
   */
  bordered?: boolean
  /**
   * 卡片内容，同 content
   */
  children?: TNode
  /**
   * 卡片内容
   */
  content?: TNode
  /**
   * 卡片封面图。值类型为字符串，会自动使用 `img` 标签输出封面图；也可以完全最定义封面图
   */
  cover?: TNode
  /**
   * 卡片描述文案
   */
  description?: TNode
  /**
   * 卡片底部内容，可完全自定义
   */
  footer?: TNode
  /**
   * 卡片顶部内容，优先级高于其他所有元素
   */
  header?: TNode
  /**
   * 头部是否带分割线，仅在有header时有效
   * @default false
   */
  headerBordered?: boolean
  /**
   * hover时是否有阴影
   * @default false
   */
  hoverShadow?: boolean
  /**
   * 加载状态，值为 true 会根据不同的布局显示不同的加载状态，值为 false 则表示非加载状态。也可以使用 Sketon 组件完全自定义加载态呈现内容
   * @default false
   */
  loading?: TNode
  /**
   * 是否显示卡片阴影，默认不显示
   * @default false
   */
  shadow?: boolean
  /**
   * 尺寸
   * @default medium
   */
  size?: 'medium' | 'small'
  /**
   * 卡片状态内容，仅在操作区域不在顶部时有效（即 `theme=poster2` ）
   * @default ''
   */
  status?: string
  /**
   * 卡片副标题
   */
  subtitle?: TNode
  /**
   * 卡片风格：普通风格、海报风格1（操作区域在顶部）、海报风格2（操作区域在底部）
   * @default normal
   */
  theme?: 'normal' | 'poster1' | 'poster2'
  /**
   * 卡片标题
   */
  title?: TNode
}
