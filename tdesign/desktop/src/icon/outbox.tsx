import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-outbox')
export default class Outbox extends WeElement<IconProps> {
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
          d="M22 2L2 2L2 22H22V2ZM20 16.5V20H4L4 16.5L7.66918 16.5C8.53303 17.9934 10.148 19 12 19C13.852 19 15.467 17.9934 16.3308 16.5H20ZM4 14.5L4 4L20 4V14.5H15.0352L14.7823 15.1248C14.3365 16.2261 13.2574 17 12 17C10.7426 17 9.66348 16.2261 9.2177 15.1248L8.96479 14.5L4 14.5ZM12 5.08579L7.58579 9.5L9 10.9142L11 8.91421V14H13V8.91421L15 10.9142L16.4142 9.5L12 5.08579Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
