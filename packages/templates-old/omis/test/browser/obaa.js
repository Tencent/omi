import {
	obaa
} from '../../src/omis'

describe('obaa', () => {
	let scratch
	//const Empty = () => null

	before(() => {
		scratch = document.createElement('div')
			; (document.body || document.documentElement).appendChild(scratch)
	})

	beforeEach(() => {
		//let c = scratch.firstElementChild;
		//if (c) render(<Empty />, scratch, { merge: c })
		scratch.innerHTML = ''
	})

	after(() => {
		scratch.parentNode.removeChild(scratch)
		scratch = null
	})

	it('simple test', () => {
		var result = []
		var obj = { a: 1 }
		obaa(obj, function (a, b, c, d) {
			result = [a, b, c, d]
		})

		obj.a = 2


		expect(result).to.deep.equal(['a', 2, 1, '#'])
	})

	it('array test', () => {
		var result = []
		var obj = { a: [1] }
		obaa(obj, function (a, b, c, d) {
			result = [a, b, c, d]
		})

		obj.a.push(2)


		expect(result).to.deep.equal(['Array-push', [1, 2], [1], '#-a'])
	})
})
