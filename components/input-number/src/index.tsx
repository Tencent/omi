import { WeElement, render, h, tag, extractClass,extend, get, set,bind,unbind } from 'omi'
import * as css from './index.scss'
import '@omiu/input'


interface Props {
  value?: number,
  size?: 'medium' | 'small' | 'mini',
  right?: string,
  left?:string
}

@tag('o-input-number')

export default class InputNumber extends WeElement<Props> {
  static css = css.default
  static defaultProps = {
    value: 1,
    size:'medium',
    width: 'auto',
    right:'right',
    left:'left'
  }
  static propTypes = {
    value: Number,
    size: String,
    width: String,
    right:String,
    left:String
  }

  __$value:number

  install() {
    this.__$value = this.props.value
    Object.defineProperty(this, 'value', {
      get: this._onGetValue,
      set: this._onSetValue
    })
  }
  _onGetValue = () => {
    return Number(this.__$value)
  }

  _onSetValue = (value) => {
    this.__$value = value
    this.props.value = value
    this.setAttribute('value', value)
  }
  
  handleInput = (evt) => {
    evt.stopPropagation()
    this.__$value = evt.target.value
    this.props.value = evt.target.value
    this.fire('input', this.props.value)
    this.update()
  }
  add=(evt)=>{
    let value=this._onGetValue()
    console.log(value)
    value+=1
    console.log(value)
    this._onSetValue(value-0)
  }
  
  subtraction=(evt)=>{
    let value=this._onGetValue()
    value-=1
    this._onSetValue(value-0)
  }
  render(props) {
    const { value,left,right,size,onMouseEnter, onMouseLeave,...otherProps} = props;
    return (
      <div css={`div {
        font-size:0;
      }`}
      onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <button 
          onClick={this.subtraction} 
          {...extractClass(props, 'o-button', {
                  ['o-button-' + props.size]: props.size,
                  ['o-button-'+props.left]:props.left })}
        >-</button>
        <o-input 
            o-model="__$value"
            value={props.value} 
            size={props.size}    
            css={`.o-input input {
              width: ${props.width};
              text-align:center;
              border-radius: 0;
              width:80px;
            }
            .o-input__inner {
              padding-right:5px;
            }`}
             onInput={this.handleInput} 
          ></o-input>
      <button 
        onClick={this.add} 
        {...extractClass(props, 'o-button', 
        {
          ['o-button-' + props.size]: props.size,
          ['o-button-'+props.right]:props.right
        }
        )}>+</button>
      </div>
    )
  }
}

render(<o-input-number></o-input-number>, '#root', {
  // if using OMI to build the whole application, ignore the attributs of DOM and use props of virtual dom
  ignoreAttrs: true
})
