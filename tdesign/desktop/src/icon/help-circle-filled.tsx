import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-help-circle-filled')
export default class HelpCircleFilled extends WeElement<IconProps> {
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
          d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM11.8265 11.8902C12.2582 11.3593 12.8004 10.9159 13.2365 10.5723C13.7034 10.2045 14.0002 9.63718 14.0002 9C14.0002 7.89543 13.1048 7 12.0002 7C11.131 7 10.3888 7.5551 10.1138 8.33325L9.78055 9.27609L7.89487 8.6096L8.22811 7.66676C8.77675 6.11451 10.2571 5 12.0002 5C14.2094 5 16.0002 6.79086 16.0002 9C16.0002 10.2759 15.4018 11.4125 14.4742 12.1433C14.0426 12.4834 13.6573 12.8088 13.3783 13.1519C13.1038 13.4896 13.0002 13.762 13.0002 14V15.25H11.0002V14C11.0002 13.1334 11.3905 12.4265 11.8265 11.8902ZM11.0001 18.2539V16.25H13.004V18.2539H11.0001Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
