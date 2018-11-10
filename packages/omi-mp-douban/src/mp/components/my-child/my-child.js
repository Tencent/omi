
import componentCss from './my-child.wxss'
  import { h, WeElement } from 'omi'
  import { setData } from '../../../utils/set-data'

  
import componentCss from './my-child.wxss'
  import { h, WeElement } from 'omi'
  import { setData } from '../../../utils/set-data'

  
import componentCss from './my-child.wxss'
  import { h, WeElement } from 'omi'
  import { setData } from '../../../utils/set-data'

  
import componentCss from './my-child.wxss'
  import { h, WeElement } from 'omi'
  import { setData } from '../../../utils/set-data'

  
import componentCss from './my-child.wxss'
  import { h, WeElement } from 'omi'
  import { setData } from '../../../utils/set-data'

  
import componentCss from './my-child.wxss'
  import { h, WeElement } from 'omi'
  import { setData } from '../../../utils/set-data'

  
import componentCss from './my-child.wxss'
  import { h, WeElement } from 'omi'
  import { setData } from '../../../utils/set-data'


  function css() {
    return rpx2px(componentCss)
  }
  function render() {
  
  return h('span',null,[`I am child component`])

}

import componentCss from './my-child.wxss'
import { h, WeElement } from 'omi'
import { setData } from '../../../utils/set-data'


function css() {
  return rpx2px(componentCss)
}
function render() {
  
  return h('span',null,[`I am child component`])

}

class Element extends WeElement {
  data = mpOption.data

  render = render

  css = css

  beforeRender() {}

  beforeUpdate() {}

  afterUpdate() {}

  install = function() {
    mpOption.created && mpOption.created.call(this)
    Object.keys(mpOption.methods).forEach(key => {
      if(typeof mpOption.methods[key] === 'function'){
        this[key] = mpOption.methods[key].bind(this)
      }
    })
  }

  uninstall = mpOption.detached || function() {}

  installed = function() {
    mpOption.attached && mpOption.attached.call(this)
    mpOption.ready && mpOption.ready.call(this)
  }

  triggerEvent = function(name, data) {
    this.fire(name, data)
  }

  setData = setData
}

Object.keys(mpOption.methods).forEach(key => {
  Element.prototype[key] = mpOption.methods[key]
})

