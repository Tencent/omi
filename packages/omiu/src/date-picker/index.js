import { define, WeElement, extractClass } from 'omi'
import css from './_index.css'
import '../icon'

define('o-date-picker', class extends WeElement {

  css() {
    return css
  }

  install() {
    this.now = new Date()
    this.year = this.now.getFullYear()
    this.month = this.now.getMonth()
    this.begin = getFirstDayWeek(this.year, this.month)
    this.count = getMonthDayCount(this.year, this.month)

    this.preMonthDate = getPreMonth(this.now)
    this.preYear = this.preMonthDate.getFullYear()
    this.preMonth = this.preMonthDate.getMonth()
    this.preCount = getMonthDayCount(this.preYear, this.preMonth)

    console.log(this.count)
    console.log(this.preCount)
  }

  getDay(y, x) {
    if (y === 0) {
      if (x < this.begin) {
        return <td>{this.preCount - this.begin + x + 1}</td>
      } else {
        return <td>{x - this.begin + 1}</td>
      }
    } else {
      const temp = y * 7 + x - this.begin + 1
      if (temp <= this.count) {
        return <td>{temp}</td>
      } else {
        return <td>{temp - this.count}</td>
      }
    }
  }

  render(props) {
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


    return (
      <div class='o-date-picker'>
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
          <tbody>
            {arr}
          </tbody>
        </table>

      </div>
    )
  }
})



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

function getRowCount(day, count) {
  if (count - (7 - day) - 21 === 0) return 4;
  return count - (7 - day) - 21 > 7 ? 6 : 5;
}

function getRowByDate(date) {
  var year = date.getFullYear(), month = date.getMonth();
  return getRowCount(getFirstDayWeek(year, month), getMonthDayCount(year, month));
}

function getNextMonth(e) {
  var t = e.getMonth();
  return t === 11 ? new Date(e.getFullYear() + 1, 0) : new Date(e.getFullYear(), e.getMonth() + 1)
}

function getPreMonth(e) {
  var t = e.getMonth();
  return t === 0 ? new Date(e.getFullYear() - 1, 11) : new Date(e.getFullYear(), e.getMonth() - 1)
}