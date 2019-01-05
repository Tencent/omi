import { define, WeElement, extractClass } from 'omi'
import css from './_index.css'
import '../input'
import '../button'

define('o-input-table', class extends WeElement {
  css() {
    return css
  }

  onClick = index => {
    this.props.onChange(index)
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
                  <o-input class={'ipt ' + (colIndex === len - 1 ? 'ipt2' : 'ipt1')} value={item[columu.key]}></o-input>

                </span>
              })}
              <o-button class='btn' size="small" type='default'>{dataLen === 1 ? '+' : (index === dataLen - 1 ? '+' : '-')}</o-button>
            </div>

          </div>
        ))}
      </div>
    )
  }
})
