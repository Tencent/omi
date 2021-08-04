import { define, WeElement, render } from '../../src/omi'




render(<div>
	<my-counter count={111}></my-counter>
</div>, 'body', {
		ignoreAttrs: true
	})

setTimeout(() => {

	Omi.define('my-counter', class extends Omi.WeElement {

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
			return Omi.h(
				'div',
				null,
				Omi.h(
					'button',
					{ onClick: this.sub },
					'-'
				),
				Omi.h(
					'span',
					null,
					this.count
				),
				Omi.h(
					'button',
					{ onClick: this.add },
					'+'
				)
			)
		}
	})
}, 1000)
