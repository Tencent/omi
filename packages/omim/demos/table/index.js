import { render, h, define, WeElement } from 'omi'
import '../../src/table/index.tsx'

define('my-app', class extends WeElement {
  dataSource = [{
    id: 1,
    name: 'xwang',
    age: 18,
    address: 'Tencent'
  }
  // , {
  //   id: 2,
  //   name: 'dntzhang',
  //   age: 12,
  //   address: 'Tencent',
  //   checked: true
  // }, {
  //   id: 3,
  //   name: 'lucy',
  //   age: 12,
  //   address: 'Tencent'
  // }, {
  //   id: 4,
  //   name: 'john',
  //   age: 12,
  //   address: 'Tencent'
  // }, {
  //   id: 5,
  //   name: 'tim',
  //   age: 12,
  //   address: 'Tencent'
  // }

];

  columns = [{
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
    render: (item) => (
      <span>
        <a href="javascript:;" onClick={e => { this.removeItem(item) }}>Delete</a>
      </span>
    )
  }]

  removeItem = (item) => {
    this.table.removeItem(item)
  }

  render() {
    return (
      <m-table
      checkbox
        ref={e => { this.table = e }}
        dataSource={this.dataSource}
        columns={this.columns}>
      </m-table>
    )
  }
})

render(<my-app />, 'body')

