import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-discount-filled')
export default class DiscountFilled extends WeElement<IconProps> {
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
          d="M16.4737 7.52441C15.888 6.93862 14.9382 6.93862 14.3524 7.52441C13.7666 8.11019 13.7666 9.05994 14.3524 9.64573C14.9382 10.2315 15.888 10.2315 16.4737 9.64573C17.0595 9.05994 17.0595 8.11019 16.4737 7.52441Z"
          fill="currentColor"
        />
        <path
          d="M22.0028 1.99757L22.811 12.5032L11.8791 23.435L0.56543 12.1213L11.4973 1.18945L22.0028 1.99757ZM13.292 6.46375C12.1205 7.63532 12.1205 9.53482 13.292 10.7064C14.4636 11.878 16.3631 11.878 17.5347 10.7064C18.7063 9.53482 18.7063 7.63532 17.5347 6.46375C16.3631 5.29218 14.4636 5.29218 13.292 6.46375Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
