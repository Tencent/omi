import { tag, Component, bind } from 'omi'
import { Collapse, Ripple, Modal, Input } from 'omi-elements'
import { tailwind } from '@/tailwind'

@tag('footer-form-example')
export default class FooterFormExample extends Component {
  static css = [tailwind]

  render() {
    return (
      <div>
        <footer className="bg-secondary-100 text-center dark:bg-secondary-600">
          {/* <!--Sign-up form section--> */}
          <div className="px-6 pt-6">
            <form action="">
              <div className="gird-cols-1 grid items-center justify-center gap-4 md:grid-cols-3">
                <div className="md:mb-6 md:ml-auto">
                  <p className="text-secondary-800 dark:text-secondary-200">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>

                <div className="relative md:mb-6">
                  <Input.tagName id="exampleFormControlInput1" label="Email address"></Input.tagName>
                </div>

                <div className="mb-6 md:mr-auto">
                  <Ripple.tagName rippleColor="light">
                    <button
                      type="button"
                      className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                    >
                      Subscribe
                    </button>
                  </Ripple.tagName>
                </div>
              </div>
            </form>
          </div>

          {/* <!--Copyright section--> */}
          <div className="bg-secondary-200 p-4 text-center text-secondary-700 dark:bg-secondary-700 dark:text-secondary-200">
            © 2023 Copyright:
            <a className="text-secondary-800 dark:text-secondary-400" href="https://tailwind-elements.com/">
              Tailwind Elements
            </a>
          </div>
        </footer>
      </div>
    )
  }
}
