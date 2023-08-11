import { html, fixture, expect } from '@open-wc/testing'

import '../dist/index.es.js'

describe('o-tabs ', () => {
  it('default prop', async () => {
    const el = await fixture(html`<o-tabs tabs="[{label:'用户管理'},{label:'系统设置'},{label:'权限管理中心'}]" active-index="0"></o-tabs>`)
    expect(el.shadowRoot.innerHTML).to.equal(
      `<div class="o-tabs o-tabs--top"><div class="o-tabs__header is-top"><div class="o-tabs__nav-wrap is-top"><div class="o-tabs__nav-scroll"><div role="tablist" class="o-tabs__nav is-top"><div class="o-tabs__active-bar is-top" style="width: 56px; transform: translateX(0px);"></div><div role="tab" tabindex="0" class="o-tabs__item is-top is-active">用户管理</div><div role="tab" tabindex="-1" class="o-tabs__item is-top">系统设置</div><div role="tab" tabindex="-1" class="o-tabs__item is-top">权限管理中心</div></div></div></div></div></div>`
    )
  })


})
