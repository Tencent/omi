import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-rice')
export default class Rice extends WeElement<IconProps> {
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
        <g id="&amp;#231;&amp;#177;&amp;#179;&amp;#233;&amp;#165;&amp;#173;_rice">
          <path
            id="Union"
            d="M12 4C8.85483 4 6.17033 5.21135 5.49292 7.71396C5.27866 8.5055 5.13191 9.29497 5.05728 10L18.9427 10C18.8682 9.29614 18.7218 8.50811 18.5081 7.71785C17.8306 5.21232 15.1471 4 12 4ZM20 12L4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12ZM3.04776 10C3.12762 9.11406 3.30525 8.14137 3.56239 7.1914C4.60455 3.34126 8.5638 2 12 2C15.4394 2 19.397 3.3431 20.4388 7.19579C20.6953 8.14435 20.8725 9.11541 20.9522 10H22V12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12V10H3.04776ZM10.998 4.99805H13.002V7.00195H10.998V4.99805ZM7.99805 6.99805H10.002V9.00195H7.99805V6.99805ZM13.998 6.99805H16.002V9.00195H13.998V6.99805Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}
