import { html, renderSVG } from '../../cax/cax'

Page({
  onLoad: function (options) {

    

const svg = renderSVG(html`
<svg width="200" height="200">
    <pasition duration="200" onclick=${this.changePath} width="100" bounds-x="50" bounds-y="50" height="100" from="M 256,213 C 245,181 206,187 234,262 147,181 169,71.2 233,18   220,56   235,81   283,88   285,78.7 286,69.3 288,60   289,61.3 290,62.7 291,64   291,64   297,63   300,63   303,63   309,64   309,64   310,62.7 311,61.3 312,60   314,69.3 315,78.7 317,88   365,82   380,56   367,18   431,71   453,181 366,262 394,187 356,181 344,213 328,185 309,184 300,284 291,184 272,185 256,213 Z" to="M 212,220 C 197,171 156,153 123,221 109,157 120,109  159,63.6 190,114  234,115  254,89.8 260,82.3 268,69.6 270,60.3 273,66.5 275,71.6 280,75.6 286,79.5 294,79.8 300,79.8 306,79.8 314,79.5 320,75.6 325,71.6 327,66.5 330,60.3 332,69.6 340,82.3 346,89.8 366,115  410,114  441,63.6 480,109  491,157 477,221 444,153 403,171 388,220 366,188 316,200 300,248 284,200 234,188 212,220 Z"
    from-stroke="black"
    to-stroke="black"
    from-fill="black"
    to-fill="black"
    stroke-width="2"
    />
</svg>`, 'svg-c', this)

    this.pasitionElement = svg.children[0]

    svg.scale = 0.5

    svg.stage.update()

  },

  changePath: function (){
    this.pasitionElement.toggle()
  },

  tapHandler: function (){
    console.log(this)
  }
})
