import { html, fixture, expect } from '@open-wc/testing'

import '../dist/index.es.js'

describe('o-checkbox ', () => {
  it('default prop', async () => {
    const el = await fixture(html`<o-checkbox></o-checkbox>`)
    expect(el.shadowRoot.innerHTML).to.equal(
      `<div class="o-checkbox"><input type="checkbox" value="" class="o-checkbox__native-control" id="checkbox"><div class="o-checkbox__background"><svg class="o-checkbox__checkmark" viewBox="0 0 24 24"><path class="o-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg><div class="o-checkbox__mixedmark"></div></div></div>`
    )
  })


})
