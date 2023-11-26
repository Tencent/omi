import { tag, Component, bind } from 'omi'
import '../index'
import { tailwind } from '@/tailwind'

@tag('modal-dialog-scrollable')
export default class ModalDialogScrollable extends Component {
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
        <o-button onClick={() => this.setShowModal(true)}>Launch demo modal dialog scrollable</o-button>

        {/* <!-- Modal --> */}
        <o-modal show={this.state.showModal} setShow={this.setShowModal} scrollable>
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
          <div slot="body">
            <p>
              This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to
              demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content
              becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the
              modal.
            </p>
            <div style={{ height: '800px' }}></div>
            <p>This content should appear at the bottom after you scroll.</p>
          </div>
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
