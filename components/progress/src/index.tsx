import { WeElement, h, tag, define } from 'omi'
import * as css from './index.scss'
import '@omiu/icon/check-circle-rounded'
import '@omiu/icon/cancel-rounded'
import '@omiu/icon/check-rounded'
import '@omiu/icon/close-rounded'

const status2color = {
  'success': "#09BB07",
  'error': "#F43530",
  'active': "#1890ff",
}

const type_status2icon = {
  'circle': {
    'success':
      <o-icon-check-rounded ></o-icon-check-rounded>,
    'error':
      <o-icon-close-rounded ></o-icon-close-rounded>
  },
  'line': {
    'success':
      <o-icon-check-circle-rounded ></o-icon-check-circle-rounded>,
    'error':
      <o-icon-cancel-rounded ></o-icon-cancel-rounded>
  }
}

interface Props {
  type?: 'line' | 'circle';
  percent?: number;
  status?: 'success' | 'error' | 'active';
  strokeColor?: string;
  trailColor?: string;
  textColor?: string;
  strokeWidth?: number;
  width?: number;
  showInfo?: boolean;
}


@tag("o-progress")
export default class extends WeElement<Props> {
  static css = css

  static defaultProps = {
    type: 'line',
    percent: 0,
    status: undefined,
    strokeColor: undefined,
    trailColor: undefined,
    textColor: undefined,
    strokeWidth: undefined,
    width: undefined,
    showInfo: true
  }

  static propTypes = {
    type: String,
    percent: Number,
    status: String,
    strokeColor: String,
    trailColor: String,
    textColor: String,
    strokeWidth: Number,
    width: Number,
    showInfo: Boolean
  }

  _state: { percent: number }
  setPercent: (percent: number) => void

  install() {
    const that = this
    this.setPercent = (percent: number) => {
      if (!this._state) {
        this._state = new Proxy({
          percent: percent
        }, {
          set: function (target, propKey, value, receiver) {
            Reflect.set(target, propKey, value, receiver);
            that.update()
            return true
          }
        })
      }
      this._state.percent = percent
    }
  }

  render(props) {
    const trailColor = props.trailColor ? props.trailColor : "#f5f5f5"
    const textColor = props.textColor
    const strokeWidth = props.strokeWidth ? props.strokeWidth : (props.type === "line" ? 8 : 6)
    const width = props.width ? props.width : (props.type === "line" ? 160 : 120)
    const {
      type,
      status,
      strokeColor,
      showInfo
    } = props


    const percent = this._state ? this._state.percent : props.percent
    const isSuccess = percent >= 100 ? true : false

    if (type === "circle") {
      const radius = width / 2 - strokeWidth
      const len = 2 * Math.PI * radius


      return (
        <div style={{ width: width, height: width }} >
          <div className="o-progress-circle__inner">
            <svg width={width} heigth={width} class="o-progress-circle-trail" viewBox={`0 0 ${width} ${width}`}>
              <circle cx={width / 2} cy={width / 2} r={radius} stroke={trailColor} stroke-width={strokeWidth} fill-opacity="0" ></circle>

              <path d={`M ${width / 2},${width / 2} m 0,${width / 2 - strokeWidth}
   a ${width / 2 - strokeWidth},${width / 2 - strokeWidth} 0 1 1 0,-${(width / 2 - strokeWidth) * 2}
   a ${width / 2 - strokeWidth},${width / 2 - strokeWidth} 0 1 1 0,${(width / 2 - strokeWidth) * 2}`} stroke-linecap="round"
                stroke={strokeColor || status2color[status] || (isSuccess ? status2color["success"] : undefined) || status2color["active"]} stroke-width={strokeWidth} opacity="1" fill-opacity="0"
                style={`
               stroke-dasharray: ${(percent / 100) * (len)}px ${len}px;
                stroke-dashoffset: 0px;
                 transition: stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s ease 0s, stroke-width 0.06s ease 0.3s, opacity ease 0s;`}></path>
            </svg>
            {showInfo && (<span className="o-progress-circle-text" style={{ fontSize: (width - strokeWidth * 2) * 1.75 / 6 }}>
              {(!status && !isSuccess) || (status === "active") ? <span style={textColor?{ color: textColor }:{}}>{percent}%</span> : <span style={{ color: status2color[status || (isSuccess ? "success" : "active")], fontSize: "2em" }}>{type_status2icon["circle"][status || (isSuccess ? "success" : "active")]}</span>}
            </span>)}
          </div>
        </div>
      )

    } else {
      return (
        <div >
          <div className="o-progress-line__outer" style={{ width: width }}>
            <div className="o-progress-line__bar" style={{ backgroundColor: trailColor }}>
              <div className="o-progress-line__inner-bar" style={{
                width: `${percent}%`,
                backgroundColor: strokeColor || status2color[status] || (isSuccess ? status2color["success"] : undefined) || status2color["active"],
                height: strokeWidth
              }}></div>
            </div>
          </div>
          {showInfo && (<span className="o-progress-line-text" style={{ fontSize: strokeWidth * 1.75 }}>
            {(!status && !isSuccess) || (status === "active") ? <span style={textColor?{ color: textColor }:{}}>{percent}%</span> :
              <span style={{ color: status2color[status || (isSuccess ? "success" : "active")] }}>{type_status2icon["line"][status || (isSuccess ? "success" : "active")]}</span>}
          </span>)}
        </div>
      )
    }
  }
}
