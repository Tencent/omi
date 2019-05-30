import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'
import '../text-field'
//@ts-ignore
import { theme } from '../theme.ts'

interface Props {
	type: 'date' | 'time' | 'color' | 'datetime-local'
}

interface Data {

}


@tag('m-picker')
export default class MPicker extends WeElement<Props, Data>{
	static css = theme() + css

	static resetTheme() {
		this.css = theme() + css
	}

	static defaultProps = {
		type: String
	}

	static propTypes = {
	}

	render(props) {

		return (
			<div {...extractClass(props, 'm-picker')}>
				{/* todo using text-field */}
				<m-text-field type={props.type} rightIcon='arrow' />
			</div>
		)
	}
}

