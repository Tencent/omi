export function grayscale(pixels, adjustment) {
  const data = pixels.data
  const length = data.length
  for (let i = 0; i < length; i += 4) {
    let r = data[i]
    let g = data[i + 1]
    let b = data[i + 2]

    // CIE luminance for the RGB
    // The human eye is bad at seeing red and blue, so we de-emphasize them.
    let v = 0.2126 * r + 0.7152 * g + 0.0722 * b
    data[i] = r + (v - r) * adjustment
    data[i + 1] = g + (v - g) * adjustment
    data[i + 2] = b + (v - b) * adjustment
  }
  return pixels
}
