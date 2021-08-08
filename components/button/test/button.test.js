import { html, fixture, expect } from '@open-wc/testing'

import '../dist/index.es.js'

const defaultProps = {
  plain: false,
  round: false,
  circle: false,
  loading: false,
  disabled: false,
  autofocus: false,
  nativeType: 'button',
  block: false,
}

describe('Testing o-button', () => {
  it('tests button with default props', async () => {
    const el = await fixture(html` <o-button>Default</o-button> `)
    const button = el.shadowRoot.querySelector('button')
    const classList = button.getAttribute('class').split(' ')
    expect(classList.includes('o-button')).to.be.true
  })

  it('tests setting type', async () => {
    const el = await fixture(html`
      <o-button type="primary">Primary</o-button>
    `)
    const button = el.shadowRoot.querySelector('button')
    const classList = button.getAttribute('class').split(' ')
    expect(classList.includes('o-button-primary')).to.be.true
  })

  it('tests setting disabled', async () => {
    const el = await fixture(html` <o-button disabled>Disabled</o-button> `)
    const button = el.shadowRoot.querySelector('button')
    const classList = button.getAttribute('class').split(' ')
    expect(button.getAttribute('disabled')).to.equal('')
    expect(classList.includes('is-disabled')).to.be.true
  })

  it('tests setting plain', async () => {
    const el = await fixture(html` <o-button plain>Plain</o-button> `)
    const button = el.shadowRoot.querySelector('button')
    const classList = button.getAttribute('class').split(' ')
    expect(classList.includes('is-plain')).to.be.true
  })

  it('tests setting size', async () => {
    const el = await fixture(html` <o-button size="medium">Medium</o-button> `)
    const button = el.shadowRoot.querySelector('button')
    const classList = button.getAttribute('class').split(' ')
    expect(classList.includes('o-button-medium')).to.be.true
  })

  it('tests setting round', async () => {
    const el = await fixture(html` <o-button round>Round</o-button> `)
    const button = el.shadowRoot.querySelector('button')
    const classList = button.getAttribute('class').split(' ')
    expect(classList.includes('is-round')).to.be.true
  })

  it('tests setting circle', async () => {
    const el = await fixture(html` <o-button circle>Circle</o-button> `)
    const button = el.shadowRoot.querySelector('button')
    const classList = button.getAttribute('class').split(' ')
    expect(classList.includes('is-circle')).to.be.true
  })

  it('tests setting block', async () => {
    const el = await fixture(html` <o-button block>Block</o-button> `)
    const button = el.shadowRoot.querySelector('button')
    const classList = button.getAttribute('class').split(' ')
    expect(classList.includes('is-block')).to.be.true
  })

  it('tests setting loading', async () => {
    const el = await fixture(html` <o-button loading>Loading</o-button> `)
    const svg = el.shadowRoot.querySelector('svg')
    expect(svg).to.not.be.null
  })

  it('passes the a11y audit', async () => {
    const el = await fixture(html` <o-button></o-button> `)
    expect(el).shadowDom.to.be.accessible()
  })
})
