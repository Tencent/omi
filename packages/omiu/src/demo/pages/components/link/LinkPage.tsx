import { tag, Component, bind } from 'omi'
import { Collapse, Ripple } from 'omi-elements'
import { tailwind } from '@/tailwind'
import '@/site/code-showcase'

import ButtonLinkExample from './examples/ButtonLinkExample'

import ButtonLinkExampleCode from './examples/ButtonLinkExample?raw'

@tag('link-page')
export default class LinkPage extends Component {
  static css = [tailwind]

  render() {
    return (
      <div className="container my-12 !max-w-full">
        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal">Colored links</h2>
        <code-showcase
          code={`<div>
  <a
    href="#!"
    className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
  >
    Primary link
  </a>
  <a
    href="#!"
    className="text-secondary transition duration-150 ease-in-out hover:text-secondary-600 focus:text-secondary-600 active:text-secondary-700"
  >
    Secondary link
  </a>
  <a
    href="#!"
    className="text-success transition duration-150 ease-in-out hover:text-success-600 focus:text-success-600 active:text-success-700"
  >
    Success link
  </a>
  <a
    href="#!"
    className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
  >
    Danger link
  </a>
  <a
    href="#!"
    className="text-warning transition duration-150 ease-in-out hover:text-warning-600 focus:text-warning-600 active:text-warning-700"
  >
    Info link
  </a>
  <a
    href="#!"
    className="text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
  >
    Info link
  </a>
  <div className="bg-neutral-800">
    <a
      href="#!"
      className="text-neutral-50 transition duration-150 ease-in-out hover:text-neutral-100 focus:text-neutral-100 active:text-neutral-200"
    >
      Light link
    </a>
  </div>
  <a
    href="#!"
    className="text-neutral-800 transition duration-150 ease-in-out hover:text-neutral-800 focus:text-neutral-800 active:text-neutral-900 dark:text-neutral-900 dark:hover:text-neutral-900 dark:focus:text-neutral-900 dark:active:text-neutral-900"
  >
    Dark link
  </a>
  <div className="bg-neutral-800">
    <a
      href="#!"
      className="text-white transition duration-150 ease-in-out hover:text-neutral-100 focus:text-neutral-100 active:text-neutral-200"
    >
      White link
    </a>
  </div>
  <a href="#!" className="text-black transition duration-150 ease-in-out">
    Black link
  </a>
</div>`}
        >
          <div>
            <a
              href="#!"
              className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
            >
              Primary link
            </a>
            <a
              href="#!"
              className="text-secondary transition duration-150 ease-in-out hover:text-secondary-600 focus:text-secondary-600 active:text-secondary-700"
            >
              Secondary link
            </a>
            <a
              href="#!"
              className="text-success transition duration-150 ease-in-out hover:text-success-600 focus:text-success-600 active:text-success-700"
            >
              Success link
            </a>
            <a
              href="#!"
              className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
            >
              Danger link
            </a>
            <a
              href="#!"
              className="text-warning transition duration-150 ease-in-out hover:text-warning-600 focus:text-warning-600 active:text-warning-700"
            >
              Info link
            </a>
            <a
              href="#!"
              className="text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
            >
              Info link
            </a>
            <div className="bg-neutral-800">
              <a
                href="#!"
                className="text-neutral-50 transition duration-150 ease-in-out hover:text-neutral-100 focus:text-neutral-100 active:text-neutral-200"
              >
                Light link
              </a>
            </div>
            <a
              href="#!"
              className="text-neutral-800 transition duration-150 ease-in-out hover:text-neutral-800 focus:text-neutral-800 active:text-neutral-900 dark:text-neutral-900 dark:hover:text-neutral-900 dark:focus:text-neutral-900 dark:active:text-neutral-900"
            >
              Dark link
            </a>
            <div className="bg-neutral-800">
              <a
                href="#!"
                className="text-white transition duration-150 ease-in-out hover:text-neutral-100 focus:text-neutral-100 active:text-neutral-200"
              >
                White link
              </a>
            </div>
            <a href="#!" className="text-black transition duration-150 ease-in-out">
              Black link
            </a>
          </div>
        </code-showcase>

        <hr className="my-5"></hr>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal">Within the sentence</h2>

        <code-showcase
          code={`<div>
  <p className="mb-4">
    This is an example of how the basic
    <a href="#!" className="underline">
      link
    </a>{' '}
    looks in the middle of the sentence.
  </p>
  <p>
    This is an example of how the
    <a
      href="#!"
      className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
    >
      standard primary link
    </a>
    looks in the middle of the sentence.
  </p>
</div>`}
        >
          <div>
            <p className="mb-4">
              This is an example of how the basic
              <a href="#!" className="underline">
                link
              </a>{' '}
              looks in the middle of the sentence.
            </p>
            <p>
              This is an example of how the
              <a
                href="#!"
                className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
              >
                standard primary link
              </a>
              looks in the middle of the sentence.
            </p>
          </div>
        </code-showcase>

        <hr className="my-5"></hr>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal">Underline</h2>
        <code-showcase
          code={`<a href="#!" className="underline">
  This is a basic link example
</a>`}
        >
          <a href="#!" className="underline">
            This is a basic link example
          </a>
        </code-showcase>

        <hr className="my-5"></hr>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal">Underline on hover</h2>
        <code-showcase
          code={`<a
  href="#!"
  className="underline decoration-transparent transition duration-300 ease-in-out hover:decoration-inherit"
>
  A link with underline on hover
</a>`}
        >
          <a
            href="#!"
            className="underline decoration-transparent transition duration-300 ease-in-out hover:decoration-inherit"
          >
            A link with underline on hover
          </a>
        </code-showcase>

        <hr className="my-5"></hr>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal">Button link</h2>
        <code-showcase code={ButtonLinkExampleCode}>
          <ButtonLinkExample.tagName />
        </code-showcase>
      </div>
    )
  }
}
