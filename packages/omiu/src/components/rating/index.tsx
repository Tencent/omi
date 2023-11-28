import { tag, Component, classNames, bind } from 'omi'
import { tailwind } from '@/tailwind'
import './popover'

@tag('o-rating')
export class Rate extends Component {
  static css = [
    tailwind,
    `:host {
    display: block;
  }
  `,
  ]

  static defaultProps = {
    max: 5,
    labels: [],
    className: '',
  }

  install() {
    this.state.value = this.props.value
  }

  state = {
    value: 0,
    current: 0,
    focus: false,
  }

  onMouseEnter(value) {
    this.state.current = value
    this.update()
  }

  @bind
  onMouseLeave() {
    this.state.focus = false
    this.update()
  }

  onClick(value) {
    this.state.value = value
    this.fire('change', value)
  }

  render(props) {
    return (
      <ul
        class="my-1 flex list-none gap-1 p-0"
        onMouseEnter={() => (this.state.focus = true)}
        onMouseLeave={this.onMouseLeave}
      >
        {Array.from({ length: props.max }).map((_, index) => {
          return (
            <li
              class="cursor-pointer"
              onClick={() => this.onClick(index + 1)}
              onMouseEnter={() => this.onMouseEnter(index + 1)}
              o-tooltip={{ content: props.labels[index] }}
            >
              <span class="text-primary [&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  class={classNames({
                    'fill-current': (this.state.focus ? this.state.current : this.state.value) > index,
                  })}
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d={
                      props.icon ||
                      'M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z'
                    }
                  />
                </svg>
              </span>
            </li>
          )
        })}
      </ul>
    )
  }
}
