import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'
import '../text-field'
//@ts-ignore
import '../theme.ts'

interface Props {
	type: 'date' | 'time' | 'color' | 'datetime-local',
	label: string
}

interface Data {

}


@tag('m-picker')
export default class Picker extends WeElement<Props, Data>{
	static css = css

	static defaultProps = {

	}

	static propTypes = {
		type: String,
		label: String
	}

	render(props) {

		return (
			<m-text-field {...props} css={`input{min-width:56px;}`} />
		)
	}
}

