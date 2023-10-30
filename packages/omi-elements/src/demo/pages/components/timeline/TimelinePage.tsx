import { tag, Component, bind } from 'omi'
import { Collapse, Ripple, Modal } from 'omi-elements'
import { tailwind } from '@/tailwind'
import '@/components/code-showcase'

import TimelinePrimaryColor from './examples/TimelinePrimaryColor'
import TimelineIcons from './examples/TimelineIcons'

import TimelinePrimaryColorCode from './examples/TimelinePrimaryColor?raw'
import TimelineIconsCode from './examples/TimelineIcons?raw'

@tag('timeline-page')
export default class TimelinePage extends Component {
  static css = [tailwind]

  render() {
    return (
      <div className="container my-12 !max-w-full">
        {/* <!-- Section: Basic Example --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic" data-te-spy-item>
            Basic example
          </h2>

          {/* <!-- Description --> */}
          <p className="mb-3">
            Use this responsive timeline component to show a series of data entries with a date, title, and description
            with a vertical line with dots on the left or right side of the wrapper element.
          </p>

          <code-showcase
            code={`<ol className="border-l border-neutral-300 dark:border-neutral-500">
  {/* <!--First item--> */}
  <li>
    <div className="flex-start flex items-center pt-3">
      <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
      <p className="text-sm text-neutral-500 dark:text-neutral-300">01.07.2021</p>
    </div>
    <div className="mb-6 ml-4 mt-2">
      <h4 className="mb-1.5 text-xl font-semibold">Title of section 1</h4>
      <p className="mb-3 text-neutral-500 dark:text-neutral-300">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et
        elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula.
      </p>
    </div>
  </li>
  {/* <!--Second item--> */}
  <li>
    <div className="flex-start flex items-center pt-2">
      <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
      <p className="text-sm text-neutral-500 dark:text-neutral-300">13.09.2021</p>
    </div>
    <div className="mb-6 ml-4 mt-2">
      <h4 className="mb-1.5 text-xl font-semibold">Title of section 2</h4>
      <p className="mb-3 text-neutral-500 dark:text-neutral-300">
        Libero expedita explicabo eius fugiat quia aspernatur autem laudantium error architecto recusandae
        natus sapiente sit nam eaque, consectetur porro molestiae ipsam an deleniti.
      </p>
    </div>
  </li>
  {/* <!--Third item--> */}
  <li>
    <div className="flex-start flex items-center pt-2">
      <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
      <p className="text-sm text-neutral-500 dark:text-neutral-300">25.11.2021</p>
    </div>
    <div className="ml-4 mt-2 pb-5">
      <h4 className="mb-1.5 text-xl font-semibold">Title of section 3</h4>
      <p className="mb-3 text-neutral-500 dark:text-neutral-300">
        Voluptatibus temporibus esse illum eum aspernatur, fugiat suscipit natus! Eum corporis illum nihil
        officiis tempore. Excepturi illo natus libero sit doloremque, laborum molestias rerum pariatur quam
        ipsam necessitatibus incidunt, explicabo.
      </p>
    </div>
  </li>
</ol>`}
          >
            <ol className="border-l border-neutral-300 dark:border-neutral-500">
              {/* <!--First item--> */}
              <li>
                <div className="flex-start flex items-center pt-3">
                  <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-300">01.07.2021</p>
                </div>
                <div className="mb-6 ml-4 mt-2">
                  <h4 className="mb-1.5 text-xl font-semibold">Title of section 1</h4>
                  <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper,
                    et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales
                    vehicula.
                  </p>
                </div>
              </li>
              {/* <!--Second item--> */}
              <li>
                <div className="flex-start flex items-center pt-2">
                  <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-300">13.09.2021</p>
                </div>
                <div className="mb-6 ml-4 mt-2">
                  <h4 className="mb-1.5 text-xl font-semibold">Title of section 2</h4>
                  <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                    Libero expedita explicabo eius fugiat quia aspernatur autem laudantium error architecto recusandae
                    natus sapiente sit nam eaque, consectetur porro molestiae ipsam an deleniti.
                  </p>
                </div>
              </li>
              {/* <!--Third item--> */}
              <li>
                <div className="flex-start flex items-center pt-2">
                  <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-300">25.11.2021</p>
                </div>
                <div className="ml-4 mt-2 pb-5">
                  <h4 className="mb-1.5 text-xl font-semibold">Title of section 3</h4>
                  <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                    Voluptatibus temporibus esse illum eum aspernatur, fugiat suscipit natus! Eum corporis illum nihil
                    officiis tempore. Excepturi illo natus libero sit doloremque, laborum molestias rerum pariatur quam
                    ipsam necessitatibus incidunt, explicabo.
                  </p>
                </div>
              </li>
            </ol>
          </code-showcase>
        </section>
        {/* <!-- Section: Basic Example --> */}

        {/* <!-- Section: Horizontal --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="horizontal" data-te-spy-item>
            Horizontal example
          </h2>

          {/* <!-- Description --> */}
          <p className="mb-3">
            Use this horizontally aligned timeline component to show a series of data in a chronological order.
          </p>

          <code-showcase
            code={`<ol className="border-l border-neutral-300 dark:border-neutral-500 md:flex md:justify-center md:gap-6 md:border-l-0 md:border-t">
  {/* <!--First item--> */}
  <li>
    <div className="flex-start flex items-center pt-2 md:block md:pt-0">
      <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500 md:-mt-[5px] md:ml-0 md:mr-0"></div>
      <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-300">01.07.2021</p>
    </div>
    <div className="ml-4 mt-2 pb-5 md:ml-0">
      <h4 className="mb-1.5 text-xl font-semibold">Title of section 1</h4>
      <p className="mb-3 text-neutral-500 dark:text-neutral-300">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et
        elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula.
      </p>
    </div>
  </li>
  {/* <!--Second item--> */}
  <li>
    <div className="flex-start flex items-center pt-2 md:block md:pt-0">
      <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500 md:-mt-[5px] md:ml-0 md:mr-0"></div>
      <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-300">13.09.2021</p>
    </div>
    <div className="ml-4 mt-2 pb-5 md:ml-0">
      <h4 className="mb-1.5 text-xl font-semibold">Title of section 2</h4>
      <p className="mb-3 text-neutral-500 dark:text-neutral-300">
        Libero expedita explicabo eius fugiat quia aspernatur autem laudantium error architecto recusandae
        natus sapiente sit nam eaque, consectetur porro molestiae ipsam an deleniti.
      </p>
    </div>
  </li>
  {/* <!--Third item--> */}
  <li>
    <div className="flex-start flex items-center pt-2 md:block md:pt-0">
      <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500 md:-mt-[5px] md:ml-0 md:mr-0"></div>
      <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-300">25.11.2021</p>
    </div>
    <div className="ml-4 mt-2 pb-5 md:ml-0">
      <h4 className="mb-1.5 text-xl font-semibold">Title of section 3</h4>
      <p className="mb-3 text-neutral-500 dark:text-neutral-300">
        Voluptatibus temporibus esse illum eum aspernatur, fugiat suscipit natus! Eum corporis illum nihil
        officiis tempore. Excepturi illo natus libero sit doloremque, laborum molestias rerum pariatur quam
        ipsam necessitatibus incidunt, explicabo.
      </p>
    </div>
  </li>
</ol>`}
          >
            <ol className="border-l border-neutral-300 dark:border-neutral-500 md:flex md:justify-center md:gap-6 md:border-l-0 md:border-t">
              {/* <!--First item--> */}
              <li>
                <div className="flex-start flex items-center pt-2 md:block md:pt-0">
                  <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500 md:-mt-[5px] md:ml-0 md:mr-0"></div>
                  <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-300">01.07.2021</p>
                </div>
                <div className="ml-4 mt-2 pb-5 md:ml-0">
                  <h4 className="mb-1.5 text-xl font-semibold">Title of section 1</h4>
                  <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper,
                    et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales
                    vehicula.
                  </p>
                </div>
              </li>
              {/* <!--Second item--> */}
              <li>
                <div className="flex-start flex items-center pt-2 md:block md:pt-0">
                  <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500 md:-mt-[5px] md:ml-0 md:mr-0"></div>
                  <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-300">13.09.2021</p>
                </div>
                <div className="ml-4 mt-2 pb-5 md:ml-0">
                  <h4 className="mb-1.5 text-xl font-semibold">Title of section 2</h4>
                  <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                    Libero expedita explicabo eius fugiat quia aspernatur autem laudantium error architecto recusandae
                    natus sapiente sit nam eaque, consectetur porro molestiae ipsam an deleniti.
                  </p>
                </div>
              </li>
              {/* <!--Third item--> */}
              <li>
                <div className="flex-start flex items-center pt-2 md:block md:pt-0">
                  <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500 md:-mt-[5px] md:ml-0 md:mr-0"></div>
                  <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-300">25.11.2021</p>
                </div>
                <div className="ml-4 mt-2 pb-5 md:ml-0">
                  <h4 className="mb-1.5 text-xl font-semibold">Title of section 3</h4>
                  <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                    Voluptatibus temporibus esse illum eum aspernatur, fugiat suscipit natus! Eum corporis illum nihil
                    officiis tempore. Excepturi illo natus libero sit doloremque, laborum molestias rerum pariatur quam
                    ipsam necessitatibus incidunt, explicabo.
                  </p>
                </div>
              </li>
            </ol>
          </code-showcase>
        </section>
        {/* <!-- Section: Horizontal --> */}

        {/* <!-- Primary color --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="primary" data-te-spy-item>
            Primary color
          </h2>

          {/* <!-- Description --> */}
          <p className="mb-3">Use primary color to give your timeline a custom look.</p>

          <code-showcase code={TimelinePrimaryColorCode}>
            <TimelinePrimaryColor.tagName />
          </code-showcase>
        </section>
        {/* <!-- Primary color --> */}

        {/* <!-- Icons --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="icons" data-te-spy-item>
            Icons
          </h2>

          {/* <!-- Description --> */}
          <p className="mb-3">
            Use this vertical timeline component with icons and badges to show a more advanced set of data.
          </p>

          <code-showcase code={TimelineIconsCode}>
            <TimelineIcons.tagName />
          </code-showcase>
        </section>
        {/* <!-- Icons --> */}
      </div>
    )
  }
}
