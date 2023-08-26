import { h, tag, WeElement } from 'omi'

import '../index'
import '../../button/index'

@tag('popup-dynamic')
export default class PopupDynamic extends WeElement {
  visible = true
  content = '这是popup内容'
  spanVisible = false
  btnClicks = 0

  toggleContent = () => {
    this.btnClicks += 1
    const showMore = this.btnClicks % 2 !== 0
    // this.visible = showMore
    this.content = `这是popup内容${showMore ? '，又多出来好多好多好多好多....' : ''}`
    this.update()
  }
  render() {
    return (
      <div style={{ width: '100%', margin: '0 100px' }}>
        <t-popup content={this.content} trigger="context-menu" placement="top" visible={this.visible}>
          <t-button onClick={this.toggleContent}>点击改变内容{this.spanVisible && <span>，再点一下</span>}</t-button>
        </t-popup>
      </div>
    )
  }
}
