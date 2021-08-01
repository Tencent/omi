import { WeElement, h, tag, define } from 'omi'
import * as css from "./Line.css"
import '@omiu/icon/check-circle-rounded'
import '@omiu/icon/cancel-rounded'
import '@omiu/icon/check-rounded'
import '@omiu/icon/close-rounded'
interface Props {
  type?: 'circle';
  percent?: number;
  status?: 'success' | 'error';
  strokeColor?: string;
  trailColor?: string;
  style?: string;
  strokeWidth:number;
  width:number;
}

const status2color = {
  'success' : "#09BB07",
  'error':"#F43530"
}

const status2icon= {
  'success' : 
     <o-icon-check-circle-rounded ></o-icon-check-circle-rounded>,
  'error':
     <o-icon-cancel-rounded ></o-icon-cancel-rounded>
}

@tag("o-progress-line")
export default class extends WeElement<Props> {
  static css = css.default

  static defaultProps = {
    type: 'line',
    percent: 30,
    status: undefined,
    strokeColor: undefined,
    trailColor: undefined,
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
      strokeWidth,
      width,
    }  = props
    return (
      <div >
        <div className="o-progress__outer" style={{width:width}}>
          <div className="o-progress__bar" style={{backgroundColor:trailColor}}>
            <div className="o-progress__inner-bar" style={{
              width:`${percent}%`,
              backgroundColor:status?status2color[status]:strokeColor,
              height:strokeWidth
              }}></div>
          </div>
        </div>
        <span className="o-progress-text" style={{fontSize:strokeWidth*1.75}}>
          {status?<span style={{color:status?status2color[status]:strokeColor}}>{status2icon[status]}</span>
        :`${percent}%`}</span>
      </div>
    )
  }
}
