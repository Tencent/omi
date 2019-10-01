import {
  useState,
  useCallback
} from 'react'
import obaa from './obaa'

function useForceUpdate() {
  const [, setTick] = useState(0)

  const update = useCallback(() => {
    setTick(tick => tick + 1)
  }, [])

  return update
}

export default function omis(options) {

  if (options.store) {
    omis.store = options.store

  }
  if (options.use) {

  }

  //https://github.com/mobxjs/mobx-react-lite/blob/master/src/useObserver.ts


  //  setInterval(()=>{
  //  // forceUpdate()
  //  },2000)
  return (props, ref) => {

    const wantedForceUpdateHook = options.useForceUpdate || useForceUpdate
    const forceUpdate = wantedForceUpdateHook()

    if (omis.store.data && !omis.store.___$observe_) {
      omis.store.___$observe_ = true
      obaa(omis.store.data, (a, b, c, d, e) => {
        console.log(a, b, c, d, e)
        forceUpdate()
      })
    }

    //如果没有监听，就进行监听，保证监听一次
    // setInterval(()=>{

    //   forceUpdate()
    // },2000)
    return options.render(props, ref)
  }
}



omis.useInstances = []
omis.useSelfInstances = []





//const Context = React.createContext();
