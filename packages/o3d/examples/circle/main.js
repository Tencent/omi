import { Stage, Camera, Group } from '../../src/o3d'
import { Circle } from '../../src/circle'

const camera = new Camera({
  x: 0,
  y: 0,
  z: 600,
  tx: 0,
  ty: 0,
  tz: 0,
  fov: 60,
  ratio: 600 / 600,
  front: 1,
  back: 1000
})

const stage = new Stage({
  camera: camera,
  renderTo: '#root',
  width: 600,
  height: 400,
  renderer: 'canvas'
});

//蓝、黄、黑、绿、红
const circle = new Circle(80,{
  stroke: 5,
  color: 'red'
})

const circleB = new Circle(80,{
  stroke: 5,
  color: 'yellow'
})


circleB.x = 60

circleB.y = -60

const circleC = new Circle(80,{
  stroke: 5,
  color: 'blue'
})

circleC.x = -60

circleC.y = -60

const circleD = new Circle(80,{
  stroke: 5,
  color: 'green'
})

circleD.x = 120

const circleE = new Circle(80,{
  stroke: 5
})


circleE.x = -120

const group = new Group()
//circle.rotateY = 30

group.add(circle,circleB,circleC,circleD,circleE)
group.rotateY = 90

stage.add(group)
stage.update()

animate()

function animate() {
  requestAnimationFrame(animate)
  group.rotateY += 1

  //camera.x += 10
  stage.update()
}
