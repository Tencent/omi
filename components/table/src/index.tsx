import { tag, WeElement, h, extractClass, classNames } from 'omi'
import '@omiu/checkbox'
import '@omiu/input'
import { leave } from './transition.ts'

import * as css from './index.scss'

interface Props {
  dataSource: any[]
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
export default class Table extends WeElement<Props> {
  static css = css

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

  onChange = (evt, item, column) => {
    const oldValue = item[column.key]
    item[column.key] = evt.detail
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
    fixedLeftEls.forEach((fixedLeftEl, index) => {
      const rect = fixedLeftEl.getBoundingClientRect()
      fixedLeftEl.style.left = (rect.left - boxRect.left - 1) + 'px'
    })
  }

  setFixedRight() {
    const fixedRightEls = this.rootNode.querySelectorAll('.fixed-right')
    fixedRightEls.forEach((fixedRightEl, index) => {
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
                  'fixed-top': props.fixedTop,
                  'fixed-left': index < props.fixedLeftCount,
                  'fixed-right': column.fixed
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
                  return <td onclick={evt => this.onTdClick(item, column, evt)} {...obj} class={classNames({
                    [`o-table-align-${column.align}`]: column.align,
                    'compact': props.compact,
                    'fixed-left': subIndex < props.fixedLeftCount,
                    'fixed-right': column.fixed
                  })}>{subIndex === 0 && props.checkbox && <o-checkbox checked={item.checked} onChange={_ => this._changeHandlerTd(_, item)} />}{(column.editable && item.editingKey === column.key) ? <o-input ref={_ => this.editingInput = _} size="mini"
                    onChange={evt => {
                      this.onChange(evt, item, column)
                    }} value={item[column.key]} /> : (column.render ? column.render(item) : item[column.key])}</td>
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}
