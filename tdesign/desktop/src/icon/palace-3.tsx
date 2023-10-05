import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-palace-3')
export default class Palace3 extends WeElement<IconProps> {
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
          d="M13.0039 2.00195L13.0018 3.08326C15.8386 3.56007 18 6.02763 18 9H22V22H2V9H6C6 6.02638 8.1632 3.558 11.0018 3.08266L11.0039 1.99805L13.0039 2.00195ZM12 5C9.79086 5 8 6.79086 8 9V11H4V20H8V18.3541C8 15.9197 9.3754 13.6943 11.5528 12.6056L12 12.382L12.4472 12.6056C14.6246 13.6943 16 15.9197 16 18.3541V20H20V11H16V9C16 6.79086 14.2091 5 12 5ZM14 20V18.3541C14 16.8507 13.2384 15.463 12 14.6515C10.7616 15.463 10 16.8507 10 18.3541V20H14ZM10.998 7.99804H13.002V10.002H10.998V7.99804Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
