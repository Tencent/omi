import { tag, WeElement, h, render } from 'omi'
import '@omiu/icon/delete'
import '@omiu/icon/edit'
import '@omiu/tag'
import '@omiu/tooltip'
// debug
// import '../../tooltip/src/index.tsx'
import './index.tsx'
import Table from '.';
import { Props } from '.';

interface DataType {
  id: number
  name: string
  age: number
  address: string
  tags: string[]
  $config?: {
    bgColor: string
  }
}


@tag('table-demo')
export default class TableDemo extends WeElement {

  dataSource: DataType[] = [{
    id: 1,
    name: 'xwang',
    age: 18,
    address: 'Tencent',
    tags: ['omi', 'web components', 'ts'],
  }, {
    id: 2,
    name: 'dntzhang',
    age: 12,
    address: 'Tencent',
    tags: ['omi', 'web components', 'ts'],
    $config: {
      bgColor: 'rgb(247 176 176 / 32%)'
    }
  },
  {
    id: 3,
    name: 'lucy',
    age: 12,
    address: 'Tencent',
    tags: ['omi', 'web components', 'ts'],
  }, {
    id: 4,
    name: 'john',
    age: 12,
    address: 'Tencent测试超出宽度',
    tags: ['omi', 'web components', 'ts'],
    $config: {
      bgColor: 'rgb(230 162 60 / 34%)'
    }
  }, {
    id: 5,
    name: 'tim',
    age: 12,
    address: 'Tencent',
    tags: ['omi', 'web components', 'ts']
  }, {
    id: 6,
    name: 'tim',
    age: 12,
    address: 'Tencent',
    tags: ['omi', 'web components', 'ts']
  }, {
    id: 7,
    name: 'tim',
    age: 12,
    address: 'Tencent',
    tags: ['omi', 'web components', 'ts']
  }, {
    id: 8,
    name: 'tim',
    age: 12,
    address: 'Tencent',
    tags: ['omi', 'web components', 'ts']
  }
  ]

  columns = [{
    title: 'ID',
    render: (item: DataType) => (<strong>{item.id}</strong>),
  }, {
    title: 'Name',
    key: 'name',
    render: (item: DataType) => (<a href="#">{item.name}</a>),
    editable: true
  }, {
    title: 'Age',
    key: 'age',

    editable: true
  }, {
    title: 'Address',
    key: 'address',
    maxWidth: 50,
    editable: true
  }, {
    title: 'Tags',
    key: 'tags',
    render: (item: DataType) => {
      return item.tags.map((tag, index) => <o-tag size="mini" type={['success', 'info', 'danger'][index]}>{tag}</o-tag>)
    },

  }, {
    title: '操作',
    align: 'right',
    render: (item: DataType) => {
      //onclick 会绑定多次的问题(o-icon-delete一次，o-icon-delete内部的svg一次)

      return <div>
        <o-tooltip style={{ marginRight: 5 }} content={'查看 [' + item.name + ']'}>
          <o-icon-edit data-item-id={item.id} onClick={this.onEditClick} style="cursor:pointer;font-size:16px;" title="编辑"></o-icon-edit>
        </o-tooltip>

        <o-tooltip content={'删除 [' + item.name + ']'}>
          <o-icon-delete data-item-id={item.id} onClick={this.onDeleteClick} style="margin-left: 5px;cursor:pointer;font-size:16px;" title="删除"></o-icon-delete>
        </o-tooltip>
      </div>
    }
  }]

  onEditClick = (evt: Event) => {

  }

  onDeleteClick = (evt: Event) => {
    const id = (evt?.currentTarget as HTMLElement)?.dataset?.itemId
    if (id !== undefined) {
      this.table.deleteRowById(id)
    }
  }

  table: Table<Props<DataType>> = new Table

  render() {
    return <div>
      <h4>自定义render列</h4>
      <o-table
        ref={(el: Table<Props<DataType>>) => this.table = el}
        checkbox={true}
        stripe={false}
        border={true}
        compact={true}
        columns={this.columns} dataSource={JSON.parse(JSON.stringify(this.dataSource))}></o-table>

      <h4>冻结</h4>
      <o-table
        ref={(el: Table<Props<DataType>>) => this.table = el}
        checkbox={true}
        stripe={false}
        border={true}
        compact={false}
        width={250}
        height={200}
        fixedLeftCount={2}
        fixedRight={true}
        fixedTop={true}
        columns={this.columns} dataSource={this.dataSource}></o-table>
      <br />


    </div>
  }
}


render(<table-demo></table-demo>, 'body', {
  ignoreAttrs: true
})
