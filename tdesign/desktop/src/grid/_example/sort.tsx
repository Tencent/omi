import { h, tag, WeElement } from 'omi'

import '../index'
import css from '../style/index'
import common from './common.css'
import '../../space/index'
@tag('grid-sort')
export default class GridSort extends WeElement {
  static css = (css + common) as string
  render() {
    return (
      <>
        <t-row>通过 `pull` `push` 进行排序</t-row>
        <t-row>
          <t-col span={9} push={3}>
            <div>col-9 col-push-3</div>
          </t-col>
          <t-col span={3} pull={9}>
            <div>col-3 col-pull-9</div>
          </t-col>
        </t-row>
        <t-row>
          <t-col span={8} push={4}>
            <div>col-8 col-push-4</div>
          </t-col>
          <t-col span={4} pull={8}>
            <div>col-4 col-pull-8</div>
          </t-col>
        </t-row>
      </>
    )
  }
}
