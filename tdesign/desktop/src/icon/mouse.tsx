import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-mouse')
export default class Mouse extends WeElement<IconProps> {
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
          d="M4 9C4 4.58172 7.58172 1 12 1C16.4183 1 20 4.58172 20 9V15C20 19.4183 16.4183 23 12 23C7.58172 23 4 19.4183 4 15V9ZM11 3.08296C8.16229 3.55904 6 6.027 6 9H11V3.08296ZM13 3.08296V9H18C18 6.027 15.8377 3.55904 13 3.08296ZM18 11H6V15C6 18.3137 8.68629 21 12 21C15.3137 21 18 18.3137 18 15V11Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
