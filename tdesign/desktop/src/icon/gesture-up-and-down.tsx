import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-gesture-up-and-down')
export default class GestureUpAndDown extends WeElement<IconProps> {
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
        <g clip-path="url(#clip0_8792_7013)">
          <path
            d="M0.498878 0.512695L6.19787 0.515433L6.19787 5.50071L4.19787 5.50071L4.19787 3.40123C1.26738 7.2996 1.26738 12.7018 4.19787 16.6002L4.19787 14.5007H6.19787L6.19787 19.486L0.498152 19.4866L0.497831 17.4866L2.36888 17.4863C-0.78989 13.0115 -0.789628 6.98854 2.36967 2.51397L0.497514 2.51269L0.498878 0.512695ZM10.0068 7.6463C9.79809 7.28486 9.33593 7.16103 8.97449 7.3697C8.61306 7.57837 8.48922 8.04054 8.6979 8.40197L13.7137 17.0896L9.3181 18.4725L9.30647 18.6536L14.5006 20.7996C14.7178 20.8893 14.9644 20.873 15.1679 20.7555L21.3042 17.2128C21.5863 17.0499 21.7325 16.7247 21.6671 16.4056L20.5355 10.8807C20.4636 10.5299 20.1558 10.2775 19.7977 10.2758L15.6008 10.2559C15.4668 10.2552 15.3349 10.2902 15.2188 10.3572L12.4837 11.9364L10.0068 7.6463ZM7.97449 5.63765C9.29251 4.87669 10.9779 5.32828 11.7388 6.6463L13.2157 9.20435L14.2188 8.62519C14.6418 8.38101 15.122 8.25357 15.6103 8.25588L19.8072 8.27579C21.1116 8.28198 22.2331 9.20149 22.4948 10.4793L23.6265 16.0042C23.8646 17.1669 23.3319 18.3514 22.3042 18.9448L16.1679 22.4876C15.4265 22.9157 14.5282 22.975 13.7369 22.648L7.21879 19.955L7.32755 18.2612C7.37728 17.4867 7.89811 16.8226 8.63836 16.5897L10.7349 15.9301L6.96585 9.40197C6.20489 8.08396 6.65647 6.39861 7.97449 5.63765Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}
