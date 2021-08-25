import { tag, WeElement, h, extractClass} from '../node_modules/omi/dist/omi'
import * as css from './index.scss'
export interface InputNumberProps {
    /**
     * 值
     */
    value?: string,
    /**
     * 尺寸
     */
    size?: 'medium' | 'small' | 'mini',
    /**
     * 布局风格
     */
    style?:'justify'| 'right' |'left',
    /**
     * 布局风格
     */
    disabled?:boolean,
    /**
     * 步长
     */
    step?:number,
    /**
     * 严格步长
     */
    strictly?:boolean,
    /**
     * 最大值
    */
    max?:number,
    /**
     * 最小值
    */
    min?:number,
    /**
     * 精度
    */
    precision?:number
  }
  
  @tag('o-input-number')
  export default class InputNumber extends WeElement<InputNumberProps> {
  
    static css = css.default ? css.default : css
  
    static defaultProps:InputNumberProps = {
      value: '1',
      size:'medium',
      style:'justify',
      step:1,
      strictly:false,
      disabled:false,
      max:Infinity,
      min:-Infinity,
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
    __$value=1
    preValue=1
    install() {
      this.props.value=Number.parseFloat(this.props.value).toFixed(this.props.precision)
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
    valueAdd=1
    valueSub=1
    inputErro=false
    _onSetValue = (value) => {
      this.__$value = value
      this.props.value = value
      //precision
      if(this.props.precision!=0 ) this.handlePrecision(value)
      else{
        this.setAttribute('value',value)
      }
    }
    handlePrecision=(value)=>{
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
      this.setAttribute('value',value)
    }
    handleInput = (evt) => {
      evt.stopPropagation()
      this.__$value=evt.target.value
      if(parseFloat(evt.target.value)>=this.props.min && parseFloat(evt.target.value)<=this.props.max)
      {         
          this._onSetValue(evt.target.value)    
      }
      if(this.props.strictly==true&&((Math.abs(this.preValue-this.__$value)%this.props.step!=0)))
      {// program should correct the number when input is not right under the mode of strict.
        this.inputErro=true
        this.valueAdd=this.preValue+this.props.step*2
        this.valueSub=this.preValue-this.props.step
      }
    }
    add=()=>{
      let value=Number(this._onGetValue())
      this.preValue=value
      if(value+this.props.step<=this.props.max)
      {
        value+=this.props.step
        this._onSetValue(Number.parseFloat(value).toFixed(this.props.precision))
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
        this._onSetValue(Number.parseFloat(value).toFixed(this.props.precision))
      }
      if(this.inputErro==true)
      {
        this._onSetValue(this.valueSub)
        this.inputErro=false
      }
    }
    render(props: InputNumberProps) {
      const extractedClass=extractClass(props,'o-input-number',{
        'is-disabled': this.props.disabled,
        ['o-input-number-' + props.size]: props.size
      })
      return (
        <div {...extractedClass}>
          <button 
            {...extractClass(props, 'o-button','o-button-sub',
            {
                ['o-button-sub-'+ props.style]:props.style,
                'o-button-sub-disabled':Number(props.value)-props.step<props.min
              })}
           onClick={this.subtraction}>
              -</button>
          <input 
            {...extractClass(props, 'o-input',{
              ['o-input-' + props.style]: props.style
            })}
              value={props.value}
              size={props.size}    
              onInput={this.handleInput} 
          ></input>
          <button
          {...extractClass(props, 'o-button', 'o-button-add', 
          { 
            ['o-button-add-'+ props.style]:props.style,
            'o-button-add-disabled':Number(props.value)+props.step>props.max
          }
          )}
          onClick={this.add}>
          +</button>
        </div>
      )
    }
   }
   declare global {
    interface HTMLElementTagNameMap {
      'o-input-number': InputNumber
    }
  }