let tagMapping = {
  view: 'div',
  text: 'span',
  image: 'img',
  picker: 'select',
  navigator: 'a',
}

function map(key) {
  if (key.indexOf('-') !== -1) {
    return key
  }
  if(tagMapping[key]){
    return tagMapping[key]
  }
  return key
}

module.exports = map
