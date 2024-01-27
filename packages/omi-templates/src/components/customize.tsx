import { render, tag, Component, bind, classNames } from 'omi'
import { isDark } from '../store'

declare global {
  interface Window {
    setDarkMode(): void
    setLightMode(): void
    refreshDark(): void
  }
}

let currentTheme = ''

@tag('o-customize')
class Customize extends Component {
  @bind
  onColorClick(evt: MouseEvent) {
    const target = evt.currentTarget as HTMLElement
    this.state.selectedColor = target.dataset.color || ''
    currentTheme = this.state.selectedColor
    this.update()
    target.dataset.color && setPrimary(target.dataset.color.replace(/hsl\(|\)/g, ''))
  }

  colors = [
    { color: 'hsl(219 100% 43%)', name: 'T-Blue' },
    { color: 'hsl(220, 50%, 50%)', name: 'Indigo' },
    { color: 'hsl(200, 50%, 50%)', name: 'Sea' },
    { color: 'hsl(221.2 83.2% 53.3%)', name: 'Blue' },
    { color: 'hsl(149 93% 39%)', name: 'Jade' },
    { color: 'hsl(160, 50%, 50%)', name: 'Teal' },
    { color: 'hsl(120, 50%, 50%)', name: 'Cyan' },
    { color: 'hsl(100, 50%, 50%)', name: 'Mint' },
    { color: 'hsl(80, 50%, 50%)', name: 'Emerald' },
    { color: 'hsl(142.1 76.2% 36.3%)', name: 'Green' },
    { color: 'hsl(180, 50%, 50%)', name: 'Azure' },
    { color: 'hsl(190, 35%, 55%)', name: 'Steel' },
    { color: 'hsl(210, 30%, 60%)', name: 'Silver' },
    { color: 'hsl(230, 25%, 65%)', name: 'Lavender' },
    { color: 'hsl(250, 20%, 70%)', name: 'Lilac' },
    { color: 'hsl(25 5.3% 44.7%)', name: 'Stone' },
    { color: 'hsl(220 8.9% 46.1%)', name: 'Gray' },
    { color: 'hsl(0 0% 45.1%)', name: 'Neutral' },
    { color: 'hsl(240 5.9% 10%)', name: 'Black' },
    { color: 'hsl(47.9 95.8% 53.1%)', name: 'Yellow' },
    { color: 'hsl(60, 50%, 50%)', name: 'Lime' },
    { color: 'hsl(30, 75%, 65%)', name: 'Gold' },
    { color: 'hsl(346.8 77.2% 49.8%)', name: 'Rose' },
    { color: 'hsl(0 72.2% 50.6%)', name: 'Red' },
    { color: 'hsl(24.6 95% 53.1%)', name: 'Orange' },
    { color: 'hsl(262.1 83.3% 57.8%)', name: 'Violet' },
    { color: 'hsl(260, 50%, 50%)', name: 'Purple' },
    { color: 'hsl(280, 50%, 50%)', name: 'Magenta' },
    { color: 'hsl(300, 50%, 50%)', name: 'Pink' },
    { color: 'hsl(320, 50%, 50%)', name: 'Ras' },
    { color: 'hsl(340, 50%, 50%)', name: 'Crimson' },
    { color: 'hsl(360, 50%, 50%)', name: 'Scarlet' },
    { color: 'hsl(380, 50%, 50%)', name: 'Coral' },
  ]

  state = {
    selectedColor: currentTheme || this.colors[0].color,
  }

  @bind
  setDarkMode() {
    isDark.value = true
  }

  @bind
  setLightMode() {
    isDark.value = false
  }

