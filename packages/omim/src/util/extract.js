export function extract(props, prop) {
  if (typeof prop === 'string') {
    if (props.hasOwnProperty(prop)) {
      return { [prop]: props[prop] }
    }
  } else {
    const res = {}
    prop.forEach(key => {
      if (props.hasOwnProperty(key)) {
        res[key] = props[key]
      }
    })
    return res
  }
}

