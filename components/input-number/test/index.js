import { html, fixture, expect } from '@open-wc/testing'
import '../dist/index.es.js'

describe('Testing size', () => {
  it('Testing size', async () => {
    const el = await fixture(html`<o-input-number size="medium"></o-input-number>`)
    expect(el.shadowRoot.innerHTML).to.equal(`<div class="o-input-number o-input-number-medium"><button class="o-button o-button-sub o-button-sub-justify">-</button><input class="o-input o-input-justify"><button class="o-button o-button-add o-button-add-justify">+</button></div>`)
  })
  it('Testing disabled', async () => {
    const el = await fixture(html`<o-input-number disabled="true"></o-input-number>`)
    expect(el.shadowRoot.innerHTML).to.equal('<div class="o-input-number is-disabled o-input-number-medium"><button class="o-button o-button-sub o-button-sub-justify">-</button><input class="o-input o-input-justify"><button class="o-button o-button-add o-button-add-justify">+</button></div>')
  })
  it('Testing strictly', async () => {
    const el = await fixture(html`<o-input-number strictly="true"></o-input-number>`)
    expect(el.shadowRoot.innerHTML).to.equal(`<div class="o-input-number o-input-number-medium"><button class="o-button o-button-sub o-button-sub-justify">-</button><input class="o-input o-input-justify"><button class="o-button o-button-add o-button-add-justify">+</button></div>`)
  })
  it('Testing style', async () => {
    const el = await fixture(html`<o-input-number style="right"></o-input-number>`)
    expect(el.shadowRoot.innerHTML).to.equal(`<div class="o-input-number o-input-number-medium"><button class="o-button o-button-sub o-button-sub-right">-</button><input class="o-input o-input-right"><button class="o-button o-button-add o-button-add-right">+</button></div>`)
  })
})
