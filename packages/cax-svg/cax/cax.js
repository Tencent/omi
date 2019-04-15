import TWEEN from './common/tween'
import To from './common/to'
import './common/animate'

import Stage from './render/display/stage'
import WeStage from './render/display/we-stage'
import Graphics from './render/display/graphics'
import Bitmap from './render/display/bitmap'
import Text from './render/display/text'
import Group from './render/display/group'
import Sprite from './render/display/sprite'
import Shape from './render/display/shape/shape'

import RoundedRect from './render/display/shape/rounded-rect'
import ArrowPath from './render/display/shape/arrow-path'
import Ellipse from './render/display/shape/ellipse'
import Path from './render/display/shape/path'

import Button from './render/display/element/button'

import Rect from './render/display/shape/rect'
import Circle from './render/display/shape/circle'
import Polygon from './render/display/shape/polygon'
import EquilateralPolygon from './render/display/shape/equilateral-polygon'

import { setRafInterval, clearRafInterval } from './common/raf-interval'

import html from './svg/html'
import SVG from './svg/index'

To.easing = {
  linear: TWEEN.Easing.Linear.None
}

const cax = {
  easing: {
    linear: TWEEN.Easing.Linear.None
  },
  util: {
    randomInt: (min, max) => {
      return min + Math.floor(Math.random() * (max - min + 1))
    }
  },
  SVG,
  html,
  Stage,
  WeStage,
  Graphics,
  Bitmap,
  Text,
  Group,
  Sprite,
  Shape,

  ArrowPath,
  Ellipse,
  Path,

  Button,

  RoundedRect,
  Rect,
  Circle,
  Polygon,
  EquilateralPolygon,

  setInterval: setRafInterval,
  clearInterval: clearRafInterval,
  tick: function(fn) {
    return setRafInterval(fn, 16)
  },
  untick: function(tickId) {
    clearRafInterval(tickId)
  },

  caxCanvasId: 0,
  TWEEN,
  To,
  h: function(type, props, ...children) {
    return { type, props, children }
  }
}

;[
  'Quadratic',
  'Cubic',
  'Quartic',
  'Quintic',
  'Sinusoidal',
  'Exponential',
  'Circular',
  'Elastic',
  'Back',
  'Bounce'
].forEach(item => {
  const itemLower = item.toLowerCase()
  cax.easing[itemLower + 'In'] = TWEEN.Easing[item].In
  cax.easing[itemLower + 'Out'] = TWEEN.Easing[item].Out
  cax.easing[itemLower + 'InOut'] = TWEEN.Easing[item].InOut

  To.easing[itemLower + 'In'] = TWEEN.Easing[item].In
  To.easing[itemLower + 'Out'] = TWEEN.Easing[item].Out
  To.easing[itemLower + 'InOut'] = TWEEN.Easing[item].InOut
})

const isWegame = typeof wx !== 'undefined' && wx.createCanvas

cax.loadImg = function(option) {
  const img = isWegame ? wx.createImage() : new Image()
  img.onload = function() {
    option.complete(this)
  }
  img.src = option.img
}

cax.loadImgs = function(option) {
  const result = []
  let loaded = 0
  const len = option.imgs.length
  option.imgs.forEach((src, index) => {
    const img = isWegame ? wx.createImage() : new Image()
    img.onload = (function(i, img) {
      return function() {
        result[i] = img
        loaded++
        option.progress && option.progress(loaded / len, loaded, i, img, result)
        if (loaded === len) {
          option.complete && option.complete(result)
        }
      }
    })(index, img)
    img.src = src
  })
}

module.exports = cax
