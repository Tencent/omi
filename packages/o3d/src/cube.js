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
    this.test1 = new Vector3(100, 100, 500)
    this.test2 = new Vector3(100 + 100, 100, 500)
    this.test3 = new Vector3(100 + 100, 100 + 100, 500)
    this.test4 = new Vector3(100, 100 + 100, 500)
    this.test5 = new Vector3(100, 100, 600)
    this.test6 = new Vector3(100 + 100, 100, 600)
    this.test7 = new Vector3(100 + 100, 100 + 100, 600)
    this.test8 = new Vector3(100, 100 + 100, 600)
    this.pv = new Matrix4()

    var rotation = 50
    this.test1.rotateYSelf({ x: 150, y: 100, z: 550 }, rotation)
    this.test2.rotateYSelf({ x: 150, y: 100, z: 550 }, rotation)
    this.test5.rotateYSelf({ x: 150, y: 100, z: 550 }, rotation)
    this.test6.rotateYSelf({ x: 150, y: 100, z: 550 }, rotation)

    this.test3.rotateYSelf({ x: 150, y: 200, z: 550 }, rotation)
    this.test4.rotateYSelf({ x: 150, y: 200, z: 550 }, rotation)
    this.test7.rotateYSelf({ x: 150, y: 200, z: 550 }, rotation)
    this.test8.rotateYSelf({ x: 150, y: 200, z: 550 }, rotation)
  }

  render(ctx, camera) {
    this.pv.multiplyMatrices(camera.p_matrix, camera.v_matrix)
    //p*v*m
    //face z-sort !!! w-sort !!
    //render
    this.test1.applyMatrix4(this.pv)
    this.test2.applyMatrix4(this.pv)
    this.test3.applyMatrix4(this.pv)
    this.test4.applyMatrix4(this.pv)
    this.test5.applyMatrix4(this.pv)
    this.test6.applyMatrix4(this.pv)
    this.test7.applyMatrix4(this.pv)
    this.test8.applyMatrix4(this.pv)
    console.log(this.test1)
    console.log(this.test2)
    console.log(this.test3)
    console.log(this.test4)
    console.log(this.test5)
    console.log(this.test6)
    console.log(this.test7)
    console.log(this.test8)

    window.xxx = [
      this.test1,
      this.test2,
      this.test3,
      this.test4,
      this.test5,
      this.test6,
      this.test7,
      this.test8
    ]
  }
}

export { Cube }
