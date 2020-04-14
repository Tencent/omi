import { h } from 'omi';
import createSvgIcon from './utils/createSvgIcon';
export default createSvgIcon(h(h.f, null, h("path", {
  fillOpacity: ".3",
  d: "M22 8V2L2 22h16V8z"
}), h("path", {
  d: "M20 22h2v-2h-2v2zm0-12v8h2v-8h-2z"
})), 'SignalCellularConnectedNoInternet0Bar');