const { WeElement, h, render, define, getHost } = Omi

QUnit.test("base", function (assert) {

	define('like-button',
		class extends WeElement {
			install() {
				this.data = { liked: false }
			}

			render() {
				if (this.data.liked) {
					return 'You liked this.'
				}

				return h(
					'button',
					{
						onClick: () => {
							this.data.liked = true
							this.update()
						}
					},
					'Like'
				)
			}
		})

	render(h('like-button'), '#root')

	assert.deepEqual(document.querySelector('#root').firstElementChild.shadowRoot.innerHTML, '<button>Like</button>')


	document.querySelector('#root').firstElementChild.shadowRoot.querySelector('button').click()

	assert.deepEqual(document.querySelector('#root').firstElementChild.shadowRoot.innerHTML, 'You liked this.')
})


QUnit.test("props.children", function (assert) {

	define('my-p', class extends WeElement {
		render(props) {
			assert.deepEqual(props.children, [Omi.h(
				'h2',
				null,
				'Hello World'
			)])
			return props.children
		}
	})

	define('my-app', class extends WeElement {
		render() {
			return Omi.h(
				'div',
				null,
				Omi.h(
					'my-p',
					null,
					Omi.h(
						'h2',
						null,
						'Hello World'
					)
				)
			);
		}
	})

	render(h('my-app'), '#root2')
})



QUnit.test("getHost", function (assert) {

	let be = null
	let ae = null
	define('c-e', class extends WeElement {
		render(props) {
			assert.deepEqual(getHost(this), be)

			return props.children
		}
	})

	define('b-e', class extends WeElement {
		install() {
			be = this
		}
		render(props) {
			assert.deepEqual(getHost(this), ae)
			return Omi.h(
				'h2',
				null,
				Omi.h(
					'c-e',
					null
				)
			)
		}
	})

	define('a-e', class extends WeElement {
		install() {
			ae = this
		}
		render() {
			return Omi.h(
				'div',
				null,
				Omi.h(
					'b-e',
					null,
					Omi.h(
						'h2',
						null,
						'Hello World'
					)
				)
			);
		}
	})

	render(h('a-e'), '#root3')
})



QUnit.test("observe", function (assert) {

	define('observe-e',
		class extends WeElement {
			install() {
				this.constructor.observe = true
				this.data = { liked: false }
			}

			installed() {
				this.data.liked = true
				assert.deepEqual(document.querySelector('#root4').firstElementChild.shadowRoot.innerHTML, 'You liked this.')
			}

			render() {
				if (this.data.liked) {
					return 'You liked this.'
				}

				return h(
					'button',
					null,
					'Like'
				)
			}
		})

	render(h('observe-e'), '#root4')

})


QUnit.test("render array", function (assert) {

	define('ra-e',
		class extends WeElement {
			installed() {
				assert.deepEqual(document.querySelector('#root5').firstElementChild.shadowRoot.innerHTML, '<div>Hello</div><div>Element</div>')

				this.aa = 1
				this.update()

				assert.deepEqual(document.querySelector('#root5').firstElementChild.shadowRoot.innerHTML, '<div>Hell2</div><div>Element</div><div>Element2</div>')

			}

			render() {
				if (this.aa === 1) {

					return [Omi.h(
						'div',
						null,
						'Hell2'
					), Omi.h(
						'div',
						null,
						'Element'
					), Omi.h(
						'div',
						null,
						'Element2'
					)];
				}
				return [Omi.h(
					'div',
					null,
					'Hello'
				), Omi.h(
					'div',
					null,
					'Element'
				)];
			}
		})

	render(h('ra-e'), '#root5')

})
