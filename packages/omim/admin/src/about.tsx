import * as css from './_dashboard.css'
import { define, WeElement, h } from 'omi'


define('my-about', class extends WeElement {
  static css = css

  render() {
    return <div><div class="settings-box padded block">
    <div class="info-section"><div class="secondary">Omim Templates</div>
    <div class="secondary">版权所有2019 Omi Inc. 保留所有权利。</div></div>
    <div class="info-section"><div class="secondary">Omim Templates 的诞生离不开 <a target="_blank" href="http://www.omijs.org/">Omi</a> 开源项目以及其他<a target="_blank" href="https://github.com/Tencent/omi">开源软件</a>。</div></div><div class="secondary"><a target="_blank" href="https://github.com/Tencent/omi/tree/master/packages/omim">Omim Github 地址</a></div></div></div>
  }
})
