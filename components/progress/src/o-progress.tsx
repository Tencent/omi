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
  size?: 'small';
  strokeWidth:number;
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
    size: 'small',
    strokeWidth:50
  }

  percentage:any

  static propTypes = {
    type: String,
    percent: Number,
    status: String, // normal success error 
    strokeColor: String,
    trailColor: String,
    textColor:String,
    size: String,
    strokeWidth:Number
  }
  // install(){
  //   this.percentage = state({
  //     value: this.props.percent
  //   }, this)
  // }

  render(props) {
    return (
      <div >
        <div className="o-progress__outer" style={{width:`${props.strokeWidth}%`}}>
          <div className="o-progress__bar"style={{backgroundColor:props.trailColor}}>
            <div className="o-progress__inner-bar" style={{width:`${props.percent}%`,backgroundColor:props.status?status2color[props.status]:props.strokeColor}}></div>
          </div>
        </div>
        <span className="o-progress-text" style={{color:props.status?status2color[props.status]:props.textColor}}>{props.status?status2icon[props.status]:`${props.percent}%`}</span>
      </div>
    )
  }
}
