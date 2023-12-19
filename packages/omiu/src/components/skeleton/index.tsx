import { tag, Component, classNames } from 'omi'
import { tailwind } from '@/tailwind'

@tag('o-skeleton')
export class Button extends Component {
  static css = [
    tailwind,
    `:host {
  display: block;
}

::slotted(svg) {
  width: 100%;
  height: 100%;
}

::slotted(div) {
  width: 100%;
  height: 100%;
}
`,
  ]

  static defaultProps = {
    className: '',
    showy: false,
  }

  render(props: { className?: string; showy?: boolean; children?: any }) {
    return (
      <div
        class={classNames(
          'text-center animate-pulse text-gray-500 dark:text-gray-300',
          {
            'bg-gray-200 dark:bg-gray-700': props.children?.[0]?.nodeName !== 'svg' && !props.showy,
            'bg-gray-300 dark:bg-gray-600': props.children?.[0]?.nodeName !== 'svg' && props.showy,
          },

          props.className,
        )}
      >
        <slot></slot>
      </div>
    )
  }
}
