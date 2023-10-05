import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-bamboo-shoot')
export default class BambooShoot extends WeElement<IconProps> {
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
        <g id="&amp;#231;&amp;#172;&amp;#139;_bamboo-shoot">
          <path
            id="Union"
            d="M19.843 4.22785C19.7754 4.23923 19.705 4.25155 19.6319 4.26491C18.8574 4.40642 17.7772 4.66379 16.4538 5.13145C16.6276 5.99524 16.8201 6.9463 16.9836 7.7522C17.0749 8.20195 17.1571 8.60633 17.2218 8.92487L18.3888 9.04157C19.1291 7.27586 19.5248 5.82593 19.7362 4.79788C19.7789 4.59045 19.8141 4.40015 19.843 4.22785ZM17.5005 10.9627L16.2598 10.8386L9.22448 9.70923L11.0199 20.0707C14.1444 16.7017 16.1773 13.5819 17.5005 10.9627ZM9.02808 20.29L7.29103 10.2653C5.94798 11.2962 4.54479 12.5 3.10066 13.9059C3.6124 14.8571 4.63414 16.4477 6.12868 17.9422C7.1251 18.9386 8.16422 19.7249 9.02808 20.29ZM10.6938 7.91949L15.1211 8.63023C15.0901 8.47775 15.0575 8.31694 15.0236 8.14987C14.8822 7.45294 14.7189 6.64672 14.5648 5.88173C13.393 6.39757 12.0932 7.06244 10.6938 7.91949ZM21.9947 2.07617L21.9762 3.16254C21.9752 3.19088 21.9734 3.22974 21.9705 3.27882C21.9646 3.37697 21.9541 3.51599 21.9354 3.69349C21.898 4.04848 21.8276 4.55735 21.6952 5.20078C21.4305 6.48796 20.9183 8.31225 19.9277 10.5188C18.3958 13.9312 15.7258 18.2446 11.0784 22.892L10.5997 23.3707L9.9774 23.104C9.0436 22.7038 6.79034 21.4323 4.71446 19.3564C2.63859 17.2806 1.36709 15.0273 0.966892 14.0935L0.700195 13.4712L1.17893 12.9925C3.35167 10.8197 5.45197 9.07862 7.42218 7.6837C10.2607 5.67405 12.8254 4.38555 14.9421 3.55998C16.7525 2.85392 18.2324 2.48751 19.2724 2.29748C19.7924 2.20248 20.2022 2.15159 20.4882 2.12435C20.6313 2.11073 20.7433 2.10303 20.8228 2.09867C20.8625 2.09649 20.8941 2.09515 20.9173 2.09433L21.9947 2.07617Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}
