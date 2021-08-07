import { html, fixture, expect } from '@open-wc/testing'

import '../dist/index.es.js'


describe('o-form ', () => {
  it('default prop', async () => {
    const el = await fixture(html`<o-form initial-values="{ email: '', password: '' }"></o-form>`)
    expect(el.innerHTML).to.equal(`<div></div>`)
  })
})
