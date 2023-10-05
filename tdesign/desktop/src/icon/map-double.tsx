import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-map-double')
export default class MapDouble extends WeElement<IconProps> {
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
          d="M7.5 1.84229L12.0744 4.51067L17.5 2.24999V8.62499L22 6.74999V18.9494L16.5 22.1577L11.9256 19.4893L6.5 21.75V15.375L2 17.25V5.05062L7.5 1.84229ZM6.5 13.2083V9.55062L11.6225 6.56249L7.5 4.15769L4 6.19936V14.25L6.5 13.2083ZM12.366 6.55581L15.5 8.38395V5.24999L12.366 6.55581ZM17.5 10.7917L17.5 19.259L20 17.8006V9.74999L17.5 10.7917ZM15.5 19.259L15.5 10.6994L13 9.24103V17.8006L15.5 19.259ZM11 17.7083V9.24103L8.5 10.6994V18.75L11 17.7083Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
