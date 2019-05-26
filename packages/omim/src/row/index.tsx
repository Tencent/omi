import { tag, WeElement, h, extractClass, classNames } from 'omi'
import * as css from './index.scss'
import { elementChildren } from '../util/element-children'
import { domReady } from '../util/dom-ready'
//@ts-ignore
import { theme } from '../theme.ts'

interface Props {
	cols: object
}

interface Data {

}


@tag('m-row')
export default class Row extends WeElement<Props, Data>{
	static css = theme() + css

	static propTypes = {
		cols: Object
	}


	install() {
		domReady(() => {
			const children = elementChildren(this)
			children.forEach((child, index) => {
				if (!child.hasAttribute('slot')) {
					child.setAttribute('slot', index + '')
				}
			})
			this.update()
		})
	}

	render(props) {
		return (
			<div {...extractClass(props, props.type === 'flex' ? 'flex' : 'block')}>
				{props.cols.map((_, index) => <div class={`col col${_.span === undefined ? _ : _.span}`}><slot name={index}></slot></div>)}
			</div>
		)
	}
}
