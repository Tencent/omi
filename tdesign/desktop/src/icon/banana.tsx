import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-banana')
export default class Banana extends WeElement<IconProps> {
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
        <g id="&amp;#233;&amp;#166;&amp;#153;&amp;#232;&amp;#149;&amp;#137;_banana">
          <path
            id="Union"
            d="M17.4873 0.612793V7.76385C17.1825 8.35587 16.7558 9.02705 15.9825 9.60963C15.1213 10.2584 13.7403 10.8629 11.4273 11.002C8.87354 11.1556 6.76669 9.85152 6.18574 9.28456C5.59502 8.70805 4.76628 8.78189 4.22561 9.22122C3.71515 9.636 3.4873 10.3035 3.4873 11.0002C3.4873 11.728 3.55841 12.404 3.75117 13.0236C3.50476 12.9281 3.22689 12.8799 2.933 12.9215C2.54926 12.9757 2.23929 13.1691 2.01735 13.4137C1.60729 13.8656 1.4873 14.4858 1.4873 15.0002C1.4873 19.2385 6.53487 24.7667 14.8099 21.9468L14.8335 21.9387L14.8567 21.9295C19.282 20.1701 21.5125 17.4636 22.4455 14.6982C23.3335 12.0661 23.0076 9.49823 22.4873 7.84253V2.27947L17.4873 0.612793ZM8.75516 14.6252C7.28018 14.1582 6.51287 13.7075 6.0894 13.216C5.73011 12.799 5.52499 12.2411 5.49203 11.2847C6.72834 12.1463 8.94975 13.1546 11.5473 12.9984C13.1543 12.9018 14.445 12.6005 15.4879 12.1675C14.868 13.0517 14.2161 13.6661 13.5595 14.0807C12.1481 14.9719 10.5358 15.0511 8.75516 14.6252ZM20.4873 3.72098V8.16251L20.5386 8.31646C20.9895 9.66909 21.293 11.8577 20.5504 14.0589C19.8253 16.2081 18.0613 18.4969 14.1411 20.0617C7.17321 22.4233 3.58541 17.8851 3.48929 15.1136C4.89303 15.7577 6.47265 16.1353 7.79989 16.4526C7.95415 16.4895 8.105 16.5256 8.25176 16.5611C10.3617 17.0725 12.5949 17.0551 14.6273 15.7718C16.636 14.5035 18.2634 12.1136 19.4428 8.29535L19.4873 8.15115V3.38765L20.4873 3.72098Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}
