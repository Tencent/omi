import { h, tag, WeElement } from 'omi'

import '../index'

@tag('rate-custom')
export default class RateCustom extends WeElement {
  render() {
    return <t-rate count={7} default-value={6}></t-rate>
  }
}
