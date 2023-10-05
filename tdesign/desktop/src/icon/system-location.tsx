import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-system-location')
export default class SystemLocation extends WeElement<IconProps> {
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
          d="M1 1H23V11H21V3H3V16H12V18H1V1ZM18.5 14C16.9812 14 15.75 15.2312 15.75 16.75C15.75 18.0023 16.4847 19.2045 17.3648 20.1722C17.7723 20.6202 18.1824 20.9864 18.5 21.2466C18.8176 20.9864 19.2277 20.6202 19.6352 20.1722C20.5153 19.2045 21.25 18.0023 21.25 16.75C21.25 15.2312 20.0188 14 18.5 14ZM18.5 23.7013L17.9453 23.332L17.9432 23.3306L17.9392 23.3279L17.9271 23.3198L17.8874 23.2925C17.8542 23.2694 17.808 23.2368 17.7505 23.1949C17.6356 23.1113 17.4752 22.9906 17.2845 22.836C16.9045 22.5281 16.3963 22.0799 15.8852 21.5179C14.8903 20.4239 13.75 18.7512 13.75 16.75C13.75 14.1266 15.8766 12 18.5 12C21.1234 12 23.25 14.1266 23.25 16.75C23.25 18.7512 22.1097 20.4239 21.1148 21.5179C20.6037 22.0799 20.0955 22.5281 19.7155 22.836C19.5248 22.9906 19.3644 23.1113 19.2495 23.1949C19.192 23.2368 19.1458 23.2694 19.1126 23.2925L19.0729 23.3198L19.0608 23.3279L19.0568 23.3306L19.0553 23.3316L18.5 23.7013ZM17.25 16H19.75V18H17.25V16ZM2.25 21H12V23H2.25V21Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
