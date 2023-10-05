import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-watermelon')
export default class Watermelon extends WeElement<IconProps> {
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
        <g id="&amp;#232;&amp;#165;&amp;#191;&amp;#231;&amp;#147;&amp;#156;_watermelon">
          <path
            id="Union"
            d="M17.9946 0.59082L1.59082 16.9946L2.28748 17.7017C3.32792 18.7576 4.81049 19.8194 6.41278 20.62C8.00658 21.4163 9.81015 21.9998 11.488 21.9998C17.8458 21.9998 22.9998 16.8458 22.9998 10.488C22.9998 8.81017 22.4163 7.00659 21.62 5.41278C20.8194 3.81048 19.7577 2.32791 18.7016 1.28747L17.9946 0.59082ZM20.9408 9.66091C20.9796 9.94539 20.9998 10.222 20.9998 10.488C20.9998 15.7412 16.7412 19.9998 11.488 19.9998C11.222 19.9998 10.9454 19.9796 10.6609 19.9408C16.0821 19.3922 20.3922 15.0821 20.9408 9.66091ZM17.9035 3.51032C18.3671 4.29781 18.6493 5.27542 18.8101 6.21714C18.9175 6.8457 18.9638 7.41526 18.9837 7.82761C18.9936 8.03296 18.9969 8.198 18.9981 8.31075C18.9986 8.36125 18.9987 8.40115 18.9988 8.43244L18.9989 8.44357C18.9989 8.45743 18.999 8.47714 18.9992 8.49321C18.9993 8.49607 18.9994 8.50416 18.9998 8.51518C18.9851 13.7559 14.7322 17.9998 9.48802 17.9998H9.47022L9.45433 18.0004L9.45296 18.0004L9.42857 18.0009C9.40692 18.0013 9.37201 18.0016 9.32501 18.0014C9.23092 18.001 9.08881 17.9983 8.90792 17.9888C8.54524 17.9699 8.0317 17.9239 7.43985 17.8164C6.55047 17.6547 5.52481 17.3612 4.57295 16.8409L17.9035 3.51032ZM17.0018 7.99785H14.9979V10.0018H17.0018V7.99785ZM14.0018 10.9979H11.9979V13.0018H14.0018V10.9979ZM11.0018 13.9979H8.99786V16.0018H11.0018V13.9979Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}
