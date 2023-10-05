import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-doge')
export default class Doge extends WeElement<IconProps> {
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
        <g id="&amp;#231;&amp;#139;&amp;#151;-doge">
          <g id="Union">
            <path
              d="M1 1H5.73855L7.77322 2.97293C9.07653 2.45921 10.5049 2.17647 12 2.17647C13.4563 2.17647 14.8492 2.44471 16.125 2.93337L17.6204 1H23V13H22.9916C22.7627 18.611 17.8742 23 12 23C6.1258 23 1.23734 18.611 1.00838 13H1V1ZM3 6.60011C3.78224 5.54914 4.76333 4.64321 5.88772 3.93049L4.92812 3H3V6.60011ZM3 12.5882C3 17.1777 6.97146 21 12 21C17.0285 21 21 17.1777 21 12.5882C21 9.32002 18.9986 6.45339 16.0208 5.06061C14.8132 4.49579 13.4486 4.17647 12 4.17647C10.5514 4.17647 9.18682 4.49579 7.97923 5.06061C5.00144 6.45339 3 9.32002 3 12.5882ZM21 6.60011V3H18.6019L17.9569 3.83381C19.1464 4.56056 20.1819 5.50101 21 6.60011ZM9 9V12H7V9H9ZM17 9V12H15V9H17ZM12.0009 11.2639L12.8953 13.0528C13.2737 13.8096 13.7522 14.0383 14.0839 14.066C14.2998 14.0839 14.5305 14.028 14.7519 13.8774L15.5788 13.315L16.7035 14.9688L15.8766 15.5312C15.5203 15.7736 15.1246 15.9396 14.7104 16.0179C14.532 16.4569 14.3019 16.9545 14.0388 17.4037C13.8394 17.7443 13.5957 18.1014 13.311 18.3859C13.0514 18.6455 12.6033 19 12.0009 19C11.3985 19 10.9504 18.6455 10.6908 18.3859C10.4061 18.1014 10.1624 17.7443 9.96294 17.4037C9.69992 16.9545 9.46978 16.4569 9.29144 16.0179C8.87721 15.9396 8.48154 15.7736 8.12515 15.5312L7.29825 14.9688L8.42295 13.315L9.24985 13.8774C9.47133 14.028 9.70198 14.0839 9.91785 14.066C10.2496 14.0383 10.7281 13.8096 11.1065 13.0528L12.0009 11.2639ZM11.3215 15.6767C11.433 15.9214 11.5575 16.1688 11.6888 16.3932C11.8025 16.5872 11.9084 16.7416 12.0009 16.8552C12.0934 16.7416 12.1993 16.5872 12.3129 16.3932C12.4443 16.1688 12.5688 15.9214 12.6803 15.6767C12.4393 15.5415 12.2117 15.3731 12.0009 15.1741C11.7901 15.3731 11.5625 15.5415 11.3215 15.6767Z"
              fill="currentColor"
            />
          </g>
        </g>
      </svg>
    )
  }
}
