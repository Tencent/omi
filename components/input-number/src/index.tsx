import { tag, WeElement, h, extractClass} from 'omi'
import * as css from './index.scss'

interface Props {
  value?: string,
  size?: 'medium' | 'small' | 'mini',
  style?:'justify'| 'right' |'left',
  disabled?:boolean,
  step?:number,
  strictly?:boolean,
  max?:number,
  min?:number,
  precision?:number
}

@tag('o-input-number')
export default class InputNumber extends WeElement<Props> {
  static css = css
  static defaultProps = {
    value: '1',
    size:'medium',
    style:'justify',
    step:1,
    strictly:false,
    disabled:false,
    max:Number.MAX_VALUE,
    min:1,
    precision:0
  }
  static propTypes = {
    value:String,
    size:String,
    style:String,
    step:Number,
    strictly:Boolean,
    disabled:Boolean,
    max:Number,
    min:Number,
    precision:Number
  }
  __$value:number
  preValue:number
  install() {
    this.__$value = Number(this.props.value)
    this.preValue=Number(this.props.value)
    Object.defineProperty(this, 'value', {
      get: this._onGetValue,
      set: this._onSetValue
    })
  }
  _onGetValue = () => {
    return this.props.value
  }
  valueAdd:number
  valueSub:number
  inputErro:boolean
  _onSetValue = (value) => {
    // console.log('pre',this.preValue)
    // console.log(this.__$value)
    if(this.props.strictly==true&&((Math.abs(this.preValue-this.__$value)%this.props.step!=0)))
    {// program should correct the number when input is not right under the mode of strict.
      this.inputErro=true
      this.valueAdd=this.preValue+this.props.step*2
      this.valueSub=this.preValue-this.props.step
    }
    this.__$value = value
    this.props.value = value
    this.setAttribute('value',value)
    //precision
    if(this.props.precision!=0 ){
      var s=value.toString()
      var rs=s.indexOf('.')
      if(rs<0){
        rs=s.length;
        s+='.'
      }
      while(s.length<=rs+this.props.precision)
      {
        s+='0'
      }
      this.setAttribute('value', Number.parseFloat(s).toFixed(this.props.precision))
    }
    else
    {
      this.setAttribute('value', Number.parseFloat(value).toFixed(this.props.precision))
    }
  }
  handleInput = (evt) => {
    evt.stopPropagation()
    this.__$value=evt.target.value
    if(parseFloat(evt.target.value)>=this.props.min && parseFloat(evt.target.value)<=this.props.max)
    {         
        this._onSetValue(evt.target.value)
        this.fire('input', this.props.value)     
    }
  }
  handleChange = (evt) => {
    this.__$value =evt.target.value
    this.props.value = evt.target.value
    this.fire('change', this.props.value)
  }
  add=()=>{
    let value=Number(this._onGetValue())
    this.preValue=value
    if(value+this.props.step<=this.props.max)
    {
      value+=this.props.step
      this._onSetValue(value)
    }
    if(this.inputErro==true)
    {
      this._onSetValue(this.valueAdd)
      this.inputErro=false
    }
  }
  subtraction=()=>{
    let value=Number(this._onGetValue())
    this.preValue=value
    if(value-this.props.step>=this.props.min)
    {
      value-=this.props.step
      this._onSetValue(value)
    }
    if(this.inputErro==true)
    {
      this._onSetValue(this.valueSub)
      this.inputErro=false
    }
  }
  render(props) {
    const { value,style,size,disabled,step,max,min,strictly,precision,onMouseEnter, onMouseLeave,...otherProps} = props;
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
          {...extractClass(props, 'o-button','o-button-sub',
          {
              'is-disabled': this.props.disabled,
              ['o-button-' + props.size]: props.size,
              ['o-button-sub-'+ props.style]:props.style,
              'o-button-sub-disabled':parseFloat(this.props.value)-this.props.step<this.props.min
            })}
          onClick={this.subtraction}
        >-</button>
        <input 
          {...extractClass(props, 'o-input',{
            ['o-input-' + props.size]: props.size,
            ['o-input-' + props.style]: props.style
          })}
            value={Number.parseFloat(props.value).toFixed(this.props.precision)}
            size={props.size}    
            onInput={this.handleInput} 
            onChange={this.handleChange}
        ></input>
        <button
        {...extractClass(props, 'o-button', 'o-button-add', 
        { 
          'is-disabled': this.props.disabled,
          ['o-button-'+props.size]: props.size,
          ['o-button-add-'+ props.style]:props.style,
          'o-button-add-disabled':parseFloat(this.props.value)+this.props.step>this.props.max
        }
        )}
        onClick={this.add}>+</button>
      </div>
    )
  }
 }
