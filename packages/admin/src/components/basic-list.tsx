import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'

import '@omiu/table'
import '@omiu/tooltip'
import '@omiu/pagination'
import '@omiu/icon/remove-red-eye'
import '@omiu/icon/search'
import '@omiu/link'
import { confirm } from '@omiu/dialog-extention'
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

const Status = [
  {
    WORDING: '已完成',
    COLOR: '#00a870'
  }, {
    WORDING: '待审核',
    COLOR: '#ed7b2f'
  }, {
    WORDING: '待履行',
    COLOR: '#ed7b2f'
  }, {
    WORDING: '审核失败',
    COLOR: '#e34d59'
  }, {
    WORDING: '已完成',
    COLOR: '#00a870'
  }
]

const ContractType = ['商业合同', '内部合同', '私人合同']
const PaymentType = ['收款', '付款']


@tag(tagName)
export default class extends WeElement<Props> {
  static css = sheet.target

  dataSource = []

  pageIndex = 0
  pageSize = 20
  totalCount = 0
  store

  async install() {
    this.dataSource = await getListData(this.pageIndex, this.pageSize)
    this.totalCount = await getTotalCount()
    this.update()
  }


  onPaginationChange = () => {

  }

  columns = [
    {
      width: 140,
      title: '合同编号',
      key: 'no'
    },
    {
      title: '合同名称',
      key: 'name',
    },
    {
      title: '合同状态',
      width: 140,
      render: (item) => {
        return <span style={{ color: Status[item.status].COLOR }}>● {Status[item.status].WORDING}</span>
      }
    },
    {
      title: '合同类型',
      width: 140,
      render: (item) => {
        return <span > {ContractType[item.contractType]}</span>
      }
    },
    {
      width: 140,
      title: '合同金额',
      key: 'amount',
    },
    {
      title: '合同收付类型',
      width: 140,
      render: (item) => {
        return <span > {PaymentType[item.paymentType]}</span>
      }
    },
    {
      title: '操作',
      width: 140,
      align: 'right',
      render: (item: { name: string; id: number }) => (
        //onclick 会绑定多次的问题
        <div>
          <o-link>
            <o-icon-edit data-item-id={item.id} onClick={this.onDetailClick} title="编辑"></o-icon-edit>编辑
          </o-link>
          <o-link style="margin-left:10px">
            <o-icon-delete data-item-id={item.id} onClick={this.onDeleteClick} title="删除"></o-icon-delete>删除
          </o-link>
        </div>
      )
    }
  ]

  onDetailClick = () => {

  }

  onDeleteClick = (evt: { currentTarget: { dataset: { itemId: number } } }) => {
    const itemId = Number(evt.currentTarget.dataset.itemId)
    const item = this.dataSource.find((item) => item.id === itemId)
    confirm({
      msg: `确认删除【${item.name}】吗？`,
      title: '删除',
      cancelButtonText: '取消',
      confirmButtonText: '确认',
      onCancel: function () {

      },
      onConfirm: () => {
        this.deleteItemById(itemId)
      }
    })


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
      <div class={tw`p-4`}>
        <div class={tw`flex justify-between pb-2`}>
          <div class={tw` flex gap-3`} >
            <o-button size="small">新建合同</o-button>
            <o-button size="small" >导出合同</o-button>
            <p class={tw`text-gray-500 text-sm leading-8`}>已选{this.selectedCount}项</p>
          </div>

          <o-input size="small" block class={tw`w-80`} suffix-icon="search" placeholder="请输入你需要搜索的内容"></o-input>
        </div>

        <div class={tw`border-1`}>
          <o-table
            checkbox={true}
            stripe={false}
            border={false}
            height={window.innerHeight - 215}
            compact={false}
            columns={this.columns}
            dataSource={this.dataSource}

            fixedLeftCount={1}
            // tooltip bug 修复了再开启
            fixedRightCount={1}
            fixedTop={true}
          ></o-table>

          <div class={tw`flex justify-between pt-2 pb-2 pl-3`}>
            <p class={tw`text-gray-600  text-sm leading-8 `}>共{this.totalCount}条</p>
            <o-pagination
              class={tw` `}
              total={this.totalCount}
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
