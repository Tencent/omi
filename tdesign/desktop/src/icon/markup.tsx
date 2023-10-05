import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-markup')
export default class Markup extends WeElement<IconProps> {
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
          d="M12 3C7.02944 3 3 7.02944 3 12C3 14.8483 4.32247 17.3881 6.39034 19.0384L8.22752 12H10V8.58579L12 6.58579L14 8.58579V12H15.7725L17.6097 19.0384C19.6775 17.3881 21 14.8483 21 12C21 7.02944 16.9706 3 12 3ZM15.8318 20.1462L14.2275 14H9.77248L8.1682 20.1462C9.32997 20.6937 10.6282 21 12 21C13.3718 21 14.67 20.6937 15.8318 20.1462ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 15.8574 21.0137 19.2504 18.0127 21.2126C17.8452 21.3222 17.6745 21.4273 17.5007 21.5278C15.8818 22.4643 14.0019 23 12 23C9.99808 23 8.11825 22.4643 6.49927 21.5278C6.32554 21.4273 6.15482 21.3222 5.9873 21.2126C2.98634 19.2504 1 15.8574 1 12Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
