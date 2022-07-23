import { tag, WeElement, extractClass, h } from 'omi'
import * as css from './index.scss'
import { removeResizeListener, addResizeListener } from './resize-event'

import '@omiu/popover'
// debug
// import '../../popover/src/index.tsx'

interface Props {
  options: any[]
  active: boolean
  value: string | number | any[]
  placeholder: string
  size: 'big' | 'medium' | 'small' | 'mini'
  multiple: boolean
  block: boolean
}

const heightMap = {
  big: 40,
  medium: 36,
  small: 32,
  mini: 28
}

@tag('o-select')
export default class Select extends WeElement<Props> {
  static css = css

  static defaultProps = {
    value: '',
    size: 'big',
    multiple: false,
    block: false
  }

  static propTypes = {
    options: Array,
    active: Boolean,
    value: String,
    placeholder: String,
    size: String,
    multiple: Boolean,
    block: Boolean
  }

  onInputClick = () => {
    setTimeout(() => {
      this.updateProps({
        active: !this.props.active
      })
    }, 10)
  }

  onInputInput(e) {
    e.target.value = ''
    e.preventDefault()
  }

  onInputBlur = () => {
    setTimeout(() => {
      this.updateProps({
        active: false
      })
    }, 10)
  }

  selectedIndex: number = -1

  selectedIndexMap = {}

  selectedOptions = []

  onOptionClick = (option, index, evt) => {
    if (this.props.multiple) {
      //不自动关闭
      evt.stopPropagation()
      if (this.selectedIndexMap.hasOwnProperty(index)) {
        delete this.selectedIndexMap[index]
        this.selectedOptions.splice(this.selectedOptions.indexOf(option), 1)
      } else {
        this.selectedIndexMap[index] = true
        this.selectedOptions.push(option)
      }

      this.fire('option-select', this.selectedOptions)

      this.update()

      this.resetSize()

      this.popover.updatePosition()
    } else {
      this._refInput.focus()

      this.fire('option-select', option)

      this.selectedIndex = index
      this.label = option.label
      this.updateProps({
        active: false,
        value: option.value
      })
    }
  }

  _refInput

  inputHeight

  resetInputHeight() {
    this.inputHeight = Math.max(
      heightMap[this.props.size],
      Number(
        this.tags
          ? this.tags.clientHeight +
          (this.tags.clientHeight > heightMap[this.props.size] ? 6 : 0)
          : 0
      )
    )
  }

  inputWidth: number = 0

  tags

  resetInputWidth() {
    this.inputWidth = this.getBoundingClientRect().width
  }

  installed() {
    this.resetSize()

    addResizeListener(this._refInput, this.resetSize)
  }

  resetSize = () => {
    this.resetInputWidth()
    this.resetInputHeight()
    //不更新子组件，不然导致 popper 执行多次导致闪现下拉的问题
    this.updateSelf()
  }

  label: string

  beforeRender() {
    if (this.props.multiple) {
      for (let i = 0, len = this.props.options.length; i < len; i++) {
        if (this.props.value.indexOf(this.props.options[i].value) !== -1) {
          this.selectedIndexMap[i] = 1
        }
      }
    } else {
      if (this.props.value) {
        for (let i = 0, len = this.props.options.length; i < len; i++) {
          if (this.props.value + '' === this.props.options[i].value + '') {
            this.selectedIndex = i
            this.label = this.props.options[i].label
          }
        }
      }
    }
  }

  uninstall() {
    removeResizeListener(this._refInput, this.resetSize)
  }

  render(props) {
    return (
      <div
        {...extractClass({}, 'o-select', {
          ['o-select--' + props.size]: props.size,
          block: props.block
        })}
      >
        <o-popover
          block={props.block}
          ref={(e) => (this.popover = e)}
          position="bottom"
        >
          <div>
            {props.multiple && <div
              class="o-select__tags"
              ref={(e) => (this.tags = e)}
              style={{ width: '100%', maxWidth: this.inputWidth - 32 + 'px' }}
            >
              <span>
                {/* <span class="o-tag o-tag--info o-tag--small o-tag--light">
                  <span class="o-select__tags-text">omi</span><i class="o-tag__close o-icon-close"></i>
                </span>
                <span class="o-tag o-tag--info o-tag--small o-tag--light">
                  <span class="o-select__tags-text">asfsdfdsafdsafdsfbc</span><i class="o-tag__close o-icon-close"></i>
                </span> */}

                {this.selectedOptions.map((option) => {
                  return (
                    <span class="o-tag o-tag--info o-tag--small o-tag--light">
                      <span class="o-select__tags-text">{option.label}</span>
                      <i class="o-tag__close o-icon-close"></i>
                    </span>
                  )
                })}
              </span>
              <input
                onInput={this.onInputInput}
                type="text"
                autocomplete="off"
                class="o-select__input"
                style={{
                  flexGrow: 1,
                  width: '0.0961538%',
                  maxWidth: this.inputWidth - 32 + 'px'
                }}
              />
            </div>}

            <div
              {...extractClass({}, 'o-input o-input--suffix', {
                ['o-input--' + props.size]: props.size,
                'is-focus': props.isFocus
              })}
            >
              <input
                style={{ height: this.inputHeight + 'px' }}
                type="text"
                ref={(e) => (this._refInput = e)}
                onClick={this.onInputClick}
                onBlur={this.onInputBlur}
                readonly
                autocomplete="off"
                value={props.multiple ? '' : this.label}
                placeholder={
                  Object.keys(this.selectedIndexMap).length > 0
                    ? ''
                    : props.placeholder
                }
                class="o-input__inner"
              />
              <span class="o-input__suffix">
                <span class="o-input__suffix-inner">
                  <i class="o-select__caret o-input__icon o-icon-arrow-up is-reverse"></i>
                </span>
              </span>

              <svg
                viewBox="0 0 24 24"
                class="arrow"
                data-icon="caret-down"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
              </svg>
            </div>
          </div>

          <div slot="popover" class="o-select-dropdown__wrap">
            <ul>
              {props.options.map((option, index) => {
                const selected = props.multiple
                  ? this.selectedIndexMap[index]
                  : index === this.selectedIndex
                return (
                  <li
                    {...extractClass({}, 'o-select-dropdown__option', {
                      selected
                    })}
                    onClick={(evt) => {
                      this.onOptionClick(option, index, evt)
                    }}
                  >
                    <span>{option.label}</span>
                    {selected && (
                      <svg
                        class="a3 a2"
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        tabindex="-1"
                        title="Check"
                        curr
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                      </svg>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        </o-popover>
      </div>
    )
  }
}
