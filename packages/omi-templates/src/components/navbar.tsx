import { tag, Component, bind, classNames } from 'omi'
import './dark-switch'

type MenuItem = {
  text: string
  href: string
  target: string
  name: string
  path: string
  value: string
  type: string
  img?: string
  inner?: string
  children: any[]
  tag?: string
}

type Props = {
  menuItems: MenuItem[]
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
    menu: false,
    active: '',
  }

  install() {
    this.state.active = this.props.active
  }

  @bind
  onMenuClick(evt: MouseEvent, menuItem: MenuItem) {
    if (!menuItem.value) {
      return
    }
    this.state.menu = false
    this.state.active = menuItem.value
    this.update()
    this.fire('menu-click', {
      menuItem: menuItem,
      nativeEvent: evt,
    })
  }

  @bind
  onSubMenuClick(evt: MouseEvent, menuItem: MenuItem) {
    this.state.menu = false
    evt.stopPropagation()
    this.state.active = menuItem.value
    this.update()
    this.fire('menu-click', {
      menuItem: menuItem,
      nativeEvent: evt,
    })
  }

  @bind
  onClick() {
    this.state.menu = !this.state.menu
    this.update()
  }

  renderMenuItemChild(menuItemChild: MenuItem) {
    switch (menuItemChild.type) {
      case 'title':
        return (
          <li class="text-slate-300 dark:text-zinc-500 text-sm px-5 pt-2 cursor-default dark:text-foreground">
            {menuItemChild.text}
          </li>
        )
      case 'spliter':
        return (
          <li class="p-1">
            <hr class="border-t mx-auto" />
          </li>
        )
      default:
        if (menuItemChild.href) {
          return (
            <li
              onClick={(evt) => this.onSubMenuClick(evt, menuItemChild)}
              class="p-1 dark:bg-background dark:text-foreground"
            >
              <a
                class={classNames(
                  'no-underline block px-4 py-2 hover:text-primary hover:bg-slate-100 dark:hover:bg-zinc-600  rounded-md p-2 dark:text-foreground',
                  {
                    'text-gray-600 md:text-gray-800': this.state.active !== menuItemChild.value,
                    'text-primary md:text-primary': this.state.active === menuItemChild.value,
                    'dark:bg-zinc-200/20': this.state.active === menuItemChild.value,
                  },
                )}
                target={menuItemChild.target || '_blank'}
                href={`${menuItemChild.href}`}
              >
                {menuItemChild.name}
                <div class="w-3 h-3 inline-block text-gray-600 ml-1">
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
          <li onClick={(evt) => this.onSubMenuClick(evt, menuItemChild)} class="p-1 dark:bg-background">
            <a
              class={classNames(
                'no-underline block px-4 py-2 hover:text-primary hover:bg-slate-100 dark:hover:bg-zinc-600 rounded-md  p-2 dark:text-foreground',
                {
                  'text-gray-600 md:text-gray-800': this.state.active !== menuItemChild.value,
                  'text-primary md:text-primary': this.state.active === menuItemChild.value,
                  'dark:bg-zinc-200/20': this.state.active === menuItemChild.value,
                },
              )}
              href={`#${menuItemChild.path}`}
            >
              {menuItemChild.name}
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
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-multi-level"
            aria-expanded="false"
          >
            {this.state.menu ? (
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
              hidden: !this.state.menu,
            },
          )}
        >
          <ul class="w-[288px] mx-auto md:w-full md:flex md:flex-row text-left">
            {this.props.menuItems.map((menuItem: MenuItem) => {
              if (menuItem.tag) {
                return (
                  <li class="md:relative md:mr-2 p-1 border-b md:border-none group md:rounded-md">
                    <menuItem.tag></menuItem.tag>
                  </li>
                )
              }
              return (
                <li
                  onClick={(evt) => this.onMenuClick(evt, menuItem)}
                  class={classNames('md:relative md:mr-2 p-1 border-b md:border-none group md:rounded-md', {
                    'hover:bg-slate-100 dark:hover:bg-zinc-600': !menuItem.children,
                    'dark:bg-zinc-200/20': this.state.active === menuItem.value,
                  })}
                >
                  <a
                    class="block text-gray-800 cursor-pointer hover:text-primary p-2 md:py-1"
                    target={menuItem.href ? menuItem.target || '_blank' : '_self'}
                    unsafeHTML={menuItem.inner ? { html: menuItem.inner } : null}
                    href={
                      menuItem.children ? 'javascript:void(0)' : menuItem.href ? menuItem.href : `#${menuItem.path}`
                    }
                  >
                    {menuItem.img && (
                      <img class="h-6 w-6 inline-block rounded-full mr-1 relative -top-0.5" src={menuItem.img}></img>
                    )}
                    <span
                      class={classNames('dark:text-foreground', {
                        'text-primary': this.state.active === menuItem.value,
                      })}
                    >
                      {menuItem.name}
                    </span>
                    {menuItem.href && (
                      <div class="w-3 h-3 inline-block text-gray-600 ml-1 dark:text-foreground">
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

                    {menuItem.children && (
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
                    {menuItem.children && (
                      <ul class="md:absolute md:left-1/2 md:-translate-x-1/2 w-auto  mt-2 text-sm md:text-base dark:bg-background bg-[#fafafa] md:border static text-gray-600 overflow-hidden md:shadow-md md:invisible group-hover:visible transition-all duration-150 delay-100 rounded-md hover:text-primary">
                        {menuItem.children.map((menuItemChild: MenuItem) => {
                          return this.renderMenuItemChild(menuItemChild)
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
