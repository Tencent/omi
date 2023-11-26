import { tag, Component, bind } from 'omi'
import '../index'
import { tailwind } from '@/tailwind'

@tag('positions-example')
export default class PositionsExample extends Component {
  static css = [tailwind]

  state = {
    showModalCenter: false,
    showModalTopRight: false,
    showModalTopLeft: false,
    showModalBottomRight: false,
    showModalBottomLeft: false,
  }

  @bind
  onClose() {
    this.state.showModalTopRight = false
    this.state.showModalTopLeft = false
    this.state.showModalBottomRight = false
    this.state.showModalBottomLeft = false
    this.state.showModalCenter = false
  }

  setShowModalCenter(show: boolean) {
    this.state.showModalCenter = show
    this.update()
  }

  setShowModalTopRight(show: boolean) {
    this.state.showModalTopRight = show
    this.update()
  }

  setShowModalTopLeft(show: boolean) {
    this.state.showModalTopLeft = show
    this.update()
  }

  setShowModalBottomRight(show: boolean) {
    this.state.showModalBottomRight = show
    this.update()
  }

  setShowModalBottomLeft(show: boolean) {
    this.state.showModalBottomLeft = show
    this.update()
  }

  render() {
    return (
      <div>
        <div className="space-x-2">
          <o-button onClick={() => this.setShowModalCenter(true)}>Center</o-button>

          <o-button onClick={() => this.setShowModalTopRight(true)}>Top right</o-button>

          <o-button onClick={() => this.setShowModalTopLeft(true)}>Top left</o-button>

          <o-button onClick={() => this.setShowModalBottomRight(true)}>Bottom right</o-button>

          <o-button onClick={() => this.setShowModalBottomLeft(true)}>Bottom left</o-button>
        </div>

        <o-modal position="center" show={this.state.showModalCenter} onClose={this.onClose}>
          <div
            slot="header"
            class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50"
          >
            {/* <!--Modal title--> */}
            <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
              Modal title(center)
            </h5>
            {/* <!--Close button--> */}
            <button
              type="button"
              className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
              onClick={() => this.setShowModalTopRight(false)}
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
            <o-button color="secondary" class="mr-2" onClick={() => this.setShowModalCenter(false)}>
              Close
            </o-button>
            <o-button>Save changes</o-button>
          </div>
        </o-modal>

        {/* <!--Top right modal--> */}
        <o-modal position="top-right" show={this.state.showModalTopRight} onClose={this.onClose}>
          <div
            slot="header"
            class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50"
          >
            {/* <!--Modal title--> */}
            <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
              Modal title(top-right)
            </h5>
            {/* <!--Close button--> */}
            <button
              type="button"
              className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
              onClick={() => this.setShowModalTopRight(false)}
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
            <o-button color="secondary" class="mr-2" onClick={() => this.setShowModalTopRight(false)}>
              Close
            </o-button>
            <o-button>Save changes</o-button>
          </div>
        </o-modal>

        {/* <!--Top left modal--> */}
        <o-modal position="top-left" show={this.state.showModalTopLeft} onClose={this.onClose}>
          <div
            slot="header"
            class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50"
          >
            {/* <!--Modal title--> */}
            <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
              Modal title(top-left)
            </h5>
            {/* <!--Close button--> */}
            <button
              type="button"
              className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
              onClick={() => this.setShowModalTopLeft(false)}
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
            <o-button color="secondary" class="mr-2" onClick={() => this.setShowModalTopLeft(false)}>
              Close
            </o-button>
            <o-button>Save changes</o-button>
          </div>
        </o-modal>

        {/* <!--Bottom right modal--> */}
        <o-modal position="bottom-right" show={this.state.showModalBottomRight} onClose={this.onClose}>
          <div
            slot="header"
            class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50"
          >
            {/* <!--Modal title--> */}
            <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
              Modal title(bottom-right)
            </h5>
            {/* <!--Close button--> */}
            <button
              type="button"
              className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
              onClick={() => this.setShowModalTopLeft(false)}
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
            <o-button color="secondary" class="mr-2" onClick={() => this.setShowModalTopLeft(false)}>
              Close
            </o-button>
            <o-button>Save changes</o-button>
          </div>
        </o-modal>

        {/* <!--Bottom left modal--> */}
        <o-modal position="bottom-left" show={this.state.showModalBottomLeft} onClose={this.onClose}>
          <div
            slot="header"
            class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50"
          >
            {/* <!--Modal title--> */}
            <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
              Modal title(bottom-left)
            </h5>
            {/* <!--Close button--> */}
            <button
              type="button"
              className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
              onClick={() => this.setShowModalTopLeft(false)}
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
            <o-button color="secondary" class="mr-2" onClick={() => this.setShowModalTopLeft(false)}>
              Close
            </o-button>
            <o-button>Save changes</o-button>
          </div>
        </o-modal>
      </div>
    )
  }
}
