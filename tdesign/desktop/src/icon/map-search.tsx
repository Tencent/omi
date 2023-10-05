import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-map-search')
export default class MapSearch extends WeElement<IconProps> {
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
          d="M7.88647 1.85889L15.9717 5.39618L22 2.38204V10.0001H20V5.61811L17 7.11811V10.0001H15V7.15409L9 4.52909V15.382L11.3447 16.5544L10.4503 18.3433L8.04378 17.14L2 20.7663V5.97942L7.88647 1.85889ZM7 15.4339V4.92073L4 7.02073V17.2339L7 15.4339ZM17.25 13.5001C18.7688 13.5001 20 14.7313 20 16.2501C20 17.0087 19.6929 17.6955 19.1961 18.193C19.1935 18.1957 19.1908 18.1983 19.1882 18.201C18.691 18.6949 18.0062 19.0001 17.25 19.0001C15.7312 19.0001 14.5 17.7689 14.5 16.2501C14.5 14.7313 15.7312 13.5001 17.25 13.5001ZM21.2419 18.8254C21.7216 18.0835 22 17.1993 22 16.2501C22 13.6267 19.8734 11.5001 17.25 11.5001C14.6266 11.5001 12.5 13.6267 12.5 16.2501C12.5 18.8734 14.6266 21.0001 17.25 21.0001C18.2004 21.0001 19.0857 20.7209 19.8282 20.2401L21.4983 21.9143L22.9142 20.5018L21.2419 18.8254Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
