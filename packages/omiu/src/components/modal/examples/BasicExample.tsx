import { tag, Component, bind } from 'omi'
import { tailwind } from '@/tailwind'
import '../index'
import '../../button/button'

@tag('basic-example')
export default class BasicExample extends Component {
  static css = [tailwind]

  state = {
    showModal: false,
  }

  setShowModal(show: boolean) {
    this.state.showModal = show
    this.update()
  }

  render() {
    return (
      <div>
        {/* <!-- Button trigger modal --> */}
        <o-button onClick={() => this.setShowModal(true)}>Launch demo modal</o-button>

        {/* <!-- Modal --> */}
        <o-modal show={this.state.showModal}>
          <div
            slot="header"
            class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50"
          >
            {/* <!--Modal title--> */}
            <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">Modal title</h5>
            {/* <!--Close button--> */}
            <button
              type="button"
              className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
              onClick={() => this.setShowModal(false)}
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {/* <!--Modal body--> */}
          <div slot="body">Modal body text goes here.</div>
          <div
            slot="footer"
            class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50"
          >
            <o-button color="secondary" class="mr-2" onClick={() => this.setShowModal(false)}>
              Close
            </o-button>
            <o-button>Save changes</o-button>
          </div>
        </o-modal>
      </div>
    )
  }
}
