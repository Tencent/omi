import { WeElement, h, tag, define } from 'omi'
import * as css from './index.css'
import '@omiu/icon/check-circle-rounded'
import '@omiu/icon/cancel-rounded'
import '@omiu/icon/check-rounded'
import '@omiu/icon/close-rounded'

const status2color = {
  'success': "#09BB07",
  'error': "#F43530",
  'trailColorDefault':"#f5f5f5"
}

const type_status2icon = {
  'circle':{
    'success':
      <o-icon-check-rounded ></o-icon-check-rounded>,
    'error':
      <o-icon-close-rounded ></o-icon-close-rounded>
  },
  'line':{
    'success' : 
       <o-icon-check-circle-rounded ></o-icon-check-circle-rounded>,
    'error':
       <o-icon-cancel-rounded ></o-icon-cancel-rounded>
  }
}

interface Props {
  type?: 'line' | 'circle';
  percent?: number;
  status?: 'success' | 'error' ;
  strokeColor?: string;
  trailColor?: string;
  style?: string;
  strokeWidth?: number;
  width?: number;
  textColor?:string;
}

const state = (data, base) => new Proxy(data, {
  set: function (target, propKey, value, receiver) {
    Reflect.set(target, propKey, value, receiver);
    base.update()
    return true
  }
})
@tag("o-progress")
export default class extends WeElement<Props> {
  static css = css

  static defaultProps = {
    type: 'line',
    percent: 0,
    status: undefined,
    strokeColor: undefined,
    trailColor: undefined,
    strokeWidth: undefined,
    width: undefined,
    textColor:undefined
  }

  static propTypes = {
    type: String,
    percent: Number,
    status: String,
    strokeColor: String,
    trailColor: String,
    strokeWidth: Number,
    width: Number,
    textColor:String
  }

  _state: any
  setPercent: object

  install() {
    this._state = state({
      percent: this.props.percent
    }, this)
    this.setPercent = function (percent) {
      this._state.percent = percent
    }
  }

  render(props) {
    const {
      type,
      status,
      strokeColor,
      trailColor,
      strokeWidth=props.strokeWidth?props.strokeWidth:(props.type==="line"?8:6),
      width=props.width?props.width:(props.type==="line"?160:120),
      textColor=props.textColor?props.textColor:"black"
    } = props
    
    const percent = this._state.percent
    const isSuccess=percent>=100?true:false

    if (type === "circle") {
      const radius = width / 2 - strokeWidth
      const len = 2 * Math.PI * radius


    return (
      <div style={{width:width,height:width}} >
        <div className="o-progress-circle__inner">
          <svg width={width} heigth={width} class="o-progress-circle-trail" viewBox={`0 0 ${width} ${width}`}>
            <circle cx={width / 2} cy={width / 2} r={radius} stroke={trailColor} stroke-width={strokeWidth} fill-opacity="0" ></circle>
    
            <path d={`M ${width / 2},${width / 2} m 0,${width / 2 - strokeWidth}
   a ${width / 2 - strokeWidth},${width / 2 - strokeWidth} 0 1 1 0,-${(width / 2 - strokeWidth) * 2}
   a ${width / 2 - strokeWidth},${width / 2 - strokeWidth} 0 1 1 0,${(width / 2 - strokeWidth) * 2}`} stroke-linecap="round" 
   stroke={strokeColor||status2color[status]||(isSuccess?status2color["success"]:undefined)||"#1890ff"} stroke-width={strokeWidth} opacity="1" fill-opacity="0"
              style={`
               stroke-dasharray: ${(percent / 100) * (len)}px ${len}px;
                stroke-dashoffset: 0px;
                 transition: stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s ease 0s, stroke-width 0.06s ease 0.3s, opacity ease 0s;`}></path>
          </svg>
          <span className="o-progress-circle-text" style={{fontSize:(width-strokeWidth*2)*1.75/6}}>
          {(!status&&!isSuccess)?<span style={{color:textColor}}>{percent}%</span>:<span style={{color:status2color[status]||isSuccess?status2color["success"]:"#1890ff",fontSize:"2em"}}>{type_status2icon["circle"][status]||type_status2icon["circle"]["success"]}</span>}
          </span>
        </div>
      </div>
    )

    } else {
    return (
      <div >
        <div className="o-progress-line__outer" style={{width:width}}>
          <div className="o-progress-line__bar" style={{backgroundColor:trailColor}}>
            <div className="o-progress-line__inner-bar" style={{
              width:`${percent}%`,
              backgroundColor:strokeColor||status2color[status]||(isSuccess?status2color["success"]:undefined)||"#1890ff",
              height:strokeWidth
              }}></div>
          </div>
        </div>
        <span className="o-progress-line-text" style={{fontSize:strokeWidth*1.75}}>
          {(!status&&!isSuccess)?<span style={{color:textColor}}>{percent}%</span>:
          <span style={{color:status2color[status]||isSuccess?status2color["success"]:"#1890ff"}}>{type_status2icon["line"][status]||type_status2icon["line"]["success"]}</span>}
          </span>
      </div>
    )
    }

  }
}
