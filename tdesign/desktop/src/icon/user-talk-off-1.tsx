import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-user-talk-off-1')
export default class UserTalkOff1 extends WeElement<IconProps> {
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
          d="M3 1.58594L22.4142 21.0002L21 22.4144L16.9614 18.3758C16.9869 18.5803 17 18.7887 17 19.0002V21.0002H15V19.0002C15 17.3433 13.6569 16.0002 12 16.0002H5C3.34315 16.0002 2 17.3433 2 19.0002V21.0002H0V19.0002C0 16.2387 2.23858 14.0002 5 14.0002H12C12.2115 14.0002 12.4198 14.0133 12.6244 14.0388L10.265 11.6794C9.71549 11.8868 9.12026 12.0002 8.5 12.0002C5.73858 12.0002 3.5 9.76157 3.5 7.00015C3.5 6.37989 3.61337 5.78466 3.82075 5.23511L1.58579 3.00015L3 1.58594ZM5.50116 6.91553C5.50039 6.94363 5.5 6.97184 5.5 7.00015C5.5 8.65701 6.84315 10.0002 8.5 10.0002C8.52831 10.0002 8.55652 9.99976 8.58462 9.99899L5.50116 6.91553ZM8.49974 4.00015C8.37905 4.00015 8.26042 4.00723 8.14419 4.0209L7.15104 4.13775L6.91735 2.15145L7.91049 2.0346C8.10412 2.01182 8.30078 2.00015 8.49974 2.00015C11.2612 2.00015 13.4997 4.23873 13.4997 7.00015C13.4997 7.19911 13.4881 7.39577 13.4653 7.5894L13.3484 8.58255L11.3621 8.34885L11.479 7.3557C11.4927 7.23947 11.4997 7.12085 11.4997 7.00015C11.4997 5.3433 10.1566 4.00015 8.49974 4.00015ZM20.5752 5.64821L21.0731 6.51545C21.6824 7.57677 22.0028 8.77929 22.0024 10.0031C22.002 11.2269 21.6807 12.4291 21.0707 13.49L20.5722 14.3569L18.8384 13.36L19.3369 12.4931C19.7726 11.7353 20.0021 10.8765 20.0024 10.0024C20.0027 9.12824 19.7738 8.2693 19.3386 7.51122L18.8407 6.64397L20.5752 5.64821ZM17.5402 7.39061L18.0381 8.25786C18.3428 8.78852 18.503 9.38977 18.5028 10.0017C18.5025 10.6136 18.3419 11.2147 18.0369 11.7452L17.5384 12.612L15.8046 11.6151L16.3031 10.7482C16.4338 10.5208 16.5027 10.2632 16.5028 10.001C16.5028 9.73873 16.4342 9.48105 16.3036 9.25362L15.8057 8.38638L17.5402 7.39061Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
