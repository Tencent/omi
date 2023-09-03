import { h, tag, WeElement } from 'omi'

import '../index'
import css from '../style/index'
import common from './common.css'
@tag('grid-halign')
export default class GridHalign extends WeElement {
  static css = (css + common) as string
  render() {
    return (
      <>
        <p>align left</p>
        <t-row justify="start">
          <t-col span={2}>
            <div>col-2</div>
          </t-col>
          <t-col span={2}>
            <div>col-2</div>
          </t-col>
          <t-col span={2}>
            <div>col-2</div>
          </t-col>
          <t-col span={2}>
            <div>col-2</div>
          </t-col>
        </t-row>
        <p>align center</p>
        <t-row justify="center">
          <t-col span={2}>
            <div>col-2</div>
          </t-col>
          <t-col span={2}>
            <div>col-2</div>
          </t-col>
          <t-col span={2}>
            <div>col-2</div>
          </t-col>
          <t-col span={2}>
            <div>col-2</div>
          </t-col>
        </t-row>
        <p>align right</p>
        <t-row justify="end">
          <t-col span={2}>
            <div>col-2</div>
          </t-col>
          <t-col span={2}>
            <div>col-2</div>
          </t-col>
          <t-col span={2}>
            <div>col-2</div>
          </t-col>
          <t-col span={2}>
            <div>col-2</div>
          </t-col>
        </t-row>

        <p>space-between</p>
        <t-row justify="space-between">
          <t-col span={2}>
            <div>col-2</div>
          </t-col>
          <t-col span={2}>
            <div>col-2</div>
          </t-col>
          <t-col span={2}>
            <div>col-2</div>
          </t-col>
          <t-col span={2}>
            <div>col-2</div>
          </t-col>
        </t-row>

        <p>space-around</p>
        <t-row justify="space-around">
          <t-col span={2}>
            <div>col-2</div>
          </t-col>
          <t-col span={2}>
            <div>col-2</div>
          </t-col>
          <t-col span={2}>
            <div>col-2</div>
          </t-col>
          <t-col span={2}>
            <div>col-2</div>
          </t-col>
        </t-row>
      </>
    )
  }
}
