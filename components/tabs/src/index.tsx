import { tag, WeElement, h, extractClass, classNames } from 'omi'
import * as css from './index.scss'
//@ts-ignore
import '../theme.ts'

interface Props {
	list?: any[]
	activeIndex: number
	type?: 'card' | 'border-card'
	position?: 'left' | 'right' | 'top' | 'bottom'
}



@tag('o-tabs')
export default class Tabs extends WeElement<Props>{
	static css = css

	static defaultProps = {
		position: 'top'
	}

	static propTypes = {
		list: Array,
		activeIndex: Number,
		type: String,
		position: String
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

		const activeBarStyle = (props.position === 'left' || props.position === 'right') ?{
			height: `40px`,
			transform: `translateY(${props.activeIndex*40}px)`
		}:{
			width: `${this._width}px`,
			transform: `translateX(${this._x}px)`
		}
		console.log(activeBarStyle)
		return (
			<div {...extractClass(props, 'o-tabs', {
				[`o-tabs--${props.position}`]: props.position,
				[`o-tabs--${props.type}`]: props.type
			})}>
				<div class={classNames('o-tabs__header', {
					[`is-${props.position}`]: props.position
				})} >
					<div class={classNames('o-tabs__nav-wrap', {
						[`is-${props.position}`]: props.position
					})}	>
						<div class="o-tabs__nav-scroll">
							<div role="tablist" class={classNames('o-tabs__nav', {
								[`is-${props.position}`]: props.position
							})} >
								{!props.type && <div
									class={classNames('o-tabs__active-bar', {
										[`is-${props.position}`]: props.position
									})} style={activeBarStyle}></div>}

								{props.list.map((tab, index) => {

									return <div ref={e => { this['$tab' + index] = e }} role="tab" onClick={evt => this.onTabClick(evt, index)} tabindex={props.active === index ? '0' : -1}
										{...extractClass(props, 'o-tabs__item', {
											[`is-${props.position}`]: props.position,
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
