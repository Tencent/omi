import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-screen-4k')
export default class Screen4k extends WeElement<IconProps> {
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
          d="M1 3L23 3V21H1L1 3ZM3 5L3 19H21V5L3 5ZM15 8V10.0476L16 9.33979V8H18V9.59847C18 10.0852 17.7638 10.5416 17.3666 10.8228L15.7034 12L17.3666 13.1772C17.7639 13.4584 18 13.9148 18 14.4015V16H16V14.6602L15 13.9524V16H13V8H15ZM7 8V11.4286H9V8H11V16H9V13.4286H7C5.89543 13.4286 5 12.5331 5 11.4286V8H7Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
