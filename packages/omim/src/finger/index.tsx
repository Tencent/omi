import { tag, WeElement, h } from 'omi'

//@ts-ignore
interface Props {

}

@tag('m-finger')
export default class Finger extends WeElement<Props>{
  
  static css = `:host {
  display: inline-block;
}`

  preV = { x: null, y: null };
  pinchStartLen = null;
  scale = 1;
  isSingleTap = false;
  isDoubleTap = false;
  delta = null;
  last = null;
  now = null;
  end = null;
  multiTouch = false;
  tapTimeout = null;
  longTapTimeout = null;
  singleTapTimeout = null;
  swipeTimeout = null;
  x1 = null
  x2 = null
  y1 = null
  y2 = null;
  preTapPosition = { x: null, y: null };

  // Disable taps after longTap
  afterLongTap = false;
  afterLongTapTimeout = null;

  install() {

    this._handleTouchStart = this._handleTouchStart.bind(this)
    this._handleTouchMove = this._handleTouchMove.bind(this)
    this._handleTouchCancel = this._handleTouchCancel.bind(this)
    this._handleTouchEnd = this._handleTouchEnd.bind(this)

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

  _handleTouchStart(evt) {
    //this.fire('touchstart', evt);
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
      this.fire('multipointstart', evt);
    } else {
      this.isSingleTap = true;
    }
    this.longTapTimeout = setTimeout(() => {
      this.fire('longtap', evt);
      this.afterLongTap = true;
      this.afterLongTapTimeout = setTimeout(() => {
        this.afterLongTap = false;
      }, 1000);
    }, 750);
  }

  _handleTouchMove(evt) {
    //this.fire('touchmove', evt);
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
          this.fire('pinch', evt);
        }
        evt.angle = this.getRotateAngle(v, preV);
        this.fire('rotate', evt);
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
      this.fire('pressmove', evt);
    }
    this._cancelLongTap();
    this.x2 = currentX;
    this.y2 = currentY;

    if (len > 1) {
      evt.preventDefault();
    }
  }

  _handleTouchCancel(evt) {
    //this.fire('touchcancel', evt);
    clearInterval(this.singleTapTimeout);
    clearInterval(this.tapTimeout);
    clearInterval(this.longTapTimeout);
    clearInterval(this.swipeTimeout);
  }

  _handleTouchEnd(evt) {
    //this.fire('touchend', evt);
    this.end = Date.now();
    this._cancelLongTap();

    if (this.multiTouch === true && evt.touches.length < 2) {
      this.fire('multipointend', evt);
    }

    evt.origin = [this.x1, this.y1];
    if (this.multiTouch === false) {
      if ((this.x2 && Math.abs(this.x1 - this.x2) > 30) ||
        (this.y2 && Math.abs(this.y1 - this.y2) > 30)) {
        evt.direction = this._swipeDirection(this.x1, this.x2, this.y1, this.y2);
        evt.distance = Math.abs(this.x1 - this.x2);
        this.swipeTimeout = setTimeout(() => {
          this.fire('swipe', evt);
        }, 0);
      } else {
        if (this.afterLongTap) {
          clearTimeout(this.afterLongTapTimeout);
          this.afterLongTap = false;
        } else {
          this.tapTimeout = setTimeout(() => {
            //this.fire('tap', evt);
            if (this.isDoubleTap) {
              this.fire('doubletap', evt);
              clearTimeout(this.singleTapTimeout);
              this.isDoubleTap = false;
            } else if (this.isSingleTap) {
              this.singleTapTimeout = setTimeout(() => {
                this.fire('singletap', evt);
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
    return Math.abs(x1 - x2) >=
      Math.abs(y1 - y2) ? (x1 - x2 > 0 ? 'Left' : 'Right') : (y1 - y2 > 0 ? 'Up' : 'Down')
  }

  installed(){
    const ele = this.childNodes[0]
    ele.addEventListener('touchstart', this._handleTouchStart)
    ele.addEventListener('touchmove', this._handleTouchMove)
    ele.addEventListener('touchcancel', this._handleTouchCancel)
    ele.addEventListener('touchend', this._handleTouchEnd)
  }

  render() {
    return <slot></slot>
  }
}
