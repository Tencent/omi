import { define, WeElement } from 'omi'
import style from './_mainer.scss'

define('ow-mainer', class extends WeElement {
  css() {
    return style
  }
  render() {
    return (
      <div className="mainer">
        <section>
          <h1>webApp 终极解决方案</h1>
          <p>统一于微信客户端，基于 omi 的移动端组件库</p>
        </section>
      </div>
    )
  }
})