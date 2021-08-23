import { html, fixture, expect, assert } from '@open-wc/testing'

import '../dist/index.es.js'


describe('o-card', () => {
  it('default', async () => {
    const el = await fixture(html`<o-card></o-card>`)
    const card = el.shadowRoot.querySelector('div')
    const classList = card.getAttribute('class').split(' ')
    expect(classList.includes('o-card')).to.be.true
  })

  it('hoverable prop', async () => {
    const el = await fixture(html`<o-card hoverable="true"></o-card>`)
    const card = el.shadowRoot.querySelector('div')
    const classList = card.getAttribute('class').split(' ')
    expect(classList.includes('is-shadow-true')).to.be.true
  })

  it('bordered prop', async () => {
    const el = await fixture(html`<o-card bordered=true></o-card>`)
    const card = el.shadowRoot.querySelector('div')
    const classList = card.getAttribute('class').split(' ')
    expect(classList.includes('is-border')).to.be.true
  })

  it('action prop', async () => {
    const el = await fixture(html`<o-card actions="[{icon: 'add-ic-call-rounded'}]"></o-card>`)
    const domNode = el.shadowRoot.querySelector('o-icon-add-ic-call-rounded')
    expect(domNode).to.not.be.null
  })

  it('actions prop', async () => {
    const el = await fixture(html`<o-card actions="[{icon: 'add-a-photo-rounded'},{icon: 'add-ic-call-rounded'},{icon: 'add-comment-rounded'}]"></o-card>`)
    const actions = el.shadowRoot.querySelector('.o-card-footer').childNodes
    assert.lengthOf(actions, 3, 'actions[] Rendered correctly')
  })

  it('title prop', async () => {
    const el = await fixture(html`<o-card title="test content"></o-card>`)
    const str = el.shadowRoot.querySelector('.o-card-title').innerHTML
    assert.equal(str, 'test content', '{props.title} equal `test content`')
  })

})
