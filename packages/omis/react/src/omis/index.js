import {
  useState,
  useCallback
} from 'react'
import obaa from './obaa'
import {
  getPath,
  needUpdate
} from './path'

function useForceUpdate() {
  const [, setTick] = useState(0)

  const update = useCallback(() => {
    setTick(tick => tick + 1)
  }, [])

  return update
}

function Omis(options) {
  const updatePath = options.use ? getPath(options.use) : null
  this.options = options
  if (options.store) {
    omis.store = options.store
    obaa(omis.store.data, (prop, val, old, path) => {

      // if (updatePath && needUpdate(path + '-' + prop, updatePath)) {
      this.forceUpdate()
      // }

    })
  }
}

Omis.prototype = {
  render: function () {
    return (props, ref) => {
      console.log(this.options)
      this.forceUpdate = useForceUpdate()

      return this.options.render(props, ref)
    }
  }
}

export default function omis(options) {
  const o = new Omis(options)
  return o.render.call(o)
}




//const Context = React.createContext();

//https://github.com/mobxjs/mobx-react-lite/blob/master/src/useObserver.ts
