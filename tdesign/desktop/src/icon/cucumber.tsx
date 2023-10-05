import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-cucumber')
export default class Cucumber extends WeElement<IconProps> {
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
        <g id="&amp;#233;&amp;#187;&amp;#132;&amp;#231;&amp;#147;&amp;#156;_cucumber">
          <path
            id="Union"
            d="M14.7256 2.18086C16.8852 1.49713 18.7178 1.77554 20.0857 2.76274C20.3091 2.92397 20.5164 3.10165 20.7076 3.29288C20.9361 3.52135 21.1451 3.77265 21.3299 4.04689C22.2599 5.42745 22.4877 7.24841 21.7857 9.37997C21.0928 11.4839 19.4897 13.925 16.7076 16.7071C13.8799 19.5348 11.4037 21.1452 9.27536 21.8191C7.11573 22.5028 5.2832 22.2244 3.9153 21.2372C3.69188 21.076 3.48461 20.8983 3.29338 20.7071C3.06491 20.4786 2.85585 20.2273 2.6711 19.953C1.74119 18.5725 1.5134 16.7516 2.21534 14.62C2.9082 12.516 4.51129 10.075 7.29338 7.29288C10.1211 4.46516 12.5972 2.8547 14.7256 2.18086ZM15.3293 4.08758C13.6243 4.62737 11.4158 5.99893 8.70759 8.70709C6.04411 11.3706 4.67289 13.5514 4.11499 15.2456C3.92793 15.8136 3.83309 16.3221 3.80987 16.776C6.93378 11.664 11.9132 6.83777 16.9982 3.80352C16.5107 3.80356 15.9568 3.88889 15.3293 4.08758ZM19.2008 4.8537C13.5451 7.88493 7.79691 13.4689 4.74625 19.1614C7.42476 17.6676 10.2743 15.3786 12.8564 12.7887C15.4144 10.2229 17.6658 7.40599 19.2008 4.8537ZM6.92244 20.1956C7.42912 20.2055 8.00937 20.122 8.67171 19.9123C10.3767 19.3726 12.5852 18.001 15.2934 15.2929C17.9569 12.6294 19.3282 10.4485 19.8861 8.75438C20.1013 8.10076 20.1945 7.52607 20.1969 7.02247C18.6205 9.41319 16.5516 11.915 14.2728 14.2007C11.9763 16.5042 9.43337 18.6218 6.92244 20.1956Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}
