import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-guitar')
export default class Guitar extends WeElement<IconProps> {
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
          d="M18.9999 1.58594L22.4142 5.00015L20.9999 6.41436L19.9999 5.41437L19.4142 6.00015L19.9142 6.50015L18.4999 7.91436L17.9999 7.41436L17.1715 8.24284C17.6947 9.03311 18 9.98149 18 11.0002C18 13.0559 16.7601 14.8202 14.9881 15.589C14.996 15.7251 15 15.8622 15 16.0002C15 19.8661 11.866 23.0002 8 23.0002C4.13401 23.0002 1 19.8661 1 16.0002C1 12.1342 4.13401 9.00015 8 9.00015C8.13795 9.00015 8.27505 9.00416 8.41119 9.01206C9.17998 7.24001 10.9443 6.00015 13 6.00015C14.0186 6.00015 14.967 6.30548 15.7572 6.82864L16.5857 6.00015L16.0857 5.50015L17.4999 4.08594L17.9999 4.58594L18.5857 4.00015L17.5857 3.00015L18.9999 1.58594ZM13 8.00015C11.5763 8.00015 10.382 8.99287 10.0761 10.3249L9.86149 11.2591L8.91903 11.0842C8.62185 11.0291 8.31475 11.0002 8 11.0002C5.23858 11.0002 3 13.2387 3 16.0002C3 18.7616 5.23858 21.0002 8 21.0002C10.7614 21.0002 13 18.7616 13 16.0002C13 15.6854 12.971 15.3783 12.9159 15.0811L12.741 14.1387L13.6753 13.9241C15.0073 13.6181 16 12.4239 16 11.0002C16 10.1714 15.6653 9.4228 15.1213 8.87881C14.5773 8.33483 13.8287 8.00015 13 8.00015ZM8 15.0002C7.44772 15.0002 7 15.4479 7 16.0002C7 16.5524 7.44772 17.0002 8 17.0002C8.55228 17.0002 9 16.5524 9 16.0002C9 15.7237 8.88917 15.4751 8.70711 15.293C8.52505 15.111 8.27642 15.0002 8 15.0002ZM5 16.0002C5 14.3433 6.34315 13.0002 8 13.0002C8.82815 13.0002 9.57952 13.337 10.1213 13.8788C10.6631 14.4206 11 15.172 11 16.0002C11 17.657 9.65685 19.0002 8 19.0002C6.34315 19.0002 5 17.657 5 16.0002Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
