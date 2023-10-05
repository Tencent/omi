import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-folder-setting')
export default class FolderSetting extends WeElement<IconProps> {
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
          d="M1 2.5H9.48063L11.4806 5H23V11H21V7H10.5194L8.51937 4.5H3V19H11V21H1V2.5ZM18.9999 11.75V13.126C19.7149 13.31 20.3525 13.6867 20.854 14.1975L22.0466 13.509L23.0466 15.241L21.855 15.929C21.9494 16.2699 21.9999 16.629 21.9999 17C21.9999 17.371 21.9494 17.7301 21.855 18.071L23.0466 18.759L22.0466 20.491L20.854 19.8025C20.3525 20.3133 19.7149 20.69 18.9999 20.874V22.25H16.9999V20.874C16.285 20.69 15.6474 20.3133 15.1458 19.8025L13.9533 20.491L12.9533 18.759L14.1449 18.071C14.0504 17.7301 13.9999 17.371 13.9999 17C13.9999 16.629 14.0504 16.2699 14.1449 15.929L12.9533 15.241L13.9533 13.509L15.1458 14.1975C15.6474 13.6867 16.285 13.31 16.9999 13.126V11.75H18.9999ZM16.2487 16.0333C16.0902 16.3198 15.9999 16.6494 15.9999 17C15.9999 17.3506 16.0902 17.6802 16.2487 17.9667L16.2852 18.03C16.6351 18.6112 17.2721 19 17.9999 19C18.7278 19 19.3648 18.6112 19.7147 18.03L19.7512 17.9668C19.9097 17.6802 19.9999 17.3507 19.9999 17C19.9999 16.6493 19.9097 16.3198 19.7512 16.0332L19.7147 15.97C19.3648 15.3888 18.7278 15 17.9999 15C17.2721 15 16.6351 15.3888 16.2852 15.97L16.2487 16.0333Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
