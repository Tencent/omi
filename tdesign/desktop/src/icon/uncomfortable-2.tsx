import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-uncomfortable-2')
export default class Uncomfortable2 extends WeElement<IconProps> {
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
        <g id="&amp;#229;&amp;#190;&amp;#136;&amp;#233;&amp;#154;&amp;#190;&amp;#229;&amp;#143;&amp;#151;-uncomfortable-2">
          <g id="Union">
            <path
              d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM7.61869 7.13816L11 9.04017L11 10.5L7.80001 12.9L6.60001 11.3L8.45917 9.90563L6.63816 8.88131L7.61869 7.13816ZM17.3618 8.88131L15.5408 9.90563L17.4 11.3L16.2 12.9L13 10.5L13 9.04017L16.3813 7.13816L17.3618 8.88131ZM9.5 15.5C8.9477 15.5 8.5 15.9477 8.5 16.5V17.5H6.5V16.5C6.5 14.8431 7.84313 13.5 9.5 13.5C10.2994 13.5 11.0276 13.814 11.5645 14.3233C11.6509 14.4053 11.7207 14.4548 11.7711 14.4813C11.7952 14.4939 11.8093 14.4985 11.815 14.5H12.185C12.1907 14.4985 12.2049 14.4939 12.2289 14.4813C12.2793 14.4548 12.3491 14.4053 12.4355 14.3233C12.9724 13.814 13.7006 13.5 14.5 13.5C16.1569 13.5 17.5 14.8431 17.5 16.5V17.5H15.5V16.5C15.5 15.9477 15.0523 15.5 14.5 15.5C14.2329 15.5 13.9921 15.6034 13.812 15.7743C13.4897 16.08 12.9336 16.5 12.1908 16.5H11.8092C11.0664 16.5 10.5103 16.08 10.188 15.7743C10.0079 15.6034 9.76708 15.5 9.5 15.5ZM12.1821 14.5006C12.1821 14.5006 12.1825 14.5005 12.1832 14.5004L12.1821 14.5006ZM11.8179 14.5006C11.8179 14.5006 11.8176 14.5006 11.8168 14.5004L11.8179 14.5006Z"
              fill="currentColor"
            />
          </g>
        </g>
      </svg>
    )
  }
}
