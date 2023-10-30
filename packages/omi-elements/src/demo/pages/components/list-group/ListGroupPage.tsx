import { tag, Component, bind } from 'omi'
import { Collapse, Ripple } from 'omi-elements'
import { tailwind } from '@/tailwind'
import '@/components/code-showcase'

@tag('list-group-page')
export default class ListGroupPage extends Component {
  static css = [tailwind]

  render() {
    return (
      <div className="container my-12 !max-w-full">
        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic" data-te-spy-item>
          Basic example
        </h2>

        <p className="mb-3">
          The list groups are very useful and flexible component for displaying lists of elements in a beautiful manner.
        </p>

        <p className="mb-3">
          The most basic list group is an unordered list with list items and the proper classes. Build upon it with the
          options that follow.
        </p>

        <code-showcase
          code={`<div className="flex justify-center">
  <ul className="w-96">
    <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
      An item
    </li>
    <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
      A second item
    </li>
    <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
      A third item
    </li>
    <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
      A fourth item
    </li>
    <li className="w-full py-4">And a fifth one</li>
  </ul>
</div>`}
        >
          <div className="flex justify-center">
            <ul className="w-96">
              <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
                An item
              </li>
              <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
                A second item
              </li>
              <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
                A third item
              </li>
              <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
                A fourth item
              </li>
              <li className="w-full py-4">And a fifth one</li>
            </ul>
          </div>
        </code-showcase>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="active" data-te-spy-item>
          Active items
        </h2>

        <p className="mb-3">Use code below to indicate the current active selection.</p>
        <code-showcase
          code={`<div className="flex justify-center">
  <ul className="w-96">
    <li className="w-full rounded-lg bg-primary-100 p-4 text-primary-600">An item</li>
    <li className="w-full p-4">A second item</li>
    <li className="w-full p-4">A third item</li>
    <li className="w-full p-4">A fourth item</li>
    <li className="w-full p-4">And a fifth one</li>
  </ul>
</div>`}
        >
          <div className="flex justify-center">
            <ul className="w-96">
              <li className="w-full rounded-lg bg-primary-100 p-4 text-primary-600">An item</li>
              <li className="w-full p-4">A second item</li>
              <li className="w-full p-4">A third item</li>
              <li className="w-full p-4">A fourth item</li>
              <li className="w-full p-4">And a fifth one</li>
            </ul>
          </div>
        </code-showcase>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="disabled" data-te-spy-item>
          Disabled items
        </h2>

        <p className="mb-3">
          The class <code>.text-neutral-*</code> and <code>.cursor-default</code> is used to disable a specific item in
          the list group.
        </p>
        <code-showcase
          code={`<div className="flex justify-center">
  <ul className="w-96">
    <li className="w-full cursor-default border-b-2 border-neutral-100 border-opacity-100 py-4 text-neutral-500 dark:border-opacity-50">
      A disabled item
    </li>
    <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
      A second item
    </li>
    <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
      A third item
    </li>
    <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
      A fourth item
    </li>
    <li className="w-full py-4">And a fifth one</li>
  </ul>
</div>`}
        >
          <div className="flex justify-center">
            <ul className="w-96">
              <li className="w-full cursor-default border-b-2 border-neutral-100 border-opacity-100 py-4 text-neutral-500 dark:border-opacity-50">
                A disabled item
              </li>
              <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
                A second item
              </li>
              <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
                A third item
              </li>
              <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
                A fourth item
              </li>
              <li className="w-full py-4">And a fifth one</li>
            </ul>
          </div>
        </code-showcase>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="links" data-te-spy-item>
          Links
        </h2>

        <p className="mb-3">
          Use <code>&lt;a&gt;</code> or <code>&lt;button&gt;</code> to create actionable list group items with hover,
          disabled, and active states.
        </p>

        <code-showcase
          code={`<div className="flex justify-center">
  <div className="w-96">
    <a
      href="#!"
      aria-current="true"
      className="block w-full cursor-pointer rounded-lg bg-primary-100 p-4 text-primary-600"
    >
      The current link item
    </a>
    <a
      href="#!"
      className="block w-full cursor-pointer rounded-lg p-4 transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200"
    >
      A second link item
    </a>
    <a
      href="#!"
      className="block w-full cursor-pointer rounded-lg p-4 transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200"
    >
      A third link item
    </a>
    <a
      href="#!"
      className="block w-full cursor-pointer rounded-lg p-4 transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200"
    >
      A fourth link item
    </a>
    <a href="#!" className="block w-full cursor-default p-4 text-neutral-500 focus:outline-none focus:ring-0">
      A disabled link item
    </a>
  </div>
</div>`}
        >
          <div className="flex justify-center">
            <div className="w-96">
              <a
                href="#!"
                aria-current="true"
                className="block w-full cursor-pointer rounded-lg bg-primary-100 p-4 text-primary-600"
              >
                The current link item
              </a>
              <a
                href="#!"
                className="block w-full cursor-pointer rounded-lg p-4 transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200"
              >
                A second link item
              </a>
              <a
                href="#!"
                className="block w-full cursor-pointer rounded-lg p-4 transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200"
              >
                A third link item
              </a>
              <a
                href="#!"
                className="block w-full cursor-pointer rounded-lg p-4 transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200"
              >
                A fourth link item
              </a>
              <a href="#!" className="block w-full cursor-default p-4 text-neutral-500 focus:outline-none focus:ring-0">
                A disabled link item
              </a>
            </div>
          </div>
        </code-showcase>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="buttons" data-te-spy-item>
          Buttons
        </h2>

        <p className="mb-3">
          Use <code>&lt;a&gt;</code> or <code>&lt;button&gt;</code> to create actionable list group items with hover,
          disabled, and active states.
        </p>
        <code-showcase
          code={`<div className="flex justify-center">
  <div className="w-96">
    <button
      aria-current="true"
      type="button"
      className="block w-full cursor-pointer rounded-lg bg-primary-100 p-4 text-left text-primary-600"
    >
      The current button
    </button>
    <button
      type="button"
      className="block w-full cursor-pointer rounded-lg p-4 text-left transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200"
    >
      A second button item
    </button>
    <button
      type="button"
      className="block w-full cursor-pointer rounded-lg p-4 text-left transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200"
    >
      A third button item
    </button>
    <button
      type="button"
      className="block w-full cursor-pointer rounded-lg p-4 text-left transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200"
    >
      A fourth button item
    </button>
    <button
      disabled
      type="button"
      className="block w-full cursor-default p-4 text-left text-neutral-500 focus:outline-none focus:ring-0"
    >
      A disabled button item
    </button>
  </div>
</div>`}
        >
          <div className="flex justify-center">
            <div className="w-96">
              <button
                aria-current="true"
                type="button"
                className="block w-full cursor-pointer rounded-lg bg-primary-100 p-4 text-left text-primary-600"
              >
                The current button
              </button>
              <button
                type="button"
                className="block w-full cursor-pointer rounded-lg p-4 text-left transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200"
              >
                A second button item
              </button>
              <button
                type="button"
                className="block w-full cursor-pointer rounded-lg p-4 text-left transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200"
              >
                A third button item
              </button>
              <button
                type="button"
                className="block w-full cursor-pointer rounded-lg p-4 text-left transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200"
              >
                A fourth button item
              </button>
              <button
                disabled
                type="button"
                className="block w-full cursor-default p-4 text-left text-neutral-500 focus:outline-none focus:ring-0"
              >
                A disabled button item
              </button>
            </div>
          </div>
        </code-showcase>
      </div>
    )
  }
}
