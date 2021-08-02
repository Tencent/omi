import { WeElement, h, tag, define } from 'omi'
import '@omiu/icon/check-circle-rounded'
import '@omiu/icon/cancel-rounded'
import '@omiu/icon/check-rounded'
import '@omiu/icon/close-rounded'
import './line'
import './circle'

interface Props {
  type?: 'line' | 'circle';
  percent?: number;
  status?: 'success' | 'error';
  strokeColor?: string;
  trailColor?: string;
  style?: string;
  strokeWidth:number;
  width:number;
}

@tag("o-progress")
export default class extends WeElement<Props> {

  static defaultProps = {
    type: 'line',
    percent: 0,
    status: undefined,
    strokeColor: undefined,
    trailColor: undefined,
    strokeWidth:8,
    width:undefined,
  }

  static propTypes = {
    type: String,
    percent: Number,
    status: String,
    strokeColor: String,
    trailColor: String,
    strokeWidth:Number,
    width:Number,
  }

  render(props) {
    const {
      type,
      percent,
      status,
      strokeColor,
      trailColor,
      textColor,
      strokeWidth,
      width,
    }  = props

    const obj ={
    percent,
    status,
    strokeColor,
    trailColor,
    textColor,
    strokeWidth,
    width,}
    
    const childProps ={

      }
    for(let k in obj){
        if(obj[k]){
            Reflect.set(childProps,k,obj[k])
        }
    }
    
    
    
    let progress
    if(type==="circle"){
        progress=<o-progress-circle {...childProps}></o-progress-circle>

    }else{
    progress=<o-progress-line {...childProps}></o-progress-line>
  }
    return (
      progress
    )
  }
}