customElements.define('my-child', Element)
        
  class Element extends WeElement {
    data = mpOption.data

    render = render

    css = css

    beforeRender() {}

    beforeUpdate() {}

    afterUpdate() {}

    install = function() {
      mpOption.created && mpOption.created.call(this)
      Object.keys(mpOption.methods).forEach(key => {
        if(typeof mpOption.methods[key] === 'function'){
          this[key] = mpOption.methods[key].bind(this)
        }
      })
    }

    uninstall = mpOption.detached || function() {}

    installed = function() {
      mpOption.attached && mpOption.attached.call(this)
      mpOption.ready && mpOption.ready.call(this)
    }

    triggerEvent = function(name, data) {
      this.fire(name, data)
    }

    setData = setData
  }

  Object.keys(mpOption.methods).forEach(key => {
    Element.prototype[key] = mpOption.methods[key]
  })

  customElements.define('my-child', Element)
          
  class Element extends WeElement {
    data = mpOption.data

    render = render

    css = css

    beforeRender() {}

    beforeUpdate() {}

    afterUpdate() {}

    install = function() {
      mpOption.created && mpOption.created.call(this)
      Object.keys(mpOption.methods).forEach(key => {
        if(typeof mpOption.methods[key] === 'function'){
          this[key] = mpOption.methods[key].bind(this)
        }
      })
    }

    uninstall = mpOption.detached || function() {}

    installed = function() {
      mpOption.attached && mpOption.attached.call(this)
      mpOption.ready && mpOption.ready.call(this)
    }

    triggerEvent = function(name, data) {
      this.fire(name, data)
    }

    setData = setData
  }

  Object.keys(mpOption.methods).forEach(key => {
    Element.prototype[key] = mpOption.methods[key]
  })

  function css() {
    return rpx2px(componentCss)
  }

  function render() {
  
  return h('span',null,[`I am child component`])

}

  customElements.define('my-child', Element)
          
  class Element extends WeElement {
    data = mpOption.data

    render = render

    css = css

    beforeRender() {}

    beforeUpdate() {}

    afterUpdate() {}

    install = function() {
      mpOption.created && mpOption.created.call(this)
      Object.keys(mpOption.methods).forEach(key => {
        if(typeof mpOption.methods[key] === 'function'){
          this[key] = mpOption.methods[key].bind(this)
        }
      })
    }

    uninstall = mpOption.detached || function() {}

    installed = function() {
      mpOption.attached && mpOption.attached.call(this)
      mpOption.ready && mpOption.ready.call(this)
    }

    triggerEvent = function(name, data) {
      this.fire(name, data)
    }

    setData = setData
  }

  Object.keys(mpOption.methods).forEach(key => {
    Element.prototype[key] = mpOption.methods[key]
  })

  function css() {
    return rpx2px(componentCss)
  }

  function render() {
  
  return h('span',null,[`I am child component`])

}

  customElements.define('my-child', Element)
          
  class Element extends WeElement {
    data = mpOption.data

    render = render

    css = css

    beforeRender() {}

    beforeUpdate() {}

    afterUpdate() {}

    install = function() {
      mpOption.created && mpOption.created.call(this)
      Object.keys(mpOption.methods).forEach(key => {
        if(typeof mpOption.methods[key] === 'function'){
          this[key] = mpOption.methods[key].bind(this)
        }
      })
    }

    uninstall = mpOption.detached || function() {}

    installed = function() {
      mpOption.attached && mpOption.attached.call(this)
      mpOption.ready && mpOption.ready.call(this)
    }

    triggerEvent = function(name, data) {
      this.fire(name, data)
    }

    setData = setData
  }

  Object.keys(mpOption.methods).forEach(key => {
    Element.prototype[key] = mpOption.methods[key]
  })

  function css() {
    return rpx2px(componentCss)
  }

  function render() {
  
  return h('span',null,[`I am child component`])

}

  customElements.define('my-child', Element)
          
  class Element extends WeElement {
    data = mpOption.data

    render = render

    css = css

    beforeRender() {}

    beforeUpdate() {}

    afterUpdate() {}

    install = function() {
      mpOption.created && mpOption.created.call(this)
      Object.keys(mpOption.methods).forEach(key => {
        if(typeof mpOption.methods[key] === 'function'){
          this[key] = mpOption.methods[key].bind(this)
        }
      })
    }

    uninstall = mpOption.detached || function() {}

    installed = function() {
      mpOption.attached && mpOption.attached.call(this)
      mpOption.ready && mpOption.ready.call(this)
    }

    triggerEvent = function(name, data) {
      this.fire(name, data)
    }

    setData = setData
  }

  Object.keys(mpOption.methods).forEach(key => {
    Element.prototype[key] = mpOption.methods[key]
  })

  function css() {
    return rpx2px(componentCss)
  }

  function render() {
  
  return h('span',null,[`I am child component`])

}

  customElements.define('my-child', Element)
          
  class Element extends WeElement {
    data = mpOption.data

    render = render

    css = css

    beforeRender() {}

    beforeUpdate() {}

    afterUpdate() {}

    install = function() {
      mpOption.created && mpOption.created.call(this)
      Object.keys(mpOption.methods).forEach(key => {
        if(typeof mpOption.methods[key] === 'function'){
          this[key] = mpOption.methods[key].bind(this)
        }
      })
    }

    uninstall = mpOption.detached || function() {}

    installed = function() {
      mpOption.attached && mpOption.attached.call(this)
      mpOption.ready && mpOption.ready.call(this)
    }

    triggerEvent = function(name, data) {
      this.fire(name, data)
    }

    setData = setData
  }

  Object.keys(mpOption.methods).forEach(key => {
    Element.prototype[key] = mpOption.methods[key]
  })

  function css() {
    return rpx2px(componentCss)
  }

  function render() {
  
  return h('span',null,[`I am child component`])

}

  customElements.define('my-child', Element)
          
  class Element extends WeElement {
    data = mpOption.data

    render = render

    css = css

    beforeRender() {}

    beforeUpdate() {}

    afterUpdate() {}

    install = function() {
      mpOption.created && mpOption.created.call(this)
      Object.keys(mpOption.methods).forEach(key => {
        if(typeof mpOption.methods[key] === 'function'){
          this[key] = mpOption.methods[key].bind(this)
        }
      })
    }

    uninstall = mpOption.detached || function() {}

    installed = function() {
      mpOption.attached && mpOption.attached.call(this)
      mpOption.ready && mpOption.ready.call(this)
    }

    triggerEvent = function(name, data) {
      this.fire(name, data)
    }

    setData = setData
  }

  Object.keys(mpOption.methods).forEach(key => {
    Element.prototype[key] = mpOption.methods[key]
  })

  function css() {
    return rpx2px(componentCss)
  }

  function render() {
  
  return h('span',null,[`I am child component`])

}

  customElements.define('my-child', Element)
          