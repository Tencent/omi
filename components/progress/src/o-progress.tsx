import { WeElement, h, tag, define } from 'omi'
import * as css from "./o-progress.css"
import '@omiu/icon/check-circle-rounded'
import '@omiu/icon/highlight-off-rounded'
import '@omiu/icon/check-rounded'
import '@omiu/icon/close-rounded'

interface Props {
  type?: 'line' | 'circle';
  percent?: number;
  status?: 'success' | 'error';
  strokeColor?: string;
  trailColor?: string;
  textColor?:String,
  style?: string;
  strokeWidth:number;
  width:number;
}

const status2color = {
  'success' : "#07c160",
  'error':"red"
}

const status2icon = {
  'success' : <o-icon-check-circle-rounded></o-icon-check-circle-rounded>,
  'error':<o-icon-highlight-off-rounded></o-icon-highlight-off-rounded>
}

@tag("o-progress")
export default class extends WeElement<Props> {
  static css = css.default

  static defaultProps = {
    type: 'line',
    percent: 30,
    status: undefined,
    strokeColor: "#07c160",
    trailColor: "#f5f5f5",
    textColor:"black",
    strokeWidth:8,
    width:300,
  }

  percentage:any

  static propTypes = {
    type: String,
    percent: Number,
    status: String,  
    strokeColor: String,
    trailColor: String,
    textColor:String,
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
    return (
      <div >
        <div className="o-progress__outer" style={{width:width}}>
          <div className="o-progress__bar"style={{backgroundColor:trailColor}}>
            <div className="o-progress__inner-bar" style={{
              width:`${percent}%`,
              backgroundColor:status?status2color[status]:strokeColor,
              height:strokeWidth
              }}></div>
          </div>
        </div>
        <span className="o-progress-text" style={{fontSize:strokeWidth*1.75,color:textColor}}>
          {status?<span style={{color:status?status2color[status]:strokeColor}}>{status2icon[status]}</span>
          :`${percent}%`}</span>
      </div>
    )
  }
}
