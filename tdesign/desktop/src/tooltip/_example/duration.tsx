import { h, tag, WeElement, createRef } from 'omi'

import '../index'
import '../../button'
import '../../popup'
@tag('tooltip-duration')
export default class TooltipDuration extends WeElement {
  timerRef = createRef()
  ref = createRef()
  reset = true
  count = 5
  countRef = createRef<number>()

  setTimer = () => {
    const { countRef } = this
    this.timerRef.current = setInterval(() => {
      countRef.current -= 1
      this.count = countRef.current
      if (countRef.current <= 0) {
        clearInterval(this.timerRef.current)
        this.reset = true
      }
      this.update()
    }, 1000)
  }

  onResetClick = () => {
    this.reset = false
    this.countRef.current = 5
    this.count = 5
    clearInterval(this.timerRef.current)
    this.setTimer()
    this.ref.current.setVisible(true)
    this.update()
  }

  install() {
    this.countRef.current = 5
  }
  installed() {
    this.setTimer()
  }

  uninstall() {
    clearInterval(this.timerRef.current)
  }

  render() {
    const { ref, reset, count, onResetClick } = this
    return (
      <>
        <t-tooltip content={`提示在${count}秒后消失`} duration={5000} ref={ref}>
          <t-button variant="text">定时消失</t-button>
        </t-tooltip>

        {reset && (
          <t-button variant="outline" onClick={onResetClick}>
            点击再次查看
          </t-button>
        )}
      </>
    )
  }
}
