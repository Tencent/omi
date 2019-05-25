import { tag, WeElement, h, extractClass, classNames } from 'omi'
import * as css from './index.scss'
//@ts-ignore
import { theme } from '../theme.ts'

interface Props {
	nodes: object
}

interface Data {

}


@tag('m-nav')
export default class Nav extends WeElement<Props, Data>{
	static css = theme() + css


	static propTypes = {
		nodes: Object
	}

	_preSelected = null

	toggle = (evt, id, open) => {
		evt.stopPropagation()
		this.fire('toggle', { id, open })
	}

	onNodeClick = (id) => {
		this.fire('nodeClick', { id, pre: this._preSelected })
	}

	renderNode(node, level) {
		if (node.selected) {
			this._preSelected = node.id
		}
		let next = level + 1
		return <ul>
			<li class={classNames('tree-item', {
				'close': node.close
			})}>


				<span onClick={_ => this.onNodeClick(node.id)} style={`padding-left: ${level * 24 + 10}px;`} class={classNames('mdc-tree-title', {
					'selected': node.selected
				})}>{node.icon && <i class='material-icons'>{node.icon}</i>}<span class='text'>{node.title}</span>
					{node.children && node.children.length > 0 && <svg onClick={_ => this.toggle(_, node.id, !node.close)} viewBox="0 0 1024 1024"
						class="arrow" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false">
						<path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
					</svg>}
				</span>


				<div class='children' style={`height: ${node.close ? 0 : (node.children ? (this._getChildCount(node)) * 35 : 0)}px;`}> {node.children && node.children.length > 0 && node.children.map(_ => this.renderNode(_, next))}</div>
			</li>
		</ul>
	}


	_getChildCount(node) {
		let count = 0
		if (node.children && !node.close) {
			count += node.children.length
			node.children.forEach(child => {
				count += this._getChildCount(child)
			})
		}

		return count

	}

	render(props) {
		return <div class='m-nav'>
			{props.nodes.map(node => this.renderNode(node, 0))}
		</div>
	}
}
