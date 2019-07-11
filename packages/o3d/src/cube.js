import { Matrix4 } from './matrix4'
import { Vector3 } from './vector3'
import { Object3d } from './object3d'

class Cube extends Object3d{
  constructor(length, width, height, options) {
    super()
    options = options || {}
    this.center = options.center || new Vector3(this.x, this.y, this.z)
    this.length = length
    this.width = width
    this.height = height

 

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

    const ps = this.points
    this.colors = options.colors || ['red', 'green', 'blue', 'yellow', '#ccc', '#467fdd']
    this.faces = [
      [ps[0], ps[1], ps[2], ps[3], this.colors[0]],
      [ps[4], ps[5], ps[6], ps[7], this.colors[1]],
      [ps[4], ps[5], ps[1], ps[0], this.colors[2]],
      [ps[3], ps[2], ps[6], ps[7], this.colors[3]],
      [ps[3], ps[0], ps[4], ps[7], this.colors[4]],
      [ps[2], ps[1], ps[5], ps[6], this.colors[5]]
    ]

    this.faces.forEach(face=>{
      face.o3d = this
    })
  }

  transform(pv, groupMatrix) {
    // const yTopOrigin = {
    //   x: this.center.x,
    //   y: this.center.y - this.hh,
    //   z: this.center.z
    // }
    // const yBottomOrigin = {
    //   x: this.center.x,
    //   y: this.center.y + this.hh,
    //   z: this.center.z
    // }

    // for (let i = 0; i < 8; i++) {
    //   this['p' + i].copy(this.basePoints[i])
    // }

    // this.basePoints[0].rotateY(yTopOrigin, this.rotate.y, this.p0)
    // this.basePoints[1].rotateY(yTopOrigin, this.rotate.y, this.p1)
    // this.basePoints[4].rotateY(yTopOrigin, this.rotate.y, this.p4)
    // this.basePoints[5].rotateY(yTopOrigin, this.rotate.y, this.p5)

    // this.basePoints[2].rotateY(yBottomOrigin, this.rotate.y, this.p2)
    // this.basePoints[3].rotateY(yBottomOrigin, this.rotate.y, this.p3)
    // this.basePoints[6].rotateY(yBottomOrigin, this.rotate.y, this.p6)
    // this.basePoints[7].rotateY(yBottomOrigin, this.rotate.y, this.p7)


    this._matrix.identity().appendTransform(this.x, this.y, this.z, this.scaleX, this.scaleY, this.scaleZ, this.rotateX, this.rotateY, this.rotateZ, this.skewX, this.skewY, this.skewZ, this.originX, this.originY, this.originZ)

    if(groupMatrix){
      this._groupMatrix.multiplyMatrices(groupMatrix, this._matrix)
    }else{
      this._groupMatrix = this._matrix
    }
    

    for (let i = 0; i < 8; i++) {
      this.basePoints[i].applyMatrix4Out(this._groupMatrix, this['p' + i])
    }



    //p*v*m
    //face z-sort !!! w-sort !!
    //render
    for (let i = 0; i < 8; i++) {
      this['p' + i].applyMatrix4(pv)
    }
  }

  update(pv, groupMatrix) {
    this.transform(pv, groupMatrix)
    return this.faces
  }

  draw(ctx, face, width, height) {
    const p1 = face[0]
    const p2 = face[1]
    const p3 = face[2]
    const p4 = face[3]
    ctx.beginPath()
    ctx.moveTo( this.mapX(p1.x, width), this.mapY(p1.y ,height))
    ctx.fillStyle = face[4]
    ctx.lineTo(this.mapX(p2.x, width), this.mapY(p2.y ,height))
    ctx.lineTo(this.mapX(p3.x, width), this.mapY(p3.y ,height))
    ctx.lineTo(this.mapX(p4.x, width), this.mapY(p4.y ,height))

    ctx.closePath()
    ctx.fill()
  }


  order(face) {
    return face[0].w + face[1].w + face[2].w + face[3].w
  }




  stroke(ctx, scale) {
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
