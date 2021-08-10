import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'

import '@omiu/table'
import '@omiu/tooltip'
import '@omiu/icon/remove-red-eye'

import { getTotalCount, getListData } from '../service/list'

interface Props { }

const tagName = 'basic-list'
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

  pageIndex = 0
  pageSize = 10

  store

  async install() {
    this.dataSource = await getListData(this.pageIndex, this.pageSize)
    this.update()
  }


  onPaginationChange = () => {

  }

  columns = [
    {
      title: '合同名称',
      key: 'name'
    },
    {
      title: '合同状态',
      key: 'status'
    },
    {
      title: '合同编号',
      key: 'no'
    },
    {
      title: '合同类型',
      key: 'contractType'
    },
    {
      title: '合同收付类型',
      key: 'paymentType'
    },
    {
      title: '操作',
      align: 'right',
      render: (item: { name: string; id: number }) => (
        //onclick 会绑定多次的问题
        <div>
          <o-tooltip content={'详情' + item.name}>
            <o-icon-remove-red-eye data-item-id={item.id}
              onClick={this.onClick}
              style="cursor:pointer;font-size:20px;">
            </o-icon-remove-red-eye>
          </o-tooltip>

          <o-tooltip content={'删除' + item.name}>
            <o-icon-delete
              data-item-id={item.id}
              onClick={this.onClick}
              style="cursor:pointer;font-size:20px;"
            ></o-icon-delete>
          </o-tooltip>
        </div>
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

  selectedCount = 0
  render() {
    return (
      <div class={tw`pl-0.5`}>
        <div class={tw`px-2 flex`}>
          <div class={tw`px-2 flex`} >
            <o-button>新建合同</o-button>
            <o-button>导出合同</o-button>
            <p>已选{this.selectedCount}项</p>
          </div>

          <o-input></o-input>
        </div>

        <div class={tw`px-2`}>
          <o-table
            checkbox={true}
            stripe={false}
            border={false}

            compact={false}
            columns={this.columns}
            dataSource={this.dataSource}
          ></o-table>
        </div>

        <div>
          <div class={tw`mt-3 text-right`}>

            <o-pagination
              total={this.dataSource.length}
              current-page={this.pageIndex}
              page-size={this.pageSize}
              onChange={this.onPaginationChange}
            ></o-pagination>
          </div>
        </div>
      </div >
    )
  }
}
