import { invert } from './invert'
import { blur } from './blur'
import { brightness } from './brightness'
import { contrast } from './contrast'
import { grayscale } from './grayscale'
import { sepia } from './sepia'
import { threshold } from './threshold'
import { gamma } from './gamma'
import { colorize } from './colorize'

export function filter(pixels, name) {
  if (typeof name === 'string') {
    let type = name.split('(')[0]
    let num = getNumber(name)
    switch (type) {
      case 'invert':
        return invert(pixels, num)
      case 'brightness':
        return brightness(pixels, -255 + num * 255)
      case 'blur':
        return blur(pixels, num)
      case 'contrast':
        return contrast(pixels, -255 + num * 255)
      case 'grayscale':
        return grayscale(pixels, num)
      case 'sepia':
        return sepia(pixels, num)
      case 'threshold':
        return threshold(pixels, num)
      case 'gamma':
        return gamma(pixels, num)
    }
  } else {
    switch (name.type) {
      case 'colorize':
        return colorize(pixels, name)
    }
  }
}

function getNumber(str) {
  str = str
    .replace(
      /(invert)|(brightness)|(blur)|(contrast)|(grayscale)|(sepia)|(threshold)|(gamma)?\(/g,
      ''
    )
    .replace(')', '')
  if (str.indexOf('%') !== -1) {
    return Number(str.replace('%', '')) / 100
  } else if (str.indexOf('px') !== -1) {
    return Number(str.replace('px', ''))
  } else {
    return Number(str)
  }
}
