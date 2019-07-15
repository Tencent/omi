export function contrast (pixels, contrast) {
  const data = pixels.data
  const length = data.length
  const factor = (259 * (contrast + 255)) / (255 * (259 - contrast))

  for (let i = 0; i < length; i += 4) {
    data[i] = factor * (data[i] - 128) + 128
    data[i + 1] = factor * (data[i + 1] - 128) + 128
    data[i + 2] = factor * (data[i + 2] - 128) + 128
  }

  return pixels
};
