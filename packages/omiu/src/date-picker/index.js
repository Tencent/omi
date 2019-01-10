import { define, WeElement, extractClass, classNames } from 'omi'
import css from './_index.css'
import '../icon'
import '../input'

define('o-date-picker', class extends WeElement {

  css() {
    return css
  }

  install() {
    this.dateArr = this.props.selectedDate.split('-')
    this.selectedDate = this.props.selectedDate
    this.selectDate = new Date(Number(this.dateArr[0]), Number(this.dateArr[1]) - 1, Number(this.dateArr[2]))
    this.year = this.selectDate.getFullYear()
    this.month = this.selectDate.getMonth()
    this.day = this.selectDate.getDate()
    this.begin = getFirstDayWeek(this.year, this.month)
    this.count = getMonthDayCount(this.year, this.month)

    this.preMonthDate = getPreMonth(this.selectDate)
    this.preYear = this.preMonthDate.getFullYear()
    this.preMonth = this.preMonthDate.getMonth()
    this.preCount = getMonthDayCount(this.preYear, this.preMonth)


    this.nextMonthDate = getNextMonth(this.selectDate)
    this.nextYear = this.nextMonthDate.getFullYear()
    this.nextMonth = this.nextMonthDate.getMonth()


    this.now = new Date()
    this.nowYear = this.now.getFullYear()
    this.nowMonth = this.now.getMonth()
    this.nowDay = this.now.getDate()


  }

  onSelectDate = (evt) => {

    this.selectedDate = evt.target.getAttribute('data-date')

    this.props.onSelect && this.props.onSelect(this.selectedDate)
  }

  getDay(y, x) {
    let dateStr
    if (y === 0) {
      if (x < this.begin) {
        dateStr = this.preYear + '-' + (this.preMonth + 1) + '-' + (this.preCount - this.begin + x + 1)
        return <td data-date={dateStr} class={'_out-date' + (dateStr === this.selectedDate ? ' selected' : '')}>{this.preCount - this.begin + x + 1}</td>
      } else {
        const d = x - this.begin + 1
        dateStr = this.year + '-' + (this.month + 1) + '-' + d

        if (d === this.nowDay && this.year === this.nowYear && this.month === this.nowMonth) {
          return <td data-date={dateStr} class={'_now' + (dateStr === this.selectedDate ? ' selected' : '')}>{d}</td>
        } else {
          let cls = dateStr === this.selectedDate ? { 'class': 'selected' } : null
          return <td data-date={dateStr} {...cls}>{d}</td>
        }

      }
    } else {
      const temp = y * 7 + x - this.begin + 1
      if (temp <= this.count) {
        dateStr = this.year + '-' + (this.month + 1) + '-' + temp
        if (temp === this.nowDay && this.year === this.nowYear && this.month === this.nowMonth) {
          return <td data-date={dateStr} class={'_now' + (dateStr === this.selectedDate ? ' selected' : '')}>{temp}</td>
        } else {
          let cls = dateStr === this.selectedDate ? { 'class': 'selected' } : null
          return <td data-date={dateStr} {...cls}>{temp}</td>
        }
      } else {
        dateStr = this.nextYear + '-' + (this.nextMonth + 1) + '-' + (temp - this.count)
        return <td data-date={dateStr} class={'_out-date' + (dateStr === this.selectedDate ? ' selected' : '')}>{temp - this.count}</td>
      }
    }
  }



  toggle = () => {
    this.props.onToggle && this.props.onToggle()
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
        <o-input class='input' onClick={this.toggle} placeholder='选择日期'></o-input>
        <o-icon class='icon' onClick={this.toggle} path='M482.513,83.942c-7.225-7.233-15.797-10.85-25.694-10.85h-36.541v-27.41c0-12.56-4.477-23.315-13.422-32.261   C397.906,4.475,387.157,0,374.591,0h-18.268c-12.565,0-23.318,4.475-32.264,13.422c-8.949,8.945-13.422,19.701-13.422,32.261v27.41   h-109.63v-27.41c0-12.56-4.475-23.315-13.422-32.261C178.64,4.475,167.886,0,155.321,0H137.05   c-12.562,0-23.317,4.475-32.264,13.422c-8.945,8.945-13.421,19.701-13.421,32.261v27.41H54.823c-9.9,0-18.464,3.617-25.697,10.85   c-7.233,7.232-10.85,15.8-10.85,25.697v365.453c0,9.89,3.617,18.456,10.85,25.693c7.232,7.231,15.796,10.849,25.697,10.849h401.989   c9.897,0,18.47-3.617,25.694-10.849c7.234-7.234,10.852-15.804,10.852-25.693V109.639   C493.357,99.739,489.743,91.175,482.513,83.942z M137.047,475.088H54.823v-82.23h82.224V475.088z M137.047,374.59H54.823v-91.358   h82.224V374.59z M137.047,264.951H54.823v-82.223h82.224V264.951z M130.627,134.333c-1.809-1.809-2.712-3.946-2.712-6.423V45.686   c0-2.474,0.903-4.617,2.712-6.423c1.809-1.809,3.946-2.712,6.423-2.712h18.271c2.474,0,4.617,0.903,6.423,2.712   c1.809,1.807,2.714,3.949,2.714,6.423v82.224c0,2.478-0.909,4.615-2.714,6.423c-1.807,1.809-3.946,2.712-6.423,2.712H137.05   C134.576,137.046,132.436,136.142,130.627,134.333z M246.683,475.088h-91.365v-82.23h91.365V475.088z M246.683,374.59h-91.365   v-91.358h91.365V374.59z M246.683,264.951h-91.365v-82.223h91.365V264.951z M356.323,475.088h-91.364v-82.23h91.364V475.088z    M356.323,374.59h-91.364v-91.358h91.364V374.59z M356.323,264.951h-91.364v-82.223h91.364V264.951z M349.896,134.333   c-1.807-1.809-2.707-3.946-2.707-6.423V45.686c0-2.474,0.9-4.617,2.707-6.423c1.808-1.809,3.949-2.712,6.427-2.712h18.268   c2.478,0,4.617,0.903,6.427,2.712c1.808,1.807,2.707,3.949,2.707,6.423v82.224c0,2.478-0.903,4.615-2.707,6.423   c-1.807,1.809-3.949,2.712-6.427,2.712h-18.268C353.846,137.046,351.697,136.142,349.896,134.333z M456.812,475.088h-82.228v-82.23   h82.228V475.088z M456.812,374.59h-82.228v-91.358h82.228V374.59z M456.812,264.951h-82.228v-82.223h82.228V264.951z' color='#A9A9A9'></o-icon>
        {props.show && <div class='_ctn'>
          <div class="_header">
            <div style="position: relative;"><a class="prev-year-btn" role="button" title="上一年">
            </a><a class="prev-month-btn" role="button" title="上个月"></a><span class="ym-select"><a class="year-select" role="button" title="选择年份">{this.dateArr[0]}年</a><a class="month-select" role="button" title="选择月份">{this.dateArr[1]}月</a></span><a class="next-month-btn" title="下个月"></a><a class="next-year-btn" title="下一年"></a></div></div>
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
              {arr}
            </tbody>
          </table>
        </div>}


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

function getNextMonth(e) {
  var t = e.getMonth();
  return t === 11 ? new Date(e.getFullYear() + 1, 0) : new Date(e.getFullYear(), e.getMonth() + 1)
}

function getPreMonth(e) {
  var t = e.getMonth();
  return t === 0 ? new Date(e.getFullYear() - 1, 11) : new Date(e.getFullYear(), e.getMonth() - 1)
}