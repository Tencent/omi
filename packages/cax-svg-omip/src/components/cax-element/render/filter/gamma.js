export function gamma (pixels, adjustment) {
  const data = pixels.data
  const length = data.length
  for (let i = 0; i < length; i += 4) {
    data[i] = Math.pow(data[i] / 255, adjustment) * 255
    data[i + 1] = Math.pow(data[i + 1] / 255, adjustment) * 255
    data[i + 2] = Math.pow(data[i + 2] / 255, adjustment) * 255
  }
  return pixels
};
