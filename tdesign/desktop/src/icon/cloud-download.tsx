import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-cloud-download')
export default class CloudDownload extends WeElement<IconProps> {
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
          d="M4.59837 6.28287C5.1802 2.71919 8.27221 0 12 0C15.7278 0 18.8198 2.71919 19.4016 6.28287C22.0637 7.09632 24 9.57116 24 12.5C24 15.0274 22.5573 17.2161 20.4552 18.2907L19.5648 18.7459L18.6544 16.9651L19.5448 16.5099C21.0044 15.7638 22 14.2473 22 12.5C22 10.2915 20.408 8.45275 18.3089 8.07232L17.538 7.93262L17.4891 7.15072C17.3095 4.27638 14.9202 2 12 2C9.0798 2 6.69051 4.27638 6.51088 7.15072L6.46201 7.93262L5.69115 8.07232C3.59195 8.45275 2 10.2915 2 12.5C2 14.2473 2.99564 15.7638 4.45517 16.5099L5.34557 16.9651L4.43523 18.7459L3.54483 18.2907C1.44268 17.2161 0 15.0274 0 12.5C0 9.57116 1.93625 7.09632 4.59837 6.28287ZM13 10L13 19.5858L16 16.5858L17.4142 18L12 23.4142L6.58579 18L8 16.5858L11 19.5858L11 10H13Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
