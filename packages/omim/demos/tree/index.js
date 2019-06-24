
import '../../src/tree/index.tsx'
import { render, h, define, WeElement } from 'omi'

define('my-app', class extends WeElement {

	node = {
		title: 'p-0',
		id: 1,
		icon: 'account_balance_wallet',
		children: [
			{
				title: 'p-1',
				id: 2,
				icon: 'assignment_ind',
				children: [
					{ title: 'p-2', id: 3, icon: 'chrome_reader_mode', checked: true },
					{ title: 'p-2.5', id: 13, icon: 'chrome_reader_mode',children:[{
            title: 'p-1',
            id: 1112,
          }] }
				]
			},
			{
				title: 'p-4',
				id: 4,
				icon: 'extension',

				children: [
					{
						title: 'p-5', id: 5, selected: true, icon: 'dashboard', checked: true,
						disabled: true
					},
					{ title: '项目六', id: 6, icon: 'favorite' },
					{ title: '项目7', id: 7 }
				]
			},
			{
				title: 'p-11',
				id: 14,
				icon: 'group_work',

				children: [
					{
						title: 'p-12', id: 12, icon: 'fingerprint', checked: true
					}
				]
			}
		]
	}

	toggleHandler = (evt) => {
		console.log(evt.detail.id)
	}

	onNodeClick = (evt) => {
		console.log(evt.detail)
	}

	onCheck = (evt) => {
		console.log(evt.detail)
	}

	render() {
		return <div>
			<m-tree
				checkbox
				onNodeClick={this.onNodeClick}
				onToggle={this.toggleHandler}
				onCheck={this.onCheck}
				node={this.node}>
			</m-tree>
		</div>

	}
})

render(<my-app />, 'body')
