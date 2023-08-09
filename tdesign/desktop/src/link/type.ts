import { WeElement } from 'omi'
export interface LinkProps {
  /**
   * 链接内容
   */
  content?: string | WeElement
  /**
   * 链接内容，同 content
   */
  default?: string | WeElement
  /**
   * 禁用链接
   */
  disabled?: boolean
  /**
   * 链接悬浮态样式，有 文本颜色变化、添加下划线等 2 种方法
   * @default underline
   */
  hover?: 'color' | 'underline'
  /**
   * 跳转链接
   * @default ''
   */
  href?: string
  /**
   * 前置图标: TODO: need to be unified with icon
   */
  prefixIcon?: WeElement
  /**
   * 尺寸
   * @default medium
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * 后置图标
   */
  suffixIcon?: WeElement
  /**
   * 跳转方式，如：当前页面打开、新页面打开等，同 HTML 属性 target 含义相同
   * @default ''
   */
  target?: string
  /**
   * 组件风格，依次为默认色、品牌色、危险色、警告色、成功色
   * @default default
   */
  theme?: 'default' | 'primary' | 'danger' | 'warning' | 'success'
  /**
   * 普通状态是否显示链接下划线
   */
  underline?: boolean
  /**
   * 点击事件，禁用状态不会触发点击事件
   */
  onClick?: (e: MouseEvent) => void
}
