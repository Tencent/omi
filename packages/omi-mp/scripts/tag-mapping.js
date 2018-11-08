
var tagMapping = {
  'view': 'div',
  'text': 'span',
  'image': 'img',
  'button':'button',

}

function map(key){
  return tagMapping[key]
}

module.exports = map
