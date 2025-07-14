import { tag, Component, bind, classNames } from 'omi'
import './dark-switch'

type NavbarItem = {
  text: string
  href: string
  target: string
  path: string
  value: string
  type: string
  img?: string
  inner?: string
  children: any[]
  tag?: string
}

type Props = {
  items: NavbarItem[]
  active: string
}

@tag('o-navbar')
export class Navbar extends Component<Props> {
  static css = `
  :host {
    display: block;
  }
  `

  state = {
    isOpen: false,
    active: '',
  }

  install() {
    this.state.active = this.props.active
  }

  @bind
  onItemClick(evt: MouseEvent, navbarItem: NavbarItem) {
    if (!navbarItem.value) {
      return
    }
    this.state.isOpen = false
    this.state.active = navbarItem.value
    this.update()
    this.fire('item-click', {
      item: navbarItem,
      nativeEvent: evt,
    })
  }

  @bind
  onSubItemClick(evt: MouseEvent, navbarItem: NavbarItem) {
    this.state.isOpen = false
    evt.stopPropagation()
    this.state.active = navbarItem.value
    this.update()
    this.fire('item-click', {
      item: navbarItem,
      nativeEvent: evt,
    })
  }

  @bind
  onClick() {
    this.state.isOpen = !this.state.isOpen
    this.update()
  }

  renderNavbarItemChild(navbarItemChild: NavbarItem) {
    switch (navbarItemChild.type) {
      case 'title':
        return (
          <li class="text-slate-300 dark:text-zinc-500 text-sm px-5 pt-2 cursor-default dark:text-foreground">
            {navbarItemChild.text}
          </li>
        )
      case 'spliter':
        return (
          <li class="p-1">
            <hr class="border-t mx-auto" />
          </li>
        )
      default:
        if (navbarItemChild.href) {
          return (
            <li
              onClick={(evt) => this.onSubItemClick(evt, navbarItemChild)}
              class="p-1 dark:bg-background dark:text-foreground"
            >
              <a
                class={classNames(
                  'no-underline block px-4 py-2 hover:text-primary hover:bg-slate-100 dark:hover:bg-zinc-600  rounded-md p-2 dark:text-foreground',
                  {
                    'text-zinc-600 md:text-zinc-800': this.state.active !== navbarItemChild.value,
                    'text-primary md:text-primary': this.state.active === navbarItemChild.value,
                    'dark:bg-zinc-200/20': this.state.active === navbarItemChild.value,
                  },
                )}
                target={navbarItemChild.target || '_blank'}
                href={`${navbarItemChild.href}`}
              >
                {navbarItemChild.text}
                <div class="w-3 h-3 inline-block text-zinc-600 ml-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-full h-full">
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z" />
                  </svg>
                </div>
              </a>
            </li>
          )
        }

        return (
          <li onClick={(evt) => this.onSubItemClick(evt, navbarItemChild)} class="p-1 dark:bg-background">
            <a
              class={classNames(
                'no-underline block px-4 py-2 hover:text-primary hover:bg-slate-100 dark:hover:bg-zinc-600 rounded-md  p-2 dark:text-foreground',
                {
                  'text-zinc-600 md:text-zinc-800': this.state.active !== navbarItemChild.value,
                  'text-primary md:text-primary': this.state.active === navbarItemChild.value,
                  'dark:bg-zinc-200/20': this.state.active === navbarItemChild.value,
                },
              )}
              href={`#${navbarItemChild.path}`}
            >
              {navbarItemChild.text}
            </a>
          </li>
        )
    }
  }
  render() {
    return (
      <nav class="container mx-auto flex flex-wrap items-center">
        <div class="block md:hidden">
          <button
            onClick={this.onClick}
            data-collapse-toggle="navbar-multi-level"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-zinc-500 rounded-lg md:hidden hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:focus:ring-zinc-600"
            aria-controls="navbar-multi-level"
            aria-expanded="false"
          >
            {this.state.isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="2"
                  d="M12 12L19 19M12 12L5 5M12 12L5 19M12 12L19 5"
                ></path>
              </svg>
            ) : (
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            )}
          </button>
        </div>
        <div
          class={classNames(
            'max-h-[calc(100vh-50px)] overflow-auto md:overflow-visible  w-full left-0 fixed top-14 pt-6 pb-14 md:pt-0 md:pb-0 whitespace-nowrap bg-[#fafafa] md:bg-transparent text-center md:w-auto md:flex-grow dark:bg-background md:dark:bg-transparent md:flex md:items-center md:static text-foreground',
            {
              hidden: !this.state.isOpen,
            },
          )}
        >
          <ul class="w-[288px] mx-auto md:w-full md:flex md:flex-row text-left">
            {this.props.items.map((navbarItem: NavbarItem) => {
              if (navbarItem.tag) {
                return (
                  <li class="md:relative md:mr-2 p-1 border-b md:border-none group md:rounded-md">
                    <navbarItem.tag></navbarItem.tag>
                  </li>
                )
              }
              return (
                <li
                  onClick={(evt) => this.onItemClick(evt, navbarItem)}
                  class={classNames('md:relative md:mr-2 p-1 border-b md:border-none group md:rounded-md', {
                    'hover:bg-slate-100 dark:hover:bg-zinc-600': !navbarItem.children,
                    'dark:bg-zinc-200/20': this.state.active && this.state.active === navbarItem.value,
                  })}
                >
                  <a
                    class="block text-zinc-800 cursor-pointer hover:text-primary p-2 md:py-1"
                    target={navbarItem.href ? navbarItem.target || '_blank' : '_self'}
                    unsafeHTML={navbarItem.inner ? { html: navbarItem.inner } : null}
                    href={
                      navbarItem.children
                        ? 'javascript:void(0)'
                        : navbarItem.href
                        ? navbarItem.href
                        : `#${navbarItem.path}`
                    }
                  >
                    {navbarItem.img && (
                      <img class="h-6 w-6 inline-block rounded-full mr-1 relative -top-0.5" src={navbarItem.img}></img>
                    )}
                    <span
                      class={classNames('dark:text-foreground', {
                        'text-primary': this.state.active && this.state.active === navbarItem.value,
                      })}
                    >
                      {navbarItem.text}
                    </span>
                    {navbarItem.href && (
                      <div class="w-3 h-3 inline-block text-zinc-600 ml-1 dark:text-foreground">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          class="w-full h-full"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none" />
                          <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z" />
                        </svg>
                      </div>
                    )}

                    {navbarItem.children && (
                      <svg
                        className="dark:text-foreground md:inline-block ml-1 relative -top-0.5 hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          stroke-width="3"
                          fillRule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    )}
                    {navbarItem.children && (
                      <ul class="md:absolute md:left-1/2 md:-translate-x-1/2 w-auto  mt-2 text-sm md:text-base dark:bg-background bg-[#fafafa] md:border static text-zinc-600 overflow-hidden md:shadow-md md:invisible group-hover:visible transition-all duration-150 delay-100 rounded-md hover:text-primary z-50">
                        {navbarItem.children.map((navbarItemChild: NavbarItem) => {
                          return this.renderNavbarItemChild(navbarItemChild)
                        })}
                      </ul>
                    )}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    )
  }
}
