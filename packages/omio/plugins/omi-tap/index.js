import { cloneElement, render, Component } from '../../src/omi';


class OmiTap extends Component {

	constructor() {
		super()
		this._handleTouchStart = this._handleTouchStart.bind(this)
		this._handleTouchEnd = this._handleTouchEnd.bind(this)
		this.x = null
		this.y = null 
		this.scrollTop = null
	}

	_handleTouchStart(evt) {
		this.x = evt.touches[0].pageX
        this.y = evt.touches[0].pageY
        this.scrollTop = document.body.scrollTop
	}

	_emitEvent(name, ...arg) {
        if (this.props[name]) {
            this.props[name](...arg);
        }
	}
	
	_handleTouchEnd(evt) {
		if (Math.abs(evt.changedTouches[0].pageX - this.x) < 30 && Math.abs(evt.changedTouches[0].pageY - this.y) < 30 && Math.abs(document.body.scrollTop - this.scrollTop) < 30) {
			this._emitEvent('onTap', evt);
		}
	}

	render() {

		return cloneElement(this.props.children[0], {
			onTouchStart: this._handleTouchStart,
			onTouchEnd: this._handleTouchEnd
		});
	}
}

export default OmiTap