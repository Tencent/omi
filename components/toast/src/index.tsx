import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'
//@ts-ignore
import '../theme.ts'

interface Props {
	label?: string,
	loading?: boolean,
	done?: boolean
}



@tag('o-toast')
export default class Button extends WeElement<Props>{
	static css = css

	static propTypes = {
		label: String,
		loading: Boolean,
		done: Boolean
	}

	render(props) {

		return [
			<div class="o-mask-transparent"></div>,
			<div class="o-toast">
				<slot />
				{props.loading && <i class="o-loading"></i>}
				{props.done && <i class="o-done"></i>}
				<p class="o-toast-content">{props.label}</p>
			</div>
		]
	}
}
