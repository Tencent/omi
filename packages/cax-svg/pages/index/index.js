import cax, { html, SVG } from '../../cax/index'

Page({
  onLoad: function (options) {
    const info = wx.getSystemInfoSync()
    const stage = new cax.Stage(info.windowWidth, info.windowHeight / 2, 'myCanvas', this)



//     const rect = new SVG(html`
//     <svg>
//       <rect x="10" y="10" height="100" width="100"
//             style="stroke:#ff0000; fill: #0000ff"/>
//     </svg>`)

//     stage.add(rect)

//     const circle = new SVG(html`
//     <svg >
//       <circle cx="140" cy="40" r="24" style="stroke:#006600; fill:#00cc00"/>
//       <ellipse cx="240" cy="40" rx="30" ry="15"
//       style="stroke:#006600; fill:#00cc00"/>
//     </svg>`)
//     stage.add(circle)
//     const lines = new SVG(html`
//     <svg x="100" y="100"> 
//       <line x1="0"  y1="10" x2="0" y2="100" style="stroke:#006600;"/>
//       <line x1="10" y1="10" x2="100" y2="100" style="stroke:#006600;"/>
//       <line x1="20" y1="10" x2="100" y2="50"  style="stroke:#006600;"/>
//       <line x1="30" y1="10" x2="110" y2="10"  style="stroke:#006600;"/>
//     </svg>
//         `)
//     stage.add(lines)


//     const polyline = new SVG(html`
//     <svg x="100" y="100"> 
//     <polyline points="0,0  30,0  15,30"
//     style="stroke:#006600;"/>

//     <polyline points="30,2  80,2  55,52"
//     style="stroke:#006600; stroke-width: 4;
//            fill: #33cc33;"/>


//     <polyline points="110,2  160,2  135,52  110,2"
//     style="stroke:#006600; fill: #33cc33;"/>
//     </svg>
//         `)
//     stage.add(polyline)

//     const polygon = new SVG(html`
//     <svg x="100" y="100"> 
    
//     <polygon points="10,0  60,0  35,50"
//     style="stroke:#660000; fill:#cc3333;"/>


//   <polygon points="50,5   100,5  125,30  125,80 100,105
//   50,105  25,80  25, 30"
// style="stroke:#660000; fill:#cc3333; stroke-width: 3;"/>
//     </svg>
//         `)
//     stage.add(polygon)

//     const path1 = new SVG(html`
//     <svg x="100" y="100"> 
//     <path d="M50,50
//     A30,30 0 0,1 35,20
//     L100,100
//     M110,110
//     L100,0"
//  style="stroke:#660000; fill:none;"/>   

//  <path d="M150,150
//  L120,100"
// style="stroke:#660000; fill:none;"/>

// <path d="M50,50
// A30,50 0 0,1 100,100"
// style="stroke:#660000; fill:none;"/>


// <path d="M40,20  A30,30 0 0,0 70,70"
//     style="stroke: #cccc00; stroke-width:2; fill:none;"/>

// <path d="M40,20  A30,30 0 1,0 70,70"
//     style="stroke: #ff0000; stroke-width:2; fill:none;"/>

// <path d="M40,20  A30,30 0 1,1 70,70"
//     style="stroke: #00ff00; stroke-width:2; fill:none;"/>

// <path d="M40,20  A30,30 0 0,1 70,70"
//     style="stroke: #0000ff; stroke-width:2; fill:none;"/>

// <path d="M50,50 Q50,100 100,100" 
// style="stroke: #006666; fill:none;"/> 
// <path d="M50,50 C75,80 125,20 150,50"
// style="stroke: #006666; fill:none;"/> 


// <path d="M50,50 L100,50 L100,100 Z"
// style="stroke: #006666; fill:none;"/>



//     </svg>
//         `)
//     stage.add(path1)

    const path2 = new SVG(html`
    <svg x="-40" y="-20"> 
  
   
    <path d="M100,100 L150,100 a50,25 0 0,0 150,100"
      style="stroke: #006666; fill: none;"/>
    </svg>
        `)
    stage.add(path2)
    
    stage.update()


    // const rect = new cax.Rect(100, 100, {
    //   fillStyle: 'black'
    // })

    // rect.originX = 50
    // rect.originY = 50
    // rect.x = 100
    // rect.y = 100
    // rect.rotation = 30

    // rect.on('touchstart', () => {
    //   console.log('rect touchstart')
    // })

    // rect.on('touchmove', () => {
    //   console.log('rect touchmove')
    // })

    // rect.on('touchend', () => {
    //   console.log('rect touchend')
    // })

    // rect.on('tap', () => {
    //   console.log('rect tap')
    // })


    // stage.add(rect)


    // cax.To.get(rect).to().x(200, 2000, cax.easing.elasticInOut).start()




    // setInterval(function () {
    //   rect.rotation++
    //   stage.update()
    // }, 16)

  }
})
