import { tag, Component, classNames, bind } from 'omi'

import { Calendar, CalendarLocale } from './calendar'
import '../select'

const theme = {
  td: 'text-center data-[dpk-cell-disabled]:text-neutral-300 data-[dpk-cell-disabled]:cursor-default data-[dpk-cell-disabled]:pointer-events-none data-[dpk-cell-disabled]:hover:cursor-default hover:cursor-pointer group w-6 h-8',
  tdInner:
    'mx-auto box-border group-[:not([dpk-cell-disabled]):not([dpk-cell-selected]):hover]:bg-neutral-300 group-[[dpk-cell-selected]]:bg-primary group-[[dpk-cell-selected]]:text-white group-[:not([dpk-cell-selected])[dpk-cell-focused]]:bg-neutral-100 group-[[dpk-cell-focused]]:data-[dpk-cell-selected]:bg-primary group-[[dpk-cell-current]]:border-solid group-[[dpk-cell-current]]:border-black group-[[dpk-cell-current]]:border dark:group-[:not([dpk-cell-disabled]):not([dpk-cell-selected]):hover]:bg-white/10 dark:group-[[dpk-cell-current]]:border-white bg-background text-foreground dark:group-[:not([dpk-cell-selected])[dpk-cell-focused]]:bg-white/10 dark:group-[[dpk-cell-disabled]]:text-neutral-500 w-6 h-6 leading-6 rounded text-[13px] group-[[dpk-cell-current]]:leading-[21px] ',
}

// dpk-cell-selected
// dpk-cell-current

interface Props {
  value: string
  locale: CalendarLocale
  range: boolean
  className: string
  hasFooter: boolean
}

@tag('o-calendar')
export class CalendarComponent extends Component<Props> {
  static css = [
    `:host {
    display: block;
  }
  `,
  ]
  // @ts-ignore
  calendar: Calendar

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

  // @ts-ignore
  years: number[]

  @bind
  onClick(evt: MouseEvent) {
    // @ts-ignore
    const arr = evt.currentTarget.dataset.date.split('-')
    this.state.selectedYear = Number(arr[0])
    this.state.selectedMonth = Number(arr[1]) - 1
    this.state.selectedDay = Number(arr[2])
    this.update()
    this.fire('select', {
      date: (evt.currentTarget as HTMLElement).dataset.date,
      nativeEvent: evt,
    })
  }

  @bind
  onMonthClick(evt: CustomEvent) {
    this.state.currentMonth = evt.detail.value
    this.calendar.setMonth(this.state.currentYear as number, this.state.currentMonth as number)
    this.generateMonthCalendar()
    this.update()
  }

  @bind
  onYearClick(evt: CustomEvent) {
    this.state.currentYear = evt.detail.value
    this.calendar.setMonth(this.state.currentYear as number, this.state.currentMonth as number)
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
  currentMonth() {
    this.calendar.currentMonth()
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
  onYearShow() {}

  @bind
  onMonthShow() {}

  render() {
    return (
      <div class={classNames('w-[280px] h-[280px] border rounded')}>
        <div class="relative h-full bg-background text-foreground rounded">
          <div class="px-1 pt-2 pb-0 flex justify-between bg-background text-foreground items-center rounded ml-2">
            <o-select
              value={this.calendar.getMonth()}
              onChange={this.onMonthClick}
              class="w-20 h-8"
              options={this.calendar.translations.months.map((month, index) => {
                return {
                  text: month,
                  value: index,
                }
              })}
            ></o-select>

            <o-select
              value={this.calendar.getYear()}
              onChange={this.onYearClick}
              class="w-20 h-8"
              options={this.years.map((year) => {
                return {
                  text: year,
                  value: year,
                }
              })}
            ></o-select>

            <div class="flex gap-2">
              <button
                onClick={this.prevMonth}
                class="p-0 w-5 h-5 leading-10 border-none outline-none m-0 bg-background text-foreground mr-1 hover:bg-zinc-200  dark:hover:bg-zinc-600 hover:rounded  focus:rounded [&>svg]:w-4 [&>svg]:h-4 [&>svg]:mx-auto"
                aria-label="Previous month"
                dpk-previous-button-ref=""
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="3"
                  stroke="currentColor"
                  class="w-3 h-3"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
                </svg>
              </button>
              <button
                onClick={this.currentMonth}
                class="flex items-center justify-center w-5 h-5 leading-10 border-none outline-none m-0  mr-1 hover:bg-zinc-200  dark:hover:bg-zinc-600 hover:rounded  focus:rounded  [&>svg]:mx-auto"
                aria-label="Previous month"
                dpk-previous-button-ref=""
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </button>
              <button
                onClick={this.nextMonth}
                class="p-0 w-5 h-5 leading-10 border-none outline-none m-0 bg-background text-foreground hover:bg-zinc-200  dark:hover:bg-zinc-600 hover:rounded [&>svg]:w-4 [&>svg]:h-4 [&>svg]:rotate-180 [&>svg]:mx-auto"
                aria-label="Next month"
                dpk-next-button-ref=""
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="3"
                  stroke="currentColor"
                  class="w-3 h-3"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
                </svg>
              </button>
            </div>
          </div>

          <div class="outline-none px-3 pt-2 bg-background text-foreground" dpk-view-ref="" tabindex="0">
            <table class="mx-auto w-full">
              <thead>
                <tr>
                  {this.calendar.translations.weekdaysShort.map((day, index) => {
                    return (
                      <th
                        class="w-8 h-8 text-center text-[12px] font-normal bg-background text-foreground"
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
                {this.calendarMatrix.map((week) => {
                  const year = this.calendar.getYear()
                  const month = this.calendar.getMonth() + 1
                  return (
                    <tr>
                      {week.map((day) => {
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
                            dpk-cell-selected={
                              `${year}-${month}-${day}` ===
                              `${this.state.selectedYear}-${(this.state.selectedMonth as number) + 1}-${
                                this.state.selectedDay
                              }`
                            }
                            dpk-cell-disabled={day === ''}
                            dpk-cell-current={`${year}-${month}-${day}` === this.calendar.now()}
                            data-date={day === '' ? '' : `${year}-${month}-${day}`}
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
        </div>
      </div>
    )
  }
}
