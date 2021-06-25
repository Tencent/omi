import { tag, WeElement, h, render } from 'omi'
import './index.tsx'

@tag('table-demo')
export default class Table extends WeElement {

  dataSource = [{
    id: 1,
    name: 'xwang',
    age: 18,
    address: 'Tencent'
  }, {
    id: 2,
    name: 'dntzhang',
    age: 12,
    address: 'Tencent'
  }, {
    id: 3,
    name: 'lucy',
    age: 12,
    address: 'Tencent'
  }, {
    id: 4,
    name: 'john',
    age: 12,
    address: 'Tencent'
  }, {
    id: 5,
    name: 'tim',
    age: 12,
    address: 'Tencent'
  }]

  columns = [{
    title: 'ID',
    render: item => (<strong>{item.id}</strong>),
  }, {
    title: 'Name',
    key: 'name',
  }, {
    title: 'Age',
    key: 'age',
  }, {
    title: 'Address',
    key: 'address',
  }, {
    title: '操作',
    align: 'right',
    render: item => (
      <span>
        <a href="javascript:;">Delete</a>
      </span>
    )
  }]
  render(props) {
    return <o-table columns={this.columns} dataSource={this.dataSource}></o-table>
  }
}


render(<table-demo></table-demo>, 'body')
