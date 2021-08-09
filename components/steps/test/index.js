import { html, fixture, expect } from '@open-wc/testing'

import '../dist/index.es.js'


describe('o-counter ', () => {
  it('default prop', async () => {
    const el = await fixture(html`	<o-steps items="[
      { name: 'Finished', description: 'This is a description.', state: 0 },
      { name: 'In Progress', description: 'This is a description.', state: 2 },
      { name: 'Waiting', description: 'This is a description.', state: 3 }
    ]" ></o-steps>`)
    expect(el.shadowRoot.innerHTML).to.equal(`<div class="o-steps"><div class="_item _item-finish"><div class="_item-tail"></div><div class="_item-icon"><span class="icon"><i class="anticon anticon-check finish-icon"><o-icon-done></o-icon-done></i></span></div><div class="_item-content"><div class="_item-title">Finished</div><div class="_item-description">This is a description.</div></div></div><div class="_item _item-process"><div class="_item-tail"></div><div class="_item-icon"><span class="icon"><span class="icon">2</span></span></div><div class="_item-content"><div class="_item-title">In Progress</div><div class="_item-description">This is a description.</div></div></div><div class="_item _item-wait"><div class="_item-tail"></div><div class="_item-icon"><span class="icon"><span class="icon">3</span></span></div><div class="_item-content"><div class="_item-title">Waiting</div><div class="_item-description">This is a description.</div></div></div></div>`)
  })



})
