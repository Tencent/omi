import { tag, WeElement, h, extractClass, classNames } from 'omi'
import '@omiu/checkbox'
import { leave } from './transition.ts'

import * as css from './index.scss'

interface Props {
  dataSource: any[],
  columns: object,
  checkbox: boolean,
  border: boolean,
  stripe: boolean,
  compact: boolean
}

@tag('o-table')
export default class Table extends WeElement<Props> {
  static css = css

  static defaultProps = {
    dataSource: [],
    columns: [],
    checkbox: false,
    border: false,
    stripe: false,
    compact: false
  }

  static propTypes = {
    dataSource: Object,
    columns: Object,
    checkbox: Boolean,
    border: Boolean,
    stripe: Boolean,
    compact: Boolean
  }

  deleteRow = (item) => {
    this.props.dataSource.splice(this.props.dataSource.indexOf(item), 1)
    this.update()
  }

  async deleteRowById(id) {
    const { dataSource } = this.props
    await leave(this['row' + id], 'slide-fade')
    //支持字符串和数字 id
    this.deleteRow(dataSource.find(item => item.id + '' === id + ''))
  }

  _changeHandlerTh = (e, item) => {
    this.fire('change-all', { item, checked: e.detail })
    this.props.dataSource.forEach(item => {
      item.checked = e.detail
    })
    this.update()
  }

  _changeHandlerTd = (e, item) => {
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

  render(props) {

    if (!props.columns) return
    if (!props.dataSource) return
    return (
      <table {...extractClass(props, 'o-table', {
        'o-table-checkbox': props.checkbox,
        'o-table-border': props.border,
        'o-table-stripe': props.stripe
      })}>
        <thead>
          <tr>
            {props.columns.map((column, index) => {
              const obj: any = {}
              const { width } = column
              if (width !== undefined) {
                obj.style = { width: typeof width === 'number' ? width + 'px' : width }
              }
              return <th {...obj} class={classNames({
                [`o-table-align-${column.align}`]: column.align,
                'compact': props.compact,
              })}>{index === 0 && props.checkbox && <o-checkbox {...this._getCheckedState()} onChange={_ => this._changeHandlerTh(_, column)} />}{column.title}</th>
            })}
          </tr>
        </thead>
        <tbody class="o-table-tbody">
          {props.dataSource.map(item => (
            <tr key={item.id} ref={e => this['row' + item.id] = e} style={{
              background: item.$config && item.$config.bgColor
            }}>
              {props.columns.map((column, subIndex) => {
                const obj: any = {}
                const { width } = column
                if (width !== undefined) {
                  obj.style = { width: typeof width === 'number' ? width + 'px' : width }
                }
                return <td {...obj} class={classNames({
                  [`o-table-align-${column.align}`]: column.align,
                  'compact': props.compact,
                })}>{subIndex === 0 && props.checkbox && <o-checkbox checked={item.checked} onChange={_ => this._changeHandlerTd(_, item)} />}{column.render ? column.render(item) : item[column.key]}</td>
              })}
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}
