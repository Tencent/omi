import { tag, h, WeElement } from 'omi'
import '@omiu/input'
import '@omiu/popover'
import '../../icon/esm/check'
import '../../icon/esm/keyboard-arrow-right'
import '../../icon/esm/keyboard-arrow-down'
// @ts-ignore
import * as css from './index.scss'

interface CascaderOption {
  value: string
  label: string
  /**
   * 是否禁用
   */
  disabled?: boolean
  children?: CascaderOption[]
}

export interface CascaderProps {
  /**
   * 展开触发方式
   */
  expandTrigger: 'click' | 'hover'
  /**
   * 当前值（从父到子应当是一个数组）
   */
  value: string[]
  /**
   * 选项列表
   */
  options: CascaderOption[]
  /**
   * 尺寸 Todo
   */
  size?: 'default' | 'medium' | 'small' | 'mini'
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 选中选项发生改变回调函数
   */
  onChange?: (evt: CustomEvent) => void
}

@tag('o-cascader')
export default class Cascader extends WeElement<CascaderProps> {
  static css = css

  static defaultProps = {
    expandTrigger: 'click',
    disabled: false,
    value: [],
    options: [],
    size: 'default'
  }

  static propTypes = {
    expandTrigger: String,
    disabled: Boolean,
    value: Array,
    options: Array,
    size: String
  }

  installed() {
    window.addEventListener('click', (e) => {
      // admin 系统里 e.target.localName 直接输出 my-app 了
      // if (e.target.localName === 'o-cascader') return
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

  render(props: CascaderProps) {
    const classes = [
      'o-cascader',
      props.size ? 'o-cascader--' + props.size : '',
      props.disabled ? 'disabled' : ''
    ].join(' ')

    /**
     * 展示右侧面板
     * @param index 层级
     */
    const showRightPanel = (options: CascaderOption[], index: number) => {
      if (!props.value || !props.value.length) return
      const curOption = options.find(
        (item) => item.value === props.value[index]
      )
      return (
        curOption &&
        curOption.children && (
          <div class="o-cascader-dropdown-right__wrap">
            <ul class="o-cascader-dropdown__menu">
              {curOption.children.map((option) =>
                CascaderOptionItem(option, index + 1)
              )}
              {showRightPanel(curOption.children, index + 1)}
            </ul>
          </div>
        )
      )
    }

    const CascaderOptionItem = (item: CascaderOption, index: number) => {
      const eventMap = {
        [(props.expandTrigger === 'click' || !item.children) ? 'onClick' : 'onMouseEnter']: (evt) => {
          if (item.disabled) return
          const temp = props.value.slice(0, index)
          temp.push(item.value)
          if (!item.children) {
            this.popoverRef.isShow = false
          }
          this.updateProps({ value: temp })
          if ((!item.children) && this.prevItem !== item) {
            this.fire('change', {
              value: item.value,
              option: item,
              index,
              nativeEvent: evt
            })
            this.prevItem = item
          }
        }
      }

      return (
        <li
          class={[
            'o-cascader-dropdown__item',
            props.value[index] === item.value ? 'selected' : '',
            item.disabled ? 'disabled' : ''
          ].join(' ')}
          {...eventMap}
        >
          <span>{item.label}</span>
          <span class="o-cascader-dropdown__item-suffix">
            {item.children && <o-icon-keyboard-arrow-right />}
          </span>
        </li>
      )
    }

    return (
      <div class={classes} onclick={(e: Event) => e.stopPropagation()}>
        <o-popover
          ref={(e: WeElement) => (this.popoverRef = e)}
          trigger="manual"
          position="bottom"
        >
          <o-input
            class={"o-cascader-input "+props.disabled ? 'o-cascader-input-disabled-style' : 'o-cascader-input-style'}
            ref={(e: HTMLElement) => (this.inputRef = e)}
            value={this.getLabelsByValue(props.value)}
            suffix-icon="keyboard-arrow-down"
            disabled={props.disabled}
            readonly
            size={props.size}
            onClick={(e: Event) => {
              if (props.disabled) return
              this.popoverRef.onEnter(e)
            }}
            style={{
              cursor: props.disabled ? 'not-allowed' : 'pointer',
              // border: 'transparent',
              borderRadius: 5
            }}
          ></o-input>

          <div slot="popover" class="o-cascader-dropdown__wrap">
            <ul class="o-cascader-dropdown__menu">
              {props.options.map((item) => CascaderOptionItem(item, 0))}
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
    'o-cascader': Cascader
  }
}
