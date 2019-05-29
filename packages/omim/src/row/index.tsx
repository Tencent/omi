import { tag, WeElement, h, extractClass, classNames } from 'omi'
import * as css from './index.scss'
import * as rs from './responsive.scss'
import { elementChildren } from '../util/element-children'
import { domReady } from '../util/dom-ready'
//@ts-ignore
import { theme } from '../theme.ts'

interface Props {
	cols: object,
	gutter?: number,
	justify?: string,
	align?: string,
	type?: string
}

interface Data {

}


@tag('m-row')
export default class Row extends WeElement<Props, Data>{
	static css = theme() + css + rs

	static resetTheme() {
		this.css = theme() + css + rs
	}

	static propTypes = {
		cols: Object,
		gutter: Number,
		justify: String,
		align: String,
		type: String
	}

	install() {
		domReady.done ?
			this._init() :
			domReady(() => {
				this._init()
			})
	}

	_init() {
		const children = elementChildren(this)
		children.forEach((child, index) => {
			if (!child.hasAttribute('slot')) {
				child.setAttribute('slot', index + '')
			}
		})
		this.update()
	}

	render(props) {

		return (
			<div {...extractClass(props, props.type === 'flex' ? 'flex' : 'block', {
				['flex-' + props.justify]: props.justify,
				['flex-' + props.align]: props.align
			})}>
				{props.cols.map((_, index) => {
					const style = props.gutter !== undefined ? {
						style: `padding-left: ${props.gutter / 2}px; padding-right: ${props.gutter / 2}px;`
					} : null
					let classes = {};
					['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].forEach(size => {
						let sizeProps: any = {}
						if (typeof _[size] === 'number') {
							sizeProps.span = _[size]
						} else if (typeof _[size] === 'object') {
							sizeProps = _[size] || {}
						}

						classes = {
							...classes,
							[`col-${size}-${sizeProps.span}`]: sizeProps.span !== undefined,
							[`col-${size}-offset-${sizeProps.offset}`]: sizeProps.offset || sizeProps.offset === 0,
							[`col-${size}-push-${sizeProps.push}`]: sizeProps.push || sizeProps.push === 0,
							[`col-${size}-pull-${sizeProps.pull}`]: sizeProps.pull || sizeProps.pull === 0,
						}
					})

					return <div {...style} class={classNames(`col`, {
						['col' + _.span]: _.span !== undefined,
						['col' + _]: typeof _ === 'number',
						['offset' + _.offset]: _.offset !== undefined,
						['push' + _.push]: _.push !== undefined,
						['pull' + _.pull]: _.pull !== undefined,
						...classes
					})}><slot name={index}></slot>
					</div>
				})}
			</div>
		)
	}
}
