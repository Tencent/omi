import { html, fixture, expect } from '@open-wc/testing'

import '../dist/index.es.js'


describe('o-counter ', () => {
  it('default prop', async () => {
    const el = await fixture(html`<o-select multiple size="mini" block="1" placeholder="Select A Item"
    options="[{label:'Item A', value: 1},{ label:'Item B', value: 2},{ label:'Item C', value: 3},{ label:'Item B', value: 4},{ label:'Item C', value: 5}]">
  </o-select>`)
    expect(el.shadowRoot.innerHTML).to.equal(`<div class="o-select o-select--mini block"><o-popover block="true" position="bottom"><div><div class="o-select__tags" style="width: 100%; max-width: 752px;"><span></span><input type="text" autocomplete="off" class="o-select__input" style="flex-grow: 1; width: 0.0961538%; max-width: 752px;"></div><div class="o-input o-input--suffix o-input--mini"><input type="text" readonly="true" autocomplete="off" placeholder="Select A Item" class="o-input__inner" style="height: 28px;"><span class="o-input__suffix"><span class="o-input__suffix-inner"><i class="o-select__caret o-input__icon o-icon-arrow-up is-reverse"></i></span></span><svg viewBox="0 0 24 24" class="arrow" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></div></div><div slot="popover" class="o-select-dropdown__wrap"><ul><li class="o-select-dropdown__option"><span>Item A</span></li><li class="o-select-dropdown__option"><span>Item B</span></li><li class="o-select-dropdown__option"><span>Item C</span></li><li class="o-select-dropdown__option"><span>Item B</span></li><li class="o-select-dropdown__option"><span>Item C</span></li></ul></div></o-popover></div>`)
  })



})
