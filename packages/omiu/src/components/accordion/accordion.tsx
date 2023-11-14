import { tag, Component, classNames, OmiProps } from 'omi'
import { tailwind } from '@/tailwind'
import '../collapse/collapse'

@tag('o-accordion')
export class Button extends Component {
  static css = [
    tailwind,
    `:host {
    display: block;
  }
  `,
  ]

  static defaultProps = {
    actives: [],
    className: '',
  }

  install() {
    this.actives_ = [...this.props.actives]
  }

  receiveProps() {
    this.actives_ = [...this.props.actives]
  }

  actives_: string[] = []

  onClick(name) {
    this.actives_.indexOf(name) === -1 ? addString(this.actives_, name) : removeString(this.actives_, name)
    this.transition = true
    this.update()

    setTimeout(() => {
      this.transition = false
      this.update()
    }, 350)

    this.fire('change', this.actives_)
  }

  transition: boolean = false

  render(props) {
    return (
      <div>
        {props.children.map((child: VNode, index) => {
          return (
            <div
              class={classNames(
                'border border-b-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800',
                {
                  'rounded-t-lg': index === 0,
                  'rounded-b-lg overflow-hidden !border-b': index === props.children.length - 1,
                },
              )}
            >
              <h2 class="mb-0" onClick={() => this.onClick(child.attributes.name)}>
                <button
                  class={classNames(
                    'group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400',
                    {
                      '!border-b': this.actives_.includes(child.attributes.name),
                    },
                  )}
                  type="button"
                >
                  {child.attributes.title}
                  <span
                    className={`${
                      this.actives_.includes(child.attributes.name)
                        ? `rotate-[-180deg] -mr-1`
                        : `rotate-0 fill-[#212529] dark:fill-white`
                    } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-6 w-6"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </button>
              </h2>
              <o-collapse rounded={false} show={this.actives_.includes(child.attributes.name)}>
                <div class="px-5 py-4">{child.children}</div>
              </o-collapse>
            </div>
          )
        })}
      </div>
    )
  }
}

// 根据字符串查找索引
function findIndexByString(array, str) {
  return array.indexOf(str)
}

// 添加字符串
function addString(array, str) {
  const index = findIndexByString(array, str)
  if (index === -1) {
    array.push(str)
  } else {
    console.log('String already exists.')
  }
}

// 删除字符串
function removeString(array, str) {
  const index = findIndexByString(array, str)
  if (index !== -1) {
    array.splice(index, 1)
  } else {
    console.log('String not found.')
  }
}
