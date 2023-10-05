import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-task-setting')
export default class TaskSetting extends WeElement<IconProps> {
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
        <g clip-path="url(#clip0_9300_24245)">
          <path
            d="M7 1H17V3H21V12H19V5H17V7H7V5H5V21H12V23H3V3H7V1ZM9 5H15V3H9V5ZM19.9999 13.75V15.126C20.7149 15.31 21.3525 15.6867 21.854 16.1975L23.0466 15.509L24.0466 17.241L22.855 17.929C22.9494 18.2699 22.9999 18.629 22.9999 19C22.9999 19.371 22.9494 19.7301 22.855 20.071L24.0466 20.759L23.0466 22.491L21.854 21.8025C21.3525 22.3133 20.7149 22.69 19.9999 22.874V24.25H17.9999V22.874C17.285 22.69 16.6474 22.3133 16.1458 21.8025L14.9533 22.491L13.9533 20.759L15.1449 20.071C15.0504 19.7301 14.9999 19.371 14.9999 19C14.9999 18.629 15.0504 18.2699 15.1449 17.929L13.9533 17.241L14.9533 15.509L16.1458 16.1975C16.6474 15.6867 17.285 15.31 17.9999 15.126V13.75H19.9999ZM17.2487 18.0333C17.0902 18.3198 16.9999 18.6494 16.9999 19C16.9999 19.3506 17.0902 19.6802 17.2487 19.9667L17.2852 20.03C17.6351 20.6112 18.2721 21 18.9999 21C19.7278 21 20.3648 20.6112 20.7147 20.03L20.7512 19.9668C20.9097 19.6802 20.9999 19.3507 20.9999 19C20.9999 18.6493 20.9097 18.3198 20.7512 18.0332L20.7147 17.97C20.3648 17.3888 19.7278 17 18.9999 17C18.2721 17 17.6351 17.3888 17.2852 17.97L17.2487 18.0333Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}
