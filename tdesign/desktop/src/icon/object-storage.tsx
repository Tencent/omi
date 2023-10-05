import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-object-storage')
export default class ObjectStorage extends WeElement<IconProps> {
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
          d="M12 4C9.23858 4 7 6.23858 7 9V11H6C5.21973 11 4.19477 11.3021 3.38059 11.9636C2.59748 12.5999 2 13.5722 2 15C2 16.4139 2.61488 17.3879 3.41917 18.0319C4.25615 18.7021 5.2856 19 6 19C6.97324 19 8.23889 18.9845 9.26283 18.4785C9.74814 18.2387 10.1638 17.8939 10.4663 17.3819C10.7717 16.865 11 16.1125 11 15V13.9142L9.5 15.4142L8.08579 14L12 10.0858L15.9142 14L14.5 15.4142L13 13.9142V15C13 16.3875 12.7136 17.51 12.1881 18.3993C11.6597 19.2936 10.9283 19.8863 10.1489 20.2715C8.673 21.0009 6.97712 21.0003 6.05451 21C6.03603 21 6.01786 21 6 21C4.83208 21 3.36153 20.5479 2.16909 19.5931C0.943957 18.6121 0 17.0861 0 15C0 12.9278 0.902517 11.4001 2.11941 10.4114C2.99499 9.69998 4.02826 9.26965 5 9.09318V9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V9.09318C19.9717 9.26965 21.005 9.69998 21.8806 10.4114C23.0975 11.4001 24 12.9278 24 15C24 17.0756 23.0934 18.6139 21.795 19.6069C20.529 20.5749 18.93 21 17.5 21H13.5V19H17.5C18.57 19 19.721 18.6751 20.58 18.0181C21.4066 17.3861 22 16.4244 22 15C22 13.5722 21.4025 12.5999 20.6194 11.9636C19.8052 11.3021 18.7803 11 18 11H17V9C17 6.23858 14.7614 4 12 4Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
