import { tag, Component, bind } from 'omi'
import { Collapse, Ripple, Modal, Input } from 'omi-elements'
import { tailwind } from '@/tailwind'

@tag('footer-cta-example')
export default class FooterCtaExample extends Component {
  static css = [tailwind]

  render() {
    return (
      <div>
        <footer className="text-center text-white bg-blue-900">
          <div className="container p-6 mx-auto">
            <div className="">
              <span className="flex items-center justify-center w-full">
                <span className="mr-4">Register for free</span>
                <Ripple.tagName rippleColor="light">
                  <button
                    type="button"
                    className="inline-block rounded-full border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                  >
                    Sign up!
                  </button>
                </Ripple.tagName>
              </span>
            </div>
          </div>

          {/* <!--Copyright section--> */}
          <div className="p-4 text-center bg-black bg-opacity-20">
            © 2023 Copyright:
            <a className="text-white" href="https://tailwind-elements.com/">
              Tailwind Elements
            </a>
          </div>
        </footer>
      </div>
    )
  }
}
