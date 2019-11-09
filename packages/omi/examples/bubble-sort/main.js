import { define, render, classNames } from '../../src/omi'
import 'regenerator-runtime/runtime'

async function bubbleSort(arr, options) {
	const max = arr.length - 1
	for (let j = 0;j < max;j++) {
		let done = true
		for (let i = 0;i < max - j;i++) {
			options.check(i, i + 1)
			if (arr[i] > arr[i + 1]) {
				await swap(arr, i, i + 1)
				done = false
			}
		}
		if (done) {
			options.done(arr)
			break
		}
	}
	return arr
}

function swap(arr, indexA, indexB) {
	return new Promise(resolve => {
		setTimeout(() => {
			const temp = arr[indexA];
			arr[indexA] = arr[indexB]
			arr[indexB] = temp
			resolve()
		}, 100)
	})
}

class Store {
	data = {
		arr: [2, 7, 12, 9, 16, 19, 8, 13, 11, 5, 15, 17, 14, 18, 6, 3, 10, 1, 4],
		indexA: -1,
		indexB: -1,
		sorting: false
	}
	sort = () => {
		this.data.sorting = true
		bubbleSort(this.data.arr, {
			done: () => {
				this.data.indexA = -1
				this.data.indexB = -1
			},
			check: (indexA, indexB) => {
				this.data.indexA = indexA
				this.data.indexB = indexB
			}
		})
	}
}

define('my-app', _ => {
	return <div>
		<div>
			{_.store.data.arr.map((item, index) => (
				<div class={classNames('bar', {
					'active': index === _.store.data.indexA || index === _.store.data.indexB
				})} style={{ height: item * 10 }}></div>
			))}
		</div>

		<button disabled={_.store.data.sorting} onClick={_.store.sort}>Start Bubble Sort</button>
	</div>
}, {
	use: ['arr', 'indexA', 'indexB', 'sorting'],
	css: `.bar {
        display: inline-block;
        margin-left: 1px;
        background: #777;
        width: 10px;
      }

      .active{
        background: red;
      }
      `,
	installed() {
		console.log('installed')
	}
})

render(<my-app />, 'body', new Store)


