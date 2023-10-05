import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-loudspeaker')
export default class Loudspeaker extends WeElement<IconProps> {
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
          d="M16 1.38184V15.4999L8.8 12.4999H7.88925L7.71278 13.9999H9.5V15.9999H7.47749L6.88925 20.9999H2V4.99987H8.76393L16 1.38184ZM5.87546 12.4999H4V18.9999H5.11075L5.87546 12.4999ZM4 10.4999H9.2L14 12.4999V4.6179L9.23607 6.99987H4V10.4999ZM20.3329 4.58566L21.04 5.29276C21.9769 6.22968 22.3684 7.6354 22.3684 8.91669C22.3684 10.198 21.9769 11.6037 21.04 12.5406L20.3329 13.2477L18.9187 11.8335L19.6258 11.1264C20.0695 10.6827 20.3684 9.86189 20.3684 8.91669C20.3684 7.97148 20.0695 7.15072 19.6258 6.70698L18.9187 5.99987L20.3329 4.58566ZM18.2496 6.25454L18.9567 6.96165C20.0375 8.0425 20.0375 9.79491 18.9567 10.8758L18.2496 11.5829L16.8354 10.1687L17.5425 9.46154C17.8423 9.16174 17.8423 8.67566 17.5425 8.37586L16.8354 7.66875L18.2496 6.25454Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
