import { tag, Component, classNames, bind } from 'omi'
import { tailwind } from '@/tailwind'
import '../../components/button/button'

@tag('o-dropdown')
export class Button extends Component {
  static css = [
    tailwind,
    `:host {
    display: block;
  }
  `,
  ]

  static defaultProps = {
    options: [],
    className: '',
  }

  state = {
    show: false,
    values: [],
  }

  installed(): void {
    window.addEventListener('click', (e) => {
      if (this.state.show) {
        this.state.show = false
        this.update()
      }
    })
  }

  @bind
  toggle(evt) {
    const prevShow = this.state.show
    // 先执行 window 的 click 事件，再执行这里的 click 事件
    setTimeout(() => {
      this.state.show = !prevShow
      this.update()
    }, 10)
  }

  onMenuClick(option, level, evt) {
    evt.stopPropagation()
    this.state.values[level] = option.value
    if (!option.children || option.children.length === 0) {
      this.state.show = false
      this.fire('click', {
        values: this.state.values,
        nativeEvent: evt,
      })
    }
    this.update()
  }

  renderOption(option, level) {
    if (option.children) {
      return (
        <li class="relative">
          <button
            onClick={(evt) => this.onMenuClick(option, level, evt)}
            type="button"
            class="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            {option.label}
            <svg
              class="w-2.5 h-2.5 ms-3 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </button>
          <div
            id="doubleDropdown"
            class={classNames(
              'absolute translate-x-44 z-10 top-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700',
              {
                hidden: this.state.values[level] !== option.value,
              },
            )}
          >
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
              {option.children.map((option) => {
                return this.renderOption(option, level + 1)
              })}
            </ul>
          </div>
        </li>
      )
    }

    return (
      <li class="relative" onClick={(evt) => this.onMenuClick(option, level, evt)}>
        <a
          href="javascript: void(0)"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          {option.label}
        </a>
      </li>
    )
  }

  render(props) {
    const { options, ...restProps } = props
    return (
      <div class="relative">
        <o-button {...restProps} onClick={this.toggle} aria-expanded="false">
          <slot></slot>
          <span class="ml-2 w-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </o-button>

        {this.state.show && (
          <div
            id="multi-dropdown"
            class="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="multiLevelDropdownButton">
              {props.options.map((option) => {
                return this.renderOption(option, 0)
              })}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
