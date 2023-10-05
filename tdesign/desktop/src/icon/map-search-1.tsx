import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-map-search-1')
export default class MapSearch1 extends WeElement<IconProps> {
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
          d="M9 3C10.1502 3 11 3.88678 11 5.08965C11 5.89904 10.4766 6.75154 9.77349 7.49489C9.50251 7.78138 9.22934 8.02575 9 8.21501C8.77065 8.02575 8.49749 7.78138 8.22651 7.49489C7.52344 6.75154 7 5.89904 7 5.08965C7 3.88368 7.83916 3 9 3ZM12.9087 4.2C12.5325 2.39796 11.0264 1 9 1C6.95964 1 5.46408 2.39977 5.09068 4.2H2V20H11V18H4V14.8L5.95684 13.7564L9.30977 15.8799L10.3799 14.1902L6.04316 11.4436L4 12.5333V6.2H5.15459C5.46122 7.30714 6.16903 8.23011 6.77349 8.86919C7.19012 9.30969 7.60343 9.66331 7.91161 9.9066C8.06649 10.0289 8.19687 10.1249 8.29058 10.1917C8.33748 10.2251 8.37535 10.2514 8.40268 10.27L8.43563 10.2923L8.44586 10.2991L8.44936 10.3014L8.45069 10.3023L9 10.6624L9.54825 10.303L9.55064 10.3014L9.55414 10.2991L9.56437 10.2923L9.59732 10.27C9.62465 10.2514 9.66252 10.2251 9.70942 10.1917C9.80313 10.1249 9.93351 10.0289 10.0884 9.9066C10.3966 9.66331 10.8099 9.30969 11.2265 8.86919C11.831 8.23011 12.5388 7.30714 12.8454 6.2H20V10.5H22V4.2H12.9087ZM17.25 13.5C18.7688 13.5 20 14.7312 20 16.25C20 17.0086 19.6929 17.6954 19.1961 18.1929C19.1935 18.1956 19.1908 18.1983 19.1882 18.2009C18.691 18.6948 18.0062 19 17.25 19C15.7312 19 14.5 17.7688 14.5 16.25C14.5 14.7312 15.7312 13.5 17.25 13.5ZM21.2419 18.8254C21.7216 18.0834 22 17.1992 22 16.25C22 13.6266 19.8734 11.5 17.25 11.5C14.6266 11.5 12.5 13.6266 12.5 16.25C12.5 18.8734 14.6266 21 17.25 21C18.2004 21 19.0857 20.7209 19.8282 20.2401L21.4983 21.9142L22.9142 20.5017L21.2419 18.8254Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
