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
    //w 0.001694915254237288 10
    //w 0.0018181818181818182 50
    //w0.002               100
    //w0.0033333333333333335  300
    //w 0.01  500
    this.testP = new Vector3(100, 100, 500)

    this.pv = new Matrix4()
  }

  render(ctx, camera) {
    this.pv.multiplyMatrices(camera.p_matrix, camera.v_matrix)
    //p*v*m
    //face z-sort !!! w-sort !!
    //render
    this.testP.applyMatrix4(this.pv)

    console.log(this.testP.w)
  }
}

export { Cube }
