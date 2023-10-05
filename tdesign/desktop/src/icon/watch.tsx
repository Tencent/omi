import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-watch')
export default class Watch extends WeElement<IconProps> {
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
          d="M7.11722 0H16.8828L17.3859 4.02458C18.8605 4.21393 20 5.47389 20 7V9H21V15H20V17C20 18.5261 18.8605 19.7861 17.3859 19.9754L16.8828 24H7.11722L6.61414 19.9754C5.13954 19.7861 4 18.5261 4 17V7C4 5.47389 5.13954 4.21393 6.61414 4.02458L7.11722 0ZM8.63278 4H15.3672L15.1172 2H8.88278L8.63278 4ZM7 18H17C17.5523 18 18 17.5523 18 17V7C18 6.44772 17.5523 6 17 6H7C6.44772 6 6 6.44772 6 7V17C6 17.5523 6.44772 18 7 18ZM8.63278 20L8.88278 22H15.1172L15.3672 20H8.63278Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
