import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-map-distance')
export default class MapDistance extends WeElement<IconProps> {
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
          d="M2 2H22V22H2V2ZM4 4V20H20V4H4ZM16.5 7C16.2239 7 16 7.22386 16 7.5C16 7.72197 16.1571 8.04524 16.488 8.40723C16.492 8.41159 16.496 8.41594 16.5 8.42026C16.504 8.41595 16.508 8.41161 16.512 8.40726C16.8429 8.04533 17 7.72205 17 7.5C17 7.22386 16.7761 7 16.5 7ZM16.5 10.9636C16.2064 10.7617 15.9055 10.5685 15.6302 10.3419C15.4636 10.2049 15.2393 10.0054 15.012 9.75673C14.5929 9.29837 14 8.49664 14 7.5C14 6.11929 15.1193 5 16.5 5C17.8807 5 19 6.11929 19 7.5C19 8.4967 18.4071 9.29842 17.988 9.7568C17.7606 10.0055 17.5364 10.2049 17.3698 10.342C17.0944 10.5686 16.7935 10.7617 16.5 10.9636ZM8.5 10C8.22386 10 8 10.2239 8 10.5C8 10.722 8.1571 11.0452 8.48804 11.4072C8.49203 11.4116 8.49603 11.4159 8.50002 11.4203C8.50401 11.4159 8.50799 11.4116 8.51197 11.4073C8.84288 11.0453 9 10.722 9 10.5C9 10.2239 8.77614 10 8.5 10ZM8.49996 13.9636C8.27896 13.8116 8.05286 13.6653 7.83779 13.505C7.78551 13.466 7.7142 13.4111 7.63016 13.3419C7.46359 13.2049 7.23933 13.0054 7.01196 12.7567C6.5929 12.2984 6 11.4966 6 10.5C6 9.11929 7.11929 8 8.5 8C9.88071 8 11 9.11929 11 10.5C11 11.4967 10.4071 12.2984 9.98803 12.7568C9.76065 13.0055 9.53638 13.2049 9.3698 13.342C9.28576 13.4111 9.21445 13.466 9.16216 13.505C8.94709 13.6654 8.72098 13.8116 8.49996 13.9636ZM19.7875 13.5852L13.9148 15.7875L13.2125 13.9148L19.0852 11.7125L19.7875 13.5852ZM11.7875 16.5852L5.91479 18.7875L5.21255 16.9148L11.0852 14.7125L11.7875 16.5852Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
