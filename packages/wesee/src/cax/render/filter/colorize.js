export function colorize (pixels, option) {
  const data = pixels.data
  const length = data.length
  const hex = (option.color.charAt(0) === '#') ? option.color.substr(1) : option.color
  const colorRGB = {
    r: parseInt(hex.substr(0, 2), 16),
    g: parseInt(hex.substr(2, 2), 16),
    b: parseInt(hex.substr(4, 2), 16)
  }

  for (let i = 0; i < length; i += 4) {
    data[i] -= (data[i] - colorRGB.r) * (option.amount)
    data[i + 1] -= (data[i + 1] - colorRGB.g) * (option.amount)
    data[i + 2] -= (data[i + 2] - colorRGB.b) * (option.amount)
  }

  return pixels
};
