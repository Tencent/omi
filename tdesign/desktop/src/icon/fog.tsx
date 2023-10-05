import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-fog')
export default class Fog extends WeElement<IconProps> {
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
          d="M11.1 4C8.63404 4 6.7 5.91564 6.7 8.2C6.7 8.46219 6.72505 8.71791 6.77273 8.9654L7.00186 10.1546H5.79079C4.83859 10.1546 4 11.0183 4 12V13H2V12C2 10.343 3.12378 8.81486 4.7012 8.32086C4.7004 8.28066 4.7 8.24037 4.7 8.2C4.7 4.7406 7.60128 2 11.1 2C11.646 2 12.1775 2.06644 12.6858 2.192C14.8331 2.7225 16.5652 4.31155 17.2193 6.37863C17.9416 6.47026 18.6217 6.69802 19.2299 7.03569C20.9409 7.9857 22 10.0856 22 12V13H20V12C20 10.7021 19.2442 9.33123 18.259 8.78426C17.7444 8.49852 17.1446 8.33333 16.5 8.33333C16.4803 8.33333 16.4607 8.33349 16.4411 8.33379L15.5868 8.34716L15.4403 7.50544C15.158 5.88414 13.8892 4.54944 12.2061 4.13363C11.8538 4.0466 11.4834 4 11.1 4ZM2 14H8V16H2V14ZM10 14H22V16H10V14ZM17 18H22V20H17V18ZM2 20L2 18L15 18V20L2 20Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
