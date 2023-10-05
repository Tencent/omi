import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-command')
export default class Command extends WeElement<IconProps> {
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
          d="M6.5 4.5C7.60457 4.5 8.5 5.39543 8.5 6.5V8.5H6.5C5.39543 8.5 4.5 7.60457 4.5 6.5C4.5 5.39543 5.39543 4.5 6.5 4.5ZM10.5 8.5V6.5C10.5 4.29086 8.70914 2.5 6.5 2.5C4.29086 2.5 2.5 4.29086 2.5 6.5C2.5 8.70914 4.29086 10.5 6.5 10.5H8.5V13.5H6.5C4.29086 13.5 2.5 15.2909 2.5 17.5C2.5 19.7091 4.29086 21.5 6.5 21.5C8.70914 21.5 10.5 19.7091 10.5 17.5V15.5H13.5V17.5C13.5 19.7091 15.2909 21.5 17.5 21.5C19.7091 21.5 21.5 19.7091 21.5 17.5C21.5 15.2909 19.7091 13.5 17.5 13.5H15.5V10.5H17.5C19.7091 10.5 21.5 8.70914 21.5 6.5C21.5 4.29086 19.7091 2.5 17.5 2.5C15.2909 2.5 13.5 4.29086 13.5 6.5V8.5H10.5ZM10.5 10.5H13.5V13.5H10.5V10.5ZM15.5 8.5V6.5C15.5 5.39543 16.3954 4.5 17.5 4.5C18.6046 4.5 19.5 5.39543 19.5 6.5C19.5 7.60457 18.6046 8.5 17.5 8.5H15.5ZM15.5 15.5H17.5C18.6046 15.5 19.5 16.3954 19.5 17.5C19.5 18.6046 18.6046 19.5 17.5 19.5C16.3954 19.5 15.5 18.6046 15.5 17.5V15.5ZM8.5 15.5V17.5C8.5 18.6046 7.60457 19.5 6.5 19.5C5.39543 19.5 4.5 18.6046 4.5 17.5C4.5 16.3954 5.39543 15.5 6.5 15.5H8.5Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
