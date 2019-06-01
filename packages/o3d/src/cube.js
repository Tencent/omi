import { Matrix4 } from './matrix4'
import { Vector3 } from './vector3'


class Cube {
  constructor(position, length, width, height) {
    this.position = position
    this.length = length
    this.width = width
    this.height = height

    this.rotation = {
      x: 0,
      y: 0,
      z: 0
    }
    this.testP = new Vector3(100, 100, 100)

    this.pv = new Matrix4()
  }

  render(ctx, camera) {
    this.pv.multiplyMatrices(camera.p_matrix, camera.v_matrix)
    //p*v*m
    //face z-sort
    //render
    this.testP.applyMatrix4(this.pv)
    console.log(this.testP)
  }
}

export { Cube }
