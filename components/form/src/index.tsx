import { tag, h, WeElement } from 'omi'
import '../../input'
import '../../popover'
import '../../icon/esm/check'
import '../../icon/esm/keyboard-arrow-right'
import '../../icon/esm/keyboard-arrow-down'
import * as css from './index.scss'

interface FormOption {
  value: string
  label: string
  /**
   * 是否禁用
   */
  disabled?: boolean
  children?: FormOption[]
}

export interface FormProps {
  /**
   * 当前值（从父到子应当是一个数组）
   */
  value: string[]
  /**
   * 选项列表
   */
  options: FormOption[]
  /**
   * 尺寸 Todo
   */
  size?: 'default' | 'medium' | 'small' | 'mini'
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 选项被点击后的回调函数
   */
  onOptionClick?: (item: any, index: any, evt: any) => void
}

@tag('o-form')
export default class Form extends WeElement<FormProps> {
  static css = css.default ? css.default : css

  static defaultProps = {
    disabled: false,
    value: [],
    options: [],
    size: 'default'
  }

  static propTypes = {
    disabled: Boolean,
    value: Array,
    options: Array,
    size: String
  }

  installed() {
    window.addEventListener('click', (e) => {
      // admin 系统里 e.target.localName 直接输出 my-app 了
      // if (e.target.localName === 'o-form') return
      if (this.popoverRef.isShow) {
        this.popoverRef.isShow = false
        this.popoverRef.update()
      }
    })
  }

  /**
   * 根据当前 value 获取 label 值
   * @param value
   */
  getLabelsByValue(value: string[]): string {
    let labels: string[] = []
    let curOptions = this.props.options
    value.forEach((val) => {
      if (!curOptions) return
      const curOption = curOptions.find((item) => item.value === val)
      if (curOption) {
        labels.push(curOption.label)
        curOptions = curOption.children
      }
    })

    return labels.join(' / ')
  }

  // 引用的元素
  popoverRef: HTMLElement | null = null
  inputRef: HTMLElement | null = null

  render(props: FormProps) {
    const classes = [
      'o-form',
      props.size ? 'o-form--' + props.size : '',
      props.disabled ? 'disabled' : ''
    ].join(' ')

    /**
     * 展示右侧面板
     * @param index 层级
     */
    const showRightPanel = (options: FormOption[], index: number) => {
      if (!props.value || !props.value.length) return
      const curOption = options.find(
        (item) => item.value === props.value[index]
      )
      return (
        curOption &&
        curOption.children && (
          <div class="o-form-dropdown-right__wrap">
            <ul class="o-form-dropdown__menu">
              {curOption.children.map((option) =>
                FormOptionItem(option, index + 1)
              )}
              {showRightPanel(curOption.children, index + 1)}
            </ul>
          </div>
        )
      )
    }

    const FormOptionItem = (item: FormOption, index: number) => {
      return (
        <li
          class={[
            'o-form-dropdown__item',
            props.value[index] === item.value ? 'selected' : '',
            item.disabled ? 'disabled' : ''
          ].join(' ')}
          onClick={(evt) => {
            if (item.disabled) return
            const temp = props.value.slice(0, index)
            temp.push(item.value)
            this.updateProps({ value: temp })
            props.onOptionClick && props.onOptionClick(item, index, evt)
          }}
        >
          <span>{item.label}</span>
          <span class="o-form-dropdown__item-suffix">
            {item.children && <o-icon-keyboard-arrow-right />}
          </span>
        </li>
      )
    }

    return (
      <div class={classes} onclick={(e) => e.stopPropagation()}>
        <o-popover
          ref={(e) => (this.popoverRef = e)}
          trigger="manual"
          position="bottom"
        >
          <o-input
            class="o-form-input"
            ref={(e) => (this.inputRef = e)}
            value={this.getLabelsByValue(props.value)}
            suffix-icon="keyboard-arrow-down"
            disabled
            size={props.size}
            onClick={(e) => {
              if (props.disabled) return
              this.popoverRef.onEnter(e)
            }}
            style={{
              cursor: props.disabled ? 'not-allowed' : 'pointer',
              color: props.disabled ? '' : '#606266',
              // border: 'transparent',
              backgroundColor: props.disabled ? '' : 'white',
              borderRadius: 5
            }}
          ></o-input>

          <div slot="popover" class="o-form-dropdown__wrap">
            <ul class="o-form-dropdown__menu">
              {props.options.map((item) => FormOptionItem(item, 0))}
            </ul>
            {showRightPanel(props.options, 0)}
          </div>
        </o-popover>
      </div>
    )
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'o-form': Form
  }
}
