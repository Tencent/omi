import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'
//@ts-ignore
import '../theme.ts'

interface Props {
	active?: boolean,
	ariaLabel?: string,
	color?: string
}



@tag('o-hamburger-menu')
export default class Button extends WeElement<Props>{
	static css = css

	static defaultProps = {
		active: false,
		ariaLabel: '',
		color: 'black'
	}

	static propTypes = {
		active: Boolean,
		ariaLabel: String,
		color: String
	}

	onClick = () => {
		this.props.active = !this.props.active
		this.update(true)

		if(this.prevProps) {
			this.prevProps.active = this.props.active
		}
	}


	render(props) {

		return <a href="javascript:"
			onClick={this.onClick}
			{...extractClass(props, 'o-hamburger-menu', {
				'active': props.active,
			})}
			aria-label={props.ariaLabel}>
			<span style={{backgroundColor: props.color}} class="fixin top-bun"></span>
			<span style={{backgroundColor: props.color}} class="fixin patty"></span>
			<span style={{backgroundColor: props.color}} class="fixin bottom-bun"></span>
		</a>

	}
}
