/**
 *
 * @returns 获取 ie 浏览器版本
 */
export function getIEVersion() {
  const { userAgent } = navigator
  // 判断是否IE<11浏览器
  const isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1
  // 判断是否IE11浏览器
  const isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1
  if (isIE) {
    const reIE = new RegExp('MSIE (\\d+\\.\\d+);')
    const match = userAgent.match(reIE)
    if (!match) return -1
    const fIEVersion = parseFloat(match[1])
    return fIEVersion < 7 ? 6 : fIEVersion
  }
  if (isIE11) {
    // IE11
    return 11
  }
  // 不是ie浏览器
  return Number.MAX_SAFE_INTEGER
}
