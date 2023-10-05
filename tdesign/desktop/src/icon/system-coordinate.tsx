import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-system-coordinate')
export default class SystemCoordinate extends WeElement<IconProps> {
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
          d="M13.272 1V3.65018L19.8853 7.53907V15.2847L22.35 16.58L21.4197 18.3504L18.9126 17.0329L13.272 20.3498V23H11.272V20.3498L5.58289 17.0044L2.4625 18.3082L1.69141 16.4629L4.65873 15.223V7.53907L11.272 3.65018V1H13.272ZM12.272 5.38231L7.63156 8.11109L12.2723 10.8399L16.9126 8.11113L12.272 5.38231ZM17.8853 9.85928L13.2723 12.572L13.2721 18.0296L17.8853 15.3168V9.85928ZM11.2721 18.0297L11.2723 12.572L6.65873 9.85919V15.3168L11.2721 18.0297Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
