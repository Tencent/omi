export function add(css) {
  const style = document.createElement('style')
  style.textContent = rpx(css)
  document.querySelector('head').appendChild(style)
}

function rpx(str) {
  return str.replace(/([1-9]\d*|0)(\.\d*)*rpx/g, (a, b) => {
    return (window.innerWidth * Number(b)) / 750 + 'px'
  })
}
