import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'
import { MDCRipple } from '@material/ripple'

import '../icon'
//@ts-ignore
import '../theme.ts'

interface Props {
	items: any[]
}


@tag('m-bottom-nav')
export default class BottomNav extends WeElement<Props>{
	static css = css

	static defaultProps = {
	}

	static propTypes = {
		selectedColor: String,
		items: Array
	}

	installed() {
		this.shadowRoot.querySelectorAll('.ripple').forEach(dom => {
			new MDCRipple(dom)
		})
	}

	clickHandler = (item) => {
		this.fire('itemclick', item)
		if (!item.selected) {
			this.props.items.forEach(_ => _.selected = false)
			item.selected = true
			this.fire('change', item)
			this.update(true)
		}
	}

	render(props) {
		return <div class="m-bn">
			{props.items.map((item,index) => (
				<button onClick={_ => { this.clickHandler(item) }} {...extractClass({}, 'item', {
					'selected': item.selected
				})} {...(item.selected && props.selectedColor) ? { style: `color:${props.selectedColor}` } : null} tabindex={index}>
					<span class="m-action-wrapper">
						{typeof item.icon === 'string' ? <i class="material-icons">{item.icon}</i> : <m-icon {...item.icon} />}
						<span class="m-action-label">{item.label}</span>
					</span>
					<span class="ripple ripple-surface"></span>
				</button>
			))}
		</div>

	}
}
