const cache = {}

const cssColors = {
  aliceblue: 0xF0F8FF,
  antiquewhite: 0xFAEBD7,
  aqua: 0x00FFFF,
  aquamarine: 0x7FFFD4,
  azure: 0xF0FFFF,
  beige: 0xF5F5DC,
  bisque: 0xFFE4C4,
  black: 0x000000,
  blanchedalmond: 0xFFEBCD,
  blue: 0x0000FF,
  blueviolet: 0x8A2BE2,
  brown: 0xA52A2A,
  burlywood: 0xDEB887,
  cadetblue: 0x5F9EA0,
  chartreuse: 0x7FFF00,
  chocolate: 0xD2691E,
  coral: 0xFF7F50,
  cornflowerblue: 0x6495ED,
  cornsilk: 0xFFF8DC,
  crimson: 0xDC143C,
  cyan: 0x00FFFF,
  darkblue: 0x00008B,
  darkcyan: 0x008B8B,
  darkgoldenrod: 0xB8860B,
  darkgray: 0xA9A9A9,
  darkgrey: 0xA9A9A9,
  darkgreen: 0x006400,
  darkkhaki: 0xBDB76B,
  darkmagenta: 0x8B008B,
  darkolivegreen: 0x556B2F,
  darkorange: 0xFF8C00,
  darkorchid: 0x9932CC,
  darkred: 0x8B0000,
  darksalmon: 0xE9967A,
  darkseagreen: 0x8FBC8F,
  darkslateblue: 0x483D8B,
  darkslategray: 0x2F4F4F,
  darkslategrey: 0x2F4F4F,
  darkturquoise: 0x00CED1,
  darkviolet: 0x9400D3,
  deeppink: 0xFF1493,
  deepskyblue: 0x00BFFF,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1E90FF,
  firebrick: 0xB22222,
  floralwhite: 0xFFFAF0,
  forestgreen: 0x228B22,
  fuchsia: 0xFF00FF,
  gainsboro: 0xDCDCDC,
  ghostwhite: 0xF8F8FF,
  gold: 0xFFD700,
  goldenrod: 0xDAA520,
  gray: 0x808080,
  grey: 0x808080,
  green: 0x008000,
  greenyellow: 0xADFF2F,
  honeydew: 0xF0FFF0,
  hotpink: 0xFF69B4,
  indianred: 0xCD5C5C,
  indigo: 0x4B0082,
  ivory: 0xFFFFF0,
  khaki: 0xF0E68C,
  lavender: 0xE6E6FA,
  lavenderblush: 0xFFF0F5,
  lawngreen: 0x7CFC00,
  lemonchiffon: 0xFFFACD,
  lightblue: 0xADD8E6,
  lightcoral: 0xF08080,
  lightcyan: 0xE0FFFF,
  lightgoldenrodyellow: 0xFAFAD2,
  lightgray: 0xD3D3D3,
  lightgrey: 0xD3D3D3,
  lightgreen: 0x90EE90,
  lightpink: 0xFFB6C1,
  lightsalmon: 0xFFA07A,
  lightseagreen: 0x20B2AA,
  lightskyblue: 0x87CEFA,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xB0C4DE,
  lightyellow: 0xFFFFE0,
  lime: 0x00FF00,
  limegreen: 0x32CD32,
  linen: 0xFAF0E6,
  magenta: 0xFF00FF,
  maroon: 0x800000,
  mediumaquamarine: 0x66CDAA,
  mediumblue: 0x0000CD,
  mediumorchid: 0xBA55D3,
  mediumpurple: 0x9370D8,
  mediumseagreen: 0x3CB371,
  mediumslateblue: 0x7B68EE,
  mediumspringgreen: 0x00FA9A,
  mediumturquoise: 0x48D1CC,
  mediumvioletred: 0xC71585,
  midnightblue: 0x191970,
  mintcream: 0xF5FFFA,
  mistyrose: 0xFFE4E1,
  moccasin: 0xFFE4B5,
  navajowhite: 0xFFDEAD,
  navy: 0x000080,
  oldlace: 0xFDF5E6,
  olive: 0x808000,
  olivedrab: 0x6B8E23,
  orange: 0xFFA500,
  orangered: 0xFF4500,
  orchid: 0xDA70D6,
  palegoldenrod: 0xEEE8AA,
  palegreen: 0x98FB98,
  paleturquoise: 0xAFEEEE,
  palevioletred: 0xD87093,
  papayawhip: 0xFFEFD5,
  peachpuff: 0xFFDAB9,
  peru: 0xCD853F,
  pink: 0xFFC0CB,
  plum: 0xDDA0DD,
  powderblue: 0xB0E0E6,
  purple: 0x800080,
  red: 0xFF0000,
  rosybrown: 0xBC8F8F,
  royalblue: 0x4169E1,
  saddlebrown: 0x8B4513,
  salmon: 0xFA8072,
  sandybrown: 0xF4A460,
  seagreen: 0x2E8B57,
  seashell: 0xFFF5EE,
  sienna: 0xA0522D,
  silver: 0xC0C0C0,
  skyblue: 0x87CEEB,
  slateblue: 0x6A5ACD,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xFFFAFA,
  springgreen: 0x00FF7F,
  steelblue: 0x4682B4,
  tan: 0xD2B48C,
  teal: 0x008080,
  thistle: 0xD8BFD8,
  tomato: 0xFF6347,
  turquoise: 0x40E0D0,
  violet: 0xEE82EE,
  wheat: 0xF5DEB3,
  white: 0xFFFFFF,
  whitesmoke: 0xF5F5F5,
  yellow: 0xFFFF00,
  yellowgreen: 0x9ACD32
}

function lerp(start, end, percent){
  return makeGradientColor(hexToRgb(start),hexToRgb(end),percent)
}

var hexTriplet = ("01".substr(-1) === "1" ?
      // pad 6 zeros to the left
      function (cssColor) {
          return "#" + ("00000" + cssColor.toString(16)).substr(-6);
      }
      : // IE doesn't support substr with negative numbers
      function (cssColor) {
          var str = cssColor.toString(16);
          return "#" + (new Array( str.length < 6 ? 6 - str.length + 1 : 0)).join("0") + str;
      }
)

function hexToRgb(hex) {
  if (cache[hex]) return cache[hex]
  let cssColor = null
  if (cssColors.hasOwnProperty(hex) ) {
    cssColor = hex
    hex =  hexTriplet(cssColors[hex])
  }
  
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b
  })

  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  let key = cssColor ? cssColor : hex
  cache[key] = result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null
  return cache[key]
}

function makeGradientColor(color1, color2, percent) {
  var newColor = {}
    
    if (percent < 0)percent = 0
    if (percent > 100)percent = 100
    function makeChannel(a, b) {
    return (a + Math.round((b - a) * (percent / 100)))
    }

  function makeColorPiece(num) {
    num = Math.min(num, 255)   // not more than 255
        num = Math.max(num, 0)     // not less than 0
        var str = num.toString(16)
        if (str.length < 2) {
      str = "0" + str
        }
    return (str)
    }

  newColor.r = makeChannel(color1.r, color2.r)
    newColor.g = makeChannel(color1.g, color2.g)
    newColor.b = makeChannel(color1.b, color2.b)
    newColor.cssColor = "#" +
    makeColorPiece(newColor.r) +
    makeColorPiece(newColor.g) +
    makeColorPiece(newColor.b)
  return newColor.cssColor
}

export default {
  lerp,
  hexToRgb,
  makeGradientColor
}
