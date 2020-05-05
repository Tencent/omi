import { tag, WeElement, extractClass, h } from 'omi'
import * as css from './index.scss'


interface Props {
  items: any[]
  active: boolean
  value: string
  placeholder: string
}


@tag('o-select')
export default class Select extends WeElement<Props> {
  static css = css

  static defaultProps = {
    value: ''
  }

  static propTypes = {
    items: Array,
    active: Boolean,
    value: String,
    placeholder: String
  }

  installed() {
    this._fixWidth()
  }

  updated() {
    this._fixWidth()
  }

  _fixWidth() {
    const width = this.rootNode.getBoundingClientRect().width

    const dropdown = this.rootNode.querySelector('.o-select-dropdown')

    if (dropdown) {
      dropdown.style.minWidth = width + 'px'
    }
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
      <div class="o-select">
        <div {...extractClass({}, 'o-input o-input--suffix', {
          'is-focus': props.isFocus
        })} >
          <input type="text" ref={e => this._refInput = e} onClick={this.onInputClick} onBlur={this.onInputBlur} readonly="readonly" autocomplete="off" value={props.value} placeholder={props.placeholder} class="o-input__inner" />
          <span class="o-input__suffix">
            <span class="o-input__suffix-inner">
              <i class="o-select__caret o-input__icon o-icon-arrow-up is-reverse"></i>
            </span>
          </span>
        </div>

        {props.active && <o-transition>
          <div class="o-select-dropdown o-popper" style="min-width: 240px; transform-origin: center top; z-index: 2080; position: absolute; top: 35px; left: 0;" x-placement="bottom-start">
            <div class="o-scrollbar" style="">
              <div class="o-select-dropdown__wrap o-scrollbar__wrap o-scrollbar__wrap--hidden-default">
                <ul class="o-scrollbar__view o-select-dropdown__list">
                  {props.items.map((item, index) => (
                    <li {...extractClass({}, 'o-select-dropdown__item', {
                      selected: index === this.selectedIndex
                    })} onClick={_ => { this.onItemClick(item, index) }}>
                      <span>{item.label}</span>
                    </li>
                  )}
                </ul></div><div class="o-scrollbar__bar is-horizontal">
                <div class="o-scrollbar__thumb" style="transform: translateX(0%);">
                </div>
              </div><div class="o-scrollbar__bar is-vertical">
                <div class="o-scrollbar__thumb" style="transform: translateY(0%);">
                </div>
              </div>
            </div>
            <div x-arrow="" class="popper__arrow" style="left: 35px;">

            </div>
          </div>
        </o-transition>}

      </div>
    )
  }
}
