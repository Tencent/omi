import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-undertake')
export default class Undertake extends WeElement<IconProps> {
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
          d="M8.86139 8.77735C8.68013 8.7769 8.50057 8.8122 8.33296 8.88121C8.16561 8.95012 8.01347 9.05129 7.8852 9.17896L5.70063 11.3635V15.5003H11.7145L17.862 13.9634L21.6033 12.3674C21.7015 12.3139 21.7842 12.2357 21.8432 12.1403C21.9062 12.0384 21.9395 11.921 21.9395 11.8012C21.9392 11.7021 21.9162 11.6043 21.8721 11.5155C21.828 11.4264 21.7639 11.3488 21.6848 11.2885C21.6057 11.2283 21.5138 11.1871 21.4162 11.1681C21.3187 11.1492 21.218 11.153 21.1221 11.1793L21.1022 11.1847L14.3301 12.7423L13.8201 12.7423H10.5732V10.7423H13.82C14.0806 10.7423 14.3305 10.6388 14.5148 10.4546C14.699 10.2703 14.8025 10.0204 14.8025 9.75983C14.8025 9.49926 14.699 9.24936 14.5148 9.06511C14.3305 8.88086 14.0806 8.77735 13.82 8.77735H8.86384L8.86139 8.77735ZM16.7799 10.1266L20.6159 9.24435C21.0016 9.14226 21.4056 9.12869 21.7975 9.20479C22.197 9.28237 22.5732 9.45102 22.8969 9.69764C23.2206 9.94427 23.483 10.2622 23.6638 10.6268C23.8447 10.9913 23.939 11.3927 23.9395 11.7996C23.9397 12.2912 23.8028 12.7739 23.5444 13.192C23.2859 13.6101 22.916 13.9479 22.4762 14.1675L22.4494 14.1809L18.5009 15.8652L11.9607 17.5003H0V9.94932H4.28642L6.47285 7.76289C6.78745 7.44938 7.16077 7.20096 7.57146 7.03185C7.98174 6.86292 8.42128 6.77644 8.86497 6.77735L8.86629 6.77735L8.86384 6.77735H8.86497H13.82C14.611 6.77735 15.3696 7.09158 15.929 7.6509C16.4883 8.21022 16.8025 8.96883 16.8025 9.75983C16.8025 9.88309 16.7949 10.0056 16.7799 10.1266ZM3.70063 11.9493H2V15.5003H3.70063V11.9493Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
