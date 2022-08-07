import { html, fixture, expect } from '@open-wc/testing'

import '../dist/index.es.js'

describe('o-chart', () => {
  const optios = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true
      }
    ]
  }
  const width = 300
  const height = 300
  it('default prop', async () => {
    const el = await fixture(
      html`<o-chart
        width=${width}
        height=${height}
        options=${optios}
      ></o-chart>`
    )
    expect(el).to.be.accessible()
  })
})
