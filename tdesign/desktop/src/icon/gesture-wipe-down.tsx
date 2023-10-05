import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-gesture-wipe-down')
export default class GestureWipeDown extends WeElement<IconProps> {
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
        <g clip-path="url(#clip0_8792_7016)">
          <path
            d="M5.92893 2.51529L5.22183 3.22239C1.29991 7.14431 0.958594 13.2909 4.19787 17.6001L4.19787 15.5006H6.19787L6.19787 20.4858L0.498152 20.4865L0.497831 18.4865L2.36888 18.4862C-1.21257 13.4126 -0.732993 6.34879 3.80761 1.80818L4.51472 1.10107L5.92893 2.51529Z"
            fill="currentColor"
          />
          <path
            d="M10.0068 6.64646C9.79809 6.28502 9.33593 6.16119 8.97449 6.36986C8.61306 6.57853 8.48922 7.0407 8.6979 7.40213L13.7137 16.0898L9.3181 17.4727L9.30647 17.6537L14.5006 19.7997C14.7178 19.8895 14.9644 19.8732 15.1679 19.7557L21.3042 16.2129C21.5863 16.0501 21.7325 15.7249 21.6671 15.4057L20.5355 9.88083C20.4636 9.53004 20.1558 9.27763 19.7977 9.27593L15.6008 9.25602C15.4668 9.25538 15.3349 9.29037 15.2188 9.3574L12.4837 10.9366L10.0068 6.64646ZM7.97449 4.63781C9.29251 3.87685 10.9779 4.32844 11.7388 5.64646L13.2157 8.20451L14.2188 7.62535C14.6418 7.38117 15.122 7.25373 15.6103 7.25604L19.8072 7.27595C21.1116 7.28214 22.2331 8.20166 22.4948 9.4795L23.6265 15.0044C23.8646 16.167 23.3319 17.3516 22.3042 17.945L16.1679 21.4877C15.4265 21.9158 14.5282 21.9751 13.7369 21.6482L7.21879 18.9552L7.32755 17.2613C7.37728 16.4869 7.89811 15.8228 8.63836 15.5899L10.7349 14.9303L6.96585 8.40213C6.20489 7.08412 6.65647 5.39877 7.97449 4.63781Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}
