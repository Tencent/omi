import { SizeEnum, TElement, TNode } from '../common'

export interface TdButtonProps {
  /**
   * 是否为块级元素
   * @default false
   */
  block?: boolean
  /**
   * 按钮内容，同 content
   */
  children?: TNode
  /**
   * 按钮内容
   */
  content?: TNode
  /**
   * 禁用状态
   * @default false
   */
  disabled?: boolean
  /**
   * 是否为幽灵按钮（镂空按钮）
   * @default false
   */
  ghost?: boolean
  /**
   * 跳转地址。href 存在时，按钮标签默认使用 `<a>` 渲染；如果指定了 `tag` 则使用指定的标签渲染
   * @default ''
   */
  href?: string
  /**
   * 按钮内部图标，可完全自定义
   */
  icon?: TElement
  /**
   * 是否显示为加载状态
   * @default false
   */
  loading?: boolean
  /**
   * 按钮形状，有 4 种：长方形、正方形、圆角长方形、圆形
   * @default rectangle
   */
  shape?: 'rectangle' | 'square' | 'round' | 'circle'
  /**
   * 组件尺寸
   * @default medium
   */
  size?: SizeEnum
  /**
   * 右侧内容，可用于定义右侧图标
   */
  suffix?: TElement
  /**
   * 渲染按钮的 HTML 标签，默认使用标签 `<button>` 渲染，可以自定义为 `<a>` `<div>` 等。透传全部 HTML 属性，如：`href/target/data-*` 等。⚠️ 禁用按钮 `<button disabled>`无法显示 Popup 浮层信息，可通过修改 `tag=div` 解决这个问题
   */
  tag?: 'button' | 'a' | 'div'
  /**
   * 组件风格，依次为默认色、品牌色、危险色、警告色、成功色
   */
  theme?: 'default' | 'primary' | 'danger' | 'warning' | 'success'
  /**
   * 按钮类型
   * @default button
   */
  type?: 'submit' | 'reset' | 'button'
  /**
   * 按钮形式，基础、线框、虚线、文字
   * @default base
   */
  variant?: 'base' | 'outline' | 'dashed' | 'text'
  /**
   * 点击时触发
   */
  onClick?: (e: MouseEvent) => void
}
