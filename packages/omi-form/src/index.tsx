import { WeElement, render, h, tag } from 'omi'

import './omi-form'
import './index.css'
import * as css from './index.less'
import { TYPE } from "./omi-form"
interface MyAppProps {
  name: string
}


@tag('my-app')
export default class extends WeElement<MyAppProps> {

  static css = css.default

  data = {
    items: [
      {
        type: TYPE.input,
        field: 'goodsName',
        title: '商品名称',
        value: 'omi',
        required: true,
        pattern: /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/
      },
      {
        type: TYPE.datePicker,
        field: 'createdAt',
        title: '创建时间',
        required: '请输入事件'
      },
      {
        type: TYPE.datePicker,
        field: 'modifiedAt',
        title: '修改时间',
        validate: [
          { type: 'string', required: true, message: '请输入名称' }
        ]
      },
      {
        type: TYPE.datePicker,
        field: 'age',
        title: '年龄',
        validate: [{ type: 'number', min: 10, max: 100, required: true, message: '最小为10' }]
      },
      {
        type: TYPE.datePicker,
        field: 'dateRange',
        title: '日期区间',
        value: '',
        mode: "range",
        props: {
          type: 'datetimerange'
        },
        validate: [{
          type: 'array', fields: {
            0: { type: 'date', required: true, message: ',请选择日期' },
            1: { type: 'date', required: true, message: '请选择日期' }
          }, required: true, message: '请选择日期区间'
        }]
      },
      {
        type: TYPE.checkbox,
        field: 'label',
        title: '标签',
        value: [],
        options: [
          { label: '好用', value: 0 },
          { label: '快速', value: 1 },
          { label: '高效', value: 2 },
          { label: '全能', value: 3 },
        ],
        validate: [{ type: 'array', min: 3, required: true, message: '最少选择3个' }]
      },
      {
        type: TYPE.checkbox,
        field: 'tag',
        title: '标签',
        value: [0, 1, 2, 3],
        options: [
          { label: '简单', value: 0 },
          { label: '灵活', value: 1 },
          { label: '极速', value: 2 },
          { label: '方便', value: 3 },
        ],
        validate(value, formItem) {

        }
      }
    ],
    value: {},
    canReset: true,
    onSubmit: (value) => {
      alert(JSON.stringify(value))
    }
  }
  render(props) {
    return (
      <div class="app">
        <omi-form options={this.data}></omi-form>
      </div>
    )
  }
}

render(<my-app></my-app>, '#root', {
  // if using OMI to build the whole application, ignore the attributs of DOM and use props of virtual dom
  ignoreAttrs: true
})
