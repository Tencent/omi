import { tag, WeElement, h, render } from 'omi'
import '@omiu/icon/delete'
import '@omiu/icon/edit'
import '@omiu/tag'
import '@omiu/tooltip'
import '@omiu/link'
import '@omiu/switch'
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

  static css = `
  .switch-wp{
    display:inline-flex;height:20px;line-height:21px;
    margin-right: 20px;
  }

  .switch-lb{
    display:inline-block;height:20px;font-size:14px;
    margin-right: 5px;
  }
  `
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
    sortable: true,
    filters: [],
    render: (item: DataType) => (<strong>{item.id}</strong>),
  }, {
    title: 'Name',
    key: 'name',
    filters: [],
    render: (item: DataType) => (<a href="#">{item.name}</a>),
    editable: true
  }, {
    title: 'Age',
    key: 'age',
    sortable: true,

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
        <o-link data-item-id={item.id} onClick={this.onEditClick}><o-icon-edit title="编辑"></o-icon-edit>编辑</o-link>
        <o-link data-item-id={item.id} style="margin-left:10px" onClick={this.onDeleteClick}>  <o-icon-delete title="删除"></o-icon-delete>删除</o-link>
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

  onFixedTopChange = (evt) => {
    this.fixedTop = evt.detail
    this.update()
  }

  onFixedRightChange = (evt) => {
    this.fixedRight = evt.detail
    this.update()
  }

  onFixedLeftChange = (evt) => {
    this.fixedLeft = evt.detail
    this.update()
  }

  onIsSmallChange = (evt) => {
    this.isSmall = evt.detail
    this.update()
  }

  render() {
    return <div>
      <div style="margin-bottom:20px;">
        <div class="switch-wp"><span class="switch-lb">固定表头</span><o-switch onChange={this.onFixedTopChange}></o-switch></div>
        <div class="switch-wp"><span class="switch-lb">宽度变小</span><o-switch onChange={this.onIsSmallChange}></o-switch></div>
        <div class="switch-wp"><span class="switch-lb">固定最左列</span><o-switch onChange={this.onFixedLeftChange}></o-switch></div>
        <div class="switch-wp"><span class="switch-lb">固定最右列</span><o-switch onChange={this.onFixedRightChange}></o-switch></div>

      </div>
      <o-table
        ref={(el: Table<Props<DataType>>) => this.table = el}
        checkbox={true}
        stripe={false}
        border={true}
        compact={true}
        height={200}
        width={this.isSmall ? 300 : '100%'}
        fixedLeftCount={this.fixedLeft ? 1 : 0}
        fixedRight={this.fixedRight}
        fixedTop={this.fixedTop}
        columns={this.columns} dataSource={this.dataSource}></o-table>
    </div>
  }
}


render(<table-demo></table-demo>, 'body', {
  ignoreAttrs: true
})
