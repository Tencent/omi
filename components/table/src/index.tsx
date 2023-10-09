import { tag, WeElement, h, extractClass, classNames, VNode } from 'omi'
import '@omiu/checkbox'
import '@omiu/input'
import { leave } from './transition'

import * as css from './index.scss'

export interface Column<DataType> {
  title: string,
  key: string,
  sortable?: boolean,
  sortMultiple?: null,
  filters?: [],
  width?: number,
  render?: (item: DataType) => VNode,
}

export interface Props<DataType> {
  dataSource: DataType[]
  columns: Column<DataType>[]
  checkbox: boolean
  border: boolean
  stripe: boolean
  compact: boolean
  width: string
  height: string
  fixedTop: boolean
  fixedLeftCount: number
  fixedRightCount: number
  cellSpanOption: object
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
    fixedLeftCount: 0,
    fixedRightCount: 0,
    cellSpanOption: () => null,
  }

  static propTypes = {
    dataSource: Object,
    columns: Array,
    checkbox: Boolean,
    border: Boolean,
    stripe: Boolean,
    compact: Boolean,
    width: String,
    height: String,
    fixedTop: Boolean,
    fixedLeftCount: Number,
    fixedRightCount: Number,
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

  _getCellSpan(cellSpanOption, rowData, column) {
    let rowspan = 1
    let colspan = 1

    if (cellSpanOption) {
      const { bodyCellSpan } = cellSpanOption

      if (typeof bodyCellSpan === 'function') {
        const result = bodyCellSpan({
          row: rowData,
          column
        })

        if (typeof result === 'object') {
          rowspan = result.rowspan
          colspan = result.colspan
        }
      }
    }

    return { rowspan, colspan }
  }

  layout() {
    const width = this.rootElement?.getBoundingClientRect().width
    if (width) {
      let totalWidth = 0
      let noWidthColumnCount = 0
      this.props.columns.forEach(column => {
        if (column.hasOwnProperty('width')) {
          totalWidth += column.width
        } else {
          noWidthColumnCount++
        }
      })
      this.props.columns.forEach(column => {
        if (!column.hasOwnProperty('width')) {
          // 平分剩余空间
          const dy = (width - totalWidth)
          column.computedWidth = Math.max(Math.floor(dy / noWidthColumnCount - 2), 50)
        }
      })
    }

    let left = 0
    let right = 0
    for (let i = 0, len = this.props.columns.length; i < len; i++) {
      const leftColumn = this.props.columns[i]
      leftColumn.left = left
      left += leftColumn.width || leftColumn.computedWidth

      const rightColumn = this.props.columns[len - i - 1]
      rightColumn.right = right
      right += rightColumn.width || rightColumn.computedWidth
    }
  }

  installed() {
    this.layout()
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

    window.addEventListener('resize', () => {
      this.layout()
      this.update()
    })

    this.update()
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
      column.sort = null
    } else {
      column.sort = 'asc'
    }
    this.update()
    this.fire('sort-change', this.props.columns.filter(column => column.sortable && column.sort).sort((columnA, columnB) => columnB.sortMultiple - columnA.sortMultiple))
  }

  onAscSort = (evt, column) => {
    evt.stopPropagation()
    if (column.sort === 'asc') {
      column.sort = null
    } else {
      column.sort = 'asc'
    }
    this.update()
    this.fire('sort-change', this.props.columns.filter(column => column.sortable && column.sort).sort((columnA, columnB) => columnB.sortMultiple - columnA.sortMultiple))

  }

  onDescSort = (evt, column) => {
    evt.stopPropagation()
    if (column.sort === 'desc') {
      column.sort = null
    } else {
      column.sort = 'desc'
    }
    this.update()
    this.fire('sort-change', this.props.columns.filter(column => column.sortable && column.sort).sort((columnA, columnB) => columnB.sortMultiple - columnA.sortMultiple))
  }

  renderHead() {
    const props = this.props
    return (
      <thead>
        <tr>
          {props.columns.map((column, index) => {
            const obj: any = {}
            const fixedLeft = index < props.fixedLeftCount
            const fixedRight = props.columns.length - 1 - index < props.fixedRightCount
            return <th {...obj}
              title={column.title}
              style={{
                left: fixedLeft ? column.left + 'px' : null,
                right: fixedRight ? column.right + 'px' : null
              }}
              class={classNames({
                [`o-table-align-${column.align}`]: column.align,
                'compact': props.compact,
                'fixed-top': props.fixedTop,
                'fixed-left': fixedLeft,
                'fixed-right': fixedRight,
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
            {props.columns.map((column, index) => {
              const obj: any = {}
              const columnVal = column.render ? column.render(item) : item[column.key]
              const title = typeof columnVal === 'string' ? columnVal : null
              const fixedLeft = index < props.fixedLeftCount
              const fixedRight = props.columns.length - 1 - index < props.fixedRightCount
              const { rowspan, colspan } = this._getCellSpan(props.cellSpanOption, item, column)
              if (!rowspan || !colspan) {
                return null;
              }
              return <td
                title={title}
                onClick={evt => this.onTdClick(item, column, evt)} {...obj}
                style={{
                  left: fixedLeft ? column.left + 'px' : null,
                  right: fixedRight ? column.right + 'px' : null
                }}
                class={classNames({
                  [`o-table-align-${column.align}`]: column.align,
                  'compact': props.compact,
                  'fixed-left': fixedLeft,
                  'fixed-right': fixedRight
                })}
                colSpan={colspan}
                rowSpan={rowspan}
              >
                {/* <div class="cell"> */}
                {index === 0 && props.checkbox && <o-checkbox
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
                {/* </div> */}
              </td>
            })}
          </tr>
        ))}
      </tbody>
    )
  }

  renderColGroup() {
    return (
      <colgroup>
        {this.props.columns.map((column) => {
          return <col width={column.width || column.computedWidth} />
        })}
      </colgroup>
    )
  }

  render(props) {

    const width = props.columns.map(column => column.width || column.computedWidth).reduce((wa, wb) => {
      return wa + wb
    })

    if (!props.columns) return
    if (!props.dataSource) return



    return (
      <div style={{
        width: props.width && props.width,
        height: props.height && props.height
      }} {...extractClass(props, 'o-table', {
        'o-table-checkbox': props.checkbox,
        'o-table-border': props.border,
        'o-table-stripe': props.stripe
      })}>
        <table {...extractClass(props, 'o-table-table')}
          style={{
            width: width + 'px'
          }}
        >
          {this.renderColGroup()}
          {this.renderHead()}
          {this.renderBody()}
        </table>
      </div>
    )
  }
}
