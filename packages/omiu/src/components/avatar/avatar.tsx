import { tag, Component, classNames } from 'omi'
import { tailwind } from '@/tailwind'

@tag('o-avatar')
export class Button extends Component {
  static css = [
    tailwind,
    `:host {
    display: block;
  }
  `,
  ]

  render(props) {
    return (
      <>
        <img
          src={props.src}
          class={classNames(
            'inline-block',
            {
              'rounded-full': props.roundedFull,
              'rounded-lg': props.rounded,
              'shadow-lg': props.shadow,
            },
            props.className,
          )}
          alt="Avatar"
        />
        <h5 class="mb-2 text-xl font-medium leading-tight">{props.name}</h5>
        <p class="text-neutral-500 dark:text-neutral-400">{props.describe}</p>
      </>
    )
  }
}
