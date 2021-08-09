import { html, fixture, expect } from '@open-wc/testing'

import '../dist/index.es.js'

const defaultProps = {
  theme: 'light',
  size: 'small',
  width: 'auto',
  noCalendar:true,
  enableTime:true,
  enableSeconds:true,
  minuteIncrement: 1,
}

describe('o-time-picker ', () => {
  it('default prop', async () => {
    const el = await fixture(html`<o-time-picker></o-time-picker>`)
    expect(el.shadowRoot.innerHTML).to.equal(`<div><o-input id="myinput" size="small" css=".o-input input {width: auto;background-color:undefined;color:undefined;}" type="text"></o-input></div>`)
  })

  it('size prop', async () => {
    const el = await fixture(html`<o-time-picker size="medium"></o-time-picker>`)
    expect(el.shadowRoot.innerHTML).to.equal(`<div><o-input id="myinput" size="medium" css=".o-input input {width: auto;background-color:undefined;color:undefined;}" type="text"></o-input></div>`)
  })
  
  // it('defaultHour prop', async () => {
  //  // const el = await fixture(html`<div class="flatpickr-calendar hasTime noCalendar animate open arrowTop arrowLeft" tabindex="-1" style="top: 123.542px; left: 8px; right: auto;"></div>`)
    
  //   const el = await fixture(html`<o-time-picker></o-time-picker>`)
  //   const flat = el.querySelector(".flatpickr-calendar-hasTime-noCalendar-animate")
  //   console.log(flat)
  //   expect(flat).to.equal(`<div></div>`)
  // })
})

