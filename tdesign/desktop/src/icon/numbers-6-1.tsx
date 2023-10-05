import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-numbers-6-1')
export default class Numbers61 extends WeElement<IconProps> {
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
          d="M12.4207 3.5H14.7297L11.2571 9.55216C11.4998 9.51778 11.7478 9.5 12 9.5C14.8995 9.5 17.25 11.8505 17.25 14.75C17.25 17.6495 14.8995 20 12 20C9.10051 20 6.75 17.6495 6.75 14.75C6.75 13.9812 6.91589 13.2484 7.21478 12.5878C7.34627 12.2972 7.50351 12.0206 7.68362 11.761L12.4207 3.5ZM9.01877 13.4532C8.84617 13.8492 8.75 14.2871 8.75 14.75C8.75 16.5449 10.2051 18 12 18C13.7949 18 15.25 16.5449 15.25 14.75C15.25 12.9551 13.7949 11.5 12 11.5C10.9218 11.5 9.96475 12.0251 9.37295 12.8359L9.01877 13.4532Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
