# omi-form

## Usage

```tsx
import { tag, WeElement, h, render } from 'omi'
import { TYPE } from 'omi-form'

@tag('hello-omi-form')
class HelloOmi extends WeElement {
  options = {
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
      },
    ],
    value: {},
    canReset: true,
    onSubmit: (value) => {
      alert(JSON.stringify(value))
    }
  }

  render() {
    return (
      <>
        <h1>Hello omi-form!</h1>
        <omi-form options={this.options}></omi-form>
      </>
    )
  }
}

render(<hello-omi-form />, 'body')
```

## dependency

https://github.com/yiminghe/async-validator