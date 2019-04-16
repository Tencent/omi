export function sepia(pixels, adjustment) {
  const data = pixels.data
  const length = data.length
  for (let i = 0; i < length; i += 4) {
    const r = data[i]
    const g = data[i + 1]
    const b = data[i + 2]

    const sr = r * 0.393 + g * 0.769 + b * 0.189
    const sg = r * 0.349 + g * 0.686 + b * 0.168
    const sb = r * 0.272 + g * 0.534 + b * 0.131

    data[i] = r + (sr - r) * adjustment
    data[i + 1] = g + (sg - g) * adjustment
    data[i + 2] = b + (sb - b) * adjustment
  }

  return pixels
}
