import { tag, WeElement, extractClass, h } from 'omi'
import * as css from './index.scss'
import { removeResizeListener, addResizeListener } from './resize-event.ts'

import '@omiu/popover'
//debug
//import '../../popover/src/index.tsx'

interface Props {
  items: any[]
  active: boolean
  value: string | any[]
  placeholder: string
  size: 'big' | 'medium' | 'small' | 'mini'
}

const heightMap = {
  'big': 40,
  'medium': 36,
  'small': 32,
  'mini': 28,
}

@tag('o-select')
export default class Select extends WeElement<Props> {
  static css = css.default ? css.default : css

  static defaultProps = {
    value: '',
    size: 'big'
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

  inputHeight

  resetInputHeight() {
    this.inputHeight = Math.max(heightMap[this.props.size], Number(this.tags ? (this.tags.clientHeight + (this.tags.clientHeight > heightMap[this.props.size] ? 6 : 0)) : 0))
  }

  inputWidth: number = 0

  tags

  resetInputWidth() {
    this.inputWidth = this.getBoundingClientRect().width;
  }

  installed() {
    this.handleResize()

    addResizeListener(this._refInput, this.handleResize)
  }

  handleResize = () => {
    this.resetInputWidth()
    this.resetInputHeight()
    this.update()
  }

  uninstall() {
    removeResizeListener(this._refInput, this.handleResize);
  }

  render(props) {

    return (
      <div {...extractClass({}, 'o-select', {
        ['o-select--' + props.size]: props.size
      })} >
        <o-popover position="bottom">
          <div>
            <div class="o-select__tags" ref={e => this.tags = e} style={{ width: '100%', maxWidth: (this.inputWidth - 32) + 'px' }}>
              <span>
                {/* <span class="o-tag o-tag--info o-tag--small o-tag--light">
                  <span class="o-select__tags-text">omi</span><i class="o-tag__close o-icon-close"></i>
                </span>
                <span class="o-tag o-tag--info o-tag--small o-tag--light">
                  <span class="o-select__tags-text">asfsdfdsafdsafdsfbc</span><i class="o-tag__close o-icon-close"></i>
                </span> */}

              </span>
              <input type="text" autocomplete="off" class="o-select__input" style={{ flexGrow: 1, width: '0.0961538%', maxWidth: (this.inputWidth - 32) + 'px' }} />
            </div>

            <div {...extractClass({}, 'o-input o-input--suffix', {
              ['o-input--' + props.size]: props.size,
              'is-focus': props.isFocus
            })} >
              <input style={{ height: this.inputHeight + 'px' }} type="text" ref={e => this._refInput = e} onClick={this.onInputClick} onBlur={this.onInputBlur} readonly autocomplete="off" value={props.value} placeholder={props.placeholder} class="o-input__inner" />
              <span class="o-input__suffix">
                <span class="o-input__suffix-inner">
                  <i class="o-select__caret o-input__icon o-icon-arrow-up is-reverse"></i>
                </span>
              </span>

              <svg viewBox="0 0 24 24" class="arrow" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false">
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z">
                </path>
              </svg>

            </div>
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
