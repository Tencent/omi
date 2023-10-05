import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-lemon')
export default class Lemon extends WeElement<IconProps> {
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
        <g id="&amp;#230;&amp;#159;&amp;#160;&amp;#230;&amp;#170;&amp;#172;_lemon">
          <path
            id="Union"
            d="M3.60819 12.3442C3.42529 14.0227 3.91964 15.5836 4.83088 16.9435L5.08105 17.3168L4.51446 19.496L6.67884 18.9172L7.05517 19.1683C8.4143 20.0752 9.97751 20.5687 11.6582 20.386C13.3382 20.2034 15.2539 19.3321 17.293 17.293C19.3321 15.254 20.2034 13.3382 20.386 11.6582C20.5687 9.97752 20.0752 8.41431 19.1683 7.05518L18.9172 6.67885L19.4961 4.51444L17.3168 5.08107L16.9435 4.8309C15.5836 3.91964 14.0227 3.4253 12.3442 3.60818C10.6658 3.79105 8.75032 4.66419 6.70726 6.70725C4.66421 8.7503 3.79106 10.6658 3.60819 12.3442ZM1.61995 12.1275C1.86301 9.89683 3.00651 7.57957 5.29305 5.29303C7.57959 3.00649 9.89684 1.863 12.1275 1.61995C14.1892 1.39532 16.0747 1.95112 17.6706 2.92258L19.2175 2.52036L19.2645 2.51282C20.5849 2.30069 21.7218 3.45101 21.4941 4.76879L21.4864 4.8133L21.0796 6.33441C22.0453 7.92906 22.5982 9.81417 22.3743 11.8743C22.1318 14.1054 20.9913 16.4232 18.7072 18.7073C16.4232 20.9913 14.1054 22.1318 11.8743 22.3743C9.81416 22.5982 7.92904 22.0453 6.33439 21.0796L4.81331 21.4864L4.76881 21.4941C3.45103 21.7217 2.30071 20.5849 2.51283 19.2645L2.52038 19.2175L2.92257 17.6706C1.9511 16.0747 1.39531 14.1892 1.61995 12.1275ZM7.87689 9.29513L9.29386 7.87816L10.7108 9.29513L9.29386 10.7121L7.87689 9.29513ZM7.16978 12.8307L8.58675 11.4137L10.0037 12.8307L8.58675 14.2476L7.16978 12.8307ZM11.4124 8.58803L12.8294 7.17105L14.2464 8.58803L12.8294 10.005L11.4124 8.58803Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}
