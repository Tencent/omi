import Path from '../render/display/shape/path'
import { parseStyle } from './parse-style'
import { transform } from './parse-transform'
import { parseEvent } from './parse-event'
import pathTransition from '../pasition/index'

export function pasition(props) {
  const obj = new Path(props.from, parseStyle(props))
  obj.pasitionTo = props.to
  obj.pasitionFrom = props.from
  transform(props, obj)
  parseEvent(props, obj)

  let stage, isFrom = true
  obj.toggle = () => {
    pathTransition.animate({
      from: isFrom ? props.from : props.to,
      to: isFrom ? props.to : props.from,
      duration: typeof props.duration !== "undefined" ? Number(props.duration) : 600,
      easing: function (v) { return v },
      begin: function () {
        stage = obj.stage
      },
      progress: function (shapes, percent) {
        obj.d = toSVGString(shapes)
        stage.update()
        //
      },
      end: function (shapes) {
        isFrom = !isFrom
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