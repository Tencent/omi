import { tag, Component } from 'omi'
import './components/button-link'
import { tailwind } from '@/tailwind'
import demoPages from './pages'
import { Modal } from '@/lib/components/modal/index.tsx'

@tag('home-page')
export class ButtonLink extends Component {
  static css = [tailwind]

  show = false
  render() {
    return (
      <div class="container my-12 mx-5">
        {/* <button
          onClick={() => {
            this.show = true
            this.update()
          }}
          type="button"
          class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          data-te-toggle="modal"
          data-te-target="#exampleModal"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          Launch demo modal
        </button> */}

        {/* <Modal.tagName
          title="Modal title"
          staticBackdrop={true}
          position="bottom-left"
          onSecondaryButtonClick={() => {
            this.show = false
            this.update()
          }}
          onPrimaryButtonClick={() => {
            console.log('primary button clicked')
          }}
          primaryButtonText="Save changes"
          secondaryButtonText="Close"
          show={this.show}
        >
          <div slot="header">Header</div>
          <div slot="body" style="height: 200px">
            Modal body text goes here.
          </div>
          <div slot="footer">Footer</div>
        </Modal.tagName> */}

        <h1 class="flex justify-center mb-10 mt-0 text-5xl font-medium leading-tight text-primary">
          Tailwind Element Omi UI KIT
        </h1>
        {demoPages.map(({ section, pages }) => (
          <div class="mb-10" key={section}>
            {pages.length > 0 && <h2 class="uppercase text-2xl my-3">{section}</h2>}
            {pages.map(({ name, path }) => (
              <button-link href={path} key={name}>
                {name}
              </button-link>
            ))}
          </div>
        ))}
      </div>
    )
  }
}
