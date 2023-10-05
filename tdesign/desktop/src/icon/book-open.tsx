import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-book-open')
export default class BookOpen extends WeElement<IconProps> {
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
          d="M1 2H9C10.1947 2 11.2671 2.52375 12 3.35418C12.7329 2.52376 13.8053 2 15 2H23V3L23 21H22C19.0558 21 16.8608 21.2453 15.4144 21.4864C14.6911 21.6069 14.1546 21.7265 13.805 21.8139C13.6302 21.8576 13.5021 21.8933 13.4206 21.917C13.3799 21.9289 13.3508 21.9378 13.3334 21.9432L13.3162 21.9487L13.314 21.9494L13.1623 22H10.8377L10.686 21.9494L10.6847 21.949L10.6838 21.9487L10.6666 21.9432C10.6492 21.9378 10.6201 21.9289 10.5794 21.917C10.4979 21.8933 10.3698 21.8576 10.195 21.8139C9.84535 21.7265 9.30891 21.6069 8.5856 21.4864C7.13918 21.2453 4.94416 21 2 21H1L1 3.00062L1 2ZM3 4V19.0093C5.56349 19.0572 7.53509 19.2837 8.9144 19.5136C9.69108 19.6431 10.2796 19.7735 10.68 19.8736C10.805 19.9049 10.9117 19.9332 11 19.9575V6C11 4.89543 10.1046 4 9 4H3ZM13 6V19.9575C13.0883 19.9331 13.195 19.9049 13.32 19.8736C13.7203 19.7735 14.3089 19.6431 15.0856 19.5136C16.4649 19.2837 18.4365 19.0572 21 19.0093V4H15C13.8954 4 13 4.89543 13 6ZM15 8H19V10H15V8ZM15 11H19V13H15V11Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
