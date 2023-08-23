import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils/clsx'
import css from './style/index'

@tag('t-icon-logo-qq')
export default class LogoQq extends WeElement<IconProps> {
  static css = css as string

  static defaultProps = {
    size: '24px',
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
        <path d="M5.89652 3.08677C7.18825 1.23996 9.21262 0.0123833 11.9979 0.0126954C14.7831 0.0130073 16.8072 1.24051 18.0988 3.0872C19.3603 4.89085 19.8876 7.22542 19.8876 9.47198C19.8876 9.60919 19.884 9.80302 19.8808 9.95872L19.8786 10.0547L20.7931 12.3408L20.7957 12.3477C21.0687 13.0604 21.3453 13.8188 21.5507 14.4797C22.0371 16.0427 22.2196 17.2025 22.2349 18.0151C22.2424 18.416 22.2101 18.7708 22.1309 19.0615C22.0924 19.2028 22.0304 19.376 21.9223 19.5393C21.8351 19.6711 21.5864 19.9925 21.1226 20.0486C20.6862 20.1014 20.3498 19.8926 20.2218 19.807C20.0522 19.6936 19.9001 19.552 19.7762 19.4246C19.7037 19.3501 19.6308 19.2699 19.5586 19.1863C19.3263 19.732 19.0151 20.2729 18.6234 20.7817C18.8188 20.8848 19.0058 20.9982 19.1727 21.1221L19.1737 21.1229C19.5212 21.3816 19.7741 21.7221 19.8647 22.1296C19.9516 22.5206 19.8675 22.8833 19.7117 23.1469C19.5492 23.4214 19.3108 23.5604 19.1893 23.6218C19.0481 23.6931 18.9029 23.7395 18.7809 23.7716C18.5346 23.8364 18.2447 23.8781 17.953 23.9071C17.361 23.9659 16.613 23.9865 15.8558 23.9853C14.4106 23.983 12.8208 23.9009 12.0013 23.8172C11.1815 23.9012 9.59155 23.9833 8.14629 23.9855C7.38904 23.9867 6.64095 23.9661 6.04887 23.9071C5.75711 23.8781 5.46728 23.8365 5.22091 23.7716C5.09887 23.7395 4.95373 23.6931 4.81259 23.6219C4.69115 23.5605 4.45336 23.4225 4.29076 23.1483L4.293 23.1521C4.13452 22.8876 4.04816 22.5225 4.13572 22.1287C4.22688 21.7187 4.48239 21.3781 4.83102 21.1206L4.83203 21.1199C4.9983 20.9974 5.18392 20.885 5.37778 20.7828C4.98573 20.2736 4.67432 19.7323 4.44187 19.1861C4.36957 19.2697 4.29666 19.35 4.22418 19.4246C4.10029 19.552 3.94823 19.6935 3.77874 19.8069C3.65098 19.8924 3.31452 20.1015 2.87793 20.0486L2.87529 20.0483C2.41762 19.9916 2.16938 19.6773 2.07938 19.5425C1.97005 19.3788 1.90721 19.2049 1.86821 19.063C1.78808 18.7714 1.75545 18.4159 1.7627 18.015C1.77739 17.2023 1.95949 16.0427 2.44408 14.4806C2.64939 13.8198 2.92557 13.061 3.19961 12.347L3.20463 12.334L4.11617 10.0554C4.11549 10.0248 4.11478 9.99211 4.11408 9.95807C4.11086 9.80191 4.10749 9.60852 4.10749 9.47198C4.10749 7.22539 4.63488 4.89055 5.89652 3.08677ZM4.07184 16.2677L5.92317 13.2626V16.7924C5.92317 17.835 6.47953 19.3142 7.75966 20.3975L9.15443 21.5777L7.83546 21.9847C7.93658 21.9854 8.03928 21.9857 8.14325 21.9855C9.60959 21.9833 11.2046 21.895 11.889 21.8178L12.0009 21.8052L12.1128 21.8178C12.7975 21.8948 14.3927 21.983 15.8589 21.9853C15.9626 21.9855 16.065 21.9852 16.1659 21.9845L14.8452 21.5774L16.241 20.3968C17.521 19.3141 18.0774 17.8351 18.0774 16.7924V13.2615L19.9288 16.2678L19.9316 16.2724L19.9422 16.2894C19.9517 16.3048 19.9662 16.3279 19.9851 16.3577C19.9883 16.3629 19.9917 16.3682 19.9952 16.3738C19.9081 15.9927 19.7924 15.5605 19.641 15.074C19.4553 14.4763 19.1975 13.7668 18.9306 13.0698L17.8744 10.4293V10.2367C17.8744 10.2193 17.8759 10.1524 17.8778 10.0714C17.8789 10.0223 17.8801 9.96813 17.8812 9.91661C17.8845 9.75974 17.8876 9.58547 17.8876 9.47198C17.8876 7.49931 17.4188 5.60452 16.4599 4.23347C15.5311 2.90546 14.1104 2.01293 11.9977 2.0127C9.88516 2.01246 8.46438 2.90492 7.53541 4.23308C6.57635 5.60427 6.10749 7.49935 6.10749 9.47198C6.10749 9.67128 6.11603 10.0294 6.11928 10.166C6.11991 10.1922 6.12034 10.2102 6.12047 10.2175L6.12437 10.42L5.06428 13.0702C4.79727 13.7661 4.54007 14.4752 4.35428 15.0731M4.07184 16.2677L4.06904 16.2723L4.05847 16.2893C4.04889 16.3046 4.03439 16.3278 4.01553 16.3576C4.01023 16.366 4.0046 16.3749 3.99864 16.3842C4.08578 16.0006 4.20191 15.5643 4.35428 15.0731" />
      </svg>
    )
  }
}
