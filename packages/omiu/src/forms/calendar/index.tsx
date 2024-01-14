import { tag, Component, classNames, bind } from 'omi'
import { tailwind } from '@/tailwind'
import { Calendar } from './calendar'
import '../../components/popover'

const theme = {
  td: 'text-center data-[te-datepicker-cell-disabled]:text-neutral-300 data-[te-datepicker-cell-disabled]:cursor-default data-[te-datepicker-cell-disabled]:pointer-events-none data-[te-datepicker-cell-disabled]:hover:cursor-default hover:cursor-pointer group w-10 h-10 xs:max-md:landscape:w-8 xs:max-md:landscape:h-8',
  tdInner:
    'mx-auto group-[:not([data-te-datepicker-cell-disabled]):not([data-te-datepicker-cell-selected]):hover]:bg-neutral-300 group-[[data-te-datepicker-cell-selected]]:bg-primary group-[[data-te-datepicker-cell-selected]]:text-white group-[:not([data-te-datepicker-cell-selected])[data-te-datepicker-cell-focused]]:bg-neutral-100 group-[[data-te-datepicker-cell-focused]]:data-[te-datepicker-cell-selected]:bg-primary group-[[data-te-datepicker-cell-current]]:border-solid group-[[data-te-datepicker-cell-current]]:border-black group-[[data-te-datepicker-cell-current]]:border dark:group-[:not([data-te-datepicker-cell-disabled]):not([data-te-datepicker-cell-selected]):hover]:bg-white/10 dark:group-[[data-te-datepicker-cell-current]]:border-white dark:text-white dark:group-[:not([data-te-datepicker-cell-selected])[data-te-datepicker-cell-focused]]:bg-white/10 dark:group-[[data-te-datepicker-cell-disabled]]:text-neutral-500 w-9 h-9 leading-9 rounded-[50%] text-[13px]',
}

// data-te-datepicker-cell-selected
// data-te-datepicker-cell-current

@tag('o-calendar')
export class CalendarComponent extends Component {
  static css = [
    tailwind,
    `:host {
    display: block;
  }
  `,
  ]
  calendar: Calendar | null = null
  calendarMatrix: string[][] = []
  state: {
    selectedYear: number | null
    selectedMonth: number | null
    selectedDay: number | null

    currentYear: number | null
    currentMonth: number | null
    currentDay: number | null
  } = {
    selectedYear: null,
    selectedMonth: null,
    selectedDay: null,

    currentYear: null,
    currentMonth: null,
    currentDay: null,
  }
  years: number[]

  @bind
  onClick(evt) {
    const arr = evt.currentTarget.dataset.teDate.split('-')
    this.state.selectedYear = Number(arr[0])
    this.state.selectedMonth = Number(arr[1]) - 1
    this.state.selectedDay = Number(arr[2])
    this.update()
    this.fire('select', {
      date: evt.currentTarget.dataset.teDate,
      nativeEvent: evt,
    })
  }

  @bind
  onMonthClick(evt) {
    this.state.currentMonth = Number(evt.currentTarget.dataset.month)
    this.calendar.setMonth(this.state.currentYear, this.state.currentMonth)
    this.generateMonthCalendar()
    this.update()
  }

  @bind
  onYearClick(evt) {
    this.state.currentYear = Number(evt.currentTarget.dataset.year)
    this.calendar.setMonth(this.state.currentYear, this.state.currentMonth)
    this.generateMonthCalendar()
    this.update()
  }

  @bind
  prevMonth() {
    this.calendar.prevMonth()
    this.state.currentYear = this.calendar.getYear()
    this.state.currentMonth = this.calendar.getMonth()
    this.generateMonthCalendar()
    this.update()
  }

  @bind
  nextMonth() {
    this.calendar.nextMonth()
    this.state.currentYear = this.calendar.getYear()
    this.state.currentMonth = this.calendar.getMonth()
    this.generateMonthCalendar()
    this.update()
  }

  generateMonthCalendar() {
    this.calendar.setDate(
      `${this.state.currentYear}-${(this.state.currentMonth as number) + 1}-${this.state.currentDay}`,
    )
    this.calendarMatrix = this.calendar.generateMonthCalendar()
  }

  install(): void {
    if (this.props.value) {
      const arr = this.props.value.split('-')
      this.state.currentYear = Number(arr[0])
      this.state.currentMonth = Number(arr[1]) - 1
      this.state.currentDay = Number(arr[2])
      this.state.selectedYear = Number(arr[0])
      this.state.selectedMonth = Number(arr[1]) - 1
      this.state.selectedDay = Number(arr[2])
    }

    this.calendar = new Calendar(this.props.value, this.props.locale)
    this.calendarMatrix = this.calendar.generateMonthCalendar()

    const currentYear = new Date().getFullYear()
    const years = []

    for (let i = currentYear - 101; i <= currentYear + 101; i++) {
      years.push(i)
    }

    this.years = years
  }

