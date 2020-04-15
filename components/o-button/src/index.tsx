import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'
//@ts-ignore
import '../theme.ts'

interface Props {
	size?: 'medium' | 'small' | 'mini',
	type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'
	plain?: boolean,
	round?: boolean,
	circle?: boolean,
	loading?: boolean,
	disabled?: boolean,
	icon?: string,
	autofocus?: boolean,
	nativeType?: 'button' | 'submit' | 'reset',
	block?: boolean
}



@tag('o-button')
export default class Button extends WeElement<Props>{
	static css = css


	static defaultProps = {
		size: 'medium',
		plain: false,
		round: false,
		circle: false,
		loading: false,
		disabled: false,
		autofocus: false,
		nativeType: 'button',
		block: false
	}


	static propTypes = {
		size: String,
		type: String,
		plain: Boolean,
		round: Boolean,
		circle: Boolean,
		loading: Boolean,
		disabled: Boolean,
		icon: String,
		autofocus: Boolean,
		nativeType: String,
		block: Boolean
	}


	render(props) {

		return <button disabled={props.disabled} {...extractClass(props, 'o-button', {
			['o-button-' + props.type]: props.type,
			['o-button-' + props.size]: props.size,
			'o-button-plain': props.plain,
			'o-button-round': props.round,
			'o-button-circle': props.circle,
			'o-button-loading': props.loading,
			'o-button-disabled': props.disabled,
			'o-button-block': props.block
		})} type={props.nativeType} >
			<slot></slot>
		</button>
	}
}
