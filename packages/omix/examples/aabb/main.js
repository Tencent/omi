import cax from '../../src/cax/cax.js'

var stage = new cax.Stage(100,100,'body')

var group = new cax.Group()
stage.hitAABB = true
const circle = new cax.Circle(100, {
  fillStyle: 'red'
})
group.cursor = 'pointer' 
group.width  = 50
group.height = 50

//注释掉也可以 cursor 生效
// circle.width  = 50
// circle.height = 50

group.on('click',function(){
  alert(1)
})
group.add(circle)
stage.add(group)

cax.tick(function(){
  stage.update()
})