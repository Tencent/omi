import { h } from 'omi';
import createSvgIcon from './utils/createSvgIcon';
export default createSvgIcon(h("path", {
  d: "M20 9H4v2h16V9zM4 15h16v-2H4v2z"
}), 'DragHandle');