import { html, fixture, expect } from '@open-wc/testing'

import '../dist/index.es.js'

describe('o-counter ', () => {
  it('default prop', async () => {
    const el = await fixture(html`<o-collapse>
  <div>abc</div>
</o-collapse>`)
    expect(el.shadowRoot.innerHTML).to.equal(
      `<slot></slot>`
    )
  })


})
