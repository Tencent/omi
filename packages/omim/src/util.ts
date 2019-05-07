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


const parser = new DOMParser()

export function htmlToVdom(html) {
  if(!html) return null
  return processNode(parser.parseFromString(`<div>${html}</div>`, "text/xml").childNodes[0]).children
}

function processNode(node) {
  if (node.nodeType === 1) {
    var i, child, attributes = {}, children = [];
    for (i = 0; (child = node.attributes[i]); ++i) {
      attributes[child.nodeName] = child.nodeValue;
    }
    for (i = 0; (child = node.childNodes[i]); ++i) {
      var vn = processNode(child)
      if (vn !== null)
        children.push(vn)
    }
    return {
      nodeName: node.tagName,
      attributes,
      children
    }
  }
  if (node.nodeType === 3) {
    const v = node.nodeValue.trim()
    if (v !== '') {
      return v
    }
    return null
  }
}