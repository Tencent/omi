import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-candy')
export default class Candy extends WeElement<IconProps> {
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
        <g id="&amp;#231;&amp;#179;&amp;#150;&amp;#230;&amp;#158;&amp;#156;_candy">
          <path
            id="Union"
            d="M14.3107 3.53558C14.4642 1.84687 16.5176 1.10341 17.7167 2.30243L21.6972 6.28303C22.8963 7.48205 22.1528 9.53551 20.4641 9.68903L19.1499 9.80851C19.9489 10.9766 19.8298 12.5841 18.7927 13.6212L13.6212 18.7927C12.5841 19.8298 10.9766 19.9489 9.80851 19.1498L9.68903 20.4641C9.53551 22.1528 7.48206 22.8963 6.28303 21.6972L2.30244 17.7166C1.10341 16.5176 1.84687 14.4642 3.53558 14.3106L4.84983 14.1912C4.05081 13.0231 4.16985 11.4156 5.20695 10.3785L10.3785 5.20695C11.4156 4.16985 13.0231 4.05081 14.1912 4.84983L14.3107 3.53558ZM16.368 6.9538C16.3685 6.95424 16.3689 6.95468 16.3693 6.95512L17.0446 7.63035C17.0451 7.63084 17.0455 7.63133 17.046 7.63182C17.2558 7.8407 17.5473 7.94594 17.8422 7.91914L20.283 7.69724L16.3024 3.71665L16.0805 6.15747C16.0537 6.45242 16.159 6.74404 16.368 6.9538ZM14.9532 8.36739L13.207 6.62116C12.8164 6.23063 12.1833 6.23064 11.7927 6.62116L9.91406 8.49984L15.4998 14.0856L17.3785 12.2069C17.769 11.8164 17.769 11.1833 17.3785 10.7927L15.6326 9.04677C15.6318 9.04603 15.6311 9.0453 15.6304 9.04457L14.9551 8.36933C14.9545 8.36868 14.9538 8.36804 14.9532 8.36739ZM14.0856 15.4998L8.49984 9.91405L6.62116 11.7927C6.23064 12.1833 6.23064 12.8164 6.62116 13.2069L10.7927 17.3785C11.1833 17.769 11.8164 17.769 12.2069 17.3785L14.0856 15.4998ZM6.62392 16.0381L3.71665 16.3024L7.69724 20.283L7.96154 17.3758L6.62392 16.0381Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}
