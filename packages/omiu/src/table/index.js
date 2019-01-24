import { define, WeElement, classNames } from 'omi'
import css from './_index.css'


define('o-table', class extends WeElement {
  css() {
    return css
  }

  install() {
    this.dataSource = this.props.dataSource
  }

  removeItem = (item) => {
    this.dataSource.splice(this.dataSource.indexOf(item), 1)
    this.update()
  }

  render(props) {

    return (
      <table class="table-fill">
        <thead>
          <tr>
            {props.columns.map(item => {
              const obj = {}
              const { width } = item
              if (width !== undefined) {
                obj.style = { width: typeof width === 'number' ? width + 'px' : width }
              }
              return <th {...obj} class="text-left">{item.title}</th>
            })}
          </tr>
        </thead>
        <tbody class="table-hover">
          {props.dataSource.map(item => (
            <tr>
              {props.columns.map(subItem => {
                const obj = {}
                const { width } = subItem
                if (width !== undefined) {
                  obj.style = { width: typeof width === 'number' ? width + 'px' : width }
                }
                return <td {...obj} class="text-left">{subItem.render ? subItem.render(item) : item[subItem.key]}</td>
              })}
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
})
