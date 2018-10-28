import { WeElement, define, cloneElement } from 'omi'

class OmiFinger extends WeElement {
  install() {

    this.preV = { x: null, y: null };
    this.pinchStartLen = null;
    this.scale = 1;
    this.isSingleTap = false;
    this.isDoubleTap = false;
    this.delta = null;
    this.last = null;
    this.now = null;
    this.end = null;
    this.multiTouch = false;
    this.tapTimeout = null;
    this.longTapTimeout = null;
    this.singleTapTimeout = null;
    this.swipeTimeout = null;
    this.x1 = this.x2 = this.y1 = this.y2 = null;
    this.preTapPosition = { x: null, y: null };

    // Disable taps after longTap
    this.afterLongTap = false;
    this.afterLongTapTimeout = null;

    this._handleTouchStart = this._handleTouchStart.bind(this)
    this._handleTouchMove = this._handleTouchMove.bind(this)
    this._handleTouchCancel = this._handleTouchCancel.bind(this)
    this._handleTouchEnd = this._handleTouchEnd.bind(this)

    this.css = this.parentNode.parentNode.host.css
  }

  getLen(v) {
    return Math.sqrt(v.x * v.x + v.y * v.y);
  }

  dot(v1, v2) {
    return v1.x * v2.x + v1.y * v2.y;
  }

  getAngle(v1, v2) {
    var mr = this.getLen(v1) * this.getLen(v2);
    if (mr === 0) return 0;
    var r = this.dot(v1, v2) / mr;
    if (r > 1) r = 1;
    return Math.acos(r);
  }

  cross(v1, v2) {
    return v1.x * v2.y - v2.x * v1.y;
  }

  getRotateAngle(v1, v2) {
    var angle = this.getAngle(v1, v2);
    if (this.cross(v1, v2) > 0) {
      angle *= -1;
    }

    return angle * 180 / Math.PI;
  }

  _resetState() {
    this.setState({
      x: null,
      y: null,
      swiping: false,
      start: 0
    });
  }


  _emitEvent(name, ...arg) {
    if (this.props[name]) {
      this.props[name](...arg);
    }
  }

  _handleTouchStart(evt) {
    this._emitEvent('onTouchStart', evt);
    if (!evt.touches) return;
    this.now = Date.now();
    this.x1 = evt.touches[0].pageX;
    this.y1 = evt.touches[0].pageY;
    this.delta = this.now - (this.last || this.now);
    if (this.preTapPosition.x !== null) {
      this.isDoubleTap = (this.delta > 0 && this.delta <= 250 && Math.abs(this.preTapPosition.x - this.x1) < 30 && Math.abs(this.preTapPosition.y - this.y1) < 30);
    }
    this.preTapPosition.x = this.x1;
    this.preTapPosition.y = this.y1;
    this.last = this.now;
    var preV = this.preV,
      len = evt.touches.length;

    if (len > 1) {
      this._cancelLongTap();
      this._cancelSingleTap();
      var v = { x: evt.touches[1].pageX - this.x1, y: evt.touches[1].pageY - this.y1 };
      preV.x = v.x;
      preV.y = v.y;
      this.pinchStartLen = this.getLen(preV);
      this._emitEvent('onMultipointStart', evt);
    } else {
      this.isSingleTap = true;
    }
    this.longTapTimeout = setTimeout(() => {
      this._emitEvent('onLongTap', evt);
      this.afterLongTap = true;
      this.afterLongTapTimeout = setTimeout(() => {
        this.afterLongTap = false;
      }, 1000);
    }, 750);
  }

