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

    renderSVG(html`
    <svg width="300" height="220">
    <rect x="20" y="20" width="40" height="40" style="stroke: #3333cc; fill:none;"></rect>

<rect x="20" y="20" width="40" height="40" style="fill: #3333cc" transform="rotate(15)"></rect>
    </svg>`, 'svg-c', this)
    
    renderSVG(html` <svg width="300" height="220">
    <rect x="20" y="20" width="40" height="40"
      style="stroke: #3333cc; fill:none;"
        />
<rect x="20" y="20" width="40" height="40"
      style="fill: #3333cc"
      transform="rotate(15, 40, 40)"
        /></svg>`, 'svg-d', this)
    

    renderSVG(html` <svg width="300" height="220">
     <rect x="10" y="10" width="20" height="30"
      style="stroke: #3333cc; fill:none;" />

<rect x="10" y="10" width="20" height="30"
      style="stroke: #000000; fill:none;"
      transform="scale(2)" />
    </svg>`, 'svg-e', this)

    
renderSVG(html` <svg width="300" height="220">
<rect x="10" y="10" width="20" height="30"
      style="stroke: #3333cc; fill:none;" />

<rect x="10" y="10" width="20" height="30"
      style="stroke: #000000; fill:none;"
      transform="scale(2,3)" />
</svg>`, 'svg-f', this)



renderSVG(html` <svg width="300" height="220">

<path d="M20,20 l20,20 l0,20 l-20,20 Z"
      style="stroke: #3333cc; fill:none;" />

<path d="M20,20 l20,20 l0,20 l-20,20 Z"
      style="stroke: #000000; fill:none;"
      transform="translate(100, 0) scale(-1, 1) " />
</svg>`, 'svg-g', this)
   

  },

  changePath: function (){
    this.pasitionElement.toggle()
  },

  tapHandler: function (){
    console.log(this)
  }
})
