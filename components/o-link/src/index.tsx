import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'
//@ts-ignore
import '../theme.ts'

interface Props {
	type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'

	disabled?: boolean,
	underline?: boolean
}



@tag('o-link')
export default class Link extends WeElement<Props>{
	static css = css


	static defaultProps = {
		underline: true,

		disabled: false
	}


	static propTypes = {

		type: String,

		disabled: Boolean,
		underline: Boolean
	}


	render(props) {

		return <a disabled={props.disabled} {...extractClass(props, 'o-link', {
			['o-link-' + props.type]: props.type,
			['o-link-' + props.size]: props.size,
			'is-underline': props.underline,
			'is-disabled': props.disabled
		})} >
			<span><slot></slot></span>
		</a>
	}
}
