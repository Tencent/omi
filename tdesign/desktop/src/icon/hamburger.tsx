import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-hamburger')
export default class Hamburger extends WeElement<IconProps> {
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
        <g id="&amp;#230;&amp;#177;&amp;#137;&amp;#229;&amp;#160;&amp;#161;&amp;#229;&amp;#140;&amp;#133;_hamburger">
          <path
            id="Union"
            d="M5.70574 4.07265C7.36549 2.69952 9.60453 2 12 2C14.3955 2 16.6346 2.69952 18.2943 4.07265C19.9732 5.46161 21 7.49484 21 10V11H3.00003V10C3.00003 7.49484 4.02685 5.46161 5.70574 4.07265ZM5.07406 9H18.926C18.707 7.56829 18.0146 6.43696 17.0194 5.61364C15.7838 4.59135 14.0228 4 12 4C9.97726 4 8.21631 4.59135 6.98062 5.61364C5.98546 6.43696 5.29309 7.56829 5.07406 9ZM6.00003 11.7981L9.00003 13.7981L12 11.7981L15 13.7982L18 11.7981L22.3868 14.7226L21.2774 16.3868L18 14.2018L15 16.2019L12 14.2018L9.00003 16.2019L6.00003 14.2019L2.72268 16.3868L1.61328 14.7226L6.00003 11.7981ZM3.00003 17H21V18C21 20.7614 18.7615 23 16 23H8.00003C5.23861 23 3.00003 20.7614 3.00003 18V17ZM5.17074 19C5.58257 20.1652 6.69381 21 8.00003 21H16C17.3062 21 18.4175 20.1652 18.8293 19H5.17074Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}
