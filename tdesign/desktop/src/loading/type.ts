import { TNode, AttachNode } from '../common'

export interface TdLoadingProps {
  /**
   * 挂载元素，默认挂载到组件本身所在的位置。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body
   * @default ''
   */
  attach?: AttachNode
  /**
   * 子元素，同 content
   */
  children?: TNode
  /**
   * 子元素
   */
  content?: TNode
  /**
   * 延迟显示加载效果的时间，用于防止请求速度过快引起的加载闪烁，单位：毫秒
   * @default 0
   */
  delay?: number
  /**
   * 是否显示为全屏加载
   * @default false
   */
  fullscreen?: boolean
  /**
   * 加载指示符，值为 true 显示默认指示符，值为 false 则不显示，也可以自定义指示符
   * @default true
   */
  indicator?: TNode
  /**
   * 是否继承父元素颜色
   * @default false
   */
  inheritColor?: boolean
  /**
   * 是否处于加载状态
   * @default true
   */
  loading?: boolean
  /**
   * 防止滚动穿透，全屏加载模式有效
   * @default true
   */
  preventScrollThrough?: boolean
  /**
   * 是否需要遮罩层，遮罩层对包裹元素才有效
   * @default true
   */
  showOverlay?: boolean
  /**
   * 尺寸，示例：small/medium/large/12px/56px/0.3em
   * @default medium
   */
  size?: string
  /**
   * 加载提示文案
   */
  text?: TNode
  /**
   * 消息通知层级，样式默认为 3500
   */
  zIndex?: number
}

export interface LoadingInstance {
  hide: () => void
}

export type LoadingMethod = (options: boolean | TdLoadingProps) => LoadingInstance
