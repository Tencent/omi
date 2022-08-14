import { tag, render, h, WeElement } from 'omi'
import css from './index.css'

@tag('my-clock')
class MyClock extends WeElement {
  static css = css

  install() {
    this.updateTime()
  }

  hours: number
  minutes: number
  seconds: number

  updateTime() {
    const time = new Date()
    this.hours = time.getHours()
    this.minutes = time.getMinutes()
    this.seconds = time.getSeconds()
  }

  installed() {
    setInterval(() => {
      this.install()
      this.update()
    }, 1000);
  }

  arr = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]

  render() {
    const { hours, minutes, seconds } = this
    return (
      <svg viewBox='-50 -50 100 100'>
        <circle class='clock-face' r='48' />
        {this.arr.map(i => (
          <line class='major' y1='35' y2='45' transform={`rotate(${30 * i})`} />
        ))}
        {this.arr.map(i => (
          [1, 2, 3, 4].map(o => <line class='minor' y1='42' y2='45' transform={`rotate(${6 * (i + o)})`} />)
        ))}
        <line class='hour' y1='2' y2='-20' transform={`rotate(${30 * hours + minutes / 2})`} />
        <line class='minute' y1='4' y2='-30' transform={`rotate(${6 * minutes + seconds / 10})`} />
        <g transform={`rotate(${6 * seconds})`}>
          <line class='second' y1='10' y2='-38' />
          <line class='second-counterweight' y1='10' y2='2' />
        </g>
      </svg>
    )
  }
}

render(<my-clock />, 'body')