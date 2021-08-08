import { html, fixture, expect } from '@open-wc/testing'

import '../dist/index.es.js'


describe('o-icon-card ', () => {
  it('default prop', async () => {
    const el = await fixture(html`<o-icon-card></o-icon-card>`)
    expect(el.shadowRoot.innerHTML).to.equal(`<div class="card"><div class="icon"><svg viewBox="64 64 896 896" class="" width="3em" height="3em" aria-hidden="true" focusable="false"><path></path></svg></div><div class="text"><div class="info"></div><span class="caption"></span></div></div>`)
  })

 

})
