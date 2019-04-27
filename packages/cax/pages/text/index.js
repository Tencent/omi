import { html, renderSVG } from '../../cax/cax'

Page({
  onLoad: function (options) {

    renderSVG(html`
    <svg width="200" height="200">

      <text x="20" y="40">Example SVG text 1</text>

    </svg>`, 'svg-a', this)

    renderSVG(html`
    <svg width="200" height="200">

      <text x="20" y="40">Example SVG text 1</text>
      <line x1="10" y1="40" x2="150" y2="40" style="stroke: #000000" />

    </svg>`, 'svg-b', this)

    renderSVG(html`
    <svg width="200" height="200">
      <text x="20" y="60" style="fill: #000000; stroke: none; font-size: 48px;">
        Fill only
      </text>
      <text x="20" y="120" style="fill: none; stroke: #000000;  font-size: 48px;">
        Stroke only
      </text>
      <text x="20" y="180" style="fill: #999999; stroke: #000000;  font-size: 48px;">
        Fill and stroke
      </text>
    </svg>
        `, 'svg-c', this)

  }





})
