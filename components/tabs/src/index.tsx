import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'
//@ts-ignore
import '../theme.ts'

interface Props {
	list?: any[],
	activeIndex: number
}



@tag('o-tabs')
export default class Tabs extends WeElement<Props>{
	static css = css

	static propTypes = {
		list: Array,
		activeIndex: Number
	}

	_x
	_width
	baseRect
	onTabClick = (evt, index) => {
		this.setActiveBar(evt.currentTarget, index)
	}

	setActiveBar(ele, index) {
		const rect = ele.getBoundingClientRect()
		this._x = rect.left - this.baseRect.left
		this._width = rect.width
		if (index === 0) {
			this._x = 0
			this._width -= 20
		} else if (index === this.props.list.length - 1) {
			this._x += 20
			this._width -= 20
		} else {
			this._x += 20
			this._width -= 40
		}
		this.updateProps({
			activeIndex: index
		})
	}

	installed() {
		this.baseRect = this.rootNode.getBoundingClientRect()
		this.setActiveBar(this['$tab' + this.props.activeIndex], this.props.activeIndex)
	}

	render(props) {

		return (
			<div class="o-tabs o-tabs--top">
				<div class="o-tabs__header is-top">
					<div class="o-tabs__nav-wrap is-top">
						<div class="o-tabs__nav-scroll">
							<div role="tablist" class="o-tabs__nav is-top" style="transform: translateX(0px);">
								<div class="o-tabs__active-bar is-top" style={`width: ${this._width}px; transform: translateX(${this._x}px);`}></div>

								{props.list.map((tab, index) => {

									return <div ref={e => { this['$tab' + index] = e }} role="tab" onClick={evt => this.onTabClick(evt, index)} tabindex={props.active === index ? '0' : -1}
										{...extractClass(props, 'o-tabs__item', {
											'is-top': true,
											'is-active': props.activeIndex === index
										})}
									>{tab}</div>
								})}

							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
