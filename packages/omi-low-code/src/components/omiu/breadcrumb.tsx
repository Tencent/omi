import { Component, tag } from 'omi'

type BreadcrumbItem = {
  label: string
  href: string
  icon: string
  separator?: string
}

type BreadcrumbProps = {
  items?: BreadcrumbItem[]
}

@tag('o-breadcrumb')
export class Breadcrumb extends Component<BreadcrumbProps> {
  static css = `
  :host {
    display: inline-flex;
  }
  `
  static defaultProps = {
    items: [],
  }

  render() {
    return (
      <nav class="flex" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          {this.props.items?.map((item, index) => {
            return (
              <li class="inline-flex items-center">
                <div class="flex items-center">
                  {index > 0 && (
                    <svg
                      class="rtl:rotate-180 w-3 h-3 text-zinc-400 mx-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                  )}
                  <a
                    href={item.href}
                    class="inline-flex items-center ms-1 text-sm font-medium text-zinc-700 hover:text-primary md:ms-2 dark:text-zinc-400 dark:hover:text-white"
                  >
                    {item.icon && <i class={`t-icon t-icon-${item.icon} mr-1`}></i>}
                    {item.label}
                  </a>
                </div>
              </li>
            )
          })}
        </ol>
      </nav>
    )
  }
}
