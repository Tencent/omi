import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'

interface Props {
  title?: string,
  extra?: string,
  actions: any[],
  size?: 'medium' | 'small'
}

@tag('o-card')
export default class Card extends WeElement<Props> {
  static css = css

  static defaultProps = {
    title: '',
    extra: ''
  }

  static propTypes = {
    title: String,
    extra: String,
    actions: Array,
    size: String
  }

  clickHandler = (item) => {
    this.fire('change', item)
    this.update(true)
  }

  _iconTag

  render(props) {
    return (
      <div {...extractClass(props, 'o-card', {
        ['o-card-' + props.size]: props.size
      })}>
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
              {props.actions.map((item, index) => {
                this._iconTag = 'o-icon-' + item.icon
                return <button onClick={_ => { this.clickHandler(item) }} className="item">
                  <this._iconTag class="icon" />
                </button>
              })}
          </div>
        ) : null}
      </div>
    )
  }
}
