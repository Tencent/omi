import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-chart-minimum')
export default class ChartMinimum extends WeElement<IconProps> {
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
          d="M4 2V20H22V22H2V2H4ZM20 2.9999V3.9999C20 6.04787 19.7484 8.71079 18.7929 10.899C18.3112 12.0022 17.6301 13.0324 16.6662 13.7895C15.6874 14.5584 14.4675 15.0048 12.9992 15.0037C11.5315 15.0025 10.3122 14.5554 9.33379 13.7869C8.37017 13.03 7.68902 12.0009 7.20724 10.8987C6.25166 8.71248 6 6.05278 6 4.00557V3.00557H8V4.00557C8 5.94502 8.24639 8.28241 9.03983 10.0976C9.43256 10.9961 9.93867 11.7188 10.5692 12.214C11.1848 12.6976 11.9665 13.0029 13.0008 13.0037C14.0345 13.0045 14.8156 12.7 15.4308 12.2167C16.0611 11.7216 16.5672 10.9984 16.96 10.0987C17.7536 8.28117 18 5.94026 18 3.9999V2.9999H20ZM5.99805 15.998H8.00195V18.002H5.99805V15.998ZM8.99805 15.998H11.002V18.002H8.99805V15.998ZM11.998 15.998H14.002V18.002H11.998V15.998ZM14.998 15.998H17.002V18.002H14.998V15.998ZM17.998 15.998H20.002V18.002H17.998V15.998Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
