import { WeElement, render, h, tag, extractClass,extend, get, set,bind,unbind } from 'omi'
import * as css from './index.scss'

interface Props {
  value?: number,
  size?: 'medium' | 'small' | 'mini',
  right?: string,
  left?:string,
  disabled?:boolean,
  step?:number,
  max?:number,
  min?:number
}

@tag('o-input-number')
export default class InputNumber extends WeElement<Props> {
  static css = css.default
  static defaultProps = {
    value: 1,
    size:'medium',
    right:'right',
    left:'left',
    step:1,
    disabled:false,
    max:10,
    min:1
  }
  static propTypes = {
    value:Number,
    size:String,
    right:String,
    left:String,
    step:Number,
    disabled:Boolean,
    max:Number,
    min:Number
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
    if(Number(evt.target.value)>=this.props.min && Number(evt.target.value)<=this.props.max)
    {
      this._onSetValue(Number(evt.target.value))
    }
  }
  add=(evt)=>{
    let value=this._onGetValue()
    value+=this.props.step
    if(value<=this.props.max)
    {
      this._onSetValue(value-0)
    }
  }
  subtraction=(evt)=>{
    let value=this._onGetValue()
    value-=this.props.step
    if(value>=this.props.min)
    {
      this._onSetValue(value-0)
    }
  }
  clearInput = () => {
    this.updateProps({
      value: ''
    })
    this.__$value = ''
  }
  render(props) {
    const { value,left,right,size,disabled, max,min,onMouseEnter, onMouseLeave,...otherProps} = props;
    return (
      <div 
      {
        ...extractClass(props, 'o-input-number',
        {
          'is-disabled': this.props.disabled,
          ['o-input-number-' + props.size]: props.size
        }
        )
      }
      onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <button 
          {...extractClass(props, 'o-button', {
                  ['o-button-' + props.size]: props.size,
                  ['o-button-'+ props.left]:props.left })}
          onClick={this.subtraction} 
        >-</button>
        <input 
          {...extractClass(props, 'o-input',{
            ['o-input-' + props.size]: props.size
            
          })}
            value={props.value} 
            size={props.size}    
            onInput={this.handleInput} 
            onClick={this.clearInput}
        ></input>
        <button 
        {...extractClass(props, 'o-button', 
        {
          ['o-button-' + props.size]: props.size,
          ['o-button-'+props.right]:props.right
        }
        )}
        onClick={this.add}>+</button>
      </div>
    )
  }
 }
