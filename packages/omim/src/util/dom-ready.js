const readyCallbacks = []
document.addEventListener('DOMContentLoaded', () => {
  readyCallbacks.forEach(callback=>{
    callback()
  })
})

export function domReady(callback) {
  readyCallbacks.push(callback)
}
