import { tag, WeElement, h, extractClass, classNames } from 'omi'
import '@omiu/checkbox'
import '@omiu/input'
import { leave } from './transition'

import * as css from './index.scss'

export interface Props<DataType> {
  dataSource: DataType[]
  columns: object
  checkbox: boolean
  border: boolean
  stripe: boolean
  compact: boolean
  width: string
  height: string
  fixedTop: boolean
  fixedRight: boolean
  fixedLeftCount: number

}

@tag('o-table')
export default class Table<DataType> extends WeElement<Props<DataType>> {
  static css = css.default

  static defaultProps = {
    dataSource: [],
    columns: [],
    checkbox: false,
    border: false,
    stripe: false,
    compact: false,
    fixedTop: false,
    fixedRight: false,
    fixedLeftCount: 0
  }

  static propTypes = {
    dataSource: Object,
    columns: Object,
    checkbox: Boolean,
    border: Boolean,
    stripe: Boolean,
    compact: Boolean,
    width: String,
    height: String,
    fixedTop: Boolean,
    fixedRight: Boolean,
    fixedLeftCount: Number
  }

  deleteRow = (item: DataType) => {
    this.props.dataSource.splice(this.props.dataSource.indexOf(item), 1)
    this.update()
  }

  async deleteRowById(id: string | number) {
    const dataSource: DataType[] = this.props.dataSource
    await leave(this['row' + id], 'slide-fade')
    // 支持字符串和数字 id
    const dataItem = dataSource.find(item => item.id + '' === id + '')
    dataItem && this.deleteRow(dataItem)
  }

  _changeHandlerTh = (e, item: DataType) => {
    this.fire('change-all', { item, checked: e.detail })
    this.props.dataSource.forEach(item => {
      item.checked = e.detail
    })
    this.update()
  }

  _changeHandlerTd = (e, item: DataType) => {
    this.fire('change', { item, checked: e.detail })
    item.checked = e.detail
    this.update()
  }


  _getCheckedState() {
    let c = 0, uc = 0
    for (let i = 0, len = this.props.dataSource.length; i < len; i++) {
      if (this.props.dataSource[i].checked) {
        c++
      } else {
        uc++
      }

      if (c > 0 && uc > 0) {
        return { 'indeterminate': true }
      }
    }

    if (c === 0) return { 'unchecked': true }
    return { 'checked': true }
  }

  installed() {
    this.setFixedLeft()
    this.setFixedRight()
    window.addEventListener('click', () => {
      let needUpdate = false
      this.props.dataSource.forEach(dataItem => {
        if (dataItem.editingKey) {
          needUpdate = true
        }
        dataItem.editingKey = null
      })

      if (needUpdate) {
        this.update()
      }
    })
  }

  onChange = (evt: Event, item: DataType, column) => {
    const oldValue = item[column.key]
    item[column.key] = evt.currentTarget.value
    this.update()

    this.fire('data-changed', {
      value: item[column.key],
      oldValue,
      item,
      column
    })
  }

  updated() {
    this.setFixedLeft()
    this.setFixedRight()
  }

  setFixedLeft() {
    const fixedLeftEls = this.rootNode.querySelectorAll('.fixed-left')
    const boxRect = this.rootNode.getBoundingClientRect()
    fixedLeftEls.forEach((fixedLeftEl) => {
      const rect = fixedLeftEl.getBoundingClientRect()
      fixedLeftEl.style.left = (rect.left - boxRect.left - 1) + 'px'
    })
  }

  setFixedRight() {
    const fixedRightEls = this.rootNode.querySelectorAll('.fixed-right')
    fixedRightEls.forEach((fixedRightEl) => {
      fixedRightEl.style.right = '0px'
    })
  }

  onTdClick = (item, column, evt) => {
    evt.stopPropagation()
    this.props.dataSource.forEach(dataItem => {
      dataItem.editingKey = null
    })

    item.editingKey = column.key

    this.update()
    this.editingInput && this.editingInput.focus()
  }

  onCellClick = (column) => {
    if (column.sort === 'asc') {
      column.sort = 'desc'
    } else if (column.sort === 'desc') {
      column.sort = ''
    } else {
      column.sort = 'asc'
    }
    this.update()
    this.fire('sort-change', column)
  }

  onAscSort = (evt, column) => {
    evt.stopPropagation()
    if (column.sort === 'asc') {
      column.sort = null
    } else {
      column.sort = 'asc'
    }
    this.update()
    this.fire('sort-change', column)

  }

  onDescSort = (evt, column) => {
    evt.stopPropagation()
    if (column.sort === 'desc') {
      column.sort = null
    } else {
      column.sort = 'desc'
    }
    this.update()
    this.fire('sort-change', column)
  }

