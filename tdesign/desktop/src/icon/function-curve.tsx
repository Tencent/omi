import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-function-curve')
export default class FunctionCurve extends WeElement<IconProps> {
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
          d="M8 2L8 15H16.7899C16.9078 14.7422 17.0212 14.4752 17.1302 14.1998C18.3233 11.1848 18.8713 7.46033 19.0013 4.94832L19.053 3.94965L21.0503 4.05302L20.9987 5.05168C20.862 7.69247 20.29 11.6504 18.9898 14.9358C18.9814 14.9572 18.9728 14.9786 18.9643 15H22V17H18.0154C17.5388 17.8431 16.9861 18.6101 16.3446 19.2426C15.1852 20.3857 13.715 21.1037 11.9351 20.9879C10.3655 20.8857 9.06814 20.2149 8 19.2224V22H6V17H2V15H5.20296C5.13734 14.8481 5.07384 14.6958 5.0124 14.5432C3.71255 11.3156 3.13875 7.54614 3.00151 5.05501L2.94651 4.05652L4.94348 3.94651L4.99849 4.94499C5.09105 6.6252 5.39678 8.91344 6 11.1647L6 2H8ZM8.65924 17C9.61785 18.1876 10.7504 18.9065 12.0649 18.9921C13.165 19.0636 14.1014 18.6456 14.9404 17.8184C15.1847 17.5775 15.4186 17.3035 15.642 17H8.65924Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
