import { h, tag, WeElement } from 'omi'

import '../index'
import css from '../style/index'
import common from './common.css'
@tag('grid-flex')
export default class GridFlex extends WeElement {
  static css = (css + common) as string
  render() {
    return (
      <>
        <t-row>
          <t-col flex={2}>
            <div>2 / 5</div>
          </t-col>
          <t-col flex={3}>
            <div>3 / 5</div>
          </t-col>
        </t-row>
        <t-row>
          <t-col flex="100px">
            <div>100px</div>
          </t-col>
          <t-col flex="auto">
            <div>Fill Rest</div>
          </t-col>
        </t-row>
        <t-row>
          <t-col flex="1 1 200px">
            <div>1 1 200px</div>
          </t-col>
          <t-col flex="0 1 300px">
            <div>0 1 300px</div>
          </t-col>
        </t-row>
        <t-row>
          <t-col flex="none">
            <div>none</div>
          </t-col>
          <t-col flex="auto">
            <div>auto with no-wrap</div>
          </t-col>
        </t-row>
      </>
    )
  }
}
