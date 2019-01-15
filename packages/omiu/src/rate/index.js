import { define, WeElement, extractClass } from 'omi'


define('o-rate', class extends WeElement {
  css = require('./_index.css')

  static defaultProps = {
    value: 0
  }

  _current = 0

  _rect = null

  _hover = false

  onSelect = (evt) => {
    this._rect = this.base.getBoundingClientRect()
    const dx = evt.pageX - this._rect.left
    const value = dx / this._rect.width * this.props.total
    const intValue = Math.floor(value)
    this.props.onSelect && this.props.onSelect(intValue + (value - intValue > 0.5 ? 1 : 0.5))
  }

  onMouseMove = (evt) => {
    this._rect = this.base.getBoundingClientRect()
    const dx = evt.pageX - this._rect.left
    this._current = dx / this._rect.width * this.props.total
    this.update()
  }

  onMouseEnter = () => {
    this._hover = true
  }

  onMouseLeave = () => {
    this._hover = false
    this.update()
  }

  _getClass = (i, current) => {
    if (i < current) {
      if (current - i <= 0.5) {
        return '_star _star-half '
      }
      return '_star'
    } else {
      return '_star _star-empty '
    }
  }

  render(props) {
    return (
      <ul onMouseMove={this.onMouseMove} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} onClick={this.onSelect} {...extractClass(props, "o-rate")} {...props}>

        {Array.apply(0, Array(props.total)).map((x, i) =>
          <li class={this._getClass(i, this._hover ? this._current : props.value)}>
            <div >
              <div class="_star-first">
                <i class="anticon anticon-star">
                  <svg viewBox="64 64 896 896" class="" data-icon="star" width="1em" height="1em" fill={props.color || "#F95050"} aria-hidden="true"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                  </svg>
                </i>
              </div>
              <div class="_star-second">
                <i class="anticon anticon-star">
                  <svg viewBox="64 64 896 896" class="" data-icon="star" width="1em" height="1em" fill="#E8E8E8" aria-hidden="true"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                  </svg>
                </i>
              </div>
            </div>
          </li>
        )}

      </ul>
    )
  }
})
