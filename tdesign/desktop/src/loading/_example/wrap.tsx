import { h, tag, WeElement } from 'omi'

import '../index'
import '../../button/index'
import '../../space/index'

@tag('loading-wrap')
export default class LoadingWrap extends WeElement {
  loading = false
  setLoading = (value: boolean) => {
    if (this.loading !== value) {
      this.loading = value
      this.update()
    }
  }
  render() {
    const { loading } = this
    return (
      <t-space direction="vertical">
        <div style={{ width: 170 }}>
          <t-loading size="small" loading={loading} showOverlay>
            <div>this is loading component</div>
            <div>this is loading component</div>
            <div>this is loading component</div>
            <div>this is loading component</div>
            <div>this is loading component</div>
          </t-loading>
        </div>
        <t-space>
          <t-button size="small" onClick={() => this.setLoading(true)}>
            加载中
          </t-button>
          <t-button size="small" onClick={() => this.setLoading(false)}>
            加载完成
          </t-button>
        </t-space>
      </t-space>
    )
  }
}
