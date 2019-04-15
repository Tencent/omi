import { html, renderSVG } from '../../cax/svg'

Page({
  onLoad: function (options) {

    

const svg = renderSVG(html`
<svg width="300" height="220">
<rect x="50" y="50" height="110" width="110" style="stroke:#ff0000; fill: #ccccff" transform="translate(30) rotate(45 50 50)">
    </rect>
</svg>`, 'svg-a', this)


renderSVG(html`
<svg width="300" height="220">
<rect x="20" y="20" width="50" height="50"
      style="fill: #cc3333"/>
<rect x="20" y="20" width="50" height="50"
      style="fill: #3333cc"
      transform="translate(75,25)" />
</svg>`, 'svg-b', this)
   // this.pasitionElement = svg.children[0]

    // svg.scale = 0.5

    // svg.stage.update()

  },

  changePath: function (){
    this.pasitionElement.toggle()
  },

  tapHandler: function (){
    console.log(this)
  }
})
