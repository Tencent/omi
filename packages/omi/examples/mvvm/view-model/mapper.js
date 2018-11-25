/**
 * Auto map object's props to object's props.
 * @method mapper
 * @param {Object} options {from: .., to: .., rule: .. }
 * @return {Object} To Object
 */
const mapper = function(options) {
  const from = options.from
  const to = options.to
  const rules = options.rule

  let res = to || {}

  Object.keys(from).forEach(key => {
    res[key] = from[key]
  })

  rules &&
    Object.keys(rules).forEach(key => {
      const rule = rules[key]
      const isPath = key.match(/\.|\[/)
      if (typeof rule === 'function') {
        if (isPath) {
          setPathValue(res, key, rule.call(from))
        } else {
          res[key] = rule.call(from)
        }
      } else {
        if (isPath) {
          setPathValue(res, key, rule)
        } else {
          res[key] = rule
        }
      }
    })
  return res
}

function setPathValue(obj, path, value) {
  const arr = path
    .replace(/]/g, '')
    .replace(/\[/g, '.')
    .split('.')

  let current = obj
  for (let i = 0, len = arr.length; i < len; i++) {
    const key = arr[i]
    let temp = current[key]
    if (i === len - 1) {
      current[arr[len - 1]] = value
    } else {
      if (temp === undefined) {
        if (isNaN(Number(arr[i + 1]))) {
          current[key] = {}
        } else {
          current[key] = []
        }

        temp = current[key]
      }
    }

    current = temp
  }
}

export default mapper
