import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-file-blocked')
export default class FileBlocked extends WeElement<IconProps> {
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
          d="M3 1H15.4142L21 6.58579V11H19V9H13V3H5V21H11V23H3V1ZM15 3.41421V7H18.5858L15 3.41421ZM18 14.5C16.067 14.5 14.5 16.067 14.5 18C14.5 18.6031 14.652 19.17 14.9205 19.6652L19.6654 14.9206C19.1701 14.6521 18.6032 14.5 18 14.5ZM21.0795 16.3348L16.3346 21.0794C16.8299 21.3479 17.3968 21.5 18 21.5C19.933 21.5 21.5 19.933 21.5 18C21.5 17.3969 21.348 16.83 21.0795 16.3348ZM12.5 18C12.5 14.9624 14.9624 12.5 18 12.5C19.5186 12.5 20.895 13.1168 21.8892 14.111C22.8833 15.1052 23.5 16.4816 23.5 18C23.5 21.0376 21.0376 23.5 18 23.5C16.4814 23.5 15.105 22.8832 14.1108 21.889C13.1167 20.8948 12.5 19.5184 12.5 18Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
