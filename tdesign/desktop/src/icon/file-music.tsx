import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-file-music')
export default class FileMusic extends WeElement<IconProps> {
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
          d="M3 1H15.4142L21 6.58579V23H3V1ZM18.5858 7L15 3.41421V7H18.5858ZM13 3H5V21H19V9H13V3ZM12 10H16V12H14V16C14 17.3807 12.8807 18.5 11.5 18.5C10.1193 18.5 9 17.3807 9 16C9 14.6193 10.1193 13.5 11.5 13.5C11.6712 13.5 11.8384 13.5172 12 13.55V10ZM12 16C12 15.7239 11.7761 15.5 11.5 15.5C11.2239 15.5 11 15.7239 11 16C11 16.2761 11.2239 16.5 11.5 16.5C11.7761 16.5 12 16.2761 12 16Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
