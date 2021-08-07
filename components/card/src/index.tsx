import { tag, h, WeElement, OverwriteProps, extractClass } from 'omi'

import * as css from './index.scss'

export type Attrs = {
  title?: string,
  hoverable?: 'always' | 'true' | 'false',
  extra?: string,
  actions?: any[],
  size?: 'large' | 'medium' | 'small',
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
  extra?: string,
  actions?: any[],
  size?: 'large' | 'medium' | 'small', }>

@tag(tagName)
export default class Card extends WeElement<Props> {

  css = css.default ? css.default : css

  static defaultProps = {
    title: '',
    hoverable: '',
    extra: ''
  }

  static propTypes = {
    title: String,
    hoverable: String,
    extra: String,
    actions: Array,
    size: String
  }

  clickHandler = (item: any) => {
    this.fire('EvtChange', item)
    this.update(true)
  }

  handleMousemove = (item: string) => {
    if (item==="always") {
      (this.css = this.css + `.o-card {
        display: flex;
        flex-direction: column;
        box-shadow: 0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017;
        transition: all .3s;
        z-index: 1;
      }`)
      return;
    }
    const hovercss = () => {
      switch(this.props.size){
        case 'large':
          (this.css = this.css + `.o-card:hover {
            display: flex;
            flex-direction: column;
            box-shadow: 0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017;
            transition: all .3s;
            z-index: 1;
          }`)
          break;
        case 'medium':
          (this.css = this.css + `.o-card-medium:hover {
            display: flex;
            flex-direction: column;
            box-shadow: 0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017;
            transition: all .3s;
            z-index: 1;
          }`)
          break;
        case 'small':
          (this.css = this.css + `.o-card-small:hover {
            display: flex;
            flex-direction: column;
            box-shadow: 0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017;
            transition: all .3s;
            z-index: 1;
          }`)
          break;
        default:
          (this.css = this.css + `.o-card:hover {
            display: flex;
            flex-direction: column;
            box-shadow: 0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017;
            transition: all .3s;
            z-index: 1;
          }`)
      }
    } 
    item && hovercss()
  }

  _iconTag: any

  render(props: Props) {
    return (
      <h.f>
        <div {...extractClass(props, 'o-card', {
          ['o-card-' + props.size]: props.size
        })} onMousemove={this.handleMousemove(props.hoverable)}>
          <slot name="cover">
            <div {...extractClass(props, 'o-card-header', {
              ['o-card-header-' + props.size]: props.size
            })}>
              <div {...extractClass(props, 'o-card-title', {
                ['o-card-title-' + props.size]: props.size
              })}>{props.title}</div>
                <div {...extractClass(props, 'o-card-extra', {
                  ['o-card-extra-' + props.size]: props.size
                })}>
                  <slot name="extra"></slot>
                </div>
            </div>
          </slot>
          
          <div {...extractClass(props, 'o-card-body', {
            ['o-card-body-' + props.size]: props.size
          })}>
            <slot></slot>
          </div>
          
          {props.actions ? (
            <div class="o-card-footer">
                {props.actions.map((item) => {
                  this._iconTag = 'o-icon-' + item.icon
                  return <button onClick={_ => { this.clickHandler(item) }} className="item">
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

