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
    address: 'Tencent',
    $config: {
      bgColor: 'rgb(247 176 176 / 32%)'
    }
  },
  {
    id: 3,
    name: 'lucy',
    age: 12,
    address: 'Tencent',

  }, {
    id: 4,
    name: 'john',
    age: 12,
    address: 'Tencent',
    $config: {
      bgColor: 'rgb(230 162 60 / 34%)'
    }
  }, {
    id: 5,
    name: 'tim',
    age: 12,
    address: 'Tencent'
  }, {
    id: 6,
    name: 'tim',
    age: 12,
    address: 'Tencent'
  }, {
    id: 7,
    name: 'tim',
    age: 12,
    address: 'Tencent'
  }, {
    id: 8,
    name: 'tim',
    age: 12,
    address: 'Tencent'
  }
  ]

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
      //onclick 会绑定多次的问题
      <o-icon-delete data-item-id={item.id} onClick={this.onClick} style="cursor:pointer;font-size:20px;" title="删除"></o-icon-delete>
    )
  }]

  onClick = (evt) => {
    console.log(Number(evt.currentTarget.dataset.itemId))
    this.deleteItemById(Number(evt.currentTarget.dataset.itemId))
  }

  deleteItemById(id) {
    const index = this.dataSource.indexOf(this.dataSource.find(item => item.id === id))
    if (index !== -1) {
      this.dataSource.splice(index, 1)
      this.update()
    }

  }

  render(props) {
    return <o-table
      checkbox={true}
      stripe={false}
      border={true}
      compact={false}
      columns={this.columns} dataSource={this.dataSource}></o-table>
  }
}


render(<table-demo></table-demo>, 'body')
