import cax from '../../cax/index'

Page({
  onLoad: function (options) {
    const info = wx.getSystemInfoSync()
    const stage = new cax.Stage(info.windowWidth, info.windowHeight / 2, 'myCanvas', this)

    const rect = new cax.Rect(100, 100, {
      fillStyle: 'black'
    })

    rect.originX = 50
    rect.originY = 50
    rect.x = 100
    rect.y = 100
    rect.rotation = 30

    rect.on('touchstart', () => {
      console.log('rect touchstart')
    })

    rect.on('touchmove', () => {
      console.log('rect touchmove')
    })

    rect.on('touchend', () => {
      console.log('rect touchend')
    })

    rect.on('tap', () => {
      console.log('rect tap')
    })


    stage.add(rect)


    cax.To.get(rect).to().x(200, 2000, cax.easing.elasticInOut).start()




    setInterval(function () {
      rect.rotation++
      stage.update()
    }, 16)

  }
})
