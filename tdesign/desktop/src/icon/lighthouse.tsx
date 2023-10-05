import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-lighthouse')
export default class Lighthouse extends WeElement<IconProps> {
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
          d="M8.99956 1V2H14.9996V1H16.9996V10C16.9996 12.3933 17.4817 15.311 17.9781 17.669C18.2246 18.8397 18.4712 19.8569 18.656 20.5807C18.7483 20.9425 18.8251 21.2304 18.8786 21.4271C18.9053 21.5255 18.9262 21.6009 18.9403 21.6514L18.9562 21.7079L18.96 21.7216L18.9609 21.7247L19.3253 23H13.2188L12.2188 19H11.7803L10.7803 23H4.67383L5.03801 21.7254L5.03908 21.7216L5.04295 21.7079L5.05882 21.6514C5.0729 21.6009 5.09379 21.5255 5.12052 21.4271C5.17398 21.2304 5.25078 20.9425 5.34314 20.5807C5.52796 19.8569 5.77454 18.8397 6.02101 17.669C6.51742 15.311 6.99956 12.3933 6.99956 10V1H8.99956ZM8.99956 7.0024V10C8.99956 12.6067 8.4817 15.689 7.97811 18.081C7.73303 19.2451 7.48806 20.2607 7.30021 21H9.21878L10.2188 17H13.7803L14.7803 21H16.6989C16.5111 20.2607 16.2661 19.2451 16.021 18.081C15.5174 15.689 14.9996 12.6067 14.9996 10V7.0024H8.99956ZM14.9996 5V4H8.99956V5H14.9996ZM10.9996 8.99805H13.0035V11.002H10.9996V8.99805Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
