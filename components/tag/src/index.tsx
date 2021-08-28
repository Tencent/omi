import { tag, h, WeElement, extractClass } from 'omi'
import * as css from './index.scss'
import '../../icon/esm/close'

export interface TagProps {
  /**
   * 类型
   */
  type?: 'success' | 'info' | 'warning' | 'danger'
  /**
   * 是否可关闭
   */
  closable?: boolean
  /**
   * 背景色
   */
  color?: string
  /**
   * 尺寸
   */
  size?: 'default' | 'medium' | 'small' | 'mini'
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 点击 Tag 时触发的事件
   */
  onClick?: (e: MouseEvent) => void
  /**
   * 关闭 Tag 时触发的事件
   */
  onClose?: (e: MouseEvent) => void
}

@tag('o-tag')
export default class Tag extends WeElement<TagProps> {
  static css = css.default ? css.default : css

  static defaultProps: TagProps = {
    disabled: false,
    size: 'default',
    closable: false
  }

  static propTypes = {
    disabled: Boolean,
    size: String,
    color: String,
    type: String,
    closable: Boolean
  }

  /**
   * 是否已被关闭
   */
  closed = false

  render(props: TagProps) {
    const extractedClass = extractClass(props, 'o-tag', {
      ['o-tag--' + props.size]: props.size,
      ['o-tag--' + props.type]: props.type,
      'is-disabled': props.disabled,
      'is-closed': this.closed
    })

    return (
      <div
        {...extractedClass}
        onClick={(e) => props.onClick && props.onClick(e)}
      >
        <slot></slot>
        {props.closable && (
          <span
            class="o-tag--suffix"
            onClick={(e) => {
              this.closed = true
              this.update()
              props.onClose && props.onClose(e)
            }}
          >
            <o-icon-close />
          </span>
        )}
      </div>
    )
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'o-tag': Tag
  }
}
