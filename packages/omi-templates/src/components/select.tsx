import { Component, tag } from 'omi'
import { createPopper, Instance } from '@popperjs/core'

type Props = {
  options: { text: string; value: string }[]
  selected: string
}
@tag('o-select')
export class Select extends Component<Props> {
  static css = `:host: {
    display: inline-block;
  }`

  state = {
    isOpen: false,
    selectedValue: '',
    selectedText: '',
  }

  install() {
    const selectedOption = this.props.options.find((option) => this.props.selected === option.value)
    if (selectedOption) {
      this.state.selectedValue = selectedOption.value
      this.state.selectedText = selectedOption.text
    }
  }

  button: HTMLElement | null = null
  menu: HTMLElement | null = null
  popper: Instance | null = null

  onToggleOpen() {
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
    this.state.selectedValue = option.value
    this.state.selectedText = option.text
    this.state.isOpen = false
    this.update()
  }

  render() {
    return (
      <div class="relative inline-block text-left bg-background text-foreground">
        <div>
          <button
            type="button"
            class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-3 py-1.5  text-sm font-medium bg-background text-foreground hover:bg-zinc-50  dark:hover:bg-zinc-500 "
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
            onClick={this.onToggleOpen.bind(this)}
            ref={(e) => (this.button = e)}
          >
            {this.state.selectedText || ''}
            <svg
              class="-mr-1 mt-0.5 ml-2 h-4 w-5"
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
          class="border origin-top-right z-50 absolute whitespace-nowrap right-0 mt-2 rounded-md shadow-lg bg-background text-foreground ring-1 ring-black ring-opacity-5"
          ref={(e) => (this.menu = e)}
          style={{ display: this.state.isOpen ? 'block' : 'none' }}
        >
          <div class="py-1 px-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {this.props.options.map((option) => (
              <a
                href="javascript:"
                class="block px-4 py-2 text-sm  hover:bg-zinc-100 rounded-md dark:hover:bg-zinc-400 hover:text-gray-900"
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
