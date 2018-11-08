
var tagMapping = {
  'view': 'div',
  'text': 'span',
  'image': 'img',
  'button': 'button'

}

function map(key) {
  if (key.indexOf('-') !== -1) {
    return key
  }
  return tagMapping[key]
}

module.exports = map
