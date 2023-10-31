import { tag, Component } from 'omi'
// import css from '../app.css?raw'
import { tailwind } from '@/tailwind'

@tag('site-header')
export default class extends Component {
  static css = [
    tailwind,
    `
  
  .logo:hover {
    filter: drop-shadow(0 0 2em #07c161a0);
  }
  `,
  ]

  render() {
    return (
      <nav
        class="
    xl:pl-60
   sticky left-0 top-0 z-50 w-full bg-white shadow dark:bg-neutral-800"
      >
        <div class="px-3">
          <div class="relative flex h-[58px] items-center justify-between">
            <div class="flex flex-1 items-center sm:items-stretch sm:justify-start">
              <div class="flex flex-shrink-0 items-center">
                <div
                  id="hamburger"
                  class="
              xl:hidden
             mr-4 flex text-neutral-400"
                  data-te-sidenav-toggle-ref=""
                  data-te-target="#sidenav-main"
                  aria-expanded="true"
                >
                  <a href="#" class="text-neutral-400">
                    <svg fill="hsl(224, 7.2%, 40%)" viewBox="0 0 100 80" width="20" height="20">
                      <rect width="80" height="14"></rect>
                      <rect y="30" width="80" height="14"></rect>
                      <rect y="60" width="80" height="14"></rect>
                    </svg>
                  </a>
                </div>
              </div>

              <div class="ml-auto hidden items-center sm:flex">
                <div class="flex">
                  <a
                    href="#/"
                    class="hidden py-2 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 sm:block sm:px-2 [&amp;.active]:text-black/90 dark:[&amp;.active]:text-zinc-400"
                  >
                    Home
                  </a>

                  <a
                    target="_blank"
                    href="https://tw-elements.com/"
                    class="hidden py-2 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 sm:block sm:px-2 [&amp;.active]:text-black/90 dark:[&amp;.active]:text-zinc-400"
                  >
                    TW Elements
                  </a>
                </div>
              </div>
            </div>

            <div class="absolute inset-y-0 right-0 flex items-center pr-0 sm:static sm:inset-auto sm:ml-4">
              {/* <div id="theme-switcher" class="w-8">
                <button
                  class="rounded-2 flex items-center justify-center whitespace-nowrap px-1.5 py-2 uppercase text-neutral-500 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 sm:p-2"
                  type="button"
                  id="themeSwitcher"
                  data-te-dropdown-toggle-ref=""
                  data-te-dropdown-position="dropend"
                  aria-expanded="false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="inline-block h-5 w-5"
                  >
                    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"></path>
                  </svg>
                </button>
                <ul
                  class="absolute z-[1000] float-left m-0 hidden w-[120px] list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-800 [&amp;[data-te-dropdown-show]]:block"
                  aria-labelledby="themeSwitcher"
                  data-te-dropdown-menu-ref=""
                >
                  <li class="text flex scale-[0.8] items-center justify-center py-1 font-bold text-gray-400">
                    <svg class="-ml-1 fill-gray-400" xmlns="http://www.w3.org/2000/svg" height="20" width="20">
                      <path d="M7 17v-5.792H3L10 2l7 9.208h-4V17Zm1.5-1.5h3V9.708h2.438L10 4.438l-3.938 5.27H8.5ZM10 9.708Z"></path>
                    </svg>
                    <span class="ml-1 mr-2">+</span>
                    <span>D</span>
                  </li>

                  <li></li>
                  <li>
                    <a
                      class="block w-full whitespace-nowrap bg-transparent px-3 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 focus:bg-neutral-200 focus:outline-none active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-100 dark:hover:bg-neutral-600 focus:dark:bg-neutral-600"
                      href="#"
                      data-theme="light"
                      data-te-dropdown-item-ref=""
                    >
                      <div class="pointer-events-none">
                        <div class="inline-block w-[24px] text-center align-middle" data-theme-icon="light">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="inline-block h-5 w-5"
                          >
                            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"></path>
                          </svg>
                        </div>
                        <span data-theme-name="light">Light</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      class="block w-full whitespace-nowrap bg-transparent px-3 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 focus:bg-neutral-200 focus:outline-none active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-100 dark:hover:bg-neutral-600 focus:dark:bg-neutral-600"
                      href="#"
                      data-theme="dark"
                      data-te-dropdown-item-ref=""
                    >
                      <div class="pointer-events-none">
                        <div class="-mt-1 inline-block w-[24px] text-center align-middle" data-theme-icon="dark">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="inline-block h-4 w-4"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <span data-theme-name="dark">Dark</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      class="block w-full whitespace-nowrap bg-transparent px-3 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 focus:bg-neutral-200 focus:outline-none active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-100 dark:hover:bg-neutral-600 focus:dark:bg-neutral-600"
                      href="#"
                      data-theme="system"
                      data-te-dropdown-item-ref=""
                    >
                      <div class="pointer-events-none">
                        <div class="inline-block w-[24px] text-center text-primary-500" data-theme-icon="system">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            focusable="false"
                            class="inline-block w-4"
                            role="img"
                            viewBox="0 0 640 512"
                          >
                            <path
                              fill="currentColor"
                              d="M128 32C92.7 32 64 60.7 64 96V352h64V96H512V352h64V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480H563.2c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2H19.2z"
                            ></path>
                          </svg>
                        </div>
                        <span data-theme-name="system" class="text-primary-500">
                          System
                        </span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div> */}

              <a
                href="https://github.com/Tencent/omi/tree/master/packages/omi-elements"
                target="_blank"
                class="rounded-md px-1.5 py-2 text-sm font-medium text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 sm:p-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
