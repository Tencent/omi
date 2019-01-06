import { define, WeElement, classNames } from 'omi'
import css from './_index.css'


define('o-table', class extends WeElement {
  css() {
    return css
  }

  install () {
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
            {props.columns.map(item => (
              <th class="text-left">{item.title}</th>
            ))}
          </tr>
        </thead>
        <tbody class="table-hover">
          {props.dataSource.map(item => (
            <tr>
              {props.columns.map(subItem => (
                <td class="text-left">{subItem.render ? subItem.render(item) : item[subItem.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
})
