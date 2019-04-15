export function invert(pixels, ratio) {
  const d = pixels.data
  ratio = ratio === undefined ? 1 : ratio
  for (var i = 0; i < d.length; i += 4) {
    d[i] = d[i] + ratio * (255 - 2 * d[i])
    d[i + 1] = d[i + 1] + ratio * (255 - 2 * d[i + 1])
    d[i + 2] = d[i + 2] + ratio * (255 - 2 * d[i + 2])
  }
  return pixels
}
