export function getHost(ele) {
  let p = ele.parentNode
  while (p) {
    if (p.host) {
      return p.host
    } else if (p.shadowRoot && p.shadowRoot.host) {
      return p.shadowRoot.host
    } else {
      p = p.parentNode
    }
  }
}
