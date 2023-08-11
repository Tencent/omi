/**
 * kekab-case to Pascal Case
 * @param name
 */
export function pascalCase(name: string) {
  return name
    .split('-')
    .map((item: string) => {
      return item.charAt(0).toUpperCase() + item.slice(1)
    })
    .join('')
}

/**
 * extract string from content
 * @param startWith
 * @param str
 * @returns
 */
export function extract(startWith: string, str: string) {
  const start = str.indexOf(startWith)
  if (start === -1) return ''
  let end = start + startWith.length
  let stackCount = 1
  while (end < str.length) {
    if (str[end] === '}') {
      if (stackCount === 1) {
        break
      } else {
        stackCount--
      }
    } else if (str[end] === '{') {
      stackCount++
    }

    end++
  }

  return str.substring(start, end + 1)
}
