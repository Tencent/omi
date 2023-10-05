import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-dividers-1')
export default class Dividers1 extends WeElement<IconProps> {
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
          d="M12.9996 1V4.53223C14.9448 4.97174 16.4268 6.66549 16.4268 8.73684C16.4268 9.66591 16.1286 10.519 15.6243 11.217L18.1114 16.0951C18.7122 15.8916 19.3047 15.6572 19.8867 15.3919L20.7965 14.977L21.6263 16.7968L20.7164 17.2116C20.1619 17.4645 19.5987 17.6919 19.0285 17.8939L21.6318 23H19.3833L17.08 18.4796C13.7473 19.3072 10.2517 19.3072 6.91907 18.4796L4.61573 23H2.36719L4.97052 17.8939C4.40036 17.6919 3.83716 17.4645 3.28268 17.2116L2.3728 16.7968L3.20251 14.977L4.1124 15.3919C4.69431 15.6572 5.28689 15.8916 5.88765 16.0951L8.37486 11.2168C7.8706 10.5188 7.57252 9.66581 7.57252 8.73684C7.57252 6.66549 9.05446 4.97174 10.9996 4.53223V1H12.9996ZM7.85381 16.6451C10.5816 17.252 13.4175 17.252 16.1452 16.6451L14.0616 12.5558C13.443 12.8737 12.7402 13.0526 11.9996 13.0526C11.2591 13.0526 10.5561 12.8736 9.9375 12.5557L7.85381 16.6451ZM11.9996 6.42105C10.6278 6.42105 9.57252 7.48874 9.57252 8.73684C9.57252 9.98494 10.6278 11.0526 11.9996 11.0526C13.3715 11.0526 14.4268 9.98494 14.4268 8.73684C14.4268 7.48874 13.3715 6.42105 11.9996 6.42105Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
