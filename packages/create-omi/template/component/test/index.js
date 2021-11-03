import { html, fixture, expect } from '@open-wc/testing'

import '../dist/index.es.js'

describe('o-counter ', () => {
  it('default prop', async () => {
    const el = await fixture(html`<o-counter></o-counter>`)
    expect(el.shadowRoot.innerHTML).to.equal(
      `<button>-</button><span>1</span><button>+</button>`
    )
  })

  it('count prop', async () => {
    const el = await fixture(html`<o-counter count="2"></o-counter>`)
    expect(el.shadowRoot.innerHTML).to.equal(
      `<button>-</button><span>2</span><button>+</button>`
    )
  })
})
