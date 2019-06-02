import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'
import '../checkbox/index.tsx'
//@ts-ignore
import { theme } from '../theme.ts'

interface Props {
	dataSource: object,
	columns: object
}

@tag('m-table')
export default class Table extends WeElement<Props, {}> {
	static css = theme() + css

	static resetTheme() {
		this.css = theme() + css
	}

	dataSource = null

	// static propTypes = {
	// 	dataSource: Object,
	// 	columns: Object
	// }

	install() {
		this.dataSource = this.props.dataSource
	}

	removeItem = (item) => {
		this.dataSource.splice(this.dataSource.indexOf(item), 1)
		this.update()
	}

	_changeHandlerTh = (e, item) => {
		this.fire('changeall', { item, checked: e.detail })
		this.dataSource.forEach(item => {
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
		for (let i = 0, len = this.dataSource.length; i < len; i++) {
			if (this.dataSource[i].checked) {
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
			<table {...extractClass(props, 'm-table', {
				'm-table-checkbox': props.checkbox
			})}>
				<thead>
					<tr>
						{props.columns.map((item, index) => {
							const obj: any = {}
							const { width } = item
							if (width !== undefined) {
								obj.style = { width: typeof width === 'number' ? width + 'px' : width }
							}
							return <th {...obj} class="text-left">{index === 0 && props.checkbox && <m-checkbox {...this._getCheckedState()} onChange={_ => this._changeHandlerTh(_, item)} />}{item.title}</th>
						})}
					</tr>
				</thead>
				<tbody class="table-hover">
					{props.dataSource.map(item => (
						<tr>
							{props.columns.map((subItem, subIndex) => {
								const obj: any = {}
								const { width } = subItem
								if (width !== undefined) {
									obj.style = { width: typeof width === 'number' ? width + 'px' : width }
								}
								return <td {...obj} class="text-left">{subIndex === 0 && props.checkbox && <m-checkbox checked={item.checked} onChange={_ => this._changeHandlerTd(_, item)} />}{subItem.render ? subItem.render(item) : item[subItem.key]}</td>
							})}
						</tr>
					))}
				</tbody>
			</table>
		)
	}
}
