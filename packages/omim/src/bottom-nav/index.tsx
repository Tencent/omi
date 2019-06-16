import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'
import { MDCRipple } from '@material/ripple'

//@ts-ignore
import '../theme.ts'

interface Props {
}

interface Data {

}

@tag('m-bottom-nav')
export default class BottomNav extends WeElement<Props, Data>{
	static css = css

	static defaultProps = {
	}

	static propTypes = {
	}

	installed() {
		new MDCRipple(this.shadowRoot.querySelector('.ripple'))
	}

	render(props) {
		return <div class="m-root">
			<button class="mbb-root m-action-root" tabindex="0">
				<span class="m-action-wrapper">
					<svg class="msi-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
						<path fill="none" d="M0 0h24v24H0z"></path><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path>
					</svg>
					<span class="m-action-label">Recents</span>
				</span>
				<span class="ripple ripple-surface"></span>
			</button>
		</div>

	}
}
