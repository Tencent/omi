import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-gesture-ranslation')
export default class GestureRanslation extends WeElement<IconProps> {
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
        <g clip-path="url(#clip0_8792_6967)">
          <path
            d="M9.8654 2.18609C10.0504 0.948859 11.1176 0 12.4064 0C13.7186 0 14.801 0.983655 14.9566 2.25382C15.1456 2.20952 15.3426 2.18609 15.5451 2.18609C16.9642 2.18609 18.1145 3.33644 18.1145 4.75547V5.58561C18.297 5.54447 18.4868 5.52275 18.6817 5.52275C20.0995 5.52275 21.2488 6.6721 21.2488 8.08989V15C21.2488 19.4183 17.6671 23 13.2488 23H11.8984C8.26285 23 5.08443 20.5486 4.16086 17.0323L2.89247 12.2032C2.54975 10.8984 3.40075 9.58074 4.73105 9.35646C5.45737 9.234 6.18339 9.46825 6.69823 9.9599V4.75547C6.69823 3.33644 7.84859 2.18609 9.26762 2.18609H9.8654ZM9.837 4.75547C9.837 4.44101 9.58208 4.18609 9.26762 4.18609C8.95316 4.18609 8.69823 4.44101 8.69823 4.75547V13.5045C8.69823 14.5761 7.26566 14.8779 6.80879 13.9667L5.36861 11.4723C5.3069 11.3654 5.18526 11.3081 5.06355 11.3286C4.89229 11.3575 4.78273 11.5271 4.82685 11.6951L6.09525 16.5242C6.78793 19.1614 9.17174 21 11.8984 21H13.2488C16.5625 21 19.2488 18.3137 19.2488 15V8.08989C19.2488 7.77667 18.9949 7.52275 18.6817 7.52275C18.3684 7.52275 18.1145 7.77667 18.1145 8.08989V12H16.1145V4.75547C16.1145 4.44101 15.8596 4.18609 15.5451 4.18609C15.2307 4.18609 14.9758 4.44101 14.9758 4.75547V12H12.9758V2.56938C12.9758 2.25492 12.7208 2 12.4064 2C12.0919 2 11.837 2.25492 11.837 2.56938V12H9.837V4.75547Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}
