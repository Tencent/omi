import { html, fixture, expect } from '@open-wc/testing'

import '../src/index.esm.js'

const defaultProps = {
    type: 'line',
    percent: 0,
    status: undefined,
    strokeColor: undefined,
    trailColor: undefined,
    textColor: undefined,
    sterokeWidth: undefined,
    width: undefined,
    showInfo: true
  }

describe('Testing o-progress', () => {
  it('test setting type',async () =>{
    const el = await fixture(html` <o-progress type="circle"></o-progress> `)
    const svg = el.shadowRoot.querySelector('svg')
    expect(svg).to.not.be.null
  })

  it('test setting percent',async () =>{
    const el = await fixture(html` <o-progress percent="50"></o-progress> `)
    const percent = el.shadowRoot.querySelector(".o-progress-line__inner-bar").style.width
    expect(percent).to.equal('50%')
  })
 
  it('test setting width',async () =>{
    const el = await fixture(html` <o-progress width="600"></o-progress> `)
    const width = el.shadowRoot.querySelector(".o-progress-line__outer").style.width
    expect(width).to.equal('600px')
  })

  it('test setting stroke-width',async () =>{
    const el = await fixture(html` <o-progress stroke-width="16"></o-progress> `)
    const strokeWidth = el.shadowRoot.querySelector(".o-progress-line__inner-bar").style.height
    expect(strokeWidth).to.equal('16px')
  })

  it('test setting stroke-color',async () =>{
    const el = await fixture(html` <o-progress stroke-color="red"></o-progress> `)
    const backgroundColor = el.shadowRoot.querySelector(".o-progress-line__inner-bar").style.backgroundColor
    expect(backgroundColor).to.equal('red')
  })

  it('test setting trail-color',async () =>{
    const el = await fixture(html` <o-progress trail-color="red"></o-progress> `)
    const backgroundColor = el.shadowRoot.querySelector(".o-progress-line__bar").style.backgroundColor
    expect(backgroundColor).to.equal('red')
  })

  it('test setting text-color',async () =>{
    const el = await fixture(html` <o-progress text-color="red"></o-progress> `)
    const color = el.shadowRoot.querySelector("span>span").style.color
    expect(color).to.equal('red')
  })

  it('test setting status',async () =>{
    const el = await fixture(html` <o-progress status="error"></o-progress> `)
    const backgroundColor = el.shadowRoot.querySelector(".o-progress-line__inner-bar").style.backgroundColor
    expect(backgroundColor).to.equal('rgb(244, 53, 48)')
  })

  it('test setting show-info',async () =>{
    const el = await fixture(html` <o-progress show-info="false"></o-progress> `)
    const showInfo = el.shadowRoot.querySelector("span")
    expect(showInfo).to.equal(null)
  })
  
})
