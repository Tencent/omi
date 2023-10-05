import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-city-ancient')
export default class CityAncient extends WeElement<IconProps> {
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
          d="M11.1458 1.4826L12.0017 0.0664058L12.8588 1.48505L12.8645 1.49438L12.8885 1.53365C12.91 1.56869 12.9424 1.62105 12.9845 1.68846C13.0688 1.82332 13.1922 2.01809 13.3466 2.25459C13.656 2.72859 14.0867 3.36538 14.5743 4.02141C15.0644 4.68075 15.599 5.34172 16.1157 5.87302C16.6593 6.4319 17.0841 6.74218 17.3483 6.84031C17.6848 6.96535 17.9021 6.99997 18 6.99997L19 6.99997L19 8.99997L18 8.99997L18 11L22 11L22 13L21 13L21 22L3.00001 22L3 13L2 13L2 11L6.00235 11L6.00235 8.99997C6.00157 8.99997 6.00079 8.99997 6.00001 8.99997L5.00001 8.99997L5.00001 6.99997L6.00001 6.99997C6.09813 6.99997 6.31619 6.96518 6.65382 6.83963C6.91844 6.74123 7.3436 6.43067 7.88721 5.87187C8.40406 5.34058 8.93869 4.67972 9.42885 4.02054C9.91655 3.36466 10.3472 2.72806 10.6566 2.2542C10.811 2.01778 10.9344 1.82307 11.0187 1.68826C11.0609 1.62088 11.0932 1.56853 11.1147 1.5335L11.1387 1.49425L11.1444 1.48492L11.1458 1.4826ZM8.00235 8.99997L8.00235 11L16 11L16 8.99997L8.00235 8.99997ZM14.429 6.99997C13.9142 6.44134 13.4132 5.81187 12.9692 5.21456C12.6079 4.72856 12.2779 4.25512 12.0014 3.84478C11.7249 4.25494 11.395 4.72816 11.0338 5.21394C10.5895 5.81145 10.0881 6.44116 9.57296 6.99997L14.429 6.99997ZM5 13L5.00001 20L8.00001 20L8.00001 15L16 15L16 20L19 20L19 13L5 13ZM14 20L14 17L10 17L10 20L14 20Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
