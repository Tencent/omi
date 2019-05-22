import { WeElement, h, tag } from 'omi'

interface HelloOmiProps {
	msg: string
	onAbc: (evt: CustomEvent) => void
}

const tagName = 'hello-omi'
declare global {
	namespace JSX {
		interface IntrinsicElements {
			[tagName]: Omi.Props & HelloOmiProps
		}
	}
}

@tag(tagName)
export default class extends WeElement<HelloOmiProps> {
	static css = `div {
        color: red;
        cursor: pointer;
    }`

	onClick = (evt: Event) => {
		// trigger CustomEvent
		this.fire('abc', { name: 'dntzhang & f & xcatliu', age: 12 })
		evt.stopPropagation()
	}

	render() {
		return (
			<div onClick={this.onClick}>
				<div>	Hello {this.props.msg} Click Me!</div>
			</div>
		)
	}
}