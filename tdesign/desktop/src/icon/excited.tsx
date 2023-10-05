import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-excited')
export default class Excited extends WeElement<IconProps> {
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
        <g id="&amp;#230;&amp;#191;&amp;#128;&amp;#229;&amp;#138;&amp;#168;-excited">
          <g id="Union">
            <path
              d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM7.61869 7.13816L11 9.04017L11 10.5L7.80001 12.9L6.60001 11.3L8.45917 9.90563L6.63816 8.88131L7.61869 7.13816ZM17.3618 8.88131L15.5408 9.90563L17.4 11.3L16.2 12.9L13 10.5L13 9.04017L16.3813 7.13816L17.3618 8.88131ZM12.0009 11.2639L12.8953 13.0528C13.2737 13.8096 13.7522 14.0383 14.0839 14.066C14.2998 14.0839 14.5305 14.028 14.7519 13.8774L15.5788 13.315L16.7035 14.9688L15.8766 15.5312C15.5203 15.7736 15.1246 15.9396 14.7104 16.0179C14.532 16.4569 14.3019 16.9545 14.0388 17.4037C13.8394 17.7443 13.5957 18.1014 13.311 18.3859C13.0514 18.6455 12.6033 19 12.0009 19C11.3985 19 10.9504 18.6455 10.6908 18.3859C10.4061 18.1014 10.1624 17.7443 9.96294 17.4037C9.69992 16.9545 9.46978 16.4569 9.29144 16.0179C8.87721 15.9396 8.48154 15.7736 8.12515 15.5312L7.29825 14.9688L8.42295 13.315L9.24985 13.8774C9.47133 14.028 9.70198 14.0839 9.91785 14.066C10.2496 14.0383 10.7281 13.8096 11.1065 13.0528L12.0009 11.2639ZM11.3215 15.6767C11.433 15.9214 11.5575 16.1688 11.6888 16.3932C11.8025 16.5872 11.9084 16.7416 12.0009 16.8552C12.0934 16.7416 12.1993 16.5872 12.3129 16.3932C12.4443 16.1688 12.5688 15.9214 12.6803 15.6767C12.4393 15.5415 12.2117 15.3731 12.0009 15.1741C11.7901 15.3731 11.5625 15.5415 11.3215 15.6767Z"
              fill="currentColor"
            />
          </g>
        </g>
      </svg>
    )
  }
}
