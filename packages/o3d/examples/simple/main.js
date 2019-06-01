import { Stage, Cube, Camera } from '../../src/o3d'

const stage = new Stage({
  camera: new Camera({
    x: 0,
    y: 0,
    z: 600,
    rotateX: 0,
    rotateY: 0,
    fov: 60,
    ratio: 600 / 600,
    front: 1,
    back: 1000
  }),
  render: 'canvas'
});

const cube = new Cube(100, 100, 100)

stage.add(cube)

animate();



function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.02;
  stage.update()
}
