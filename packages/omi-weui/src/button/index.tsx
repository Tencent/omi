import { Component, classNames } from 'omi'
import { weui } from '../weui/index'

export interface Props {

  /**
   * 按钮的尺寸
   * 
   * @default null
   */
  size?:  'medium' | 'mini'

  /**
   * 按钮的类型
   * 
   * @default primary
   */
  type?: 'primary' | 'default' | 'warn'

  /**
   * 是否禁用
   * 
   * @default false
   */
  disabled?: boolean

  /**
   * 是否显示为加载中状态
   * 
   * @default false
   */
  loading?: boolean

  /**
   * 是否镂空，背景色透明
   * 
   * @default false
   */
  plain?: boolean

  /**
   * 是否镂空，背景色透明
   * 
   * @default false
   */
  overlay?: boolean
}

export class WeButton extends Component<Props> {
  static css = [weui, `
  :host { display: block; }
  
  :host([size="mini"]) {
    display: inline-block;
  }
`]

  static defaultProps = {
    type: 'primary', // primary, default, warn
    loading: false,
    disabled: false,
    size: null, // medium , mini
    overlay: false,
  }

  static propTypes = {
    type: String,
    loading: Boolean,
    disabled: Boolean,
    size: String,
    overlay: Boolean,
  }

  render(props: Props) {
    return (
      <a href="javascript:" role="button" class={
        classNames({
          [`weui-btn weui-btn_${props.type}`]: true,
          'weui-btn_loading': props.loading,
          'weui-btn_disabled': props.disabled,
          'weui-btn_medium': props.size === 'medium',
          'weui-btn_mini': props.size === 'mini',
          'weui-btn_overlay': props.overlay
        })
      }>
        {
          props.loading && <i class="weui-loading"></i>
        }
        <slot></slot>
      </a>
    )
  }
}
