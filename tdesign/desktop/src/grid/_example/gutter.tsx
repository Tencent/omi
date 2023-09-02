import { h, tag, WeElement } from 'omi'

import '../index'
import css from '../style/index'
import common from './common.css'
@tag('grid-gutter')
export default class GridGutter extends WeElement {
  static css = (css + common) as string

  render() {
    return (
      <>
        <t-row gutter={16}>
          <t-col span={3}>
            <div>col-3</div>
          </t-col>
          <t-col span={3}>
            <div>col-3</div>
          </t-col>
          <t-col span={3}>
            <div>col-3</div>
          </t-col>
          <t-col span={3}>
            <div>col-3</div>
          </t-col>
        </t-row>
        <t-row gutter={{ xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 40 }}>
          <t-col span={3}>
            <div>col-3</div>
          </t-col>
          <t-col span={3}>
            <div>col-3</div>
          </t-col>
          <t-col span={3}>
            <div>col-3</div>
          </t-col>
          <t-col span={3}>
            <div>col-3</div>
          </t-col>
        </t-row>
        <t-row gutter={[16, 24]}>
          <t-col span={3}>
            <div>col-3</div>
          </t-col>
          <t-col span={3}>
            <div>col-3</div>
          </t-col>
          <t-col span={3}>
            <div>col-3</div>
          </t-col>
          <t-col span={3}>
            <div>col-3</div>
          </t-col>
          <t-col span={3}>
            <div>col-3</div>
          </t-col>
          <t-col span={3}>
            <div>col-3</div>
          </t-col>
          <t-col span={3}>
            <div>col-3</div>
          </t-col>
          <t-col span={3}>
            <div>col-3</div>
          </t-col>
        </t-row>
      </>
    )
  }
}
