import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-textformat-bold')
export default class TextformatBold extends WeElement<IconProps> {
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
          d="M6 3H5V4V11V12V13V20V21H6H14C16.7614 21 19 18.7614 19 16C19 14.123 17.9657 12.4875 16.4359 11.6325C17.3991 10.7211 18 9.43071 18 8C18 5.23858 15.7614 3 13 3H6ZM13 11H7V5H13C14.6569 5 16 6.34315 16 8C16 9.65685 14.6569 11 13 11ZM7 13H13H14C15.6569 13 17 14.3431 17 16C17 17.6569 15.6569 19 14 19H7V13Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
