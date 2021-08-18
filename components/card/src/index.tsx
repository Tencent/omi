import { tag, h, WeElement, OverwriteProps, extractClass } from 'omi'

import * as css from './index.scss'

export type Attrs = {
  /**
   * 标题内容
   */
  title?: string,
  /**
   * 是否有边框
   */
  bordered?: boolean,
  /**
   * 当前浮动状态
   */
  hoverable?: 'always' | 'true' | 'false',
  /**
   * 选项列表
   */
  actions?: any[],
  /**
   * 选项被点击后的回调函数
   */
   onChange?: (evt: any, index: any) => void
}

const tagName = 'o-card'
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: Omi.Props & Attrs
    }
  }
}

export type Props = OverwriteProps<Attrs, { title?: string,
  hoverable?: 'always' | 'true' | 'false',
  bordered?: boolean,
  actions?: any[],
  onChange?: (evt: any, index: any) => void }>

@tag(tagName)
export default class Card extends WeElement<Props> {

  static css = css.default ? css.default : css

  static defaultProps = {
    title: '',
    hoverable: 'true',
    bordered: true
  }

  static propTypes = {
    title: String,
    hoverable: String,
    actions: Array,
    bordered: Boolean
  }

  onIconClick = (evt, index, isOn) => {
    this.fire('change', {
      action: isOn,
      index: index,
      evt: evt.currentTarget
    })
  }

  _iconTag: any

  render(props: Props) {
    return (
        <div {...extractClass(props, 'o-card', {
          ['is-shadow-' + props.hoverable]: props.hoverable,
          'is-border': props.bordered
        })}>
          <slot name="cover">
            <div class="o-card-header">
              <div class="o-card-title">{props.title}</div>
              <div class="o-card-extra">
                <slot name="extra"></slot>
              </div>
            </div>
          </slot>
          
          <div class="o-card-body">
            <slot></slot>
          </div>
          
          {props.actions ? (
            <div class="o-card-footer">
                {props.actions.map((item, index) => {
                  this._iconTag = 'o-icon-' + item.icon
                  return <button onClick={evt => { this.onIconClick(evt, index, props.actions[index]) }} class="o-card-btn">
                    <this._iconTag class="icon" />
                  </button>
                })}
            </div>
          ) : null}
        </div>
    )
  }
}

