import { tag, h, WeElement, OverwriteProps } from 'omi'

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

  css = css.default ? css.default : css

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

  onIconClick = (evt, index) => {
    this.fire('change', {
      action: this.props.actions[index],
      index: index,
      evt: evt.currentTarget
    })
  }

  beforeRender() {
    this.handleBorder()
    this.handleMousemove()
  }

  handleBorder = () => {
    if (this.props.bordered) {
      this.css = this.css + `.o-card {
        display: flex;
        flex-direction: column;
        background: #FFF;
        border: 1px solid #EFEFEF;
      }`
    }
  }

  handleMousemove = () => {
    const hover = this.props.hoverable
    if (!hover) return
    if (hover==="always") {
      (this.css = this.css + `.o-card {
        display: flex;
        flex-direction: column;
        box-shadow: 0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017;
        transition: all .3s;
        background: #FFF;
      }`)
    } else if (hover==="true") {
      (this.css = this.css + `.o-card:hover {
        display: flex;
        flex-direction: column;
        box-shadow: 0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017;
        transition: all .3s;
        background: #FFF;
      }`)
    }
  }

  _iconTag: any

  render(props: Props) {
    return (
      <h.f>
        <div class="o-card" onMousemove={this.handleMousemove}>
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
                  return <button onClick={evt => { this.onIconClick(evt, index) }} class="o-card-btn">
                    <this._iconTag class="icon" />
                  </button>
                })}
            </div>
          ) : null}
        </div>
      </h.f>
    )
  }
}

