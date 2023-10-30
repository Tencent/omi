import { tag, Component, bind } from 'omi'
import { Collapse, Ripple, Modal, Input } from 'omi-elements'
import { tailwind } from '@/tailwind'
import '@/components/code-showcase'

@tag('breadcrumbs-page')
export default class BreadcrumbsPage extends Component {
  static css = [tailwind]

  render() {
    return (
      <div className="container my-12 !max-w-full">
        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="section-v-1" data-te-spy-item>
          Basic example
        </h2>

        <p className="mb-3">
          Breadcrumb components are an important component in any website or application that can be used to indicate
          the current position of a page in a hierarchical page structure.
        </p>

        <p className="mb-3">Use the following breadcrumb example to show the hierarchical structure of pages.</p>

        <code-showcase
          code={`<nav className="w-full rounded-md">
  <ol className="list-reset flex">
    <li className="text-neutral-500 dark:text-neutral-400">Home</li>
  </ol>
</nav>

<nav className="w-full rounded-md">
  <ol className="list-reset flex">
    <li>
      <a
        href="#"
        className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
      >
        Home
      </a>
    </li>
    <li>
      <span className="mx-2 text-neutral-500 dark:text-neutral-400">/</span>
    </li>
    <li className="text-neutral-500 dark:text-neutral-400">Library</li>
  </ol>
</nav>

<nav className="w-full rounded-md mb-5">
  <ol className="list-reset flex">
    <li>
      <a
        href="#"
        className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
      >
        Home
      </a>
    </li>
    <li>
      <span className="mx-2 text-neutral-500 dark:text-neutral-400">/</span>
    </li>
    <li>
      <a
        href="#"
        className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
      >
        Library
      </a>
    </li>
    <li>
      <span className="mx-2 text-neutral-500 dark:text-neutral-400">/</span>
    </li>
    <li className="text-neutral-500 dark:text-neutral-400">Data</li>
  </ol>
</nav>`}
        >
          <nav className="w-full rounded-md">
            <ol className="list-reset flex">
              <li className="text-neutral-500 dark:text-neutral-400">Home</li>
            </ol>
          </nav>

          <nav className="w-full rounded-md">
            <ol className="list-reset flex">
              <li>
                <a
                  href="#"
                  className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                >
                  Home
                </a>
              </li>
              <li>
                <span className="mx-2 text-neutral-500 dark:text-neutral-400">/</span>
              </li>
              <li className="text-neutral-500 dark:text-neutral-400">Library</li>
            </ol>
          </nav>

          <nav className="w-full rounded-md mb-5">
            <ol className="list-reset flex">
              <li>
                <a
                  href="#"
                  className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                >
                  Home
                </a>
              </li>
              <li>
                <span className="mx-2 text-neutral-500 dark:text-neutral-400">/</span>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                >
                  Library
                </a>
              </li>
              <li>
                <span className="mx-2 text-neutral-500 dark:text-neutral-400">/</span>
              </li>
              <li className="text-neutral-500 dark:text-neutral-400">Data</li>
            </ol>
          </nav>
        </code-showcase>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="navbar" data-te-spy-item>
          Breadcrumb in navbar
        </h2>

        <p className="mb-3">
          You can use breadcrumb together with
          <a
            href="https://tailwind-elements.com/docs/standard/navigation/navbar/"
            className="text-primary dark:text-primary-400"
          >
            navbar
          </a>
          .
        </p>
        <code-showcase
          code={`<nav
  className="mb-5 relative flex w-full flex-wrap items-center justify-between bg-neutral-100 py-3 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:flex-wrap lg:justify-start"
  data-te-navbar-ref
>
  <div className="flex w-full flex-wrap items-center justify-between px-3">
    <nav className="bg-grey-light w-full rounded-md" aria-label="breadcrumb">
      <ol className="list-reset flex">
        <li>
          <a href="#" className="text-neutral-500 hover:text-neutral-600 dark:text-neutral-200">
            Home
          </a>
        </li>
        <li>
          <span className="mx-2 text-neutral-500 dark:text-neutral-200">/</span>
        </li>
        <li>
          <a href="#" className="text-neutral-500 hover:text-neutral-600 dark:text-neutral-200">
            Library
          </a>
        </li>
        <li>
          <span className="mx-2 text-neutral-500 dark:text-neutral-200">/</span>
        </li>
        <li>
          <a href="#" className="text-neutral-500 hover:text-neutral-600 dark:text-neutral-200">
            Data
          </a>
        </li>
      </ol>
    </nav>
  </div>
</nav>`}
        >
          <nav
            className="mb-5 relative flex w-full flex-wrap items-center justify-between bg-neutral-100 py-3 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:flex-wrap lg:justify-start"
            data-te-navbar-ref
          >
            <div className="flex w-full flex-wrap items-center justify-between px-3">
              <nav className="bg-grey-light w-full rounded-md" aria-label="breadcrumb">
                <ol className="list-reset flex">
                  <li>
                    <a href="#" className="text-neutral-500 hover:text-neutral-600 dark:text-neutral-200">
                      Home
                    </a>
                  </li>
                  <li>
                    <span className="mx-2 text-neutral-500 dark:text-neutral-200">/</span>
                  </li>
                  <li>
                    <a href="#" className="text-neutral-500 hover:text-neutral-600 dark:text-neutral-200">
                      Library
                    </a>
                  </li>
                  <li>
                    <span className="mx-2 text-neutral-500 dark:text-neutral-200">/</span>
                  </li>
                  <li>
                    <a href="#" className="text-neutral-500 hover:text-neutral-600 dark:text-neutral-200">
                      Data
                    </a>
                  </li>
                </ol>
              </nav>
            </div>
          </nav>
        </code-showcase>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="arrow" data-te-spy-item>
          Changing the separator
        </h2>

        <p className="mb-3">Use the following example to change the separator dividing each breadcrumb.</p>
        <code-showcase
          code={`<nav className="mb-5 bg-grey-light w-full rounded-md">
  <ol className="list-reset flex">
    <li>
      <a
        href="#"
        className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
      >
        Home
      </a>
    </li>
    <li>
      <span className="mx-2 text-neutral-500 dark:text-neutral-400">{'<'}</span>
    </li>
    <li>
      <a
        href="#"
        className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
      >
        Library
      </a>
    </li>
    <li>
      <span className="mx-2 text-neutral-500 dark:text-neutral-400">{'>'}</span>
    </li>
    <li className="text-neutral-500 dark:text-neutral-400">Data</li>
  </ol>
</nav>`}
        >
          <nav className="mb-5 bg-grey-light w-full rounded-md">
            <ol className="list-reset flex">
              <li>
                <a
                  href="#"
                  className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                >
                  Home
                </a>
              </li>
              <li>
                <span className="mx-2 text-neutral-500 dark:text-neutral-400">{'<'}</span>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                >
                  Library
                </a>
              </li>
              <li>
                <span className="mx-2 text-neutral-500 dark:text-neutral-400">{'>'}</span>
              </li>
              <li className="text-neutral-500 dark:text-neutral-400">Data</li>
            </ol>
          </nav>
        </code-showcase>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="without" data-te-spy-item>
          Without separators
        </h2>

        <p className="mb-3">Use the following example to remove breadcrumbs separators.</p>
        <code-showcase
          code={`<nav className="mb-5 bg-grey-light w-full rounded-md">
  <ol className="list-reset flex">
    <li>
      <a
        href="#"
        className="mr-2 text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
      >
        Home
      </a>
    </li>
    <li>
      <a
        href="#"
        className="mr-2 text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
      >
        Library
      </a>
    </li>
    <li className="text-neutral-500 dark:text-neutral-400">Data</li>
  </ol>
</nav>`}
        >
          <nav className="mb-5 bg-grey-light w-full rounded-md">
            <ol className="list-reset flex">
              <li>
                <a
                  href="#"
                  className="mr-2 text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="mr-2 text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                >
                  Library
                </a>
              </li>
              <li className="text-neutral-500 dark:text-neutral-400">Data</li>
            </ol>
          </nav>
        </code-showcase>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="bg" data-te-spy-item>
          With background
        </h2>

        <p className="mb-3">
          Use of a solid background can make the breadcrumbs section stand out, making it easy for the user to navigate
          the page.
        </p>
        <code-showcase
          code={`<nav className="w-full rounded-md bg-neutral-100 px-5 py-3 dark:bg-neutral-600">
  <ol className="list-reset flex">
    <li>
      <a
        href="#"
        className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
      >
        Home
      </a>
    </li>
    <li>
      <span className="mx-2 text-neutral-500 dark:text-neutral-300">/</span>
    </li>
    <li>
      <a
        href="#"
        className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
      >
        Library
      </a>
    </li>
    <li>
      <span className="mx-2 text-neutral-500 dark:text-neutral-300">/</span>
    </li>
    <li className="text-neutral-500 dark:text-neutral-300">Data</li>
  </ol>
</nav>`}
        >
          <nav className="w-full rounded-md bg-neutral-100 px-5 py-3 dark:bg-neutral-600">
            <ol className="list-reset flex">
              <li>
                <a
                  href="#"
                  className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                >
                  Home
                </a>
              </li>
              <li>
                <span className="mx-2 text-neutral-500 dark:text-neutral-300">/</span>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                >
                  Library
                </a>
              </li>
              <li>
                <span className="mx-2 text-neutral-500 dark:text-neutral-300">/</span>
              </li>
              <li className="text-neutral-500 dark:text-neutral-300">Data</li>
            </ol>
          </nav>
        </code-showcase>
      </div>
    )
  }
}
