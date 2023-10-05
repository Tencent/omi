import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-qrcode')
export default class Qrcode extends WeElement<IconProps> {
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
          d="M2 2H11V11H2V2ZM4 4V9H9V4H4ZM13 2H22V11H13V2ZM15 4V9H20V4H15ZM5.5 5.5H7.50391V7.50391H5.5V5.5ZM16.5 5.5H18.5039V7.50391H16.5V5.5ZM12.9961 12.9961H15V15H12.9961V12.9961ZM19.9961 12.9961H22V15H19.9961V12.9961ZM2 13H11V22H2V13ZM4 15V20H9V15H4ZM15.9961 15.9961H18V17.9961H20V19.9961H22V22H19.9961V20H17.9961V18H15.9961V15.9961ZM5.5 16.5H7.50391V18.5039H5.5V16.5ZM12.9961 19.9961H15V22H12.9961V19.9961Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
