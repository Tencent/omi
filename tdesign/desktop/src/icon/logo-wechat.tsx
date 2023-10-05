import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-logo-wechat')
export default class LogoWechat extends WeElement<IconProps> {
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
          d="M8.79587 17.0269L8.75 17.027C7.59683 17.027 6.49576 16.8386 5.4876 16.4963L2.64999 17.9209L3.00217 15.2094C1.16251 13.8549 0 11.8613 0 9.63848C0 5.55793 3.91751 2.25 8.75 2.25C12.9237 2.25 16.4149 4.7175 17.2892 8.01912C17.0908 8.00644 16.891 8 16.69 8C12.3256 8 8.5 11.0368 8.5 15.11C8.5 15.78 8.6035 16.4219 8.79587 17.0269ZM5.99999 8C6.55227 8 6.99999 7.55228 6.99999 7C6.99999 6.44772 6.55227 6 5.99999 6C5.4477 6 4.99999 6.44772 4.99999 7C4.99999 7.55228 5.4477 8 5.99999 8ZM11.5 8.00732C12.0523 8.00732 12.5 7.55961 12.5 7.00732C12.5 6.45504 12.0523 6.00732 11.5 6.00732C10.9477 6.00732 10.5 6.45504 10.5 7.00732C10.5 7.55961 10.9477 8.00732 11.5 8.00732Z"
          fill="currentColor"
        />
        <path
          d="M21.8739 19.5197C23.1874 18.4046 24 16.8634 24 15.161C24 11.7584 20.7541 9 16.75 9C12.7459 9 9.5 11.7584 9.5 15.161C9.5 18.5636 12.7459 21.322 16.75 21.322C17.6991 21.322 18.6056 21.167 19.4364 20.8852L21.8739 22.2925V19.5197ZM14.31 14.158C13.7577 14.158 13.31 13.7102 13.31 13.158C13.31 12.6057 13.7577 12.158 14.31 12.158C14.8623 12.158 15.31 12.6057 15.31 13.158C15.31 13.7102 14.8623 14.158 14.31 14.158ZM19.19 14.158C18.6377 14.158 18.19 13.7102 18.19 13.158C18.19 12.6057 18.6377 12.158 19.19 12.158C19.7423 12.158 20.19 12.6057 20.19 13.158C20.19 13.7102 19.7423 14.158 19.19 14.158Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
