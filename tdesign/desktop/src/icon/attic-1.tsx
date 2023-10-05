import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-attic-1')
export default class Attic1 extends WeElement<IconProps> {
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
          d="M11.1687 1.44358L11.9998 0.201172L12.8307 1.44369L12.836 1.45157L12.8567 1.482C12.8756 1.50965 12.9047 1.55177 12.9433 1.60679C13.0206 1.71687 13.136 1.87838 13.285 2.07894C13.5835 2.4806 14.0148 3.03602 14.5433 3.64714C15.6143 4.88573 17.0267 6.28549 18.4974 7.13305C18.9634 7.40164 19.4534 7.49992 19.998 7.49992H20.998V9.49992H19.998C19.6722 9.49992 19.3373 9.47531 18.9981 9.41349L18.998 16.9999H20.998V18.9999H19.998V21.9999H17.998L17.9981 18.9999H12.998L12.998 21.9999H10.998L10.998 18.9999H5.99805L5.99805 21.9999H3.99805L3.99805 18.9999L2.99805 18.9999L2.99805 16.9999L5.00016 16.9999L4.99838 9.41351C4.65896 9.47532 4.32397 9.49992 3.99805 9.49992H2.99805L2.99805 7.49992H3.99805C4.54289 7.49992 5.03293 7.40174 5.49901 7.13334C6.97041 6.28599 8.38358 4.88613 9.45513 3.64739C9.98384 3.03619 10.4154 2.48067 10.7141 2.07894C10.8632 1.87834 10.9787 1.71679 11.056 1.60669C11.0946 1.55166 11.1237 1.50953 11.1426 1.48187L11.1634 1.45144L11.1679 1.44474L11.1687 1.44358ZM6.99828 8.99988L7.00016 16.9999H8.99962V14.7999C8.99962 13.1431 10.3428 11.7999 11.9996 11.7999C13.6565 11.7999 14.9996 13.1431 14.9996 14.7999V16.9999H16.9981V8.9995L6.99828 8.99988ZM15.0064 6.99958C14.2567 6.31561 13.5861 5.59799 13.0304 4.95529C12.6303 4.49262 12.2825 4.06015 11.9995 3.69379C11.7163 4.06029 11.3681 4.49295 10.9677 4.95583C10.4118 5.59846 9.74114 6.31596 8.99126 6.9998L15.0064 6.99958ZM12.9996 16.9999V14.7999C12.9996 14.2476 12.5519 13.7999 11.9996 13.7999C11.4473 13.7999 10.9996 14.2476 10.9996 14.7999V16.9999H12.9996Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
