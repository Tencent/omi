import { h, tag, WeElement } from 'omi'

import '../index'
import '../../button'
@tag('loading-fullscreen')
export default class LoadingFullScreen extends WeElement {
  checked = false
  loading = false

  onChange = (value: boolean) => {
    this.checked = value
    this.loading = value

    if (value) {
      setTimeout(() => {
        this.checked = false
        this.loading = false
        this.update()
      }, 2000)
    }
    this.update()
  }
  render() {
    return (
      <>
        <t-loading loading={this.loading} fullscreen preventScrollThrough={true} text="加载中"></t-loading>
        Loading state: {this.checked}
        <t-button onClick={this.onChange}>Change state</t-button>
      </>
    )
  }
}
