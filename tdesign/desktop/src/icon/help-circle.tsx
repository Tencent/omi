import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-help-circle')
export default class HelpCircle extends WeElement<IconProps> {
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
          d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM23 12C23 18.0751 18.0751 23 12 23C5.92487 23 0.999999 18.0751 1 12C1 5.92487 5.92487 0.999999 12 1C18.0751 1 23 5.92487 23 12ZM13.0039 18.2539L11 18.2539L11 16.25H13.0039L13.0039 18.2539ZM11.0002 15.25V14C11.0002 13.1334 11.3904 12.4265 11.8265 11.8902C12.2582 11.3592 12.8004 10.9159 13.2364 10.5723C13.7034 10.2045 14.0002 9.63718 14.0002 9C14.0002 7.89543 13.1048 7 12.0002 7C11.1309 7 10.3888 7.5551 10.1137 8.33325L9.78049 9.27609L7.89481 8.60959L8.22806 7.66675C8.7767 6.11451 10.257 5 12.0002 5C14.2093 5 16.0002 6.79086 16.0002 9C16.0002 10.2759 15.4017 11.4125 14.4742 12.1433C14.0426 12.4834 13.6572 12.8088 13.3783 13.1519C13.1037 13.4896 13.0002 13.762 13.0002 14V15.25H11.0002Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
