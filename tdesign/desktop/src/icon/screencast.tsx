import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-screencast')
export default class Screencast extends WeElement<IconProps> {
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
          d="M1 1.99951L23.0001 1.99951L23.0001 18.9995H17.0001V16.9995L21.0001 16.9995L21.0001 3.99951L3.00013 3.99951L3.00099 16.9995L7.00006 16.9995L7.00007 18.9995L1.00112 18.9995L1 1.99951ZM5.58581 21.9999L12 15.5853L18.4142 21.9994L5.58581 21.9999ZM10.4142 19.9997L13.5859 19.9996L12.0001 18.4137L10.4142 19.9997Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
