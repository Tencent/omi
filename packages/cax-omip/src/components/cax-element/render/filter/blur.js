import { createImageData } from './create-image-data'

export function blur(pixels, diameter) {
  diameter = Math.abs(diameter)
  if (diameter <= 1) return pixels
  var radius = diameter / 2
  var len = Math.ceil(diameter) + (1 - (Math.ceil(diameter) % 2))
  var weights = new Float32Array(len)
  var rho = (radius + 0.5) / 3
  var rhoSq = rho * rho
  var gaussianFactor = 1 / Math.sqrt(2 * Math.PI * rhoSq)
  var rhoFactor = -1 / (2 * rho * rho)
  var wsum = 0
  var middle = Math.floor(len / 2)
  for (var i = 0; i < len; i++) {
    var x = i - middle
    var gx = gaussianFactor * Math.exp(x * x * rhoFactor)
    weights[i] = gx
    wsum += gx
  }
  for (var i = 0; i < weights.length; i++) {
    weights[i] /= wsum
  }
  return separableConvolve(pixels, weights, weights, false)
}

function separableConvolve(pixels, horizWeights, vertWeights, opaque) {
  return horizontalConvolve(
    verticalConvolve(pixels, vertWeights, opaque),
    horizWeights,
    opaque
  )
}

function horizontalConvolve(pixels, weightsVector, opaque) {
  var side = weightsVector.length
  var halfSide = Math.floor(side / 2)

  var src = pixels.data
  var sw = pixels.width
  var sh = pixels.height

  var w = sw
  var h = sh
  var output = createImageData(w, h)
  var dst = output.data

  var alphaFac = opaque ? 1 : 0

  for (var y = 0; y < h; y++) {
    for (var x = 0; x < w; x++) {
      var sy = y
      var sx = x
      var dstOff = (y * w + x) * 4
      var r = 0,
        g = 0,
        b = 0,
        a = 0
      for (var cx = 0; cx < side; cx++) {
        var scy = sy
        var scx = Math.min(sw - 1, Math.max(0, sx + cx - halfSide))
        var srcOff = (scy * sw + scx) * 4
        var wt = weightsVector[cx]
        r += src[srcOff] * wt
        g += src[srcOff + 1] * wt
        b += src[srcOff + 2] * wt
        a += src[srcOff + 3] * wt
      }
      dst[dstOff] = r
      dst[dstOff + 1] = g
      dst[dstOff + 2] = b
      dst[dstOff + 3] = a + alphaFac * (255 - a)
    }
  }
  return output
}

function verticalConvolve(pixels, weightsVector, opaque) {
  var side = weightsVector.length
  var halfSide = Math.floor(side / 2)

  var src = pixels.data
  var sw = pixels.width
  var sh = pixels.height

  var w = sw
  var h = sh
  var output = createImageData(w, h)
  var dst = output.data

  var alphaFac = opaque ? 1 : 0

  for (var y = 0; y < h; y++) {
    for (var x = 0; x < w; x++) {
      var sy = y
      var sx = x
      var dstOff = (y * w + x) * 4
      var r = 0,
        g = 0,
        b = 0,
        a = 0
      for (var cy = 0; cy < side; cy++) {
        var scy = Math.min(sh - 1, Math.max(0, sy + cy - halfSide))
        var scx = sx
        var srcOff = (scy * sw + scx) * 4
        var wt = weightsVector[cy]
        r += src[srcOff] * wt
        g += src[srcOff + 1] * wt
        b += src[srcOff + 2] * wt
        a += src[srcOff + 3] * wt
      }
      dst[dstOff] = r
      dst[dstOff + 1] = g
      dst[dstOff + 2] = b
      dst[dstOff + 3] = a + alphaFac * (255 - a)
    }
  }
  return output
}
