import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-chart-line-data')
export default class ChartLineData extends WeElement<IconProps> {
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
          d="M4 2V20H22V22H2V2H4ZM19.5 7C19.2239 7 19 7.22386 19 7.5C19 7.77614 19.2239 8 19.5 8C19.7761 8 20 7.77614 20 7.5C20 7.22386 19.7761 7 19.5 7ZM17 7.5C17 6.11929 18.1193 5 19.5 5C20.8807 5 22 6.11929 22 7.5C22 8.88071 20.8807 10 19.5 10C18.949 10 18.4397 9.82175 18.0264 9.51978L9.98468 14.2155C10.0939 15.1744 9.63936 16.1514 8.75024 16.6648C7.55451 17.3551 6.02553 16.9454 5.33518 15.7497C4.64482 14.554 5.05451 13.025 6.25024 12.3346C7.13675 11.8228 8.20643 11.9156 8.98173 12.4852L17.017 7.79321C17.0058 7.69704 17 7.59919 17 7.5ZM7.93326 14.2497C7.79518 14.0105 7.48939 13.9286 7.25024 14.0667C7.0111 14.2048 6.92916 14.5105 7.06723 14.7497C7.2053 14.9888 7.5111 15.0708 7.75024 14.9327C7.98939 14.7946 8.07133 14.4888 7.93326 14.2497Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
