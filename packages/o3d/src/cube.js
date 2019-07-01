import { Matrix4 } from './matrix4'
import { Vector3 } from './vector3'

class Cube {
  constructor(length, width, height, options) {
    options = options || {}
    this.center = options.center || new Vector3(0, 0, 0)
    this.length = length
    this.width = width
    this.height = height

    this.rotate = Object.assign(
      {
        x: 0,
        y: 0,
        z: 0
      },
      options.rotate
    )
    this.pv = new Matrix4()

    const hl = this.length / 2
    const hw = this.width / 2
    const hh = this.height / 2
    this.p0 = this.center.clone().sub({ x: hl, y: hh, z: hw })
    this.p1 = this.center.clone().sub({ x: hl - this.length, y: hh, z: hw })
    this.p2 = this.center
      .clone()
      .sub({ x: hl - this.length, y: hh - this.height, z: hw })
    this.p3 = this.center.clone().sub({ x: hl, y: hh - this.height, z: hw })

    this.p4 = this.center.clone().sub({ x: hl, y: hh, z: hw - this.width })

    this.p5 = this.center
      .clone()
      .sub({ x: hl - this.length, y: hh, z: hw - this.width })
    this.p6 = this.center
      .clone()
      .sub({ x: hl - this.length, y: hh - this.height, z: hw - this.width })
    this.p7 = this.center
      .clone()
      .sub({ x: hl, y: hh - this.height, z: hw - this.width })

    //w 0.001694915254237288 10
    //w 0.0018181818181818182 50
    //w0.002               100
    //w0.0033333333333333335  300
    //w 0.01  500

    this.hh = hh
    this.hl = hl
    this.hw = hw
    this.basePoints = [
      this.p0.clone(),
      this.p1.clone(),
      this.p2.clone(),
      this.p3.clone(),
      this.p4.clone(),
      this.p5.clone(),
      this.p6.clone(),
      this.p7.clone()
    ]

    this.points = [
      this.p0,
      this.p1,
      this.p2,
      this.p3,
      this.p4,
      this.p5,
      this.p6,
      this.p7
    ]
  }

  transform(camera) {
    const yTopOrigin = {
      x: this.center.x,
      y: this.center.y - this.hh,
      z: this.center.z
    }
    const yBottomOrigin = {
      x: this.center.x,
      y: this.center.y + this.hh,
      z: this.center.z
    }

    for (let i = 0; i < 8; i++) {
      this['p' + i].copy(this.basePoints[i])
    }

    this.basePoints[0].rotateY(yTopOrigin, this.rotate.y, this.p0)
    this.basePoints[1].rotateY(yTopOrigin, this.rotate.y, this.p1)
    this.basePoints[4].rotateY(yTopOrigin, this.rotate.y, this.p4)
    this.basePoints[5].rotateY(yTopOrigin, this.rotate.y, this.p5)

    this.basePoints[2].rotateY(yBottomOrigin, this.rotate.y, this.p2)
    this.basePoints[3].rotateY(yBottomOrigin, this.rotate.y, this.p3)
    this.basePoints[6].rotateY(yBottomOrigin, this.rotate.y, this.p6)
    this.basePoints[7].rotateY(yBottomOrigin, this.rotate.y, this.p7)

    this.pv.multiplyMatrices(camera.p_matrix, camera.v_matrix)

    //p*v*m
    //face z-sort !!! w-sort !!
    //render
    for (let i = 0; i < 8; i++) {
      this['p' + i].applyMatrix4(this.pv)
    }
  }

  update(ctx, camera, scale) {
    this.transform(camera)
    this.draw(ctx, scale)
  }

  draw(ctx, scale) {
    const ps = this.points
    ctx.beginPath()
    ctx.moveTo(ps[0].x * scale, ps[0].y * scale)

    ctx.lineTo(ps[1].x * scale, ps[1].y * scale)
    ctx.lineTo(ps[2].x * scale, ps[2].y * scale)
    ctx.lineTo(ps[3].x * scale, ps[3].y * scale)
    ctx.lineTo(ps[0].x * scale, ps[0].y * scale)
    ctx.lineTo(ps[4].x * scale, ps[4].y * scale)
    ctx.lineTo(ps[5].x * scale, ps[5].y * scale)
    ctx.lineTo(ps[6].x * scale, ps[6].y * scale)
    ctx.lineTo(ps[7].x * scale, ps[7].y * scale)
    ctx.lineTo(ps[4].x * scale, ps[4].y * scale)

    ctx.moveTo(ps[5].x * scale, ps[5].y * scale)
    ctx.lineTo(ps[1].x * scale, ps[1].y * scale)

    ctx.moveTo(ps[6].x * scale, ps[6].y * scale)
    ctx.lineTo(ps[2].x * scale, ps[2].y * scale)

    ctx.moveTo(ps[7].x * scale, ps[7].y * scale)
    ctx.lineTo(ps[3].x * scale, ps[3].y * scale)
    ctx.stroke()
  }
}

export { Cube }
