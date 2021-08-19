import { html, fixture, expect } from '@open-wc/testing'

import '../dist/index.es.js'

describe('Testing o-slider', () => {
  it('test single slider', async () => {
    const el = await fixture(html`<o-slider></o-slider>`)
    const single = el.shadowRoot.querySelector('#slider-1')
    expect(single).to.exist
  })

  it('test double slider', async () => {
    const el = await fixture(html`<o-slider range="double"></o-slider>`)
    const double = el.shadowRoot.querySelector('#slider-2')
    expect(double).to.exist
  })
  it('test setting tool-tip', async () => {
    const el = await fixture(html`<o-slider tooltip></o-slider>`)
    const tooltip = el.shadowRoot.querySelector('o-tooltip')
    expect(tooltip).to.exist
  })
  it('test setting vertical', async () => {
    const el = await fixture(html`<o-slider orient="vertical"></o-slider>`)
    const div = el.shadowRoot.querySelector('div')
    const classList = div.getAttribute('class').split(' ')
    expect(classList.includes('is-vertical')).to.be.true
  })
  it('test setting disabled', async () => {
    const el = await fixture(html`<o-slider disabled></o-slider>`)
    const div = el.shadowRoot.querySelector('div')
    const classList = div.getAttribute('class').split(' ')
    expect(classList.includes('is-disabled')).to.be.true
  })
  it('test setting square', async () => {
    const el = await fixture(html`<o-slider shape="square"></o-slider>`)
    const div = el.shadowRoot.querySelector('div')
    const classList = div.getAttribute('class').split(' ')
    expect(classList.includes('is-square')).to.be.true
  })
})
