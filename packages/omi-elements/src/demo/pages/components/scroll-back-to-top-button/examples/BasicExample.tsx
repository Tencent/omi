import { tag, Component, bind } from 'omi'
import { Collapse, Ripple, Modal } from 'omi-elements'
import { tailwind } from '@/tailwind'

@tag('basic-example')
export default class BasicExample extends Component {
  static css = [tailwind]

  @bind
  backToTop() {
    document.documentElement.style.scrollBehavior = 'smooth'
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  state = {
    showButton: false,
  }

  @bind
  handleScroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      this.state.showButton = true
      this.update()
    } else {
      this.state.showButton = false
      this.update()
    }
  }

  installed() {
    window.addEventListener('scroll', this.handleScroll)
  }

  uninstalled() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    return (
      <>
        {/* <!-- Explanation --> */}
        <div className="mt-4 text-center text-gray-800 dark:text-white h-[2000px]">
          <p className="mb-4">
            Start scrolling the page and a strong <strong>"Back to top" button </strong> will appear in the{' '}
            <strong>bottom right corner</strong> of the screen.
          </p>
          <p>Click this button and you will be taken to the top of the page.</p>
        </div>

        {/* <!-- Back to top button --> */}
        {this.state.showButton && (
          <Ripple.tagName rippleColor="light">
            <button
              type="button"
              onClick={this.backToTop}
              className={` ${
                this.state.showButton ? `inline-block` : `hidden`
              } fixed bottom-[40px] right-[40px] p-3 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out`}
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                className="w-4 h-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
                ></path>
              </svg>
            </button>
          </Ripple.tagName>
        )}
      </>
    )
  }
}
