import { Component, tag } from 'omi'
import { createPopper, Instance } from '@popperjs/core'

type Props = {
  options: { text: string; value: string }[]
  value: string
}
@tag('o-select')
export class Select extends Component<Props> {
  static css = `
  :host {
    display: inline-block;
  }
  `

  state = {
    isOpen: false,
    selectedValue: '',
    selectedText: '',
  }

  install() {
    this.setSelectedOption()
    // 添加事件监听器
    document.addEventListener('click', this.handleClickOutside.bind(this))
  }

  setSelectedOption() {
    const selectedOption = this.props.options.find((option) => this.props.value === option.value)
    if (selectedOption) {
      this.state.selectedValue = selectedOption.value
      this.state.selectedText = selectedOption.text
    }
  }

  receiveProps() {
    this.setSelectedOption()
  }

  uninstall() {
    // 移除事件监听器
    document.removeEventListener('click', this.handleClickOutside.bind(this))
  }

  handleClickOutside(event: MouseEvent) {
    if (this.button && !this.button.contains(event.target as Node) && this.state.isOpen) {
      this.state.isOpen = false
      this.update()
    }
  }

  button: HTMLElement | null = null
  menu: HTMLElement | null = null
  popper: Instance | null = null

  onToggleOpen(event: MouseEvent) {
    event.stopPropagation()

    this.state.isOpen = !this.state.isOpen
    this.update()
    this.popper && this.popper.destroy()
    if (this.state.isOpen && this.button && this.menu) {
      this.popper = createPopper(this.button, this.menu, {
        placement: 'bottom-start',
      })
    }
  }

  onSelectOption(option: { text: string; value: string }) {
    if (option.value === this.state.selectedValue) {
      return
    }
    this.state.selectedValue = option.value
    this.state.selectedText = option.text
    this.state.isOpen = false
    this.update()
    this.fire('change', {
      value: option.value,
    })
  }

  render() {
    return (
      <div class="relative w-full inline-block text-left">
        <div class="bg-background text-foreground rounded border overflow-hidden">
          <button
            type="button"
            class="inline-flex justify-between w-full shadow-sm px-2 py-1.5 text-sm font-medium hover:bg-zinc-50  dark:hover:bg-zinc-700"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
            onClick={(event) => this.onToggleOpen(event)}
            ref={(e) => (this.button = e)}
          >
            <div class="overflow-hidden text-ellipsis whitespace-nowrap">{this.state.selectedText || '　'}</div>
            <svg
              class="-mr-1 mt-0.5 ml-2 h-4 w-5 min-w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div
          class="border origin-top-right z-50 absolute whitespace-nowrap right-0 mt-2 rounded shadow-lg bg-background text-foreground ring-1 ring-black ring-opacity-5 max-h-48 overflow-auto"
          ref={(e) => (this.menu = e)}
          style={{ display: this.state.isOpen ? 'block' : 'none' }}
        >
          <div class="py-1 px-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {this.props.options.map((option) => (
              <a
                href="javascript:"
                class="block px-4 py-2 text-sm  hover:bg-zinc-100 rounded dark:hover:bg-zinc-400 hover:text-zinc-900"
                role="menuitem"
                onClick={() => this.onSelectOption(option)}
              >
                {option.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
