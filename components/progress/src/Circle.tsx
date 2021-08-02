import { WeElement, h, tag, define } from 'omi'
import * as css from "./Circle.css"
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
  strokeWidth: number;
  textColorr?:string;
  width: number;
}

const status2color = {
  'success': "#09BB07",
  'error': "#F43530",
  'strokeColorDefault':"#1890ff",
  'trailColorDefault':"#f5f5f5"
}

const status2icon = {
  'success':
    <o-icon-check-rounded ></o-icon-check-rounded>,
  'error':
    <o-icon-close-rounded ></o-icon-close-rounded>
}

@tag("o-progress-circle")
export default class extends WeElement<Props> {
  static css = css.default

  static defaultProps = {
    type: 'line',
    percent: 30,
    status: undefined,
    strokeColor: undefined,
    trailColor: undefined,
    textColor: "black",
    strokeWidth: 20,
    width: 80,
  }

  percentage: any

  static propTypes = {
    percent: Number,
    status: String,
    strokeColor: String,
    trailColor: String,
    textColor: String,
    strokeWidth: Number,
    width: Number,
  }

  render(props) {
    const {
      percent,
      status,
      strokeColor,
      trailColor,
      textColor,
      strokeWidth,
      width,
    } = props
    const radius = width / 2 - strokeWidth
    const len = 2 * Math.PI * radius

    const isSuccess=percent>=100?true:false
    if(status){

    }

    return (
      <div style={{width:width,height:width}} >
        <div className="o-progress__inner">
          <svg width={width} heigth={width} class="o-progress-trail" viewBox={`0 0 ${width} ${width}`}>
            <circle cx={width / 2} cy={width / 2} r={radius} stroke={trailColor} stroke-width={strokeWidth} fill-opacity="0" ></circle>
    
            <path d={`M ${width / 2},${width / 2} m 0,${width / 2 - strokeWidth}
   a ${width / 2 - strokeWidth},${width / 2 - strokeWidth} 0 1 1 0,-${(width / 2 - strokeWidth) * 2}
   a ${width / 2 - strokeWidth},${width / 2 - strokeWidth} 0 1 1 0,${(width / 2 - strokeWidth) * 2}`} stroke-linecap="round" stroke={strokeColor||status2color[status]||(isSuccess?status2color["success"]:undefined)||status2color["strokeColorDefault"]} stroke-width={strokeWidth} opacity="1" fill-opacity="0"
              style={`
               stroke-dasharray: ${(percent / 100) * (len)}px ${len}px;
                stroke-dashoffset: 0px;
                 transition: stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s ease 0s, stroke-width 0.06s ease 0.3s, opacity ease 0s;`}></path>
          </svg>
          <span className="o-progress-text" style={{fontSize:(width-strokeWidth*2)*1.75/6,color:textColor}}>
          {status?<span style={{color:status2color[status]||strokeColor,fontSize:"2em"}}>{status2icon[status]}</span>
        :
        (isSuccess?<span style={{color:status2color["success"]||strokeColor,fontSize:"2em"}}>{status2icon["success"]}</span>:`${percent}%`)}</span>
        </div>
      </div>
    )
  }
}
