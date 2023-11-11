import { tag, Component, bind } from 'omi'
import { Collapse, Ripple, Modal, Input } from 'omi-elements'
import { tailwind } from '@/tailwind'

@tag('ripple-colored2')
export default class RippleColored2 extends Component {
  static css = [tailwind]

  render() {
    return (
      <div className="flex flex-col justify-center space-y-2 md:flex-row md:space-x-2 md:space-y-0">
        <Ripple.tagName rippleColor="red">
          <button
            type="button"
            className="block w-full rounded bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg"
          >
            Red
          </button>
        </Ripple.tagName>
        <Ripple.tagName rippleColor="green">
          <button
            type="button"
            className="block w-full rounded bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg"
          >
            Green
          </button>
        </Ripple.tagName>
        <Ripple.tagName rippleColor="blue">
          <button
            type="button"
            className="block w-full rounded bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg"
          >
            blue
          </button>
        </Ripple.tagName>
        <Ripple.tagName rippleColor="yellow">
          <button
            type="button"
            className="block w-full rounded bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg"
          >
            Yellow
          </button>
        </Ripple.tagName>
        <Ripple.tagName rippleColor="orange">
          <button
            type="button"
            className="block w-full rounded bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg"
          >
            Orange
          </button>
        </Ripple.tagName>
        <Ripple.tagName rippleColor="purple">
          <button
            type="button"
            className="block w-full rounded bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg"
          >
            Purple
          </button>
        </Ripple.tagName>
        <Ripple.tagName rippleColor="aqua">
          <button
            type="button"
            className="block w-full rounded bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg"
          >
            Aqua
          </button>
        </Ripple.tagName>
      </div>
    )
  }
}
