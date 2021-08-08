import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'

import '@omiu/table'
import '@omiu/tooltip'

import { getTable } from '../../service/table'

interface Props { }

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

  dataSource = []

  store

  async install() {
    this.dataSource = await getTable()
    this.update()
  }

  columns = [
    {
      title: 'ID',
      render: (item: { id: number }) => <strong>{item.id}</strong>
    },
    {
      title: 'Name',
      key: 'name'
    },
    {
      title: 'Age',
      key: 'age'
    },
    {
      title: 'Address',
      key: 'address'
    },
    {
      title: '操作',
      align: 'right',
      render: (item: { name: string; id: number }) => (
        //onclick 会绑定多次的问题
        <o-tooltip content={'删除' + item.name}>
          <o-icon-delete
            data-item-id={item.id}
            onClick={this.onClick}
            style="cursor:pointer;font-size:20px;"
          ></o-icon-delete>
        </o-tooltip>
      )
    }
  ]

  onClick = (evt: { currentTarget: { dataset: { itemId: number } } }) => {
    this.deleteItemById(Number(evt.currentTarget.dataset.itemId))
  }

  deleteItemById(id: number) {
    const index = this.dataSource.indexOf(
      this.dataSource.find((item) => item.id === id)
    )
    if (index !== -1) {
      this.dataSource.splice(index, 1)
      this.update()
    }
  }

  render() {
    return (
      <div class={tw`pl-0.5`}>

        <div class={tw`px-2`}>
          <h4 class={tw`py-2 text-sm`}>基础表格</h4>
          <o-table
            checkbox={false}
            stripe={false}
            border={false}

            compact={false}
            columns={this.columns}
            dataSource={this.dataSource}
          ></o-table>
        </div>

        <div class={tw`flex flex-row`}>
          <div class={tw` px-2`}>
            <h4 class={tw`py-2 text-sm`}>冻结行列</h4>
            <o-table
              checkbox={true}
              stripe={true}
              width="240px"
              height="250px"
              fixedTop={true}
              fixedRight={true}
              fixedLeftCount={2}
              border={true}
              compact={true}
              columns={this.columns}
              dataSource={this.dataSource}
            ></o-table>
          </div>

          <div class={tw`flex-1  px-2`}>
            <h4 class={tw`py-2 text-sm`}>带边框</h4>

            <o-table
              checkbox={true}
              stripe={true}
              border={true}
              compact={true}
              columns={this.columns}
              dataSource={this.dataSource}
            ></o-table>
          </div>


        </div>



        <div class={tw`flex flex-row`}>
          <div class={tw`flex-1  px-2`}>
            <h4 class={tw`py-2 text-sm`}>压缩高度</h4>
            <o-table
              checkbox={false}
              stripe={true}
              border={false}
              compact={true}
              columns={this.columns}
              dataSource={this.dataSource}
            ></o-table>
          </div>
          <div class={tw`flex-1  px-2`}>
            <h4 class={tw`py-2 text-sm`}>无隔行变色</h4>

            <o-table
              checkbox={true}
              stripe={false}
              border={true}
              compact={true}
              columns={this.columns}
              dataSource={this.dataSource}
            ></o-table>
          </div>
        </div>
      </div>
    )
  }
}
