import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-eggplant')
export default class Eggplant extends WeElement<IconProps> {
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
        <g id="&amp;#232;&amp;#140;&amp;#132;&amp;#229;&amp;#173;&amp;#144;_eggplant">
          <path
            id="Union"
            d="M11.0869 5.89858L9.60155 5.20575L10.6113 4.19601C12.932 1.87531 16.5704 1.67603 19.1178 3.59822L20.6055 2.85438L21.4999 4.64324L20.5664 5.11C22.3112 7.64249 22.0573 11.1369 19.8047 13.3894L18.795 14.3992L18.1012 12.9118C17.639 13.4037 17.0887 13.9813 16.6218 14.4481C16.1637 14.9063 15.9595 15.5212 15.6268 16.5228C15.5975 16.6111 15.5672 16.7024 15.5356 16.7968C15.1693 17.8928 14.6678 19.226 13.4415 20.4566C12.2333 21.6692 10.5966 22.5013 8.8194 22.6059C7.0177 22.7119 5.15084 22.0642 3.54366 20.4571C1.93711 18.8505 1.28771 16.9861 1.39273 15.1847C1.49632 13.4078 2.32809 11.7711 3.54076 10.5584C4.77314 9.32604 6.10706 8.82434 7.204 8.45892C7.30131 8.4265 7.39525 8.39543 7.48599 8.36542C8.4835 8.03548 9.09441 7.83341 9.55075 7.37707C10.0175 6.91034 10.5949 6.36047 11.0869 5.89858ZM13.2905 4.71955L14.8756 5.45887L15.3757 8.62502L18.5419 9.12514L19.2812 10.7102C20.0667 9.04138 19.7698 6.98954 18.3905 5.61022C18.3579 5.57766 18.325 5.54571 18.2917 5.51437C16.9149 4.21749 14.9201 3.95254 13.2905 4.71955ZM17.179 10.9347L13.6271 10.3736L13.0661 6.82172L13.0415 6.81027C12.9173 6.92545 12.7753 7.05762 12.6222 7.20079C12.1017 7.68764 11.4619 8.2943 10.965 8.79128C10.1495 9.60677 9.05819 9.95993 8.15508 10.2522C8.04572 10.2876 7.93912 10.3221 7.83611 10.3564C6.81222 10.6975 5.84719 11.0804 4.95496 11.9726C4.04302 12.8846 3.46084 14.0747 3.38934 15.3011C3.31927 16.5031 3.73363 17.8186 4.95788 19.0429C6.18149 20.2665 7.4987 20.6801 8.70192 20.6093C9.92964 20.5371 11.1188 19.9542 12.0248 19.045C12.9128 18.1538 13.296 17.1882 13.6388 16.1627C13.6729 16.0607 13.7072 15.9552 13.7424 15.847C14.0365 14.9422 14.3916 13.8499 15.2076 13.0339C15.7049 12.5367 16.3119 11.8969 16.7991 11.3765C16.9423 11.2236 17.0745 11.0816 17.1897 10.9575L17.179 10.9347Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}
