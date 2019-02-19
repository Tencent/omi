export function brightness (pixels, adjustment) {
  const data = pixels.data
  const length = data.length
  for (let i = 0; i < length; i += 4) {
    data[i] += adjustment
    data[i + 1] += adjustment
    data[i + 2] += adjustment
  }
  return pixels
}
