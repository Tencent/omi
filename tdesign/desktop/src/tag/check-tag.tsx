import { OmiProps, WeElement, h, tag, classNames, createRef } from 'omi'
import style from './style'
import { CheckTagProps } from './type'
import { TdClassNamePrefix, noop } from '../utils'
import '../icon/close'

const TagClassNamePrefix = (className: string) => TdClassNamePrefix('tag') + className

@tag('t-check-tag')
export default class CheckTag extends WeElement<CheckTagProps> {
  static css = style

  iconStyle = `
  .t-icon{
    margin-right: var(--td-comp-margin-xs);
    width: calc(var(--td-font-size-body-medium) + 2px);
    height: calc(var(--td-font-size-body-medium) + 2px);
    -ms-flex-negative: 0;
    flex-shrink: 0;
  }
  `
  static defaultProps = {
    disabled: false,
    size: 'medium',
  }

  static propTypes = {
    checked: Boolean,
    defaultChecked: Boolean,
    disabled: Boolean,

    children: String,
    content: String,
    size: String,

    onClick: Function,
    onChange: Function,
  }

  span = createRef()
  checked
  defaultChecked
  install() {
    this.checked = this.props.checked
    this.defaultChecked = this.props.defaultChecked
  }

  cls() {
    return classNames(
      TdClassNamePrefix('tag'),
      TagClassNamePrefix(`--default`),
      TagClassNamePrefix(`--check`),
      TagClassNamePrefix(`--${this.props.size}`),
      {
        [TagClassNamePrefix(`--checked`)]: this.defaultChecked || this.checked,
        [TagClassNamePrefix(`--disabled`)]: this.props.disabled,
        [TdClassNamePrefix(`size-s`)]: this.props.size == 'small',
        [TdClassNamePrefix(`size-l`)]: this.props.size == 'large',
      },
    )
  }

  render(props: OmiProps<CheckTagProps, any>, store: any) {
    const { content, onClick = noop, disabled, children, size, onChange, ...tagOtherProps } = props
    let that = this
    this.checked = this.defaultChecked ? this.defaultChecked : this.checked

    function onValueChange(value) {
      console.log(typeof that.defaultChecked)
      that.checked = !value
      if (typeof that.defaultChecked != 'undefined') {
        that.defaultChecked = false
        that.update()
      } else {
        onChange?.(!value)
      }
    }

    return (
      <span
        ref={this.span}
        class={this.cls()}
        {...tagOtherProps}
        onClick={(e) => {
          if (disabled) {
            return
          }
          onValueChange(this.checked)
          onClick({ e })
        }}
      >
        {children || content}
      </span>
    )
  }
}
