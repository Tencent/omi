import Path from '../render/display/shape/path'
import { parseStyle } from './parse-style'
import { transform } from './parse-transform'
import { parseEvent } from './parse-event'
import pathTransition from '../pasition/index'
import color from '../common/color'

export function pasition(props) {
  const lerp = color.lerp
  const obj = new Path(props.from, parseStyle(props))
  const fs = props['from-stroke']
  const ts = props['to-stroke']
  const ff = props['from-fill']
  const tf = props['to-fill']
  if(fs){
    obj.option.strokeStyle = fs
  }
  if(ff){
    obj.option.fillStyle = ff
  }
  obj.pasitionTo = props.to
  obj.pasitionFrom = props.from
  transform(props, obj)
  parseEvent(props, obj)

  let stage, isFrom = true, animating = false
  obj.toggle = () => {
    if(animating) return
    pathTransition.animate({
      from: isFrom ? props.from : props.to,
      to: isFrom ? props.to : props.from,
      duration: typeof props.duration !== "undefined" ? Number(props.duration) : 600,
      easing: function (v) { return v },
      begin: function () {
        stage = obj.stage
        animating = true
      },
      progress: function (shapes, percent) {
        obj.d = toSVGString(shapes)
        percent*=100
        if(isFrom){
          fs&&(obj.option.strokeStyle =  lerp( fs,ts,percent))
          ff &&(obj.option.fillStyle = lerp( ff,tf,percent))
        } else{
          fs&&(obj.option.strokeStyle =  lerp( ts,fs,percent))
          ff &&(obj.option.fillStyle = lerp( tf,ff,percent))
        }

        stage.update()
        //
      },
      end: function (shapes) {
        isFrom = !isFrom
        animating = false
      }
    })
  }
  return obj
}


function toSVGString(shapes) {
  return shapes.map(function (shape) {
    shape.forEach(function (point, idx) {
      if (!idx) {
        /*
         * 若是第一个点数组，那么对该点数组的处理是前面加M,然后前两个点后面加C
         * */
        point.splice(2, 0, "C");
        point.unshift("M");
      } else {
        /*
         * 除了第一个点数据外,所有的点数组的前两个点删除掉
         * */
        point.splice(0, 2, "C");
      }
    });
    return shape.map(function (point) {
      return point.join(" ");
    }).join("");
  }).join("")
};
