import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'
//@ts-ignore
import '../theme.ts'

interface Props {
  total: number
  half: boolean
  value: number
}

@tag('m-rate')
export default class Rate extends WeElement<Props>{
  static css = css

  static defaultProps = {
    value: 0
  }

  static propTypes = {
    value: Number,
    half: Boolean,
    total: Number,
    color: String
  }

  _current = 0

  _rect = null

  _hover = false

  onSelect = (evt) => {
    this._rect = this.base.getBoundingClientRect()
    const dx = evt.pageX - this._rect.left
    const value = dx / this._rect.width * this.props.total
    const intValue = Math.floor(value)
    let v = intValue + (value - intValue > 0.5 ? 1 : 0.5)
    if(!this.props.half) v = Math.ceil(v)

    this.props.value = v
    //@ts-ignore
    this.fire('selected', v)
    this.update()
  }

  onMouseMove = (evt) => {
    this._rect = this.base.getBoundingClientRect()
    const dx = evt.pageX - this._rect.left
    this._current = dx / this._rect.width * this.props.total
    this.update()
  }

  base:HTMLElement

  installed(){
    this.base = this.shadowRoot.querySelector('ul')
    //update 不再从 attr 取 prop
    this.normalizedNodeName = 'm-rate'
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
      if (this.props.half && current - i <= 0.5) {
        return '_star _star-half '
      }
      return '_star'
    } else {
      return '_star _star-empty '
    }
  }

  render(props) {
    return (
      <ul onMouseMove={this.onMouseMove} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} onClick={this.onSelect} {...extractClass(props, "m-rate")} >

        {Array.apply(0, Array(props.total)).map((x, i) =>
          <li class={this._getClass(i, this._hover ? this._current : props.value)}>
            <div class='star-box'>
              <div class="_star-first">
                <i class="anticon anticon-star">
                  <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em"  fill={props.color || "#f57c00"} viewBox="0 0 18 18"><path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z" /><path fill="none" d="M0 0h18v18H0z" /></svg>
                </i>
              </div>
              <div class="_star-second">
                <i class="anticon anticon-star">
                  <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="#E8E8E8"  viewBox="0 0 18 18"><path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z" /><path fill="none" d="M0 0h18v18H0z" /></svg>
                </i>
              </div>
            </div>
          </li>
        )}

      </ul>
    )
  }
}
