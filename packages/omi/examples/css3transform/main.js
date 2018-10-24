import { render, WeElement, tag } from "../../src/omi";
import "./omi-transform";

@tag("my-app")
class MyApp extends WeElement {
	install() {
		this.data.rotateZ = 30

		this.linkRef = (e) => {
			this.trDiv = e
		}
	}

	css() {
		return `
         div{
             color: red;
			 cursor: pointer;
			 width:150px;
			 height:150px;
			 line-height:150px;
			 text-align: center;
			 border: 1px solid green;

         }`;
	}

	installed() {
		const tk = setInterval(() => {
			//slow
			// this.data.rotateZ += 2
			// this.update()

			//fast
			this.trDiv.rotateZ += 2
			this.data.rotateZ = this.trDiv.rotateZ

		}, 16)


	}
	render(props, data) {

		return (
			<css3-transform rotateZ={data.rotateZ} translateX={0} perspective={0} >
				<div ref={this.linkRef}>
					omi-transform
			</div>
			</css3-transform>

		);
	}
}

render(<my-app />, "body");
