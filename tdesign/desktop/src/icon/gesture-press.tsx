import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-gesture-press')
export default class GesturePress extends WeElement<IconProps> {
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
          d="M10.9999 2.5C13.7613 2.5 15.9999 4.73858 15.9999 7.5C15.9999 8.63542 15.6224 9.68101 14.9849 10.5204C14.9612 10.5198 14.9374 10.5195 14.9137 10.5195H13.7553V7.56573C13.7553 6.04382 12.5216 4.81006 10.9997 4.81006C9.47774 4.81006 8.24398 6.04382 8.24398 7.56574V11.6729C6.89129 10.7776 5.99986 9.24213 5.99986 7.5C5.99986 4.73858 8.23843 2.5 10.9999 2.5ZM16.9113 11.2503C17.6003 10.1663 17.9999 8.87917 17.9999 7.5C17.9999 3.63401 14.8659 0.5 10.9999 0.5C7.13387 0.5 3.99986 3.63401 3.99986 7.5C3.99986 10.3886 5.74892 12.8666 8.24398 13.9363V15.1038L6.09855 14.6268C5.34103 14.4583 4.55791 14.7731 4.12764 15.4189L3.18652 16.8314L7.48485 22.4227C8.00666 23.1014 8.81424 23.4992 9.67042 23.4992H16.7559C17.9427 23.4992 18.9963 22.7397 19.3714 21.6138L21.1538 16.2632C21.566 15.0257 21.0545 13.6687 19.928 13.0111L16.9113 11.2503ZM10.9997 6.81006C11.417 6.81006 11.7553 7.14839 11.7553 7.56573V12.5195H14.9137C14.9838 12.5195 15.0534 12.5293 15.1203 12.5483C15.1812 12.5656 15.24 12.5905 15.2951 12.6227L18.9198 14.7384C19.229 14.9189 19.3695 15.2914 19.2563 15.6311L17.4739 20.9817C17.3709 21.2908 17.0817 21.4992 16.7559 21.4992H9.67042C9.43539 21.4992 9.2137 21.39 9.07046 21.2037L5.64522 16.7482L5.74583 16.5972L10.244 17.5974V7.56574C10.244 7.14839 10.5823 6.81006 10.9997 6.81006Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