  setDate(date: string): void {
    this.calendar.setDate(date)
    this.calendarMatrix = this.calendar.generateMonthCalendar()
    this.update()
  }

  static defaultProps = {
    vaule: '',
    // 直接在一个日历上选择范围，默认是 false
    range: false,
    className: '',
    hasFooter: false,
  }

  @bind
  onYearShow() {
    const currentYearElement = this.rootElement?.querySelector(`#year-${this.state.currentYear}`)
    if (currentYearElement) {
      // 获取元素在父容器中的位置
      const prevScrollTop = currentYearElement.parentNode.scrollTop
      const rect = currentYearElement.getBoundingClientRect()
      const containerRect = currentYearElement.parentNode.getBoundingClientRect()
      const offset = prevScrollTop + rect.top - containerRect.top
      // 滚动父容器

      currentYearElement.parentNode.scrollTop = offset
    }
  }

  @bind
  onMonthShow() {
    const currentMonthElement = this.rootElement?.querySelector(`#month-${this.state.currentMonth}`)
    if (currentMonthElement) {
      // 获取元素在父容器中的位置
      const prevScrollTop = currentMonthElement.parentNode.scrollTop
      const rect = currentMonthElement.getBoundingClientRect()
      const containerRect = currentMonthElement.parentNode.getBoundingClientRect()
      const offset = prevScrollTop + rect.top - containerRect.top
      // 滚动父容器
      currentMonthElement.parentNode.scrollTop = offset
    }
  }

