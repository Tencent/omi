import { define, WeElement, extractClass } from 'omi'
import css from './_index.css'
import '../input'
import '../button'

define('o-input-table', class extends WeElement {
  static css = css

  onClick = index => {
    this.props.onChange(index)
  }

  install() {
    this.dataSource = this.props.dataSource
  }

  removeItem = (item) => {
    this.dataSource.splice(this.dataSource.indexOf(item), 1)
    this.update()
  }

  addItem = () => {
    const item = JSON.parse(JSON.stringify(this.dataSource[0]))
    Object.keys(item).forEach(key => {
      item[key] = null
    })
    this.dataSource.push(item)
    this.update()
    this.props.onAdd && this.props.onAdd()
  }

  itemInput = (e, key, item, index) => {
    item[key] = e.target.value
    for (let i = 0, len = this.props.columns.length; i < len; i++) {
      if (this.props.columns[i].onInput && this.props.columns[i].key === key) {
        this.props.columns[i].onInput(e, e.target.value.trim(), index)
        break
      }
    }
  }

  render(props) {
    const len = props.columns.length
    const dataLen = props.dataSource.length
    return (
      <div>
        {props.dataSource.map((item, index) => (
          <div class='row'>
            <div class='item'>
              {props.columns.map((columu, colIndex) => {

                return <span>
                  <span class={colIndex === 0 ? 'span-left' : 'span-center'}>{columu.title}</span>
                  <o-input oninput={e => { this.itemInput(e, columu.key, item, index) }} class={'ipt ' + (colIndex === len - 1 ? 'ipt2' : 'ipt1')} value={item[columu.key]}></o-input>
                </span>
              })}
              {
                index === dataLen - 1 ? (index === 0 ? <o-button class='btn' size="small" onClick={this.addItem} type='default'>+</o-button> : (
                  [<o-button class='btn' size="small" onClick={e => { this.removeItem(item) }} type='default'>-</o-button>,
                  <o-button class='btn' size="small" style="margin-top:0;" onClick={this.addItem} type='default'>+</o-button>]
                )) : <o-button class='btn' onClick={e => { this.removeItem(item) }} size="small" type='default'>-</o-button>
              }
            </div>
          </div>
        ))}
      </div>
    )
  }
})
