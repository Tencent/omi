import { WeElement, extractClass, classNames, h, tag } from 'omi'
import * as css from './index.scss'

interface Props {
  lan: string,
  from: string,
  to: string

}

@tag('m-date-range-picker')
class DateRangePicker extends WeElement<Props, {}> {

  static defaultProps = {
    lan: 'en'
  }

  static css = css
  nowYear: number
  nowMonth: number
  nowDay: number

  install() {
    this.now = new Date()
    this.nowYear = this.now.getFullYear()
    this.nowMonth = this.now.getMonth()
    this.nowDay = this.now.getDate()
    this.from = this.props.from
    this.to = this.props.to


    this.initCurrentDate()

    this.initDate(this.currentDate)

  }

  locale: any
  installed() {
    import('./locale/' + this.props.lan + '.js').then((locale) => {
      this.locale = locale.default
      this.update(true)
    })
  }

  from: string
  to: string
  dateArr: string[]
  currentDate: Date
  now: Date

  initCurrentDate() {
    if (this.from) {
      this.dateArr = this.from.split('-')
      this.currentDate = new Date(Number(this.dateArr[0]), Number(this.dateArr[1]) - 1, Number(this.dateArr[2]))

    } else {
      // this.from = this.nowYear + '-' + (this.nowMonth + 1) + '-' + this.nowDay
      // this.noSelected = true
      this.currentDate = this.now
    }
  }

  year: number
  month: number
  day: number
  begin: number
  count: number
  preMonthDate: Date
  preYear: number
  preMonth: number
  preCount: number
  nextMonthDate: Date
  nextYear: number
  nextMonth: number

  initDate(date) {
    this.year = date.getFullYear()
    this.month = date.getMonth()
    this.day = date.getDate()
    this.begin = getFirstDayWeek(this.year, this.month)
    this.count = getMonthDayCount(this.year, this.month)

    this.preMonthDate = getPreMonth(date)
    this.preYear = this.preMonthDate.getFullYear()
    this.preMonth = this.preMonthDate.getMonth()
    this.preCount = getMonthDayCount(this.preYear, this.preMonth)


    this.nextMonthDate = getNextMonth(date)
    this.nextYear = this.nextMonthDate.getFullYear()
    this.nextMonth = this.nextMonthDate.getMonth()
  }

  gotoNextMonth = () => {
    this.currentDate = getNextMonth(this.currentDate)
    this.initDate(this.currentDate)
    this.update()
  }

  gotoPreMonth = () => {
    this.currentDate = getPreMonth(this.currentDate)
    this.initDate(this.currentDate)
    this.update()
  }

  gotoNextYear = () => {
    this.currentDate = nextYear(this.currentDate)
    this.initDate(this.currentDate)
    this.update()
  }

  gotoPreYear = () => {
    this.currentDate = preYear(this.currentDate)
    this.initDate(this.currentDate)
    this.update()
  }


  noSelected: boolean
  onSelectDate = (evt, isRight) => {
    if (evt.target.className.indexOf('_out-date') !== -1) return
    if (isRight) {
      this.to = evt.target.getAttribute('data-date')
    } else {
      this.from = evt.target.getAttribute('data-date')
    }
    this.noSelected = false
    this.fire('select', { from: this.from, to: this.to })
    this.update(true)
  }

  getDay(y, x, isRight) {
    const date = isRight ? this.to : this.from
    let dateStr
    if (y === 0) {
      if (x < this.begin) {
        dateStr = this.preYear + '-' + (this.preMonth + 1) + '-' + (this.preCount - this.begin + x + 1)
        return <td data-date={dateStr} class={'_out-date' + (dateStr === date && !this.noSelected ? ' selected' : '')}>
          {this.preCount - this.begin + x + 1}
        </td>
      } else {
        const d = x - this.begin + 1
        dateStr = this.year + '-' + (this.month + 1) + '-' + d

        if (d === this.nowDay && this.year === this.nowYear && this.month === this.nowMonth) {
          return <td data-date={dateStr} class={'_now' + (dateStr === date && !this.noSelected ? ' selected' : '')}>{d}</td>
        } else {
          let cls = dateStr === date && !this.noSelected ? { 'class': 'selected' } : null
          return <td data-date={dateStr} {...cls}>{d}</td>
        }

      }
    } else {
      const temp = y * 7 + x - this.begin + 1
      if (temp <= this.count) {
        dateStr = this.year + '-' + (this.month + 1) + '-' + temp
        if (temp === this.nowDay && this.year === this.nowYear && this.month === this.nowMonth) {
          return <td data-date={dateStr} class={'_now' + (dateStr === date && !this.noSelected ? ' selected' : '')}>{temp}</td>
        } else {
          let cls = dateStr === date && !this.noSelected ? { 'class': 'selected' } : null
          return <td data-date={dateStr} {...cls}>{temp}</td>
        }
      } else {
        dateStr = this.nextYear + '-' + (this.nextMonth + 1) + '-' + (temp - this.count)
        return <td data-date={dateStr} class={'_out-date' + (dateStr === date && !this.noSelected ? ' selected' : '')}>
          {temp - this.count}
        </td>
      }
    }
  }