  _handleTouchMove(evt) {
    this._emitEvent('onTouchMove', evt);
    var preV = this.preV,
      len = evt.touches.length,
      currentX = evt.touches[0].pageX,
      currentY = evt.touches[0].pageY;
    this.isSingleTap = false;
    this.isDoubleTap = false;
    if (len > 1) {
      var v = { x: evt.touches[1].pageX - currentX, y: evt.touches[1].pageY - currentY };
      if (preV.x !== null) {
        if (this.pinchStartLen > 0) {
          evt.center = {
            x: (evt.touches[1].pageX + currentX) / 2,
            y: (evt.touches[1].pageY + currentY) / 2
          };
          evt.scale = evt.zoom = this.getLen(v) / this.pinchStartLen;
          this._emitEvent('onPinch', evt);
        }
        evt.angle = this.getRotateAngle(v, preV);
        this._emitEvent('onRotate', evt);
      }
      preV.x = v.x;
      preV.y = v.y;
      this.multiTouch = true;
    } else {
      if (this.x2 !== null) {
        evt.deltaX = currentX - this.x2;
        evt.deltaY = currentY - this.y2;
      } else {
        evt.deltaX = 0;
        evt.deltaY = 0;
      }
      this._emitEvent('onPressMove', evt);
    }
    this._cancelLongTap();
    this.x2 = currentX;
    this.y2 = currentY;

    if (len > 1) {
      evt.preventDefault();
    }
  }

  _handleTouchCancel() {
    this._emitEvent('onTouchCancel', evt);
    clearInterval(this.singleTapTimeout);
    clearInterval(this.tapTimeout);
    clearInterval(this.longTapTimeout);
    clearInterval(this.swipeTimeout);
  }

  _handleTouchEnd(evt) {
    this._emitEvent('onTouchEnd', evt);
    this.end = Date.now();
    this._cancelLongTap();

    if (this.multiTouch === true && evt.touches.length < 2) {
      this._emitEvent('onMultipointEnd', evt);
    }

    evt.origin = [this.x1, this.y1];
    if (this.multiTouch === false) {
      if ((this.x2 && Math.abs(this.x1 - this.x2) > 30) ||
        (this.y2 && Math.abs(this.y1 - this.y2) > 30)) {
        evt.direction = this._swipeDirection(this.x1, this.x2, this.y1, this.y2);
        evt.distance = Math.abs(this.x1 - this.x2);
        this.swipeTimeout = setTimeout(() => {
          this._emitEvent('onSwipe', evt);
        }, 0);
      } else {
        if (this.afterLongTap) {
          clearTimeout(this.afterLongTapTimeout);
          this.afterLongTap = false;
        } else {
          this.tapTimeout = setTimeout(() => {
            this._emitEvent('onTap', evt);
            if (this.isDoubleTap) {
              this._emitEvent('onDoubleTap', evt);
              clearTimeout(this.singleTapTimeout);
              this.isDoubleTap = false;
            } else if (this.isSingleTap) {
              this.singleTapTimeout = setTimeout(() => {
                this._emitEvent('onSingleTap', evt);
              }, 250);
              this.isSingleTap = false;
            }
          }, 0);
        }
      }
    }

    this.preV.x = 0;
    this.preV.y = 0;
    this.scale = 1;
    this.pinchStartLen = null;
    this.x1 = this.x2 = this.y1 = this.y2 = null;
    this.multiTouch = false;
  }

  _cancelLongTap() {
    clearTimeout(this.longTapTimeout);
  }

  _cancelSingleTap() {
    clearTimeout(this.singleTapTimeout);
  }

  _swipeDirection(x1, x2, y1, y2) {
    if (Math.abs(x1 - x2) > 80 || this.end - this.now < 250) {
      return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? (x1 - x2 > 0 ? 'Left' : 'Right') : (y1 - y2 > 0 ? 'Up' : 'Down');
    } else {
      return 'Nochange';
    }
  }

  render(props) {
    console.log(props.children)
    var a =  cloneElement(props.children[0], {
      onTouchStart: this._handleTouchStart,
      onTouchMove: this._handleTouchMove,
      onTouchCancel: this._handleTouchCancel,
      onTouchEnd: this._handleTouchEnd
    })
    return a
  }
}

define('omi-finger', OmiFinger)
