import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-chart-maximum')
export default class ChartMaximum extends WeElement<IconProps> {
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
          d="M4 2V20H22V22H2V2H4ZM5.99805 2.99805H8.00195V5.00195H5.99805V2.99805ZM8.99805 2.99805H11.002V5.00195H8.99805V2.99805ZM11.998 2.99805H14.002V5.00195H11.998V2.99805ZM14.998 2.99805H17.002V5.00195H14.998V2.99805ZM17.998 2.99805H20.002V5.00195H17.998V2.99805ZM15.4308 8.78698C14.8156 8.3037 14.0345 7.99919 13.0008 8C11.9665 8.00081 11.1848 8.30608 10.5692 8.78965C9.93867 9.28487 9.43256 10.0075 9.03983 10.906C8.24639 12.7213 8 15.0586 8 16.9981V17.9981H6V16.9981C6 14.9509 6.25166 12.2912 7.20724 10.105C7.68902 9.00279 8.37017 7.97368 9.33379 7.21681C10.3122 6.44828 11.5315 6.00115 12.9992 6C14.4675 5.99885 15.6874 6.44529 16.6662 7.21418C17.6301 7.97129 18.3112 9.00145 18.7929 10.1046C19.7484 12.2929 20 14.9558 20 17.0038V18.0038H18V17.0038C18 15.0634 17.7536 12.7225 16.96 10.9049C16.5672 10.0052 16.0611 9.28203 15.4308 8.78698Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
