import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-tower')
export default class Tower extends WeElement<IconProps> {
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
          d="M13 1V2H16V8H15.0226C15.102 9.87239 15.3927 12.3528 15.9258 14.7313C16.2426 16.1448 16.64 17.499 17.1179 18.6556C17.4733 19.5155 17.8587 20.2302 18.2633 20.7737C18.3376 20.856 18.4049 20.9318 18.4644 21H20V23H14V21H15.6744C15.5853 20.9183 15.4935 20.8361 15.3992 20.754C14.8585 20.2831 14.2581 19.833 13.6504 19.5049C13.0353 19.1728 12.4761 19 12 19C11.5239 19 10.9647 19.1728 10.3496 19.5049C9.74188 19.833 9.14146 20.2831 8.60079 20.754C8.50653 20.8361 8.41471 20.9183 8.32561 21H10V23H4V21H5.53562C5.59513 20.9318 5.66236 20.856 5.73673 20.7737C6.14129 20.2302 6.52668 19.5155 6.88206 18.6556C7.36004 17.499 7.75739 16.1448 8.07421 14.7313C8.60731 12.3528 8.89796 9.8724 8.97739 8H8V2H11V1H13ZM10.979 8C10.8994 10.0097 10.5914 12.6454 10.0258 15.1687C9.82635 16.0585 9.59305 16.9428 9.32324 17.7867C9.34854 17.7727 9.37391 17.7588 9.39934 17.7451C10.1732 17.3272 11.0681 17 12 17C12.9319 17 13.8268 17.3272 14.6007 17.7451C14.6261 17.7588 14.6515 17.7727 14.6768 17.7867C14.407 16.9428 14.1737 16.0585 13.9742 15.1687C13.4086 12.6454 13.1006 10.0097 13.021 8H10.979ZM10 6H14V4H10V6Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
