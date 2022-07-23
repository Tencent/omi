import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'

import '@omiu/tabs'
import '@omiu/table'
import '@omiu/pagination'
import '@omiu/tooltip'
import '@omiu/icon/done-outline-outlined'
import '@omiu/icon/delete-outline'
import '@omiu/icon/chat-outlined'

interface Props { }

const tagName = 'notification-list'
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

  store

  columns = [
    {
      title: '通知内容',
      render: (item: { content: string, id: number }) => <strong style={this.changeColor(item.id)}>{item.content}</strong>
    },
    {
      title: '通知类型',
      key: 'category'
    },
    {
      title: '通知时间',
      key: 'time'
    },
    {
      title: '',
      align: 'right',
      render: (item: { id: number }) => (
        <div>
          {this.store.notifications.find((current) => current.id === item.id).status === 0 ?
            (<o-tooltip content={'设为已读'} style="padding-right:30px">
              <o-icon-done-outline-outlined
                data-item-id={item.id}
                onClick={this.onRead}
                style="cursor:pointer;font-size:15px;"
              ></o-icon-done-outline-outlined>
            </o-tooltip>) : (
              <o-tooltip content={'设为未读'} style="padding-right:30px">
                <o-icon-chat-outlined
                  data-item-id={item.id}
                  onClick={this.onUnRead}
                  style="cursor:pointer;font-size:15px;"
                ></o-icon-chat-outlined>
              </o-tooltip>)
          }
          <o-tooltip content={'删除通知'}>
            <o-icon-delete-outline
              data-item-id={item.id}
              onClick={this.onClick}
              style="cursor:pointer;font-size:20px"
            ></o-icon-delete-outline>
          </o-tooltip>
        </div>
      )
    }
  ]

  paging = true
  pageSize = 10
  pageIndex = 0

  filterData = []
  currentSource = []

  renderTable() {
    this.filterData = this.currentSource.slice(this.pageIndex * this.pageSize, this.pageIndex * this.pageSize + this.pageSize)
    this.update()
  }

  installed() {
    this.currentSource = this.store.notifications
    this.renderTable()
  }

  changeColor = (id: number) => {
    return this.store.notifications.find((item) => item.id === id).status === 1 ? 'color: #606266' : 'color: #0052D9'
  }

  // tabs改变更新列表内容
  onChange = (evt) => {
    const active = evt.detail.index
    if (active === 1) {
      this.currentSource = this.store.notifications.filter((item) => item.status === 0)
    } else if (active === 2) {
      this.currentSource = this.store.notifications.filter((item) => item.status === 1)
    } else {
      this.currentSource = this.store.notifications
    }

    this.activeIndex = evt.detail.index
    this.renderTable()
  }

  change = (evt) => {
    this.pageIndex = evt.detail
    this.renderTable()
  }

  table

  activeIndex: number = 0

  // 更新已读状态
  onRead = (evt: { currentTarget: { dataset: { itemId: number } } }) => {
    const id = Number(evt.currentTarget.dataset.itemId)
    this.store.notifications.find((tab) => tab.id === id).status = 1
    this.changeColor(id)
    this.renderTable()
  }

  // 更新未读状态
  onUnRead = (evt: { currentTarget: { dataset: { itemId: number } } }) => {
    const id = Number(evt.currentTarget.dataset.itemId)
    this.store.notifications.find((tab) => tab.id === id).status = 0
    this.changeColor(id)
    this.renderTable()
  }

  // 软删除选中的通知
  onClick = (evt: { currentTarget: { dataset: { itemId: number } } }) => {
    this.table.deleteRowById(evt.currentTarget.dataset.itemId)
  }

  deleteItemById(id: number) {
    const index = this.currentSource.indexOf(
      this.currentSource.find((item) => item.id === id)
    )
    if (index !== -1) {
      this.currentSource.splice(index, 1)
    }
    this.update()
  }


  render() {
    return (
      <div class={tw`px-2`}>
        <div class={tw`pr-5`}>
          <o-tabs
            tabs={[{ label: '全部通知' }, { label: '未读通知' }, { label: '已读通知' }]}
            onChange={this.onChange}
            activeIndex={this.activeIndex}
          ></o-tabs>
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
              total={this.currentSource.length}
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
