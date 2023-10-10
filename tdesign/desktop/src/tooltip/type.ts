import { PopupPlacement } from '../popup'
import { TdPopupProps } from '../popup'
import { TNode } from '../common'

export interface TdTooltipProps extends TdPopupProps {
  /**
   * 【议案讨论中】延迟出现提示，用于异步加载提示信息需要延迟显示的业务场景下
   */
  delay?: number
  /**
   * 是否在关闭浮层时销毁浮层
   * @default true
   */
  destroyOnClose?: boolean
  /**
   * 用于设置提示默认显示多长时间之后消失，初始第一次有效，单位：毫秒
   */
  duration?: number
  /**
   * 浮层出现位置
   * @default top
   */
  placement?: PopupPlacement
  /**
   * 是否显示浮层箭头
   * @default true
   */
  showArrow?: boolean
  /**
   * 文字提示风格
   * @default default
   */
  theme?: 'default' | 'primary' | 'success' | 'danger' | 'warning' | 'light'
}

export interface TdTooltipLiteProps {
  /**
   * 触发元素，同 triggerElement
   */
  children?: TNode
  /**
   * 文字提示内容
   */
  content?: TNode
  /**
   * 提示浮层出现的位置
   * @default top
   */
  placement?: 'top' | 'bottom' | 'mouse'
  /**
   * 是否显示箭头
   * @default true
   */
  showArrow?: boolean
  /**
   * 文字提示浮层是否需要阴影
   * @default true
   */
  showShadow?: boolean
  /**
   * 组件风格，有亮色模式和暗色模式两种
   * @default default
   */
  theme?: 'light' | 'default'
  /**
   * 触发元素
   */
  triggerElement?: TNode
}
