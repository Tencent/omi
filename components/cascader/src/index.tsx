import { tag, h, WeElement } from 'omi'
import '../../input'
import '../../popover'
import '../../icon/esm/check'
import '../../icon/esm/keyboard-arrow-right'
import '../../icon/esm/keyboard-arrow-down'
import * as css from './index.scss'

interface CascaderOption {
  value: string
  label: string
  children?: CascaderOption[]
}

export interface CascaderProps {
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
  size?: 'medium' | 'small' | 'mini'
  /**
   * 选项被点击后的回调函数
   */
  onOptionClick?: (item: any, index: any, evt: any) => void
}

@tag('o-cascader')
export default class Cascader extends WeElement<CascaderProps> {
  static css = css.default ? css.default : css

  static defaultProps = {
    value: []
  }

  static propTypes = {
    value: Array,
    options: Array,
    size: String
  }

  installed() {
    window.addEventListener('click', (e) => {
      if (e.target.localName === 'o-cascader') return
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

  popoverRef

  render(props: CascaderProps) {
    const classes = [
      'o-cascader',
      props.size ? 'o-cascader-' + props.size : ''
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
      return (
        <li
          class={[
            'o-cascader-dropdown__item',
            props.value[index] === item.value ? 'selected' : ''
          ].join(' ')}
          onClick={(evt) => {
            const temp = props.value.slice(0, index)
            temp.push(item.value),
              this.updateProps({ value: temp }),
              props.onOptionClick && props.onOptionClick(item, index, evt)
          }}
        >
          <span>{item.label}</span>
          <span class="o-cascader-dropdown__item-suffix">
            {item.children && <o-icon-keyboard-arrow-right />}
          </span>
        </li>
      )
    }

    return (
      <div class={classes}>
        <o-popover
          ref={(e) => (this.popoverRef = e)}
          trigger="manual"
          position="bottom"
        >
          <o-input
            value={this.getLabelsByValue(props.value)}
            suffix-icon="keyboard-arrow-down"
            disabled
            onClick={(e) => {
              this.popoverRef.onEnter(e)
            }}
            style={{
              cursor: 'pointer',
              backgroundColor: 'white',
              borderColor: 'transparent',
              color: '#606266'
            }}
          ></o-input>

          <div slot="popover" class="o-cascader-dropdown__wrap">
            <ul class="o-cascader-dropdown__menu">
              {props.options.map((item) => {
                return CascaderOptionItem(item, 0)
              })}
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
