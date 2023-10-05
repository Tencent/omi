import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-router-wave')
export default class RouterWave extends WeElement<IconProps> {
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
          d="M12.0036 3C8.46627 3 5.35709 4.83591 3.57792 7.61157L3.03828 8.45347L1.35449 7.37418L1.89413 6.53229C4.0255 3.20715 7.75648 1 12.0036 1C16.2507 1 19.9817 3.20715 22.1131 6.53229L22.6527 7.37418L20.9689 8.45347L20.4293 7.61157C18.6501 4.83591 15.5409 3 12.0036 3ZM11.9922 6.98828C10.2241 6.98828 8.6695 7.90531 7.77909 9.29443L7.23945 10.1363L5.55566 9.05704L6.09531 8.21515C7.33792 6.27656 9.51431 4.98828 11.9922 4.98828C14.4702 4.98828 16.6466 6.27656 17.8892 8.21515L18.4288 9.05704L16.745 10.1363L16.2054 9.29443C15.315 7.90531 13.7604 6.98828 11.9922 6.98828ZM12.9997 11V14H19.9997V23H3.9997V14H10.9997V11H12.9997ZM5.9997 16V21H17.9997V16H5.9997Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
