/*!
 *  raf-interval v0.3.0 By dntzhang
 *  Github: https://github.com/dntzhang/raf-interval
 *  MIT Licensed.
 */

if (!Date.now) {
  Date.now = function now () {
    return new Date().getTime()
  }
}

let queue = [],
  id = -1,
  ticking = false,
  tickId = null,
  now = Date.now,
  lastTime = 0,
  vendors = ['ms', 'moz', 'webkit', 'o'],
  x = 0,
  isWeapp = typeof wx !== 'undefined' && !wx.createCanvas,
  isWegame = typeof wx !== 'undefined' && wx.createCanvas,
  isBrowser = typeof window !== 'undefined'

let raf = isBrowser ? window.requestAnimationFrame : null
let caf = isBrowser ? window.cancelAnimationFrame : null

function mockRaf (callback, element) {
  let currTime = now()
  let timeToCall = Math.max(0, 16 - (currTime - lastTime))
  let id = setTimeout(function () {
    callback(currTime + timeToCall)
  }, timeToCall)
  lastTime = currTime + timeToCall
  return id
}

function mockCaf (id) {
  clearTimeout(id)
}

if (isBrowser) {
  window.setRafInterval = setRafInterval
  window.clearRafInterval = clearRafInterval

  for (; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame']
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||
      window[vendors[x] + 'CancelRequestAnimationFrame']
  }

  if (!raf) {
    raf = mockRaf
    caf = mockCaf
    window.requestAnimationFrame = raf
    window.cancelAnimationFrame = caf
  }
} else if (isWeapp) {
  raf = mockRaf
  caf = mockCaf
} else if (isWegame) {
  raf = requestAnimationFrame
  caf = cancelAnimationFrame
}

export function setRafInterval (fn, interval) {
  id++
  queue.push({ id: id, fn: fn, interval: interval, lastTime: now() })
  if (!ticking) {
    let tick = function () {
      tickId = raf(tick)
      each(queue, function (item) {
        if (item.interval < 17 || now() - item.lastTime >= item.interval) {
          item.fn()
          item.lastTime = now()
        }
      })
    }
    ticking = true
    tick()
  }
  return id
}

export function clearRafInterval (id) {
  let i = 0,
    len = queue.length

  for (; i < len; i++) {
    if (id === queue[i].id) {
      queue.splice(i, 1)
      break
    }
  }

  if (queue.length === 0) {
    caf(tickId)
    ticking = false
  }
}

function each (arr, fn) {
  if (Array.prototype.forEach) {
    arr.forEach(fn)
  } else {
    let i = 0,
      len = arr.length
    for (; i < len; i++) {
      fn(arr[i], i)
    }
  }
}
