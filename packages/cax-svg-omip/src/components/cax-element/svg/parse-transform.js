import mt from '../render/base/matrix-transform'
import Matrix2D from '../render/base/matrix2d'

function parse(a) {
  a = a.replace(/,/g, ' ').replace(/\s+/g, ',')
  const data = {}
  const order = []
  for (let i in (a = a.match(/(\w+\((\-?\d+\.?\d*e?\-?\d*,?)+\))+/g))) {
    const c = a[i].match(/[\w\.\-]+/g)
    const key = c.shift()
    order.push(key)
    data[key] = c
  }
  return {
    order: order,
    data: data
  }
}

export function transform(props, target) {
  if (!props) return

  if (props.transform) {
    const obj = parse(props.transform)
    const args = []
    obj.order.forEach(prop => {
      if (prop === 'rotate') {
        obj.data[prop][0] *= Math.PI / 180
        if (obj.data[prop].length > 1) {
          target.originX = obj.data[prop][1] * -1
          target.originY = obj.data[prop][2] * -1
        }
      }
      args.push(mt[prop].apply(null, obj.data[prop]))
    })

    const mts = mt.compose.apply(null, args)

    const t = {}
    Matrix2D.decompose(mts.a, mts.b, mts.c, mts.d, mts.e, mts.f, t)

    target.rotation = (t.rotation * 180) / Math.PI

    target.x += parseFloat(t.x)
    target.y += t.y

    target.scaleY = t.scaleY
    target.scaleX = t.scaleX
    target.skewX = t.skewX
    target.skewY = t.skewY
  }

  if (props.width && props.height) {
    target.width = parseFloat(props.width)
    target.height = parseFloat(props.height)
  }
}
