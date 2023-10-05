import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-history')
export default class History extends WeElement<IconProps> {
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
          d="M22.4997 12C22.4997 6.20101 17.7987 1.5 11.9997 1.5C10.202 1.5 8.50694 1.95264 7.02537 2.75098C5.63073 3.50248 4.42555 4.56009 3.49974 5.83442V2.5H1.49974V9.5H8.49974V7.5H4.78715C5.56985 6.24843 6.6697 5.21451 7.9741 4.51164C9.17133 3.86651 10.5412 3.5 11.9997 3.5C16.6942 3.5 20.4997 7.30558 20.4997 12C20.4997 16.6944 16.6942 20.5 11.9997 20.5C7.60814 20.5 3.9933 17.1687 3.54632 12.896L3.44227 11.9014L1.45312 12.1095L1.55717 13.104C2.10958 18.3846 6.57341 22.5 11.9997 22.5C17.7987 22.5 22.4997 17.799 22.4997 12ZM10.9997 6V12.4142L14.4997 15.9142L15.914 14.5L12.9997 11.5858V6H10.9997Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
