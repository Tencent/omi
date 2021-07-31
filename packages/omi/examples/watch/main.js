import { define, WeElement, watch } from '../../src/omi'

define('my-counter', class extends WeElement {

	_count = 1

	set count(value) {
		this._count = value
		this.update()
	}

	get count() {
		return this._count
	}

	sub = () => {
		this.count--
	}

	add = () => {
		this.count++
	}

	render() {
		console.error(this.count)
		return (
			<div>
				<button onClick={this.sub}>-</button>
				<span>{this.count}</span>
				<button onClick={this.add}>+</button>
			</div>
		)
	}
})


// function observable(fnName) {  // 装饰器工厂函数
// 	return function (target, key) {  // 装饰器
// 		let prev = target[key];
// 		console.error(target, key)
// 		delete target[key]
// 		Object.defineProperty(target, key, {
// 			set(next) {
// 				target[fnName](prev, next);
// 				prev = next;
// 			}
// 		})
// 		target[key] = prev
// 	}
// }

// console.error(888)
// class Store {
// 	@observable('onCountChange')
// 	count = -1;

// 	onCountChange(prev, next) {
// 		console.log('>>> count has changed!')
// 		console.log('>>> prev: ', prev)
// 		console.log('>>> next: ', next)
// 	}
// }

// const store = new Store();
// store.count = 10
