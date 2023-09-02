import { h, tag, WeElement } from 'omi'

import '../index'
import css from '../style/index'
import common from './common.css'
@tag('grid-offset')
export default class GridOffset extends WeElement {
  static css = (css + common) as string
  render() {
    return (
      <>
        <t-row>
          <t-col span={4}>
            <div>col-4</div>
          </t-col>
          <t-col span={4} offset={4}>
            <div>col-4</div>
          </t-col>
        </t-row>
        <t-row>
          <t-col span={3} offset={3}>
            <div>col-3 col-offset-3</div>
          </t-col>
          <t-col span={3} offset={3}>
            <div>col-3 col-offset-3</div>
          </t-col>
        </t-row>
        <t-row>
          <t-col span={6} offset={2}>
            <div>col-6 col-offset-2</div>
          </t-col>
        </t-row>
      </>
    )
  }
}
