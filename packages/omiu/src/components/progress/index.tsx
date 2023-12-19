import { tag, Component, classNames } from 'omi'
import { tailwind } from '@/tailwind'

@tag('o-progress')
export class Progress extends Component {
  static css = [
    tailwind,
    `
    :host {
      display: block;
    }
    `,
  ]

  static defaultProps = {
    value: 0,
    color: 'rgb(59 113 202)',
    label: false,
  }

  render(props: { value: number; color?: string; label?: boolean; className?: string }) {
    return (
      <div class={classNames('bg-gray-200 dark:bg-gray-600', props.className)}>
        <div
          class={`h-full flex items-center justify-center`}
          style={{ width: `${props.value}%`, background: props.color }}
        >
          {props.label && <span class="text-center text-xs font-medium leading-none text-white">{props.value}%</span>}
        </div>
      </div>
    )
  }
}
