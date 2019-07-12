import { Vector3, Stage, Cube, Camera, Group } from '../../src/o3d'

const camera = new Camera({
  x: 0,
  y: 0,
  z: 700,
  tx: 0,
  ty: 0,
  tz: 0,
  fov: 60,
  ratio: 600 / 400,
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

const group = new Group()

const cube = new Cube(100, 100, 100, {
  center: new Vector3(0, 0, 0)
})
//cube.rotateY =30
group.add(cube)


const cubeB = new Cube(100, 100, 100, {
  center: new Vector3(200, 0, 0)
})

group.add(cubeB)

stage.add(group)

stage.update()

animate()

function animate() {
  requestAnimationFrame(animate)
 // group.rotateX += 1
  group.rotateY += 1
 // group.rotateZ += 1
  //camera.y += 1
  stage.update()
}
