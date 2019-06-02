import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'
import '../checkbox/index.tsx'
//@ts-ignore
import '../theme.ts'

interface Props {
	dataSource: any[],
	columns: object,
	checkbox: boolean
}

@tag('m-table')
export default class Table extends WeElement<Props, {}> {
	static css = css

	dataSource:any[]
	columns:any[]
	checkbox: boolean
	// static propTypes = {
	// 	dataSource: Object,
	// 	columns: Object
	// }

	removeItem = (item) => {
		this.props.dataSource.splice(this.props.dataSource.indexOf(item), 1)
		this.update()
	}

	_changeHandlerTh = (e, item) => {
		this.fire('changeall', { item, checked: e.detail })
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

	beforeRender(){
		if(this.dataSource){
			this.props.dataSource =  this.dataSource
		}
		if(this.columns){
			this.props.columns =  this.columns
		}
		if(this.hasOwnProperty('checkbox')){
			this.props.checkbox =  this.checkbox
		}

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
