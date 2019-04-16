import testSVG from '../../svg/test'
import { renderSVG } from '../../cax/svg'
import { To } from '../../cax/cax'

Page({
  data: {
   
  },
  tapHandler: function(){
    this.pause = !this.pause
  },
  onLoad: function () {

    const svg = renderSVG(testSVG, 'svg-a', this)
    const rect = svg.children[0]
    rect.originX = rect.width/2
    rect.originY = rect.height
    rect.x = svg.stage.width/2
    rect.y = svg.stage.height/2
    this.pause = false

    this.rect = rect

    console.log(To)
    var sineInOut = To.easing.sinusoidalInOut
    To.get(rect)
        .to().scaleY(0.8, 450, sineInOut).skewX(20, 900, sineInOut)
        .wait(900)
        .cycle().start()
    To.get(rect)
        .wait(450)
        .to().scaleY(1, 450, sineInOut)
        .wait(900)
        .cycle().start()
    To.get(rect)
        .wait(900)
        .to().scaleY(0.8, 450, sineInOut).skewX(-20, 900, sineInOut)
        .cycle()
        .start()
    To.get(rect)
        .wait(1350)
        .to().scaleY(1, 450, sineInOut)
        .cycle()
        .start()

      setInterval(() => {
          rect.stage.update()
      }, 16)

  
  }
})
