import { Stage, Camera } from '../../src/o3d'
import { Circle } from '../../src/circle'

const camera = new Camera({
  x: 0,
  y: 0,
  z: 1000,
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

const circle = new Circle(100)

circle.rotateY = 30
stage.add(circle)

stage.update()

animate()

function animate() {
  requestAnimationFrame(animate)
  circle.rotateY += 1
  // circle.rotateX += 1
  // circle.rotateZ += 1
  //camera.y += 1
  stage.update()
}
