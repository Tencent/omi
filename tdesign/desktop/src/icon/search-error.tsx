import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-search-error')
export default class SearchError extends WeElement<IconProps> {
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
          d="M15.0966 5.90381C12.5582 3.3654 8.44267 3.3654 5.90426 5.90381C4.634 7.17406 3.99959 8.83721 4.00045 10.5034L4.00097 11.5034L2.00097 11.5044L2.00045 10.5044C1.99933 8.32916 2.82939 6.15025 4.49005 4.48959C7.8095 1.17014 13.1914 1.17014 16.5109 4.48959C19.5911 7.56983 19.8131 12.4259 17.1768 15.7621L22.5213 21.1066L21.1071 22.5208L15.7626 17.1763C14.2238 18.392 12.3609 19 10.5005 19H9.50045V17H10.5005C12.1655 17 13.8272 16.3656 15.0966 15.0962C17.6351 12.5578 17.6351 8.44221 15.0966 5.90381ZM1.67203 13.2574L4.50045 16.0858L7.32888 13.2574L8.74309 14.6716L5.91467 17.5L8.74309 20.3284L7.32888 21.7426L4.50045 18.9142L1.67203 21.7426L0.257812 20.3284L3.08624 17.5L0.257812 14.6716L1.67203 13.2574Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
