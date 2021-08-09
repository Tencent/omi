import { html, fixture, expect } from '@open-wc/testing'

import '../dist/index.es.js'

describe('o-tag', () => {
  it('default prop', async () => {
    const el = await fixture(html`<o-tag></o-tag>`)
    expect(el.shadowRoot.innerHTML).to.equal(
      `<div class="o-tag o-tag--default"><slot></slot></div>`
    )
  })

  it('size prop', async () => {
    const el = await fixture(html`<o-tag size="medium"></o-tag>`)
    expect(el.shadowRoot.innerHTML).to.equal(
      `<div class="o-tag o-tag--medium"><slot></slot></div>`
    )
  })

  it('type prop', async () => {
    const el = await fixture(html`<o-tag size="small"></o-tag>`)
    expect(el.shadowRoot.innerHTML).to.equal(
      `<div class="o-tag o-tag--small"><slot></slot></div>`
    )
  })

  it('closable prop', async () => {
    const el = await fixture(html`<o-tag closable></o-tag>`)
    expect(el.shadowRoot.innerHTML).to.equal(
      `<div class="o-tag o-tag--default"><slot></slot><span class="o-tag--suffix"><o-icon-close></o-icon-close></span></div>`
    )
  })
})
