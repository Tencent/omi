import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'

import '@omiu/table'

import '@omiu/tip'

interface Props {

}

const tagName = 'basic-table'
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: Omi.Props & Props
    }
  }
}

@tag(tagName)
export default class extends WeElement<Props> {
  static css = sheet.target


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
    render: (item: { id: number }) => (<strong>{item.id}</strong>),
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
    render: (item: { name: string, id: number }) => (
      //onclick 会绑定多次的问题
      <o-tip content={'删除' + item.name}>
        <o-icon-delete data-item-id={item.id} onClick={this.onClick} style="cursor:pointer;font-size:20px;" title="删除"></o-icon-delete>
      </o-tip>
    )
  }]

  onClick = (evt: { currentTarget: { dataset: { itemId: number } } }) => {
    console.log(Number(evt.currentTarget.dataset.itemId))
    this.deleteItemById(Number(evt.currentTarget.dataset.itemId))
  }

  deleteItemById(id: number) {
    const index = this.dataSource.indexOf(this.dataSource.find(item => item.id === id))
    if (index !== -1) {
      this.dataSource.splice(index, 1)
      this.update()
    }

  }

  render(props) {
    return <div>


      <div class={tw`flex flex-row`}>
        <div class={tw`flex-1 px-2`}>
          <h4 class={tw`py-2 text-sm`}>带复选框</h4>

          <o-table
            checkbox={true}
            stripe={true}
            border={false}
            compact={true}
            columns={this.columns} dataSource={this.dataSource}></o-table>


        </div>
        <div class={tw`flex-1  px-2`}>

          <h4 class={tw`py-2 text-sm`}>带边框</h4>

          <o-table
            checkbox={true}
            stripe={true}
            border={true}
            compact={true}
            columns={this.columns} dataSource={this.dataSource}></o-table>

        </div>
      </div>

      <div class={tw`px-2`}>
        <h4 class={tw`py-2 text-sm`}>基础表格</h4>
        <o-table
          checkbox={false}
          stripe={false}
          border={false}
          compact={false}
          columns={this.columns} dataSource={this.dataSource}></o-table>

      </div>



      <div class={tw`flex flex-row`}>
        <div class={tw`flex-1  px-2`}>
          <h4 class={tw`py-2 text-sm`}>压缩高度</h4>
          <o-table
            checkbox={false}
            stripe={true}
            border={false}
            compact={true}
            columns={this.columns} dataSource={this.dataSource}></o-table>
        </div>
        <div class={tw`flex-1  px-2`}>

          <h4 class={tw`py-2 text-sm`}>无隔行变色</h4>

          <o-table
            checkbox={true}
            stripe={false}
            border={true}
            compact={true}
            columns={this.columns} dataSource={this.dataSource}></o-table>
        </div>
      </div>
    </div>
  }
}



