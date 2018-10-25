# omi-transform

## css3transform

    Made css3 transform super easy.

Supported properties(get and set): translateX, translateY, translateZ, scaleX, scaleY, scaleZ, rotateX, rotateY, rotateZ, skewX, skewY, originX, originY, originZ

### usage

```js
var ele = document.querySelector("#test1")
Transform(element1)
element1.rotateZ = 45
```

* [css3transform homepage](https://tencent.github.io/omi/packages/omi-transform/css3transform/)
* [all demo](https://tencent.github.io/omi/packages/omi-transform/css3transform/examples/all.html)
* [soft demo](https://tencent.github.io/omi/packages/omi-transform/css3transform/examples/soft.html)
* [3d demo](https://tencent.github.io/omi/packages/omi-transform/css3transform/examples/stars.html)

## make omi-transform

How to use the library in Omi and has the same high performance as the above examples? Let's implement omi-transform together.

```js
import { WeElement, tag } from "omi";
import Transform from 'css3transform'

@tag("css3-transform")
class CSS3Transform extends WeElement {

	install() {
		this.css = this.parentNode.host.css
	}

	installed() {
		Transform(this.host);
		this.transformByProps()
	}

	afterUpdate() {
		this.transformByProps()

	}

	transformByProps() {
		["translateX", "translateY", "translateZ", "scaleX", "scaleY", "scaleZ", "rotateX", "rotateY", "rotateZ", "skewX", "skewY", "originX", "originY", "originZ", "perspective"].forEach(item => {
			if (this.props.hasOwnProperty(item)) {
				this.host[item] = this.props[item]
			}
		})
	}


	render(props, data) {
		return props.children[0]
	}
}
```

### using in omi

```js
import { render, WeElement, tag } from "omi";
import "omi-transform";

@tag("my-app")
class MyApp extends WeElement {
	install() {
		this.data.rotateZ = 30
		this.linkRef = (e) => {
			this.animDiv = e
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
		setInterval(() => {
			//slow
			// this.data.rotateZ += 2
			// this.update()

			//fast
			this.animDiv.rotateZ += 2
			//sync for update call of any scenario
			this.data.rotateZ = this.animDiv.rotateZ
		}, 16)


	}
	render(props, data) {

		return (
			<css3-transform rotateZ={data.rotateZ} translateX={0} perspective={0} >
				<div ref={this.linkRef}>
					omi-transform
			    </div>
			</css3-transform>
		)
	}
}

render(<my-app />, "body");
```


## License

MIT © dntzhang
