import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-microphone-2')
export default class Microphone2 extends WeElement<IconProps> {
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
          d="M16 3C13.2386 3 11 5.23858 11 8C11 10.7614 13.2386 13 16 13C18.7614 13 21 10.7614 21 8C21 5.23858 18.7614 3 16 3ZM9.00903 7.64141C9.19569 3.94206 12.2543 1 16 1C19.866 1 23 4.13401 23 8C23 11.7457 20.058 14.8043 16.3586 14.991L7.13459 22.2733C7.12851 22.2784 7.12204 22.2837 7.11519 22.2892C7.08924 22.3101 7.0576 22.3341 7.02027 22.3599C6.94571 22.4115 6.84739 22.471 6.72539 22.5272C6.47859 22.641 6.14119 22.7384 5.72376 22.7339C4.87285 22.7249 3.88753 22.3011 2.79321 21.2075C1.69868 20.1138 1.27455 19.1282 1.26576 18.2766C1.26145 17.859 1.35907 17.5215 1.47296 17.2747C1.52927 17.1527 1.58879 17.0544 1.64036 16.9798C1.66619 16.9425 1.6902 16.9109 1.71109 16.8849C1.71659 16.8781 1.72187 16.8717 1.72693 16.8656L9.00903 7.64141ZM9.40878 10.3627L3.28689 18.1173C3.28025 18.1333 3.26485 18.1779 3.26566 18.256C3.2673 18.4153 3.34317 18.9297 4.20692 19.7928C5.0709 20.6562 5.58558 20.7323 5.74509 20.734C5.82278 20.7349 5.86729 20.7197 5.88324 20.7131L13.6373 14.5912C11.672 13.8867 10.1134 12.3281 9.40878 10.3627ZM10.4142 15L8 17.4142L6.58579 16L9 13.5858L10.4142 15Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
