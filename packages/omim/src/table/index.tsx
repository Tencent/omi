import { tag, WeElement, h } from 'omi'
import * as css from './index.scss'

//@ts-ignore
import { theme } from '../theme.ts'

interface Props {
	dataSource: object,
	columns: object
}

@tag('m-table')
export default class Table extends WeElement<Props, {}> {
  static css = theme() + css

	dataSource = null

	static propTypes = {
		dataSource: Object,
		columns: Object
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
              const obj:any = {}
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
                const obj:any = {}
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
}
