import { tag, WeElement, extractClass, h } from 'omi'
import * as css from './index.scss'

import '@omiu/popover'

//debug
//import '../../popover/src/index.tsx'

interface Props {
  items: any[]
  active: boolean
  value: string
  placeholder: string
  size: 'medium' | 'small' | 'mini'
}

const topMap = {
  'medium': '31px',
  'small': '28px',
  'mini': '24px',
}

@tag('o-select')
export default class Select extends WeElement<Props> {
  static css = css.default ? css.default : css

  static defaultProps = {
    value: ''
  }

  static propTypes = {
    items: Array,
    active: Boolean,
    value: String,
    placeholder: String,
    size: String
  }




  onInputClick = () => {
    setTimeout(() => {
      this.updateProps({
        active: !this.props.active
      })
    }, 10)

  }

  onInputBlur = () => {
    setTimeout(() => {
      this.updateProps({
        active: false
      })
    }, 10)
  }

  selectedIndex: number
  onItemClick = (item, index) => {

    this._refInput.focus()

    this.fire('item-select', item)
    this.selectedIndex = index

    this.updateProps({
      active: false,
      value: item.label
    })
  }

  _refInput

  render(props) {

    return (
      <div {...extractClass({}, 'o-select', {
        ['o-select--' + props.size]: props.size
      })} >
        <o-popover position="bottom">

          <div {...extractClass({}, 'o-input o-input--suffix', {
            ['o-input--' + props.size]: props.size,
            'is-focus': props.isFocus
          })} >
            <input type="text" ref={e => this._refInput = e} onClick={this.onInputClick} onBlur={this.onInputBlur} readonly="readonly" autocomplete="off" value={props.value} placeholder={props.placeholder} class="o-input__inner" />
            <span class="o-input__suffix">
              <span class="o-input__suffix-inner">
                <i class="o-select__caret o-input__icon o-icon-arrow-up is-reverse"></i>
              </span>
            </span>

            <svg viewBox="0 0 1024 1024" class="arrow" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false">
              <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z">
              </path>
            </svg>

          </div>

          <div slot="popover" class="o-select-dropdown__wrap">
            <ul>
              {props.items.map((item, index) =>
                <li {...extractClass({}, 'o-select-dropdown__item', {
                  selected: index === this.selectedIndex
                })} onClick={_ => { this.onItemClick(item, index) }}>
                  <span>{item.label}</span>
                </li>
              )}
            </ul>
          </div>



        </o-popover>

      </div>



    )
  }
}
