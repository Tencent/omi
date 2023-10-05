import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-meat-pepper')
export default class MeatPepper extends WeElement<IconProps> {
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
        <g id="&amp;#232;&amp;#130;&amp;#137;&amp;#230;&amp;#164;&amp;#146;_meat-pepper">
          <path
            id="Union"
            d="M21.2124 5.72729L20.2422 5.96989C19.2434 6.21967 18.394 6.76981 17.7863 7.3337C18.2559 7.50052 18.7243 7.72602 19.1704 8.00158C20.2064 8.64142 21.1919 9.59314 21.8373 10.8396C22.6955 12.497 22.3797 14.1429 21.4982 15.5453C20.6415 16.9084 19.2224 18.1086 17.6779 19.0916C16.1188 20.0839 14.3547 20.9037 12.7199 21.4772C11.1185 22.039 9.55778 22.3939 8.39634 22.3999C7.10153 22.4703 6.03211 22.1445 5.24736 21.4658C4.66897 20.9656 4.30732 20.3272 4.10948 19.657C3.43919 19.4591 2.8009 19.0974 2.30071 18.5189C1.62209 17.7341 1.29642 16.6647 1.36684 15.3699C1.37277 14.2053 1.72761 12.6924 2.29372 11.1518C2.87128 9.57992 3.69891 7.89743 4.7072 6.40333C5.70876 4.91921 6.92893 3.56097 8.31423 2.70819C9.71817 1.84394 11.3502 1.47163 13.0386 2.10895C15.155 2.83302 16.172 4.27726 16.6379 5.67794C17.4601 4.96724 18.5275 4.33712 19.757 4.02964L20.7271 3.78704L21.2124 5.72729ZM16.9996 9.17842L16.9996 10.6496L14.9996 10.6496L14.9996 7.99977C14.9996 7.99973 14.9996 7.9998 14.9996 7.99977C14.9995 6.60746 14.5682 4.73987 12.3786 3.99697L12.3608 3.99095L12.3434 3.98428C11.3751 3.61484 10.3906 3.77859 9.36268 4.41135C8.31122 5.05862 7.28099 6.1648 6.36501 7.52211C5.45577 8.86943 4.69872 10.4054 4.171 11.8416C3.63663 13.2959 3.36677 14.5681 3.36677 15.3995L3.36677 15.4289L3.36504 15.4582C3.31172 16.3647 3.54118 16.8958 3.81357 17.2108C4.09447 17.5356 4.52491 17.7505 5.08193 17.824L5.8422 17.9243L5.94252 18.6845C6.01603 19.2416 6.23085 19.6722 6.55568 19.9531C6.87063 20.2255 7.4016 20.455 8.30805 20.4017L8.33739 20.3999H8.36678C9.20234 20.3999 10.5291 20.1263 12.0578 19.59C13.5668 19.0606 15.1898 18.3044 16.604 17.4043C18.0328 16.495 19.1731 15.4864 19.8049 14.4811C20.412 13.5151 20.5137 12.633 20.0613 11.7593C19.6059 10.8798 18.8943 10.1817 18.1195 9.7032C17.7366 9.46672 17.3546 9.2937 16.9996 9.17842Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}