  render(props) {
    return (
      <div
        class={classNames(
          'flex flex-col w-[328px] bg-white rounded shadow-lg z-[1066] xs:max-md:landscape:w-[475px] xs:max-md:landscape:flex-row dark:bg-zinc-700 animate-[fade-in_0.3s_both] px-[auto] motion-reduce:transition-none motion-reduce:animate-none',
          {
            'h-[410px] xs:max-md:landscape:h-[360px]': props.hasFooter,
            'h-[354px] xs:max-md:landscape:h-[304px]': !props.hasFooter,
          },
        )}
      >
        <div class="relative h-full">
          <div class="px-3 pt-2.5 pb-0 flex justify-between text-black/[64]">
            <o-popover onShow={this.onYearShow}>
              <button
                class="flex items-center outline-none p-2.5 text-neutral-500 font-medium text-[0.9rem] rounded shadow-none bg-transparent m-0 border-none hover:bg-neutral-200 focus:bg-neutral-200  dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                aria-label="Choose year and month"
                data-te-datepicker-view-change-button-ref=""
              >
                {this.calendar.getYear()}
                <span class="inline-block pointer-events-none ml-[3px] [&>svg]:w-4 [&>svg]:h-4 [&>svg]:fill-neutral-500 dark:[&>svg]:fill-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="0"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                  </svg>
                </span>
              </button>

              <div class="w-20 overflow-auto h-[263px] bg-white border rounded" slot="content">
                {this.years.map((year) => {
                  return (
                    <a
                      href="javascript:"
                      onClick={this.onYearClick}
                      aria-current="true"
                      data-year={year}
                      id={`year-${year}`}
                      class={classNames('block w-full cursor-pointer p-2', {
                        'text-primary-600 bg-primary-100': this.state.currentYear === year,
                        'transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200':
                          !this.state.currentYear || this.state.currentYear !== year,
                      })}
                    >
                      {year}
                    </a>
                  )
                })}
              </div>
            </o-popover>

            <o-popover onShow={this.onMonthShow}>
              <button
                class="flex items-center outline-none p-2.5 text-neutral-500 font-medium text-[0.9rem] rounded shadow-none bg-transparent m-0 border-none hover:bg-neutral-200 focus:bg-neutral-200  dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                aria-label="Choose year and month"
                data-te-datepicker-view-change-button-ref=""
              >
                {this.calendar.translations.months[this.state.currentMonth as number] || this.calendar.getMonthString()}
                <span class="inline-block pointer-events-none ml-[3px] [&>svg]:w-4 [&>svg]:h-4 [&>svg]:fill-neutral-500 dark:[&>svg]:fill-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="0"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                  </svg>
                </span>
              </button>

              <div class="w-24 overflow-auto h-[263px] bg-white border rounded" slot="content">
                {Array.from({ length: 12 }).map((_, index) => {
                  return (
                    <a
                      href="javascript:"
                      aria-current="true"
                      data-month={index}
                      id={`month-${index}`}
                      onClick={this.onMonthClick}
                      class={classNames('block w-full cursor-pointer p-2', {
                        'text-primary-600 bg-primary-100': this.state.currentMonth === index,
                        'transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200':
                          !this.state.currentMonth || this.state.currentMonth !== index,
                      })}
                    >
                      {this.calendar.translations.months[index]}
                    </a>
                  )
                })}

                {/* <a
                  href="#!"
                  class="block w-full cursor-pointer p-2 ">
                  A second link item
                </a> */}

                {/* <a
                  href="#!"
                  class="block w-full cursor-default p-4 text-neutral-500 focus:outline-none focus:ring-0">
                  A disabled link item
                </a> */}
              </div>
            </o-popover>

            <div>
              <button
                onClick={this.prevMonth}
                class="p-0 w-10 h-10 leading-10 border-none outline-none m-0 text-gray-600 bg-transparent mr-6 hover:bg-neutral-200 hover:rounded-[50%] focus:bg-neutral-200 focus:rounded-[50%] dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:mx-auto"
                aria-label="Previous month"
                data-te-datepicker-previous-button-ref=""
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="3"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
                </svg>
              </button>
              <button
                onClick={this.nextMonth}
                class="p-0 w-10 h-10 leading-10 border-none outline-none m-0 text-gray-600 bg-transparent hover:bg-neutral-200 hover:rounded-[50%] focus:bg-neutral-200 focus:rounded-[50%] dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:rotate-180 [&>svg]:mx-auto"
                aria-label="Next month"
                data-te-datepicker-next-button-ref=""
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="3"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
                </svg>
              </button>
            </div>
          </div>

          <div class="outline-none px-3" data-te-datepicker-view-ref="" tabindex="0">
            <table class="mx-auto w-[304px]">
              <thead>
                <tr>
                  {this.calendar.translations.weekdaysShort.map((day, index) => {
                    return (
                      <th
                        class="w-10 h-10 text-center text-[12px] font-normal dark:text-white"
                        scope="col"
                        aria-label={this.calendar.translations.weekdays[index]}
                      >
                        {day}
                      </th>
                    )
                  })}
                </tr>
              </thead>
              <tbody>
                {this.calendarMatrix.map((week, index) => {
                  const year = this.calendar.getYear()
                  const month = this.calendar.getMonth() + 1
                  return (
                    <tr>
                      {week.map((day, index) => {
                        return (
                          <td
                            onClick={this.onClick}
                            class={classNames(theme.td, {
                              'text-primary-foreground':
                                `${year}-${month}-${day}` ===
                                `${this.state.selectedYear}-${(this.state.selectedMonth as number) + 1}-${
                                  this.state.selectedDay
                                }`,
                            })}
                            data-te-datepicker-cell-selected={
                              `${year}-${month}-${day}` ===
                              `${this.state.selectedYear}-${(this.state.selectedMonth as number) + 1}-${
                                this.state.selectedDay
                              }`
                            }
                            data-te-datepicker-cell-disabled={day === ''}
                            data-te-datepicker-cell-current={`${year}-${month}-${day}` === this.calendar.now()}
                            data-te-date={day === '' ? '' : `${year}-${month}-${day}`}
                          >
                            <div class={classNames(theme.tdInner)}>{day}</div>
                          </td>
                        )
                      })}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          {props.hasFooter && (
            <div class="h-14 flex absolute w-full bottom-0 justify-end items-center px-3">
              <button
                class="outline-none bg-white text-primary border-none cursor-pointer py-0 px-2.5 uppercase text-[0.8rem] leading-10 font-medium h-10 tracking-[.1rem] rounded mb-2.5 hover:bg-neutral-200 focus:bg-neutral-200 dark:bg-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10 mr-auto"
                aria-label="Clear selection"
                data-te-datepicker-clear-button-ref=""
              >
                {this.calendar.translations.clear}
              </button>
              <button
                class="outline-none bg-white text-primary border-none cursor-pointer py-0 px-2.5 uppercase text-[0.8rem] leading-10 font-medium h-10 tracking-[.1rem] rounded mb-2.5 hover:bg-neutral-200 focus:bg-neutral-200 dark:bg-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                aria-label="Cancel selection"
                data-te-datepicker-cancel-button-ref=""
              >
                {this.calendar.translations.cancel}
              </button>
              <button
                class="outline-none bg-white text-primary border-none cursor-pointer py-0 px-2.5 uppercase text-[0.8rem] leading-10 font-medium h-10 tracking-[.1rem] rounded mb-2.5 hover:bg-neutral-200 focus:bg-neutral-200 dark:bg-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                aria-label="Confirm selection"
                data-te-datepicker-ok-button-ref=""
              >
                {this.calendar.translations.ok}
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}
