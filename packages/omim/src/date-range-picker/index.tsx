import { WeElement, extractClass, classNames, h, tag } from 'omi'
import * as css from './index.scss'

interface Props {
  lan?: string,
  from?: string,
  to?: string,
  leftDate?: string,
  rightDate?: string

}

@tag('m-date-range-picker')
class DateRangePicker extends WeElement<Props> {

  static defaultProps = {
    lan: 'en'
  }

  static propTypes = {
    lan: String,
    from: String,
    to: String,
    leftDate: String,
    rightDate: String
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


    this.leftDate = this.props.leftDate ? new Date(this.props.leftDate) : new Date()
    this.rightDate = this.props.rightDate ? new Date(this.props.rightDate) : getNextMonth(this.leftDate)

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

  gotoNextMonth = (isRight) => {
    if (isRight) {
      this.rightDate = getNextMonth(this.rightDate)
      this.initDate(this.rightDate)
    } else {
      this.leftDate = getNextMonth(this.leftDate)
      this.initDate(this.leftDate)
    }
    this.update(true)
  }

  gotoPreMonth = (isRight) => {
    if (isRight) {

      this.rightDate = getPreMonth(this.rightDate)
      if (this.rightDate <= this.leftDate) {
        this.rightDate = getNextMonth(this.leftDate)
      }
      this.initDate(this.rightDate)
    } else {
      this.leftDate = getPreMonth(this.leftDate)
      this.initDate(this.leftDate)
    }
    this.update(true)
  }

  gotoNextYear = (isRight) => {
    if (isRight) {
      this.rightDate = nextYear(this.rightDate)
      this.initDate(this.rightDate)
    } else {
      this.leftDate = nextYear(this.leftDate)
      this.initDate(this.leftDate)
    }
    this.update(true)
  }

  gotoPreYear = (isRight) => {
    if (isRight) {
      this.rightDate = preYear(this.rightDate)
      if (this.rightDate <= this.leftDate) {
        this.rightDate = getNextMonth(this.leftDate)
      }
      this.initDate(this.rightDate)
    } else {
      this.leftDate = preYear(this.leftDate)
      this.initDate(this.leftDate)
    }
    this.update(true)
  }


  noSelected: boolean
  onSelectDate = (evt) => {
    if (evt.target.className.indexOf('_out-date') !== -1) return
    const dateStr = evt.target.getAttribute('data-date')
    if (this.from) {
      if (this.to) {
        this.from = dateStr
        this.to = null
      } else {
        if (dateStr === this.from) return
        this.to = dateStr

        if (new Date(this.from) > new Date(this.to)) {
          let temp = this.from
          this.from = this.to
          this.to = temp
        }

        this.fire('select', { fromDate: new Date(this.from), toDate: new Date(this.to), from: this.from, to: this.to })
      }
    } else {
      this.from = dateStr
    }
    this.noSelected = false

    this.update(true)
  }

  getDay(y, x) {

    let dateStr
    if (y === 0) {
      if (x < this.begin) {
        dateStr = this.preYear + '-' + (this.preMonth + 1) + '-' + (this.preCount - this.begin + x + 1)
        return <td data-date={dateStr} class='_out-date'>
          {this.preCount - this.begin + x + 1}
        </td>
      } else {
        const d = x - this.begin + 1
        dateStr = this.year + '-' + (this.month + 1) + '-' + d

        return <td data-date={dateStr} {...extractClass({}, {
          'now': d === this.nowDay && this.year === this.nowYear && this.month === this.nowMonth,
          'selected': (dateStr === this.from || dateStr === this.to) && !this.noSelected,
          'in-range': inRange(this.from, this.to, dateStr)
        })}>{d}</td>


      }
    } else {
      const temp = y * 7 + x - this.begin + 1
      if (temp <= this.count) {
        dateStr = this.year + '-' + (this.month + 1) + '-' + temp

        return <td data-date={dateStr} {...extractClass({}, {
          'now': temp === this.nowDay && this.year === this.nowYear && this.month === this.nowMonth,
          'selected': (dateStr === this.from || dateStr === this.to) && !this.noSelected,
          'in-range': inRange(this.from, this.to, dateStr)
        })}>{temp}</td>

      } else {
        dateStr = this.nextYear + '-' + (this.nextMonth + 1) + '-' + (temp - this.count)
        return <td data-date={dateStr} class='_out-date'>
          {temp - this.count}
        </td>
      }
    }
  }



  toggle = () => {
    this.initDate(this.currentDate)
    this.fire('toggle', { from: this.from, to: this.to })
  }

  leftDate: Date
  rightDate: Date
  _getLeftArr() {


    this.initDate(this.leftDate)
    const arr = []
    for (let i = 0; i < 6; i++) {
      arr.push(<tr>
        {this.getDay(i, 0)}
        {this.getDay(i, 1)}
        {this.getDay(i, 2)}
        {this.getDay(i, 3)}
        {this.getDay(i, 4)}
        {this.getDay(i, 5)}
        {this.getDay(i, 6)}
      </tr>)
    }
    return arr
  }

  _getRightArr() {
    this.initDate(this.rightDate)

    const arr = []
    for (let i = 0; i < 6; i++) {
      arr.push(<tr>
        {this.getDay(i, 0)}
        {this.getDay(i, 1)}
        {this.getDay(i, 2)}
        {this.getDay(i, 3)}
        {this.getDay(i, 4)}
        {this.getDay(i, 5)}
        {this.getDay(i, 6)}
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
          <div class='_ctn'>
            <div class="_header">
              <div style="position: relative;">
                <a class="prev-year-btn" role="button" title="上一年" onClick={_ => this.gotoPreYear(false)}></a>
                <a class="prev-month-btn" role="button" title="上个月" onClick={_ => this.gotoPreMonth(false)}></a>
                <span class="ym-select">
                  <a class="year-select" role="button" title="选择年份">{this.leftDate.getFullYear()}年</a>
                  <a class="month-select" role="button" title="选择月份">{this.leftDate.getMonth() + 1}月</a>
                </span>
                <a class="next-month-btn" title="下个月" onClick={_ => this.gotoNextMonth(false)}></a>
                <a class="next-year-btn" title="下一年" onClick={_ => this.gotoNextYear(false)}></a>
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
              <tbody onClick={this.onSelectDate}>
                {leftArr}
              </tbody>
            </table>
          </div>
        </div>

        <div class='m-date-picker'>
          <div class='_ctn'>
            <div class="_header">
              <div style="position: relative;">
                <a class="prev-year-btn" role="button" title="上一年" onClick={_ => this.gotoPreYear(true)}></a>
                <a class="prev-month-btn" role="button" title="上个月" onClick={_ => this.gotoPreMonth(true)}></a>
                <span class="ym-select">
                  <a class="year-select" role="button" title="选择年份">{this.rightDate.getFullYear()}年</a>
                  <a class="month-select" role="button" title="选择月份">{this.rightDate.getMonth() + 1}月</a>
                </span>
                <a class="next-month-btn" title="下个月" onClick={_ => this.gotoNextMonth(true)}></a>
                <a class="next-year-btn" title="下一年" onClick={_ => this.gotoNextYear(true)}></a>
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
              <tbody onClick={this.onSelectDate}>
                {rightArr}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    )
  }
}

function inRange(from, to, value) {
  if (from && to) {
    const v = new Date(value)
    return new Date(from) < v && new Date(to) > v
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
