import { tag, Component, bind } from 'omi'
import { Collapse, Ripple, Modal } from 'omi-elements'
import { tailwind } from '@/tailwind'

@tag('timeline-icons')
export default class TimelineIcons extends Component {
  static css = [tailwind]

  render() {
    return (
      <div className="pl-3 pt-3">
        <h3 className="mb-6 ml-3 text-2xl font-bold">Latest News</h3>

        <ol className="border-l-2 border-info-100">
          {/* <!--First item--> */}
          <li>
            <div className="flex-start md:flex">
              <div className="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-info-100 text-info-700">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path
                    fillRule="evenodd"
                    d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="mb-10 ml-6 block max-w-md rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10">
                <div className="mb-4 flex justify-between">
                  <a className="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700">
                    New Web Design
                  </a>
                  <a className="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700">
                    04 / 02 / 2022
                  </a>
                </div>
                <p className="mb-6 text-neutral-700 dark:text-neutral-200">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et
                  elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula.
                </p>
                <Ripple.tagName rippleColor="light">
                  <button
                    type="button"
                    className="inline-block rounded bg-info mr-1 px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
                  >
                    Preview
                  </button>
                </Ripple.tagName>
                <Ripple.tagName>
                  <button
                    type="button"
                    className="inline-block rounded border-2 border-info px-4 pb-[3px] pt-[4px] text-xs font-medium uppercase leading-normal text-info transition duration-150 ease-in-out hover:border-info-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-info-600 focus:border-info-600 focus:text-info-600 focus:outline-none focus:ring-0 active:border-info-700 active:text-info-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                    data-te-ripple-init
                  >
                    See demo
                  </button>
                </Ripple.tagName>
              </div>
            </div>
          </li>
          {/* <!--Second item--> */}
          <li>
            <div className="flex-start md:flex">
              <div className="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-info-100 text-info-700">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path
                    fillRule="evenodd"
                    d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="mb-10 ml-6 block max-w-md rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10">
                <div className="mb-4 flex justify-between">
                  <a className="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700">
                    21 000 Job Seekers
                  </a>
                  <a className="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700">
                    12 / 01 / 2022
                  </a>
                </div>
                <p className="mb-6 text-neutral-700 dark:text-neutral-200">
                  Libero expedita explicabo eius fugiat quia aspernatur autem laudantium error architecto recusandae
                  natus sapiente sit nam eaque, consectetur porro molestiae ipsam an deleniti.
                </p>
                <Ripple.tagName rippleColor="light">
                  <button
                    type="button"
                    className="inline-block rounded bg-info mr-1 px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
                  >
                    Preview
                  </button>
                </Ripple.tagName>
                <Ripple.tagName>
                  <button
                    type="button"
                    className="inline-block rounded border-2 border-info px-4 pb-[3px] pt-[4px] text-xs font-medium uppercase leading-normal text-info transition duration-150 ease-in-out hover:border-info-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-info-600 focus:border-info-600 focus:text-info-600 focus:outline-none focus:ring-0 active:border-info-700 active:text-info-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                  >
                    See demo
                  </button>
                </Ripple.tagName>
              </div>
            </div>
          </li>
          {/* <!--Third item--> */}
          <li>
            <div className="flex-start md:flex">
              <div className="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-info-100 text-info-700">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path
                    fillRule="evenodd"
                    d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="mb-10 ml-6 block max-w-md rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10">
                <div className="mb-4 flex justify-between">
                  <a className="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700">
                    Awesome Employers
                  </a>
                  <a className="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700">
                    21 / 12 / 2021
                  </a>
                </div>
                <p className="mb-6 text-neutral-700 dark:text-neutral-200">
                  Voluptatibus temporibus esse illum eum aspernatur, fugiat suscipit natus! Eum corporis illum nihil
                  officiis tempore. Excepturi illo natus libero sit doloremque, laborum molestias rerum pariatur quam
                  ipsam necessitatibus incidunt, explicabo.
                </p>
                <Ripple.tagName rippleColor="light">
                  <button
                    type="button"
                    className="inline-block rounded bg-info mr-1 px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
                  >
                    Preview
                  </button>
                </Ripple.tagName>
                <Ripple.tagName>
                  <button
                    type="button"
                    className="inline-block rounded border-2 border-info px-4 pb-[3px] pt-[4px] text-xs font-medium uppercase leading-normal text-info transition duration-150 ease-in-out hover:border-info-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-info-600 focus:border-info-600 focus:text-info-600 focus:outline-none focus:ring-0 active:border-info-700 active:text-info-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                  >
                    See demo
                  </button>
                </Ripple.tagName>
              </div>
            </div>
          </li>
        </ol>
      </div>
    )
  }
}
