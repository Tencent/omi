// if the module has no dependencies, the above pattern can be simplified to
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.domReady = factory();
  }
}(this, function () {

  const readyCallbacks = []
  document.addEventListener('DOMContentLoaded', () => {
    domReady.done = true
    readyCallbacks.forEach(callback => {
      callback()
    })
  })

  function domReady(callback) {
    if (domReady.done) {
      callback()
      return
    }
    readyCallbacks.push(callback)
  }

  domReady.done = false


  // Just return a value to define the module export.
  // This example returns an object, but the module
  // can return a function as the exported value.
  return domReady
}));
