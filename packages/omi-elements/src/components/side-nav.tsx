import { tag, Component, classNames, bind, signal } from 'omi'
// import css from '../app.css?raw'
import { tailwind } from '@/tailwind'
import { Router } from 'omi-router'

export const menuShow = signal(window.innerWidth > 1024)

window.addEventListener('resize', () => {
  menuShow.value = window.innerWidth > 1024
})

window.addEventListener('click', () => {
  if (window.innerWidth < 1024) {
    menuShow.value = false
  }
})

window.addEventListener('touchstart', () => {
  if (window.innerWidth < 1024) {
    menuShow.value = false
  }
})

@tag('side-nav')
export class SideNav extends Component {
  static css = [tailwind]

  state = {
    active: 'Components',
  }

  router: Router | null = null

  @bind
  goBackHome(evt: MouseEvent) {
    evt.preventDefault()
    this.router?.push('/')
    menuShow.value = false
  }

  @bind
  toggle(evt: MouseEvent) {
    if (this.state.active === (evt.currentTarget as HTMLElement)?.dataset?.type) {
      this.state.active = ''
    } else {
      this.state.active = (evt.currentTarget as HTMLElement)?.dataset?.type || ''
    }

    evt.preventDefault()
    this.update()
  }

  render() {
    return (
      <nav
        onTouchStart={(evt) => evt.stopPropagation()}
        style={{
          transition: 'all 0.3s linear 0s',
          transform: menuShow.value ? 'translateX(0)' : 'translateX(-100%)',
        }}
        id="sidenav-main"
        class="fixed left-0 top-0 z-[1036] h-screen w-60 -translate-x-full bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] dark:bg-neutral-800 lg:data-[te-sidenav-hidden='false']:translate-x-0 sidenav-primary perfect-scrollbar ps--active-y group/ps [overflow-anchor:none] overflow-auto"
        data-te-sidenav-init=""
        data-te-sidenav-mode-breakpoint-over="0"
        data-te-sidenav-mode-breakpoint-side="xl"
        data-te-sidenav-hidden="false"
        data-te-sidenav-mode="side"
        data-te-sidenav-content="#page-content"
        data-te-sidenav-accordion="true"
      >
        <a
          href="javascript:void(0)"
          onClick={this.goBackHome}
          class=" flex items-center justify-center rounded-md py-6 pr-3 text-lg font-medium outline-none dark:text-neutral-100"
          aria-current="page"
        >
          <img src="https://omi.cdn-go.cn/s/latest/omi.svg" class="pr-4  pl-4 w-16 logo" alt="Omi logo" />
          OMI Elements
        </a>

        <ul class="relative m-0 mx-2 list-none px-[0.2rem] pb-80" data-te-sidenav-menu-ref="">
          <li class="relative">
            <a
              class="hover:bg-[rgba(59,113,202,0.05)] dark:hover:bg-white/10 hover:text-inherit hover:outline-none focus:bg-[rgba(59,113,202,0.05)] focus:text-inherit focus:outline-none active:[rgba(59,113,202,0.05)] active:text-inherit active:outline-none motion-reduce:transition-none dark:focus:bg-white/10 dark:active:bg-white/10 flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none dark:text-gray-300 relative overflow-hidden inline-block align-bottom"
              onClick={this.toggle}
              data-type="Components"
              role="button"
              aria-expanded="false"
              tabindex="0"
            >
              <span class="mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
                  <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z"></path>
                </svg>
              </span>
              <span>Components</span>
              <span
                class={classNames({
                  'absolute -right-1 ml-auto mr-[0.8rem] transition-transform duration-300 ease-linear motion-reduce:transition-none [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-gray-600 dark:[&>svg]:text-gray-300':
                    true,
                  'rotate-180': this.state.active === 'Components',
                })}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                </svg>
              </span>
            </a>
            <ul
              class={classNames({
                ' relative m-0 list-none p-0': true,
                '!visible hidden': this.state.active !== 'Components',
              })}
              id="sidenav-collapse-122672-0-4"
            >
              <li class="relative mx-1 first:mt-1">
                <a
                  href="#/components/accordion"
                  class="hover:bg-blue-100/20 dark:hover:bg-white/10 hover:text-inherit hover:outline-none focus:bg-blue-200/20 focus:text-inherit focus:outline-none active:bg-blue-200/20 active:text-inherit active:outline-none flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:focus:bg-white/10 dark:active:bg-white/10 relative overflow-hidden inline-block align-bottom"
                  tabindex="0"
                >
                  Accordion
                </a>
              </li>

              <li class="relative mx-1 first:mt-1">
                <a
                  href="#/components/avatar/"
                  class="hover:bg-blue-100/20 dark:hover:bg-white/10 hover:text-inherit hover:outline-none focus:bg-blue-200/20 focus:text-inherit focus:outline-none active:bg-blue-200/20 active:text-inherit active:outline-none flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:focus:bg-white/10 dark:active:bg-white/10 relative overflow-hidden inline-block align-bottom"
                  tabindex="0"
                >
                  Avatar
                </a>
              </li>

              <li class="relative mx-1 first:mt-1">
                <a
                  href="#/components/badges/"
                  class="hover:bg-blue-100/20 dark:hover:bg-white/10 hover:text-inherit hover:outline-none focus:bg-blue-200/20 focus:text-inherit focus:outline-none active:bg-blue-200/20 active:text-inherit active:outline-none flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:focus:bg-white/10 dark:active:bg-white/10 relative overflow-hidden inline-block align-bottom"
                  tabindex="0"
                >
                  Badges
                </a>
              </li>

              <li class="relative mx-1 first:mt-1">
                <a
                  href="#/components/buttons/"
                  class="hover:bg-blue-100/20 dark:hover:bg-white/10 hover:text-inherit hover:outline-none focus:bg-blue-200/20 focus:text-inherit focus:outline-none active:bg-blue-200/20 active:text-inherit active:outline-none flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:focus:bg-white/10 dark:active:bg-white/10 relative overflow-hidden inline-block align-bottom"
                  tabindex="0"
                >
                  Buttons
                </a>
              </li>

              <li class="relative mx-1 first:mt-1">
                <a
                  href="#/components/button-group/"
                  class="hover:bg-blue-100/20 dark:hover:bg-white/10 hover:text-inherit hover:outline-none focus:bg-blue-200/20 focus:text-inherit focus:outline-none active:bg-blue-200/20 active:text-inherit active:outline-none flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:focus:bg-white/10 dark:active:bg-white/10 relative overflow-hidden inline-block align-bottom"
                  tabindex="0"
                >
                  Button group
                </a>
              </li>

              <li class="relative mx-1 first:mt-1">
                <a
                  href="#/components/cards/"
                  class="hover:bg-blue-100/20 dark:hover:bg-white/10 hover:text-inherit hover:outline-none focus:bg-blue-200/20 focus:text-inherit focus:outline-none active:bg-blue-200/20 active:text-inherit active:outline-none flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:focus:bg-white/10 dark:active:bg-white/10 relative overflow-hidden inline-block align-bottom"
                  tabindex="0"
                >
                  Cards
                </a>
              </li>

              <li class="relative mx-1 first:mt-1">
                <a
                  href="#/components/collapse/"
                  class="hover:bg-blue-100/20 dark:hover:bg-white/10 hover:text-inherit hover:outline-none focus:bg-blue-200/20 focus:text-inherit focus:outline-none active:bg-blue-200/20 active:text-inherit active:outline-none flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:focus:bg-white/10 dark:active:bg-white/10 relative overflow-hidden inline-block align-bottom"
                  tabindex="0"
                >
                  Collapse
                </a>
              </li>

              <li class="relative mx-1 first:mt-1">
                <a
                  href="#/components/link/"
                  class="hover:bg-blue-100/20 dark:hover:bg-white/10 hover:text-inherit hover:outline-none focus:bg-blue-200/20 focus:text-inherit focus:outline-none active:bg-blue-200/20 active:text-inherit active:outline-none flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:focus:bg-white/10 dark:active:bg-white/10 relative overflow-hidden inline-block align-bottom"
                  tabindex="0"
                >
                  Link
                </a>
              </li>

              <li class="relative mx-1 first:mt-1">
                <a
                  href="#/components/list-group/"
                  class="hover:bg-blue-100/20 dark:hover:bg-white/10 hover:text-inherit hover:outline-none focus:bg-blue-200/20 focus:text-inherit focus:outline-none active:bg-blue-200/20 active:text-inherit active:outline-none flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:focus:bg-white/10 dark:active:bg-white/10 relative overflow-hidden inline-block align-bottom"
                  tabindex="0"
                >
                  List group
                </a>
              </li>

              <li class="relative mx-1 first:mt-1">
                <a
                  href="#/components/modal/"
                  class="hover:bg-blue-100/20 dark:hover:bg-white/10 hover:text-inherit hover:outline-none focus:bg-blue-200/20 focus:text-inherit focus:outline-none active:bg-blue-200/20 active:text-inherit active:outline-none flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:focus:bg-white/10 dark:active:bg-white/10 relative overflow-hidden inline-block align-bottom"
                  tabindex="0"
                >
                  Modal
                </a>
              </li>

              <li class="relative mx-1 first:mt-1">
                <a
                  href="#/components/paragraphs/"
                  class="hover:bg-blue-100/20 dark:hover:bg-white/10 hover:text-inherit hover:outline-none focus:bg-blue-200/20 focus:text-inherit focus:outline-none active:bg-blue-200/20 active:text-inherit active:outline-none flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:focus:bg-white/10 dark:active:bg-white/10 relative overflow-hidden inline-block align-bottom"
                  tabindex="0"
                >
                  Paragraphs
                </a>
              </li>

              <li class="relative mx-1 first:mt-1">
                <a
                  href="#/components/placeholders/"
                  class="hover:bg-blue-100/20 dark:hover:bg-white/10 hover:text-inherit hover:outline-none focus:bg-blue-200/20 focus:text-inherit focus:outline-none active:bg-blue-200/20 active:text-inherit active:outline-none flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:focus:bg-white/10 dark:active:bg-white/10 relative overflow-hidden inline-block align-bottom"
                  tabindex="0"
                >
                  Placeholders
                </a>
              </li>

              <li class="relative mx-1 first:mt-1">
                <a
                  href="#/components/progress/"
                  class="hover:bg-blue-100/20 dark:hover:bg-white/10 hover:text-inherit hover:outline-none focus:bg-blue-200/20 focus:text-inherit focus:outline-none active:bg-blue-200/20 active:text-inherit active:outline-none flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:focus:bg-white/10 dark:active:bg-white/10 relative overflow-hidden inline-block align-bottom"
                  tabindex="0"
                >
                  Progress
                </a>
              </li>

              <li class="relative mx-1 first:mt-1">
                <a
                  href="#/components/rating/"
                  class="hover:bg-blue-100/20 dark:hover:bg-white/10 hover:text-inherit hover:outline-none focus:bg-blue-200/20 focus:text-inherit focus:outline-none active:bg-blue-200/20 active:text-inherit active:outline-none flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:focus:bg-white/10 dark:active:bg-white/10 relative overflow-hidden inline-block align-bottom"
                  tabindex="0"
                >
                  Rating
                </a>
              </li>

              <li class="relative mx-1 first:mt-1">
                <a
                  href="#/components/scroll-back-to-top-button/"
                  class="hover:bg-blue-100/20 dark:hover:bg-white/10 hover:text-inherit hover:outline-none focus:bg-blue-200/20 focus:text-inherit focus:outline-none active:bg-blue-200/20 active:text-inherit active:outline-none flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:focus:bg-white/10 dark:active:bg-white/10 relative overflow-hidden inline-block align-bottom"
                  tabindex="0"
                >
                  Scroll back to top button
                </a>
              </li>

              <li class="relative mx-1 first:mt-1">
                <a
                  href="#/components/social-buttons/"
                  class="hover:bg-blue-100/20 dark:hover:bg-white/10 hover:text-inherit hover:outline-none focus:bg-blue-200/20 focus:text-inherit focus:outline-none active:bg-blue-200/20 active:text-inherit active:outline-none flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:focus:bg-white/10 dark:active:bg-white/10 relative overflow-hidden inline-block align-bottom"
                  tabindex="0"
                >
                  Social buttons
                </a>
              </li>

              <li class="relative mx-1 first:mt-1">
                <a
                  href="#/components/spinners/"
                  class="hover:bg-blue-100/20 dark:hover:bg-white/10 hover:text-inherit hover:outline-none focus:bg-blue-200/20 focus:text-inherit focus:outline-none active:bg-blue-200/20 active:text-inherit active:outline-none flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:focus:bg-white/10 dark:active:bg-white/10 relative overflow-hidden inline-block align-bottom"
                  tabindex="0"
                >
                  Spinners
                </a>
              </li>

              <li class="relative mx-1 first:mt-1">
                <a
                  href="#/components/timeline/"
                  class="hover:bg-blue-100/20 dark:hover:bg-white/10 hover:text-inherit hover:outline-none focus:bg-blue-200/20 focus:text-inherit focus:outline-none active:bg-blue-200/20 active:text-inherit active:outline-none flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:focus:bg-white/10 dark:active:bg-white/10 relative overflow-hidden inline-block align-bottom"
                  tabindex="0"
                >
                  Timeline
                </a>
              </li>
            </ul>
          </li>
          <li class="relative">
            <a
              class="hover:bg-[rgba(59,113,202,0.05)] dark:hover:bg-white/10 hover:text-inherit hover:outline-none focus:bg-[rgba(59,113,202,0.05)] focus:text-inherit focus:outline-none active:[rgba(59,113,202,0.05)] active:text-inherit active:outline-none motion-reduce:transition-none dark:focus:bg-white/10 dark:active:bg-white/10 flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none dark:text-gray-300 relative overflow-hidden inline-block align-bottom"
              onClick={this.toggle}
              data-type="Content & styles"
              role="button"
              aria-expanded="false"
              tabindex="0"
            >
              <span class="mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
                  <path
                    fill-rule="evenodd"
                    d="M20.599 1.5c-.376 0-.743.111-1.055.32l-5.08 3.385a18.747 18.747 0 00-3.471 2.987 10.04 10.04 0 014.815 4.815 18.748 18.748 0 002.987-3.472l3.386-5.079A1.902 1.902 0 0020.599 1.5zm-8.3 14.025a18.76 18.76 0 001.896-1.207 8.026 8.026 0 00-4.513-4.513A18.75 18.75 0 008.475 11.7l-.278.5a5.26 5.26 0 013.601 3.602l.502-.278zM6.75 13.5A3.75 3.75 0 003 17.25a1.5 1.5 0 01-1.601 1.497.75.75 0 00-.7 1.123 5.25 5.25 0 009.8-2.62 3.75 3.75 0 00-3.75-3.75z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
              <span>Content & styles</span>
              <span
                class={classNames({
                  'absolute -right-1 ml-auto mr-[0.8rem] transition-transform duration-300 ease-linear motion-reduce:transition-none [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-gray-600 dark:[&>svg]:text-gray-300':
                    true,
                  'rotate-180': this.state.active === 'Content & styles',
                })}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                </svg>
              </span>
            </a>
            <ul
              class={classNames({
                ' relative m-0 list-none p-0': true,
                '!visible hidden': this.state.active !== 'Content & styles',
              })}
              id="sidenav-collapse-122672-0-2"
            >
              <li class="mx-1 first:mt-1">
                <a
                  href="#/content-styles/colors/"
                  class="hover:bg-blue-100/20 dark:hover:bg-white/10 hover:text-inherit hover:outline-none focus:bg-blue-200/20 focus:text-inherit focus:outline-none active:bg-blue-200/20 active:text-inherit active:outline-none flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:focus:bg-white/10 dark:active:bg-white/10 relative overflow-hidden inline-block align-bottom"
                  tabindex="0"
                >
                  Colors
                </a>
              </li>

              <li class="mx-1 first:mt-1">
                <a
                  href="#/content-styles/dividers/"
                  class="hover:bg-blue-100/20 dark:hover:bg-white/10 hover:text-inherit hover:outline-none focus:bg-blue-200/20 focus:text-inherit focus:outline-none active:bg-blue-200/20 active:text-inherit active:outline-none flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:focus:bg-white/10 dark:active:bg-white/10 relative overflow-hidden inline-block align-bottom"
                  tabindex="0"
                >
                  Dividers
                </a>
              </li>

              <li class="mx-1 first:mt-1">
                <a
                  href="#/content-styles/figures/"
                  class="hover:bg-blue-100/20 dark:hover:bg-white/10 hover:text-inherit hover:outline-none focus:bg-blue-200/20 focus:text-inherit focus:outline-none active:bg-blue-200/20 active:text-inherit active:outline-none flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:focus:bg-white/10 dark:active:bg-white/10 relative overflow-hidden inline-block align-bottom"
                  tabindex="0"
                >
                  Figures
                </a>
              </li>

              <li class="mx-1 first:mt-1">
                <a
                  href="#/content-styles/hover-effects/"
                  class="hover:bg-blue-100/20 dark:hover:bg-white/10 hover:text-inherit hover:outline-none focus:bg-blue-200/20 focus:text-inherit focus:outline-none active:bg-blue-200/20 active:text-inherit active:outline-none flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:focus:bg-white/10 dark:active:bg-white/10 relative overflow-hidden inline-block align-bottom"
                  tabindex="0"
                >
                  Hover effects
                </a>
              </li>

              <li class="mx-1 first:mt-1">
                <a
                  href="#/content-styles/headings/"
                  class="hover:bg-blue-100/20 dark:hover:bg-white/10 hover:text-inherit hover:outline-none focus:bg-blue-200/20 focus:text-inherit focus:outline-none active:bg-blue-200/20 active:text-inherit active:outline-none flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:focus:bg-white/10 dark:active:bg-white/10 relative overflow-hidden inline-block align-bottom"
                  tabindex="0"
                >
                  Headings
                </a>
              </li>

              <li class="mx-1 first:mt-1">
                <a
                  href="#/content-styles/icons/"
                  class="hover:bg-blue-100/20 dark:hover:bg-white/10 hover:text-inherit hover:outline-none focus:bg-blue-200/20 focus:text-inherit focus:outline-none active:bg-blue-200/20 active:text-inherit active:outline-none flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:focus:bg-white/10 dark:active:bg-white/10 relative overflow-hidden inline-block align-bottom"
                  tabindex="0"
                >
                  Icons
                </a>
              </li>

              <li class="mx-1 first:mt-1">
                <a
                  href="#/content-styles/images/"
                  class="hover:bg-blue-100/20 dark:hover:bg-white/10 hover:text-inherit hover:outline-none focus:bg-blue-200/20 focus:text-inherit focus:outline-none active:bg-blue-200/20 active:text-inherit active:outline-none flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:focus:bg-white/10 dark:active:bg-white/10 relative overflow-hidden inline-block align-bottom"
                  tabindex="0"
                >
                  Images
                </a>
              </li>

              <li class="mx-1 first:mt-1">
                <a
                  href="#/content-styles/mask/"
                  class="hover:bg-blue-100/20 dark:hover:bg-white/10 hover:text-inherit hover:outline-none focus:bg-blue-200/20 focus:text-inherit focus:outline-none active:bg-blue-200/20 active:text-inherit active:outline-none flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:focus:bg-white/10 dark:active:bg-white/10 relative overflow-hidden inline-block align-bottom"
                  tabindex="0"
                >
                  Mask
                </a>
              </li>

              <li class="mx-1 first:mt-1">
                <a
                  href="#/content-styles/shadows/"
                  class="hover:bg-blue-100/20 dark:hover:bg-white/10 hover:text-inherit hover:outline-none focus:bg-blue-200/20 focus:text-inherit focus:outline-none active:bg-blue-200/20 active:text-inherit active:outline-none flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:focus:bg-white/10 dark:active:bg-white/10 relative overflow-hidden inline-block align-bottom"
                  tabindex="0"
                >
                  Shadows
                </a>
              </li>

              <li class="mx-1 first:mt-1">
                <a
                  href="#/content-styles/typography/"
                  class="hover:bg-blue-100/20 dark:hover:bg-white/10 hover:text-inherit hover:outline-none focus:bg-blue-200/20 focus:text-inherit focus:outline-none active:bg-blue-200/20 active:text-inherit active:outline-none flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:focus:bg-white/10 dark:active:bg-white/10 relative overflow-hidden inline-block align-bottom"
                  tabindex="0"
                >
                  Typography
                </a>
              </li>
            </ul>
          </li>
          <li class="relative">
            <a
              class="hover:bg-[rgba(59,113,202,0.05)] dark:hover:bg-white/10 hover:text-inherit hover:outline-none focus:bg-[rgba(59,113,202,0.05)] focus:text-inherit focus:outline-none active:[rgba(59,113,202,0.05)] active:text-inherit active:outline-none motion-reduce:transition-none dark:focus:bg-white/10 dark:active:bg-white/10 flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none dark:text-gray-300 relative overflow-hidden inline-block align-bottom"
              onClick={this.toggle}
              data-type="Data"
              role="button"
              aria-expanded="false"
              tabindex="0"
            >
              <span class="mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5"
                  ></path>
                </svg>
              </span>
              <span>Data</span>
              <span
                class={classNames({
                  'absolute -right-1 ml-auto mr-[0.8rem] transition-transform duration-300 ease-linear motion-reduce:transition-none [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-gray-600 dark:[&>svg]:text-gray-300':
                    true,
                  'rotate-180': this.state.active === 'Data',
                })}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                </svg>
              </span>
            </a>
            <ul
              class={classNames({
                ' relative m-0 list-none p-0': true,
                '!visible hidden': this.state.active !== 'Data',
              })}
            >
              <li class="mx-1 first:mt-1">
                <a
                  href="#/data/tables/"
                  class="hover:bg-blue-100/20 dark:hover:bg-white/10 hover:text-inherit hover:outline-none focus:bg-blue-200/20 focus:text-inherit focus:outline-none active:bg-blue-200/20 active:text-inherit active:outline-none flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:focus:bg-white/10 dark:active:bg-white/10 relative overflow-hidden inline-block align-bottom"
                  tabindex="0"
                >
                  Tables
                </a>
              </li>
            </ul>
          </li>

          <li class="relative">
            <a
              class="hover:bg-[rgba(59,113,202,0.05)] dark:hover:bg-white/10 hover:text-inherit hover:outline-none focus:bg-[rgba(59,113,202,0.05)] focus:text-inherit focus:outline-none active:[rgba(59,113,202,0.05)] active:text-inherit active:outline-none motion-reduce:transition-none dark:focus:bg-white/10 dark:active:bg-white/10 flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none dark:text-gray-300 relative overflow-hidden inline-block align-bottom"
              onClick={this.toggle}
              data-type="Forms"
              role="button"
              aria-expanded="false"
              tabindex="0"
            >
              <span class="mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="3"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  ></path>
                </svg>
              </span>
              <span>Forms</span>
              <span
                class={classNames({
                  'absolute -right-1 ml-auto mr-[0.8rem] transition-transform duration-300 ease-linear motion-reduce:transition-none [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-gray-600 dark:[&>svg]:text-gray-300':
                    true,
                  'rotate-180': this.state.active === 'Forms',
                })}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                </svg>
              </span>
            </a>
            <ul
              class={classNames({
                ' relative m-0 list-none p-0': true,
                '!visible hidden': this.state.active !== 'Forms',
              })}
            >
              <li class="mx-1 first:mt-1">
                <a
                  href="#/forms/checkbox/"
                  class="hover:bg-blue-100/20 dark:hover:bg-white/10 hover:text-inherit hover:outline-none focus:bg-blue-200/20 focus:text-inherit focus:outline-none active:bg-blue-200/20 active:text-inherit active:outline-none flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:focus:bg-white/10 dark:active:bg-white/10 relative overflow-hidden inline-block align-bottom"
                  tabindex="0"
                >
                  Checkbox
                </a>
              </li>

              <li class="mx-1 first:mt-1">
                <a
                  href="#/forms/form-templates/"
                  class="hover:bg-blue-100/20 dark:hover:bg-white/10 hover:text-inherit hover:outline-none focus:bg-blue-200/20 focus:text-inherit focus:outline-none active:bg-blue-200/20 active:text-inherit active:outline-none flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:focus:bg-white/10 dark:active:bg-white/10 relative overflow-hidden inline-block align-bottom"
                  tabindex="0"
                >
                  Form templates
                </a>
              </li>

              <li class="mx-1 first:mt-1">
                <a
                  href="#/forms/file-input/"
                  class="hover:bg-blue-100/20 dark:hover:bg-white/10 hover:text-inherit hover:outline-none focus:bg-blue-200/20 focus:text-inherit focus:outline-none active:bg-blue-200/20 active:text-inherit active:outline-none flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:focus:bg-white/10 dark:active:bg-white/10 relative overflow-hidden inline-block align-bottom"
                  tabindex="0"
                >
                  File input
                </a>
              </li>

              <li class="mx-1 first:mt-1">
                <a
                  href="#/forms/inputs/"
                  class="hover:bg-blue-100/20 dark:hover:bg-white/10 hover:text-inherit hover:outline-none focus:bg-blue-200/20 focus:text-inherit focus:outline-none active:bg-blue-200/20 active:text-inherit active:outline-none flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:focus:bg-white/10 dark:active:bg-white/10 relative overflow-hidden inline-block align-bottom"
                  tabindex="0"
                >
                  Inputs
                </a>
              </li>

              <li class="mx-1 first:mt-1">
                <a
                  href="#/forms/login-form/"
                  class="hover:bg-blue-100/20 dark:hover:bg-white/10 hover:text-inherit hover:outline-none focus:bg-blue-200/20 focus:text-inherit focus:outline-none active:bg-blue-200/20 active:text-inherit active:outline-none flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:focus:bg-white/10 dark:active:bg-white/10 relative overflow-hidden inline-block align-bottom"
                  tabindex="0"
                >
                  Login form
                </a>
              </li>

              <li class="mx-1 first:mt-1">
                <a
                  href="#/forms/radio/"
                  class="hover:bg-blue-100/20 dark:hover:bg-white/10 hover:text-inherit hover:outline-none focus:bg-blue-200/20 focus:text-inherit focus:outline-none active:bg-blue-200/20 active:text-inherit active:outline-none flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:focus:bg-white/10 dark:active:bg-white/10 relative overflow-hidden inline-block align-bottom"
                  tabindex="0"
                >
                  Radio
                </a>
              </li>

              <li class="mx-1 first:mt-1">
                <a
                  href="#/forms/range/"
                  class="hover:bg-blue-100/20 dark:hover:bg-white/10 hover:text-inherit hover:outline-none focus:bg-blue-200/20 focus:text-inherit focus:outline-none active:bg-blue-200/20 active:text-inherit active:outline-none flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:focus:bg-white/10 dark:active:bg-white/10 relative overflow-hidden inline-block align-bottom"
                  tabindex="0"
                >
                  Range
                </a>
              </li>

              <li class="mx-1 first:mt-1">
                <a
                  href="#/forms/registration-form/"
                  class="hover:bg-blue-100/20 dark:hover:bg-white/10 hover:text-inherit hover:outline-none focus:bg-blue-200/20 focus:text-inherit focus:outline-none active:bg-blue-200/20 active:text-inherit active:outline-none flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:focus:bg-white/10 dark:active:bg-white/10 relative overflow-hidden inline-block align-bottom"
                  tabindex="0"
                >
                  Registration form
                </a>
              </li>

              <li class="mx-1 first:mt-1">
                <a
                  href="#/forms/switch/"
                  class="hover:bg-blue-100/20 dark:hover:bg-white/10 hover:text-inherit hover:outline-none focus:bg-blue-200/20 focus:text-inherit focus:outline-none active:bg-blue-200/20 active:text-inherit active:outline-none flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:focus:bg-white/10 dark:active:bg-white/10 relative overflow-hidden inline-block align-bottom"
                  tabindex="0"
                >
                  Switch
                </a>
              </li>

              <li class="mx-1 first:mt-1">
                <a
                  href="#/forms/search/"
                  class="hover:bg-blue-100/20 dark:hover:bg-white/10 hover:text-inherit hover:outline-none focus:bg-blue-200/20 focus:text-inherit focus:outline-none active:bg-blue-200/20 active:text-inherit active:outline-none flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:focus:bg-white/10 dark:active:bg-white/10 relative overflow-hidden inline-block align-bottom"
                  tabindex="0"
                >
                  Search
                </a>
              </li>
            </ul>
          </li>

          <li class="relative">
            <a
              class="hover:bg-[rgba(59,113,202,0.05)] dark:hover:bg-white/10 hover:text-inherit hover:outline-none focus:bg-[rgba(59,113,202,0.05)] focus:text-inherit focus:outline-none active:[rgba(59,113,202,0.05)] active:text-inherit active:outline-none motion-reduce:transition-none dark:focus:bg-white/10 dark:active:bg-white/10 flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none dark:text-gray-300 relative overflow-hidden inline-block align-bottom"
              onClick={this.toggle}
              data-type="Methods"
              role="button"
              aria-expanded="false"
              tabindex="0"
            >
              <span class="mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="3"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                  ></path>
                </svg>
              </span>
              <span>Methods</span>
              <span
                class={classNames({
                  'absolute -right-1 ml-auto mr-[0.8rem] transition-transform duration-300 ease-linear motion-reduce:transition-none [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-gray-600 dark:[&>svg]:text-gray-300':
                    true,
                  'rotate-180': this.state.active === 'Methods',
                })}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                </svg>
              </span>
            </a>
            <ul
              class={classNames({
                ' relative m-0 list-none p-0': true,
                '!visible hidden': this.state.active !== 'Methods',
              })}
            >
              <li class="mx-1 first:mt-1">
                <a
                  href="#/methods/ripple/"
                  class="hover:bg-blue-100/20 dark:hover:bg-white/10 hover:text-inherit hover:outline-none focus:bg-blue-200/20 focus:text-inherit focus:outline-none active:bg-blue-200/20 active:text-inherit active:outline-none flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:focus:bg-white/10 dark:active:bg-white/10 relative overflow-hidden inline-block align-bottom"
                  tabindex="0"
                >
                  Ripple
                </a>
              </li>
            </ul>
          </li>
          <li class="relative">
            <a
              class="hover:bg-[rgba(59,113,202,0.05)] dark:hover:bg-white/10 hover:text-inherit hover:outline-none focus:bg-[rgba(59,113,202,0.05)] focus:text-inherit focus:outline-none active:[rgba(59,113,202,0.05)] active:text-inherit active:outline-none motion-reduce:transition-none dark:focus:bg-white/10 dark:active:bg-white/10 flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none dark:text-gray-300 relative overflow-hidden inline-block align-bottom"
              onClick={this.toggle}
              data-type="Navigation"
              role="button"
              aria-expanded="false"
              tabindex="0"
            >
              <span class="mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="3"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  ></path>
                </svg>
              </span>
              <span>Navigation</span>
              <span
                class={classNames({
                  'absolute -right-1 ml-auto mr-[0.8rem] transition-transform duration-300 ease-linear motion-reduce:transition-none [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-gray-600 dark:[&>svg]:text-gray-300':
                    true,
                  'rotate-180': this.state.active === 'Navigation',
                })}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                </svg>
              </span>
            </a>
            <ul
              class={classNames({
                ' relative m-0 list-none p-0': true,
                '!visible hidden': this.state.active !== 'Navigation',
              })}
            >
              <li class="mx-1 first:mt-1">
                <a
                  href="#/navigation/breadcrumbs/"
                  class="hover:bg-blue-100/20 dark:hover:bg-white/10 hover:text-inherit hover:outline-none focus:bg-blue-200/20 focus:text-inherit focus:outline-none active:bg-blue-200/20 active:text-inherit active:outline-none flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:focus:bg-white/10 dark:active:bg-white/10 relative overflow-hidden inline-block align-bottom"
                  tabindex="0"
                >
                  Breadcrumbs
                </a>
              </li>

              <li class="mx-1 first:mt-1">
                <a
                  href="#/navigation/footer/"
                  class="hover:bg-blue-100/20 dark:hover:bg-white/10 hover:text-inherit hover:outline-none focus:bg-blue-200/20 focus:text-inherit focus:outline-none active:bg-blue-200/20 active:text-inherit active:outline-none flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:focus:bg-white/10 dark:active:bg-white/10 relative overflow-hidden inline-block align-bottom"
                  tabindex="0"
                >
                  Footer
                </a>
              </li>

              <li class="mx-1 first:mt-1">
                <a
                  href="#/navigation/pagination/"
                  class="hover:bg-blue-100/20 dark:hover:bg-white/10 hover:text-inherit hover:outline-none focus:bg-blue-200/20 focus:text-inherit focus:outline-none active:bg-blue-200/20 active:text-inherit active:outline-none flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:focus:bg-white/10 dark:active:bg-white/10 relative overflow-hidden inline-block align-bottom"
                  tabindex="0"
                >
                  Pagination
                </a>
              </li>

              <li class="mx-1 first:mt-1">
                <a
                  href="#/navigation/tabs/"
                  class="hover:bg-blue-100/20 dark:hover:bg-white/10 hover:text-inherit hover:outline-none focus:bg-blue-200/20 focus:text-inherit focus:outline-none active:bg-blue-200/20 active:text-inherit active:outline-none flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:focus:bg-white/10 dark:active:bg-white/10 relative overflow-hidden inline-block align-bottom"
                  tabindex="0"
                >
                  Tabs
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    )
  }
}
