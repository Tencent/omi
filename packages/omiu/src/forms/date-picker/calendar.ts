export enum FirstDayOfWeek {
  Sunday = 0,
  Monday = 1,
}

export enum CalendarLocale {
  English = 'en',
  Chinese = 'zh',
}

export interface CalendarTranslations {
  weekdaysShort: string[]
  months: string[]
  today?: string
  cancel?: string
  ok?: string
  weekdays: string[]
  clear?: string
}

export const calendarTranslations: Record<CalendarLocale, CalendarTranslations> = {
  [CalendarLocale.English]: {
    weekdaysShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    months: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    today: 'Today',
    cancel: 'Cancel',
    ok: 'OK',
    clear: 'Clear',
  },
  [CalendarLocale.Chinese]: {
    weekdaysShort: ['一', '二', '三', '四', '五', '六', '日'],
    weekdays: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    today: '今天',
    cancel: '取消',
    ok: '确定',
    clear: '清除',
  },
}

export class Calendar {
  private locale: CalendarLocale
  private currentDate: Date
  private firstDayOfWeek: FirstDayOfWeek
  translations: CalendarTranslations

  constructor(date?: Date, locale: CalendarLocale = CalendarLocale.English) {
    this.currentDate = date ? new Date(date) : new Date()

    this.locale = locale
    if (this.locale === CalendarLocale.Chinese) {
      this.firstDayOfWeek = FirstDayOfWeek.Monday
    } else {
      this.firstDayOfWeek = FirstDayOfWeek.Sunday
    }

    this.translations = calendarTranslations[this.locale]
  }

  public getYear(): number {
    return this.currentDate.getFullYear()
  }

  public setDate(dateString: string): void {
    this.currentDate = new Date(dateString)
  }

  public getLocaleMonth(): string {
    return this.getTranslations().months[this.currentDate.getMonth()]
  }

  public getMonth(): number {
    return this.currentDate.getMonth()
  }

  public getDate(): number {
    return this.currentDate.getDate()
  }

  public now(): string {
    const date = new Date()
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  }

  public getDateString(): string {
    if (this.locale === CalendarLocale.Chinese) {
      return `${this.getYear()}年${this.getMonth() + 1}月`
    }
    return `${calendarTranslations[CalendarLocale.English].months[this.getMonth()]} ${this.getYear()}`
  }

  public getMonthString(): string {
    return `${calendarTranslations[this.locale].months[this.getMonth()]}`
  }

  public generateMonthCalendar(): string[][] {
    const year = this.currentDate.getFullYear()
    const month = this.currentDate.getMonth()
    const firstDayOfMonth = new Date(year, month, 1)
    const lastDayOfMonth = new Date(year, month + 1, 0)

    const calendar: string[][] = []
    let week: string[] = []

    // Calculate the blank days of the first week
    const firstWeekBlankDays = (firstDayOfMonth.getDay() - this.firstDayOfWeek + 7) % 7
    for (let i = 0; i < firstWeekBlankDays; i++) {
      week.push('')
    }

    for (let day = 1; day <= lastDayOfMonth.getDate(); day++) {
      week.push(day.toString())
      if (week.length === 7) {
        calendar.push(week)
        week = []
      }
    }

    // If the last week is less than 7 days, fill it with empty strings
    while (week.length < 7) {
      week.push('')
    }
    calendar.push(week)

    // If the calendar has only 5 rows, add an empty row
    if (calendar.length === 5) {
      calendar.push(Array(7).fill(''))
    }

    return calendar
  }

  public prevMonth(): void {
    const currentMonth = this.currentDate.getMonth()
    if (currentMonth === 0) {
      this.currentDate.setFullYear(this.currentDate.getFullYear() - 1)
      this.currentDate.setMonth(11)
    } else {
      this.currentDate.setMonth(currentMonth - 1)
    }
  }

  public nextMonth(): void {
    const currentMonth = this.currentDate.getMonth()
    if (currentMonth === 11) {
      this.currentDate.setFullYear(this.currentDate.getFullYear() + 1)
      this.currentDate.setMonth(0)
    } else {
      this.currentDate.setMonth(currentMonth + 1)
    }
  }

  public setMonth(year: number, month: number): void {
    this.currentDate.setFullYear(year, month)
  }

  public setLocale(locale: CalendarLocale): void {
    this.locale = locale
  }

  public getLocale(): CalendarLocale {
    return this.locale
  }

  public getTranslations(): CalendarTranslations {
    return calendarTranslations[this.locale]
  }
}

// const calendar = new Calendar();

// // 生成当前月份日历
// const currentMonthCalendar = calendar.generateMonthCalendar();
// console.log(currentMonthCalendar);

// // 生成上个月日历
// calendar.prevMonth();
// const prevMonthCalendar = calendar.generateMonthCalendar();
// console.log(prevMonthCalendar);

// // 生成下个月日历
// calendar.nextMonth();
// calendar.nextMonth();
// const nextMonthCalendar = calendar.generateMonthCalendar();
// console.log(nextMonthCalendar);

// // 生成任意一个月的日历
// calendar.setMonth(2022, 6); // 生成 2022 年 7 月的日历
// const anyMonthCalendar = calendar.generateMonthCalendar();
// console.log(anyMonthCalendar);
