import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-pen-brush')
export default class PenBrush extends WeElement<IconProps> {
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
          d="M1.99902 22.0003H5.62161C6.41726 22.0003 7.18032 21.6842 7.74293 21.1216L22.5311 6.33349L17.6658 1.46826L2.8777 16.2564C2.31509 16.819 1.99902 17.5821 1.99902 18.3777L1.99902 22.0003ZM3.99902 20.0003L3.99902 18.3777C3.99902 18.1125 4.10438 17.8581 4.29192 17.6706L6.45004 15.5125L8.48684 17.5493L6.32872 19.7074C6.14118 19.8949 5.88683 20.0003 5.62161 20.0003H3.99902ZM9.90105 16.1351L7.86425 14.0983L17.6658 4.29669L19.7026 6.33349L9.90105 16.1351Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
