import { html, renderSVG } from '../../cax/cax'

Page({
  onLoad: function (options) {

    renderSVG(html`
    <svg width="200" height="200">
      <image x="20" y="20" width="100" height="100" xlink:href="https://raw.githubusercontent.com/AlloyTeam/AlloyCrop/master/asset/test.png" />

    </svg>`, 'svg-a', this)

  }





})