  renderHead() {
    const props = this.props
    return (
      <thead>
        <tr>
          {props.columns.map((column, index) => {
            const obj: any = {}
            const { maxWidth } = column
            if (maxWidth !== undefined) {
              obj.style = { maxWidth: typeof maxWidth === 'number' ? maxWidth + 'px' : maxWidth }
            }
            return <th {...obj}
              title={column.title}
              class={classNames({
                [`o-table-align-${column.align}`]: column.align,
                'compact': props.compact,
                'fixed-top': props.fixedTop,
                'fixed-left': index < props.fixedLeftCount,
                'fixed-right': column.fixed,
                'cursor-pointer': column.sortable
              })}>

              <div class="o-cell" onClick={() => { this.onCellClick(column) }}>
                {index === 0 && props.checkbox && <o-checkbox onClick={evt => evt.stopPropagation()} {...this._getCheckedState()} onChange={_ => this._changeHandlerTh(_, column)} />}
                <span class="o-cell--title"><span>{column.title}</span></span>

                {column.sortable && <span class="o-cell--sort">
                  <i title="升序：最低到最高"
                    onClick={(evt) => this.onAscSort(evt, column)}
                    class={classNames({
                      'o-sort--asc-btn': true,
                      'active': column.sort === 'asc'
                    })}
                  >
                  </i>
                  <i
                    title="降序：最高到最低"
                    onClick={(evt) => this.onDescSort(evt, column)}
                    class={classNames({
                      'o-sort--desc-btn': true,
                      'active': column.sort === 'desc'
                    })}
                  >

                  </i>
                </span>}


                {column.filters && <span class="o-cell--filter" onClick={evt => evt.stopPropagation()}>
                  <i title="对所选的列启用筛选" class="o-cell--filter-icon"></i>
                </span>}
              </div>

            </th>
          })}
        </tr>
      </thead>
    )
  }

  renderFilter() {
    return <div class="o-table--filter-wrapper filter--prevent-default is--animat is--multiple is--active" style="top: 36px; left: 264px;">
      <div class="o-table--filter-template">
        <div class="my-filter-content">
          <div class="my-fc-search">
            <div class="my-fc-search-top">
              <div class="el-input el-input--mini el-input--suffix">
                <input type="text" autocomplete="off" placeholder="搜索" class="el-input__inner" />
                <span class="el-input__suffix"><span class="el-input__suffix-inner"><i class="el-input__icon fa fa-search"></i>
                </span>
                </span>
              </div>
            </div>
            <div class="my-fc-search-content">
              <ul class="my-fc-search-list my-fc-search-list-head">
                <li class="my-fc-search-item"><label class="o-checkbox size--small"><input type="checkbox" class="o-checkbox--input" /><span class="o-checkbox--icon"></span><span class="o-checkbox--label">全选</span></label></li>
              </ul>
              <ul class="my-fc-search-list my-fc-search-list-body">
                <li class="my-fc-search-item"><label class="o-checkbox size--small"><input type="checkbox" class="o-checkbox--input" /><span class="o-checkbox--icon"></span><span class="o-checkbox--label">18</span></label></li>
              </ul>
            </div>
          </div>
          <div class="my-fc-footer">
            <button type="button" disabled class="o-button type--text size--small is--disabled"><span class="o-button--content">筛选</span></button>
            <button type="button" class="o-button type--text size--small"><span class="o-button--content">重置</span></button>
          </div>
        </div>
      </div>
    </div>
  }

  renderBody() {
    const props = this.props
    return (
      <tbody class="o-table-tbody">
        {props.dataSource.map(item => (
          <tr key={item.id} ref={e => this['row' + item.id] = e} style={{
            background: item.$config && item.$config.bgColor
          }}>
            {props.columns.map((column, subIndex) => {
              const obj: any = {}
              const { maxWidth } = column
              if (maxWidth !== undefined) {
                obj.style = { maxWidth: typeof maxWidth === 'number' ? maxWidth + 'px' : maxWidth }
              }
              const columnVal = column.render ? column.render(item) : item[column.key]
              const title = typeof columnVal === 'string' ? columnVal : null
              return <td
                title={title}
                onClick={evt => this.onTdClick(item, column, evt)} {...obj}
                class={classNames({
                  [`o-table-align-${column.align}`]: column.align,
                  'compact': props.compact,
                  'fixed-left': subIndex < props.fixedLeftCount,
                  'fixed-right': column.fixed
                })}>{subIndex === 0 && props.checkbox && <o-checkbox
                  checked={item.checked}
                  onChange={_ => this._changeHandlerTd(_, item)} />}{(column.editable && item.editingKey === column.key) ?
                    <o-input
                      ref={_ => this.editingInput = _}
                      size="mini"
                      onChange={evt => {
                        this.onChange(evt, item, column)
                      }}
                      value={item[column.key]} /> :
                    (columnVal)}
              </td>
            })}
          </tr>
        ))}
      </tbody>
    )
  }

  render(props) {

    if (!props.columns) return
    if (!props.dataSource) return

    if (props.fixedRight) {
      props.columns[props.columns.length - 1].fixed = true
    }

    return (
      <div style={{
        width: props.width && props.width,
        height: props.height && props.height
      }} {...extractClass(props, 'o-table', {
        'o-table-checkbox': props.checkbox,
        'o-table-border': props.border,
        'o-table-stripe': props.stripe
      })}>
        <table {...extractClass(props, 'o-table-table')}>
          {this.renderHead()}
          {this.renderBody()}
        </table>
      </div>
    )
  }
}