  toggle = () => {
    this.initCurrentDate()
    this.initDate(this.currentDate)
    this.fire('toggle', { from: this.from, to: this.to })
  }

  _getLeftArr() {
    this.initCurrentDate()
    this.initDate(this.currentDate)
    const arr = []
    for (let i = 0; i < 6; i++) {
      arr.push(<tr>
        {this.getDay(i, 0, false)}
        {this.getDay(i, 1, false)}
        {this.getDay(i, 2, false)}
        {this.getDay(i, 3, false)}
        {this.getDay(i, 4, false)}
        {this.getDay(i, 5, false)}
        {this.getDay(i, 6, false)}
      </tr>)
    }
    return arr
  }

  _getRightArr() {
    this.initCurrentDate()
    this.initDate(getNextMonth(this.currentDate))
    const arr = []
    for (let i = 0; i < 6; i++) {
      arr.push(<tr>
        {this.getDay(i, 0, true)}
        {this.getDay(i, 1, true)}
        {this.getDay(i, 2, true)}
        {this.getDay(i, 3, true)}
        {this.getDay(i, 4, true)}
        {this.getDay(i, 5, true)}
        {this.getDay(i, 6, true)}
      </tr>)
    }
    return arr
  }

  render(props) {
    const leftArr = this._getLeftArr()
    const rightArr = this._getRightArr()

    return (
      <div class='m-date-range-picker'>
        <div class='m-date-picker'>
          {props.show && <div class='_ctn'>
            <div class="_header">
              <div style="position: relative;">
                <a class="prev-year-btn" role="button" title="上一年" onClick={this.gotoPreYear}></a>
                <a class="prev-month-btn" role="button" title="上个月" onClick={this.gotoPreMonth}></a>
                <span class="ym-select">
                  <a class="year-select" role="button" title="选择年份">{this.year}年</a>
                  <a class="month-select" role="button" title="选择月份">{this.month}月</a>
                </span>
                <a class="next-month-btn" title="下个月" onClick={this.gotoNextMonth}></a>
                <a class="next-year-btn" title="下一年" onClick={this.gotoNextYear}></a>
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th>日</th>
                  <th>一</th>
                  <th>二</th>
                  <th>三</th>
                  <th>四</th>
                  <th>五</th>
                  <th>六</th>
                </tr>
              </thead>
              <tbody onClick={_ => this.onSelectDate(_, false)}>
                {leftArr}
              </tbody>
            </table>
          </div>}


        </div>

        <div class='m-date-picker'>
          {props.show && <div class='_ctn'>
            <div class="_header">
              <div style="position: relative;">
                <a class="prev-year-btn" role="button" title="上一年" onClick={this.gotoPreYear}></a>
                <a class="prev-month-btn" role="button" title="上个月" onClick={this.gotoPreMonth}></a>
                <span class="ym-select">
                  <a class="year-select" role="button" title="选择年份">{this.year}年</a>
                  <a class="month-select" role="button" title="选择月份">{this.month + 1}月</a>
                </span>
                <a class="next-month-btn" title="下个月" onClick={this.gotoNextMonth}></a>
                <a class="next-year-btn" title="下一年" onClick={this.gotoNextYear}></a>
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th>日</th>
                  <th>一</th>
                  <th>二</th>
                  <th>三</th>
                  <th>四</th>
                  <th>五</th>
                  <th>六</th>
                </tr>
              </thead>
              <tbody onClick={_ => this.onSelectDate(_, true)}>
                {rightArr}
              </tbody>
            </table>
          </div>}


        </div>
      </div>

    )
  }
}



//星期日是0
function getFirstDayWeek(e, t) {
  var n = new Date(e, t, 1);
  return n.getDay()
}

function getMonthDayCount(e, t) {
  var arr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  arr[1] = isLeapYear(e) ? 29 : 28;
  return arr[t];
}

function isLeapYear(e) {
  return e % 400 == 0 || e % 100 != 0 && e % 4 == 0
}

function getNextMonth(e) {
  var t = e.getMonth();
  return t === 11 ? new Date(e.getFullYear() + 1, 0) : new Date(e.getFullYear(), e.getMonth() + 1)
}

function getPreMonth(e) {
  var t = e.getMonth();
  return t === 0 ? new Date(e.getFullYear() - 1, 11) : new Date(e.getFullYear(), e.getMonth() - 1)
}

function nextYear(d) {
  return new Date(d.getFullYear() + 1, d.getMonth(), d.getDate())
}

function preYear(d) {
  return new Date(d.getFullYear() - 1, d.getMonth(), d.getDate())
}
