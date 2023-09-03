import { define, WeElement, h } from '../../src/omi'

define('my-counter', class extends WeElement {

	static css = `
    span {
      color: red;
    }`

	static propTypes = {
		count: Number
	}

	install() {
		this.count = this.props.count
	}

	sub = () => {
		this.count--
		this.update()
	}

	add = () => {
		this.count++
		this.update()
	}

	render() {
		return (
				<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <polygon points="5,5 195,10 185,185 10,195" fill="red" />
          <foreignObject x="20" y="20" width="160" height="160">
            <div xmlns="http://www.w3.org/1999/xhtml">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis mollis
              mi ut ultricies. Nullam magna ipsum, porta vel dui convallis, rutrum
              imperdiet eros. Aliquam erat volutpat.
            </div>
          </foreignObject>
        </svg>
		)
	}
})
