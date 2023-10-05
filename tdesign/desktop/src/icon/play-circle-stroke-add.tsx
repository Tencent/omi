import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-play-circle-stroke-add')
export default class PlayCircleStrokeAdd extends WeElement<IconProps> {
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
          d="M12 3C7.02944 3 3 7.02945 3 12C3 16.9706 7.02944 21.0001 12 21.0001H13V23.0001H12C5.92486 23.0001 1 18.0752 1 12C1 5.92489 5.92486 1 12 1C18.0751 1 23 5.92489 23 12V13H21V12C21 7.02945 16.9706 3 12 3ZM9.5 7.13148L16.8028 12L9.5 16.8685V7.13148ZM11.5 10.8685V13.1315L13.1972 12L11.5 10.8685ZM20 15V18H23V20H20V23H18V20H15V18H18V15H20Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
