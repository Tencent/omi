import { tag, Component, bind } from 'omi'
import '../index'
import { tailwind } from '@/tailwind'

@tag('sizes-example')
export default class SizesExample extends Component {
  static css = [tailwind]

  state = {
    showModalXL: false,
    showModalLg: false,
    showModalSm: false,
  }

  @bind
  onClose() {
    this.state.showModalXL = false
    this.state.showModalLg = false
    this.state.showModalSm = false
  }

  setShowModalXL(show: boolean) {
    this.state.showModalXL = show
    this.update()
  }

  setShowModalLg(show: boolean) {
    this.state.showModalLg = show
    this.update()
  }

  setShowModalSm(show: boolean) {
    this.state.showModalSm = show
    this.update()
  }

  render() {
    return (
      <div>
        <div className="space-x-2">
          {/* <!--Button trigger extra large modal--> */}

          <o-button onClick={() => this.setShowModalXL(true)}>Extra large modal</o-button>

          <o-button onClick={() => this.setShowModalLg(true)}>Large modal</o-button>

          <o-button onClick={() => this.setShowModalSm(true)}>Small modal</o-button>
        </div>

        {/* <!--Extra large modal-->*/}
        <o-modal size="xl" show={this.state.showModalXL} onClose={this.onClose}>
          <div
            slot="header"
            class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50"
          >
            {/* <!--Modal title--> */}
            <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
              Extra large modal
            </h5>
            {/* <!--Close button--> */}
            <button
              type="button"
              className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
              onClick={() => this.setShowModalXL(false)}
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
          <div slot="body">...</div>
        </o-modal>

        {/* <!--Large modal-->*/}
        <o-modal show={this.state.showModalLg} size="lg" onClose={this.onClose}>
          <div
            slot="header"
            class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50"
          >
            {/* <!--Modal title--> */}
            <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">Large modal</h5>
            {/* <!--Close button--> */}
            <button
              type="button"
              className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
              onClick={() => this.setShowModalLg(false)}
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
          <div slot="body">...</div>
        </o-modal>

        {/* <!--Small modal-->*/}
        <o-modal size="sm" show={this.state.showModalSm} onClose={this.onClose}>
          <div
            slot="header"
            class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50"
          >
            {/* <!--Modal title--> */}
            <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">Small modal</h5>
            {/* <!--Close button--> */}
            <button
              type="button"
              className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
              onClick={() => this.setShowModalSm(false)}
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
          <div slot="body">...</div>
        </o-modal>
      </div>
    )
  }
}
