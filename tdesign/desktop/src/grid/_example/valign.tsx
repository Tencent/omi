import { h, tag, WeElement } from 'omi'

import '../index'
import css from '../style/index'
import common from './common.css'
import '../../space/index'
@tag('grid-valign')
export default class GridValign extends WeElement {
  static css = (css + common) as string
  render() {
    return (
      <>
        <p>align top</p>
        <t-row justify="center" align="top">
          <t-col span={3}>
            <div style={{ height: 80 }}>col-3</div>
          </t-col>
          <t-col span={3}>
            <div style={{ height: 40 }}>col-3</div>
          </t-col>
          <t-col span={3}>
            <div style={{ height: 80 }}>col-3</div>
          </t-col>
          <t-col span={3}>
            <div style={{ height: 40 }}>col-3</div>
          </t-col>
        </t-row>

        <p>Align Middle</p>
        <t-row justify="space-around" align="middle">
          <t-col span={3}>
            <div style={{ height: 80 }}>col-3</div>
          </t-col>
          <t-col span={3}>
            <div style={{ height: 40 }}>col-3</div>
          </t-col>
          <t-col span={3}>
            <div style={{ height: 80 }}>col-3</div>
          </t-col>
          <t-col span={3}>
            <div style={{ height: 40 }}>col-3</div>
          </t-col>
        </t-row>

        <p>Align Bottom</p>
        <t-row justify="space-between" align="bottom">
          <t-col span={3}>
            <div style={{ height: 80 }}>col-3</div>
          </t-col>
          <t-col span={3}>
            <div style={{ height: 40 }}>col-3</div>
          </t-col>
          <t-col span={3}>
            <div style={{ height: 80 }}>col-3</div>
          </t-col>
          <t-col span={3}>
            <div style={{ height: 40 }}>col-3</div>
          </t-col>
        </t-row>
      </>
    )
  }
}
