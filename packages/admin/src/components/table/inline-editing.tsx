import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'

import '@omiu/table'
import '@omiu/pagination'
import '@omiu/tooltip'

interface Props { }

const tagName = 'inline-editing'
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
      id: 9,
      name: 'xwang',
      age: 18,
      address: 'Tencent'
    },
    {
      id: 10,
      name: 'dntzhang',
      age: 12,
      address: 'Tencent',
      $config: {
        bgColor: 'rgb(247 176 176 / 32%)'
      }
    },
    {
      id: 11,
      name: 'lucy',
      age: 12,
      address: 'Tencent'
    },
    {
      id: 12,
      name: 'john',
      age: 12,
      address: 'Tencent',
      $config: {
        bgColor: 'rgb(230 162 60 / 34%)'
      }
    },
    {
      id: 13,
      name: 'tim',
      age: 12,
      address: 'Tencent'
    },
    {
      id: 14,
      name: 'tim',
      age: 12,
      address: 'Tencent'
    },
    {
      id: 15,
      name: 'tim',
      age: 12,
      address: 'Tencent'
    },
    {
      id: 16,
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
      width: 120,
      key: 'name',
      editable: true
    },
    {
      title: 'Age',
      width: 90,
      key: 'age',
      editable: true
    },
    {
      title: 'Address',
      width: 290,
      key: 'address',
      editable: true
    },
    {
      title: '操作',
      align: 'right',
      render: (item: { name: string; id: number }) => (
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
  pageIndex = 0

  filterData = []




  renderTable() {
    this.filterData = this.dataSource.slice(this.pageIndex * this.pageSize, this.pageIndex * this.pageSize + this.pageSize)

    this.update()
  }

  installed() {
    this.renderTable()
  }

  change = (evt) => {
    this.pageIndex = evt.detail
    this.renderTable()
  }

  table

  onClick = (evt: { currentTarget: { dataset: { itemId: number } } }) => {
    this.table.deleteRowById(evt.currentTarget.dataset.itemId)
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


  exportExcel = () => {
    import('./export-excel').then(md => {
      md.exportTableToExcel(this.table.rootNode.querySelector('table'))
    })
  }


  render() {
    return (
      <div class={tw`pl-0.5`}>
        <div class={tw`relative h-10 text-right`}>
          <o-button class={tw`relative top-2 right-2`} size="mini" onClick={this.exportExcel}>导出Excel</o-button>
        </div>
        <div class={tw`px-2`}>
          {/* <h4 class={tw`py-2 text-sm`}>基础表格</h4> */}
          <o-table
            ref={e => this.table = e}
            checkbox={false}
            stripe={false}
            border={false}
            compact={false}
            columns={this.columns}
            dataSource={this.filterData}
          ></o-table>

          <div class={tw`mt-3 text-right`}>

            <o-pagination
              total={this.dataSource.length}
              current-page={this.pageIndex}
              page-size={this.pageSize}
              onchange={this.change}
            ></o-pagination>
          </div>
        </div>
      </div>
    )
  }
}
