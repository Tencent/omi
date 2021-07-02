import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'

import '@omiu/table'
import '@omiu/pagination'
import '@omiu/tooltip'

interface Props { }

const tagName = 'pagination-table'
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

  dataSource = [
    {
      id: 1,
      name: 'xwang',
      age: 18,
      address: 'Tencent'
    },
    {
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
      address: 'Tencent'
    },
    {
      id: 4,
      name: 'john',
      age: 12,
      address: 'Tencent',
      $config: {
        bgColor: 'rgb(230 162 60 / 34%)'
      }
    },
    {
      id: 5,
      name: 'tim',
      age: 12,
      address: 'Tencent'
    },
    {
      id: 6,
      name: 'tim',
      age: 12,
      address: 'Tencent'
    },
    {
      id: 7,
      name: 'tim',
      age: 12,
      address: 'Tencent'
    },
    {
      id: 8,
      name: 'tim',
      age: 12,
      address: 'Tencent'
    },
    {
      id: 1,
      name: 'xwang',
      age: 18,
      address: 'Tencent'
    },
    {
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
      address: 'Tencent'
    },
    {
      id: 4,
      name: 'john',
      age: 12,
      address: 'Tencent',
      $config: {
        bgColor: 'rgb(230 162 60 / 34%)'
      }
    },
    {
      id: 5,
      name: 'tim',
      age: 12,
      address: 'Tencent'
    },
    {
      id: 6,
      name: 'tim',
      age: 12,
      address: 'Tencent'
    },
    {
      id: 7,
      name: 'tim',
      age: 12,
      address: 'Tencent'
    },
    {
      id: 8,
      name: 'tim',
      age: 12,
      address: 'Tencent'
    }
  ]

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

  paging = true
  pageSize = 5
  currentPage = 1

  data = {
    allData: this.dataSource,
    filterData: [],
    start: 1,
    end: 1,
    totalSize: this.dataSource.length,
    currPageSize: this.paging ? this.pageSize : Number.MAX_SAFE_INTEGER,
    currentPage: this.currentPage
  }

  handleSizeChange(value) {
    this.currentPage = 1
    this.data.currPageSize = value
    this.handleChange(false)
  }

  handleCurrentChange(value) {
    this.currentPage = value
    this.handleChange(false)
  }

  handleChange(reset) {
    if (reset) {
      this.currentPage = 1
    }
    this.renderTable()
  }

  renderTable() {
    if (this.data.totalSize > this.data.currPageSize) {
      let startIndex = (this.currentPage - 1) * this.data.currPageSize,
        endIndex = this.currentPage * this.data.currPageSize
      this.data.start = startIndex + 1
      this.data.end =
        this.data.totalSize < endIndex ? this.data.totalSize : endIndex
      this.data.filterData = this.data.allData.slice(startIndex, endIndex)
    } else if (this.data.totalSize > 0) {
      this.currentPage = 1
      this.data.start = 1
      this.data.end = this.data.totalSize
      this.data.filterData = this.data.allData
    } else {
      this.currentPage = 1
      this.data.start = 0
      this.data.end = 0
      this.data.filterData = []
    }
    this.update()
  }

  setData(value) {
    this.data.allData = value
    this.data.totalSize = value.length
    this.renderTable()
  }

  change() {
    this.renderTable()
  }

  onClick = (evt: { currentTarget: { dataset: { itemId: number } } }) => {
    this.deleteItemById(Number(evt.currentTarget.dataset.itemId))
  }

  deleteItemById(id: number) {
    const index = this.dataSource.indexOf(
      this.dataSource.find((item) => item.id === id)
    )
    if (index !== -1) {
      this.dataSource.splice(index, 1)
    }
    this.update()
  }

  install() {
    this.setData(this.dataSource)

  }

  update() {

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
            dataSource={this.data.filterData}
          ></o-table>

          <div class={tw`mt-3`}>
            <div class={tw`mb-2`}>
              <span v-if="totalSize > 1">
                显示第 {this.data.start} 条到第 {this.data.end} 条的数据，
              </span>
              共{this.data.totalSize} 条数据
            </div>
            <o-pagination
              total={this.data.totalSize}
              current-page={this.currentPage}
              page-size={this.pageSize}
              onChange={this.change}
            ></o-pagination>
          </div>
        </div>
      </div>
    )
  }
}
