import { tag, Component, bind } from 'omi'
import { Collapse, Ripple } from 'omi-elements'
import { tailwind } from '@/tailwind'

@tag('collapse-horizontal')
export class CollapseHorizontal extends Component {
  static css = [tailwind]

  @bind
  toggleShow() {
    this.show = !this.show
    this.update()
  }

  show = false

  render() {
    return (
      <div className="px-3 h-[180px]">
        <Ripple.tagName rippleColor="light" onClick={this.toggleShow}>
          <button
            type="button"
            className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          >
            Button
          </button>
        </Ripple.tagName>
        <Collapse.tagName horizontal className="max-w-[400px]" show={this.show}>
          <div className="block rounded-lg w-[400px] bg-white p-6 shadow-lg dark:bg-neutral-700 dark:text-neutral-50">
            This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
          </div>
        </Collapse.tagName>
      </div>
    )
  }
}
