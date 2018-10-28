import { WeElement, define } from "omi";

class OmiTap extends WeElement {

	install() {
		this._handleTouchStart = this._handleTouchStart.bind(this)
		this._handleTouchEnd = this._handleTouchEnd.bind(this)
		this._x = null
		this._y = null
		this._scrollTop = null
		let p = this.parentNode
    while (p && !this.css) {
      if(p.host){
        this.css = p.host.css
      }else{
        p = p.parentNode
      }
    }
	}

	_handleTouchStart(evt) {
		this._x = evt.touches[0].pageX
		this._y = evt.touches[0].pageY
		this._scrollTop = document.body.scrollTop

	}

	_handleTouchEnd(evt) {
		if (Math.abs(evt.changedTouches[0].pageX - this._x) < 30 && Math.abs(evt.changedTouches[0].pageY - this._y) < 30 && Math.abs(document.body.scrollTop - this._scrollTop) < 30) {
			this.props.onTap(evt)
		}
	}

	render() {
		const c = this.props.children[0]
		!c.attributes && (c.attributes = {})
		Object.assign(c.attributes, {
			onTouchStart: this._handleTouchStart,
			onTouchEnd: this._handleTouchEnd
		})
		return c
	}
}

define("omi-tap", OmiTap)
