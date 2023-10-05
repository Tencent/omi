import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-table-split')
export default class TableSplit extends WeElement<IconProps> {
  static css = css as string

  static defaultProps = {
    size: '1em',
    style: { fill: '#000' },
  }

  static propTypes = {
    size: [String, Number],
    onClick: Function,
    style: Object,
    class: String,
  }

  render(props: OmiProps<IconProps>) {
    const classPrefix = 't'
    const iconClassName = classNames(TdClassNamePrefix('icon'), props.class, {
      [`${TdClassNamePrefix('size-s')}`]: props.size === 'small',
      [`${TdClassNamePrefix('size-m')}`]: props.size === 'medium',
      [`${TdClassNamePrefix('size-l')}`]: props.size === 'large',
    })
    const flag = props.size === 'small' || props.size === 'medium' || props.size === 'large'
    const iconStyle = {
      ...props.style,
      fontSize: props.size,
    }
    return (
      <svg
        class={iconClassName}
        width={flag ? '24' : props.size}
        height={flag ? '24' : props.size}
        style={iconStyle}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 2H22V22H2V2ZM4 4V6H11V4H4ZM13 4V6H20V4H13ZM20 8H4V20H20V8ZM10.998 9.99805H13.002V12.002H10.998V9.99805ZM4.99805 12.998H7.00195V15.002H4.99805V12.998ZM7.99805 12.998H10.002V15.002H7.99805V12.998ZM10.998 12.998H13.002V15.002H10.998V12.998ZM13.998 12.998H16.002V15.002H13.998V12.998ZM16.998 12.998H19.002V15.002H16.998V12.998ZM10.998 15.998H13.002V18.002H10.998V15.998Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
