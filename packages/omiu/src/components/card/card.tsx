import { tag, Component, classNames } from 'omi'
import { tailwind } from '@/tailwind'

@tag('o-card')
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
      <div
        class={classNames('block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700', props.className)}>
        <div class="relative overflow-hidden bg-cover bg-no-repeat">
         {props.img &&  <img
            class="rounded-t-lg"
            src={props.img}
            alt="" /> }
        </div>
        <div class="p-6">
          <h5
            class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {props.title}
          </h5>
          <slot name="body" class="block mb-4 text-base text-neutral-600 dark:text-neutral-200">
          </slot>
          {props.footerInfo && <p class="text-base text-neutral-600 dark:text-neutral-200">
            <small class="text-neutral-500 dark:text-neutral-400">{props.footerInfo}</small>
          </p>}
          <slot name="footer" class="mt-4 block">
           
          </slot>

        </div>
      </div>
    )
  }
}



