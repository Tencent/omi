import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-git-repository')
export default class GitRepository extends WeElement<IconProps> {
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
          d="M3 5.5C3 3.01472 5.01472 1 7.5 1L21 1L21 23L7.5 23C5.01472 23 3 20.9853 3 18.5L3 5.5ZM5 14.7578C5.71505 14.2791 6.57493 14 7.5 14L19 14L19 3L7.5 3C6.11929 3 5 4.11929 5 5.5L5 14.7578ZM8 16H7.5C6.11929 16 5 17.1193 5 18.5C5 19.8807 6.11929 21 7.5 21L19 21V16H14L14 20.618L11 19.118L8 20.618V16ZM12 16H10V17.382L11 16.882L12 17.382V16ZM8 5L10.0039 5V7.00391H8V5ZM8 8H10.0039L10.0039 10.0039L8 10.0039L8 8Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
