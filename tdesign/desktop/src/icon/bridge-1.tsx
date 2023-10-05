import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-bridge-1')
export default class Bridge1 extends WeElement<IconProps> {
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
          d="M1 1.99902H7V5.53015C7.20819 5.68425 7.52403 5.893 7.94721 6.1046C8.82493 6.54345 10.1728 6.99902 12 6.99902C13.8272 6.99902 15.1751 6.54345 16.0528 6.1046C16.476 5.893 16.7918 5.68425 17 5.53015V1.99987H23V22.0003H17V16.999H7V21.9994H1V1.99902ZM7 14.999H11V8.95961C9.31362 8.82491 7.99605 8.36508 7.05279 7.89345C7.03506 7.88459 7.01746 7.87572 7 7.86685V14.999ZM13 8.95961V14.999H17V7.86685C16.9825 7.87572 16.9649 7.88459 16.9472 7.89345C16.004 8.36508 14.6864 8.82491 13 8.95961ZM3 3.99902V19.9994H5V3.99902H3ZM19 3.99987V20.0003H21V3.99987H19Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
