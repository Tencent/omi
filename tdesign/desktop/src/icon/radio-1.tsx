import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-radio-1')
export default class Radio1 extends WeElement<IconProps> {
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
          d="M13.3416 2.44706L6.23607 5.99985H23V21.9998H22V20.9998C22 21.9998 22.0001 21.9998 22 21.9998H1L1 6.38181L12.4472 0.658203L13.3416 2.44706ZM21 19.9998V7.99985L3 7.99984L3 19.9998H21ZM9 11.9998C7.89543 11.9998 7 12.8953 7 13.9998C7 15.1044 7.89543 15.9998 9 15.9998C10.1046 15.9998 11 15.1044 11 13.9998C11 12.8953 10.1046 11.9998 9 11.9998ZM5 13.9998C5 11.7907 6.79086 9.99984 9 9.99984C11.2091 9.99984 13 11.7907 13 13.9998C13 16.209 11.2091 17.9998 9 17.9998C6.79086 17.9998 5 16.209 5 13.9998ZM15 10.9998H19V12.9998H15V10.9998ZM15 14.9998H19V16.9998H15V14.9998Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
