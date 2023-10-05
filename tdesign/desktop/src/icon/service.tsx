import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-service')
export default class Service extends WeElement<IconProps> {
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
          d="M2 11C2 5.47715 6.47715 1 12 1C17.5228 1 22 5.47715 22 11V16.1538C22 17.7996 20.58 19 19 19H16V11H20C20 6.58172 16.4183 3 12 3C7.58172 3 4 6.58172 4 11H8V19H6.06301C6.28503 19.8626 7.06808 20.5 8 20.5H9.56367C9.87991 20.0466 10.4053 19.75 11 19.75H13C13.9665 19.75 14.75 20.5335 14.75 21.5C14.75 22.4665 13.9665 23.25 13 23.25H11C10.4053 23.25 9.87991 22.9534 9.56367 22.5H8C5.90559 22.5 4.18714 20.8903 4.0143 18.8406C2.87438 18.4625 2 17.4453 2 16.1538V11ZM6 17V13H4V16.1538C4 16.5473 4.37084 17 5 17H6ZM20 13H18V17H19C19.6292 17 20 16.5473 20 16.1538V13Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
