import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-delete-time')
export default class DeleteTime extends WeElement<IconProps> {
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
          d="M7.5 1H16.5V4H22V6H19.971L19.8084 11.529L17.8093 11.4702L17.9702 6H6.02984L6.47102 21H11.5V23H4.52898L4.02898 6H2V4H7.5V1ZM9.5 4H14.5V3H9.5V4ZM13 8V15H11V8H13ZM18.5 15C16.567 15 15 16.567 15 18.5C15 20.433 16.567 22 18.5 22C20.433 22 22 20.433 22 18.5C22 16.567 20.433 15 18.5 15ZM13 18.5C13 15.4624 15.4624 13 18.5 13C21.5376 13 24 15.4624 24 18.5C24 21.5376 21.5376 24 18.5 24C15.4624 24 13 21.5376 13 18.5ZM19.5 16.252V18.0858L20.9142 19.5001L19.4999 20.9142L17.5 18.9141V16.252H19.5Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
