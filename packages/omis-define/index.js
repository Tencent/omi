; (function () {

  var Omis = typeof require === 'function'
    ? require('omis')
    : window.Omis,
    h = Omis.h,
    render = Omis.render,
    hyphenateRE = /\B([A-Z])/g

    ; (function () {
      if (
        // No Reflect, no classes, no need for shim because native custom elements
        // require ES2015 classes or Reflect.
        window.Reflect === undefined ||
        window.customElements === undefined ||
        // The webcomponentsjs custom elements polyfill doesn't require
        // ES2015-compatible construction (`super()` or `Reflect.construct`).
        window.customElements.hasOwnProperty('polyfillWrapFlushCallback')
      ) {
        return
      }
      var BuiltInHTMLElement = HTMLElement
      window.HTMLElement = function HTMLElement() {
        return Reflect.construct(BuiltInHTMLElement, [], this.constructor)
      }
      HTMLElement.prototype = BuiltInHTMLElement.prototype
      HTMLElement.prototype.constructor = HTMLElement
      Object.setPrototypeOf(HTMLElement, BuiltInHTMLElement)
    })()

  function define(name, Component) {
    customElements.define(name, class extends HTMLElement {

      connectedCallback() {
        var shadowRoot = this.attachShadow({
          mode: 'open'
        })
        this.props = {}
        this.attrsToProps()
        this._ele = render(h(Component, this.props), shadowRoot)
      }

      disconnectedCallback() {

      }

      addEventListener(name, callback) {
        this._ele._component.props['on' + name.charAt(0).toUpperCase() + name.slice(1)] = callback
      }

      removeEventListener(name, callback) {
        var props = this._ele._component.props
        var eventName = 'on' + name.charAt(0).toUpperCase() + name.slice(1)
        for (var key in props) {
          if (key === eventName && callback === props[key]) {
            delete props[key]
            break
          }
        }
      }

      attrsToProps() {
        this.props['css'] = this.getAttribute('css')
        var attrs = Component.propTypes
        if (!attrs) return
        Object.keys(attrs).forEach(key => {
          var type = attrs[key]
          var val = this.getAttribute(hyphenate(key))
          if (val !== null) {
            switch (type) {
              case String:
                this.props[key] = val
                break
              case Number:
                this.props[key] = Number(val)
                break
              case Boolean:
                if (val === 'false' || val === '0') {
                  this.props[key] = false
                } else {
                  this.props[key] = true
                }
                break
              case Array:
              case Object:
                this.props[key] = JSON.parse(val
                  .replace(/(['"])?([a-zA-Z0-9_-]+)(['"])?:([^\/])/g, '"$2":$4')
                  .replace(/'([\s\S]*?)'/g, '"$1"')
                  .replace(/,(\s*})/g, '$1')
                )
                break
            }
          } else {
            if (Component.defaultProps && Component.defaultProps.hasOwnProperty(key)) {
              this.props[key] = Component.defaultProps[key]
            } else {
              this.props[key] = null
            }
          }
        })
      }
    })
  }

  function hyphenate(str) {
    return str.replace(hyphenateRE, '-$1').toLowerCase()
  }

  if (typeof module !== 'undefined' && module.exports) {
    define.default = define;
    module.exports = define;
  } else {
    window.define = define;
  }

})()