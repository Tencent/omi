import { html, fixture, expect } from '@open-wc/testing'

import '../dist/index.es.js'

describe('o-badge ', () => {
  it('default prop', async () => {
    const el = await fixture(html`<o-badge><div>abc</div></o-badge>`)
    expect(el.shadowRoot.innerHTML).to.equal(
      `<div class="o-badge"><slot></slot></div>`
    )
  })
})
