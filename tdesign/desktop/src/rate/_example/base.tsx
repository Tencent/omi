import { h, tag, WeElement } from 'omi'

import '../index'

@tag('rate-base')
export default class RateBase extends WeElement {
  render() {
    return <t-rate default-value={3}></t-rate>
  }
}
