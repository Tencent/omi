import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-bridge-2')
export default class Bridge2 extends WeElement<IconProps> {
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
        <g clip-path="url(#clip0_8726_9882)">
          <path
            d="M8.29767 6.48994C7.09024 7.5876 5.91511 9.41695 4.94868 12.3162C4.86618 12.5637 4.77995 12.84 4.68856 13.1328C4.4441 13.916 4.16276 14.8173 3.81711 15.6029C3.42893 16.4851 2.87434 17.4389 2 18.0361V19H8V14C8 11.7909 9.79086 10 12 10C14.2091 10 16 11.7909 16 14V19H22V18.0361C21.1257 17.4389 20.5711 16.4851 20.1829 15.6029C19.8372 14.8173 19.5559 13.916 19.3114 13.1328C19.2201 12.84 19.1338 12.5637 19.0513 12.3162C18.0849 9.41695 16.9098 7.5876 15.7023 6.48994C14.5147 5.4103 13.2558 5 12 5C10.7442 5 9.48527 5.4103 8.29767 6.48994ZM6.95233 5.01006C8.51473 3.5897 10.2558 3 12 3C13.7442 3 15.4853 3.5897 17.0477 5.01006C18.5902 6.4124 19.9151 8.58305 20.9487 11.6838C21.0569 12.0085 21.1579 12.3323 21.2579 12.6528C21.4897 13.3958 21.7158 14.1209 22.0135 14.7974C22.4417 15.7706 22.891 16.3199 23.3816 16.5225L24 16.7778V21H14V14C14 12.8954 13.1046 12 12 12C10.8954 12 10 12.8954 10 14V21H0V16.7778L0.618354 16.5225C1.10902 16.3199 1.55829 15.7706 1.98648 14.7974C2.28416 14.1209 2.51032 13.3958 2.7421 12.6528C2.84207 12.3323 2.94307 12.0085 3.05132 11.6838C4.08489 8.58305 5.40976 6.4124 6.95233 5.01006Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}
