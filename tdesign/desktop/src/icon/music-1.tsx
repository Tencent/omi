import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-music-1')
export default class Music1 extends WeElement<IconProps> {
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
          d="M22 0.846924V16.9999C22 19.2091 20.2091 20.9999 18 20.9999C15.7909 20.9999 14 19.2091 14 16.9999C14 14.7908 15.7909 12.9999 18 12.9999C18.7286 12.9999 19.4117 13.1947 20 13.5351V3.15294L8 4.86723V18.9999C8 21.2091 6.20914 22.9999 4 22.9999C1.79086 22.9999 0 21.2091 0 18.9999C0 16.7908 1.79086 14.9999 4 14.9999C4.72857 14.9999 5.41165 15.1947 6 15.5351V3.13264L22 0.846924ZM6 18.9999C6 17.8954 5.10457 16.9999 4 16.9999C2.89543 16.9999 2 17.8954 2 18.9999C2 20.1045 2.89543 20.9999 4 20.9999C5.10457 20.9999 6 20.1045 6 18.9999ZM20 16.9999C20 15.8954 19.1046 14.9999 18 14.9999C16.8954 14.9999 16 15.8954 16 16.9999C16 18.1045 16.8954 18.9999 18 18.9999C19.1046 18.9999 20 18.1045 20 16.9999Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
