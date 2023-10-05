import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-face-retouching')
export default class FaceRetouching extends WeElement<IconProps> {
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
          d="M3.99646 0.695068L5.09356 2.89911L7.2976 3.99621L5.09356 5.09332L3.99646 7.29736L2.89935 5.09332L0.695312 3.99621L2.89935 2.89911L3.99646 0.695068ZM12.0002 2.99998C11.3776 2.99998 10.7708 3.06306 10.1854 3.18284L9.2057 3.38331L8.80475 1.42391L9.78445 1.22344C10.501 1.07682 11.2422 0.999985 12.0002 0.999985C18.0754 0.999985 23.0002 5.92485 23.0002 12C23.0002 18.0751 18.0754 23 12.0002 23C5.9251 23 1.00023 18.0751 1.00023 12C1.00023 11.1153 1.10488 10.2537 1.30292 9.42744L1.53601 8.45499L3.48092 8.92116L3.24783 9.89362C3.08611 10.5683 3.00023 11.2735 3.00023 12C3.00023 16.9705 7.02967 21 12.0002 21C16.9708 21 21.0002 16.9705 21.0002 12C21.0002 7.02942 16.9708 2.99998 12.0002 2.99998ZM14.5125 8.93358H16.5164V10.9375H14.5125V8.93358ZM7.46312 8.93425H9.46703V10.9382H7.46312V8.93425ZM9.90965 13.1858L10.3982 14.0583C10.7136 14.6217 11.3139 14.9989 12.001 14.9989C12.6881 14.9989 13.2885 14.6217 13.6039 14.0583L14.0924 13.1858L15.8375 14.1628L15.349 15.0354C14.6943 16.2048 13.4411 16.9989 12.001 16.9989C10.561 16.9989 9.30781 16.2048 8.65307 15.0354L8.16455 14.1628L9.90965 13.1858ZM20.8308 20.8188L19.2619 21.5997L20.8308 22.3806L21.6117 23.9495L22.3926 22.3806L23.9615 21.5997L22.3926 20.8188L21.6117 19.25L20.8308 20.8188Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
