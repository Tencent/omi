const DEG_TO_RAD = 0.017453292519943295
const PI_2 = Math.PI * 2

class Matrix2D {
  constructor(a, b, c, d, tx, ty) {
    this.a = a == null ? 1 : a
    this.b = b || 0
    this.c = c || 0
    this.d = d == null ? 1 : d
    this.tx = tx || 0
    this.ty = ty || 0
    return this
  }

  identity() {
    this.a = this.d = 1
    this.b = this.c = this.tx = this.ty = 0
    return this
  }

  appendTransform(
    x,
    y,
    scaleX,
    scaleY,
    rotation,
    skewX,
    skewY,
    originX,
    originY
  ) {
    if (rotation % 360) {
      var r = rotation * DEG_TO_RAD
      var cos = Math.cos(r)
      var sin = Math.sin(r)
    } else {
      cos = 1
      sin = 0
    }
    if (skewX || skewY) {
      skewX *= DEG_TO_RAD
      skewY *= DEG_TO_RAD
      this.append(
        Math.cos(skewY),
        Math.sin(skewY),
        -Math.sin(skewX),
        Math.cos(skewX),
        x,
        y
      )
      this.append(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, 0, 0)
    } else {
      this.append(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, x, y)
    }
    if (originX || originY) {
      this.tx -= originX * this.a + originY * this.c
      this.ty -= originX * this.b + originY * this.d
    }
    return this
  }

  append(a, b, c, d, tx, ty) {
    var a1 = this.a
    var b1 = this.b
    var c1 = this.c
    var d1 = this.d
    this.a = a * a1 + b * c1
    this.b = a * b1 + b * d1
    this.c = c * a1 + d * c1
    this.d = c * b1 + d * d1
    this.tx = tx * a1 + ty * c1 + this.tx
    this.ty = tx * b1 + ty * d1 + this.ty
    return this
  }

  initialize(a, b, c, d, tx, ty) {
    this.a = a
    this.b = b
    this.c = c
    this.d = d
    this.tx = tx
    this.ty = ty
    return this
  }

  setValues(a, b, c, d, tx, ty) {
    this.a = a == null ? 1 : a
    this.b = b || 0
    this.c = c || 0
    this.d = d == null ? 1 : d
    this.tx = tx || 0
    this.ty = ty || 0
    return this
  }

  invert() {
    let a1 = this.a
    let b1 = this.b
    let c1 = this.c
    let d1 = this.d
    let tx1 = this.tx
    let n = a1 * d1 - b1 * c1

    this.a = d1 / n
    this.b = -b1 / n
    this.c = -c1 / n
    this.d = a1 / n
    this.tx = (c1 * this.ty - d1 * tx1) / n
    this.ty = -(a1 * this.ty - b1 * tx1) / n
    return this
  }

  copy(matrix) {
    return this.setValues(
      matrix.a,
      matrix.b,
      matrix.c,
      matrix.d,
      matrix.tx,
      matrix.ty
    )
  }
}

Matrix2D.decompose = function(a, b, c, d, tx, ty, transform) {
  const skewX = -Math.atan2(-c, d)
  const skewY = Math.atan2(b, a)

  const delta = Math.abs(skewX + skewY)

  if (delta < 0.00001 || Math.abs(PI_2 - delta) < 0.00001) {
    transform.rotation = skewY

    if (a < 0 && d >= 0) {
      transform.rotation += transform.rotation <= 0 ? Math.PI : -Math.PI
    }

    transform.skewX = transform.skewY = 0
  } else {
    transform.rotation = 0
    transform.skewX = skewX
    transform.skewY = skewY
  }

  // next set scale
  transform.scaleX = Math.sqrt(a * a + b * b)
  transform.scaleY = Math.sqrt(c * c + d * d)

  // next set position
  transform.x = tx
  transform.y = ty
}

export default Matrix2D
