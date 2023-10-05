import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-mosque-1')
export default class Mosque1 extends WeElement<IconProps> {
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
          d="M6 1.58594L10 5.58594V7.89656C10.1238 7.68585 10.2607 7.47803 10.4117 7.27618C11.1975 6.22567 12.3694 5.33801 14 5.07754V3.50015H16V5.07754C17.6306 5.33801 18.8025 6.22567 19.5883 7.27618C20.2464 8.15602 20.6374 9.14928 20.8403 10.0002H22V22.0002H2V5.58594L6 1.58594ZM18.7636 10.0002C18.5981 9.49514 18.3457 8.954 17.9867 8.47413C17.3664 7.64483 16.4379 7.00015 15 7.00015C13.5621 7.00015 12.6336 7.64483 12.0133 8.47413C11.6543 8.954 11.4019 9.49514 11.2364 10.0002H18.7636ZM10 12.0002V20.0002H12V14.0002H18V20.0002H20V12.0002H10ZM16 20.0002V16.0002H14V20.0002H16ZM8 20.0002V6.41436L6 4.41436L4 6.41436V20.0002H8ZM7.00391 8.00015V10.0041H5V8.00406H5.00391V8.00015H7.00391Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
