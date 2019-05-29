const readyCallbacks = []
document.addEventListener('DOMContentLoaded', () => {
  domReady.done = true
  readyCallbacks.forEach(callback=>{
    callback()
  })
})

export function domReady(callback) {
  if(domReady.done){
    callback()
    return
  }
  readyCallbacks.push(callback)
}

domReady.done = false