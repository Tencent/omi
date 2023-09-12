// render modes

export const NO_RENDER = 0
export const SYNC_RENDER = 1
export const FORCE_RENDER = 2
export const ASYNC_RENDER = 3

export const ATTR_KEY = 'prevProps'

export const DOM_EVENT_MAP = {
  onanimationcancel: 1,
  oncompositionend: 1,
  oncompositionstart: 1,
  oncompositionupdate: 1,
  onfocusin: 1,
  onfocusout: 1,
  onscrollend: 1,
  ontouchcancel : 1,
  ontouchend: 1,
  ontouchmove: 1,
  ontouchstart: 1
}

// DOM properties that should NOT have "px" added when numeric
export const IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i