  render() {
    return (
      <div
        role="dialog"
        class="border text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 w-[340px] rounded-2xl bg-white p-6 dark:bg-zinc-950"
        tabindex="-1"
      >
        <div class="theme-zinc w-full flex flex-col space-y-4 md:space-y-6" style="--radius: 0.5rem;">
          <div class="flex items-start pt-4 md:pt-0">
            <div class="space-y-1 pr-2">
              <div class="font-semibold leading-none tracking-tight text-lg dark:text-foreground">自定义</div>
              <div class="text-muted-foreground text-gray-600 dark:text-foreground">为你的模板选择一个颜色和样式。</div>
            </div>
          </div>
          <div class="flex flex-1 flex-col space-y-4 md:space-y-6">
            <div class="space-y-1.5">
              <label class="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-foreground">
                颜色
              </label>
              <div class="grid grid-cols-3 gap-2">
                {this.colors.map((item) => {
                  return (
                    <button
                      onClick={this.onColorClick}
                      class="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs justify-start dark:text-foreground"
                      data-color={item.color}
                      style={`--theme-primary: ${item.color};`}
                    >
                      <span class="mr-0.5 flex h-5 w-5 shrink-0 -translate-x-1 items-center justify-center rounded-full bg-[--theme-primary]">
                        {this.state.selectedColor === item.color && (
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4 text-white"
                          >
                            <path
                              d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                              fill="currentColor"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        )}
                      </span>
                      {item.name}
                    </button>
                  )
                })}
              </div>
            </div>
            {/* <div class="space-y-1.5">
              <label class="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">圆角</label>
              <div class="grid grid-cols-5 gap-2">
                <button class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs">
                  0
                </button>
                <button class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs">
                  0.3
                </button>
                <button class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs border-2 border-primary">
                  0.5
                </button>
                <button class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs">
                  0.75
                </button>
                <button class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs">
                  1.0
                </button>
              </div>
            </div> */}
            <div class="space-y-1.5 dark:text-foreground">
              <label class="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">模式</label>
              <div class="grid grid-cols-3 gap-2">
                <button
                  onClick={this.setLightMode}
                  class={classNames(
                    'inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs',
                    {
                      'border-2 border-primary': !isDark.value,
                    },
                  )}
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="mr-1 -translate-x-1"
                  >
                    <path
                      d="M7.5 0C7.77614 0 8 0.223858 8 0.5V2.5C8 2.77614 7.77614 3 7.5 3C7.22386 3 7 2.77614 7 2.5V0.5C7 0.223858 7.22386 0 7.5 0ZM2.1967 2.1967C2.39196 2.00144 2.70854 2.00144 2.90381 2.1967L4.31802 3.61091C4.51328 3.80617 4.51328 4.12276 4.31802 4.31802C4.12276 4.51328 3.80617 4.51328 3.61091 4.31802L2.1967 2.90381C2.00144 2.70854 2.00144 2.39196 2.1967 2.1967ZM0.5 7C0.223858 7 0 7.22386 0 7.5C0 7.77614 0.223858 8 0.5 8H2.5C2.77614 8 3 7.77614 3 7.5C3 7.22386 2.77614 7 2.5 7H0.5ZM2.1967 12.8033C2.00144 12.608 2.00144 12.2915 2.1967 12.0962L3.61091 10.682C3.80617 10.4867 4.12276 10.4867 4.31802 10.682C4.51328 10.8772 4.51328 11.1938 4.31802 11.3891L2.90381 12.8033C2.70854 12.9986 2.39196 12.9986 2.1967 12.8033ZM12.5 7C12.2239 7 12 7.22386 12 7.5C12 7.77614 12.2239 8 12.5 8H14.5C14.7761 8 15 7.77614 15 7.5C15 7.22386 14.7761 7 14.5 7H12.5ZM10.682 4.31802C10.4867 4.12276 10.4867 3.80617 10.682 3.61091L12.0962 2.1967C12.2915 2.00144 12.608 2.00144 12.8033 2.1967C12.9986 2.39196 12.9986 2.70854 12.8033 2.90381L11.3891 4.31802C11.1938 4.51328 10.8772 4.51328 10.682 4.31802ZM8 12.5C8 12.2239 7.77614 12 7.5 12C7.22386 12 7 12.2239 7 12.5V14.5C7 14.7761 7.22386 15 7.5 15C7.77614 15 8 14.7761 8 14.5V12.5ZM10.682 10.682C10.8772 10.4867 11.1938 10.4867 11.3891 10.682L12.8033 12.0962C12.9986 12.2915 12.9986 12.608 12.8033 12.8033C12.608 12.9986 12.2915 12.9986 12.0962 12.8033L10.682 11.3891C10.4867 11.1938 10.4867 10.8772 10.682 10.682ZM5.5 7.5C5.5 6.39543 6.39543 5.5 7.5 5.5C8.60457 5.5 9.5 6.39543 9.5 7.5C9.5 8.60457 8.60457 9.5 7.5 9.5C6.39543 9.5 5.5 8.60457 5.5 7.5ZM7.5 4.5C5.84315 4.5 4.5 5.84315 4.5 7.5C4.5 9.15685 5.84315 10.5 7.5 10.5C9.15685 10.5 10.5 9.15685 10.5 7.5C10.5 5.84315 9.15685 4.5 7.5 4.5Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  白天
                </button>
                <button
                  onClick={this.setDarkMode}
                  class={classNames(
                    'inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs',
                    {
                      'border-2 border-primary': isDark.value,
                    },
                  )}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="mr-1 -translate-x-1"
                    width="15"
                    height="15"
                    aria-hidden="true"
                    focusable="false"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"></path>
                  </svg>
                  黑夜
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

let dom: HTMLElement | null = null

export function showCustomize(): void {
  if (dom) return
  dom = render(
    <Customize class="z-[100002] opacity-0 scale-0 transition-all ease-in-out duration-300 fixed right-6 bottom-24" />,
    document.body,
  )
  requestAnimationFrame(() => {
    dom!.classList.remove('opacity-0')
    dom!.classList.remove('scale-0')
    dom!.classList.add('opacity-100')
    dom!.classList.add('scale-100')
    document.addEventListener('mousedown', handleClickOutside)
    // 后来出现的 dom 需要刷一遍黑夜白天模式加上 dark class
    window.refreshDark()
  })
}

export function hideCustomize(): void {
  if (!dom) return
  dom.classList.add('opacity-0')
  dom.classList.add('scale-0')
  dom.classList.remove('opacity-100')
  dom.classList.remove('scale-100')
  dom.addEventListener('transitionend', () => {
    dom && dom.remove()
    document.removeEventListener('mousedown', handleClickOutside)
    dom = null
  })
}

function handleClickOutside(event: MouseEvent): void {
  if (!dom || dom.contains(event.target as Node)) return
  hideCustomize()
}

export const setPrimary = (color: string) => {
  document.documentElement.style.setProperty('--primary', color)
}
