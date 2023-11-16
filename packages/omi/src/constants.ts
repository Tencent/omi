export const DOM_EVENT_MAP = {
  onanimationcancel: 1,
  oncompositionend: 1,
  oncompositionstart: 1,
  oncompositionupdate: 1,
  onfocusin: 1,
  onfocusout: 1,
  onscrollend: 1,
  ontouchcancel: 1,
  ontouchend: 1,
  ontouchmove: 1,
  ontouchstart: 1,
}

export type EventTypes =
  | 'onanimationcancel'
  | 'oncompositionend'
  | 'oncompositionstart'
  | 'oncompositionupdate'
  | 'onfocusin'
  | 'onfocusout'
  | 'onscrollend'
  | 'ontouchcancel'
  | 'ontouchend'
  | 'ontouchmove'
  | 'ontouchstart'

// DOM properties that should NOT have "px" added when numeric
export const IS_NON_DIMENSIONAL =
  /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i
