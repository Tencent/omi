import { tag, Component, classNames } from 'omi'
import { tailwind } from '@/tailwind'
import '../button/button'

@tag('o-button-group')
export class Button extends Component {
  static css = [
    tailwind,
    `:host {
    display: inline-block;
  }
  `,
  ]

  static defaultProps = {
    ripple: true,
    color: 'primary',
    variant: 'contained',
    size: 'medium',
    tag: 'button',
    href: null,
    rounded: true,
    floating: false,
    disabled: false,
    fullWidth: false,
    roundedFull: false,
    uppercase: true,
  }

  render(props) {
    const { children, ...rest } = props
    return (
      <>
        {props.children.map((child, index) => {
          const { children, ...childRest } = child
          // 第一个按钮的左上和左下圆角，最后一个按钮的右上和右下圆角，把tailwind的类名传给组件
          return (
            <o-button
              className={classNames({
                'rounded-none': true,
                'rounded-l': index === 0,
                'rounded-r': index === props.children.length - 1,
                'border-r-0': index !== props.children.length - 1,
              })}
              {...rest}
              {...childRest.attributes}
            >
              {children}
            </o-button>
          )
        })}
      </>
    )
  }
}
