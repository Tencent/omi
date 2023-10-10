import _Tooltip from './tooltip'
import _TooltipLite from './tooltip-lite'

import './style/index.js'

export type { TooltipLiteProps } from './tooltip-lite'
export type { TooltipProps } from './tooltip'
export * from './type'

export const Tooltip = _Tooltip
export const TooltipLite = _TooltipLite
export default Tooltip
