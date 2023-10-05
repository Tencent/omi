import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-help')
export default class Help extends WeElement<IconProps> {
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
          d="M12.9951 21.0058L10.9951 20.9999L10.9951 18.994H13.0069L12.9951 21.0058ZM10.9954 17.4497V15.071C10.9954 13.9201 11.5127 12.9612 12.1317 12.1999C12.7463 11.444 13.5272 10.8027 14.1866 10.2832C15.0124 9.63256 15.5397 8.62673 15.5397 7.49717C15.5397 5.53971 13.9528 3.95288 11.9954 3.95288C10.4537 3.95288 9.13955 4.93771 8.65252 6.31565L8.31927 7.25849L6.43359 6.592L6.76684 5.64916C7.52748 3.49712 9.57981 1.95288 11.9954 1.95288C15.0574 1.95288 17.5397 4.43514 17.5397 7.49717C17.5397 9.26542 16.7108 10.8406 15.4243 11.8542C14.7694 12.3702 14.1453 12.8935 13.6835 13.4616C13.226 14.0242 12.9954 14.5487 12.9954 15.071V17.4497H10.9954Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
