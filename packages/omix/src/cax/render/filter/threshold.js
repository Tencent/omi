export function threshold (pixels, threshold) {
  const data = pixels.data
  const length = data.length
  for (let i = 0; i < length; i += 4) {
    const r = data[i]
    const g = data[i + 1]
    const b = data[i + 2]
    const v = (0.2126 * r + 0.7152 * g + 0.0722 * b >= threshold) ? 255 : 0
    data[i] = data[i + 1] = data[i + 2] = v
  }
  return pixels
};
