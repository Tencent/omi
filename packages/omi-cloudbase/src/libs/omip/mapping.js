const map = {
  'view': 'div',
  'text': 'span'
}

export function mapping(name) {

  return map[name] || name

}