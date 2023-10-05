import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-city-14')
export default class City14 extends WeElement<IconProps> {
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
          d="M12 1.92285L5.70013 4.4428L6.44291 6.29975L7 6.07692V7.99988H1V21.9999H23V7.99988H17V6.07692L17.5571 6.29975L18.2999 4.4428L12 1.92285ZM15 5.27692V19.9999H13V14.9999H11V19.9999H9V5.27692L12 4.07692L15 5.27692ZM7 19.9999H3V9.99988H7V19.9999ZM17 19.9999V9.99988H21V19.9999H17ZM13.0039 6.99793H11V9.00184H13.0039V6.99793Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
