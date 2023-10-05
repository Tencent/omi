import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-fries')
export default class Fries extends WeElement<IconProps> {
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
        <g id="&amp;#232;&amp;#150;&amp;#175;&amp;#230;&amp;#157;&amp;#161;_fries">
          <path
            id="Union"
            d="M17.4648 0.994141L21.0003 4.52967L20.2932 5.23678L22.4146 7.3581L20.2932 9.47942L22.4146 11.6007L19.2147 14.8006L20.6124 16.1984L8.84539 23.2595L0.741211 15.1553L7.80114 3.38712L9.31517 4.90115L13.2222 0.994141L15.3435 3.11546L17.4648 0.994141ZM12.8507 8.43668L13.5578 9.14379L18.1719 4.52968L17.4648 3.82257L12.8507 8.43668ZM18.879 6.651L14.972 10.558L15.6791 11.2651L19.5861 7.3581L18.879 6.651ZM17.0933 12.6793L17.8005 13.3864L19.5861 11.6007L18.879 10.8936L17.0933 12.6793ZM17.3869 15.8013L8.19822 6.61262L6.25888 9.84485L14.1547 17.7407L17.3869 15.8013ZM12.387 18.8014L5.19834 11.6127L3.25946 14.8451L9.15529 20.741L12.387 18.8014ZM10.7294 6.31536L11.4365 7.02247L13.9293 4.52968L13.2222 3.82257L10.7294 6.31536Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}
