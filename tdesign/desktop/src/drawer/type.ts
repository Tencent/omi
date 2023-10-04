import { ButtonProps } from '../button'
import { TNode, Styles, AttachNode } from '../common'

export interface TdDrawerProps {
  /**
   * 抽屉挂载的节点，默认挂在组件本身的位置。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body
   */
  attach?: AttachNode
  /**
   * 抽屉内容
   */
  body?: TNode
  /**
   * 取消按钮，可自定义。值为 null 则不显示取消按钮。值类型为字符串，则表示自定义按钮文本，值类型为 Object 则表示透传 Button 组件属性。使用 TNode 自定义按钮时，需自行控制取消事件
   */
  cancelBtn?: FooterButton
  /**
   * 抽屉内容，同 body
   */
  children?: TNode
  /**
   * 关闭按钮，可以自定义。值为 true 显示默认关闭按钮，值为 false 不显示关闭按钮。值类型为 string 则直接显示值，如：“关闭”。值类型为 TNode，则表示呈现自定义按钮示例
   */
  closeBtn?: TNode | boolean
  /**
   * 按下 ESC 时是否触发抽屉关闭事件
   */
  closeOnEscKeydown?: boolean
  /**
   * 点击蒙层时是否触发抽屉关闭事件
   */
  closeOnOverlayClick?: boolean
  /**
   * 确认按钮。值类型为字符串，则表示自定义按钮文本，值类型为 Object 则表示透传 Button 组件属性。使用 TNode 自定义按钮时，需自行控制确认事件
   */
  confirmBtn?: FooterButton
  /**
   * 抽屉关闭时是否销毁节点
   * @default false
   */
  destroyOnClose?: boolean
  /**
   * 底部操作栏，默认会有“确认”和“取消”两个按钮。值为 true 显示默认操作按钮，值为 false 或 null 不显示任何内容，值类型为 TNode 表示自定义底部内容
   * @default true
   */
  footer?: TNode | boolean
  /**
   * 头部内容。值为 true 显示空白头部，值为 false 不显示头部，值类型为 string 则直接显示值，值类型为 TNode 表示自定义头部内容
   * @default true
   */
  header?: TNode
  /**
   * 展开方式，有两种：直接展示在内容上方 和 推开内容区域
   * @default overlay
   */
  mode?: 'overlay' | 'push'
  /**
   * 抽屉方向
   * @default right
   */
  placement?: 'left' | 'right' | 'top' | 'bottom'
  /**
   * 防止滚动穿透
   * @default true
   */
  preventScrollThrough?: boolean
  /**
   * 仅在挂载元素中显示抽屉，默认在浏览器可视区域显示。父元素需要有定位属性，如：position: relative
   * @default false
   */
  showInAttachedElement?: boolean
  /**
   * 是否显示遮罩层
   * @default true
   */
  showOverlay?: boolean
  /**
   * 尺寸，支持 'small', 'medium', 'large'，'35px', '30%',  '3em' 等。纵向抽屉调整的是抽屉宽度，横向抽屉调整的是抽屉高度
   */
  size?: string
  /**
   * 抽屉大小可拖拽调整，横向抽屉调整宽度，纵向抽屉调整高度
   * @default false
   */
  sizeDraggable?: boolean
  /**
   * 组件是否可见
   * @default false
   */
  visible?: boolean
  /**
   * 抽屉层级，样式默认为 1500
   */
  zIndex?: number
  /**
   * 如果“取消”按钮存在，点击“取消”按钮时触发，同时触发关闭事件
   */
  onCancel?: (context: { e: MouseEvent }) => void
  /**
   * 关闭事件，取消按钮点击时、关闭按钮点击时、ESC 按下时、点击蒙层时均会触发
   */
  onClose?: (context: DrawerCloseContext) => void
  /**
   * 如果关闭按钮存在，点击关闭按钮时触发该事件，同时触发关闭事件
   */
  onCloseBtnClick?: (context: { e: MouseEvent }) => void
  /**
   * 如果“确认”按钮存在，则点击“确认”按钮时触发
   */
  onConfirm?: (context: { e: MouseEvent }) => void
  /**
   * 按下 ESC 键时触发
   */
  onEscKeydown?: (context: { e: KeyboardEvent }) => void
  /**
   * 如果蒙层存在，点击蒙层时触发
   */
  onOverlayClick?: (context: { e: MouseEvent }) => void
}

export interface DrawerOptions extends Omit<TdDrawerProps, 'attach'> {
  /**
   * 抽屉挂载的节点。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body
   * @default 'body'
   */
  attach?: AttachNode
  /**
   * 抽屉类名，示例：'t-class-drawer-first t-class-drawer-second'
   * @default ''
   */
  className?: string
  /**
   * 弹框 style 属性，输入 [CSSStyleDeclaration.cssText](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/cssText)
   */
  style?: Styles
}

export interface DrawerInstance {
  /**
   * 销毁抽屉
   */
  destroy?: () => void
  /**
   * 隐藏抽屉
   */
  hide?: () => void
  /**
   * 显示抽屉
   */
  show?: () => void
  /**
   * 更新抽屉内容
   */
  update?: (props: DrawerOptions) => void
}

export type FooterButton = string | ButtonProps | TNode

export type DrawerEventSource = 'esc' | 'close-btn' | 'cancel' | 'overlay'

export interface DrawerCloseContext {
  trigger: DrawerEventSource
  e: MouseEvent | KeyboardEvent
}

export type DrawerMethod = (options?: DrawerOptions) => void
