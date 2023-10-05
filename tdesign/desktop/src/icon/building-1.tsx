import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-building-1')
export default class Building1 extends WeElement<IconProps> {
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
          d="M7.49991 1.5V3.1251C7.89592 3.23082 8.25209 3.4023 8.56502 3.63475C9.11352 4.04221 9.46155 4.58642 9.67842 5.12862C9.92465 5.74422 10.0222 6.40645 10.0422 7H11.5V9H9.99991V10H21.9999V22H2.99991V9H1.5V7H2.95763C2.9776 6.40645 3.07516 5.74422 3.32139 5.12862C3.53826 4.58642 3.88629 4.04221 4.4348 3.63475C4.74772 3.4023 5.10389 3.23082 5.49991 3.1251V1.5H7.49991ZM4.95922 7H8.04059C8.02222 6.61113 7.9573 6.21099 7.82146 5.87138C7.70501 5.58025 7.55304 5.37446 7.37238 5.24025C7.20071 5.11273 6.93715 5 6.49991 5C6.06267 5 5.7991 5.11273 5.62744 5.24025C5.44677 5.37446 5.2948 5.58025 5.17835 5.87138C5.04251 6.21099 4.97759 6.61113 4.95922 7ZM7.99991 9H4.99991V20H7.99991V9ZM9.99991 20H11.9999V15H17.9999V20H19.9999V12H9.99991V20ZM15.9999 20V17H13.9999V20H15.9999Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
