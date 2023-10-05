import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-functions-1')
export default class Functions1 extends WeElement<IconProps> {
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
          d="M2 5C2 3.89543 2.89543 3 4 3H12V5H4V11H12V13H4V21H2V5ZM22 9.99999L22 12.1363C22 12.7327 21.7339 13.298 21.2742 13.6779L19.0696 15.5L21.2742 17.3221C21.7338 17.702 22 18.2673 22 18.8637L22 21L20 21L20 18.8637L17.5 16.7974L15 18.8637L15 21L13 21L13 18.8637C13 18.2673 13.2662 17.702 13.7258 17.3221L15.9304 15.5L13.7258 13.6779C13.2662 13.298 13 12.7327 13 12.1363L13 10L15 10L15 12.1363L17.5 14.2026L20 12.1363L20 10L22 9.99999Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
