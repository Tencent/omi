import { h, tag, WeElement } from 'omi'

import { loading } from '../index'
import '../../button'

@tag('loading-service')
export default class LoadingService extends WeElement {
  //   static isLightDOM = true
  handleFullscreen = () => {
    const loadInstance = loading(true)

    setTimeout(() => loadInstance.hide(), 1000)
  }

  handleAttach = () => {
    const loadInstance = loading({ attach: () => this.shadowRoot.querySelector('#loading-service') })
    setTimeout(() => loadInstance.hide(), 1000)
  }
  render() {
    return (
      <>
        <div
          id="loading-service"
          style={{ width: '100%', height: '60px', textAlign: 'center', lineHeight: '60px', position: 'relative' }}
        >
          我是service的容器
        </div>

        <div>
          <t-button onClick={this.handleFullscreen} style={{ marginRight: 20 }}>
            服务加载方式（全屏）
          </t-button>
          <t-button onClick={this.handleAttach}>服务加载方式（局部）</t-button>
        </div>
      </>
    )
  }
}
