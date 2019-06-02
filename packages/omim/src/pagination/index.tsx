import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'
//@ts-ignore
import { theme } from '../theme.ts'

interface Props {
	total: number,
	pageSize: number,
	numDisplay: number,
	currentPage: number,
	numEdge: number,
	linkTo: string,
	prevText: string,
	nextText: string,
	ellipseText: string,
	prevShow: boolean,
	nextShow: boolean
}

interface Data {

}


@tag('m-pagination')
export default class Pagination extends WeElement<Props, Data>{
	static css = theme() + css

	static resetTheme() {
		this.css = theme() + css
	}

	static defaultProps = {
		total: 0,
		pageSize: 10,
		numDisplay: 5,
		currentPage: 0,
		numEdge: 3,
		linkTo: '#',
		prevText: 'Prev',
		nextText: 'Next',
		ellipseText: '...',
		prevShow: true,
		nextShow: true

	}

	static propTypes = {
		total: Number,
		pageSize: Number,
		numDisplay: Number,
		currentPage: Number,
		numEdge: Number,
		linkTo: String,
		prevText: String,
		nextText: String,
		ellipseText: String,
		prevShow: Boolean,
		nextShow: Boolean
	}

	pageNum: number
	beforeRender() {
		this.pageNum = Math.ceil(this.props.total / this.props.pageSize)
	}

	installed(){
		this.addEventListener('change', function (evt:CustomEvent) {
			this.setAttribute('current-page',evt.detail)
		})
	}

	goto(index) {
		this.props.currentPage = index
		this.fire('change', index)
		this.update()
	}

	render(props) {
		let arr = []
		let interval = this.getInterval()

		if (interval[0] > 0 && props.numEdge > 0) {
			let end = Math.min(props.numEdge, interval[0])
			for (var i = 0; i < end; i++) {
				arr.push(this.getItem(i, i + 1))
			}

			if (props.numEdge < interval[0] && props.ellipseText) {
				arr.push(<li class="o-icon more btn-quicknext o-icon-more" />)
			}
		}

		for (var i = interval[0]; i < interval[1]; i++) {
			arr.push(this.getItem(i, i + 1))
		}

		if (interval[1] < this.pageNum && props.numEdge > 0) {
			if (this.pageNum - props.numEdge > interval[1] && props.ellipseText) {
				arr.push(<li class="o-icon more btn-quicknext o-icon-more" />)
			}
			let begin = Math.max(this.pageNum - props.numEdge, interval[1])
			for (var i = begin; i < this.pageNum; i++) {
				arr.push(this.getItem(i, i + 1))
			}
		}

		return (
			<div {...extractClass(props, 'o-pagination is-background')}>
				{props.prevShow && this.getPrev()}{' '}
				<ul class="o-pager">
					{arr.map(p => {
						return p
					})}
				</ul>{' '}
				{props.nextShow && this.getNext()}
			</div>
		)
	}

	getInterval() {
		let ne_half = Math.ceil(this.props.numDisplay / 2)
		let upper_limit = this.pageNum - this.props.numDisplay
		let start =
			this.props.currentPage > ne_half
				? Math.max(Math.min(this.props.currentPage - ne_half, upper_limit), 0)
				: 0
		let end =
			this.props.currentPage > ne_half
				? Math.min(this.props.currentPage + ne_half, this.pageNum)
				: Math.min(this.props.numDisplay, this.pageNum)
		return [start, end]
	}

	getPrev() {
		if (this.props.currentPage === 0) {
			return (
				<button type="button" class="btn-prev" disabled>
					<svg
						viewBox="64 64 896 896"
						class=""
						data-icon="left"
						width="1em"
						height="1em"
						fill="currentColor"
						aria-hidden="true"
					>
						<path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" />
					</svg>
				</button>
			)
		}

		return (
			<button
				type="button"
				class="btn-prev"
				onClick={e => {
					this.goto(this.props.currentPage - 1)
				}}
			>
				<svg
					viewBox="64 64 896 896"
					class=""
					data-icon="left"
					width="1em"
					height="1em"
					fill="currentColor"
					aria-hidden="true"
				>
					<path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" />
				</svg>
			</button>
		)
	}

	getNext() {
		if (this.props.currentPage === this.pageNum - 1) {
			return (
				<button type="button" class="btn-next" disabled>
					<svg
						viewBox="64 64 896 896"
						class=""
						data-icon="right"
						width="1em"
						height="1em"
						fill="currentColor"
						aria-hidden="true"
					>
						<path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z" />
					</svg>
				</button>
			)
		}

		return (
			<button
				type="button"
				class="btn-next"
				onClick={e => {
					this.goto(this.props.currentPage + 1)
				}}
			>
				<svg
					viewBox="64 64 896 896"
					class=""
					data-icon="right"
					width="1em"
					height="1em"
					fill="currentColor"
					aria-hidden="true"
				>
					<path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z" />
				</svg>
			</button>
		)
	}

	getItem(pageIndex, text) {
		if (this.props.currentPage === pageIndex) {
			return <li class="number active">{text}</li>
		}
		return (
			<li
				class="number"
				onClick={e => {
					this.goto(pageIndex)
				}}
			>
				{text}
			</li>
		)
	}
}
