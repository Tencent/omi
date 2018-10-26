import { WeElement, tag } from "../../src/omi"

@tag("hello-element")
class HelloElement extends WeElement {
	static get props() {
		return {
			propFromParent: {
				value: "9"
			},
			msg: {
				value: ""
			},
			num: {
				value: 10
			}
		}
	}

	static get data() {
		return {
			a: 1,
			b: {
				c: 2
			}
		}
	}

	onClick = evt => {
		//trigger CustomEvent
		this.fire("abc", { name: "dntzhang", age: 12 })
		evt.stopPropagation()
	};

	installed() {
		setTimeout(() => {
			this.data.a = 2
			this.update()
		}, 1000)
	}

	css() {
		return `
         div{
             color: red;
             cursor: pointer;
         }`
	}

	render(props, data) {
		return (
			<div onClick={this.onClick}>
				Hello {props.msg} {props.propFromParent}
				<div>
					Click Me!
	        {props.num}
				</div>
				<div>data: {data.a}</div>
				<div>props {props.num}</div>
			</div>
		)
	}
}
