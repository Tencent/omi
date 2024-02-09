import { tag, Component, classNames, bind } from 'omi'

type SidebarItem = {
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
  childrenHeight?: number
  isOpen?: boolean
  icon?: string
}

type Props = {
  items: SidebarItem[]
  active: string
  isOpen: boolean
}

const theme = {
  base: 'block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full',
  unactive:
    'text-zinc-500 before:hidden before:bg-zinc-300 hover:text-zinc-600 hover:before:block dark:text-zinc-400 dark:before:bg-zinc-700 dark:hover:text-zinc-300',
  active: 'font-semibold text-primary before:bg-primary brightness-125',
}

@tag('o-docs-sidebar')
export class Sidebar extends Component<Props> {
  static css = `
  :host {
    display: block;
  }
  `

  @bind
  onClick(item: SidebarItem, evt: MouseEvent) {
    this.state.active = item.value
    this.update()
    this.fire('change', {
      item: item,
      nativeEvent: evt,
    })
  }

  static defaultProps = {
    items: [],
    active: '',
  }

  state = {
    active: '',
  }

  install() {
    this.state.active = this.props.active
  }

  render() {
    return (
      <nav class="text-base lg:text-sm">
        <ul role="list" class="space-y-9">
          {this.props.items.map((item) => {
            return (
              <li>
                <h2 class="font-display font-medium text-zinc-900 dark:text-white">{item.text}</h2>
                <ul
                  role="list"
                  class="mt-2 space-y-2 border-l-2 border-zinc-100 lg:mt-4 lg:space-y-4 lg:border-zinc-200 dark:border-zinc-700"
                >
                  {item.children.map((child) => {
                    return (
                      <li class="relative">
                        <a
                          class={classNames(theme.base, {
                            [theme.active]: this.state.active === child.value,
                            [theme.unactive]: this.state.active !== child.value,
                          })}
                          onClick={(evt: MouseEvent) => this.onClick(child, evt)}
                          href="javascript:void(0)"
                        >
                          {child.text}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }
}
