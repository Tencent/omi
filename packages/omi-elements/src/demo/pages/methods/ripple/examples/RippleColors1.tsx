import { tag, Component, bind } from 'omi'
import { Collapse, Ripple, Modal, Input } from 'omi-elements'
import { tailwind } from '@/tailwind'

@tag('ripple-colored1')
export default class RippleColored1 extends Component {
  static css = [tailwind]

  render() {
    return (
      <div className="flex flex-col justify-center space-y-2 md:flex-row md:space-x-2 md:space-y-0">
        <Ripple.tagName rippleColor="primary">
          <button
            type="button"
            className="block w-full rounded bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg"
          >
            Primary
          </button>
        </Ripple.tagName>
        <Ripple.tagName rippleColor="secondary">
          <button
            type="button"
            className="block w-full rounded bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg"
          >
            Secondary
          </button>
        </Ripple.tagName>
        <Ripple.tagName rippleColor="success">
          <button
            type="button"
            className="block w-full rounded bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg"
          >
            Success
          </button>
        </Ripple.tagName>
        <Ripple.tagName rippleColor="danger">
          <button
            type="button"
            className="block w-full rounded bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg"
          >
            Danger
          </button>
        </Ripple.tagName>
        <Ripple.tagName rippleColor="info">
          <button
            type="button"
            className="block w-full rounded bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg"
          >
            Info
          </button>
        </Ripple.tagName>
        <Ripple.tagName rippleColor="light">
          <button
            type="button"
            className="block w-full rounded bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-neutral-900 hover:shadow-lg focus:bg-neutral-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-lg"
          >
            Light
          </button>
        </Ripple.tagName>
        <Ripple.tagName rippleColor="dark">
          <button
            type="button"
            className="block w-full rounded bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg"
          >
            Dark
          </button>
        </Ripple.tagName>
      </div>
    )
  }
}
