import { html, fixture, expect } from '@open-wc/testing'

import '../dist/index.es.js'

describe('o-tag', () => {
  it('default prop', async () => {
    const el = await fixture(html`<o-counter></o-counter>`)
    expect(el.shadowRoot.innerHTML).to.equal(
      `<button>-</button><span>1</span><button>+</button>`
    )
  })
})
