import Bitmap from '../render/display/bitmap'
import { transform } from './parse-transform'
import { parseEvent } from './parse-event'
//import { getImageInWx } from  '../common/util'

export function image(props, scope) {
  console.log(props)
  const options = Object.assign(
    {
      x: 0,
      y: 0
    },
    props
  )

  const obj = new Bitmap(props['xlink:href'], () => {
    // const info = getImageInWx(obj.img,(info)=>{
    //   console.log(info.width)
    //   console.log(info.height)
    // })

    obj.stage.update()

  })
  transform(props, obj, Number(options.x), Number(options.y))
  parseEvent(props, obj, scope)
  return obj
}
