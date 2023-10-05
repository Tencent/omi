import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-animation')
export default class Animation extends WeElement<IconProps> {
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
          d="M11.0894 7.05395L11.2004 6.59395C11.2182 6.53301 11.2372 6.47254 11.2572 6.41259L11.6283 5.57164C12.4821 4.03772 14.1199 3 16 3C18.7614 3 21 5.23858 21 8C21 10.0037 19.8213 11.7322 18.1195 12.5298L17.5865 12.7431C17.5478 12.756 17.509 12.7684 17.47 12.7804L16.9586 12.9082C16.6483 12.9684 16.3278 13 16 13C13.2386 13 11 10.7614 11 8C11 7.67656 11.0307 7.36029 11.0894 7.05395ZM9.47077 5.47106C7.63979 6.18086 6.18082 7.63897 5.4707 9.47109C2.85605 10.4847 1 13.0243 1 15.9999C1 19.8659 4.13401 22.9999 8 22.9999C10.9754 22.9999 13.515 21.1441 14.5288 18.5292C14.6608 18.478 14.7908 18.423 14.9188 18.3642L15.2569 18.229L15.2466 18.2031C16.7393 17.4201 17.9143 16.1141 18.5287 14.5293C18.6613 14.4779 18.792 14.4226 18.9205 14.3635L19.2569 14.229L19.2466 14.2032C21.4778 13.033 23 10.6943 23 8C23 4.13401 19.866 1 16 1C13.0258 1 10.4848 2.85494 9.47077 5.47106ZM16.0006 15C15.5103 15.6526 14.8641 16.1811 14.1176 16.5306L13.5887 16.7422C13.5485 16.7556 13.5081 16.7686 13.4674 16.7811L12.9611 16.9076C12.65 16.9682 12.3287 16.9999 12 16.9999C9.23858 16.9999 7 14.7613 7 11.9999C7 11.6766 7.0307 11.3604 7.08935 11.0541L7.20047 10.5937C7.21825 10.5329 7.23716 10.4726 7.25717 10.4128L7.6286 9.57085C7.97117 8.95555 8.4399 8.41998 9 7.99924C9 7.99949 9 7.99975 9 8C9 11.866 12.134 15 16 15C16.0002 15 16.0004 15 16.0006 15ZM5 11.9992C5 11.9995 5 11.9997 5 11.9999C5 15.8659 8.13401 18.9999 12 18.9999C12.0002 18.9999 12.0004 18.9999 12.0007 18.9999C11.088 20.2148 9.63498 20.9999 8 20.9999C5.23858 20.9999 3 18.7613 3 15.9999C3 14.365 3.78502 12.9119 5 11.9992Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
