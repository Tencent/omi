import { define, WeElement } from '../../src/omi'
import { create, cssomSheet } from 'twind'

const sheet = cssomSheet({ target: new CSSStyleSheet() })
const { tw } = create({ sheet })


define('twind-button', class extends WeElement {

	static css = sheet.target

	render() {
		return (
			<button class={tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`} >twind button</button>
		)
	}
})
