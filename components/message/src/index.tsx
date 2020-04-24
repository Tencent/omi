import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'

interface Props {
	type?:  'success' | 'warning' | 'info' | 'error' 
	message: string
	showClose: boolean
	center: boolean
	duration: number
}

@tag('o-message')
export default class Message extends WeElement<Props>{
	static css = css


	static defaultProps = {
		duration: 3000
	}


	static propTypes = {
		showClose: Boolean,
		type: String,
		message: String,
		center: Boolean,
		duration: Number
	}

	enter = true

	installed() {

		setTimeout(() => {
			this.enter = false
			this.update()
		})

		setTimeout(() => {
			this.enter = true
			this.update()
		}, this.props.duration + 400)


		setTimeout(() => {
			this.parentNode.removeChild(this)
		}, this.props.duration + 400 + 400)
	}

	render(props) {

		return <div  {...extractClass(props, 'o-message', {
			['o-message--' + props.type]: props.type,
			'is-closable': props.closable,
			'is-center': props.center,
			'o-message-fade-enter': this.enter
		})}
			style="top: 20px; z-index: 2000;">
			{/* <i class="o-message__icon o-icon-success"></i> */}
			<p class="o-message__content">{props.message}</p>
			{props.showClose && <i class="o-message__closeBtn o-icon-close"></i>}
		</div>


	}
}
